var r = n(587321),
    i = n(584606),
    a = n(692001),
    s = n(797686),
    o = n(494277),
    l = n(670200);

function c(e) {
    for (
        ;
        e.firstChild && ((o(e.firstChild) && "true" === e.firstChild.getAttribute("data-blocks")) || i(e.firstChild));
    )
        e = e.firstChild;
    return e;
}

function u(e) {
    for (; e.lastChild && ((o(e.lastChild) && "true" === e.lastChild.getAttribute("data-blocks")) || i(e.lastChild)); )
        e = e.lastChild;
    return e;
}

function d(e, t, n) {
    var a = t,
        d = r(a);
    if (
        (null != d || (e && (e === a || e.firstChild === a)) || s(!1),
        e === a &&
            (o((a = a.firstChild)) || s(!1),
            "true" !== a.getAttribute("data-contents") && s(!1),
            n > 0 && (n = a.childNodes.length)),
        0 === n)
    ) {
        var p = null;
        return {
            key: (p = null != d ? d : l(i(c(a)))),
            offset: 0,
        };
    }
    var _ = a.childNodes[n - 1],
        h = null,
        m = null;
    if (i(_)) {
        var g = u(_);
        (h = l(i(g))), (m = f(g));
    } else (h = l(d)), (m = f(_));
    return {
        key: h,
        offset: m,
    };
}

function f(e) {
    var t = e.textContent;
    return "\n" === t ? 0 : t.length;
}
e.exports = function (e, t, n, i, s, o) {
    var c = n.nodeType === Node.TEXT_NODE,
        u = s.nodeType === Node.TEXT_NODE;
    if (c && u)
        return {
            selectionState: a(e, l(r(n)), i, l(r(s)), o),
            needsRecovery: !1,
        };
    var f = null,
        p = null,
        _ = !0;
    return (
        c
            ? ((f = {
                  key: l(r(n)),
                  offset: i,
              }),
              (p = d(t, s, o)))
            : u
              ? ((p = {
                    key: l(r(s)),
                    offset: o,
                }),
                (f = d(t, n, i)))
              : ((f = d(t, n, i)),
                (p = d(t, s, o)),
                n === s && i === o && (_ = !!n.firstChild && "BR" !== n.firstChild.nodeName)),
        {
            selectionState: a(e, f.key, f.offset, p.key, p.offset),
            needsRecovery: _,
        }
    );
};
