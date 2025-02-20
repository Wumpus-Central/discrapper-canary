n.r(t), n.d(t, { default: () => s }), n(47120), n(301563), n(757143);
var r = n(593473),
    i = n(981631);
let o = '_',
    a = /-/g;
function s(e) {
    let [, , t, n] = e.split('/'),
        s = null == t ? void 0 : t.toUpperCase().replace(a, o),
        l = null == n ? void 0 : n.toUpperCase().replace(a, o);
    if (i.oAB.hasOwnProperty(s) && (null == l || '' === l || i.oAB.hasOwnProperty(l))) {
        let { source: e } = (0, r.parse)(location.search);
        return {
            source: e,
            section: i.oAB[s],
            subsection: l
        };
    }
    return null;
}
