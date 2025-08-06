n.d(t, { Z: () => S }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(477690),
    a = n(481060),
    s = n(100527),
    l = n(367907),
    c = n(906732),
    u = n(524444),
    d = n(624138),
    f = n(453070),
    _ = n(373228),
    p = n(419922),
    h = n(217588),
    m = n(981631),
    g = n(474936),
    E = n(282940);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (0, d.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    T = (e) => {
        null != e &&
            l.ZP.trackWithMetadata(m.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: g.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, _.aQ)(e.format_type),
                is_custom: (0, _.z)(e.type),
            });
    },
    S = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: o } = e,
            l = i.useRef(null),
            [d, _] = i.useState(!0),
            [m, g] = i.useState(String(Date.now())),
            [b] = (0, f.XW)(t, o),
            { analyticsLocations: O } = (0, c.ZP)(s.Z.STICKER_MESSAGE),
            S = (0, r.jsxs)("span", {
                className: E.stickerName,
                children: [
                    (0, r.jsx)(a.B7q, {
                        size: "xs",
                        color: "currentColor",
                        className: E.stickerIcon,
                    }),
                    (null != b ? b : t).name,
                ],
            });
        return (0, r.jsx)(c.Gt, {
            value: O,
            children: (0, r.jsx)(a.yRy, {
                align: "center",
                animation: a.yRy.Animation.TRANSLATE,
                positionKey: m,
                onRequestClose: () => {
                    _(!0);
                },
                renderPopout: (e) =>
                    (0, r.jsx)(
                        h.Z,
                        v(y({}, e), {
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => g(String(Date.now())),
                        }),
                    ),
                targetElementRef: l,
                children: (e) => {
                    let { onClick: n } = e;
                    return (0, r.jsx)(
                        a.ua7,
                        v(y({}, u.b_), {
                            shouldShow: d,
                            text: (0, u.Y)(S),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                T(b);
                            },
                            children: (e) =>
                                (0, r.jsx)(
                                    a.P3F,
                                    v(y({}, e), {
                                        innerRef: l,
                                        className: E.clickableSticker,
                                        onClick: (e) => {
                                            _(!d), n(e);
                                        },
                                        tag: "span",
                                        children: (0, r.jsx)(p.Z, {
                                            isInteracting: o,
                                            size: I,
                                            sticker: null != b ? b : t,
                                        }),
                                    }),
                                ),
                        }),
                    );
                },
            }),
        });
    };
