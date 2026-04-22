"use strict";
n.d(t, { E: () => d, U: () => u });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(460890),
    o = n(834730),
    l = n(175501);
function u(e) {
    return "string" == typeof e || e.hasOwnProperty("text") ? { type: e, variant: "brand" } : e;
}
function d(e) {
    let { type: t, variant: n = "default", icon: i } = e,
        { i18n: u } = (0, a.G9)();
    return (0, r.jsxs)(o.E, {
        variant: "eyebrow",
        className: s()(l.badge, l[n]),
        children: [
            null != i && (0, r.jsx)(i, { size: "xxs", color: "currentColor" }),
            ((e, t) => {
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
            })(t, u),
        ],
    });
}
