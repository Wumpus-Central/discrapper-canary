(n.d(t, { Z: () => b }), n(953529));
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(367907),
    a = n(906732),
    s = n(91218),
    o = n(807582),
    c = n(518738),
    d = n(26323),
    u = n(764260),
    m = n(981631),
    g = n(30513),
    p = n(388032),
    h = n(18346);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function x(e, t) {
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
let b = function (e) {
    let { guild: t, disabled: b, role: j } = e,
        v = (0, c.oC)(t.id, j),
        { analyticsLocations: _ } = (0, a.ZP)(),
        O = () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e('22942').then(n.bind(n, 660727));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        x(f({}, n), {
                            guildId: t.id,
                            onUploadIcon: (e) => (0, u._l)(j.id, e, null),
                            onSelectUnicodeEmoji: (e) => (0, u._l)(j.id, null, e)
                        })
                    );
            });
        },
        y = t.features.has(m.oNc.ROLE_ICONS),
        C = (e) => {
            y ||
                ((0, l.yw)(m.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: x(f({}, e), { section: m.jXE.CUSTOM_ROLE_ICONS_TOOLTIP }),
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: _
                }),
                (0, d.Z)({
                    analyticsLocations: _,
                    analyticsSourceLocation: {
                        page: m.ZY5.GUILD_SETTINGS,
                        section: m.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: m.qAy.BADGE
                    },
                    guild: t,
                    perks: (0, g.Yp)()
                }));
        },
        N = (0, r.jsx)(o.Z, {
            className: h.availabilityIndicator,
            guild: t,
            guildFeature: m.oNc.ROLE_ICONS,
            tooltipPosition: 'top',
            hideTooltip: y,
            onClick: () =>
                C({
                    object: m.qAy.LEARN_MORE,
                    objectType: m.Qqv.TIER_2
                })
        });
    return (0, r.jsxs)(i.xJW, {
        className: h.container,
        children: [
            (0, r.jsxs)(i.vwX, {
                className: h.formTitle,
                children: [(0, r.jsx)('div', { children: p.intl.string(p.t.B9grJy) }), N]
            }),
            (0, r.jsx)(i.R94, {
                className: h.description,
                children: p.intl.string(p.t.I3YQeX)
            }),
            (0, r.jsxs)('div', {
                className: h.rolePreviewArea,
                children: [
                    (0, r.jsx)('div', {
                        className: h.previewContainer,
                        children:
                            null != v
                                ? (0, r.jsx)(
                                      s.Z,
                                      x(f({}, v), {
                                          className: h.roleIconPreview,
                                          enableTooltip: !1
                                      })
                                  )
                                : (0, r.jsx)(i.FmF, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 24,
                                      height: 24,
                                      className: h.preview
                                  })
                    }),
                    (0, r.jsx)(i.zxk, {
                        onClick: () => (t.features.has(m.oNc.ROLE_ICONS) ? O() : C({ object: m.qAy.UPLOAD_IMAGE })),
                        variant: 'primary',
                        disabled: b,
                        text: p.intl.string(p.t.mD1oGB)
                    }),
                    null != v
                        ? (0, r.jsx)(i.zxk, {
                              onClick: () => {
                                  (0, u._l)(j.id, null, null);
                              },
                              variant: 'critical-secondary',
                              disabled: b,
                              text: p.intl.string(p.t['uY+Nk5'])
                          })
                        : null
                ]
            })
        ]
    });
};
