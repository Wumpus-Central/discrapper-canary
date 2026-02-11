"use strict";
n.d(t, {
    $o: () => z,
    Ab: () => ei,
    Dk: () => ee,
    Ez: () => ea,
    GN: () => es,
    LL: () => Z,
    OZ: () => eo,
    P$: () => X,
    UK: () => ec,
    Uk: () => Y,
    Uq: () => e_,
    Y0: () => ef,
    _d: () => J,
    bU: () => Q,
    gL: () => q,
    ks: () => et,
    yR: () => ed,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(621466),
    c = n(311907),
    d = n(397927),
    _ = n(843472),
    f = n(334738),
    h = n(490693),
    p = n(9578),
    g = n(56562),
    E = n(475743),
    A = n(718468),
    I = n(692051),
    T = n(915089),
    y = n(611371),
    S = n(74068),
    v = n(248643),
    C = n(752063),
    b = n(863922),
    N = n(513272),
    R = n(977463),
    O = n(253932),
    D = n(41431),
    L = n(222823),
    w = n(287809),
    x = n(147925),
    P = n(954571),
    M = n(403362),
    k = n(587481),
    U = n(661191),
    G = n(838541),
    F = n(652215),
    V = n(521732),
    B = n(650583),
    j = n(985018),
    H = n(702926);
let Y = { delay: 300, position: "top" },
    W = (e) => (t) => {
        e?.(t), (0, k.ls)(t);
    },
    K = (e) => (t) => {
        e?.(t), (0, k.y5)(t);
    };
function $(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: a,
            autoMute: o,
            alt: l,
            renderAdjacentContent: u,
            renderOverlayContent: c,
            disableAltTextDisplay: _ = !1,
            hiddenSpoilers: f,
            mosaicStyleAlt: h,
            mediaLayoutType: p,
            reducedSizeAltTextButton: g,
            ...E
        } = e,
        A = W(t),
        I = K(n);
    (a = null == a ? k.v1 : a), (o = null == o ? k.uj : o);
    let [T, y] = i.useState(!0),
        [S, C] = i.useState(!1),
        b = p === G.dG.MOSAIC || !0 === h,
        N = (T || S) && !_ && O._z.getSetting() && null != l && "" !== l && !0 !== f,
        R = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.lGe, {
                "aria-label": j.intl.string(j.t.fSiQ3A),
                className: H.ob,
                onKeyDown: (e) => {
                    e.key === B.N$.Escape && setTimeout(() => D.current?.focus(), 0);
                },
                children: [
                    (0, r.jsx)("span", { className: H.k_, children: j.intl.string(j.t.fSiQ3A) }),
                    (0, r.jsx)("span", { className: H.a7, children: t }),
                ],
            });
        },
        D = i.useRef(null);
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(v.A, {
                ...E,
                alt: l,
                autoMute: o,
                mediaLayoutType: p,
                onControlsHide: () => y(!1),
                onControlsShow: () => y(!0),
                onMute: I,
                onVolumeChange: A,
                renderLinkComponent: Q,
                renderOverlayContent: c,
                volume: a,
            }),
            null != u && u(),
            b &&
                N &&
                (0, r.jsx)("div", {
                    className: H.NO,
                    children: (0, r.jsx)(d.YNO, {
                        targetElementRef: D,
                        animation: d.YNO.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(R, { altText: l }),
                        children: (e) =>
                            (0, r.jsx)(d.vN3, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: D,
                                    "aria-label": j.intl.string(j.t.fSiQ3A),
                                    onMouseEnter: () => C(!0),
                                    onMouseLeave: () => C(!1),
                                    className: s()(H.DV, { [H.yZ]: !0, [H.I5]: g }),
                                    children: j.intl.string(j.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !b && N && (0, r.jsx)("span", { className: H.R5, children: l }),
        ],
    });
}
function z(e) {
    return (0, r.jsx)($, { ...e });
}
function q(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: a,
            onVolumeShow: s,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...u
        } = e,
        c = W(t),
        d = K(a);
    n = null == n ? k.v1 : n;
    let _ = () => !1;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(S.A, {
                ...u,
                onVolumeChange: c,
                onMute: d,
                onVolumeShow: s,
                onVolumeHide: o,
                volume: n,
                autoMute: _,
                renderLinkComponent: Q,
            }),
            null != l && l(),
        ],
    });
}
function X(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...a } = e,
        s = W(t),
        o = K(i);
    return (n = null == n ? k.v1 : n), (0, r.jsx)(D.A, { ...a, onVolumeChange: s, onMute: o, volume: n });
}
function Z(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: a,
            containerClassName: o,
            imageContainerClassName: l,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: _,
            imageContainerStyle: f,
            mosaicStyleAlt: p,
        } = e,
        g = _ === G.dG.MOSAIC || !0 === p,
        E = !u && O._z.getSetting() && null != t && "" !== t && !0 !== n,
        A = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.lGe, {
                "aria-label": j.intl.string(j.t.fSiQ3A),
                className: H.ob,
                onKeyDown: (e) => {
                    e.key === B.N$.Escape && setTimeout(() => I.current?.focus(), 0);
                },
                children: [
                    (0, r.jsx)("span", { className: H.k_, children: j.intl.string(j.t.fSiQ3A) }),
                    (0, r.jsx)("span", { className: H.a7, children: t }),
                ],
            });
        },
        I = i.createRef();
    return (0, r.jsxs)("div", {
        className: s()(H.fo, o),
        children: [
            (0, r.jsxs)("div", {
                className: s()(H.ZS, l),
                style: f,
                children: [(0, r.jsx)(h.A, { ...e }), null != a && a()],
            }),
            g &&
                E &&
                (0, r.jsx)("div", {
                    className: H.Y1,
                    children: (0, r.jsx)(d.YNO, {
                        targetElementRef: I,
                        animation: d.YNO.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(A, { altText: t }),
                        children: (e) =>
                            (0, r.jsx)(d.vN3, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: I,
                                    "aria-label": j.intl.string(j.t.fSiQ3A),
                                    className: s()(H.DV, { [H.I5]: c }),
                                    children: j.intl.string(j.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !g && E && (0, r.jsx)("span", { className: H.R5, children: t }),
        ],
    });
}
function Q(e) {
    return (0, r.jsx)(p.A, { ...e });
}
function J(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, r.jsxs)(i.Fragment, { children: [(0, r.jsx)(C.A, { ...n }), null != t && t()] });
}
function ee(e) {
    return (0, r.jsx)(A.A, { ...e });
}
var et = (function (e) {
    return (e[(e.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (e[(e.REPLY = 1)] = "REPLY"), e;
})({});
function en(e) {
    switch (e) {
        case 0:
            return j.intl.string(j.t["4EvBbw"]);
        case 1:
            return j.intl.string(j.t["1J6Xq7"]);
        default:
            return (0, M.xb)(e);
    }
}
function er(e) {
    switch (e) {
        case 0:
            return j.intl.string(j.t.gpoQsB);
        case 1:
            return j.intl.string(j.t.k3RM8z);
        default:
            return (0, M.xb)(e);
    }
}
let ei = (e) => {
        let { type: t = 0, onClick: n, className: i } = e;
        return (0, r.jsx)(I.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)("div", {
                          onClick: n,
                          className: s()(H.Sg, i),
                          children: [
                              (0, r.jsx)("div", { className: H.$I, children: en(t) }),
                              null != n
                                  ? (0, r.jsx)(d.vN3, {
                                        offset: -2,
                                        children: (0, r.jsx)(d.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: er(t),
                                            onClick: n,
                                        }),
                                    })
                                  : (0, r.jsx)(d.y$y, {
                                        type: d.y$y.Type.PULSING_ELLIPSIS,
                                        className: H.u1,
                                        itemClassName: H.$N,
                                    }),
                          ],
                      }),
        });
    },
    ea = (e) => {
        let { onClick: t, loading: n, className: i } = e;
        return (0, r.jsx)(I.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)(d.DUT, {
                          className: s()(H._5, i),
                          onClick: t,
                          focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                          children: [
                              (0, r.jsx)("div", { className: H.$I, children: j.intl.string(j.t["1zUvlw"]) }),
                              n
                                  ? (0, r.jsx)(d.y$y, {
                                        type: d.y$y.Type.PULSING_ELLIPSIS,
                                        className: H.u1,
                                        itemClassName: H.$N,
                                    })
                                  : (0, r.jsx)("div", { className: H.hQ, children: j.intl.string(j.t.TdQXA8) }),
                          ],
                      }),
        });
    };
function es(e) {
    let { content: t, channelId: n } = e,
        [a] = i.useState(() => (0, T.Ld)("NewMessagesBarJumpToNewMessages_")),
        o = i.useCallback(() => {
            let e = L.Ay.ackMessageId(n);
            null != e
                ? _.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : _.A.jumpToMessage({
                      channelId: n,
                      messageId: U.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        l = i.useCallback(() => {
            (0, f.ack)(n, {
                section: F.JJy.NEW_MESSAGES_BANNER,
                object: F.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: F.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = i.useContext(I.Y);
    return u
        ? null
        : (0, r.jsxs)("div", {
              className: s()(H.eb, { [H.y7]: u }),
              children: [
                  (0, r.jsx)(d.vN3, {
                      offset: 4,
                      children: (0, r.jsx)("button", {
                          type: "button",
                          className: H.$I,
                          onClick: o,
                          "aria-label": j.intl.string(j.t.z0Mkp3),
                          "aria-describedby": a,
                          children: (0, r.jsx)("span", { id: a, className: H.Ln, children: t }),
                      }),
                  }),
                  (0, r.jsx)(d.vN3, {
                      offset: 4,
                      children: (0, r.jsxs)("button", {
                          type: "button",
                          onClick: l,
                          className: H.hQ,
                          children: [
                              j.intl.string(j.t.e6RscS),
                              (0, r.jsx)(d.MBj, { size: "md", color: "currentColor", className: H.t3 }),
                          ],
                      }),
                  }),
              ],
          });
}
function eo(e) {
    let { channel: t, content: n, scrollManager: a } = e,
        { disableInteractions: o } = i.useContext(I.Y),
        [h, p] = i.useState(null),
        A = i.useRef(null),
        [T, S] = i.useState(null),
        v = i.useRef(null),
        C = (0, c.yK)([N.A], () => N.A.summaries(t.id) ?? [], [t]),
        O = (0, E.A)(C);
    i.useEffect(() => {
        l().isEqual(O, C) ||
            P.default.track(F.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [C, O, t.guild_id, t.id, t.type]);
    let D = (0, c.bG)(
            [w.default],
            () => C?.map((e) => e.people?.map((e) => w.default.getUser(e) ?? null).filter(M.Vq)) ?? [],
            [C],
            eu,
        ),
        k = (0, c.bG)([N.A], () => N.A.visibleSummaryIndex()) ?? -1,
        G = C?.[k]?.topic;
    null == G && null == h && C?.length >= 1 && (G = C[0]?.topic);
    let B = i.useMemo(
            () =>
                l().debounce((e) => {
                    p(e?.id ?? null);
                }, 64),
            [p],
        ),
        Y = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, b.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        W = i.useCallback(
            (e) => {
                Y(), B(e);
            },
            [B, Y],
        ),
        [K, $] = i.useState(!1),
        z = i.useCallback(() => {
            P.default.track(F.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !K,
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                $(!K);
        }, [K, C, $, t]),
        q = i.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.eh.PILL_DROPDOWN,
                    r = C[e];
                if (null == r) return;
                (0, b.sK)(t.id, r.id), (0, b.C6)(t.id, r.id);
                let i = () => {
                    a.removeScrollCompleteCallback(i),
                        setTimeout(() => {
                            a.addAutomaticAnchorCallback(W, !1);
                        }, 100);
                };
                a.removeAutomaticAnchorCallback(W),
                    a.addScrollCompleteCallback(i),
                    P.default.track(F.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: r.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    _.A.jumpToMessage({
                        channelId: t.id,
                        messageId: r.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: g.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [C, t, W, a],
        ),
        X = i.useCallback((e) => {
            $(e);
            let t = v.current?.scrollTop;
            null != t && S(t);
        }, []);
    i.useEffect(() => {
        null != T && K && v.current?.scrollTo({ top: T });
    }, [T, K]);
    let Z = i.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && A.current?.contains(e.target)) ||
                (K &&
                    P.default.track(F.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: C.length,
                        message_counts: C.map((e) => e.count),
                        start_message_ids: C.map((e) => e.startId),
                        end_message_ids: C.map((e) => e.endId),
                        num_participants: C.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                X(!1));
        },
        [K, C, t, X],
    );
    i.useEffect(
        () => (
            a.addAutomaticAnchorCallback(W),
            () => {
                a.removeAutomaticAnchorCallback(W);
            }
        ),
        [a, W],
    ),
        i.useEffect(() => {
            (0, b.$T)(t.id);
        }, [t.id]),
        i.useEffect(
            () => (
                document.addEventListener("mousedown", Z),
                () => {
                    document.removeEventListener("mousedown", Z);
                }
            ),
            [Z],
        );
    let Q = i.useMemo(
            () => (0, r.jsx)(R.A, { channel: t, summaries: C, summariesMembers: D, selectTopic: q, setOpen: X }),
            [C, D, q, X, t],
        ),
        J = i.useCallback(() => {
            let e = L.Ay.ackMessageId(t.id);
            null != e
                ? _.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : _.A.jumpToMessage({
                      channelId: t.id,
                      messageId: U.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        ee = i.useCallback(() => {
            (0, f.ack)(t.id, {
                section: F.JJy.NEW_TOPICS_BAR,
                object: F.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: F.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        et = j.intl.string(j.t["38qwgO"]);
    return (
        C.length > 0 && (et = "" === G || null == G ? j.intl.string(j.t.DwnFuG) : G),
        o
            ? null
            : (0, r.jsxs)("div", {
                  ref: A,
                  className: s()(H.dw, H.jh),
                  children: [
                      (0, r.jsx)("div", {
                          className: H.qm,
                          children: (0, r.jsx)(d.DUT, {
                              className: H.TQ,
                              "aria-label": j.intl.string(j.t.RT3MPz),
                              onClick: z,
                              children: (0, r.jsxs)("div", {
                                  className: s()({ [H.hN]: !K, [H.Ap]: K }),
                                  children: [
                                      (0, r.jsx)(d.Kck, { size: "xs", color: "currentColor", className: H.Vd }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/medium",
                                          className: s()(H.$U, H.lc),
                                          children: et,
                                      }),
                                      (0, r.jsx)(x.A, {
                                          width: 16,
                                          height: 16,
                                          direction: x.A.Directions.DOWN,
                                          className: H.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(d.DUT, { onClick: J, className: H.ij, children: n }),
                      (0, r.jsxs)(d.DUT, {
                          onClick: ee,
                          className: s()(H.hQ, H.NX),
                          children: [
                              (0, r.jsx)("div", { className: H.$U, children: j.intl.string(j.t.e6RscS) }),
                              (0, r.jsx)(d.MBj, { size: "md", color: "currentColor", className: H.t3 }),
                          ],
                      }),
                      K &&
                          (0, r.jsxs)("div", {
                              className: H.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: H.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: H.Ne,
                                              children: [
                                                  (0, r.jsx)(d.Kck, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: H.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(d.Heading, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: j.intl.string(j.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(y.A, { className: H.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.DUT, {
                                              "aria-label": j.intl.string(j.t.cpT0Cq),
                                              onClick: z,
                                              className: H.oX,
                                              children: (0, r.jsx)(d.PGe, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.HOs, { ref: v, className: H.Pe, fade: !0, children: Q }),
                              ],
                          }),
                  ],
              })
    );
}
function el(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
function eu(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => !el(e, t[n]));
}
function ec(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: a } = i.useContext(I.Y),
        [o, f] = i.useState(null),
        h = i.useRef(null),
        [p, A] = i.useState(null),
        T = i.useRef(null),
        S = (0, c.yK)([N.A], () => N.A.summaries(t.id) ?? [], [t]),
        v = (0, E.A)(S);
    i.useEffect(() => {
        l().isEqual(v, S) ||
            P.default.track(F.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: S.length,
                message_counts: S.map((e) => e.count),
                start_message_ids: S.map((e) => e.startId),
                end_message_ids: S.map((e) => e.endId),
                num_participants: S.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [S, v, t.guild_id, t.id, t.type]);
    let C = (0, c.bG)(
            [w.default],
            () => S?.map((e) => e.people?.map((e) => w.default.getUser(e) ?? null).filter(M.Vq)) ?? [],
            [S],
            eu,
        ),
        O = (0, c.bG)([N.A], () => N.A.visibleSummaryIndex()) ?? -1,
        D = S?.[O]?.topic;
    null == D && null == o && S?.length >= 1 && (D = S[0]?.topic);
    let L = i.useMemo(() => l().get(S, O - 1), [O, S]),
        k = i.useMemo(() => l().get(S, O + 1), [O, S]),
        U = i.useMemo(
            () =>
                l().debounce((e) => {
                    f(e?.id ?? null);
                }, 64),
            [f],
        ),
        G = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, b.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        B = i.useCallback(
            (e) => {
                G(), U(e);
            },
            [U, G],
        ),
        [Y, W] = i.useState(!1),
        K = i.useCallback(() => {
            P.default.track(F.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !Y,
                num_summaries: S.length,
                message_counts: S.map((e) => e.count),
                start_message_ids: S.map((e) => e.startId),
                end_message_ids: S.map((e) => e.endId),
                num_participants: S.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                W(!Y);
        }, [Y, S, W, t]),
        $ = i.useCallback(
            function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.eh.PILL_DROPDOWN,
                    i = S[e];
                if (null == i) return;
                (0, b.sK)(t.id, i.id), (0, b.C6)(t.id, i.id);
                let a = () => {
                    n.removeScrollCompleteCallback(a),
                        setTimeout(() => {
                            n.addAutomaticAnchorCallback(B, !1);
                        }, 100);
                };
                n.removeAutomaticAnchorCallback(B),
                    n.addScrollCompleteCallback(a),
                    P.default.track(F.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: r,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    _.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: g.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [S, t, B, n],
        ),
        z = i.useCallback(() => {
            $(O - 1, V.eh.PILL_NEXT_ARROW);
        }, [$, O]),
        q = i.useCallback(() => {
            $(O + 1, V.eh.PILL_PREVIOUS_ARROW);
        }, [O, $]),
        X = i.useCallback((e) => {
            W(e);
            let t = T.current?.scrollTop;
            null != t && A(t);
        }, []);
    i.useEffect(() => {
        null != p && Y && T.current?.scrollTo({ top: p });
    }, [p, Y]);
    let Z = i.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && h.current?.contains(e.target)) ||
                (Y &&
                    P.default.track(F.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: S.length,
                        message_counts: S.map((e) => e.count),
                        start_message_ids: S.map((e) => e.startId),
                        end_message_ids: S.map((e) => e.endId),
                        num_participants: S.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                X(!1));
        },
        [Y, S, t, X],
    );
    i.useEffect(
        () => (
            n.addAutomaticAnchorCallback(B),
            () => {
                n.removeAutomaticAnchorCallback(B);
            }
        ),
        [n, B],
    ),
        i.useEffect(() => {
            (0, b.$T)(t.id);
        }, [t.id]),
        i.useEffect(
            () => (
                document.addEventListener("mousedown", Z),
                () => {
                    document.removeEventListener("mousedown", Z);
                }
            ),
            [Z],
        );
    let Q = i.useMemo(
        () => (0, r.jsx)(R.A, { channel: t, summaries: S, summariesMembers: C, selectTopic: $, setOpen: X }),
        [S, C, $, X, t],
    );
    if (!(0, c.bG)([N.A], () => N.A.shouldShowTopicsBar())) return null;
    let J = j.intl.string(j.t["38qwgO"]);
    return (
        S.length > 0 && (J = "" === D || null == D ? j.intl.string(j.t.DwnFuG) : D),
        a
            ? null
            : (0, r.jsxs)("div", {
                  ref: h,
                  className: s()(H.$T, H.jh),
                  children: [
                      (0, r.jsxs)("div", {
                          className: H.sE,
                          children: [
                              (0, r.jsx)(d.DUT, {
                                  className: H.LP,
                                  "aria-label": j.intl.string(j.t.RT3MPz),
                                  onClick: K,
                                  children: (0, r.jsxs)("div", {
                                      className: s()({ [H.Nv]: !Y, [H.An]: Y }),
                                      children: [
                                          (0, r.jsx)(d.Kck, { size: "xs", color: "currentColor", className: H.Np }),
                                          (0, r.jsx)(d.Text, {
                                              className: H.r1,
                                              variant: "text-sm/medium",
                                              children: J,
                                          }),
                                          (0, r.jsx)(x.A, {
                                              width: 16,
                                              height: 16,
                                              direction: x.A.Directions.DOWN,
                                              className: H._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: H.Yk,
                                  children: [
                                      (0, r.jsx)(d.DUT, {
                                          "aria-label": j.intl.string(j.t["4huCnC"]),
                                          onClick: q,
                                          className: s()(H.ZM, H.vz, { [H.jf]: null == k }),
                                          children: (0, r.jsx)(x.A, {
                                              width: 16,
                                              height: 16,
                                              direction: x.A.Directions.UP,
                                          }),
                                      }),
                                      (0, r.jsx)(d.DUT, {
                                          "aria-label": j.intl.string(j.t["58KOoF"]),
                                          onClick: z,
                                          className: s()(H.ZM, H.mt, { [H.jf]: null == L }),
                                          children: (0, r.jsx)(x.A, {
                                              width: 16,
                                              height: 16,
                                              direction: x.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      Y &&
                          (0, r.jsxs)("div", {
                              className: H.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: H.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: H.Ne,
                                              children: [
                                                  (0, r.jsx)(d.Kck, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: H.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(d.Heading, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: j.intl.string(j.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(y.A, { className: H.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.DUT, {
                                              "aria-label": j.intl.string(j.t.cpT0Cq),
                                              onClick: K,
                                              className: H.oX,
                                              children: (0, r.jsx)(d.PGe, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.HOs, { ref: T, className: H.Pe, fade: !0, children: Q }),
                              ],
                          }),
                  ],
              })
    );
}
let ed = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, r.jsxs)("div", {
            className: H.YL,
            children: [
                (0, r.jsx)(d.Text, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: H.Ld,
                    children: e,
                }),
                t &&
                    (0, r.jsx)(d.Text, {
                        className: H.$o,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t["515vjG"]),
                    }),
            ],
        });
    },
    e_ = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(H.jC, n), children: t });
    },
    ef = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(e_, {
            className: t,
            children: (0, r.jsx)("div", { className: H.wH, children: (0, r.jsx)("div", { className: H.j3 }) }),
        });
    };
