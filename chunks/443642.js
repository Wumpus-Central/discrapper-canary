n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(990078),
    r = n(319060),
    s = n(397927),
    o = n(793574),
    d = n(58149),
    c = n(688810),
    u = n(652176),
    m = n(240248),
    _ = n(256449),
    h = n(842086),
    p = n(148355),
    g = n(552117),
    A = n(652215),
    f = n(788868),
    x = n(444736);
let E = (0, m.xI)(r.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    C = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: r } = e,
            m = l.useRef(null),
            [C, I] = l.useState(!0),
            [T, v] = l.useState(String(Date.now())),
            [N] = (0, _.Zq)(t, r),
            { analyticsLocations: S } = (0, c.Ay)(o.A.STICKER_MESSAGE),
            b = (0, i.jsxs)("span", {
                className: x.Zl,
                children: [(0, i.jsx)(s.s2T, { size: "xs", color: "currentColor", className: x.lA }), (N ?? t).name],
            });
        return (0, i.jsx)(c.f5, {
            value: S,
            children: (0, i.jsx)("div", {
                className: x.be,
                children: (0, i.jsx)(s.YNO, {
                    align: "center",
                    animation: s.YNO.Animation.TRANSLATE,
                    positionKey: T,
                    onRequestClose: () => {
                        I(!0);
                    },
                    renderPopout: (e) =>
                        (0, i.jsx)(g.A, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => v(String(Date.now())),
                        }),
                    targetElementRef: m,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsx)(a.m, {
                            ...u.Uk,
                            shouldShow: C,
                            __unsupportedReactNodeAsText: (0, u.yR)(b),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = N) &&
                                    d.Ay.trackWithMetadata(A.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: f.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, h.Tw)(e.format_type),
                                        is_custom: (0, h.zN)(e.type),
                                    });
                            },
                            children: (0, i.jsx)(s.DUT, {
                                innerRef: m,
                                className: x.q7,
                                onClick: (e) => {
                                    I(!C), n(e);
                                },
                                tag: "span",
                                children: (0, i.jsx)(p.A, { isInteracting: r, size: E, sticker: N ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
