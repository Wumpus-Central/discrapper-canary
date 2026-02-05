n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    s = n(158954),
    r = n(311907),
    l = n(990078),
    o = n(397927),
    d = n(793574),
    c = n(665171),
    u = n(522055),
    m = n(895770),
    _ = n(355609),
    x = n(843095),
    g = n(800007),
    f = n(294726),
    v = n(985018),
    j = n(979402);
let h = { ...g.ZN, initialStep: g.HS.SERVER_SETTINGS };
function p(e) {
    let { guildId: t } = e;
    i.useEffect(() => {
        (0, c.z9)(t);
    }, [t]);
    let n = (0, r.bG)([u.A], () => u.A.getStateForGuild(t)),
        { catalog: p, instances: N } = i.useMemo(
            () => ({ catalog: Object.values(n?.catalog ?? {}), instances: Object.values(n?.instances ?? {}) }),
            [n?.catalog, n?.instances],
        ),
        A = N.length >= g.ZI;
    return 0 === p.length
        ? (0, a.jsx)("div", {
              className: j.kL,
              children: (0, a.jsx)(o.y$y, { type: o.tVU.SPINNING_CIRCLE, className: j.u1 }),
          })
        : (0, a.jsxs)("div", {
              className: j.kL,
              children: [
                  (0, a.jsx)(s.DZT, {
                      className: j.R_,
                      variant: "heading-md/semibold",
                      children: v.intl.string(f.default["3vWDMz"]),
                  }),
                  A && (0, a.jsx)("div", { className: j.Bq, children: (0, a.jsx)(_.k, {}) }),
                  (0, a.jsx)(s.IpV, {
                      className: j.nd,
                      children: (0, a.jsx)("div", {
                          className: j.Y_,
                          children: p.map((e, n) =>
                              (0, a.jsx)(
                                  l.m,
                                  {
                                      asContainer: !0,
                                      text: e.disabled
                                          ? v.intl.formatToPlainString(f.default.uVpJYf, { gameName: e.name })
                                          : null,
                                      position: "top",
                                      children: (0, a.jsx)(m.A, {
                                          guildId: t,
                                          game: e,
                                          onClick: () =>
                                              (0, x.A)({
                                                  guildId: t,
                                                  stepConfig: h,
                                                  initialGameServerGame: e,
                                                  analyticsLocation: d.A.GAME_SERVER_PAGE_SIDEBAR,
                                              }),
                                          imageClassName: j.Sl,
                                          titleClassName: j.DD,
                                          disabled: A || e.disabled,
                                          location: d.A.GAME_SERVER_PAGE_SIDEBAR,
                                      }),
                                  },
                                  `sidebar-game-${n}-${e.id}`,
                              ),
                          ),
                      }),
                  }),
              ],
          });
}
