"use strict";
n.d(t, {
    $o: () => $,
    Ab: () => er,
    Dk: () => J,
    Ez: () => ei,
    GN: () => es,
    LL: () => Z,
    OZ: () => ea,
    P$: () => q,
    UK: () => eu,
    Uk: () => j,
    Uq: () => ed,
    Y0: () => e_,
    _d: () => Q,
    bU: () => X,
    gL: () => z,
    ks: () => ee,
    yR: () => ec,
});
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(621466),
    c = n(311907),
    d = n(397927),
    _ = n(843472),
    f = n(334738),
    p = n(490693),
    h = n(9578),
    m = n(56562),
    E = n(475743),
    g = n(718468),
    A = n(692051),
    I = n(915089),
    T = n(611371),
    S = n(74068),
    y = n(248643),
    v = n(752063),
    N = n(863922),
    C = n(513272),
    R = n(977463),
    O = n(253932),
    b = n(41431),
    D = n(222823),
    L = n(287809),
    w = n(147925),
    M = n(954571),
    x = n(403362),
    P = n(587481),
    k = n(661191),
    U = n(838541),
    G = n(652215),
    F = n(521732),
    V = n(650583),
    B = n(985018),
    H = n(702926);
let j = { delay: 300, position: "top" },
    Y = (e) => (t) => {
        e?.(t), (0, P.ls)(t);
    },
    W = (e) => (t) => {
        e?.(t), (0, P.y5)(t);
    };
