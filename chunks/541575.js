n.d(t, { Z: () => x }), n(953529);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(367907),
    a = n(906732),
    s = n(91218),
    o = n(807582),
    c = n(518738),
    d = n(26323),
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
        v = (0, c.oC)(t.id, j),
        { analyticsLocations: _ } = (0, a.ZP)(),
        C = t.features.has(g.oNc.ROLE_ICONS),
        O = (e) => {
            C ||
                ((0, l.yw)(g.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: b(h({}, e), { section: g.jXE.CUSTOM_ROLE_ICONS_TOOLTIP }),
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: _,
                }),
                (0, d.Z)({
                    analyticsLocations: _,
                    analyticsSourceLocation: {
                        page: g.ZY5.GUILD_SETTINGS,
                        section: g.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: g.qAy.BADGE,
                    },
                    guild: t,
                    perks: (0, m.Yp)(),
                }));
        },
        y = (0, r.jsx)(o.Z, {
            className: f.availabilityIndicator,
            guild: t,
            guildFeature: g.oNc.ROLE_ICONS,
            tooltipPosition: "top",
            hideTooltip: C,
            onClick: () =>
                O({
                    object: g.qAy.LEARN_MORE,
                    objectType: g.Qqv.TIER_2,
                }),
        });
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsxs)(i.vwX, {
                className: f.formTitle,
                children: [(0, r.jsx)("div", { children: p.intl.string(p.t.B9grJy) }), y],
            }),
            (0, r.jsx)(i.R94, {
                className: f.description,
                children: p.intl.string(p.t.I3YQeX),
            }),
            (0, r.jsxs)("div", {
                className: f.rolePreviewArea,
                children: [
                    (0, r.jsx)("div", {
                        className: f.previewContainer,
                        children:
                            null != v
                                ? (0, r.jsx)(
                                      s.Z,
                                      b(h({}, v), {
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
                            t.features.has(g.oNc.ROLE_ICONS)
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
                                : O({ object: g.qAy.UPLOAD_IMAGE }),
                        variant: "primary",
                        disabled: x,
                        text: p.intl.string(p.t.mD1oGB),
                    }),
                    null != v
                        ? (0, r.jsx)(i.Button, {
                              onClick: () => {
                                  (0, u._l)(j.id, null, null);
                              },
                              variant: "critical-secondary",
                              disabled: x,
                              text: p.intl.string(p.t["uY+Nk5"]),
                          })
                        : null,
                ],
            }),
        ],
    });
};
