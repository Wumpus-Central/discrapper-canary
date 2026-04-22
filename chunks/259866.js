n.d(t, { Mj: () => _, mU: () => p, tB: () => x });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    r = n(314116),
    a = n(349288),
    o = n(834730),
    d = n(591552),
    c = n(961973),
    u = n(527678),
    m = n(655943),
    g = n(539916),
    h = n(985018);
function x(e, t) {
    let n = (0, s.yK)([m.A], () => (0, c.G4)(e, t, m.A.editedOnboardingPrompts));
    return [(0, s.yK)([m.A], () => (0, c.G4)(e, t, m.A.editedOnboardingPrompts, c.VU)), n];
}
function _(e) {
    let t = (0, s.bG)([d.A], () => d.A.isAdvancedMode(e)),
        [n] = [(0, s.yK)([d.A], () => (0, c.G4)(e, d.A.getDefaultChannelIds(e), d.A.getOnboardingPrompts(e), c.VU))];
    return !!t && n.length >= g.Kd;
}
function p(e) {
    let { guildId: t, className: n } = e,
        c = (0, s.bG)([d.A], () => d.A.isAdvancedMode(t)),
        m = l.useCallback(() => {
            let e = c ? g.SD.ONBOARDING_DEFAULT : g.SD.ONBOARDING_ADVANCED;
            c
                ? (0, r.A)({
                      title: h.intl.string(h.t["49+ONj"]),
                      subtitle: h.intl.string(h.t.TLkoOt),
                      variant: "primary",
                      confirmText: h.intl.string(h.t.R9GHya),
                      onConfirm: () => (0, u.CP)(t, e),
                  })
                : (0, r.A)({
                      title: h.intl.string(h.t.YB9xUF),
                      subtitle: h.intl.string(h.t.BcGGVn),
                      variant: "primary",
                      confirmText: h.intl.string(h.t.ts6u6r),
                      onConfirm: () => (0, u.CP)(t, e),
                  });
        }, [t, c]);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(a.Anchor, {
            onClick: m,
            children: (0, i.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "text-link",
                children: c ? h.intl.string(h.t.OmpxWy) : h.intl.string(h.t.ozsQBC),
            }),
        }),
    });
}
