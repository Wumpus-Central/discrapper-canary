n.d(t, { Z: () => c });
var i = n(442837),
    r = n(509613),
    l = n(960412),
    o = n(151662),
    a = n(869235),
    s = n(930441),
    u = n(388032);
let c = (0, r.ax)(a.t.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
    useTitle: () => u.intl.string(u.t.Ra9Pws),
    useSubtitle: () => u.intl.string(u.t.iYjQ8f),
    useLabel: () => u.intl.string(u.t.KT1pBA),
    useVariant: () => "critical-secondary",
    useDisabled: () => {
        let { categories: e } = (0, i.cj)([o.Z], () => o.Z.getEmailSettings());
        return s.M0.every((t) => !e[t]);
    },
    onClick: () => (0, l.oc)(),
});
