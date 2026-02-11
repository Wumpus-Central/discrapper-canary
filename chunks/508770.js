"use strict";
n.d(t, { E: () => d, U: () => c });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(460890),
    o = n(834730),
    l = n(62022);
let u = (e, t) => {
    switch (e) {
        case "new":
            return t.NEW;
        case "beta":
            return t.BETA;
        case "early_access":
            return t.EARLY_ACCESS;
        case "free_trial":
            return t.BILLING_TRIAL_FREE_TRIAL_TEXT;
        default:
            return e.text;
    }
};
function c(e) {
    return "string" == typeof e || e.hasOwnProperty("text") ? { type: e, variant: "brand" } : e;
}
function d(e) {
    let { type: t, variant: n = "default", icon: i } = e,
        { i18n: c } = (0, s.G9)();
    return (0, r.jsxs)(o.E, {
        variant: "eyebrow",
        className: a()(l.badge, l[n]),
        children: [null != i && (0, r.jsx)(i, { size: "xxs", color: "currentColor" }), u(t, c)],
    });
}
