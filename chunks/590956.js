n.d(t, {
    Y: () => S,
    c: () => I
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(772848),
    l = n(481060),
    c = n(596454),
    u = n(367907),
    d = n(255963),
    f = n(626135),
    _ = n(183023),
    p = n(524444),
    h = n(981631),
    m = n(185923),
    g = n(474936),
    E = n(713523);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
        var t;
        let { node: n, tooltipPosition: o = p.b_.position, enableClick: s = !0, channelId: u, messageId: d } = e,
            f = i.useRef(null),
            h = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0],
            m = null != h ? h : n.name,
            [g, b] = i.useState(!1),
            y = (e) =>
                (0, r.jsx)(
                    c.Z,
                    O(v({}, e), {
                        emojiName: n.name,
                        size: n.jumboable ? 'jumbo' : 'default',
                        src: n.src,
                        alt: h,
                        animated: !1,
                        channelId: u,
                        messageId: d
                    })
                ),
            I = (e) =>
                (0, r.jsx)(
                    l.ua7,
                    O(
                        v(
                            {
                                text: (0, p.Y)(n.name, s),
                                'aria-label': m
                            },
                            p.b_
                        ),
                        {
                            position: o,
                            shouldShow: !g,
                            onTooltipShow: () => {
                                s &&
                                    T({
                                        emojiNode: n,
                                        isCustomEmoji: !1
                                    });
                            },
                            children: (t) =>
                                (0, r.jsx)(
                                    l.P3F,
                                    O(v({}, e), {
                                        innerRef: f,
                                        tag: 'span',
                                        onClick: (t) => {
                                            var n;
                                            b(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                        },
                                        className: a()(E.emojiContainer, {
                                            [E.emojiContainerClickable]: s,
                                            [E.emojiJumbo]: n.jumboable
                                        }),
                                        children: y(t)
                                    })
                                )
                        }
                    )
                );
        if (!s) return I();
        let S = (e) => (0, r.jsx)(_.Az, O(v({}, e), { node: n }));
        return (0, r.jsx)(l.yRy, {
            animation: l.yRy.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            onRequestClose: () => {
                b(!1);
            },
            renderPopout: S,
            targetElementRef: f,
            children: I
        });
    },
    S = (e) => {
        let { node: t, isInteracting: n, tooltipPosition: o = p.b_.position, enableClick: u = !0, channelId: g, messageId: b } = e,
            [y, I] = i.useState(String(Date.now())),
            [S, A] = i.useState(!1),
            [N, C] = i.useState(!1),
            R = i.useRef(null),
            P = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, r.jsx)(
                    c.Z,
                    O(v({}, e), {
                        emojiName: t.name,
                        size: t.jumboable ? 'jumbo' : 'default',
                        emojiId: t.emojiId,
                        animated: t.animated,
                        isInteracting: n,
                        channelId: g,
                        messageId: b
                    })
                );
            },
            w = (0, s.Z)(),
            D = (e) =>
                (0, r.jsx)(
                    l.ua7,
                    O(
                        v(
                            {
                                text: (0, p.Y)(t.name, u),
                                'aria-label': t.name
                            },
                            p.b_
                        ),
                        {
                            position: o,
                            shouldShow: !N,
                            onTooltipShow: () => {
                                A(!0),
                                    u &&
                                        (T({
                                            emojiNode: t,
                                            isCustomEmoji: !0,
                                            nonce: w
                                        }),
                                        (0, d.x)(m.qR.CustomEmojiTooltipShown));
                            },
                            children: (n) =>
                                (0, r.jsx)(
                                    l.P3F,
                                    O(v({}, e), {
                                        innerRef: R,
                                        onMouseEnter: () => {
                                            var t;
                                            null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                                        },
                                        onClick: u
                                            ? (t) => {
                                                  var n;
                                                  A(!1), C(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                              }
                                            : void 0,
                                        onMouseLeave: () => {
                                            S && (f.default.track(h.rMx.CLOSE_POPOUT, { nonce: w }), A(!1));
                                        },
                                        tag: 'span',
                                        className: a()(E.emojiContainer, {
                                            [E.emojiContainerClickable]: u,
                                            [E.emojiJumbo]: t.jumboable
                                        }),
                                        children: P(n)
                                    })
                                )
                        }
                    )
                );
        if (!u) return D();
        let L = (e) =>
            (0, r.jsx)(
                _.vk,
                O(v({}, e), {
                    node: t,
                    refreshPositionKey: () => I(String(Date.now())),
                    nonce: w
                })
            );
        return (0, r.jsx)(l.yRy, {
            animation: l.yRy.Animation.FADE,
            align: 'center',
            onRequestClose: () => {
                f.default.track(h.rMx.CLOSE_POPOUT, { nonce: w }), A(!1), C(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            renderPopout: L,
            positionKey: y,
            targetElementRef: R,
            children: D
        });
    },
    T = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        u.ZP.trackWithMetadata(h.rMx.EXPRESSION_TOOLTIP_VIEWED, {
            type: g.cd.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r
        });
    };
