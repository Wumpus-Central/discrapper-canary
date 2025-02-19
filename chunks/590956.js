n.d(t, {
    Y: () => I,
    c: () => S
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
    p = n(183023),
    _ = n(524444),
    h = n(981631),
    m = n(185923),
    g = n(474936),
    E = n(183835);
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
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
let S = (e) => {
        var t;
        let { node: n, tooltipPosition: o = _.b_.position, enableClick: s = !0, channelId: u, messageId: d } = e,
            f = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0],
            h = null != f ? f : n.name,
            [m, g] = i.useState(!1),
            v = (e) =>
                (0, r.jsx)(
                    c.Z,
                    O(b({}, e), {
                        emojiName: n.name,
                        size: n.jumboable ? 'jumbo' : 'default',
                        src: n.src,
                        alt: f,
                        animated: !1,
                        channelId: u,
                        messageId: d
                    })
                ),
            y = (e) =>
                (0, r.jsx)(
                    l.ua7,
                    O(
                        b(
                            {
                                text: (0, _.Y)(n.name, s),
                                'aria-label': h
                            },
                            _.b_
                        ),
                        {
                            position: o,
                            shouldShow: !m,
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
                                    O(b({}, e), {
                                        tag: 'span',
                                        onClick: (t) => {
                                            var n;
                                            g(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                        },
                                        className: a()(E.emojiContainer, {
                                            [E.emojiContainerClickable]: s,
                                            [E.emojiJumbo]: n.jumboable
                                        }),
                                        children: v(t)
                                    })
                                )
                        }
                    )
                );
        if (!s) return y();
        let S = (e) => (0, r.jsx)(p.Az, O(b({}, e), { node: n }));
        return (0, r.jsx)(l.yRy, {
            animation: l.yRy.Animation.TRANSLATE,
            align: 'center',
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            onRequestClose: () => {
                g(!1);
            },
            renderPopout: S,
            children: y
        });
    },
    I = (e) => {
        let { node: t, isInteracting: n, tooltipPosition: o = _.b_.position, enableClick: u = !0, channelId: g, messageId: v } = e,
            [y, S] = i.useState(String(Date.now())),
            [I, N] = i.useState(!1),
            [A, C] = i.useState(!1),
            R = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, r.jsx)(
                    c.Z,
                    O(b({}, e), {
                        emojiName: t.name,
                        size: t.jumboable ? 'jumbo' : 'default',
                        emojiId: t.emojiId,
                        animated: t.animated,
                        isInteracting: n,
                        channelId: g,
                        messageId: v
                    })
                );
            },
            P = (0, s.Z)(),
            w = (e) =>
                (0, r.jsx)(
                    l.ua7,
                    O(
                        b(
                            {
                                text: (0, _.Y)(t.name, u),
                                'aria-label': t.name
                            },
                            _.b_
                        ),
                        {
                            position: o,
                            shouldShow: !A,
                            onTooltipShow: () => {
                                N(!0),
                                    u &&
                                        (T({
                                            emojiNode: t,
                                            isCustomEmoji: !0,
                                            nonce: P
                                        }),
                                        (0, d.x)(m.qR.CustomEmojiTooltipShown));
                            },
                            children: (n) =>
                                (0, r.jsx)(
                                    l.P3F,
                                    O(b({}, e), {
                                        onMouseEnter: () => {
                                            var t;
                                            null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                                        },
                                        onClick: u
                                            ? (t) => {
                                                  var n;
                                                  N(!1), C(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                              }
                                            : void 0,
                                        onMouseLeave: () => {
                                            I && (f.default.track(h.rMx.CLOSE_POPOUT, { nonce: P }), N(!1));
                                        },
                                        tag: 'span',
                                        className: a()(E.emojiContainer, {
                                            [E.emojiContainerClickable]: u,
                                            [E.emojiJumbo]: t.jumboable
                                        }),
                                        children: R(n)
                                    })
                                )
                        }
                    )
                );
        if (!u) return w();
        let D = (e) =>
            (0, r.jsx)(
                p.vk,
                O(b({}, e), {
                    node: t,
                    refreshPositionKey: () => S(String(Date.now())),
                    nonce: P
                })
            );
        return (0, r.jsx)(l.yRy, {
            animation: l.yRy.Animation.FADE,
            align: 'center',
            onRequestClose: () => {
                f.default.track(h.rMx.CLOSE_POPOUT, { nonce: P }), N(!1), C(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: 'right',
            renderPopout: D,
            positionKey: y,
            children: w
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
