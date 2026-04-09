n.d(t, { i: () => u });
var i = n(311907),
    s = n(314116),
    l = n(98207),
    a = n(419954),
    r = n(961350),
    o = n(87707),
    d = n(780964),
    c = n(985018);
let u = (0, a.Tf)(d.X.AUTHENTICATOR_APP_DISABLE_BUTTON, {
    useTitle: () => c.intl.string(c.t.lQsY7B),
    useSubtitle: () => (0, o.DX)(!0),
    useDisabled: () => null !== (0, o.DX)(!0),
    useLabel: () => c.intl.string(c.t.N86XcP),
    useVariant: () => "critical-secondary",
    usePredicate: () => {
        let e = (0, i.bG)([r.default], () => r.default.hasTOTPEnabled()),
            t = (0, o.dI)() === o.gW.AVAILABLE;
        return e && t;
    },
    onClick: () =>
        void (0, s.A)({
            title: c.intl.string(c.t["D+aE7g"]),
            subtitle: c.intl.string(c.t.EA4ZEk),
            variant: "critical",
            confirmText: c.intl.string(c.t.N86XcP),
            onConfirm: () => l.A.disable(),
        }),
});
