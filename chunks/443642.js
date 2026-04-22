n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(990078),
    s = n(319060),
    r = n(812282),
    o = n(265872),
    d = n(939249),
    c = n(793574),
    u = n(58149),
    m = n(688810),
    _ = n(652176),
    h = n(240248),
    p = n(256449),
    g = n(842086),
    A = n(148355),
    f = n(552117),
    x = n(652215),
    C = n(788868),
    E = n(76513);
let I = (0, h.xI)(s.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
    v = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: s } = e,
            h = l.useRef(null),
            [v, b] = l.useState(!0),
            [T, S] = l.useState(String(Date.now())),
            [y] = (0, p.Zq)(t, s),
            { analyticsLocations: N } = (0, m.Ay)(c.A.STICKER_MESSAGE),
            j = (0, i.jsxs)("span", {
                className: E.Zl,
                children: [(0, i.jsx)(r.s, { size: "xs", color: "currentColor", className: E.lA }), (y ?? t).name],
            });
        return (0, i.jsx)(m.f5, {
            value: N,
            children: (0, i.jsx)("div", {
                className: E.be,
                children: (0, i.jsx)(o.Y, {
                    align: "center",
                    animation: o.Y.Animation.TRANSLATE,
                    positionKey: T,
                    onRequestClose: () => {
                        b(!0);
                    },
                    renderPopout: (e) =>
                        (0, i.jsx)(f.A, {
                            ...e,
                            renderableSticker: t,
                            channel: n,
                            refreshPositionKey: () => S(String(Date.now())),
                        }),
                    targetElementRef: h,
                    children: (e) => {
                        let { onClick: n } = e;
                        return (0, i.jsx)(a.m, {
                            ..._.Uk,
                            shouldShow: v,
                            __unsupportedReactNodeAsText: (0, _.yR)(j),
                            "aria-label": !1,
                            onTooltipShow: () => {
                                var e;
                                null != (e = y) &&
                                    u.Ay.trackWithMetadata(x.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                                        type: C.e.STICKER_IN_MESSAGE_HOVER,
                                        expression_id: e.id,
                                        expression_name: e.name,
                                        is_animated: (0, g.Tw)(e.format_type),
                                        is_custom: (0, g.zN)(e.type),
                                    });
                            },
                            children: (0, i.jsx)(d.D, {
                                innerRef: h,
                                className: E.q7,
                                onClick: (e) => {
                                    b(!v), n(e);
                                },
                                tag: "span",
                                children: (0, i.jsx)(A.A, { isInteracting: s, size: I, sticker: y ?? t }),
                            }),
                        });
                    },
                }),
            }),
        });
    };
