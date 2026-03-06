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
    m = n(895770),
    _ = n(355609),
    x = n(843095),
    f = n(800007),
    g = n(738072),
    v = n(985018),
    h = n(442800);
let j = { ...f.ZN, initialStep: f.HS.SERVER_SETTINGS };
function A(e) {
    let { guildId: t, isAdmin: n } = e,
        { state: A, shouldFetchCatalog: p } = (0, l.cf)([u.A], () => ({
            state: u.A.getStateForGuild(t),
            shouldFetchCatalog: u.A.shouldFetchCatalogForGuild(t),
        }));
    s.useEffect(() => {
        p && (0, o.z9)(t);
    }, [t, p]);
    let { catalog: C, instances: N } = s.useMemo(
            () => ({ catalog: Object.values(A?.catalog ?? {}), instances: Object.values(A?.instances ?? {}) }),
            [A?.catalog, A?.instances],
        ),
        b = N.length >= f.ZI;
    return 0 === C.length
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
                      children: v.intl.string(n ? g.default["3vWDMz"] : g.default.Uvf9GK),
                  }),
                  n && b && (0, a.jsx)("div", { className: h.Bq, children: (0, a.jsx)(_.k, {}) }),
                  (0, a.jsx)(i.IpV, {
                      className: h.nd,
                      children: (0, a.jsx)("div", {
                          className: h.Y_,
                          children: C.map((e, s) =>
                              n
                                  ? (0, a.jsx)(
                                        r.m,
                                        {
                                            asContainer: !0,
                                            text: e.disabled
                                                ? v.intl.formatToPlainString(g.default.uVpJYf, { gameName: e.name })
                                                : null,
                                            position: "top",
                                            children: (0, a.jsx)(m.A, {
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
                                                variant: b || e.disabled ? m.e.DISABLED : m.e.CLICKABLE,
                                                location: c.A.GAME_SERVER_PAGE_SIDEBAR,
                                            }),
                                        },
                                        `sidebar-game-${s}-${e.id}`,
                                    )
                                  : (0, a.jsx)(
                                        m.A,
                                        {
                                            guildId: t,
                                            game: e,
                                            variant: m.e.VIEWABLE,
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