function K(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: s,
            autoMute: o,
            alt: l,
            renderAdjacentContent: u,
            renderOverlayContent: c,
            disableAltTextDisplay: _ = !1,
            hiddenSpoilers: f,
            mosaicStyleAlt: p,
            mediaLayoutType: h,
            reducedSizeAltTextButton: m,
            ...E
        } = e,
        g = Y(t),
        A = W(n);
    (s = null == s ? P.v1 : s), (o = null == o ? P.uj : o);
    let [I, T] = i.useState(!0),
        [S, v] = i.useState(!1),
        N = h === U.dG.MOSAIC || !0 === p,
        C = (I || S) && !_ && O._z.getSetting() && null != l && "" !== l && !0 !== f,
        R = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.lGe, {
                "aria-label": B.intl.string(B.t.fSiQ3A),
                className: H.ob,
                onKeyDown: (e) => {
                    e.key === V.N$.Escape && setTimeout(() => b.current?.focus(), 0);
                },
                children: [
                    (0, r.jsx)("span", { className: H.k_, children: B.intl.string(B.t.fSiQ3A) }),
                    (0, r.jsx)("span", { className: H.a7, children: t }),
                ],
            });
        },
        b = i.useRef(null);
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(y.A, {
                ...E,
                alt: l,
                autoMute: o,
                mediaLayoutType: h,
                onControlsHide: () => T(!1),
                onControlsShow: () => T(!0),
                onMute: A,
                onVolumeChange: g,
                renderLinkComponent: X,
                renderOverlayContent: c,
                volume: s,
            }),
            null != u && u(),
            N &&
                C &&
                (0, r.jsx)("div", {
                    className: H.NO,
                    children: (0, r.jsx)(d.YNO, {
                        targetElementRef: b,
                        animation: d.YNO.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(R, { altText: l }),
                        children: (e) =>
                            (0, r.jsx)(d.vN3, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: b,
                                    "aria-label": B.intl.string(B.t.fSiQ3A),
                                    onMouseEnter: () => v(!0),
                                    onMouseLeave: () => v(!1),
                                    className: a()(H.DV, { [H.yZ]: !0, [H.I5]: m }),
                                    children: B.intl.string(B.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !N && C && (0, r.jsx)("span", { className: H.R5, children: l }),
        ],
    });
}
function $(e) {
    return (0, r.jsx)(K, { ...e });
}
function z(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: s,
            onVolumeShow: a,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...u
        } = e,
        c = Y(t),
        d = W(s);
    n = null == n ? P.v1 : n;
    let _ = () => !1;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(S.A, {
                ...u,
                onVolumeChange: c,
                onMute: d,
                onVolumeShow: a,
                onVolumeHide: o,
                volume: n,
                autoMute: _,
                renderLinkComponent: X,
            }),
            null != l && l(),
        ],
    });
}
function q(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...s } = e,
        a = Y(t),
        o = W(i);
    return (n = null == n ? P.v1 : n), (0, r.jsx)(b.A, { ...s, onVolumeChange: a, onMute: o, volume: n });
}
function Z(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: s,
            containerClassName: o,
            imageContainerClassName: l,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: _,
            imageContainerStyle: f,
            mosaicStyleAlt: h,
        } = e,
        m = _ === U.dG.MOSAIC || !0 === h,
        E = !u && O._z.getSetting() && null != t && "" !== t && !0 !== n,
        g = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.lGe, {
                "aria-label": B.intl.string(B.t.fSiQ3A),
                className: H.ob,
                onKeyDown: (e) => {
                    e.key === V.N$.Escape && setTimeout(() => A.current?.focus(), 0);
                },
                children: [
                    (0, r.jsx)("span", { className: H.k_, children: B.intl.string(B.t.fSiQ3A) }),
                    (0, r.jsx)("span", { className: H.a7, children: t }),
                ],
            });
        },
        A = i.createRef();
    return (0, r.jsxs)("div", {
        className: a()(H.fo, o),
        children: [
            (0, r.jsxs)("div", {
                className: a()(H.ZS, l),
                style: f,
                children: [(0, r.jsx)(p.A, { ...e }), null != s && s()],
            }),
            m &&
                E &&
                (0, r.jsx)("div", {
                    className: H.Y1,
                    children: (0, r.jsx)(d.YNO, {
                        targetElementRef: A,
                        animation: d.YNO.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(g, { altText: t }),
                        children: (e) =>
                            (0, r.jsx)(d.vN3, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: A,
                                    "aria-label": B.intl.string(B.t.fSiQ3A),
                                    className: a()(H.DV, { [H.I5]: c }),
                                    children: B.intl.string(B.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !m && E && (0, r.jsx)("span", { className: H.R5, children: t }),
        ],
    });
}
function X(e) {
    return (0, r.jsx)(h.A, { ...e });
}
function Q(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, r.jsxs)(i.Fragment, { children: [(0, r.jsx)(v.A, { ...n }), null != t && t()] });
}
function J(e) {
    return (0, r.jsx)(g.A, { ...e });
}
var ee = (function (e) {
    return (e[(e.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (e[(e.REPLY = 1)] = "REPLY"), e;
})({});
function et(e) {
    switch (e) {
        case 0:
            return B.intl.string(B.t["4EvBbw"]);
        case 1:
            return B.intl.string(B.t["1J6Xq7"]);
        default:
            return (0, x.xb)(e);
    }
}
function en(e) {
    switch (e) {
        case 0:
            return B.intl.string(B.t.gpoQsB);
        case 1:
            return B.intl.string(B.t.k3RM8z);
        default:
            return (0, x.xb)(e);
    }
}
let er = (e) => {
        let { type: t = 0, onClick: n, className: i } = e;
        return (0, r.jsx)(A.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)("div", {
                          onClick: n,
                          className: a()(H.Sg, i),
                          children: [
                              (0, r.jsx)("div", { className: H.$I, children: et(t) }),
                              null != n
                                  ? (0, r.jsx)(d.vN3, {
                                        offset: -2,
                                        children: (0, r.jsx)(d.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: en(t),
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
    ei = (e) => {
        let { onClick: t, loading: n, className: i } = e;
        return (0, r.jsx)(A.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, r.jsxs)(d.DUT, {
                          className: a()(H._5, i),
                          onClick: t,
                          focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                          children: [
                              (0, r.jsx)("div", { className: H.$I, children: B.intl.string(B.t["1zUvlw"]) }),
                              n
                                  ? (0, r.jsx)(d.y$y, {
                                        type: d.y$y.Type.PULSING_ELLIPSIS,
                                        className: H.u1,
                                        itemClassName: H.$N,
                                    })
                                  : (0, r.jsx)("div", {
                                        className: a()(H.hQ, H.d3),
                                        children: B.intl.string(B.t.TdQXA8),
                                    }),
                          ],
                      }),
        });
    };
function es(e) {
    let { content: t, channelId: n } = e,
        [s] = i.useState(() => (0, I.Ld)("NewMessagesBarJumpToNewMessages_")),
        o = i.useCallback(() => {
            let e = D.Ay.ackMessageId(n);
            null != e
                ? _.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : _.A.jumpToMessage({
                      channelId: n,
                      messageId: k.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        l = i.useCallback(() => {
            (0, f.ack)(n, {
                section: G.JJy.NEW_MESSAGES_BANNER,
                object: G.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: G.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = i.useContext(A.Y);
    return u
        ? null
        : (0, r.jsxs)("div", {
              className: a()(H.eb, { [H.y7]: u }),
              children: [
                  (0, r.jsx)(d.vN3, {
                      offset: 4,
                      children: (0, r.jsx)("button", {
                          type: "button",
                          className: H.$I,
                          onClick: o,
                          "aria-label": B.intl.string(B.t.z0Mkp3),
                          "aria-describedby": s,
                          children: (0, r.jsx)("span", { id: s, className: H.Ln, children: t }),
                      }),
                  }),
                  (0, r.jsx)(d.vN3, {
                      offset: 4,
                      children: (0, r.jsxs)("button", {
                          type: "button",
                          onClick: l,
                          className: H.hQ,
                          children: [
                              B.intl.string(B.t.e6RscS),
                              (0, r.jsx)(d.MBj, { size: "md", color: "currentColor", className: H.t3 }),
                          ],
                      }),
                  }),
              ],
          });
}
function ea(e) {
    let { channel: t, content: n, scrollManager: s } = e,
        { disableInteractions: o } = i.useContext(A.Y),
        [p, h] = i.useState(null),
        g = i.useRef(null),
        [I, S] = i.useState(null),
        y = i.useRef(null),
        v = (0, c.yK)([C.A], () => C.A.summaries(t.id) ?? [], [t]),
        O = (0, E.A)(v);
    i.useEffect(() => {
        l().isEqual(O, v) ||
            M.default.track(G.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: v.length,
                message_counts: v.map((e) => e.count),
                start_message_ids: v.map((e) => e.startId),
                end_message_ids: v.map((e) => e.endId),
                num_participants: v.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [v, O, t.guild_id, t.id, t.type]);
    let b = (0, c.bG)(
            [L.default],
            () => v?.map((e) => e.people?.map((e) => L.default.getUser(e) ?? null).filter(x.Vq)) ?? [],
            [v],
            el,
        ),
        P = (0, c.bG)([C.A], () => C.A.visibleSummaryIndex()) ?? -1,
        U = v?.[P]?.topic;
    null == U && null == p && v?.length >= 1 && (U = v[0]?.topic);
    let V = i.useMemo(
            () =>
                l().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        j = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, N.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        Y = i.useCallback(
            (e) => {
                j(), V(e);
            },
            [V, j],
        ),
        [W, K] = i.useState(!1),
        $ = i.useCallback(() => {
            M.default.track(G.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !W,
                num_summaries: v.length,
                message_counts: v.map((e) => e.count),
                start_message_ids: v.map((e) => e.startId),
                end_message_ids: v.map((e) => e.endId),
                num_participants: v.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                K(!W);
        }, [W, v, K, t]),
        z = i.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F.eh.PILL_DROPDOWN,
                    r = v[e];
                if (null == r) return;
                (0, N.sK)(t.id, r.id), (0, N.C6)(t.id, r.id);
                let i = () => {
                    s.removeScrollCompleteCallback(i),
                        setTimeout(() => {
                            s.addAutomaticAnchorCallback(Y, !1);
                        }, 100);
                };
                s.removeAutomaticAnchorCallback(Y),
                    s.addScrollCompleteCallback(i),
                    M.default.track(G.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                        jumpType: m.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [v, t, Y, s],
        ),
        q = i.useCallback((e) => {
            K(e);
            let t = y.current?.scrollTop;
            null != t && S(t);
        }, []);
    i.useEffect(() => {
        null != I && W && y.current?.scrollTo({ top: I });
    }, [I, W]);
    let Z = i.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && g.current?.contains(e.target)) ||
                (W &&
                    M.default.track(G.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: v.length,
                        message_counts: v.map((e) => e.count),
                        start_message_ids: v.map((e) => e.startId),
                        end_message_ids: v.map((e) => e.endId),
                        num_participants: v.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                q(!1));
        },
        [W, v, t, q],
    );
    i.useEffect(
        () => (
            s.addAutomaticAnchorCallback(Y),
            () => {
                s.removeAutomaticAnchorCallback(Y);
            }
        ),
        [s, Y],
    ),
        i.useEffect(() => {
            (0, N.$T)(t.id);
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
    let X = i.useMemo(
            () => (0, r.jsx)(R.A, { channel: t, summaries: v, summariesMembers: b, selectTopic: z, setOpen: q }),
            [v, b, z, q, t],
        ),
        Q = i.useCallback(() => {
            let e = D.Ay.ackMessageId(t.id);
            null != e
                ? _.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : _.A.jumpToMessage({
                      channelId: t.id,
                      messageId: k.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        J = i.useCallback(() => {
            (0, f.ack)(t.id, {
                section: G.JJy.NEW_TOPICS_BAR,
                object: G.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: G.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        ee = B.intl.string(B.t["38qwgO"]);
    return (
        v.length > 0 && (ee = "" === U || null == U ? B.intl.string(B.t.DwnFuG) : U),
        o
            ? null
            : (0, r.jsxs)("div", {
                  ref: g,
                  className: a()(H.dw, H.jh),
                  children: [
                      (0, r.jsx)("div", {
                          className: H.qm,
                          children: (0, r.jsx)(d.DUT, {
                              className: H.TQ,
                              "aria-label": B.intl.string(B.t.RT3MPz),
                              onClick: $,
                              children: (0, r.jsxs)("div", {
                                  className: a()({ [H.hN]: !W, [H.Ap]: W }),
                                  children: [
                                      (0, r.jsx)(d.Kck, { size: "xs", color: "currentColor", className: H.Vd }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/medium",
                                          className: a()(H.$U, H.lc),
                                          children: ee,
                                      }),
                                      (0, r.jsx)(w.A, {
                                          width: 16,
                                          height: 16,
                                          direction: w.A.Directions.DOWN,
                                          className: H.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(d.DUT, { onClick: Q, className: H.ij, children: n }),
                      (0, r.jsxs)(d.DUT, {
                          onClick: J,
                          className: a()(H.hQ, H.NX),
                          children: [
                              (0, r.jsx)("div", { className: H.$U, children: B.intl.string(B.t.e6RscS) }),
                              (0, r.jsx)(d.MBj, { size: "md", color: "currentColor", className: H.t3 }),
                          ],
                      }),
                      W &&
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
                                                      children: B.intl.string(B.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(T.A, { className: H.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.DUT, {
                                              "aria-label": B.intl.string(B.t.cpT0Cq),
                                              onClick: $,
                                              className: H.oX,
                                              children: (0, r.jsx)(d.PGe, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.HOs, { ref: y, className: H.Pe, fade: !0, children: X }),
                              ],
                          }),
                  ],
              })
    );
}
function eo(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
function el(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => !eo(e, t[n]));
}
function eu(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: s } = i.useContext(A.Y),
        [o, f] = i.useState(null),
        p = i.useRef(null),
        [h, g] = i.useState(null),
        I = i.useRef(null),
        S = (0, c.yK)([C.A], () => C.A.summaries(t.id) ?? [], [t]),
        y = (0, E.A)(S);
    i.useEffect(() => {
        l().isEqual(y, S) ||
            M.default.track(G.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: S.length,
                message_counts: S.map((e) => e.count),
                start_message_ids: S.map((e) => e.startId),
                end_message_ids: S.map((e) => e.endId),
                num_participants: S.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [S, y, t.guild_id, t.id, t.type]);
    let v = (0, c.bG)(
            [L.default],
            () => S?.map((e) => e.people?.map((e) => L.default.getUser(e) ?? null).filter(x.Vq)) ?? [],
            [S],
            el,
        ),
        O = (0, c.bG)([C.A], () => C.A.visibleSummaryIndex()) ?? -1,
        b = S?.[O]?.topic;
    null == b && null == o && S?.length >= 1 && (b = S[0]?.topic);
    let D = i.useMemo(() => l().get(S, O - 1), [O, S]),
        P = i.useMemo(() => l().get(S, O + 1), [O, S]),
        k = i.useMemo(
            () =>
                l().debounce((e) => {
                    f(e?.id ?? null);
                }, 64),
            [f],
        ),
        U = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, N.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        V = i.useCallback(
            (e) => {
                U(), k(e);
            },
            [k, U],
        ),
        [j, Y] = i.useState(!1),
        W = i.useCallback(() => {
            M.default.track(G.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !j,
                num_summaries: S.length,
                message_counts: S.map((e) => e.count),
                start_message_ids: S.map((e) => e.startId),
                end_message_ids: S.map((e) => e.endId),
                num_participants: S.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                Y(!j);
        }, [j, S, Y, t]),
        K = i.useCallback(
            function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F.eh.PILL_DROPDOWN,
                    i = S[e];
                if (null == i) return;
                (0, N.sK)(t.id, i.id), (0, N.C6)(t.id, i.id);
                let s = () => {
                    n.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            n.addAutomaticAnchorCallback(V, !1);
                        }, 100);
                };
                n.removeAutomaticAnchorCallback(V),
                    n.addScrollCompleteCallback(s),
                    M.default.track(G.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                        jumpType: m.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [S, t, V, n],
        ),
        $ = i.useCallback(() => {
            K(O - 1, F.eh.PILL_NEXT_ARROW);
        }, [K, O]),
        z = i.useCallback(() => {
            K(O + 1, F.eh.PILL_PREVIOUS_ARROW);
        }, [O, K]),
        q = i.useCallback((e) => {
            Y(e);
            let t = I.current?.scrollTop;
            null != t && g(t);
        }, []);
    i.useEffect(() => {
        null != h && j && I.current?.scrollTo({ top: h });
    }, [h, j]);
    let Z = i.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && p.current?.contains(e.target)) ||
                (j &&
                    M.default.track(G.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                q(!1));
        },
        [j, S, t, q],
    );
    i.useEffect(
        () => (
            n.addAutomaticAnchorCallback(V),
            () => {
                n.removeAutomaticAnchorCallback(V);
            }
        ),
        [n, V],
    ),
        i.useEffect(() => {
            (0, N.$T)(t.id);
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
    let X = i.useMemo(
        () => (0, r.jsx)(R.A, { channel: t, summaries: S, summariesMembers: v, selectTopic: K, setOpen: q }),
        [S, v, K, q, t],
    );
    if (!(0, c.bG)([C.A], () => C.A.shouldShowTopicsBar())) return null;
    let Q = B.intl.string(B.t["38qwgO"]);
    return (
        S.length > 0 && (Q = "" === b || null == b ? B.intl.string(B.t.DwnFuG) : b),
        s
            ? null
            : (0, r.jsxs)("div", {
                  ref: p,
                  className: a()(H.$T, H.jh),
                  children: [
                      (0, r.jsxs)("div", {
                          className: H.sE,
                          children: [
                              (0, r.jsx)(d.DUT, {
                                  className: H.LP,
                                  "aria-label": B.intl.string(B.t.RT3MPz),
                                  onClick: W,
                                  children: (0, r.jsxs)("div", {
                                      className: a()({ [H.Nv]: !j, [H.An]: j }),
                                      children: [
                                          (0, r.jsx)(d.Kck, { size: "xs", color: "currentColor", className: H.Np }),
                                          (0, r.jsx)(d.Text, {
                                              className: H.r1,
                                              variant: "text-sm/medium",
                                              children: Q,
                                          }),
                                          (0, r.jsx)(w.A, {
                                              width: 16,
                                              height: 16,
                                              direction: w.A.Directions.DOWN,
                                              className: H._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: H.Yk,
                                  children: [
                                      (0, r.jsx)(d.DUT, {
                                          "aria-label": B.intl.string(B.t["4huCnC"]),
                                          onClick: z,
                                          className: a()(H.ZM, H.vz, { [H.jf]: null == P }),
                                          children: (0, r.jsx)(w.A, {
                                              width: 16,
                                              height: 16,
                                              direction: w.A.Directions.UP,
                                          }),
                                      }),
                                      (0, r.jsx)(d.DUT, {
                                          "aria-label": B.intl.string(B.t["58KOoF"]),
                                          onClick: $,
                                          className: a()(H.ZM, H.mt, { [H.jf]: null == D }),
                                          children: (0, r.jsx)(w.A, {
                                              width: 16,
                                              height: 16,
                                              direction: w.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      j &&
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
                                                      children: B.intl.string(B.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(T.A, { className: H.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.DUT, {
                                              "aria-label": B.intl.string(B.t.cpT0Cq),
                                              onClick: W,
                                              className: H.oX,
                                              children: (0, r.jsx)(d.PGe, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.HOs, { ref: I, className: H.Pe, fade: !0, children: X }),
                              ],
                          }),
                  ],
              })
    );
}
let ec = function (e) {
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
                        children: B.intl.string(B.t["515vjG"]),
                    }),
            ],
        });
    },
    ed = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: a()(H.jC, n), children: t });
    },
    e_ = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(ed, {
            className: t,
            children: (0, r.jsx)("div", { className: H.wH, children: (0, r.jsx)("div", { className: H.j3 }) }),
        });
    };
