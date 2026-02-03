n.d(t, {
    E: () => d,
    U: () => u,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    o = n(460890),
    s = n(834730),
    l = n(769796);
let c = (e, t) => {
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

function u(e) {
    return "string" == typeof e || e.hasOwnProperty("text")
        ? {
              type: e,
              variant: "brand",
          }
        : e;
}

function d(e) {
    let { type: t, variant: n = "default", icon: i } = e,
        { i18n: u } = (0, o.G9)();
    return (0, r.jsxs)(s.E, {
        variant: "eyebrow",
        className: a()(l.badge, l[n]),
        children: [
            null != i &&
                (0, r.jsx)(i, {
                    size: "xxs",
                    color: "currentColor",
                }),
            c(t, u),
        ],
    });
}
