n.d(t, { Z: () => v }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(477690),
    r = n(481060),
    s = n(100527),
    o = n(367907),
    c = n(906732),
    d = n(524444),
    u = n(624138),
    m = n(453070),
    h = n(373228),
    _ = n(419922),
    p = n(217588),
    g = n(981631),
    f = n(474936),
    x = n(540093);
let E = (0, u.Mg)(a.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    C = (e) => {
        null != e &&
            o.ZP.trackWithMetadata(g.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: f.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, h.aQ)(e.format_type),
                is_custom: (0, h.z)(e.type)
            });
    },
    v = (e) => {
        let { renderableSticker: t, channel: n, isInteracting: a } = e,
            [o, u] = l.useState(!0),
            [h, g] = l.useState(String(Date.now())),
            [f] = (0, m.XW)(t, a),
            { analyticsLocations: v } = (0, c.ZP)(s.Z.STICKER_MESSAGE),
            I = (0, i.jsxs)('span', {
                className: x.stickerName,
                children: [
                    (0, i.jsx)(r.B7q, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.stickerIcon
                    }),
                    (null != f ? f : t).name
                ]
            });
        return (0, i.jsx)(c.Gt, {
            value: v,
            children: (0, i.jsx)(r.yRy, {
                align: 'center',
                animation: r.yRy.Animation.TRANSLATE,
                positionKey: h,
                onRequestClose: () => {
                    u(!0);
                },
                renderPopout: (e) =>
                    (0, i.jsx)(p.Z, {
                        ...e,
                        renderableSticker: t,
                        channel: n,
                        refreshPositionKey: () => g(String(Date.now()))
                    }),
                children: (e) => {
                    let { onClick: n } = e;
                    return (0, i.jsx)(r.ua7, {
                        ...d.b_,
                        shouldShow: o,
                        text: (0, d.Y)(I),
                        'aria-label': !1,
                        onTooltipShow: () => {
                            C(f);
                        },
                        children: (e) =>
                            (0, i.jsx)(r.P3F, {
                                ...e,
                                className: x.clickableSticker,
                                onClick: (e) => {
                                    u(!o), n(e);
                                },
                                tag: 'span',
                                children: (0, i.jsx)(_.ZP, {
                                    isInteracting: a,
                                    size: E,
                                    sticker: null != f ? f : t
                                })
                            })
                    });
                }
            })
        });
    };
