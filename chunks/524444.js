n.d(t, {
    A7: () => eo,
    BO: () => eh,
    DR: () => ec,
    G5: () => ef,
    LE: () => ed,
    Rp: () => eu,
    SE: () => eE,
    W_: () => eg,
    Y: () => em,
    Yi: () => en,
    b_: () => q,
    hX: () => ee,
    iT: () => er,
    lV: () => $,
    ur: () => ea,
    wj: () => et,
    xi: () => ei,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(374470),
    u = n(442837),
    d = n(481060),
    f = n(904245),
    _ = n(45114),
    p = n(431279),
    h = n(794295),
    m = n(593472),
    g = n(110924),
    E = n(40330),
    b = n(249458),
    y = n(313201),
    O = n(688465),
    v = n(425886),
    I = n(80966),
    T = n(593545),
    S = n(479313),
    A = n(765104),
    C = n(505953),
    N = n(695346),
    R = n(201542),
    P = n(306680),
    w = n(594174),
    D = n(259580),
    x = n(626135),
    L = n(823379),
    M = n(589530),
    j = n(709054),
    k = n(217702),
    U = n(981631),
    G = n(814249),
    B = n(295907),
    Z = n(388032),
    F = n(180376);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let q = {
        delay: 300,
        position: "top",
    },
    X = (e) => (t) => {
        null == e || e(t), (0, M.jA)(t);
    },
    Q = (e) => (t) => {
        null == e || e(t), (0, M.Zj)(t);
    };
function J(e) {
    var {
            onVolumeChange: t,
            onMute: n,
            volume: a,
            autoMute: s,
            alt: l,
            renderAdjacentContent: c,
            renderOverlayContent: u,
            disableAltTextDisplay: f = !1,
            hiddenSpoilers: _,
            mosaicStyleAlt: p,
            mediaLayoutType: h,
            reducedSizeAltTextButton: m,
        } = e,
        g = K(e, [
            "onVolumeChange",
            "onMute",
            "volume",
            "autoMute",
            "alt",
            "renderAdjacentContent",
            "renderOverlayContent",
            "disableAltTextDisplay",
            "hiddenSpoilers",
            "mosaicStyleAlt",
            "mediaLayoutType",
            "reducedSizeAltTextButton",
        ]);
    let E = X(t),
        b = Q(n);
    (a = null == a ? M.FC : a), (s = null == s ? M.rs : s);
    let [y, O] = i.useState(!0),
        [v, T] = i.useState(!1),
        S = h === k.hV.MOSAIC || !0 === p,
        A = (y || v) && !f && N.H1.getSetting() && null != l && "" !== l && !0 !== _,
        C = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.VqE, {
                "aria-label": Z.intl.string(Z.t.fSiQ3A),
                className: F.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === B.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null == (e = R.current) ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, r.jsx)("span", {
                        className: F.mediaMosaicAltTextPopoutTitle,
                        children: Z.intl.string(Z.t.fSiQ3A),
                    }),
                    (0, r.jsx)("span", {
                        className: F.mediaMosaicAltTextPopoutDescription,
                        children: t,
                    }),
                ],
            });
        },
        R = i.useRef(null);
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(
                I.Z,
                W(H({}, g), {
                    alt: l,
                    autoMute: s,
                    mediaLayoutType: h,
                    onControlsHide: () => O(!1),
                    onControlsShow: () => O(!0),
                    onMute: b,
                    onVolumeChange: E,
                    renderLinkComponent: er,
                    renderOverlayContent: u,
                    volume: a,
                }),
            ),
            null != c && c(),
            S &&
                A &&
                (0, r.jsx)("div", {
                    className: F.mediaMosaicVideoAltTextContainer,
                    children: (0, r.jsx)(d.yRy, {
                        targetElementRef: R,
                        animation: d.yRy.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(C, { altText: l }),
                        children: (e) =>
                            (0, r.jsx)(d.tEY, {
                                offset: 4,
                                children: (0, r.jsx)(
                                    "button",
                                    W(H({}, e), {
                                        type: "button",
                                        ref: R,
                                        "aria-label": Z.intl.string(Z.t.fSiQ3A),
                                        onMouseEnter: () => T(!0),
                                        onMouseLeave: () => T(!1),
                                        className: o()(F.mediaMosaicAltText, {
                                            [F.mediaMosaicVideoAltText]: !0,
                                            [F.reducedSize]: m,
                                        }),
                                        children: Z.intl.string(Z.t.jCV1Tz),
                                    }),
                                ),
                            }),
                    }),
                }),
            !S &&
                A &&
                (0, r.jsx)("span", {
                    className: F.altText,
                    children: l,
                }),
        ],
    });
}
function $(e) {
    return (0, r.jsx)(J, H({}, e));
}
function ee(e) {
    var { onVolumeChange: t, volume: n, onMute: a, onVolumeShow: o, onVolumeHide: s, renderAdjacentContent: l } = e,
        c = K(e, ["onVolumeChange", "volume", "onMute", "onVolumeShow", "onVolumeHide", "renderAdjacentContent"]);
    let u = X(t),
        d = Q(a);
    n = null == n ? M.FC : n;
    let f = () => !1;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(
                v.Z,
                W(H({}, c), {
                    onVolumeChange: u,
                    onMute: d,
                    onVolumeShow: o,
                    onVolumeHide: s,
                    volume: n,
                    autoMute: f,
                    renderLinkComponent: er,
                }),
            ),
            null != l && l(),
        ],
    });
}
function et(e) {
    var { onVolumeChange: t, volume: n, onMute: i } = e,
        a = K(e, ["onVolumeChange", "volume", "onMute"]);
    let o = X(t),
        s = Q(i);
    return (
        (n = null == n ? M.FC : n),
        (0, r.jsx)(
            R.Z,
            W(H({}, a), {
                onVolumeChange: o,
                onMute: s,
                volume: n,
            }),
        )
    );
}
function en(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: a,
            containerClassName: s,
            imageContainerClassName: l,
            disableAltTextDisplay: c = !1,
            reducedSizeAltTextButton: u = !1,
            mediaLayoutType: f,
            imageContainerStyle: _,
            mosaicStyleAlt: h,
        } = e,
        m = f === k.hV.MOSAIC || !0 === h,
        g = !c && N.H1.getSetting() && null != t && "" !== t && !0 !== n,
        E = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.VqE, {
                "aria-label": Z.intl.string(Z.t.fSiQ3A),
                className: F.mediaMosaicAltTextPopout,
                onKeyDown: (e) => {
                    e.key === B.mR.Escape &&
                        setTimeout(() => {
                            var e;
                            return null == (e = b.current) ? void 0 : e.focus();
                        }, 0);
                },
                children: [
                    (0, r.jsx)("span", {
                        className: F.mediaMosaicAltTextPopoutTitle,
                        children: Z.intl.string(Z.t.fSiQ3A),
                    }),
                    (0, r.jsx)("span", {
                        className: F.mediaMosaicAltTextPopoutDescription,
                        children: t,
                    }),
                ],
            });
        },
        b = i.createRef();
    return (0, r.jsxs)("div", {
        className: o()(F.imageContent, s),
        children: [
            (0, r.jsxs)("div", {
                className: o()(F.imageContainer, l),
                style: _,
                children: [(0, r.jsx)(p.Z, H({}, e)), null != a && a()],
            }),
            m &&
                g &&
                (0, r.jsx)("div", {
                    className: F.mediaMosaicAltTextContainer,
                    children: (0, r.jsx)(d.yRy, {
                        targetElementRef: b,
                        animation: d.yRy.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(E, { altText: t }),
                        children: (e) =>
                            (0, r.jsx)(d.tEY, {
                                offset: 4,
                                children: (0, r.jsx)(
                                    "button",
                                    W(H({}, e), {
                                        type: "button",
                                        ref: b,
                                        "aria-label": Z.intl.string(Z.t.fSiQ3A),
                                        className: o()(F.mediaMosaicAltText, { [F.reducedSize]: u }),
                                        children: Z.intl.string(Z.t.jCV1Tz),
                                    }),
                                ),
                            }),
                    }),
                }),
            !m &&
                g &&
                (0, r.jsx)("span", {
                    className: F.altText,
                    children: t,
                }),
        ],
    });
}
function er(e) {
    return (0, r.jsx)(h.Z, H({}, e));
}
function ei(e) {
    var { renderAdjacentContent: t } = e,
        n = K(e, ["renderAdjacentContent"]);
    return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(T.Z, H({}, n)), null != t && t()],
    });
}
function ea(e) {
    return (0, r.jsx)(E.Z, H({}, e));
}
var eo = (function (e) {
    return (e[(e.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (e[(e.REPLY = 1)] = "REPLY"), e;
})({});
function es(e) {
    switch (e) {
        case 0:
            return Z.intl.string(Z.t["4EvBbw"]);
        case 1:
            return Z.intl.string(Z.t["1J6Xq7"]);
        default:
            return (0, L.vE)(e);
    }
}
function el(e) {
    switch (e) {
        case 0:
            return Z.intl.string(Z.t.gpoQsB);
        case 1:
            return Z.intl.string(Z.t.k3RM8z);
        default:
            return (0, L.vE)(e);
    }
}
let ec = (e) => {
        let { type: t = 0, onClick: n, className: i } = e;
        return (0, r.jsx)(b.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)("div", {
                          onClick: n,
                          className: o()(F.jumpToPresentBar, i),
                          children: [
                              (0, r.jsx)("div", {
                                  className: F.barButtonMain,
                                  children: es(t),
                              }),
                              null != n
                                  ? (0, r.jsx)(d.tEY, {
                                        offset: -2,
                                        children: (0, r.jsx)(d.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: el(t),
                                            onClick: n,
                                        }),
                                    })
                                  : (0, r.jsx)(d.$jN, {
                                        type: d.$jN.Type.PULSING_ELLIPSIS,
                                        className: F.spinner,
                                        itemClassName: F.spinnerItem,
                                    }),
                          ],
                      }),
        });
    },
    eu = (e) => {
        let { onClick: t, loading: n, className: i } = e;
        return (0, r.jsx)(b.G.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)(d.P3F, {
                          className: o()(F.messagesErrorBar, i),
                          onClick: t,
                          focusProps: {
                              offset: {
                                  top: 4,
                                  right: 4,
                                  bottom: 12,
                                  left: 4,
                              },
                          },
                          children: [
                              (0, r.jsx)("div", {
                                  className: F.barButtonMain,
                                  children: Z.intl.string(Z.t["1zUvlw"]),
                              }),
                              n
                                  ? (0, r.jsx)(d.$jN, {
                                        type: d.$jN.Type.PULSING_ELLIPSIS,
                                        className: F.spinner,
                                        itemClassName: F.spinnerItem,
                                    })
                                  : (0, r.jsx)("div", {
                                        className: F.barButtonAlt,
                                        children: Z.intl.string(Z.t.TdQXA8),
                                    }),
                          ],
                      }),
        });
    };
