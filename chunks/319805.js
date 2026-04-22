n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(742158),
    r = n(244367),
    a = n(750943),
    o = n(821609),
    d = n(58149),
    c = n(688810),
    u = n(753838),
    m = n(201275),
    g = n(631305),
    h = n(657048),
    x = n(636042),
    _ = n(652215),
    p = n(874864),
    A = n(985018),
    E = n(48730);
let f = function (e) {
    let { guild: t, disabled: f, role: j } = e,
        N = (0, m.qE)(t.id, j),
        { analyticsLocations: I } = (0, c.Ay)(),
        C = t.features.has(_.GuildFeatures.ROLE_ICONS),
        b = (e) => {
            C ||
                ((0, d.zV)(_.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: { ...e, section: _.JJy.CUSTOM_ROLE_ICONS_TOOLTIP },
                    guild_id: t?.id,
                    location_stack: I,
                }),
                (0, g.A)({
                    analyticsLocations: I,
                    analyticsSourceLocation: {
                        page: _.liQ.GUILD_SETTINGS,
                        section: _.JJy.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: _.ZSU.BADGE,
                    },
                    guild: t,
                    perks: (0, p.$_)(),
                }));
        },
        v = (0, i.jsx)(u.A, {
            className: E.Jz,
            guild: t,
            guildFeature: _.GuildFeatures.ROLE_ICONS,
            tooltipPosition: "top",
            hideTooltip: C,
            onClick: () => b({ object: _.ZSU.LEARN_MORE, objectType: _.AnalyticsObjectTypes.TIER_2 }),
        });
    return (0, i.jsxs)("div", {
        className: E.kL,
        children: [
            (0, i.jsxs)(s.z, {
                className: E.Hc,
                children: [(0, i.jsx)("div", { children: A.intl.string(A.t.B9grJw) }), v],
            }),
            (0, i.jsx)(r.a, { className: E.h_, children: A.intl.string(A.t.I3YQeV) }),
            (0, i.jsxs)("div", {
                className: E.Mw,
                children: [
                    (0, i.jsx)("div", {
                        className: E.i1,
                        children:
                            null != N
                                ? (0, i.jsx)(h.A, { ...N, className: E.s1, enableTooltip: !1 })
                                : (0, i.jsx)(a.X, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 24,
                                      height: 24,
                                      className: E.VH,
                                  }),
                    }),
                    (0, i.jsx)(o.$, {
                        onClick: () =>
                            t.features.has(_.GuildFeatures.ROLE_ICONS)
                                ? void (0, l.openModalLazy)(async () => {
                                      let { default: e } = await n.e("64939").then(n.bind(n, 836774));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              guildId: t.id,
                                              onUploadIcon: (e) => (0, x.n3)(j.id, e, null),
                                              onSelectUnicodeEmoji: (e) => (0, x.n3)(j.id, null, e),
                                          });
                                  })
                                : b({ object: _.ZSU.UPLOAD_IMAGE }),
                        variant: "primary",
                        disabled: f,
                        text: A.intl.string(A.t.mD1oGB),
                    }),
                    null != N
                        ? (0, i.jsx)(o.$, {
                              onClick: () => {
                                  (0, x.n3)(j.id, null, null);
                              },
                              variant: "critical-secondary",
                              disabled: f,
                              text: A.intl.string(A.t["uY+Nk/"]),
                          })
                        : null,
                ],
            }),
        ],
    });
};
