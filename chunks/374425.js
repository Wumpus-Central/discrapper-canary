n.d(t, { Z: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(28664),
    o = n(477690),
    s = n(481060),
    l = n(100527),
    c = n(367907),
    u = n(906732),
    d = n(524444),
    f = n(624138),
    _ = n(453070),
    p = n(373228),
    h = n(419922),
    m = n(217588),
    g = n(981631),
    E = n(474936),
    b = n(205844);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (0, f.Mg)(o.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    S = (e) => {
        null != e &&
            c.ZP.trackWithMetadata(g.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: E.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, p.aQ)(e.format_type),
                is_custom: (0, p.z)(e.type),
            });
    },
    A = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: o } = e,
            c = i.useRef(null),
            [f, p] = i.useState(!0),
            [g, E] = i.useState(String(Date.now())),
            [y] = (0, _.XW)(t, o),
            { analyticsLocations: v } = (0, u.ZP)(l.Z.STICKER_MESSAGE),
            A = (0, r.jsxs)("span", {
                className: b.stickerName,
                children: [
                    (0, r.jsx)(s.B7q, {
                        size: "xs",
                        color: "currentColor",
                        className: b.stickerIcon,
                    }),
                    (null != y ? y : t).name,
                ],
            });
        return (0, r.jsx)(u.Gt, {
            value: v,
            children: (0, r.jsx)(s.yRy, {
                align: "center",
                animation: s.yRy.Animation.TRANSLATE,
                positionKey: g,
                onRequestClose: () => {
                    p(!0);
                },
                renderPopout: (e) =>
                    (0, r.jsx)(
                        m.Z,
                        I(O({}, e), {
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => E(String(Date.now())),
                        }),
                    ),
                targetElementRef: c,
                children: (e) => {
                    let { onClick: n } = e;
                    return (0, r.jsx)(
                        a.u,
                        I(O({}, d.b_), {
                            shouldShow: f,
                            __unsupportedReactNodeAsText: (0, d.Y)(A),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                S(y);
                            },
                            children: (0, r.jsx)(s.P3F, {
                                innerRef: c,
                                className: b.clickableSticker,
                                onClick: (e) => {
                                    p(!f), n(e);
                                },
                                tag: "span",
                                children: (0, r.jsx)(h.Z, {
                                    isInteracting: o,
                                    size: T,
                                    sticker: null != y ? y : t,
                                }),
                            }),
                        }),
                    );
                },
            }),
        });
    };
