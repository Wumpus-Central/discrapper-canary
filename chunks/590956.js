r.d(n, {
    Y: function () {
        return I;
    },
    c: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(772848),
    c = r(481060),
    d = r(596454),
    f = r(367907),
    p = r(255963),
    h = r(626135),
    _ = r(183023),
    m = r(524444),
    g = r(981631),
    E = r(185923),
    v = r(474936),
    y = r(782317);
let b = (e) => {
        var n;
        let { node: r, tooltipPosition: i = m.b_.position, enableClick: s = !0, channelId: u, messageId: f } = e,
            p = null === (n = r.originalMatch) || void 0 === n ? void 0 : n[0],
            h = null != p ? p : r.name,
            [g, E] = o.useState(!1),
            v = (e) =>
                (0, a.jsx)(d.Z, {
                    ...e,
                    emojiName: r.name,
                    size: r.jumboable ? 'jumbo' : 'default',
                    src: r.src,
                    alt: p,
                    animated: !1,
                    channelId: u,
                    messageId: f
                }),
            b = (e) =>
                (0, a.jsx)(c.Tooltip, {
                    text: (0, m.Y)(r.name, s),
                    'aria-label': h,
                    ...m.b_,
                    position: i,
                    shouldShow: !g,
                    onTooltipShow: () => {
                        s &&
                            T({
                                emojiNode: r,
                                isCustomEmoji: !1
                            });
                    },
                    children: (n) =>
                        (0, a.jsx)(c.Clickable, {
                            ...e,
                            tag: 'span',
                            onClick: (n) => {
                                var r;
                                E(!0), null == e || null === (r = e.onClick) || void 0 === r || r.call(e, n);
                            },
                            className: l()(y.emojiContainer, {
                                [y.emojiContainerClickable]: s,
                                [y.emojiJumbo]: r.jumboable
                            }),
                            children: v(n)
                        })
                });
        if (!s) return b();
        let I = (e) =>
            (0, a.jsx)(_.Az, {
                ...e,
                node: r
            });
        return (0, a.jsx)(c.Popout, {
            animation: c.Popout.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            onRequestClose: () => {
                E(!1);
            },
            renderPopout: I,
            children: b
        });
    },
    I = (e) => {
        let { node: n, isInteracting: r, tooltipPosition: i = m.b_.position, enableClick: s = !0, channelId: f, messageId: v } = e,
            [b, I] = o.useState(String(Date.now())),
            [S, A] = o.useState(!1),
            [C, N] = o.useState(!1),
            R = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, a.jsx)(d.Z, {
                    ...e,
                    emojiName: n.name,
                    size: n.jumboable ? 'jumbo' : 'default',
                    emojiId: n.emojiId,
                    animated: n.animated,
                    isInteracting: r,
                    channelId: f,
                    messageId: v
                });
            },
            O = (0, u.Z)(),
            D = (e) =>
                (0, a.jsx)(c.Tooltip, {
                    text: (0, m.Y)(n.name, s),
                    'aria-label': n.name,
                    ...m.b_,
                    position: i,
                    shouldShow: !C,
                    onTooltipShow: () => {
                        A(!0),
                            s &&
                                (T({
                                    emojiNode: n,
                                    isCustomEmoji: !0,
                                    nonce: O
                                }),
                                (0, p.x)(E.qR.CustomEmojiTooltipShown));
                    },
                    children: (r) =>
                        (0, a.jsx)(c.Clickable, {
                            ...e,
                            onMouseEnter: () => {
                                var n;
                                null == e || null === (n = e.onMouseEnter) || void 0 === n || n.call(e);
                            },
                            onClick: s
                                ? (n) => {
                                      var r;
                                      A(!1), N(!0), null == e || null === (r = e.onClick) || void 0 === r || r.call(e, n);
                                  }
                                : void 0,
                            onMouseLeave: () => {
                                S && (h.default.track(g.rMx.CLOSE_POPOUT, { nonce: O }), A(!1));
                            },
                            tag: 'span',
                            className: l()(y.emojiContainer, {
                                [y.emojiContainerClickable]: s,
                                [y.emojiJumbo]: n.jumboable
                            }),
                            children: R(r)
                        })
                });
        if (!s) return D();
        let x = (e) =>
            (0, a.jsx)(_.vk, {
                ...e,
                node: n,
                refreshPositionKey: () => I(String(Date.now())),
                nonce: O
            });
        return (0, a.jsx)(c.Popout, {
            animation: c.Popout.Animation.FADE,
            align: 'center',
            onRequestClose: () => {
                h.default.track(g.rMx.CLOSE_POPOUT, { nonce: O }), A(!1), N(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            renderPopout: x,
            positionKey: b,
            children: D
        });
    },
    T = (e) => {
        let { emojiNode: n, isCustomEmoji: r, nonce: i } = e;
        f.ZP.trackWithMetadata(g.rMx.EXPRESSION_TOOLTIP_VIEWED, {
            type: v.cd.EMOJI_IN_MESSAGE_HOVER,
            expression_id: n.emojiId,
            expression_name: n.name,
            is_animated: n.animated,
            is_custom: r,
            nonce: i
        });
    };
