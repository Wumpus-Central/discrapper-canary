var r = n(833866),
    i = n(949235),
    a = n(169774),
    o = n(808570),
    s = n(924125),
    l = n(258329),
    c = n(581079),
    u = n(108993),
    d = a.isBrowser("IE");
function f(e, t) {
    if (!e) return "[empty]";
    var n = _(e, t);
    return n.nodeType === Node.TEXT_NODE ? n.textContent : (u(n) || c(!1), n.outerHTML);
}
function _(e, t) {
    var n = void 0 !== t ? t(e) : [];
    if (e.nodeType === Node.TEXT_NODE) {
        var r = e.textContent.length;
        return l(e).createTextNode("[text " + r + (n.length ? " | " + n.join(", ") : "") + "]");
    }
    var i = e.cloneNode();
    1 === i.nodeType && n.length && i.setAttribute("data-labels", n.join(", "));
    for (var a = e.childNodes, o = 0; o < a.length; o++) i.appendChild(_(a[o], t));
    return i;
}
function p(e, t) {
    for (var n = e, r = n; n; )
        if (u(n) && r.hasAttribute("contenteditable")) return f(n, t);
        else r = n = n.parentNode;
    return "Could not find contentEditable parent of node";
}
function h(e) {
    return null === e.nodeValue ? e.childNodes.length : e.nodeValue.length;
}
function m(e, t, n, r) {
    var a = s();
    if (e.extend && o(a, t)) {
        n > h(t) &&
            i.logSelectionStateFailure({
                anonymizedDom: p(t),
                extraParams: JSON.stringify({ offset: n }),
                selectionState: JSON.stringify(r.toJS()),
            });
        var l = t === e.focusNode;
        try {
            e.extend(t, n);
        } catch (o) {
            throw (
                (i.logSelectionStateFailure({
                    anonymizedDom: p(t, function (t) {
                        var n = [];
                        return (
                            t === a && n.push("active element"),
                            t === e.anchorNode && n.push("selection anchor node"),
                            t === e.focusNode && n.push("selection focus node"),
                            n
                        );
                    }),
                    extraParams: JSON.stringify(
                        {
                            activeElementName: a ? a.nodeName : null,
                            nodeIsFocus: t === e.focusNode,
                            nodeWasFocus: l,
                            selectionRangeCount: e.rangeCount,
                            selectionAnchorNodeName: e.anchorNode ? e.anchorNode.nodeName : null,
                            selectionAnchorOffset: e.anchorOffset,
                            selectionFocusNodeName: e.focusNode ? e.focusNode.nodeName : null,
                            selectionFocusOffset: e.focusOffset,
                            message: o ? "" + o : null,
                            offset: n,
                        },
                        null,
                        2,
                    ),
                    selectionState: JSON.stringify(r.toJS(), null, 2),
                }),
                o)
            );
        }
    } else if (e.rangeCount > 0) {
        var c = e.getRangeAt(0);
        c.setEnd(t, n), e.addRange(c.cloneRange());
    }
}
function g(e, t, n, a) {
    var o = l(t).createRange();
    if (
        (n > h(t) &&
            (i.logSelectionStateFailure({
                anonymizedDom: p(t),
                extraParams: JSON.stringify({ offset: n }),
                selectionState: JSON.stringify(a.toJS()),
            }),
            r.handleExtensionCausedError()),
        o.setStart(t, n),
        d)
    )
        try {
            e.addRange(o);
        } catch (e) {}
    else e.addRange(o);
}
e.exports = {
    setDraftEditorSelection: function (e, t, n, r, i) {
        var a = l(t);
        if (o(a.documentElement, t)) {
            var s = a.defaultView.getSelection(),
                c = e.getAnchorKey(),
                u = e.getAnchorOffset(),
                d = e.getFocusKey(),
                f = e.getFocusOffset(),
                _ = e.getIsBackward();
            if (!s.extend && _) {
                var p = c,
                    h = u;
                (c = d), (u = f), (d = p), (f = h), (_ = !1);
            }
            var E = c === n && r <= u && i >= u,
                b = d === n && r <= f && i >= f;
            if (E && b) {
                s.removeAllRanges(), g(s, t, u - r, e), m(s, t, f - r, e);
                return;
            }
            if (_) {
                if ((b && (s.removeAllRanges(), g(s, t, f - r, e)), E)) {
                    var y = s.focusNode,
                        O = s.focusOffset;
                    s.removeAllRanges(), g(s, t, u - r, e), m(s, y, O, e);
                }
            } else E && (s.removeAllRanges(), g(s, t, u - r, e)), b && m(s, t, f - r, e);
        }
    },
    addFocusToSelection: m,
};
