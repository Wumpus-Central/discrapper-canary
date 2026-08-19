r.d(t, { A: () => i, Q: () => a });
var l = r(477900);
r(582128);
var n = r(304578),
    s = r(798549);
let a = "searchToken";
function i(e) {
    let { attributes: t, children: r, leaf: i } = e,
        c = i[a];
    return c === n.v1.FILTER
        ? (0, l.jsx)("span", { ...t, className: s.nM, children: r })
        : c === n.v1.ANSWER
          ? (0, l.jsx)("span", { ...t, className: s.pB, children: r })
          : (0, l.jsx)("span", { ...t, children: r });
}
