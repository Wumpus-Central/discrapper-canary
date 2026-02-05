"use strict";
n.d(t, { Mj: () => h, mU: () => _, tB: () => x });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(314116),
    a = n(397927),
    o = n(591552),
    d = n(961973),
    c = n(527678),
    u = n(655943),
    m = n(539916),
    g = n(985018);
function x(e, t) {
    let n = (0, l.yK)([u.A], () => (0, d.G4)(e, t, u.A.editedOnboardingPrompts));
    return [(0, l.yK)([u.A], () => (0, d.G4)(e, t, u.A.editedOnboardingPrompts, d.VU)), n];
}
function h(e) {
    let t = (0, l.bG)([o.A], () => o.A.isAdvancedMode(e)),
        [n] = [(0, l.yK)([o.A], () => (0, d.G4)(e, o.A.getDefaultChannelIds(e), o.A.getOnboardingPrompts(e), d.VU))];
    return !!t && n.length >= m.Kd;
}
function _(e) {
    let { guildId: t, className: n } = e,
        d = (0, l.bG)([o.A], () => o.A.isAdvancedMode(t)),
        u = s.useCallback(() => {
            let e = d ? m.SD.ONBOARDING_DEFAULT : m.SD.ONBOARDING_ADVANCED;
            d
                ? (0, r.A)({
                      title: g.intl.string(g.t["49+ONj"]),
                      subtitle: g.intl.string(g.t.TLkoOt),
                      variant: "primary",
                      confirmText: g.intl.string(g.t.R9GHya),
                      onConfirm: () => (0, c.CP)(t, e),
                  })
                : (0, r.A)({
                      title: g.intl.string(g.t.YB9xUF),
                      subtitle: g.intl.string(g.t.BcGGVn),
                      variant: "primary",
                      confirmText: g.intl.string(g.t.ts6u6r),
                      onConfirm: () => (0, c.CP)(t, e),
                  });
        }, [t, d]);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(a.MzZ, {
            onClick: u,
            children: (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: d ? g.intl.string(g.t.OmpxWy) : g.intl.string(g.t.ozsQBC),
            }),
        }),
    });
}
