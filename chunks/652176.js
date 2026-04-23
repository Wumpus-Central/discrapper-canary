"use strict";
n.d(t, {
    $o: () => es,
    Ab: () => ef,
    Dk: () => ed,
    Ez: () => ep,
    GN: () => eh,
    LL: () => el,
    OZ: () => eE,
    P$: () => eo,
    UK: () => eg,
    Uk: () => ee,
    Uq: () => eI,
    Y0: () => eT,
    _d: () => ec,
    bU: () => eu,
    gL: () => ea,
    ks: () => e_,
    yR: () => eA,
});
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(735438),
    u = n.n(l),
    c = n(621466),
    d = n(311907),
    _ = n(265872),
    f = n(187322),
    p = n(821609),
    h = n(289873),
    E = n(939249),
    m = n(582394),
    g = n(306788),
    A = n(834730),
    I = n(534514),
    T = n(789645),
    S = n(573613),
    y = n(843472),
    N = n(334738),
    v = n(490693),
    C = n(9578),
    O = n(56562),
    R = n(475743),
    b = n(718468),
    D = n(692051),
    L = n(915089),
    w = n(611371),
    M = n(74068),
    P = n(248643),
    x = n(752063),
    k = n(863922),
    U = n(513272),
    G = n(977463),
    F = n(253932),
    V = n(41431),
    B = n(222823),
    H = n(287809),
    j = n(147925),
    Y = n(954571),
    W = n(403362),
    K = n(587481),
    $ = n(661191),
    z = n(838541),
    q = n(652215),
    X = n(521732),
    Q = n(650583),
    Z = n(985018),
    J = n(708147);
let ee = { delay: 300, position: "top" },
    et = (e) => (t) => {
        e?.(t), (0, K.ls)(t);
    },
    en = (e) => (t) => {
        e?.(t), (0, K.y5)(t);
    };
