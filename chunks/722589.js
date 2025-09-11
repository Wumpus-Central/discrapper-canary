n.r(t), n.d(t, { default: () => d }), n(704826), n(35282), n(388685);
var r = n(593473),
    i = n(981631);
let a = "_",
    o = /(-|%20)/g,
    s = "AND",
    l = /%26/g,
    c = {};
function u(e) {
    return null == e ? "" : e.toUpperCase().replace(o, a).replace(l, s);
}
function d(e, t) {
    var n;
    let [, , a, o] = e.split("/"),
        s = u(a),
        l = null != (n = c[s]) ? n : s,
        d = u(o);
    return i.oAB.hasOwnProperty(l) && (null == d || "" === d || i.oAB.hasOwnProperty(d))
        ? {
              params: (0, r.parse)(null != t ? t : location.search),
              section: i.oAB[l],
              subsection: d,
          }
        : null;
}
