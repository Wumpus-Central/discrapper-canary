n.d(t, { Z: () => u });
var i = n(442837),
    l = n(509613),
    s = n(960412),
    o = n(151662),
    r = n(930441),
    a = n(388032);
let u = (0, l.ax)("UnsubscribeFromAllMarketingEmails", {
    useTitle: () => a.intl.string(a.t.Ra9Pws),
    useSubtitle: () => a.intl.string(a.t.iYjQ8f),
    useLabel: () => a.intl.string(a.t.KT1pBA),
    useVariant: () => "critical-secondary",
    useDisabled: () => {
        let { categories: e } = (0, i.cj)([o.Z], () => o.Z.getEmailSettings());
        return r.M0.every((t) => !e[t]);
    },
    onClick: () => (0, s.oc)(),
});
