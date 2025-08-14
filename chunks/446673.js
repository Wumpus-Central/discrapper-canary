n.d(t, { C: () => l });
var r = n(255367),
    i = n(481060),
    o = n(388032),
    a = n(580309);
let s = (e) => {
    switch (e) {
        case "new":
            return o.intl.string(o.t.y2b7CA);
        case "beta":
            return o.intl.string(o.t.oW0eUV);
        case "early_access":
            return o.intl.string(o.t.EYxi0t);
        case "free_trial":
            return o.intl.string(o.t.IBYG5e);
        default:
            return e.text;
    }
};
function l(e) {
    let { badge: t } = e;
    return (0, r.jsx)(i.Text, {
        variant: "eyebrow",
        className: a.badge,
        children: s(t),
    });
}
