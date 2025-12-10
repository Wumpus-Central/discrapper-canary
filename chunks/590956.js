n.d(t, {
    Y: () => C,
    c: () => T,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(681715),
    c = n(481060),
    u = n(596454),
    d = n(367907),
    f = n(255963),
    p = n(626135),
    _ = n(183023),
    m = n(524444),
    h = n(981631),
    g = n(185923),
    E = n(474936),
    b = n(388032),
    y = n(372216);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = (e) => {
        var t;
        let { node: n, tooltipPosition: a = m.b_.position, enableClick: s = !0, channelId: d, messageId: f } = e,
            p = i.useRef(null),
            h = null == (t = n.originalMatch) ? void 0 : t[0],
            [g, E] = i.useState(!1),
            O = (e) =>
                (0, r.jsx)(u.Z, {
                    emojiName: n.name,
                    size: null != e ? e : n.jumboable ? "jumbo" : "default",
                    src: n.src,
                    alt: h,
                    animated: !1,
                    channelId: d,
                    messageId: f,
                }),
            S = (e) => {
                var t;
                return (0, r.jsx)(
                    l.i_,
                    I(
                        v(
                            {
                                asset: O("jumbo"),
                                title: null != (t = n.name) ? t : "",
                                body: s ? b.intl.string(b.t["515vjG"]) : "",
                                ariaHidden: !0,
                            },
                            m.b_,
                        ),
                        {
                            position: a,
                            shouldShow: !g,
                            onTooltipShow: () => {
                                s &&
                                    A({
                                        emojiNode: n,
                                        isCustomEmoji: !1,
                                    });
                            },
                            children: (0, r.jsx)(
                                c.P3F,
                                I(v({}, e), {
                                    innerRef: p,
                                    tag: "span",
                                    onClick: (t) => {
                                        var n;
                                        E(!0), null == e || null == (n = e.onClick) || n.call(e, t);
                                    },
                                    className: o()(y.emojiContainer, {
                                        [y.emojiContainerClickable]: s,
                                        [y.emojiJumbo]: n.jumboable,
                                    }),
                                    children: O(),
                                }),
                            ),
                        },
                    ),
                );
            };
        if (!s) return S();
        let T = (e) => (0, r.jsx)(_.Az, I(v({}, e), { node: n }));
        return (0, r.jsx)(c.yRy, {
            animation: c.yRy.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            onRequestClose: () => {
                E(!1);
            },
            renderPopout: T,
            targetElementRef: p,
            children: S,
        });
    },
    C = (e) => {
        let {
                node: t,
                isInteracting: n,
                tooltipPosition: a = m.b_.position,
                enableClick: d = !0,
                channelId: E,
                messageId: O,
            } = e,
            [S, T] = i.useState(String(Date.now())),
            [C, N] = i.useState(!1),
            [P, R] = i.useState(!1),
            D = i.useRef(null),
            w = (e) =>
                (0, r.jsx)(u.Z, {
                    emojiName: t.name,
                    size: null != e ? e : t.jumboable ? "jumbo" : "default",
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n,
                    channelId: E,
                    messageId: O,
                }),
            x = (0, s.Z)(),
            L = (e) =>
                (0, r.jsx)(
                    l.i_,
                    I(
                        v(
                            {
                                asset: w("jumbo"),
                                title: t.name,
                                body: d ? b.intl.string(b.t["515vjG"]) : "",
                                ariaHidden: !0,
                            },
                            m.b_,
                        ),
                        {
                            position: a,
                            shouldShow: !P,
                            onTooltipShow: () => {
                                N(!0),
                                    d &&
                                        (A({
                                            emojiNode: t,
                                            isCustomEmoji: !0,
                                            nonce: x,
                                        }),
                                        (0, f.x)(g.qR.CustomEmojiTooltipShown));
                            },
                            children: (0, r.jsx)(
                                c.P3F,
                                I(v({}, e), {
                                    innerRef: D,
                                    onMouseEnter: () => {
                                        var t;
                                        null == e || null == (t = e.onMouseEnter) || t.call(e);
                                    },
                                    onClick: d
                                        ? (t) => {
                                              var n;
                                              N(!1), R(!0), null == e || null == (n = e.onClick) || n.call(e, t);
                                          }
                                        : void 0,
                                    onMouseLeave: () => {
                                        C && (p.default.track(h.rMx.CLOSE_POPOUT, { nonce: x }), N(!1));
                                    },
                                    tag: "span",
                                    className: o()(y.emojiContainer, {
                                        [y.emojiContainerClickable]: d,
                                        [y.emojiJumbo]: t.jumboable,
                                    }),
                                    children: w(),
                                }),
                            ),
                        },
                    ),
                );
        if (!d) return L();
        let j = (e) =>
            (0, r.jsx)(
                _.vk,
                I(v({}, e), {
                    node: t,
                    refreshPositionKey: () => T(String(Date.now())),
                    nonce: x,
                }),
            );
        return (0, r.jsx)(c.yRy, {
            animation: c.yRy.Animation.FADE,
            align: "center",
            onRequestClose: () => {
                p.default.track(h.rMx.CLOSE_POPOUT, { nonce: x }), N(!1), R(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: j,
            positionKey: S,
            targetElementRef: D,
            children: L,
        });
    },
    A = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        d.ZP.trackWithMetadata(h.rMx.EXPRESSION_TOOLTIP_VIEWED, {
            type: E.cd.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r,
        });
    };
