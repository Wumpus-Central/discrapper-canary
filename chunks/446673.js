n.d(t, {
    C: () => d,
    R: () => u,
});
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(580309);
let c = (e) => {
    switch (e) {
        case "new":
            return s.intl.string(s.t.y2b7CA);
        case "beta":
            return s.intl.string(s.t.oW0eUV);
        case "early_access":
            return s.intl.string(s.t.EYxi0t);
        case "free_trial":
            return s.intl.string(s.t.IBYG5e);
        default:
            return e.text;
    }
};
function u(e) {
    return "string" == typeof e || e.hasOwnProperty("text") ? { type: e } : e;
}
function d(e) {
    let { type: t, variant: n = "default" } = e;
    return (0, r.jsx)(o.Text, {
        variant: "eyebrow",
        className: a()(l.badge, l[n]),
        children: c(t),
    });
}
