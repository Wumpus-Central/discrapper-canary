n.d(t, { Z: () => c });
var l = n(442837),
    i = n(509613),
    r = n(960412),
    s = n(151662),
    a = n(869235),
    o = n(930441),
    u = n(388032);
let c = (0, i.ax)(a.t.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
    useTitle: () => u.intl.string(u.t.Ra9Pws),
    useSubtitle: () => u.intl.string(u.t.iYjQ8f),
    useLabel: () => u.intl.string(u.t.KT1pBA),
    useVariant: () => "critical-secondary",
    useDisabled: () => {
        let { categories: e } = (0, l.cj)([s.Z], () => s.Z.getEmailSettings());
        return o.M0.every((t) => !e[t]);
    },
    onClick: () => (0, r.oc)(),
});
