(n.d(t, { Z: () => v }), n(953529));
var r = n(255367);
n(73800);
var i = n(780384),
    l = n(755721),
    s = n(481060),
    a = n(410030),
    o = n(367907),
    c = n(906732),
    d = n(91218),
    u = n(807582),
    m = n(518738),
    g = n(26323),
    p = n(764260),
    f = n(981631),
    h = n(30513),
    x = n(388032),
    b = n(18346);
function j(e) {
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
function _(e, t) {
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
let v = function (e) {
    let { guild: t, disabled: v, role: O } = e,
        C = (0, a.ZP)(),
        y = (0, m.oC)(t.id, O),
        { analyticsLocations: N } = (0, c.ZP)(),
        I = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('22942').then(n.bind(n, 660727));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        _(j({}, n), {
                            guildId: t.id,
                            onUploadIcon: (e) => (0, p._l)(O.id, e, null),
                            onSelectUnicodeEmoji: (e) => (0, p._l)(O.id, null, e)
                        })
                    );
            });
        },
        E = t.features.has(f.oNc.ROLE_ICONS),
        S = (e) => {
            E ||
                ((0, o.yw)(f.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: _(j({}, e), { section: f.jXE.CUSTOM_ROLE_ICONS_TOOLTIP }),
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: N
                }),
                (0, g.Z)({
                    analyticsLocations: N,
                    analyticsSourceLocation: {
                        page: f.ZY5.GUILD_SETTINGS,
                        section: f.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: f.qAy.BADGE
                    },
                    guild: t,
                    perks: (0, h.Yp)()
                }));
        },
        T = (0, r.jsx)(u.Z, {
            className: b.availabilityIndicator,
            guild: t,
            guildFeature: f.oNc.ROLE_ICONS,
            tooltipPosition: 'top',
            hideTooltip: E,
            onClick: () =>
                S({
                    object: f.qAy.LEARN_MORE,
                    objectType: f.Qqv.TIER_2
                })
        });
    return (0, r.jsxs)(s.xJW, {
        className: b.container,
        children: [
            (0, r.jsxs)(s.vwX, {
                className: b.formTitle,
                children: [(0, r.jsx)('div', { children: x.intl.string(x.t.B9grJy) }), T]
            }),
            (0, r.jsx)(s.R94, {
                className: b.description,
                children: x.intl.string(x.t.I3YQeX)
            }),
            (0, r.jsxs)('div', {
                className: b.rolePreviewArea,
                children: [
                    (0, r.jsx)('div', {
                        className: b.previewContainer,
                        children:
                            null != y
                                ? (0, r.jsx)(
                                      d.Z,
                                      _(j({}, y), {
                                          className: b.roleIconPreview,
                                          enableTooltip: !1
                                      })
                                  )
                                : (0, r.jsx)(s.FmF, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 24,
                                      height: 24,
                                      className: b.preview
                                  })
                    }),
                    (0, r.jsx)(l.zx, {
                        className: b.button,
                        color: (0, i.ap)(C) ? l.zx.Colors.PRIMARY : l.zx.Colors.WHITE,
                        look: l.zx.Looks.OUTLINED,
                        onClick: () => (t.features.has(f.oNc.ROLE_ICONS) ? I() : S({ object: f.qAy.UPLOAD_IMAGE })),
                        disabled: v,
                        children: x.intl.string(x.t.mD1oGB)
                    }),
                    null != y
                        ? (0, r.jsx)(l.zx, {
                              className: b.button,
                              color: (0, i.ap)(C) ? l.zx.Colors.PRIMARY : l.zx.Colors.TRANSPARENT,
                              look: l.zx.Looks.BLANK,
                              onClick: () => {
                                  (0, p._l)(O.id, null, null);
                              },
                              disabled: v,
                              children: x.intl.string(x.t['uY+Nk5'])
                          })
                        : null
                ]
            })
        ]
    });
};
