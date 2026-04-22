n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(320176),
    o = n(834730),
    d = n(311907),
    u = n(821609),
    c = n(793574),
    _ = n(890942),
    m = n(744201),
    p = n(522055),
    A = n(881756),
    x = n(793506),
    g = n(843095),
    f = n(568065),
    h = n(800007),
    v = n(76660),
    E = n(985018),
    S = n(594233),
    I = n(607204);
function b(e) {
    let { guildId: t } = e,
        n = i.useRef(null),
        { state: l, lowestGameServerCost: b } = (0, d.cf)([p.A], () => ({
            state: p.A.getStateForGuild(t),
            lowestGameServerCost: p.A.getLowestGameCostForGuild(t),
        })),
        j = (0, x.A)(t),
        { gameName: C, gameName2: w } = (0, A.A)(),
        { textColor: L } = (0, m.A)(j?.type === "active");
    return null == l
        ? null
        : (0, r.jsxs)(_.NI, {
              label: E.intl.string(v.default["B3OfL/"]),
              badge: f.ys[h.W5],
              isActive: j?.type === "active",
              isWarning: j?.type === "expiring",
              onClick: () => (0, g.A)({ guildId: t, analyticsLocation: c.A.GUILD_POWERUPS_OVERVIEW }),
              children: [
                  (0, r.jsx)("div", {
                      className: s()(I.ZS, S.Sl),
                      children: (0, r.jsx)(a.E, {
                          withReducedMotion: "halt",
                          eventTargetRef: n,
                          className: I.Sl,
                          fit: "contain",
                          stateMachine: "SM_Main_Int",
                      }),
                  }),
                  (0, r.jsx)(_.Ft, {
                      title: E.intl.string(v.default["B3OfL/"]),
                      textColor: L,
                      footer: (0, r.jsx)(_.$L, { cost: b ?? 0, costDecorator: "+", status: j }),
                      children: (0, r.jsx)(o.E, {
                          className: S.h_,
                          color: L,
                          variant: "text-sm/medium",
                          children: E.intl.format(v.default["+UqyGU"], { gameName: C, gameName2: w }),
                      }),
                  }),
                  (0, r.jsx)(_.kd, {
                      children: (0, r.jsx)(u.$, {
                          variant: "primary",
                          fullWidth: !0,
                          text:
                              Object.values(l.entitlements).length > 0
                                  ? E.intl.string(v.default.PuvU5b)
                                  : E.intl.string(v.default.b62EHM),
                          onClick: (e) => {
                              e.stopPropagation(),
                                  (0, g.A)({ guildId: t, analyticsLocation: c.A.GUILD_POWERUPS_OVERVIEW });
                          },
                      }),
                  }),
              ],
          });
}
