n.d(t, { Z: () => c });
var i = n(442837),
    a = n(281215),
    o = n(960412),
    s = n(151662),
    l = n(930441),
    r = n(388032);
let c = (0, a.ax)('UnsubscribeFromAllMarketingEmails', {
    useTitle: () => r.intl.string(r.t.Ra9Pws),
    useSubtitle: () => r.intl.string(r.t.iYjQ8f),
    useLabel: () => r.intl.string(r.t.KT1pBA),
    useVariant: () => 'critical-secondary',
    useDisabled: () => {
        let { categories: e } = (0, i.cj)([s.Z], () => s.Z.getEmailSettings());
        return l.M0.every((t) => !e[t]);
    },
    onClick: () => (0, o.oc)()
});
