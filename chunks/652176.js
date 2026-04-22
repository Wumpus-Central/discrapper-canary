"use strict";
n.d(t, {
    $o: () => es,
    Ab: () => em,
    Dk: () => ed,
    Ez: () => ep,
    GN: () => ef,
    LL: () => eo,
    OZ: () => eg,
    P$: () => ea,
    UK: () => ex,
    Uk: () => ee,
    Uq: () => eC,
    Y0: () => eE,
    _d: () => eu,
    bU: () => ec,
    gL: () => er,
    ks: () => eh,
    yR: () => eA,
});
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    c = n.n(o),
    u = n(621466),
    d = n(311907),
    h = n(265872),
    m = n(187322),
    p = n(821609),
    f = n(289873),
    g = n(939249),
    _ = n(582394),
    x = n(306788),
    A = n(834730),
    C = n(534514),
    E = n(789645),
    I = n(573613),
    v = n(843472),
    y = n(334738),
    S = n(490693),
    b = n(9578),
    N = n(56562),
    T = n(475743),
    j = n(718468),
    R = n(692051),
    w = n(915089),
    L = n(611371),
    M = n(74068),
    k = n(248643),
    O = n(752063),
    P = n(863922),
    D = n(513272),
    U = n(977463),
    V = n(253932),
    G = n(41431),
    F = n(222823),
    B = n(287809),
    H = n(147925),
    W = n(954571),
    K = n(403362),
    z = n(587481),
    Z = n(661191),
    q = n(838541),
    Y = n(652215),
    J = n(521732),
    $ = n(650583),
    X = n(985018),
    Q = n(708147);
let ee = { delay: 300, position: "top" },
    et = (e) => (t) => {
        e?.(t), (0, z.ls)(t);
    },
    en = (e) => (t) => {
        e?.(t), (0, z.y5)(t);
    };
