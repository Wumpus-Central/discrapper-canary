t.d(i, { A: () => p });
var l = t(477900);
t(582128);
var n = t(498032),
    a = t(62010),
    r = t(155718),
    s = t(105292),
    o = t(280193);
function p(e) {
    let { labelType: i, collapsed: t = !1 } = e;
    return i === r.Hr.NONE
        ? null
        : t
          ? (0, l.jsx)("span", { className: o.b, children: (0, l.jsx)(n.N, { variant: "notification", size: "lg" }) })
          : i === r.Hr.NEW
            ? (0, l.jsx)(a.E, { type: "new", variant: "primary" })
            : (0, l.jsx)(a.E, { type: { text: s.intl.string(s.t["/qdhkk"]) }, variant: "primary" });
}
