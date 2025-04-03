n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(477690),
    l = n(481060),
    o = n(100527),
    s = n(367907),
    c = n(906732),
    u = n(524444),
    d = n(624138),
    p = n(453070),
    m = n(373228),
    f = n(419922),
    h = n(217588),
    g = n(981631),
    _ = n(474936),
    b = n(282940);
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
let E = (0, d.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    v = (e) => {
        null != e &&
            s.ZP.trackWithMetadata(g.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: _.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, m.aQ)(e.format_type),
                is_custom: (0, m.z)(e.type)
            });
    },
    O = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: a } = e,
            s = i.useRef(null),
            [d, m] = i.useState(!0),
            [g, _] = i.useState(String(Date.now())),
            [O] = (0, p.XW)(t, a),
            { analyticsLocations: N } = (0, c.ZP)(o.Z.STICKER_MESSAGE),
            j = (0, r.jsxs)('span', {
                className: b.stickerName,
                children: [
                    (0, r.jsx)(l.B7q, {
                        size: 'xs',
                        color: 'currentColor',
                        className: b.stickerIcon
                    }),
                    (null != O ? O : t).name
                ]
            });
        return (0, r.jsx)(c.Gt, {
            value: N,
            children: (0, r.jsx)(l.yRy, {
                align: 'center',
                animation: l.yRy.Animation.TRANSLATE,
                positionKey: g,
                onRequestClose: () => {
                    m(!0);
                },
                renderPopout: (e) =>
                    (0, r.jsx)(
                        h.Z,
                        y(x({}, e), {
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => _(String(Date.now()))
                        })
                    ),
                targetElementRef: s,
                children: (e) => {
                    let { onClick: n } = e;
                    return (0, r.jsx)(
                        l.ua7,
                        y(x({}, u.b_), {
                            shouldShow: d,
                            text: (0, u.Y)(j),
                            'aria-label': !1,
                            onTooltipShow: () => {
                                v(O);
                            },
                            children: (e) =>
                                (0, r.jsx)(
                                    l.P3F,
                                    y(x({}, e), {
                                        innerRef: s,
                                        className: b.clickableSticker,
                                        onClick: (e) => {
                                            m(!d), n(e);
                                        },
                                        tag: 'span',
                                        children: (0, r.jsx)(f.Z, {
                                            isInteracting: a,
                                            size: E,
                                            sticker: null != O ? O : t
                                        })
                                    })
                                )
                        })
                    );
                }
            })
        });
    };
