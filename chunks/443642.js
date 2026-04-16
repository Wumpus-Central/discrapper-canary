n.d(t, { A: () => E });
var i = n(627968),
    a = n(64700),
    l = n(990078),
    s = n(319060),
    r = n(397927),
    o = n(793574),
    d = n(58149),
    c = n(688810),
    u = n(652176),
    _ = n(240248),
    m = n(256449),
    h = n(842086),
    p = n(148355),
    g = n(552117),
    A = n(652215),
    x = n(788868),
    f = n(76513);
let C = (0, _.xI)(s.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    E = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: s } = e,
            _ = a.useRef(null),
            [E, I] = a.useState(!0),
            [v, b] = a.useState(String(Date.now())),
            [T] = (0, m.Zq)(t, s),
            { analyticsLocations: y } = (0, c.Ay)(o.A.STICKER_MESSAGE),
            S = (0, i.jsxs)("span", {
                className: f.Zl,
                children: [(0, i.jsx)(r.s2T, { size: "xs", color: "currentColor", className: f.lA }), (T ?? t).name],
            });
        return (0, i.jsx)(c.f5, {
            value: y,
            children: (0, i.jsx)("div", {
                className: f.be,
                children: (0, i.jsx)(r.YNO, {
                    align: "center",
                    animation: r.YNO.Animation.TRANSLATE,
                    positionKey: v,
                    onRequestClose: () => {
                        I(!0);
                    },
                    renderPopout: (e) =>
                        (0, i.jsx)(g.A, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => b(String(Date.now())),
                        }),
                    targetElementRef: _,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsx)(l.m, {
                            ...u.Uk,
                            shouldShow: E,
                            __unsupportedReactNodeAsText: (0, u.yR)(S),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = T) &&
                                    d.Ay.trackWithMetadata(A.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: x.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, h.Tw)(e.format_type),
                                        is_custom: (0, h.zN)(e.type),
                                    });
                            },
                            children: (0, i.jsx)(r.DUT, {
                                innerRef: _,
                                className: f.q7,
                                onClick: (e) => {
                                    I(!E), n(e);
                                },
                                tag: "span",
                                children: (0, i.jsx)(p.A, { isInteracting: s, size: C, sticker: T ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
