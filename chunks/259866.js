n.d(t, {
    Mj: () => m,
    mU: () => p,
    tB: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(314116),
    a = n(397927),
    c = n(591552),
    o = n(961973),
    d = n(527678),
    u = n(655943),
    f = n(539916),
    g = n(985018);
function b(e, t) {
    let n = (0, l.yK)([u.A], () => (0, o.G4)(e, t, u.A.editedOnboardingPrompts));
    return [(0, l.yK)([u.A], () => (0, o.G4)(e, t, u.A.editedOnboardingPrompts, o.VU)), n];
}
function m(e) {
    let t = (0, l.bG)([c.A], () => c.A.isAdvancedMode(e)),
        [n] = [(0, l.yK)([c.A], () => (0, o.G4)(e, c.A.getDefaultChannelIds(e), c.A.getOnboardingPrompts(e), o.VU))];
    return !!t && n.length >= f.Kd;
}
function p(e) {
    let { guildId: t, className: n } = e,
        o = (0, l.bG)([c.A], () => c.A.isAdvancedMode(t)),
        u = i.useCallback(() => {
            let e = o ? f.SD.ONBOARDING_DEFAULT : f.SD.ONBOARDING_ADVANCED;
            o
                ? (0, s.A)({
                      title: g.intl.string(g.t["49+ONj"]),
                      subtitle: g.intl.string(g.t.TLkoOt),
                      variant: "primary",
                      confirmText: g.intl.string(g.t.R9GHya),
                      onConfirm: () => (0, d.CP)(t, e),
                  })
                : (0, s.A)({
                      title: g.intl.string(g.t.YB9xUF),
                      subtitle: g.intl.string(g.t.BcGGVn),
                      variant: "primary",
                      confirmText: g.intl.string(g.t.ts6u6r),
                      onConfirm: () => (0, d.CP)(t, e),
                  });
        }, [t, o]);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(a.MzZ, {
            onClick: u,
            children: (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: o ? g.intl.string(g.t.OmpxWy) : g.intl.string(g.t.ozsQBC),
            }),
        }),
    });
}
