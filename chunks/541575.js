n.d(t, { Z: () => x }), n(953529);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(367907),
    a = n(906732),
    s = n(807582),
    o = n(518738),
    c = n(26323),
    d = n(48950),
    u = n(84058),
    g = n(981631),
    m = n(30513),
    p = n(388032),
    f = n(155470);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = function (e) {
    let { guild: t, disabled: x, role: j } = e,
        _ = (0, o.oC)(t.id, j),
        { analyticsLocations: v } = (0, a.ZP)(),
        O = t.features.has(g.GuildFeatures.ROLE_ICONS),
        C = (e) => {
            O ||
                ((0, l.yw)(g.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: b(h({}, e), { section: g.jXE.CUSTOM_ROLE_ICONS_TOOLTIP }),
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: v,
                }),
                (0, c.Z)({
                    analyticsLocations: v,
                    analyticsSourceLocation: {
                        page: g.ZY5.GUILD_SETTINGS,
                        section: g.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: g.qAy.BADGE,
                    },
                    guild: t,
                    perks: (0, m.Yp)(),
                }));
        },
        y = (0, r.jsx)(s.Z, {
            className: f.availabilityIndicator,
            guild: t,
            guildFeature: g.GuildFeatures.ROLE_ICONS,
            tooltipPosition: "top",
            hideTooltip: O,
            onClick: () =>
                C({
                    object: g.qAy.LEARN_MORE,
                    objectType: g.AnalyticsObjectTypes.TIER_2,
                }),
        });
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsxs)(i.vwX, {
                className: f.formTitle,
                children: [(0, r.jsx)("div", { children: p.intl.string(p.t.B9grJw) }), y],
            }),
            (0, r.jsx)(i.R94, {
                className: f.description,
                children: p.intl.string(p.t.I3YQeV),
            }),
            (0, r.jsxs)("div", {
                className: f.rolePreviewArea,
                children: [
                    (0, r.jsx)("div", {
                        className: f.previewContainer,
                        children:
                            null != _
                                ? (0, r.jsx)(
                                      d.Z,
                                      b(h({}, _), {
                                          className: f.roleIconPreview,
                                          enableTooltip: !1,
                                      }),
                                  )
                                : (0, r.jsx)(i.FmF, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 24,
                                      height: 24,
                                      className: f.preview,
                                  }),
                    }),
                    (0, r.jsx)(i.Button, {
                        onClick: () =>
                            t.features.has(g.GuildFeatures.ROLE_ICONS)
                                ? void (0, i.ZDy)(async () => {
                                      let { default: e } = await n.e("22942").then(n.bind(n, 660727));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              b(h({}, n), {
                                                  guildId: t.id,
                                                  onUploadIcon: (e) => (0, u._l)(j.id, e, null),
                                                  onSelectUnicodeEmoji: (e) => (0, u._l)(j.id, null, e),
                                              }),
                                          );
                                  })
                                : C({ object: g.qAy.UPLOAD_IMAGE }),
                        variant: "primary",
                        disabled: x,
                        text: p.intl.string(p.t.mD1oGB),
                    }),
                    null != _
                        ? (0, r.jsx)(i.Button, {
                              onClick: () => {
                                  (0, u._l)(j.id, null, null);
                              },
                              variant: "critical-secondary",
                              disabled: x,
                              text: p.intl.string(p.t["uY+Nk/"]),
                          })
                        : null,
                ],
            }),
        ],
    });
};
