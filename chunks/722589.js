n.r(t), n.d(t, { default: () => d }), n(704826), n(35282), n(388685);
var r = n(593473),
    i = n(981631);
let a = '_',
    o = /(-|%20)/g,
    s = 'AND',
    l = /%26/g,
    c = { THE_LAST_MEADOW: 'CLICKER_GAME' };
function u(e) {
    return null == e ? '' : e.toUpperCase().replace(o, a).replace(l, s);
}
function d(e) {
    var t;
    let [, , n, a] = e.split('/'),
        o = u(n),
        s = null != (t = c[o]) ? t : o,
        l = u(a);
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
