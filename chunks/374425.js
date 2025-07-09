(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(477690),
    a = n(481060),
    o = n(100527),
    s = n(367907),
    c = n(906732),
    u = n(524444),
    d = n(624138),
    p = n(453070),
    m = n(373228),
    f = n(419922),
    _ = n(217588),
    g = n(981631),
    h = n(474936),
    b = n(282940);
function E(e) {
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
let x = (0, d.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    C = (e) => {
        null != e &&
            s.ZP.trackWithMetadata(g.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: h.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, m.aQ)(e.format_type),
                is_custom: (0, m.z)(e.type)
            });
    },
    v = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: l } = e,
            s = i.useRef(null),
            [d, m] = i.useState(!0),
            [g, h] = i.useState(String(Date.now())),
            [v] = (0, p.XW)(t, l),
            { analyticsLocations: O } = (0, c.ZP)(o.Z.STICKER_MESSAGE),
            j = (0, r.jsxs)('span', {
                className: b.stickerName,
                children: [
                    (0, r.jsx)(a.B7q, {
                        size: 'xs',
                        color: 'currentColor',
                        className: b.stickerIcon
                    }),
                    (null != v ? v : t).name
                ]
            });
        return (0, r.jsx)(c.Gt, {
            value: O,
            children: (0, r.jsx)(a.yRy, {
                align: 'center',
                animation: a.yRy.Animation.TRANSLATE,
                positionKey: g,
                onRequestClose: () => {
                    m(!0);
                },
                renderPopout: (e) =>
                    (0, r.jsx)(
                        _.Z,
                        y(E({}, e), {
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => h(String(Date.now()))
                        })
                    ),
                targetElementRef: s,
                children: (e) => {
                    let { onClick: n } = e;
                    return (0, r.jsx)(
                        a.ua7,
                        y(E({}, u.b_), {
                            shouldShow: d,
                            text: (0, u.Y)(j),
                            'aria-label': !1,
                            onTooltipShow: () => {
                                C(v);
                            },
                            children: (e) =>
                                (0, r.jsx)(
                                    a.P3F,
                                    y(E({}, e), {
                                        innerRef: s,
                                        className: b.clickableSticker,
                                        onClick: (e) => {
                                            (m(!d), n(e));
                                        },
                                        tag: 'span',
                                        children: (0, r.jsx)(f.Z, {
                                            isInteracting: l,
                                            size: x,
                                            sticker: null != v ? v : t
                                        })
                                    })
                                )
                        })
                    );
                }
            })
        });
    };
