"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(58149),
    r = n(688810),
    a = n(753838),
    o = n(201275),
    d = n(631305),
    c = n(657048),
    u = n(636042),
    m = n(652215),
    g = n(874864),
    x = n(985018),
    h = n(636997);
let _ = function (e) {
    let { guild: t, disabled: _, role: A } = e,
        p = (0, o.qE)(t.id, A),
        { analyticsLocations: f } = (0, r.Ay)(),
        j = t.features.has(m.GuildFeatures.ROLE_ICONS),
        N = (e) => {
            j ||
                ((0, l.zV)(m.HAw.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: { ...e, section: m.JJy.CUSTOM_ROLE_ICONS_TOOLTIP },
                    guild_id: t?.id,
                    location_stack: f,
                }),
                (0, d.A)({
                    analyticsLocations: f,
                    analyticsSourceLocation: {
                        page: m.liQ.GUILD_SETTINGS,
                        section: m.JJy.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: m.ZSU.BADGE,
                    },
                    guild: t,
                    perks: (0, g.$_)(),
                }));
        },
        E = (0, i.jsx)(a.A, {
            className: h.Jz,
            guild: t,
            guildFeature: m.GuildFeatures.ROLE_ICONS,
            tooltipPosition: "top",
            hideTooltip: j,
            onClick: () => N({ object: m.ZSU.LEARN_MORE, objectType: m.AnalyticsObjectTypes.TIER_2 }),
        });
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [
            (0, i.jsxs)(s.zEo, {
                className: h.Hc,
                children: [(0, i.jsx)("div", { children: x.intl.string(x.t.B9grJw) }), E],
            }),
            (0, i.jsx)(s.ayl, { className: h.h_, children: x.intl.string(x.t.I3YQeV) }),
            (0, i.jsxs)("div", {
                className: h.Mw,
                children: [
                    (0, i.jsx)("div", {
                        className: h.i1,
                        children:
                            null != p
                                ? (0, i.jsx)(c.A, { ...p, className: h.s1, enableTooltip: !1 })
                                : (0, i.jsx)(s.XGR, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 24,
                                      height: 24,
                                      className: h.VH,
                                  }),
                    }),
                    (0, i.jsx)(s.Button, {
                        onClick: () =>
                            t.features.has(m.GuildFeatures.ROLE_ICONS)
                                ? void (0, s.mMO)(async () => {
                                      let { default: e } = await n.e("64939").then(n.bind(n, 836774));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              guildId: t.id,
                                              onUploadIcon: (e) => (0, u.n3)(A.id, e, null),
                                              onSelectUnicodeEmoji: (e) => (0, u.n3)(A.id, null, e),
                                          });
                                  })
                                : N({ object: m.ZSU.UPLOAD_IMAGE }),
                        variant: "primary",
                        disabled: _,
                        text: x.intl.string(x.t.mD1oGB),
                    }),
                    null != p
                        ? (0, i.jsx)(s.Button, {
                              onClick: () => {
                                  (0, u.n3)(A.id, null, null);
                              },
                              variant: "critical-secondary",
                              disabled: _,
                              text: x.intl.string(x.t["uY+Nk/"]),
                          })
                        : null,
                ],
            }),
        ],
    });
};
