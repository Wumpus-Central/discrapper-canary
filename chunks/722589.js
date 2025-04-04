n.r(t), n.d(t, { default: () => l }), n(47120), n(301563), n(757143);
var r = n(593473),
    i = n(981631);
let o = '_',
    a = /-/g,
    s = { THE_LAST_MEADOW: 'CLICKER_GAME' };
function l(e) {
    var t;
    let [, , n, l] = e.split('/'),
        c = null == n ? void 0 : n.toUpperCase().replace(a, o),
        u = null != (t = s[c]) ? t : c,
        d = null == l ? void 0 : l.toUpperCase().replace(a, o);
    if (i.oAB.hasOwnProperty(u) && (null == d || '' === d || i.oAB.hasOwnProperty(d))) {
        let { source: e } = (0, r.parse)(location.search);
        return {
            source: e,
            section: i.oAB[u],
            subsection: d
        };
    }
    return null;
}
