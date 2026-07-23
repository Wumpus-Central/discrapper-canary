s.d(t, { A: () => i, Q: () => a });
var l = s(627968);
s(64700);
var r = s(304578),
    n = s(84604);
let a = "searchToken";
function i(e) {
    let { attributes: t, children: s, leaf: i } = e,
        o = i[a];
    return o === r.v1.FILTER
        ? (0, l.jsx)("span", { ...t, className: n.nM, children: s })
        : o === r.v1.ANSWER
          ? (0, l.jsx)("span", { ...t, className: n.pB, children: s })
          : (0, l.jsx)("span", { ...t, children: s });
}
