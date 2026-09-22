t.d(e, { c_: () => d, dn: () => r, iz: () => u, k5: () => s, tq: () => a });
var o = t(721779),
    l = t(659674),
    i = t(581619);
let a = { linkCount: 0, onlyLinks: !1 };
function r(n, e) {
    let t = 0;
    for (let o of n) {
        if (!e(o)) return { linkCount: t, onlyLinks: !1 };
        t += 1;
    }
    return { linkCount: t, onlyLinks: !0 };
}
function s(n) {
    if (1 !== n.length) return !1;
    let e = n[0];
    return i.h5.has(e.type) && (0, l.NV)(e);
}
function u(n) {
    let { linkCount: e, onlyLinks: t } = n;
    return t && 1 === e;
}
function d(n, e) {
    let { onlyLinkContent: t, stripGameServerShareLinks: l } = e;
    return (!!t && null != (0, o.ts)(n)) || (l && null != (0, o.$9)(n));
}
