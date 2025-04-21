n.d(t, { Z: () => _ }), n(953529);
var r = n(200651);
n(192379);
var i = n(780384),
    l = n(481060),
    s = n(410030),
    a = n(367907),
    o = n(906732),
    c = n(91218),
    d = n(807582),
    u = n(518738),
    m = n(26323),
    g = n(764260),
    p = n(981631),
    h = n(30513),
    f = n(388032),
    x = n(18346);
function b(e) {
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
let _ = function (e) {
    let { guild: t, disabled: _, role: v } = e,
        O = (0, s.ZP)(),
        C = (0, u.oC)(t.id, v),
        { analyticsLocations: y } = (0, o.ZP)(),
        N = () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('22942').then(n.bind(n, 660727));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        j(b({}, n), {
                            guildId: t.id,
                            onUploadIcon: (e) => (0, g._l)(v.id, e, null),
                            onSelectUnicodeEmoji: (e) => (0, g._l)(v.id, null, e)
                        })
                    );
            });
        },
        I = t.features.has(p.oNc.ROLE_ICONS),
        E = (e) => {
            I ||
                ((0, a.yw)(p.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                    location: j(b({}, e), { section: p.jXE.CUSTOM_ROLE_ICONS_TOOLTIP }),
                    guild_id: null == t ? void 0 : t.id,
                    location_stack: y
                }),
                (0, m.Z)({
                    analyticsLocations: y,
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
            className: x.availabilityIndicator,
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
    return (0, r.jsxs)(l.xJW, {
        className: x.container,
        children: [
            (0, r.jsxs)(l.vwX, {
                className: x.formTitle,
                children: [(0, r.jsx)('div', { children: f.intl.string(f.t.B9grJy) }), S]
            }),
            (0, r.jsx)(l.R94, {
                className: x.description,
                children: f.intl.string(f.t.I3YQeX)
            }),
            (0, r.jsxs)('div', {
                className: x.rolePreviewArea,
                children: [
                    (0, r.jsx)('div', {
                        className: x.previewContainer,
                        children:
                            null != C
                                ? (0, r.jsx)(
                                      c.Z,
                                      j(b({}, C), {
                                          className: x.roleIconPreview,
                                          enableTooltip: !1
                                      })
                                  )
                                : (0, r.jsx)(l.FmF, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 24,
                                      height: 24,
                                      className: x.preview
                                  })
                    }),
                    (0, r.jsx)(l.zxk, {
                        className: x.button,
                        color: (0, i.ap)(O) ? l.zxk.Colors.PRIMARY : l.zxk.Colors.WHITE,
                        look: l.zxk.Looks.OUTLINED,
                        onClick: () => (t.hasFeature(p.oNc.ROLE_ICONS) ? N() : E({ object: p.qAy.UPLOAD_IMAGE })),
                        disabled: _,
                        children: f.intl.string(f.t.mD1oGB)
                    }),
                    null != C
                        ? (0, r.jsx)(l.zxk, {
                              className: x.button,
                              color: (0, i.ap)(O) ? l.zxk.Colors.PRIMARY : l.zxk.Colors.TRANSPARENT,
                              look: l.zxk.Looks.BLANK,
                              onClick: () => {
                                  (0, g._l)(v.id, null, null);
                              },
                              disabled: _,
                              children: f.intl.string(f.t['uY+Nk5'])
                          })
                        : null
                ]
            })
        ]
    });
};
