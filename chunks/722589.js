n.r(t), n.d(t, { default: () => u }), n(704826), n(35282), n(388685);
var r = n(593473),
    i = n(981631);
let a = "_",
    o = /(-|%20)/g,
    s = "AND",
    l = /%26/g;
function c(e) {
    return null == e ? "" : e.toUpperCase().replace(o, a).replace(l, s);
}
function u(e, t) {
    let [, , n, a] = e.split("/"),
        o = c(n),
        s = c(a),
        l = i.oAB.hasOwnProperty(o),
        u = null == s || "" === s || i.oAB.hasOwnProperty(s);
    return l && u
        ? {
              params: (0, r.parse)(null != t ? t : location.search),
              section: i.oAB[o],
              subsection: s,
          }
        : null;
}
