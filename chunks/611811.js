n.d(t, { Z: () => u });
var i = n(442837),
    l = n(509613),
    s = n(960412),
    o = n(151662),
    a = n(930441),
    r = n(388032);
let u = (0, l.ax)("UnsubscribeFromAllMarketingEmails", {
    useTitle: () => r.intl.string(r.t.Ra9Pws),
    useSubtitle: () => r.intl.string(r.t.iYjQ8f),
    useLabel: () => r.intl.string(r.t.KT1pBA),
    useVariant: () => "critical-secondary",
    useDisabled: () => {
        let { categories: e } = (0, i.cj)([o.Z], () => o.Z.getEmailSettings());
        return a.M0.every((t) => !e[t]);
    },
    onClick: () => (0, s.oc)(),
});
