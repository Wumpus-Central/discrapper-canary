"use strict";
n.d(t, {
    $o: () => z,
    Ab: () => er,
    Dk: () => J,
    Ez: () => ei,
    GN: () => ea,
    LL: () => Z,
    OZ: () => es,
    P$: () => q,
    UK: () => eu,
    Uk: () => H,
    Uq: () => ed,
    Y0: () => e_,
    _d: () => X,
    bU: () => Q,
    gL: () => $,
    ks: () => ee,
    yR: () => ec,
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
    p = n(490693),
    h = n(9578),
    m = n(56562),
    g = n(475743),
    E = n(718468),
    A = n(692051),
    I = n(915089),
    T = n(611371),
    y = n(74068),
    S = n(248643),
    v = n(752063),
    C = n(863922),
    b = n(513272),
    N = n(977463),
    R = n(253932),
    O = n(41431),
    D = n(222823),
    L = n(287809),
    w = n(147925),
    x = n(954571),
    P = n(403362),
    M = n(587481),
    k = n(661191),
    U = n(838541),
    G = n(652215),
    V = n(521732),
    F = n(650583),
    B = n(985018),
    j = n(702926);
let H = { delay: 300, position: "top" },
    Y = (e) => (t) => {
        e?.(t), (0, M.ls)(t);
    },
    W = (e) => (t) => {
        e?.(t), (0, M.y5)(t);
    };
function K(e) {
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
            mosaicStyleAlt: p,
            mediaLayoutType: h,
            reducedSizeAltTextButton: m,
            ...g
        } = e,
        E = Y(t),
        A = W(n);
    (a = null == a ? M.v1 : a), (o = null == o ? M.uj : o);
    let [I, T] = i.useState(!0),
        [y, v] = i.useState(!1),
        C = h === U.dG.MOSAIC || !0 === p,
        b = (I || y) && !_ && R._z.getSetting() && null != l && "" !== l && !0 !== f,
        N = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.lGe, {
                "aria-label": B.intl.string(B.t.fSiQ3A),
                className: j.ob,
                onKeyDown: (e) => {
                    e.key === F.N$.Escape && setTimeout(() => O.current?.focus(), 0);
                },
                children: [
                    (0, r.jsx)("span", { className: j.k_, children: B.intl.string(B.t.fSiQ3A) }),
                    (0, r.jsx)("span", { className: j.a7, children: t }),
                ],
            });
        },
        O = i.useRef(null);
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(S.A, {
                ...g,
                alt: l,
                autoMute: o,
                mediaLayoutType: h,
                onControlsHide: () => T(!1),
                onControlsShow: () => T(!0),
                onMute: A,
                onVolumeChange: E,
                renderLinkComponent: Q,
                renderOverlayContent: c,
                volume: a,
            }),
            null != u && u(),
            C &&
                b &&
                (0, r.jsx)("div", {
                    className: j.NO,
                    children: (0, r.jsx)(d.YNO, {
                        targetElementRef: O,
                        animation: d.YNO.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(N, { altText: l }),
                        children: (e) =>
                            (0, r.jsx)(d.vN3, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: O,
                                    "aria-label": B.intl.string(B.t.fSiQ3A),
                                    onMouseEnter: () => v(!0),
                                    onMouseLeave: () => v(!1),
                                    className: s()(j.DV, { [j.yZ]: !0, [j.I5]: m }),
                                    children: B.intl.string(B.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !C && b && (0, r.jsx)("span", { className: j.R5, children: l }),
        ],
    });
}
function z(e) {
    return (0, r.jsx)(K, { ...e });
}
function $(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: a,
            onVolumeShow: s,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...u
        } = e,
        c = Y(t),
        d = W(a);
    n = null == n ? M.v1 : n;
    let _ = () => !1;
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)(y.A, {
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
function q(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...a } = e,
        s = Y(t),
        o = W(i);
    return (n = null == n ? M.v1 : n), (0, r.jsx)(O.A, { ...a, onVolumeChange: s, onMute: o, volume: n });
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
            mosaicStyleAlt: h,
        } = e,
        m = _ === U.dG.MOSAIC || !0 === h,
        g = !u && R._z.getSetting() && null != t && "" !== t && !0 !== n,
        E = (e) => {
            let { altText: t } = e;
            return (0, r.jsxs)(d.lGe, {
                "aria-label": B.intl.string(B.t.fSiQ3A),
                className: j.ob,
                onKeyDown: (e) => {
                    e.key === F.N$.Escape && setTimeout(() => A.current?.focus(), 0);
                },
                children: [
                    (0, r.jsx)("span", { className: j.k_, children: B.intl.string(B.t.fSiQ3A) }),
                    (0, r.jsx)("span", { className: j.a7, children: t }),
                ],
            });
        },
        A = i.createRef();
    return (0, r.jsxs)("div", {
        className: s()(j.fo, o),
        children: [
            (0, r.jsxs)("div", {
                className: s()(j.ZS, l),
                style: f,
                children: [(0, r.jsx)(p.A, { ...e }), null != a && a()],
            }),
            m &&
                g &&
                (0, r.jsx)("div", {
                    className: j.Y1,
                    children: (0, r.jsx)(d.YNO, {
                        targetElementRef: A,
                        animation: d.YNO.Animation.FADE,
                        renderPopout: () => (0, r.jsx)(E, { altText: t }),
                        children: (e) =>
                            (0, r.jsx)(d.vN3, {
                                offset: 4,
                                children: (0, r.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: A,
                                    "aria-label": B.intl.string(B.t.fSiQ3A),
                                    className: s()(j.DV, { [j.I5]: c }),
                                    children: B.intl.string(B.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !m && g && (0, r.jsx)("span", { className: j.R5, children: t }),
        ],
    });
}
function Q(e) {
    return (0, r.jsx)(h.A, { ...e });
}
function X(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, r.jsxs)(i.Fragment, { children: [(0, r.jsx)(v.A, { ...n }), null != t && t()] });
}
function J(e) {
    return (0, r.jsx)(E.A, { ...e });
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
            return (0, P.xb)(e);
    }
}
function en(e) {
    switch (e) {
        case 0:
            return B.intl.string(B.t.gpoQsB);
        case 1:
            return B.intl.string(B.t.k3RM8z);
        default:
            return (0, P.xb)(e);
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
                          className: s()(j.Sg, i),
                          children: [
                              (0, r.jsx)("div", { className: j.$I, children: et(t) }),
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
                                        className: j.u1,
                                        itemClassName: j.$N,
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
                          className: s()(j._5, i),
                          onClick: t,
                          focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                          children: [
                              (0, r.jsx)("div", { className: j.$I, children: B.intl.string(B.t["1zUvlw"]) }),
                              n
                                  ? (0, r.jsx)(d.y$y, {
                                        type: d.y$y.Type.PULSING_ELLIPSIS,
                                        className: j.u1,
                                        itemClassName: j.$N,
                                    })
                                  : (0, r.jsx)("div", { className: j.hQ, children: B.intl.string(B.t.TdQXA8) }),
                          ],
                      }),
        });
    };
function ea(e) {
    let { content: t, channelId: n } = e,
        [a] = i.useState(() => (0, I.Ld)("NewMessagesBarJumpToNewMessages_")),
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
              className: s()(j.eb, { [j.y7]: u }),
              children: [
                  (0, r.jsx)(d.vN3, {
                      offset: 4,
                      children: (0, r.jsx)("button", {
                          type: "button",
                          className: j.$I,
                          onClick: o,
                          "aria-label": B.intl.string(B.t.z0Mkp3),
                          "aria-describedby": a,
                          children: (0, r.jsx)("span", { id: a, className: j.Ln, children: t }),
                      }),
                  }),
                  (0, r.jsx)(d.vN3, {
                      offset: 4,
                      children: (0, r.jsxs)("button", {
                          type: "button",
                          onClick: l,
                          className: j.hQ,
                          children: [
                              B.intl.string(B.t.e6RscS),
                              (0, r.jsx)(d.MBj, { size: "md", color: "currentColor", className: j.t3 }),
                          ],
                      }),
                  }),
              ],
          });
}
function es(e) {
    let { channel: t, content: n, scrollManager: a } = e,
        { disableInteractions: o } = i.useContext(A.Y),
        [p, h] = i.useState(null),
        E = i.useRef(null),
        [I, y] = i.useState(null),
        S = i.useRef(null),
        v = (0, c.yK)([b.A], () => b.A.summaries(t.id) ?? [], [t]),
        R = (0, g.A)(v);
    i.useEffect(() => {
        l().isEqual(R, v) ||
            x.default.track(G.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: v.length,
                message_counts: v.map((e) => e.count),
                start_message_ids: v.map((e) => e.startId),
                end_message_ids: v.map((e) => e.endId),
                num_participants: v.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [v, R, t.guild_id, t.id, t.type]);
    let O = (0, c.bG)(
            [L.default],
            () => v?.map((e) => e.people?.map((e) => L.default.getUser(e) ?? null).filter(P.Vq)) ?? [],
            [v],
            el,
        ),
        M = (0, c.bG)([b.A], () => b.A.visibleSummaryIndex()) ?? -1,
        U = v?.[M]?.topic;
    null == U && null == p && v?.length >= 1 && (U = v[0]?.topic);
    let F = i.useMemo(
            () =>
                l().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        H = i.useMemo(
            () =>
                l().throttle(
                    () => {
                        (0, C.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        Y = i.useCallback(
            (e) => {
                H(), F(e);
            },
            [F, H],
        ),
        [W, K] = i.useState(!1),
        z = i.useCallback(() => {
            x.default.track(G.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
        $ = i.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.eh.PILL_DROPDOWN,
                    r = v[e];
                if (null == r) return;
                (0, C.sK)(t.id, r.id), (0, C.C6)(t.id, r.id);
                let i = () => {
                    a.removeScrollCompleteCallback(i),
                        setTimeout(() => {
                            a.addAutomaticAnchorCallback(Y, !1);
                        }, 100);
                };
                a.removeAutomaticAnchorCallback(Y),
                    a.addScrollCompleteCallback(i),
                    x.default.track(G.HAw.SUMMARIES_TOPIC_CLICKED, {
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
            [v, t, Y, a],
        ),
        q = i.useCallback((e) => {
            K(e);
            let t = S.current?.scrollTop;
            null != t && y(t);
        }, []);
    i.useEffect(() => {
        null != I && W && S.current?.scrollTo({ top: I });
    }, [I, W]);
    let Z = i.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && E.current?.contains(e.target)) ||
                (W &&
                    x.default.track(G.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
            a.addAutomaticAnchorCallback(Y),
            () => {
                a.removeAutomaticAnchorCallback(Y);
            }
        ),
        [a, Y],
    ),
        i.useEffect(() => {
            (0, C.$T)(t.id);
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
            () => (0, r.jsx)(N.A, { channel: t, summaries: v, summariesMembers: O, selectTopic: $, setOpen: q }),
            [v, O, $, q, t],
        ),
        X = i.useCallback(() => {
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
                  ref: E,
                  className: s()(j.dw, j.jh),
                  children: [
                      (0, r.jsx)("div", {
                          className: j.qm,
                          children: (0, r.jsx)(d.DUT, {
                              className: j.TQ,
                              "aria-label": B.intl.string(B.t.RT3MPz),
                              onClick: z,
                              children: (0, r.jsxs)("div", {
                                  className: s()({ [j.hN]: !W, [j.Ap]: W }),
                                  children: [
                                      (0, r.jsx)(d.Kck, { size: "xs", color: "currentColor", className: j.Vd }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-sm/medium",
                                          className: s()(j.$U, j.lc),
                                          children: ee,
                                      }),
                                      (0, r.jsx)(w.A, {
                                          width: 16,
                                          height: 16,
                                          direction: w.A.Directions.DOWN,
                                          className: j.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, r.jsx)(d.DUT, { onClick: X, className: j.ij, children: n }),
                      (0, r.jsxs)(d.DUT, {
                          onClick: J,
                          className: s()(j.hQ, j.NX),
                          children: [
                              (0, r.jsx)("div", { className: j.$U, children: B.intl.string(B.t.e6RscS) }),
                              (0, r.jsx)(d.MBj, { size: "md", color: "currentColor", className: j.t3 }),
                          ],
                      }),
                      W &&
                          (0, r.jsxs)("div", {
                              className: j.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: j.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: j.Ne,
                                              children: [
                                                  (0, r.jsx)(d.Kck, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: j.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(d.Heading, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: B.intl.string(B.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(T.A, { className: j.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.DUT, {
                                              "aria-label": B.intl.string(B.t.cpT0Cq),
                                              onClick: z,
                                              className: j.oX,
                                              children: (0, r.jsx)(d.PGe, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.HOs, { ref: S, className: j.Pe, fade: !0, children: Q }),
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
        { disableInteractions: a } = i.useContext(A.Y),
        [o, f] = i.useState(null),
        p = i.useRef(null),
        [h, E] = i.useState(null),
        I = i.useRef(null),
        y = (0, c.yK)([b.A], () => b.A.summaries(t.id) ?? [], [t]),
        S = (0, g.A)(y);
    i.useEffect(() => {
        l().isEqual(S, y) ||
            x.default.track(G.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: y.length,
                message_counts: y.map((e) => e.count),
                start_message_ids: y.map((e) => e.startId),
                end_message_ids: y.map((e) => e.endId),
                num_participants: y.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [y, S, t.guild_id, t.id, t.type]);
    let v = (0, c.bG)(
            [L.default],
            () => y?.map((e) => e.people?.map((e) => L.default.getUser(e) ?? null).filter(P.Vq)) ?? [],
            [y],
            el,
        ),
        R = (0, c.bG)([b.A], () => b.A.visibleSummaryIndex()) ?? -1,
        O = y?.[R]?.topic;
    null == O && null == o && y?.length >= 1 && (O = y[0]?.topic);
    let D = i.useMemo(() => l().get(y, R - 1), [R, y]),
        M = i.useMemo(() => l().get(y, R + 1), [R, y]),
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
                        (0, C.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        F = i.useCallback(
            (e) => {
                U(), k(e);
            },
            [k, U],
        ),
        [H, Y] = i.useState(!1),
        W = i.useCallback(() => {
            x.default.track(G.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !H,
                num_summaries: y.length,
                message_counts: y.map((e) => e.count),
                start_message_ids: y.map((e) => e.startId),
                end_message_ids: y.map((e) => e.endId),
                num_participants: y.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                Y(!H);
        }, [H, y, Y, t]),
        K = i.useCallback(
            function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.eh.PILL_DROPDOWN,
                    i = y[e];
                if (null == i) return;
                (0, C.sK)(t.id, i.id), (0, C.C6)(t.id, i.id);
                let a = () => {
                    n.removeScrollCompleteCallback(a),
                        setTimeout(() => {
                            n.addAutomaticAnchorCallback(F, !1);
                        }, 100);
                };
                n.removeAutomaticAnchorCallback(F),
                    n.addScrollCompleteCallback(a),
                    x.default.track(G.HAw.SUMMARIES_TOPIC_CLICKED, {
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
            [y, t, F, n],
        ),
        z = i.useCallback(() => {
            K(R - 1, V.eh.PILL_NEXT_ARROW);
        }, [K, R]),
        $ = i.useCallback(() => {
            K(R + 1, V.eh.PILL_PREVIOUS_ARROW);
        }, [R, K]),
        q = i.useCallback((e) => {
            Y(e);
            let t = I.current?.scrollTop;
            null != t && E(t);
        }, []);
    i.useEffect(() => {
        null != h && H && I.current?.scrollTo({ top: h });
    }, [h, H]);
    let Z = i.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && p.current?.contains(e.target)) ||
                (H &&
                    x.default.track(G.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: y.length,
                        message_counts: y.map((e) => e.count),
                        start_message_ids: y.map((e) => e.startId),
                        end_message_ids: y.map((e) => e.endId),
                        num_participants: y.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                q(!1));
        },
        [H, y, t, q],
    );
    i.useEffect(
        () => (
            n.addAutomaticAnchorCallback(F),
            () => {
                n.removeAutomaticAnchorCallback(F);
            }
        ),
        [n, F],
    ),
        i.useEffect(() => {
            (0, C.$T)(t.id);
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
        () => (0, r.jsx)(N.A, { channel: t, summaries: y, summariesMembers: v, selectTopic: K, setOpen: q }),
        [y, v, K, q, t],
    );
    if (!(0, c.bG)([b.A], () => b.A.shouldShowTopicsBar())) return null;
    let X = B.intl.string(B.t["38qwgO"]);
    return (
        y.length > 0 && (X = "" === O || null == O ? B.intl.string(B.t.DwnFuG) : O),
        a
            ? null
            : (0, r.jsxs)("div", {
                  ref: p,
                  className: s()(j.$T, j.jh),
                  children: [
                      (0, r.jsxs)("div", {
                          className: j.sE,
                          children: [
                              (0, r.jsx)(d.DUT, {
                                  className: j.LP,
                                  "aria-label": B.intl.string(B.t.RT3MPz),
                                  onClick: W,
                                  children: (0, r.jsxs)("div", {
                                      className: s()({ [j.Nv]: !H, [j.An]: H }),
                                      children: [
                                          (0, r.jsx)(d.Kck, { size: "xs", color: "currentColor", className: j.Np }),
                                          (0, r.jsx)(d.Text, {
                                              className: j.r1,
                                              variant: "text-sm/medium",
                                              children: X,
                                          }),
                                          (0, r.jsx)(w.A, {
                                              width: 16,
                                              height: 16,
                                              direction: w.A.Directions.DOWN,
                                              className: j._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: j.Yk,
                                  children: [
                                      (0, r.jsx)(d.DUT, {
                                          "aria-label": B.intl.string(B.t["4huCnC"]),
                                          onClick: $,
                                          className: s()(j.ZM, j.vz, { [j.jf]: null == M }),
                                          children: (0, r.jsx)(w.A, {
                                              width: 16,
                                              height: 16,
                                              direction: w.A.Directions.UP,
                                          }),
                                      }),
                                      (0, r.jsx)(d.DUT, {
                                          "aria-label": B.intl.string(B.t["58KOoF"]),
                                          onClick: z,
                                          className: s()(j.ZM, j.mt, { [j.jf]: null == D }),
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
                      H &&
                          (0, r.jsxs)("div", {
                              className: j.A1,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: j.ke,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: j.Ne,
                                              children: [
                                                  (0, r.jsx)(d.Kck, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: j.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, r.jsx)(d.Heading, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: B.intl.string(B.t.q21fUr),
                                                  }),
                                                  (0, r.jsx)(T.A, { className: j.Zx }),
                                              ],
                                          }),
                                          (0, r.jsx)(d.DUT, {
                                              "aria-label": B.intl.string(B.t.cpT0Cq),
                                              onClick: W,
                                              className: j.oX,
                                              children: (0, r.jsx)(d.PGe, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(d.HOs, { ref: I, className: j.Pe, fade: !0, children: Q }),
                              ],
                          }),
                  ],
              })
    );
}
let ec = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, r.jsxs)("div", {
            className: j.YL,
            children: [
                (0, r.jsx)(d.Text, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: j.Ld,
                    children: e,
                }),
                t &&
                    (0, r.jsx)(d.Text, {
                        className: j.$o,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: B.intl.string(B.t["515vjG"]),
                    }),
            ],
        });
    },
    ed = (e) => {
        let { children: t, className: n } = e;
        return (0, r.jsx)("div", { className: s()(j.jC, n), children: t });
    },
    e_ = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(ed, {
            className: t,
            children: (0, r.jsx)("div", { className: j.wH, children: (0, r.jsx)("div", { className: j.j3 }) }),
        });
    };