function ed(e) {
    let { content: t, channelId: n } = e,
        [a] = i.useState(() => (0, y.hQ)("NewMessagesBarJumpToNewMessages_")),
        s = i.useCallback(() => {
            let e = P.ZP.ackMessageId(n);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: n,
                      messageId: e,
                      offset: 1,
                      context: "Mark As Read",
                  })
                : f.Z.jumpToMessage({
                      channelId: n,
                      messageId: j.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        l = i.useCallback(() => {
            (0, _.ack)(n, {
                section: U.jXE.NEW_MESSAGES_BANNER,
                object: U.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: U.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: c } = i.useContext(b.G);
    return c
        ? null
        : (0, r.jsxs)("div", {
              className: o()(F.newMessagesBar, { [F.disableInteractions]: c }),
              children: [
                  (0, r.jsx)(d.tEY, {
                      offset: 4,
                      children: (0, r.jsx)("button", {
                          type: "button",
                          className: F.barButtonMain,
                          onClick: s,
                          "aria-label": Z.intl.string(Z.t.z0Mkp3),
                          "aria-describedby": a,
                          children: (0, r.jsx)("span", {
                              id: a,
                              className: F.span,
                              children: t,
                          }),
                      }),
                  }),
                  (0, r.jsx)(d.tEY, {
                      offset: 4,
                      children: (0, r.jsxs)("button", {
                          type: "button",
                          onClick: l,
                          className: F.barButtonAlt,
                          children: [
                              Z.intl.string(Z.t.e6RscS),
                              (0, r.jsx)(d.eQA, {
                                  size: "md",
                                  color: "currentColor",
                                  className: F.barButtonIcon,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
function ef(e) {
    var t, n, a;
    let { channel: s, content: p, scrollManager: h } = e,
        { disableInteractions: E } = i.useContext(b.G),
        [y, v] = i.useState(null),
        I = i.useRef(null),
        [T, N] = i.useState(null),
        R = i.useRef(null),
        M = (0, u.Wu)([A.Z], () => {
            var e;
            return null != (e = A.Z.summaries(s.id)) ? e : [];
        }, [s]),
        k = (0, g.Z)(M);
    i.useEffect(() => {
        l().isEqual(k, M) ||
            x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: M.length,
                message_counts: M.map((e) => e.count),
                start_message_ids: M.map((e) => e.startId),
                end_message_ids: M.map((e) => e.endId),
                num_participants: M.map((e) => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type,
            });
    }, [M, k, s.guild_id, s.id, s.type]);
    let B = (0, u.e7)(
            [w.default],
            () => {
                var e;
                return null !=
                    (e =
                        null == M
                            ? void 0
                            : M.map((e) => {
                                  var t;
                                  return null == (t = e.people)
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null != (t = w.default.getUser(e)) ? t : null;
                                            })
                                            .filter(L.lm);
                              }))
                    ? e
                    : [];
            },
            [M],
            ep,
        ),
        V = null != (n = (0, u.e7)([A.Z], () => A.Z.visibleSummaryIndex())) ? n : -1,
        H = null == M || null == (t = M[V]) ? void 0 : t.topic;
    null == H && null == y && (null == M ? void 0 : M.length) >= 1 && (H = null == (a = M[0]) ? void 0 : a.topic);
    let Y = i.useMemo(
            () =>
                l().debounce((e) => {
                    var t;
                    v(null != (t = null == e ? void 0 : e.id) ? t : null);
                }, 64),
            [v],
        ),
        W = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, S.yK)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        K = i.useCallback(
            (e) => {
                W(), Y(e);
            },
            [Y, W],
        ),
        [z, q] = i.useState(!1),
        X = i.useCallback(() => {
            x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: M.length,
                message_counts: M.map((e) => e.count),
                start_message_ids: M.map((e) => e.startId),
                end_message_ids: M.map((e) => e.endId),
                num_participants: M.map((e) => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type,
            }),
                q(!z);
        }, [z, M, q, s]),
        Q = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.DZ.PILL_DROPDOWN,
                    n = M[e];
                if (null == n) return;
                (0, S.wv)(s.id, n.id), (0, S.yK)(s.id, n.id);
                let r = () => {
                    h.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            h.addAutomaticAnchorCallback(K, !1);
                        }, 100);
                };
                h.removeAutomaticAnchorCallback(K),
                    h.addScrollCompleteCallback(r),
                    x.default.track(U.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: s.guild_id,
                        channel_id: s.id,
                        channel_type: s.type,
                    }),
                    f.Z.jumpToMessage({
                        channelId: s.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: m.SR.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [M, s, K, h],
        ),
        J = i.useCallback((e) => {
            var t;
            q(e);
            let n = null == (t = R.current) ? void 0 : t.scrollTop;
            null != n && N(n);
        }, []);
    i.useEffect(() => {
        if (null != T && z) {
            var e;
            null == (e = R.current) || e.scrollTo({ top: T });
        }
    }, [T, z]);
    let $ = i.useCallback(
        (e) => {
            var t;
            ((0, c.kK)(e.target) && (null == (t = I.current) ? void 0 : t.contains(e.target))) ||
                (z &&
                    x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: M.length,
                        message_counts: M.map((e) => e.count),
                        start_message_ids: M.map((e) => e.startId),
                        end_message_ids: M.map((e) => e.endId),
                        num_participants: M.map((e) => e.people.length),
                        guild_id: s.guild_id,
                        channel_id: s.id,
                        channel_type: s.type,
                    }),
                J(!1));
        },
        [z, M, s, J],
    );
    i.useEffect(
        () => (
            h.addAutomaticAnchorCallback(K),
            () => {
                h.removeAutomaticAnchorCallback(K);
            }
        ),
        [h, K],
    ),
        i.useEffect(() => {
            (0, S.G1)(s.id);
        }, [s.id]),
        i.useEffect(
            () => (
                document.addEventListener("mousedown", $),
                () => {
                    document.removeEventListener("mousedown", $);
                }
            ),
            [$],
        );
    let ee = i.useMemo(
            () =>
                (0, r.jsx)(C.Z, {
                    channel: s,
                    summaries: M,
                    summariesMembers: B,
                    selectTopic: Q,
                    setOpen: J,
                }),
            [M, B, Q, J, s],
        ),
        et = i.useCallback(() => {
            let e = P.ZP.ackMessageId(s.id);
            null != e
                ? f.Z.jumpToMessage({
                      channelId: s.id,
                      messageId: e,
                      offset: 1,
                      context: "Mark As Read",
                  })
                : f.Z.jumpToMessage({
                      channelId: s.id,
                      messageId: j.default.castChannelIdAsMessageId(s.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [s.id]),
        en = i.useCallback(() => {
            (0, _.ack)(s.id, {
                section: U.jXE.NEW_TOPICS_BAR,
                object: U.qAy.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: U.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [s.id]),
        er = Z.intl.string(Z.t["38qwgO"]);
    return (
        M.length > 0 && (er = "" === H || null == H ? Z.intl.string(Z.t.DwnFuG) : H),
        E
            ? null
            : (0, r.jsxs)("div", {
                  ref: I,
                  className: o()(F.newTopicsBarContainer, F.containerMarginTop),
                  children: [
                      (0, r.jsx)("div", {
                          className: F.newTopicsBarTopicSection,
                          children: (0, r.jsx)(d.P3F, {
                              className: F.newTopicsBarTextClickable,
                              "aria-label": Z.intl.string(Z.t.RT3MPz),
                              onClick: X,
                              children: (0, r.jsxs)("div", {
                                  className: o()({
                                      [F.newTopicsBarTextUnselected]: !z,
                                      [F.newTopicsBarTextSelected]: z,
                                  }),
                                  children: [
                                      (0, r.jsx)(d.sVe, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: F.newTopicsBarIcon,
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/medium",
                                          className: o()(F.newTopicsBarCompact, F.newTopicsBarText),
                                          children: er,
                                      }),
                                      (0, r.jsx)(D.Z, {
                                          width: 16,
                                          height: 16,
                                          direction: D.Z.Directions.DOWN,
                                          className: F.newTopicsBarCaret,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(d.P3F, {
                          onClick: et,
                          className: F.newTopicsBarInitial,
                          children: p,
                      }),
                      (0, r.jsxs)(d.P3F, {
                          onClick: en,
                          className: o()(F.barButtonAlt, F.flexEnd),
                          children: [
                              (0, r.jsx)("div", {
                                  className: F.newTopicsBarCompact,
                                  children: Z.intl.string(Z.t.e6RscS),
                              }),
                              (0, r.jsx)(d.eQA, {
                                  size: "md",
                                  color: "currentColor",
                                  className: F.barButtonIcon,
                              }),
                          ],
                      }),
                      z &&
                          (0, r.jsxs)("div", {
                              className: F.topicsDropdown,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: F.topicsDropdownHeading,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: F.topicsDropdownHeadingText,
                                              children: [
                                                  (0, r.jsx)(d.sVe, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: F.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(d.Heading, {
                                                      variant: "heading-md/bold",
                                                      color: "header-primary",
                                                      lineClamp: 1,
                                                      children: Z.intl.string(Z.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(O.Z, { className: F.summariesBetaTag }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.P3F, {
                                              "aria-label": Z.intl.string(Z.t.cpT0Cq),
                                              onClick: X,
                                              className: F.topicsDropdownClose,
                                              children: (0, r.jsx)(d.Dio, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.Ttm, {
                                      ref: R,
                                      className: F.topicsScroller,
                                      fade: !0,
                                      children: ee,
                                  }),
                              ],
                          }),
                  ],
              })
    );
}
function e_(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
function ep(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => !e_(e, t[n]));
}
function eh(e) {
    var t, n, a;
    let { channel: s, scrollManager: _ } = e,
        { disableInteractions: p } = i.useContext(b.G),
        [h, E] = i.useState(null),
        y = i.useRef(null),
        [v, I] = i.useState(null),
        T = i.useRef(null),
        N = (0, u.Wu)([A.Z], () => {
            var e;
            return null != (e = A.Z.summaries(s.id)) ? e : [];
        }, [s]),
        R = (0, g.Z)(N);
    i.useEffect(() => {
        l().isEqual(R, N) ||
            x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: N.length,
                message_counts: N.map((e) => e.count),
                start_message_ids: N.map((e) => e.startId),
                end_message_ids: N.map((e) => e.endId),
                num_participants: N.map((e) => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type,
            });
    }, [N, R, s.guild_id, s.id, s.type]);
    let P = (0, u.e7)(
            [w.default],
            () => {
                var e;
                return null !=
                    (e =
                        null == N
                            ? void 0
                            : N.map((e) => {
                                  var t;
                                  return null == (t = e.people)
                                      ? void 0
                                      : t
                                            .map((e) => {
                                                var t;
                                                return null != (t = w.default.getUser(e)) ? t : null;
                                            })
                                            .filter(L.lm);
                              }))
                    ? e
                    : [];
            },
            [N],
            ep,
        ),
        M = null != (n = (0, u.e7)([A.Z], () => A.Z.visibleSummaryIndex())) ? n : -1,
        j = null == N || null == (t = N[M]) ? void 0 : t.topic;
    null == j && null == h && (null == N ? void 0 : N.length) >= 1 && (j = null == (a = N[0]) ? void 0 : a.topic);
    let k = i.useMemo(() => l().get(N, M - 1), [M, N]),
        B = i.useMemo(() => l().get(N, M + 1), [M, N]),
        V = i.useMemo(
            () =>
                l().debounce((e) => {
                    var t;
                    E(null != (t = null == e ? void 0 : e.id) ? t : null);
                }, 64),
            [E],
        ),
        H = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, S.yK)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        Y = i.useCallback(
            (e) => {
                H(), V(e);
            },
            [V, H],
        ),
        [W, K] = i.useState(!1),
        z = i.useCallback(() => {
            x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !W,
                num_summaries: N.length,
                message_counts: N.map((e) => e.count),
                start_message_ids: N.map((e) => e.startId),
                end_message_ids: N.map((e) => e.endId),
                num_participants: N.map((e) => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type,
            }),
                K(!W);
        }, [W, N, K, s]),
        q = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.DZ.PILL_DROPDOWN,
                    n = N[e];
                if (null == n) return;
                (0, S.wv)(s.id, n.id), (0, S.yK)(s.id, n.id);
                let r = () => {
                    _.removeScrollCompleteCallback(r),
                        setTimeout(() => {
                            _.addAutomaticAnchorCallback(Y, !1);
                        }, 100);
                };
                _.removeAutomaticAnchorCallback(Y),
                    _.addScrollCompleteCallback(r),
                    x.default.track(U.rMx.SUMMARIES_TOPIC_CLICKED, {
                        source: t,
                        message_id: n.startId,
                        guild_id: s.guild_id,
                        channel_id: s.id,
                        channel_type: s.type,
                    }),
                    f.Z.jumpToMessage({
                        channelId: s.id,
                        messageId: n.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: m.SR.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [N, s, Y, _],
        ),
        X = i.useCallback(() => {
            q(M - 1, G.DZ.PILL_NEXT_ARROW);
        }, [q, M]),
        Q = i.useCallback(() => {
            q(M + 1, G.DZ.PILL_PREVIOUS_ARROW);
        }, [M, q]),
        J = i.useCallback((e) => {
            var t;
            K(e);
            let n = null == (t = T.current) ? void 0 : t.scrollTop;
            null != n && I(n);
        }, []);
    i.useEffect(() => {
        if (null != v && W) {
            var e;
            null == (e = T.current) || e.scrollTo({ top: v });
        }
    }, [v, W]);
    let $ = i.useCallback(
        (e) => {
            var t;
            ((0, c.kK)(e.target) && (null == (t = y.current) ? void 0 : t.contains(e.target))) ||
                (W &&
                    x.default.track(U.rMx.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: N.length,
                        message_counts: N.map((e) => e.count),
                        start_message_ids: N.map((e) => e.startId),
                        end_message_ids: N.map((e) => e.endId),
                        num_participants: N.map((e) => e.people.length),
                        guild_id: s.guild_id,
                        channel_id: s.id,
                        channel_type: s.type,
                    }),
                J(!1));
        },
        [W, N, s, J],
    );
    i.useEffect(
        () => (
            _.addAutomaticAnchorCallback(Y),
            () => {
                _.removeAutomaticAnchorCallback(Y);
            }
        ),
        [_, Y],
    ),
        i.useEffect(() => {
            (0, S.G1)(s.id);
        }, [s.id]),
        i.useEffect(
            () => (
                document.addEventListener("mousedown", $),
                () => {
                    document.removeEventListener("mousedown", $);
                }
            ),
            [$],
        );
    let ee = i.useMemo(
        () =>
            (0, r.jsx)(C.Z, {
                channel: s,
                summaries: N,
                summariesMembers: P,
                selectTopic: q,
                setOpen: J,
            }),
        [N, P, q, J, s],
    );
    if (!(0, u.e7)([A.Z], () => A.Z.shouldShowTopicsBar())) return null;
    let et = Z.intl.string(Z.t["38qwgO"]);
    return (
        N.length > 0 && (et = "" === j || null == j ? Z.intl.string(Z.t.DwnFuG) : j),
        p
            ? null
            : (0, r.jsxs)("div", {
                  ref: y,
                  className: o()(F.topicsPillContainer, F.containerMarginTop),
                  children: [
                      (0, r.jsxs)("div", {
                          className: F.topicsPill,
                          children: [
                              (0, r.jsx)(d.P3F, {
                                  className: F.topicsPillText,
                                  "aria-label": Z.intl.string(Z.t.RT3MPz),
                                  onClick: z,
                                  children: (0, r.jsxs)("div", {
                                      className: o()({
                                          [F.topicsPillTextUnselected]: !W,
                                          [F.topicsPillTextSelected]: W,
                                      }),
                                      children: [
                                          (0, r.jsx)(d.sVe, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: F.topicsPillSummaryIcon,
                                          }),
                                          (0, r.jsx)(d.Text, {
                                              className: F.topicsPillTextTitle,
                                              variant: "text-sm/medium",
                                              children: et,
                                          }),
                                          (0, r.jsx)(D.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: D.Z.Directions.DOWN,
                                              className: F.topicsPillDropdownCaret,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: F.topicsPillCarets,
                                  children: [
                                      (0, r.jsx)(d.P3F, {
                                          "aria-label": Z.intl.string(Z.t["4huCnC"]),
                                          onClick: Q,
                                          className: o()(F.topicsPillCaret, F.topicsCaretLeft, {
                                              [F.topicsPillCaretDisabled]: null == B,
                                          }),
                                          children: (0, r.jsx)(D.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: D.Z.Directions.UP,
                                          }),
                                      }),
                                      (0, r.jsx)(d.P3F, {
                                          "aria-label": Z.intl.string(Z.t["58KOoF"]),
                                          onClick: X,
                                          className: o()(F.topicsPillCaret, F.topicsCaretRight, {
                                              [F.topicsPillCaretDisabled]: null == k,
                                          }),
                                          children: (0, r.jsx)(D.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: D.Z.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      W &&
                          (0, r.jsxs)("div", {
                              className: F.topicsDropdown,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: F.topicsDropdownHeading,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: F.topicsDropdownHeadingText,
                                              children: [
                                                  (0, r.jsx)(d.sVe, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: F.topicsPillHeadingIcon,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(d.Heading, {
                                                      variant: "heading-md/bold",
                                                      color: "header-primary",
                                                      lineClamp: 1,
                                                      children: Z.intl.string(Z.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(O.Z, { className: F.summariesBetaTag }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.P3F, {
                                              "aria-label": Z.intl.string(Z.t.cpT0Cq),
                                              onClick: z,
                                              className: F.topicsDropdownClose,
                                              children: (0, r.jsx)(d.Dio, {
                                                  size: "md",
                                                  color: "currentColor",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.Ttm, {
                                      ref: T,
                                      className: F.topicsScroller,
                                      fade: !0,
                                      children: ee,
                                  }),
                              ],
                          }),
                  ],
              })
    );
}
let em = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, r.jsxs)("div", {
            className: F.tooltip,
            children: [
                (0, r.jsx)(d.Text, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: F.tooltipEmojiName,
                    children: e,
                }),
                t &&
                    (0, r.jsx)(d.Text, {
                        className: F.clickCTA,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: Z.intl.string(Z.t["515vjG"]),
                    }),
            ],
        });
    },
    eg = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", {
            className: o()(F.popoutContainer, n),
            children: t,
        });
    },
    eE = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(eg, {
            className: t,
            children: (0, r.jsx)("div", {
                className: F.popoutLoadingBackground,
                children: (0, r.jsx)("div", { className: F.popoutLoadingForeground }),
            }),
        });
    };