function er(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, i.jsxs)("div", {
        role: "dialog",
        "aria-label": Z.intl.string(Z.t.fSiQ3A),
        className: J.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === Q.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)("span", { className: J.k_, children: Z.intl.string(Z.t.fSiQ3A) }),
            (0, i.jsx)("span", { className: J.a7, children: t }),
        ],
    });
}
function ei(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: r,
            autoMute: a,
            alt: l,
            renderAdjacentContent: u,
            renderOverlayContent: c,
            disableAltTextDisplay: d = !1,
            hiddenSpoilers: p,
            mosaicStyleAlt: h,
            mediaLayoutType: E,
            reducedSizeAltTextButton: m,
            ...g
        } = e,
        A = et(t),
        I = en(n);
    (r = null == r ? K.v1 : r), (a = null == a ? K.uj : a);
    let [T, S] = s.useState(!0),
        [y, N] = s.useState(!1),
        v = E === z.dG.MOSAIC || !0 === h,
        C = (T || y) && !d && F._z.getSetting() && null != l && "" !== l && !0 !== p,
        O = s.useRef(null);
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)(P.A, {
                ...g,
                alt: l,
                autoMute: a,
                mediaLayoutType: E,
                onControlsHide: () => S(!1),
                onControlsShow: () => S(!0),
                onMute: I,
                onVolumeChange: A,
                renderLinkComponent: eu,
                renderOverlayContent: c,
                volume: r,
            }),
            null != u && u(),
            v &&
                C &&
                (0, i.jsx)("div", {
                    className: J.NO,
                    children: (0, i.jsx)(_.Y, {
                        targetElementRef: O,
                        animation: _.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(er, { altText: l, altButtonRef: O }),
                        children: (e) =>
                            (0, i.jsx)(f.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: O,
                                    "aria-label": Z.intl.string(Z.t.fSiQ3A),
                                    onMouseEnter: () => N(!0),
                                    onMouseLeave: () => N(!1),
                                    className: o()(J.DV, { [J.yZ]: !0, [J.I5]: m }),
                                    children: Z.intl.string(Z.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !v && C && (0, i.jsx)("span", { className: J.R5, children: l }),
        ],
    });
}
function es(e) {
    return (0, i.jsx)(ei, { ...e });
}
function ea(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: r,
            onVolumeShow: a,
            onVolumeHide: o,
            renderAdjacentContent: l,
            ...u
        } = e,
        c = et(t),
        d = en(r);
    return (
        (n = null == n ? K.v1 : n),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(M.A, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: a,
                    onVolumeHide: o,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: eu,
                }),
                null != l && l(),
            ],
        })
    );
}
function eo(e) {
    let { onVolumeChange: t, volume: n, onMute: r, ...s } = e,
        a = et(t),
        o = en(r);
    return (n = null == n ? K.v1 : n), (0, i.jsx)(V.A, { ...s, onVolumeChange: a, onMute: o, volume: n });
}
function el(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: r,
            containerClassName: a,
            imageContainerClassName: l,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: d,
            imageContainerStyle: p,
            mosaicStyleAlt: h,
        } = e,
        E = d === z.dG.MOSAIC || !0 === h,
        m = !u && F._z.getSetting() && null != t && "" !== t && !0 !== n,
        g = s.createRef();
    return (0, i.jsxs)("div", {
        className: o()(J.fo, a),
        children: [
            (0, i.jsxs)("div", {
                className: o()(J.ZS, l),
                style: p,
                children: [(0, i.jsx)(v.A, { ...e }), null != r && r()],
            }),
            E &&
                m &&
                (0, i.jsx)("div", {
                    className: J.Y1,
                    children: (0, i.jsx)(_.Y, {
                        targetElementRef: g,
                        animation: _.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(er, { altText: t, altButtonRef: g }),
                        children: (e) =>
                            (0, i.jsx)(f.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: g,
                                    "aria-label": Z.intl.string(Z.t.fSiQ3A),
                                    className: o()(J.DV, { [J.I5]: c }),
                                    children: Z.intl.string(Z.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !E && m && (0, i.jsx)("span", { className: J.R5, children: t }),
        ],
    });
}
function eu(e) {
    return (0, i.jsx)(C.A, { ...e });
}
function ec(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(x.A, { ...n }), null != t && t()] });
}
function ed(e) {
    return (0, i.jsx)(b.A, { ...e });
}
var e_ = (((r = {})[(r.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (r[(r.REPLY = 1)] = "REPLY"), r);
let ef = (e) => {
        let { type: t = 0, onClick: n, className: r } = e;
        return (0, i.jsx)(D.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, i.jsxs)("div", {
                          onClick: n,
                          className: o()(J.Sg, r),
                          children: [
                              (0, i.jsx)("div", {
                                  className: J.$I,
                                  children: (function (e) {
                                      switch (e) {
                                          case 0:
                                              return Z.intl.string(Z.t["4EvBbw"]);
                                          case 1:
                                              return Z.intl.string(Z.t["1J6Xq7"]);
                                          default:
                                              return (0, W.xb)(e);
                                      }
                                  })(t),
                              }),
                              null != n
                                  ? (0, i.jsx)(f.vN, {
                                        offset: -2,
                                        children: (0, i.jsx)(p.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: (function (e) {
                                                switch (e) {
                                                    case 0:
                                                        return Z.intl.string(Z.t.gpoQsB);
                                                    case 1:
                                                        return Z.intl.string(Z.t.k3RM8z);
                                                    default:
                                                        return (0, W.xb)(e);
                                                }
                                            })(t),
                                            onClick: n,
                                        }),
                                    })
                                  : (0, i.jsx)(h.y, {
                                        type: h.y.Type.PULSING_ELLIPSIS,
                                        className: J.u1,
                                        itemClassName: J.$N,
                                    }),
                          ],
                      }),
        });
    },
    ep = (e) => {
        let { onClick: t, loading: n, className: r } = e;
        return (0, i.jsx)(D.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, i.jsxs)(E.D, {
                          className: o()(J._5, r),
                          onClick: t,
                          focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                          children: [
                              (0, i.jsx)("div", { className: J.$I, children: Z.intl.string(Z.t["1zUvlw"]) }),
                              n
                                  ? (0, i.jsx)(h.y, {
                                        type: h.y.Type.PULSING_ELLIPSIS,
                                        className: J.u1,
                                        itemClassName: J.$N,
                                    })
                                  : (0, i.jsx)("div", {
                                        className: o()(J.hQ, J.d3),
                                        children: Z.intl.string(Z.t.TdQXA8),
                                    }),
                          ],
                      }),
        });
    };
