n.d(t, { Z: () => c });
var i = n(442837),
    o = n(509613),
    l = n(960412),
    r = n(151662),
    a = n(930441),
    s = n(388032);
let c = (0, o.ax)("UnsubscribeFromAllMarketingEmails", {
    useTitle: () => s.intl.string(s.t.Ra9Pws),
    useSubtitle: () => s.intl.string(s.t.iYjQ8f),
    useLabel: () => s.intl.string(s.t.KT1pBA),
    useVariant: () => "critical-secondary",
    useDisabled: () => {
        let { categories: e } = (0, i.cj)([r.Z], () => r.Z.getEmailSettings());
        return a.M0.every((t) => !e[t]);
    },
    onClick: () => (0, l.oc)(),
});
