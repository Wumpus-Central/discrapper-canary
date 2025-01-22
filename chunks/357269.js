r.r(n),
    r.d(n, {
        default: function () {
            return c;
        }
    });
var i = r(47120);
var a = r(757143);
var o = r(593473),
    s = r(981631);
let l = '_',
    u = /-/g;
function c(e) {
    let [, , n, r] = e.split('/'),
        i = null == n ? void 0 : n.toUpperCase().replace(u, l),
        a = null == r ? void 0 : r.toUpperCase().replace(u, l);
    if (s.oAB.hasOwnProperty(i) && (null == a || '' === a || s.oAB.hasOwnProperty(a))) {
        let { source: e } = (0, o.parse)(location.search);
        return {
            source: e,
            section: s.oAB[i],
            subsection: a
        };
    }
    return null;
}
