var n = r(620983),
    i = r(56797),
    o = r(169774),
    a = r(808570),
    u = r(924125),
    s = r(786064),
    c = r(581079),
    l = r(290724),
    f = o.isBrowser('IE');
function p(t, e) {
    for (var r = t, n = r; r; )
        if (l(r) && n.hasAttribute('contenteditable'))
            return (function (t, e) {
                if (!t) return '[empty]';
                var r = (function t(e, r) {
                    var n = void 0 !== r ? r(e) : [];
                    if (e.nodeType === Node.TEXT_NODE) {
                        var i = e.textContent.length;
                        return s(e).createTextNode('[text ' + i + (n.length ? ' | ' + n.join(', ') : '') + ']');
                    }
                    var o = e.cloneNode();
                    1 === o.nodeType && n.length && o.setAttribute('data-labels', n.join(', '));
                    for (var a = e.childNodes, u = 0; u < a.length; u++) o.appendChild(t(a[u], r));
                    return o;
                })(t, e);
                return r.nodeType === Node.TEXT_NODE ? r.textContent : (l(r) || c(!1), r.outerHTML);
            })(r, e);
        else n = r = r.parentNode;
    return 'Could not find contentEditable parent of node';
}
function h(t) {
    return null === t.nodeValue ? t.childNodes.length : t.nodeValue.length;
}
function d(t, e, r, n) {
    var o = u();
    if (t.extend && a(o, e)) {
        r > h(e) &&
            i.logSelectionStateFailure({
                anonymizedDom: p(e),
                extraParams: JSON.stringify({ offset: r }),
                selectionState: JSON.stringify(n.toJS())
            });
        var s = e === t.focusNode;
        try {
            t.extend(e, r);
        } catch (a) {
            throw (
                (i.logSelectionStateFailure({
                    anonymizedDom: p(e, function (e) {
                        var r = [];
                        return e === o && r.push('active element'), e === t.anchorNode && r.push('selection anchor node'), e === t.focusNode && r.push('selection focus node'), r;
                    }),
                    extraParams: JSON.stringify(
                        {
                            activeElementName: o ? o.nodeName : null,
                            nodeIsFocus: e === t.focusNode,
                            nodeWasFocus: s,
                            selectionRangeCount: t.rangeCount,
                            selectionAnchorNodeName: t.anchorNode ? t.anchorNode.nodeName : null,
                            selectionAnchorOffset: t.anchorOffset,
                            selectionFocusNodeName: t.focusNode ? t.focusNode.nodeName : null,
                            selectionFocusOffset: t.focusOffset,
                            message: a ? '' + a : null,
                            offset: r
                        },
                        null,
                        2
                    ),
                    selectionState: JSON.stringify(n.toJS(), null, 2)
                }),
                a)
            );
        }
    } else if (t.rangeCount > 0) {
        var c = t.getRangeAt(0);
        c.setEnd(e, r), t.addRange(c.cloneRange());
    }
}
function g(t, e, r, o) {
    var a = s(e).createRange();
    if (
        (r > h(e) &&
            (i.logSelectionStateFailure({
                anonymizedDom: p(e),
                extraParams: JSON.stringify({ offset: r }),
                selectionState: JSON.stringify(o.toJS())
            }),
            n.handleExtensionCausedError()),
        a.setStart(e, r),
        f)
    )
        try {
            t.addRange(a);
        } catch (t) {}
    else t.addRange(a);
}
t.exports = {
    setDraftEditorSelection: function (t, e, r, n, i) {
        var o = s(e);
        if (a(o.documentElement, e)) {
            var u = o.defaultView.getSelection(),
                c = t.getAnchorKey(),
                l = t.getAnchorOffset(),
                f = t.getFocusKey(),
                p = t.getFocusOffset(),
                h = t.getIsBackward();
            if (!u.extend && h) {
                var y = c,
                    v = l;
                (c = f), (l = p), (f = y), (p = v), (h = !1);
            }
            var m = c === r && n <= l && i >= l,
                _ = f === r && n <= p && i >= p;
            if (m && _) {
                u.removeAllRanges(), g(u, e, l - n, t), d(u, e, p - n, t);
                return;
            }
            if (h) {
                if ((_ && (u.removeAllRanges(), g(u, e, p - n, t)), m)) {
                    var b = u.focusNode,
                        S = u.focusOffset;
                    u.removeAllRanges(), g(u, e, l - n, t), d(u, b, S, t);
                }
            } else m && (u.removeAllRanges(), g(u, e, l - n, t)), _ && d(u, e, p - n, t);
        }
    },
    addFocusToSelection: d
};
