var r = n(466312),
    i = n(279636),
    a = n(738719),
    o = n(581079),
    s = n(108993),
    l = n(467159);
function c(e) {
    for (
        ;
        e.firstChild && ((s(e.firstChild) && "true" === e.firstChild.getAttribute("data-blocks")) || i(e.firstChild));
    )
        e = e.firstChild;
    return e;
}
function u(e) {
    for (; e.lastChild && ((s(e.lastChild) && "true" === e.lastChild.getAttribute("data-blocks")) || i(e.lastChild)); )
        e = e.lastChild;
    return e;
}
function d(e, t, n) {
    var a = t,
        d = r(a);
    if (
        (null != d || (e && (e === a || e.firstChild === a)) || o(!1),
        e === a &&
            (s((a = a.firstChild)) || o(!1),
            "true" !== a.getAttribute("data-contents") && o(!1),
            n > 0 && (n = a.childNodes.length)),
        0 === n)
    ) {
        var _ = null;
        return {
            key: (_ = null != d ? d : l(i(c(a)))),
            offset: 0,
        };
    }
    var p = a.childNodes[n - 1],
        h = null,
        m = null;
    if (i(p)) {
        var g = u(p);
        (h = l(i(g))), (m = f(g));
    } else (h = l(d)), (m = f(p));
    return {
        key: h,
        offset: m,
    };
}
function f(e) {
    var t = e.textContent;
    return "\n" === t ? 0 : t.length;
}
e.exports = function (e, t, n, i, o, s) {
    var c = n.nodeType === Node.TEXT_NODE,
        u = o.nodeType === Node.TEXT_NODE;
    if (c && u)
        return {
            selectionState: a(e, l(r(n)), i, l(r(o)), s),
            needsRecovery: !1,
        };
    var f = null,
        _ = null,
        p = !0;
    return (
        c
            ? ((f = {
                  key: l(r(n)),
                  offset: i,
              }),
              (_ = d(t, o, s)))
            : u
              ? ((_ = {
                    key: l(r(o)),
                    offset: s,
                }),
                (f = d(t, n, i)))
              : ((f = d(t, n, i)),
                (_ = d(t, o, s)),
                n === o && i === s && (p = !!n.firstChild && "BR" !== n.firstChild.nodeName)),
        {
            selectionState: a(e, f.key, f.offset, _.key, _.offset),
            needsRecovery: p,
        }
    );
};
