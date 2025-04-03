n.d(t, { Z: () => N }), n(266796);
var r = n(200651);
n(192379);
var i = n(780384),
    s = n(481060),
    a = n(410030),
    l = n(367907),
    o = n(906732),
    c = n(91218),
    d = n(807582),
    u = n(518738),
    m = n(26323),
    g = n(764260),
    p = n(981631),
    h = n(30513),
    f = n(388032),
    b = n(18346);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
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
let N = function (e) {
    let { guild: t, disabled: N, role: _ } = e,
        v = (0, a.ZP)(),
        C = (0, u.oC)(t.id, _),
        { analyticsLocations: O } = (0, o.ZP)(),
        y = () => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('22942').then(n.bind(n, 660727));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        j(x({}, n), {
                            guildId: t.id,
                            onUploadIcon: (e) => (0, g._l)(_.id, e, null),
                            onSelectUnicodeEmoji: (e) => (0, g._l)(_.id, null, e)
                        })
                    );
            });
        },
        I = t.features.has(p.oNc.ROLE_ICONS),
        E = (e) => {
            I ||
                ((0, l.yw)(p.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: j(x({}, e), { section: p.jXE.CUSTOM_ROLE_ICONS_TOOLTIP }),
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: O
                }),
                (0, m.Z)({
                    analyticsLocations: O,
                    analyticsSourceLocation: {
                        page: p.ZY5.GUILD_SETTINGS,
                        section: p.jXE.GUILD_ROLE_EDIT_UPSELL_MODAL,
                        object: p.qAy.BADGE
                    },
                    guild: t,
                    perks: (0, h.Yp)()
                }));
        },
        S = (0, r.jsx)(d.Z, {
            className: b.availabilityIndicator,
            guild: t,
            guildFeature: p.oNc.ROLE_ICONS,
            tooltipPosition: 'top',
            hideTooltip: I,
            onClick: () =>
                E({
                    object: p.qAy.LEARN_MORE,
                    objectType: p.Qqv.TIER_2
                })
        });
    return (0, r.jsxs)(s.xJW, {
        className: b.container,
        children: [
            (0, r.jsxs)(s.vwX, {
                className: b.formTitle,
                children: [(0, r.jsx)('div', { children: f.NW.string(f.t.B9grJy) }), S]
            }),
            (0, r.jsx)(s.R94, {
                className: b.description,
                children: f.NW.string(f.t.I3YQeX)
            }),
            (0, r.jsxs)('div', {
                className: b.rolePreviewArea,
                children: [
                    (0, r.jsx)('div', {
                        className: b.previewContainer,
                        children:
                            null != C
                                ? (0, r.jsx)(
                                      c.Z,
                                      j(x({}, C), {
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
                    (0, r.jsx)(s.zxk, {
                        className: b.button,
                        color: (0, i.ap)(v) ? s.zxk.Colors.PRIMARY : s.zxk.Colors.WHITE,
                        look: s.zxk.Looks.OUTLINED,
                        onClick: () => (t.hasFeature(p.oNc.ROLE_ICONS) ? y() : E({ object: p.qAy.UPLOAD_IMAGE })),
                        disabled: N,
                        children: f.NW.string(f.t.mD1oGB)
                    }),
                    null != C
                        ? (0, r.jsx)(s.zxk, {
                              className: b.button,
                              color: (0, i.ap)(v) ? s.zxk.Colors.PRIMARY : s.zxk.Colors.TRANSPARENT,
                              look: s.zxk.Looks.BLANK,
                              onClick: () => {
                                  (0, g._l)(_.id, null, null);
                              },
                              disabled: N,
                              children: f.NW.string(f.t['uY+Nk5'])
                          })
                        : null
                ]
            })
        ]
    });
};
