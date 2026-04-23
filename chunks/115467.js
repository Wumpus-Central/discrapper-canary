n.d(t, { i: () => c });
var i = n(311907),
    s = n(314116),
    l = n(98207),
    a = n(419954),
    r = n(961350),
    o = n(87707),
    d = n(780964),
    u = n(985018);
let c = (0, a.Tf)(d.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
    useTitle: () => u.intl.string(u.t.lQsY7B),
    useSubtitle: () => (0, o.DX)(!0),
    useDisabled: () => null !== (0, o.DX)(!0),
    useLabel: () => u.intl.string(u.t.N86XcP),
    useVariant: () => "critical-secondary",
    usePredicate: () => {
        let e = (0, i.bG)([r.default], () => r.default.hasTOTPEnabled()),
            t = (0, o.dI)() === o.gW.AVAILABLE;
        return e && t;
    },
    onClick: () =>
        void (0, s.A)({
            title: u.intl.string(u.t["D+aE7g"]),
            subtitle: u.intl.string(u.t.EA4ZEk),
            variant: "critical",
            confirmText: u.intl.string(u.t.N86XcP),
            onConfirm: () => l.A.disable(),
        }),
});
