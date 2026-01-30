n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(990078),
    a = n(319060),
    s = n(397927),
    o = n(793574),
    c = n(58149),
    u = n(688810),
    d = n(652176),
    p = n(240248),
    m = n(256449),
    f = n(842086),
    g = n(148355),
    h = n(552117),
    _ = n(652215),
    b = n(788868),
    A = n(444736);

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

function v(e, t) {
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
let x = (0, p.xI)(a.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    O = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: a } = e,
            p = i.useRef(null),
            [O, E] = i.useState(!0),
            [j, C] = i.useState(String(Date.now())),
            [I] = (0, m.Zq)(t, a),
            { analyticsLocations: S } = (0, u.Ay)(o.A.STICKER_MESSAGE),
            T = (0, r.jsxs)("span", {
                className: A.Zl,
                children: [
                    (0, r.jsx)(s.s2T, {
                        size: "xs",
                        color: "currentColor",
                        className: A.lA,
                    }),
                    (null != I ? I : t).name,
                ],
            });
        return (0, r.jsx)(u.f5, {
            value: S,
            children: (0, r.jsx)("div", {
                className: A.be,
                children: (0, r.jsx)(s.YNO, {
                    align: "center",
                    animation: s.YNO.Animation.TRANSLATE,
                    positionKey: j,
                    onRequestClose: () => {
                        E(!0);
                    },
                    renderPopout: (e) =>
                        (0, r.jsx)(
                            h.A,
                            v(y({}, e), {
                                renderableSticker: t,
                                channel: n,
                                refreshPositionKey: () => C(String(Date.now())),
                            }),
                        ),
                    targetElementRef: p,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, r.jsx)(
                            l.m,
                            v(y({}, d.Uk), {
                                shouldShow: O,
                                __unsupportedReactNodeAsText: (0, d.yR)(T),
                                "aria-label": !1,
                                onTooltipShow: () => {
                                    var e;
                                    null != (e = I) &&
                                        c.Ay.trackWithMetadata(_.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                            type: b.e.STICKER_IN_MESSAGE_HOVER,
                                            expression_id: e.id,
                                            expression_name: e.name,
                                            is_animated: (0, f.Tw)(e.format_type),
                                            is_custom: (0, f.zN)(e.type),
                                        });
                                },
                                children: (0, r.jsx)(s.DUT, {
                                    innerRef: p,
                                    className: A.q7,
                                    onClick: (e) => {
                                        E(!O), n(e);
                                    },
                                    tag: "span",
                                    children: (0, r.jsx)(g.A, {
                                        isInteracting: a,
                                        size: x,
                                        sticker: null != I ? I : t,
                                    }),
                                }),
                            }),
                        );
                    },
                }),
            }),
        });
    };
