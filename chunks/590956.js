n.d(t, {
    Y: () => y,
    c: () => v
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(772848),
    l = n(481060),
    u = n(596454),
    c = n(367907),
    d = n(255963),
    f = n(626135),
    _ = n(183023),
    p = n(524444),
    h = n(981631),
    m = n(185923),
    g = n(474936),
    E = n(782317);
let v = (e) => {
        var t;
        let { node: n, tooltipPosition: a = p.b_.position, enableClick: o = !0, channelId: c, messageId: d } = e,
            f = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0],
            h = null != f ? f : n.name,
            [m, g] = r.useState(!1),
            v = (e) =>
                (0, i.jsx)(u.Z, {
                    ...e,
                    emojiName: n.name,
                    size: n.jumboable ? 'jumbo' : 'default',
                    src: n.src,
                    alt: f,
                    animated: !1,
                    channelId: c,
                    messageId: d
                }),
            y = (e) =>
                (0, i.jsx)(l.ua7, {
                    text: (0, p.Y)(n.name, o),
                    'aria-label': h,
                    ...p.b_,
                    position: a,
                    shouldShow: !m,
                    onTooltipShow: () => {
                        o &&
                            I({
                                emojiNode: n,
                                isCustomEmoji: !1
                            });
                    },
                    children: (t) =>
                        (0, i.jsx)(l.P3F, {
                            ...e,
                            tag: 'span',
                            onClick: (t) => {
                                var n;
                                g(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                            },
                            className: s()(E.emojiContainer, {
                                [E.emojiContainerClickable]: o,
                                [E.emojiJumbo]: n.jumboable
                            }),
                            children: v(t)
                        })
                });
        if (!o) return y();
        let T = (e) =>
            (0, i.jsx)(_.Az, {
                ...e,
                node: n
            });
        return (0, i.jsx)(l.yRy, {
            animation: l.yRy.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            onRequestClose: () => {
                g(!1);
            },
            renderPopout: T,
            children: y
        });
    },
    y = (e) => {
        let { node: t, isInteracting: n, tooltipPosition: a = p.b_.position, enableClick: c = !0, channelId: g, messageId: v } = e,
            [y, T] = r.useState(String(Date.now())),
            [b, S] = r.useState(!1),
            [A, N] = r.useState(!1),
            C = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, i.jsx)(u.Z, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? 'jumbo' : 'default',
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n,
                    channelId: g,
                    messageId: v
                });
            },
            R = (0, o.Z)(),
            O = (e) =>
                (0, i.jsx)(l.ua7, {
                    text: (0, p.Y)(t.name, c),
                    'aria-label': t.name,
                    ...p.b_,
                    position: a,
                    shouldShow: !A,
                    onTooltipShow: () => {
                        S(!0),
                            c &&
                                (I({
                                    emojiNode: t,
                                    isCustomEmoji: !0,
                                    nonce: R
                                }),
                                (0, d.x)(m.qR.CustomEmojiTooltipShown));
                    },
                    children: (n) =>
                        (0, i.jsx)(l.P3F, {
                            ...e,
                            onMouseEnter: () => {
                                var t;
                                null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                            },
                            onClick: c
                                ? (t) => {
                                      var n;
                                      S(!1), N(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                  }
                                : void 0,
                            onMouseLeave: () => {
                                b && (f.default.track(h.rMx.CLOSE_POPOUT, { nonce: R }), S(!1));
                            },
                            tag: 'span',
                            className: s()(E.emojiContainer, {
                                [E.emojiContainerClickable]: c,
                                [E.emojiJumbo]: t.jumboable
                            }),
                            children: C(n)
                        })
                });
        if (!c) return O();
        let D = (e) =>
            (0, i.jsx)(_.vk, {
                ...e,
                node: t,
                refreshPositionKey: () => T(String(Date.now())),
                nonce: R
            });
        return (0, i.jsx)(l.yRy, {
            animation: l.yRy.Animation.FADE,
            align: 'center',
            onRequestClose: () => {
                f.default.track(h.rMx.CLOSE_POPOUT, { nonce: R }), S(!1), N(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            renderPopout: D,
            positionKey: y,
            children: O
        });
    },
    I = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: i } = e;
        c.ZP.trackWithMetadata(h.rMx.EXPRESSION_TOOLTIP_VIEWED, {
            type: g.cd.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: i
        });
    };
