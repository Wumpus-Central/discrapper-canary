n.d(t, {
    Y: () => A,
    c: () => S,
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
    _ = n(626135),
    p = n(183023),
    h = n(524444),
    m = n(981631),
    g = n(185923),
    E = n(474936),
    b = n(388032),
    y = n(836153);
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
        var t;
        let { node: n, tooltipPosition: a = h.b_.position, enableClick: s = !0, channelId: d, messageId: f } = e,
            _ = i.useRef(null),
            m = null == (t = n.originalMatch) ? void 0 : t[0],
            g = null != m ? m : n.name,
            [E, O] = i.useState(!1),
            I = (e) =>
                (0, r.jsx)(u.Z, {
                    emojiName: n.name,
                    size: null != e ? e : n.jumboable ? "jumbo" : "default",
                    src: n.src,
                    alt: m,
                    animated: !1,
                    channelId: d,
                    messageId: f,
                }),
            S = (e) => {
                var t;
                return (0, r.jsx)(
                    l.i_,
                    T(
                        v(
                            {
                                asset: I("jumbo"),
                                title: null != (t = n.name) ? t : "",
                                body: s ? b.intl.string(b.t["515vjG"]) : "",
                                "aria-label": g,
                            },
                            h.b_,
                        ),
                        {
                            position: a,
                            shouldShow: !E,
                            onTooltipShow: () => {
                                s &&
                                    C({
                                        emojiNode: n,
                                        isCustomEmoji: !1,
                                    });
                            },
                            children: (0, r.jsx)(
                                c.P3F,
                                T(v({}, e), {
                                    innerRef: _,
                                    tag: "span",
                                    onClick: (t) => {
                                        var n;
                                        O(!0), null == e || null == (n = e.onClick) || n.call(e, t);
                                    },
                                    className: o()(y.emojiContainer, {
                                        [y.emojiContainerClickable]: s,
                                        [y.emojiJumbo]: n.jumboable,
                                    }),
                                    children: I(),
                                }),
                            ),
                        },
                    ),
                );
            };
        if (!s) return S();
        let A = (e) => (0, r.jsx)(p.Az, T(v({}, e), { node: n }));
        return (0, r.jsx)(c.yRy, {
            animation: c.yRy.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            onRequestClose: () => {
                O(!1);
            },
            renderPopout: A,
            targetElementRef: _,
            children: S,
        });
    },
    A = (e) => {
        let {
                node: t,
                isInteracting: n,
                tooltipPosition: a = h.b_.position,
                enableClick: d = !0,
                channelId: E,
                messageId: O,
            } = e,
            [I, S] = i.useState(String(Date.now())),
            [A, N] = i.useState(!1),
            [R, P] = i.useState(!1),
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
            L = (0, s.Z)(),
            x = (e) =>
                (0, r.jsx)(
                    l.i_,
                    T(
                        v(
                            {
                                asset: w("jumbo"),
                                title: t.name,
                                body: d ? b.intl.string(b.t["515vjG"]) : "",
                                "aria-label": t.name,
                            },
                            h.b_,
                        ),
                        {
                            position: a,
                            shouldShow: !R,
                            onTooltipShow: () => {
                                N(!0),
                                    d &&
                                        (C({
                                            emojiNode: t,
                                            isCustomEmoji: !0,
                                            nonce: L,
                                        }),
                                        (0, f.x)(g.qR.CustomEmojiTooltipShown));
                            },
                            children: (0, r.jsx)(
                                c.P3F,
                                T(v({}, e), {
                                    innerRef: D,
                                    onMouseEnter: () => {
                                        var t;
                                        null == e || null == (t = e.onMouseEnter) || t.call(e);
                                    },
                                    onClick: d
                                        ? (t) => {
                                              var n;
                                              N(!1), P(!0), null == e || null == (n = e.onClick) || n.call(e, t);
                                          }
                                        : void 0,
                                    onMouseLeave: () => {
                                        A && (_.default.track(m.rMx.CLOSE_POPOUT, { nonce: L }), N(!1));
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
        if (!d) return x();
        let M = (e) =>
            (0, r.jsx)(
                p.vk,
                T(v({}, e), {
                    node: t,
                    refreshPositionKey: () => S(String(Date.now())),
                    nonce: L,
                }),
            );
        return (0, r.jsx)(c.yRy, {
            animation: c.yRy.Animation.FADE,
            align: "center",
            onRequestClose: () => {
                _.default.track(m.rMx.CLOSE_POPOUT, { nonce: L }), N(!1), P(!1);
            },
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: M,
            positionKey: I,
            targetElementRef: D,
            children: x,
        });
    },
    C = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        d.ZP.trackWithMetadata(m.rMx.EXPRESSION_TOOLTIP_VIEWED, {
            type: E.cd.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r,
        });
    };
