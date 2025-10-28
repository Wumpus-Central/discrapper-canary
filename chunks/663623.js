n.d(e, { Z: () => c });
var i = n(442837),
    l = n(509613),
    u = n(960412),
    r = n(151662),
    s = n(313789),
    o = n(930441),
    a = n(388032);
let c = (0, l.ax)(s.n.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
    useTitle: () => a.intl.string(a.t.Ra9Pwk),
    useSubtitle: () => a.intl.string(a.t.iYjQ8X),
    useLabel: () => a.intl.string(a.t.KT1pBA),
    useVariant: () => "critical-secondary",
    useDisabled: () => {
        let { categories: t } = (0, i.cj)([r.Z], () => r.Z.getEmailSettings());
        return o.M0.every((e) => !t[e]);
    },
    onClick: () => (0, u.oc)(),
});
