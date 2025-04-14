n.r(t), n.d(t, { default: () => d }), n(704826), n(35282), n(388685);
var r = n(593473),
    i = n(981631);
let o = '_',
    a = /(-|%20)/g,
    s = 'AND',
    l = /%26/g,
    c = { THE_LAST_MEADOW: 'CLICKER_GAME' };
function u(e) {
    return null == e ? '' : e.toUpperCase().replace(a, o).replace(l, s);
}
function d(e) {
    var t;
    let [, , n, o] = e.split('/'),
        a = u(n),
        s = null != (t = c[a]) ? t : a,
        l = u(o);
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
