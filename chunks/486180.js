n.d(t, { A: () => A });
var a = n(627968),
    s = n(64700),
    i = n(158954),
    l = n(311907),
    r = n(990078),
    d = n(397927),
    c = n(793574),
    o = n(665171),
    u = n(522055),
    _ = n(895770),
    m = n(355609),
    x = n(843095),
    g = n(800007),
    f = n(294726),
    v = n(985018),
    h = n(979402);
let j = { ...g.ZN, initialStep: g.HS.SERVER_SETTINGS };
function A(e) {
    let { guildId: t, isAdmin: n } = e;
    s.useEffect(() => {
        (0, o.z9)(t);
    }, [t]);
    let A = (0, l.bG)([u.A], () => u.A.getStateForGuild(t)),
        { catalog: p, instances: C } = s.useMemo(
            () => ({ catalog: Object.values(A?.catalog ?? {}), instances: Object.values(A?.instances ?? {}) }),
            [A?.catalog, A?.instances],
        ),
        b = C.length >= g.ZI;
    return 0 === p.length
        ? (0, a.jsx)("div", {
              className: h.kL,
              children: (0, a.jsx)(d.y$y, { type: d.tVU.SPINNING_CIRCLE, className: h.u1 }),
          })
        : (0, a.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, a.jsx)(i.DZT, {
                      className: h.R_,
                      variant: "heading-md/semibold",
                      children: v.intl.string(n ? f.default["3vWDMz"] : f.default.Uvf9GK),
                  }),
                  n && b && (0, a.jsx)("div", { className: h.Bq, children: (0, a.jsx)(m.k, {}) }),
                  (0, a.jsx)(i.IpV, {
                      className: h.nd,
                      children: (0, a.jsx)("div", {
                          className: h.Y_,
                          children: p.map((e, s) =>
                              n
                                  ? (0, a.jsx)(
                                        r.m,
                                        {
                                            asContainer: !0,
                                            text: e.disabled
                                                ? v.intl.formatToPlainString(f.default.uVpJYf, { gameName: e.name })
                                                : null,
                                            position: "top",
                                            children: (0, a.jsx)(_.A, {
                                                guildId: t,
                                                game: e,
                                                onClick: () =>
                                                    (0, x.A)({
                                                        guildId: t,
                                                        stepConfig: j,
                                                        initialGameServerGame: e,
                                                        analyticsLocation: c.A.GAME_SERVER_PAGE_SIDEBAR,
                                                    }),
                                                imageClassName: h.Sl,
                                                titleClassName: h.DD,
                                                variant: b || e.disabled ? _.e.DISABLED : _.e.CLICKABLE,
                                                location: c.A.GAME_SERVER_PAGE_SIDEBAR,
                                            }),
                                        },
                                        `sidebar-game-${s}-${e.id}`,
                                    )
                                  : (0, a.jsx)(
                                        _.A,
                                        {
                                            guildId: t,
                                            game: e,
                                            variant: _.e.VIEWABLE,
                                            imageClassName: h.Sl,
                                            titleClassName: h.DD,
                                            location: c.A.GAME_SERVER_PAGE_SIDEBAR,
                                        },
                                        `sidebar-game-${s}-${e.id}`,
                                    ),
                          ),
                      }),
                  }),
              ],
          });
}
