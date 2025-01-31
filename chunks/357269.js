n.r(t), n.d(t, { default: () => o }), n(47120), n(757143);
var i = n(593473),
    r = n(981631);
let a = '_',
    s = /-/g;
function o(e) {
    let [, , t, n] = e.split('/'),
        o = null == t ? void 0 : t.toUpperCase().replace(s, a),
        l = null == n ? void 0 : n.toUpperCase().replace(s, a);
    if (r.oAB.hasOwnProperty(o) && (null == l || '' === l || r.oAB.hasOwnProperty(l))) {
        let { source: e } = (0, i.parse)(location.search);
        return {
            source: e,
            section: r.oAB[o],
            subsection: l
        };
    }
    return null;
}