function ei(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, l.jsxs)("div", {
        role: "dialog",
        "aria-label": X.intl.string(X.t.fSiQ3A),
        className: Q.ob,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === $.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, l.jsx)("span", { className: Q.k_, children: X.intl.string(X.t.fSiQ3A) }),
            (0, l.jsx)("span", { className: Q.a7, children: t }),
        ],
    });
}
function el(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: i,
            autoMute: r,
            alt: o,
            renderAdjacentContent: c,
            renderOverlayContent: u,
            disableAltTextDisplay: d = !1,
            hiddenSpoilers: p,
            mosaicStyleAlt: f,
            mediaLayoutType: g,
            reducedSizeAltTextButton: _,
            ...x
        } = e,
        A = et(t),
        C = en(n);
    (i = null == i ? z.v1 : i), (r = null == r ? z.uj : r);
    let [E, I] = s.useState(!0),
        [v, y] = s.useState(!1),
        S = g === q.dG.MOSAIC || !0 === f,
        b = (E || v) && !d && V._z.getSetting() && null != o && "" !== o && !0 !== p,
        N = s.useRef(null);
    return (0, l.jsxs)(s.Fragment, {
        children: [
            (0, l.jsx)(k.A, {
                ...x,
                alt: o,
                autoMute: r,
                mediaLayoutType: g,
                onControlsHide: () => I(!1),
                onControlsShow: () => I(!0),
                onMute: C,
                onVolumeChange: A,
                renderLinkComponent: ec,
                renderOverlayContent: u,
                volume: i,
            }),
            null != c && c(),
            S &&
                b &&
                (0, l.jsx)("div", {
                    className: Q.NO,
                    children: (0, l.jsx)(h.Y, {
                        targetElementRef: N,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, l.jsx)(ei, { altText: o, altButtonRef: N }),
                        children: (e) =>
                            (0, l.jsx)(m.vN, {
                                offset: 4,
                                children: (0, l.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: N,
                                    "aria-label": X.intl.string(X.t.fSiQ3A),
                                    onMouseEnter: () => y(!0),
                                    onMouseLeave: () => y(!1),
                                    className: a()(Q.DV, { [Q.yZ]: !0, [Q.I5]: _ }),
                                    children: X.intl.string(X.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !S && b && (0, l.jsx)("span", { className: Q.R5, children: o }),
        ],
    });
}
function es(e) {
    return (0, l.jsx)(el, { ...e });
}
function er(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: i,
            onVolumeShow: r,
            onVolumeHide: a,
            renderAdjacentContent: o,
            ...c
        } = e,
        u = et(t),
        d = en(i);
    return (
        (n = null == n ? z.v1 : n),
        (0, l.jsxs)(s.Fragment, {
            children: [
                (0, l.jsx)(M.A, {
                    ...c,
                    onVolumeChange: u,
                    onMute: d,
                    onVolumeShow: r,
                    onVolumeHide: a,
                    volume: n,
                    autoMute: () => !1,
                    renderLinkComponent: ec,
                }),
                null != o && o(),
            ],
        })
    );
}
function ea(e) {
    let { onVolumeChange: t, volume: n, onMute: i, ...s } = e,
        r = et(t),
        a = en(i);
    return (n = null == n ? z.v1 : n), (0, l.jsx)(G.A, { ...s, onVolumeChange: r, onMute: a, volume: n });
}
function eo(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: i,
            containerClassName: r,
            imageContainerClassName: o,
            disableAltTextDisplay: c = !1,
            reducedSizeAltTextButton: u = !1,
            mediaLayoutType: d,
            imageContainerStyle: p,
            mosaicStyleAlt: f,
        } = e,
        g = d === q.dG.MOSAIC || !0 === f,
        _ = !c && V._z.getSetting() && null != t && "" !== t && !0 !== n,
        x = s.createRef();
    return (0, l.jsxs)("div", {
        className: a()(Q.fo, r),
        children: [
            (0, l.jsxs)("div", {
                className: a()(Q.ZS, o),
                style: p,
                children: [(0, l.jsx)(S.A, { ...e }), null != i && i()],
            }),
            g &&
                _ &&
                (0, l.jsx)("div", {
                    className: Q.Y1,
                    children: (0, l.jsx)(h.Y, {
                        targetElementRef: x,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, l.jsx)(ei, { altText: t, altButtonRef: x }),
                        children: (e) =>
                            (0, l.jsx)(m.vN, {
                                offset: 4,
                                children: (0, l.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: x,
                                    "aria-label": X.intl.string(X.t.fSiQ3A),
                                    className: a()(Q.DV, { [Q.I5]: u }),
                                    children: X.intl.string(X.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !g && _ && (0, l.jsx)("span", { className: Q.R5, children: t }),
        ],
    });
}
function ec(e) {
    return (0, l.jsx)(b.A, { ...e });
}
function eu(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, l.jsxs)(s.Fragment, { children: [(0, l.jsx)(O.A, { ...n }), null != t && t()] });
}
function ed(e) {
    return (0, l.jsx)(j.A, { ...e });
}
var eh = (((i = {})[(i.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (i[(i.REPLY = 1)] = "REPLY"), i);
let em = (e) => {
        let { type: t = 0, onClick: n, className: i } = e;
        return (0, l.jsx)(R.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, l.jsxs)("div", {
                          onClick: n,
                          className: a()(Q.Sg, i),
                          children: [
                              (0, l.jsx)("div", {
                                  className: Q.$I,
                                  children: (function (e) {
                                      switch (e) {
                                          case 0:
                                              return X.intl.string(X.t["4EvBbw"]);
                                          case 1:
                                              return X.intl.string(X.t["1J6Xq7"]);
                                          default:
                                              return (0, K.xb)(e);
                                      }
                                  })(t),
                              }),
                              null != n
                                  ? (0, l.jsx)(m.vN, {
                                        offset: -2,
                                        children: (0, l.jsx)(p.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: (function (e) {
                                                switch (e) {
                                                    case 0:
                                                        return X.intl.string(X.t.gpoQsB);
                                                    case 1:
                                                        return X.intl.string(X.t.k3RM8z);
                                                    default:
                                                        return (0, K.xb)(e);
                                                }
                                            })(t),
                                            onClick: n,
                                        }),
                                    })
                                  : (0, l.jsx)(f.y, {
                                        type: f.y.Type.PULSING_ELLIPSIS,
                                        className: Q.u1,
                                        itemClassName: Q.$N,
                                    }),
                          ],
                      }),
        });
    },
    ep = (e) => {
        let { onClick: t, loading: n, className: i } = e;
        return (0, l.jsx)(R.Y.Consumer, {
            children: (e) =>
                e.disableInteractions
                    ? null
                    : (0, l.jsxs)(g.D, {
                          className: a()(Q._5, i),
                          onClick: t,
                          focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                          children: [
                              (0, l.jsx)("div", { className: Q.$I, children: X.intl.string(X.t["1zUvlw"]) }),
                              n
                                  ? (0, l.jsx)(f.y, {
                                        type: f.y.Type.PULSING_ELLIPSIS,
                                        className: Q.u1,
                                        itemClassName: Q.$N,
                                    })
                                  : (0, l.jsx)("div", {
                                        className: a()(Q.hQ, Q.d3),
                                        children: X.intl.string(X.t.TdQXA8),
                                    }),
                          ],
                      }),
        });
    };
function ef(e) {
    let { content: t, channelId: n } = e,
        [i] = s.useState(() => (0, w.Ld)("NewMessagesBarJumpToNewMessages_")),
        r = s.useCallback(() => {
            let e = F.Ay.ackMessageId(n);
            null != e
                ? v.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : v.A.jumpToMessage({
                      channelId: n,
                      messageId: Z.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, y.ack)(n, {
                section: Y.JJy.NEW_MESSAGES_BANNER,
                object: Y.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: Y.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: c } = s.useContext(R.Y);
    return c
        ? null
        : (0, l.jsxs)("div", {
              className: a()(Q.eb, { [Q.y7]: c }),
              children: [
                  (0, l.jsx)(m.vN, {
                      offset: 4,
                      children: (0, l.jsx)("button", {
                          type: "button",
                          className: Q.$I,
                          onClick: r,
                          "aria-label": X.intl.string(X.t.z0Mkp3),
                          "aria-describedby": i,
                          children: (0, l.jsx)("span", { id: i, className: Q.Ln, children: t }),
                      }),
                  }),
                  (0, l.jsx)(m.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, l.jsx)("div", {
                          className: Q._o,
                          children: (0, l.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: Q.hQ,
                              children: [
                                  (0, l.jsx)("span", { className: Q.vE, children: X.intl.string(X.t.e6RscS) }),
                                  (0, l.jsx)(_.M, { size: "md", color: "currentColor", className: Q.t3 }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function eg(e) {
    let { channel: t, content: n, scrollManager: i } = e,
        { disableInteractions: r } = s.useContext(R.Y),
        [o, h] = s.useState(null),
        m = s.useRef(null),
        [p, f] = s.useState(null),
        S = s.useRef(null),
        b = (0, d.yK)([D.A], () => D.A.summaries(t.id) ?? [], [t]),
        j = (0, T.A)(b);
    s.useEffect(() => {
        c().isEqual(j, b) ||
            W.default.track(Y.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: b.length,
                message_counts: b.map((e) => e.count),
                start_message_ids: b.map((e) => e.startId),
                end_message_ids: b.map((e) => e.endId),
                num_participants: b.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [b, j, t.guild_id, t.id, t.type]);
    let w = (0, d.bG)(
            [B.default],
            () => b?.map((e) => e.people?.map((e) => B.default.getUser(e) ?? null).filter(K.Vq)) ?? [],
            [b],
            e_,
        ),
        M = (0, d.bG)([D.A], () => D.A.visibleSummaryIndex()) ?? -1,
        k = b?.[M]?.topic;
    null == k && null == o && b?.length >= 1 && (k = b[0]?.topic);
    let O = s.useMemo(
            () =>
                c().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        V = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, P.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        G = s.useCallback(
            (e) => {
                V(), O(e);
            },
            [O, V],
        ),
        [z, q] = s.useState(!1),
        $ = s.useCallback(() => {
            W.default.track(Y.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !z,
                num_summaries: b.length,
                message_counts: b.map((e) => e.count),
                start_message_ids: b.map((e) => e.startId),
                end_message_ids: b.map((e) => e.endId),
                num_participants: b.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                q(!z);
        }, [z, b, q, t]),
        ee = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J.eh.PILL_DROPDOWN,
                    l = b[e];
                if (null == l) return;
                (0, P.sK)(t.id, l.id), (0, P.C6)(t.id, l.id);
                let s = () => {
                    i.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            i.addAutomaticAnchorCallback(G, !1);
                        }, 100);
                };
                i.removeAutomaticAnchorCallback(G),
                    i.addScrollCompleteCallback(s),
                    W.default.track(Y.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: l.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    v.A.jumpToMessage({
                        channelId: t.id,
                        messageId: l.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: N.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [b, t, G, i],
        ),
        et = s.useCallback((e) => {
            q(e);
            let t = S.current?.scrollTop;
            null != t && f(t);
        }, []);
    s.useEffect(() => {
        null != p && z && S.current?.scrollTo({ top: p });
    }, [p, z]);
    let en = s.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && m.current?.contains(e.target)) ||
                (z &&
                    W.default.track(Y.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: b.length,
                        message_counts: b.map((e) => e.count),
                        start_message_ids: b.map((e) => e.startId),
                        end_message_ids: b.map((e) => e.endId),
                        num_participants: b.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                et(!1));
        },
        [z, b, t, et],
    );
    s.useEffect(
        () => (
            i.addAutomaticAnchorCallback(G),
            () => {
                i.removeAutomaticAnchorCallback(G);
            }
        ),
        [i, G],
    ),
        s.useEffect(() => {
            (0, P.$T)(t.id);
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
    let ei = s.useMemo(
            () => (0, l.jsx)(U.A, { channel: t, summaries: b, summariesMembers: w, selectTopic: ee, setOpen: et }),
            [b, w, ee, et, t],
        ),
        el = s.useCallback(() => {
            let e = F.Ay.ackMessageId(t.id);
            null != e
                ? v.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : v.A.jumpToMessage({
                      channelId: t.id,
                      messageId: Z.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        es = s.useCallback(() => {
            (0, y.ack)(t.id, {
                section: Y.JJy.NEW_TOPICS_BAR,
                object: Y.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: Y.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        er = X.intl.string(X.t["38qwgO"]);
    return (
        b.length > 0 && (er = "" === k || null == k ? X.intl.string(X.t.DwnFuG) : k),
        r
            ? null
            : (0, l.jsxs)("div", {
                  ref: m,
                  className: a()(Q.dw, Q.jh),
                  children: [
                      (0, l.jsx)("div", {
                          className: Q.qm,
                          children: (0, l.jsx)(g.D, {
                              className: Q.TQ,
                              "aria-label": X.intl.string(X.t.RT3MPz),
                              onClick: $,
                              children: (0, l.jsxs)("div", {
                                  className: a()({ [Q.hN]: !z, [Q.Ap]: z }),
                                  children: [
                                      (0, l.jsx)(x.K, { size: "xs", color: "currentColor", className: Q.Vd }),
                                      (0, l.jsx)(A.E, {
                                          variant: "text-sm/medium",
                                          className: a()(Q.$U, Q.lc),
                                          children: er,
                                      }),
                                      (0, l.jsx)(H.A, {
                                          width: 16,
                                          height: 16,
                                          direction: H.A.Directions.DOWN,
                                          className: Q.HB,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, l.jsx)(g.D, { onClick: el, className: Q.ij, children: n }),
                      (0, l.jsxs)(g.D, {
                          onClick: es,
                          className: a()(Q.hQ, Q.NX),
                          children: [
                              (0, l.jsx)("div", { className: Q.$U, children: X.intl.string(X.t.e6RscS) }),
                              (0, l.jsx)(_.M, { size: "md", color: "currentColor", className: Q.t3 }),
                          ],
                      }),
                      z &&
                          (0, l.jsxs)("div", {
                              className: Q.A1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: Q.ke,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: Q.Ne,
                                              children: [
                                                  (0, l.jsx)(x.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: Q.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, l.jsx)(C.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: X.intl.string(X.t.q21fUr),
                                                  }),
                                                  (0, l.jsx)(L.A, { className: Q.Zx }),
                                              ],
                                          }),
                                          (0, l.jsx)(g.D, {
                                              "aria-label": X.intl.string(X.t.cpT0Cq),
                                              onClick: $,
                                              className: Q.oX,
                                              children: (0, l.jsx)(E.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(I.Ip, { ref: S, className: Q.Pe, fade: !0, children: ei }),
                              ],
                          }),
                  ],
              })
    );
}
function e_(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var i;
            return null == (i = t[n]) || e.length !== i.length || !!e.some((e, t) => i[t] !== e);
        })
    );
}
function ex(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: i } = s.useContext(R.Y),
        [r, o] = s.useState(null),
        h = s.useRef(null),
        [m, p] = s.useState(null),
        f = s.useRef(null),
        _ = (0, d.yK)([D.A], () => D.A.summaries(t.id) ?? [], [t]),
        y = (0, T.A)(_);
    s.useEffect(() => {
        c().isEqual(y, _) ||
            W.default.track(Y.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: _.length,
                message_counts: _.map((e) => e.count),
                start_message_ids: _.map((e) => e.startId),
                end_message_ids: _.map((e) => e.endId),
                num_participants: _.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [_, y, t.guild_id, t.id, t.type]);
    let S = (0, d.bG)(
            [B.default],
            () => _?.map((e) => e.people?.map((e) => B.default.getUser(e) ?? null).filter(K.Vq)) ?? [],
            [_],
            e_,
        ),
        b = (0, d.bG)([D.A], () => D.A.visibleSummaryIndex()) ?? -1,
        j = _?.[b]?.topic;
    null == j && null == r && _?.length >= 1 && (j = _[0]?.topic);
    let w = s.useMemo(() => c().get(_, b - 1), [b, _]),
        M = s.useMemo(() => c().get(_, b + 1), [b, _]),
        k = s.useMemo(
            () =>
                c().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        O = s.useMemo(
            () =>
                c().throttle(
                    () => {
                        (0, P.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        V = s.useCallback(
            (e) => {
                O(), k(e);
            },
            [k, O],
        ),
        [G, F] = s.useState(!1),
        z = s.useCallback(() => {
            W.default.track(Y.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !G,
                num_summaries: _.length,
                message_counts: _.map((e) => e.count),
                start_message_ids: _.map((e) => e.startId),
                end_message_ids: _.map((e) => e.endId),
                num_participants: _.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                F(!G);
        }, [G, _, F, t]),
        Z = s.useCallback(
            function (e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J.eh.PILL_DROPDOWN,
                    l = _[e];
                if (null == l) return;
                (0, P.sK)(t.id, l.id), (0, P.C6)(t.id, l.id);
                let s = () => {
                    n.removeScrollCompleteCallback(s),
                        setTimeout(() => {
                            n.addAutomaticAnchorCallback(V, !1);
                        }, 100);
                };
                n.removeAutomaticAnchorCallback(V),
                    n.addScrollCompleteCallback(s),
                    W.default.track(Y.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: i,
                        message_id: l.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    v.A.jumpToMessage({
                        channelId: t.id,
                        messageId: l.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: N.US.ANIMATED,
                        context: "Summary Jump",
                    });
            },
            [_, t, V, n],
        ),
        q = s.useCallback(() => {
            Z(b - 1, J.eh.PILL_NEXT_ARROW);
        }, [Z, b]),
        $ = s.useCallback(() => {
            Z(b + 1, J.eh.PILL_PREVIOUS_ARROW);
        }, [b, Z]),
        ee = s.useCallback((e) => {
            F(e);
            let t = f.current?.scrollTop;
            null != t && p(t);
        }, []);
    s.useEffect(() => {
        null != m && G && f.current?.scrollTo({ top: m });
    }, [m, G]);
    let et = s.useCallback(
        (e) => {
            ((0, u.vq)(e.target) && h.current?.contains(e.target)) ||
                (G &&
                    W.default.track(Y.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: _.length,
                        message_counts: _.map((e) => e.count),
                        start_message_ids: _.map((e) => e.startId),
                        end_message_ids: _.map((e) => e.endId),
                        num_participants: _.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                ee(!1));
        },
        [G, _, t, ee],
    );
    s.useEffect(
        () => (
            n.addAutomaticAnchorCallback(V),
            () => {
                n.removeAutomaticAnchorCallback(V);
            }
        ),
        [n, V],
    ),
        s.useEffect(() => {
            (0, P.$T)(t.id);
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
        () => (0, l.jsx)(U.A, { channel: t, summaries: _, summariesMembers: S, selectTopic: Z, setOpen: ee }),
        [_, S, Z, ee, t],
    );
    if (!(0, d.bG)([D.A], () => D.A.shouldShowTopicsBar())) return null;
    let ei = X.intl.string(X.t["38qwgO"]);
    return (
        _.length > 0 && (ei = "" === j || null == j ? X.intl.string(X.t.DwnFuG) : j),
        i
            ? null
            : (0, l.jsxs)("div", {
                  ref: h,
                  className: a()(Q.$T, Q.jh),
                  children: [
                      (0, l.jsxs)("div", {
                          className: Q.sE,
                          children: [
                              (0, l.jsx)(g.D, {
                                  className: Q.LP,
                                  "aria-label": X.intl.string(X.t.RT3MPz),
                                  onClick: z,
                                  children: (0, l.jsxs)("div", {
                                      className: a()({ [Q.Nv]: !G, [Q.An]: G }),
                                      children: [
                                          (0, l.jsx)(x.K, { size: "xs", color: "currentColor", className: Q.Np }),
                                          (0, l.jsx)(A.E, { className: Q.r1, variant: "text-sm/medium", children: ei }),
                                          (0, l.jsx)(H.A, {
                                              width: 16,
                                              height: 16,
                                              direction: H.A.Directions.DOWN,
                                              className: Q._l,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, l.jsxs)("div", {
                                  className: Q.Yk,
                                  children: [
                                      (0, l.jsx)(g.D, {
                                          "aria-label": X.intl.string(X.t["4huCnC"]),
                                          onClick: $,
                                          className: a()(Q.ZM, Q.vz, { [Q.jf]: null == M }),
                                          children: (0, l.jsx)(H.A, {
                                              width: 16,
                                              height: 16,
                                              direction: H.A.Directions.UP,
                                          }),
                                      }),
                                      (0, l.jsx)(g.D, {
                                          "aria-label": X.intl.string(X.t["58KOoF"]),
                                          onClick: q,
                                          className: a()(Q.ZM, Q.mt, { [Q.jf]: null == w }),
                                          children: (0, l.jsx)(H.A, {
                                              width: 16,
                                              height: 16,
                                              direction: H.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      G &&
                          (0, l.jsxs)("div", {
                              className: Q.A1,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: Q.ke,
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: Q.Ne,
                                              children: [
                                                  (0, l.jsx)(x.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: Q.vl,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, l.jsx)(C.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: X.intl.string(X.t.q21fUr),
                                                  }),
                                                  (0, l.jsx)(L.A, { className: Q.Zx }),
                                              ],
                                          }),
                                          (0, l.jsx)(g.D, {
                                              "aria-label": X.intl.string(X.t.cpT0Cq),
                                              onClick: z,
                                              className: Q.oX,
                                              children: (0, l.jsx)(E.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(I.Ip, { ref: f, className: Q.Pe, fade: !0, children: en }),
                              ],
                          }),
                  ],
              })
    );
}
let eA = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, l.jsxs)("div", {
            className: Q.YL,
            children: [
                (0, l.jsx)(A.E, {
                    color: "none",
                    variant: "text-sm/semibold",
                    lineClamp: 1,
                    className: Q.Ld,
                    children: e,
                }),
                t &&
                    (0, l.jsx)(A.E, {
                        className: Q.$o,
                        color: "text-muted",
                        variant: "text-sm/normal",
                        children: X.intl.string(X.t["515vjG"]),
                    }),
            ],
        });
    },
    eC = (e) => {
        let { children: t, className: n } = e;
        return (0, l.jsx)("div", { className: a()(Q.jC, n), children: t });
    },
    eE = (e) => {
        let { className: t } = e;
        return (0, l.jsx)(eC, {
            className: t,
            children: (0, l.jsx)("div", { className: Q.wH, children: (0, l.jsx)("div", { className: Q.j3 }) }),
        });
    };
