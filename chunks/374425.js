n(47120);
var i = n(200651),
    r = n(192379),
    l = n(477690),
    a = n(481060),
    o = n(100527),
    s = n(367907),
    c = n(906732),
    d = n(524444),
    u = n(624138),
    m = n(453070),
    h = n(373228),
    f = n(419922),
    p = n(217588),
    _ = n(981631),
    g = n(474936),
    E = n(540093);
let C = (0, u.Mg)(l.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
    I = (e) => {
        if (null != e)
            s.ZP.trackWithMetadata(_.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: g.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, h.aQ)(e.format_type),
                is_custom: (0, h.z)(e.type)
            });
    };
t.Z = (e) => {
    let { renderableSticker: t, channel: n, isInteracting: l } = e,
        [s, u] = r.useState(!0),
        [h, _] = r.useState(String(Date.now())),
        [g] = (0, m.XW)(t, l),
        { analyticsLocations: x } = (0, c.ZP)(o.Z.STICKER_MESSAGE),
        N = (0, i.jsxs)('span', {
            className: E.stickerName,
            children: [
                (0, i.jsx)(a.StickerSmallIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.stickerIcon
                }),
                (null != g ? g : t).name
            ]
        });
    return (0, i.jsx)(c.Gt, {
        value: x,
        children: (0, i.jsx)(a.Popout, {
            align: 'center',
            animation: a.Popout.Animation.TRANSLATE,
            positionKey: h,
            onRequestClose: () => {
                u(!0);
            },
            renderPopout: (e) =>
                (0, i.jsx)(p.Z, {
                    ...e,
                    renderableSticker: t,
                    channel: n,
                    refreshPositionKey: () => _(String(Date.now()))
                }),
            children: (e) => {
                let { onClick: n } = e;
                return (0, i.jsx)(a.Tooltip, {
                    ...d.b_,
                    shouldShow: s,
                    text: (0, d.Y)(N),
                    'aria-label': !1,
                    onTooltipShow: () => {
                        I(g);
                    },
                    children: (e) =>
                        (0, i.jsx)(a.Clickable, {
                            ...e,
                            className: E.clickableSticker,
                            onClick: (e) => {
                                u(!s), n(e);
                            },
                            tag: 'span',
                            children: (0, i.jsx)(f.ZP, {
                                isInteracting: l,
                                size: C,
                                sticker: null != g ? g : t
                            })
                        })
                });
            }
        })
    });
};
