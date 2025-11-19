n.d(t, {
    C: () => d,
    R: () => u,
});
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(402453),
    s = n(777207),
    l = n(331058);
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
    return "string" == typeof e || e.hasOwnProperty("text") ? { type: e } : e;
}
function d(e) {
    let { type: t, variant: n = "default" } = e,
        { i18n: i } = (0, o.ZF)();
    return (0, r.jsx)(s.x, {
        variant: "eyebrow",
        className: a()(l.badge, l[n]),
        children: c(t, i),
    });
}
