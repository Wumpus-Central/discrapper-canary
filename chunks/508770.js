"use strict";
n.d(t, { E: () => c, U: () => d });
var i = n(477900),
    r = n(503698),
    a = n.n(r),
    s = n(460890),
    l = n(834730),
    o = n(963434);
function d(e) {
    return "string" == typeof e || e.hasOwnProperty("text") ? { type: e, variant: "brand" } : e;
}
function c(e) {
    let { type: t, variant: n = "default", icon: r } = e,
        { i18n: d } = (0, s.G9)(),
        c = (function (e, t) {
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
        })(t, d);
    return (0, i.jsxs)(l.E, {
        variant: "eyebrow",
        className: a()(o.badge, o[n]),
        children: [
            null != r && (0, i.jsx)(r, { size: "xxs", color: "currentColor" }),
            (0, i.jsx)("span", { className: o.label, children: c }),
        ],
    });
}
