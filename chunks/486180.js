n.d(t, { A: () => p });
var a = n(627968),
    s = n(64700),
    i = n(534514),
    l = n(573613),
    r = n(311907),
    d = n(990078),
    c = n(289873),
    o = n(793574),
    u = n(665171),
    _ = n(522055),
    m = n(895770),
    x = n(355609),
    f = n(843095),
    g = n(800007),
    v = n(576709),
    j = n(985018),
    h = n(452123);
let A = { ...g.ZN, initialStep: g.HS.SERVER_SETTINGS };
function p(e) {
    let { guildId: t, isAdmin: n } = e,
        { state: p, shouldFetchCatalog: E } = (0, r.cf)([_.A], () => ({
            state: _.A.getStateForGuild(t),
            shouldFetchCatalog: _.A.shouldFetchCatalogForGuild(t),
        }));
    s.useEffect(() => {
        E && (0, u.z9)(t);
    }, [t, E]);
    let { catalog: C, instances: I } = s.useMemo(
            () => ({ catalog: Object.values(p?.catalog ?? {}), instances: Object.values(p?.instances ?? {}) }),
            [p?.catalog, p?.instances],
        ),
        b = I.length >= g.ZI;
    return 0 === C.length
        ? (0, a.jsx)("div", {
              className: h.kL,
              children: (0, a.jsx)(c.y, { type: c.t.SPINNING_CIRCLE, className: h.u1 }),
          })
        : (0, a.jsxs)("div", {
              className: h.kL,
              children: [
                  (0, a.jsx)(i.D, {
                      className: h.R_,
                      variant: "heading-md/semibold",
                      children: j.intl.string(n ? v.default["3vWDMz"] : v.default.Uvf9GK),
                  }),
                  n && b && (0, a.jsx)("div", { className: h.Bq, children: (0, a.jsx)(x.k, {}) }),
                  (0, a.jsx)(l.Ip, {
                      className: h.nd,
                      children: (0, a.jsx)("div", {
                          className: h.Y_,
                          children: C.map((e, s) =>
                              n
                                  ? (0, a.jsx)(
                                        d.m,
                                        {
                                            asContainer: !0,
                                            text: e.disabled
                                                ? j.intl.formatToPlainString(v.default.uVpJYf, { gameName: e.name })
                                                : null,
                                            position: "top",
                                            children: (0, a.jsx)(m.A, {
                                                guildId: t,
                                                game: e,
                                                onClick: () =>
                                                    (0, f.A)({
                                                        guildId: t,
                                                        stepConfig: A,
                                                        initialGameServerGame: e,
                                                        analyticsLocation: o.A.GAME_SERVER_PAGE_SIDEBAR,
                                                    }),
                                                imageClassName: h.Sl,
                                                titleClassName: h.DD,
                                                variant: b || e.disabled ? m.e.DISABLED : m.e.CLICKABLE,
                                                location: o.A.GAME_SERVER_PAGE_SIDEBAR,
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
                                            location: o.A.GAME_SERVER_PAGE_SIDEBAR,
                                        },
                                        `sidebar-game-${s}-${e.id}`,
                                    ),
                          ),
                      }),
                  }),
              ],
          });
}