function eh(e) {
    let { content: t, channelId: n } = e,
        [r] = s.useState(() => (0, L.Ld)("NewMessagesBarJumpToNewMessages_")),
        a = s.useCallback(() => {
            let e = B.Ay.ackMessageId(n);
            null != e
                ? y.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : y.A.jumpToMessage({
                      channelId: n,
                      messageId: $.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        l = s.useCallback(() => {
            (0, N.ack)(n, {
                section: q.JJy.NEW_MESSAGES_BANNER,
                object: q.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: q.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = s.useContext(D.Y);
    return u
        ? null
        : (0, i.jsxs)("div", {
              className: o()(J.eb, { [J.y7]: u }),
              children: [
                  (0, i.jsx)(f.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: J.$I,
                          onClick: a,
                          "aria-label": Z.intl.string(Z.t.z0Mkp3),
                          "aria-describedby": r,
                          children: (0, i.jsx)("span", { id: r, className: J.Ln, children: t }),
                      }),
                  }),
                  (0, i.jsx)(f.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, i.jsx)("div", {
                          className: J._o,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: l,
                              className: J.hQ,
                              children: [
                                  (0, i.jsx)("span", { className: J.vE, children: Z.intl.string(Z.t.e6RscS) }),
                                  (0, i.jsx)(m.M, { size: "md", color: "currentColor", className: J.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function eE(e) {
    let { channel: t, content: n, scrollManager: r } = e,
        { disableInteractions: a } = s.useContext(D.Y),
        [l, _] = s.useState(null),
        f = s.useRef(null),
        [p, h] = s.useState(null),
        v = s.useRef(null),
        C = (0, d.yK)([U.A], () => U.A.summaries(t.id) ?? [], [t]),
        b = (0, R.A)(C);
    s.useEffect(() => {
        u().isEqual(b, C) ||
            Y.default.track(q.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: C.length,
                message_counts: C.map((e) => e.count),
                start_message_ids: C.map((e) => e.startId),
                end_message_ids: C.map((e) => e.endId),
                num_participants: C.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [C, b, t.guild_id, t.id, t.type]);
    let L = (0, d.bG)(
            [H.default],
            () => C?.map((e) => e.people?.map((e) => H.default.getUser(e) ?? null).filter(W.Vq)) ?? [],
            [C],
            em,
        ),
        M = (0, d.bG)([U.A], () => U.A.visibleSummaryIndex()) ?? -1,
        P = C?.[M]?.topic;
    null == P && null == l && C?.length >= 1 && (P = C[0]?.topic);
    let x = s.useMemo(
            () =>
                u().debounce((e) => {
                    _(e?.id ?? null);
                }, 64),
            [_],
        ),
        F = s.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, k.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        V = s.useCallback(
            (e) => {
                F(), x(e);
            },
            [x, F],
        ),
        [K, z] = s.useState(!1),
        Q = s.useCallback(() => {
            Y.default.track(q.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                z(!K);
        }, [K, C, z, t]),
        ee = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X.eh.PILL_DROPDOWN,
                    i = C[e];
                if (null == i) return;
                (0, k.sK)(t.id, i.id), (0, k.C6)(t.id, i.id);
                let s = () => {
                    r.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            r.addAutomaticAnchorCallback(V, !1);
                        }, 100);
                };
                r.removeAutomaticAnchorCallback(V),
                    r.addScrollCompleteCallback(s),
                    Y.default.track(q.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    y.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: O.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [C, t, V, r],
        ),
        et = s.useCallback((e) => {
            z(e);
            let t = v.current?.scrollTop;
            null != t && h(t);
        }, []);
    s.useEffect(() => {
        null != p && K && v.current?.scrollTo({ top: p });
    }, [p, K]);
    let en = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && f.current?.contains(e.target)) ||
                (K &&
                    Y.default.track(q.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                et(!1));
        },
        [K, C, t, et],
    );
    s.useEffect(
        () => (
            r.addAutomaticAnchorCallback(V),
            () => {
                r.removeAutomaticAnchorCallback(V);
            }
        ),
        [r, V],
    ),
        s.useEffect(() => {
            (0, k.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", en),
                () => {
                    document.removeEventListener("mousedown", en);
                }
            ),
            [en],
        );
    let er = s.useMemo(
            () => (0, i.jsx)(G.A, { channel: t, summaries: C, summariesMembers: L, selectTopic: ee, setOpen: et }),
            [C, L, ee, et, t],
        ),
        ei = s.useCallback(() => {
            let e = B.Ay.ackMessageId(t.id);
            null != e
                ? y.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : y.A.jumpToMessage({
                      channelId: t.id,
                      messageId: $.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        es = s.useCallback(() => {
            (0, N.ack)(t.id, {
                section: q.JJy.NEW_TOPICS_BAR,
                object: q.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: q.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        ea = Z.intl.string(Z.t["38qwgO"]);
    return (
        C.length > 0 && (ea = "" === P || null == P ? Z.intl.string(Z.t.DwnFuG) : P),
        a
            ? null
            : (0, i.jsxs)("div", {
                  ref: f,
                  className: o()(J.dw, J.jh),
                  children: [
                      (0, i.jsx)("div", {
                          className: J.qm,
                          children: (0, i.jsx)(E.D, {
                              className: J.TQ,
                              "aria-label": Z.intl.string(Z.t.RT3MPz),
                              onClick: Q,
                              children: (0, i.jsxs)("div", {
                                  className: o()({ [J.hN]: !K, [J.Ap]: K }),
                                  children: [
                                      (0, i.jsx)(g.K, { size: "xs", color: "currentColor", className: J.Vd }),
                                      (0, i.jsx)(A.E, {
                                          variant: "text-sm/medium",
                                          className: o()(J.$U, J.lc),
                                          children: ea,
                                      }),
                                      (0, i.jsx)(j.A, {
                                          width: 16,
                                          height: 16,
                                          direction: j.A.Directions.DOWN,
                                          className: J.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(E.D, { onClick: ei, className: J.ij, children: n }),
                      (0, i.jsxs)(E.D, {
                          onClick: es,
                          className: o()(J.hQ, J.NX),
                          children: [
                              (0, i.jsx)("div", { className: J.$U, children: Z.intl.string(Z.t.e6RscS) }),
                              (0, i.jsx)(m.M, { size: "md", color: "currentColor", className: J.t3 }),
                          ],
                      }),
                      K &&
                          (0, i.jsxs)("div", {
                              className: J.A1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: J.ke,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: J.Ne,
                                              children: [
                                                  (0, i.jsx)(g.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: J.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(I.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: Z.intl.string(Z.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(w.A, { className: J.Zx }),
                                              ],
                                          }),
                                          (0, i.jsx)(E.D, {
                                              "aria-label": Z.intl.string(Z.t.cpT0Cq),
                                              onClick: Q,
                                              className: J.oX,
                                              children: (0, i.jsx)(T.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(S.Ip, { ref: v, className: J.Pe, fade: !0, children: er }),
                              ],
                          }),
                  ],
              })
    );
}
function em(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var r;
            return null == (r = t[n]) || e.length !== r.length || !!e.some((e, t) => r[t] !== e);
        })
    );
}
function eg(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: r } = s.useContext(D.Y),
        [a, l] = s.useState(null),
        _ = s.useRef(null),
        [f, p] = s.useState(null),
        h = s.useRef(null),
        m = (0, d.yK)([U.A], () => U.A.summaries(t.id) ?? [], [t]),
        N = (0, R.A)(m);
    s.useEffect(() => {
        u().isEqual(N, m) ||
            Y.default.track(q.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: m.length,
                message_counts: m.map((e) => e.count),
                start_message_ids: m.map((e) => e.startId),
                end_message_ids: m.map((e) => e.endId),
                num_participants: m.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [m, N, t.guild_id, t.id, t.type]);
    let v = (0, d.bG)(
            [H.default],
            () => m?.map((e) => e.people?.map((e) => H.default.getUser(e) ?? null).filter(W.Vq)) ?? [],
            [m],
            em,
        ),
        C = (0, d.bG)([U.A], () => U.A.visibleSummaryIndex()) ?? -1,
        b = m?.[C]?.topic;
    null == b && null == a && m?.length >= 1 && (b = m[0]?.topic);
    let L = s.useMemo(() => u().get(m, C - 1), [C, m]),
        M = s.useMemo(() => u().get(m, C + 1), [C, m]),
        P = s.useMemo(
            () =>
                u().debounce((e) => {
                    l(e?.id ?? null);
                }, 64),
            [l],
        ),
        x = s.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, k.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        F = s.useCallback(
            (e) => {
                x(), P(e);
            },
            [P, x],
        ),
        [V, B] = s.useState(!1),
        K = s.useCallback(() => {
            Y.default.track(q.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !V,
                num_summaries: m.length,
                message_counts: m.map((e) => e.count),
                start_message_ids: m.map((e) => e.startId),
                end_message_ids: m.map((e) => e.endId),
                num_participants: m.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                B(!V);
        }, [V, m, B, t]),
        $ = s.useCallback(
            function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X.eh.PILL_DROPDOWN,
                    i = m[e];
                if (null == i) return;
                (0, k.sK)(t.id, i.id), (0, k.C6)(t.id, i.id);
                let s = () => {
                    n.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            n.addAutomaticAnchorCallback(F, !1);
                        }, 100);
                };
                n.removeAutomaticAnchorCallback(F),
                    n.addScrollCompleteCallback(s),
                    Y.default.track(q.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: r,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    y.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: O.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [m, t, F, n],
        ),
        z = s.useCallback(() => {
            $(C - 1, X.eh.PILL_NEXT_ARROW);
        }, [$, C]),
        Q = s.useCallback(() => {
            $(C + 1, X.eh.PILL_PREVIOUS_ARROW);
        }, [C, $]),
        ee = s.useCallback((e) => {
            B(e);
            let t = h.current?.scrollTop;
            null != t && p(t);
        }, []);
    s.useEffect(() => {
        null != f && V && h.current?.scrollTo({ top: f });
    }, [f, V]);
    let et = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && _.current?.contains(e.target)) ||
                (V &&
                    Y.default.track(q.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: m.length,
                        message_counts: m.map((e) => e.count),
                        start_message_ids: m.map((e) => e.startId),
                        end_message_ids: m.map((e) => e.endId),
                        num_participants: m.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                ee(!1));
        },
        [V, m, t, ee],
    );
    s.useEffect(
        () => (
            n.addAutomaticAnchorCallback(F),
            () => {
                n.removeAutomaticAnchorCallback(F);
            }
        ),
        [n, F],
    ),
        s.useEffect(() => {
            (0, k.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", et),
                () => {
                    document.removeEventListener("mousedown", et);
                }
            ),
            [et],
        );
    let en = s.useMemo(
        () => (0, i.jsx)(G.A, { channel: t, summaries: m, summariesMembers: v, selectTopic: $, setOpen: ee }),
        [m, v, $, ee, t],
    );
    if (!(0, d.bG)([U.A], () => U.A.shouldShowTopicsBar())) return null;
    let er = Z.intl.string(Z.t["38qwgO"]);
    return (
        m.length > 0 && (er = "" === b || null == b ? Z.intl.string(Z.t.DwnFuG) : b),
        r
            ? null
            : (0, i.jsxs)("div", {
                  ref: _,
                  className: o()(J.$T, J.jh),
                  children: [
                      (0, i.jsxs)("div", {
                          className: J.sE,
                          children: [
                              (0, i.jsx)(E.D, {
                                  className: J.LP,
                                  "aria-label": Z.intl.string(Z.t.RT3MPz),
                                  onClick: K,
                                  children: (0, i.jsxs)("div", {
                                      className: o()({ [J.Nv]: !V, [J.An]: V }),
                                      children: [
                                          (0, i.jsx)(g.K, { size: "xs", color: "currentColor", className: J.Np }),
                                          (0, i.jsx)(A.E, { className: J.r1, variant: "text-sm/medium", children: er }),
                                          (0, i.jsx)(j.A, {
                                              width: 16,
                                              height: 16,
                                              direction: j.A.Directions.DOWN,
                                              className: J._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: J.Yk,
                                  children: [
                                      (0, i.jsx)(E.D, {
                                          "aria-label": Z.intl.string(Z.t["4huCnC"]),
                                          onClick: Q,
                                          className: o()(J.ZM, J.vz, { [J.jf]: null == M }),
                                          children: (0, i.jsx)(j.A, {
                                              width: 16,
                                              height: 16,
                                              direction: j.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(E.D, {
                                          "aria-label": Z.intl.string(Z.t["58KOoF"]),
                                          onClick: z,
                                          className: o()(J.ZM, J.mt, { [J.jf]: null == L }),
                                          children: (0, i.jsx)(j.A, {
                                              width: 16,
                                              height: 16,
                                              direction: j.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      V &&
                          (0, i.jsxs)("div", {
                              className: J.A1,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: J.ke,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: J.Ne,
                                              children: [
                                                  (0, i.jsx)(g.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: J.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(I.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: Z.intl.string(Z.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(w.A, { className: J.Zx }),
                                              ],
                                          }),
                                          (0, i.jsx)(E.D, {
                                              "aria-label": Z.intl.string(Z.t.cpT0Cq),
                                              onClick: K,
                                              className: J.oX,
                                              children: (0, i.jsx)(T.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(S.Ip, { ref: h, className: J.Pe, fade: !0, children: en }),
                              ],
                          }),
                  ],
              })
    );
}
let eA = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, i.jsxs)("div", {
            className: J.YL,
            children: [
                (0, i.jsx)(A.E, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: J.Ld,
                    children: e,
                }),
                t &&
                    (0, i.jsx)(A.E, {
                        className: J.$o,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: Z.intl.string(Z.t["515vjG"]),
                    }),
            ],
        });
    },
    eI = (e) => {
        let { children: t, className: n } = e;
        return (0, i.jsx)("div", { className: o()(J.jC, n), children: t });
    },
    eT = (e) => {
        let { className: t } = e;
        return (0, i.jsx)(eI, {
            className: t,
            children: (0, i.jsx)("div", { className: J.wH, children: (0, i.jsx)("div", { className: J.j3 }) }),
        });
    };
