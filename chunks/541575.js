n.d(t, { Z: () => x }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(367907),
    a = n(906732),
    s = n(807582),
    o = n(518738),
    c = n(26323),
    d = n(48950),
    u = n(84058),
    g = n(981631),
    f = n(30513),
    m = n(388032),
    b = n(776580);
function p(e) {
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
function h(e, t) {
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
        v = (0, o.oC)(t.id, j),
        { analyticsLocations: O } = (0, a.ZP)(),
        C = t.features.has(g.GuildFeatures.ROLE_ICONS),
        y = (e) => {
            C ||
                ((0, l.yw)(g.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: h(p({}, e), { section: g.jXE.CUSTOM_ROLE_ICONS_TOOLTIP }),
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: O,
                }),
                (0, c.Z)({
                    analyticsLocations: O,
                    analyticsSourceLocation: {
                        page: g.ZY5.GUILD_SETTINGS,
                        section: g.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: g.qAy.BADGE,
                    },
                    guild: t,
                    perks: (0, f.Yp)(),
                }));
        },
        N = (0, r.jsx)(s.Z, {
            className: b.availabilityIndicator,
            guild: t,
            guildFeature: g.GuildFeatures.ROLE_ICONS,
            tooltipPosition: "top",
            hideTooltip: C,
            onClick: () =>
                y({
                    object: g.qAy.LEARN_MORE,
                    objectType: g.AnalyticsObjectTypes.TIER_2,
                }),
        });
    return (0, r.jsxs)("div", {
        className: b.container,
        children: [
            (0, r.jsxs)(i.vwX, {
                className: b.formTitle,
                children: [(0, r.jsx)("div", { children: m.intl.string(m.t.B9grJw) }), N],
            }),
            (0, r.jsx)(i.R94, {
                className: b.description,
                children: m.intl.string(m.t.I3YQeV),
            }),
            (0, r.jsxs)("div", {
                className: b.rolePreviewArea,
                children: [
                    (0, r.jsx)("div", {
                        className: b.previewContainer,
                        children:
                            null != v
                                ? (0, r.jsx)(
                                      d.Z,
                                      h(p({}, v), {
                                          className: b.roleIconPreview,
                                          enableTooltip: !1,
                                      }),
                                  )
                                : (0, r.jsx)(i.FmF, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 24,
                                      height: 24,
                                      className: b.preview,
                                  }),
                    }),
                    (0, r.jsx)(i.Button, {
                        onClick: () =>
                            t.features.has(g.GuildFeatures.ROLE_ICONS)
                                ? void (0, i.ZDy)(async () => {
                                      let { default: e } = await n.e("63635").then(n.bind(n, 660727));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              h(p({}, n), {
                                                  guildId: t.id,
                                                  onUploadIcon: (e) => (0, u._l)(j.id, e, null),
                                                  onSelectUnicodeEmoji: (e) => (0, u._l)(j.id, null, e),
                                              }),
                                          );
                                  })
                                : y({ object: g.qAy.UPLOAD_IMAGE }),
                        variant: "primary",
                        disabled: x,
                        text: m.intl.string(m.t.mD1oGB),
                    }),
                    null != v
                        ? (0, r.jsx)(i.Button, {
                              onClick: () => {
                                  (0, u._l)(j.id, null, null);
                              },
                              variant: "critical-secondary",
                              disabled: x,
                              text: m.intl.string(m.t["uY+Nk/"]),
                          })
                        : null,
                ],
            }),
        ],
    });
};
