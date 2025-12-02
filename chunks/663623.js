n.d(e, { Z: () => c });
var i = n(442837),
    l = n(509613),
    s = n(960412),
    r = n(151662),
    u = n(313789),
    a = n(930441),
    o = n(388032);
let c = (0, l.ax)(u.n.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
    useTitle: () => o.intl.string(o.t.Ra9Pwk),
    useSubtitle: () => o.intl.string(o.t.iYjQ8X),
    useLabel: () => o.intl.string(o.t.KT1pBA),
    useVariant: () => "critical-secondary",
    useDisabled: () => {
        let { categories: t } = (0, i.cj)([r.Z], () => r.Z.getEmailSettings());
        return a.M0.every((e) => !t[e]);
    },
    onClick: () => (0, s.oc)(),
});
