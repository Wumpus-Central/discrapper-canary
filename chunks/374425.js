n.d(t, { Z: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(477690),
    o = n(481060),
    l = n(100527),
    s = n(367907),
    c = n(906732),
    d = n(524444),
    u = n(624138),
    p = n(453070),
    m = n(373228),
    f = n(419922),
    h = n(217588),
    g = n(981631),
    _ = n(474936),
    b = n(529546);
function v(e) {
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
function y(e, t) {
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
let x = (0, u.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    O = (e) => {
        null != e &&
            s.ZP.trackWithMetadata(g.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: _.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, m.aQ)(e.format_type),
                is_custom: (0, m.z)(e.type)
            });
    },
    E = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: a } = e,
            [s, u] = i.useState(!0),
            [m, g] = i.useState(String(Date.now())),
            [_] = (0, p.XW)(t, a),
            { analyticsLocations: E } = (0, c.ZP)(l.Z.STICKER_MESSAGE),
            j = (0, r.jsxs)('span', {
                className: b.stickerName,
                children: [
                    (0, r.jsx)(o.B7q, {
                        size: 'xs',
                        color: 'currentColor',
                        className: b.stickerIcon
                    }),
                    (null != _ ? _ : t).name
                ]
            });
        return (0, r.jsx)(c.Gt, {
            value: E,
            children: (0, r.jsx)(o.yRy, {
                align: 'center',
                animation: o.yRy.Animation.TRANSLATE,
                positionKey: m,
                onRequestClose: () => {
                    u(!0);
                },
                renderPopout: (e) =>
                    (0, r.jsx)(
                        h.Z,
                        y(v({}, e), {
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => g(String(Date.now()))
                        })
                    ),
                children: (e) => {
                    let { onClick: n } = e;
                    return (0, r.jsx)(
                        o.ua7,
                        y(v({}, d.b_), {
                            shouldShow: s,
                            text: (0, d.Y)(j),
                            'aria-label': !1,
                            onTooltipShow: () => {
                                O(_);
                            },
                            children: (e) =>
                                (0, r.jsx)(
                                    o.P3F,
                                    y(v({}, e), {
                                        className: b.clickableSticker,
                                        onClick: (e) => {
                                            u(!s), n(e);
                                        },
                                        tag: 'span',
                                        children: (0, r.jsx)(f.ZP, {
                                            isInteracting: a,
                                            size: x,
                                            sticker: null != _ ? _ : t
                                        })
                                    })
                                )
                        })
                    );
                }
            })
        });
    };
