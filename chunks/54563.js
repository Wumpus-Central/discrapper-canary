n.d(t, { A: () => eT });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(494012),
    o = n(505124),
    u = n(855986),
    d = n(43990),
    c = n(453903),
    m = n(413599),
    h = n(683574);
n(938796);
var f = n(120692),
    p = n(665260),
    g = n(683063),
    A = n(265872),
    v = n(460905),
    x = n(110384),
    E = n(939249),
    C = n(834730),
    _ = n(138399),
    y = n(565645),
    T = n(822123),
    N = n(920134),
    b = n(73153),
    j = n(95701),
    I = n(596344),
    S = n(652215);
let R = (0, u.UT)(I.A, {
    getQueryId: (e, t, n, l, i) => (null != n && null != t && null != l && i ? e.id : null),
    get: (e) => (I.A.isReady(e.id) ? I.A.getMessages(e.id) : null),
    load: async (e, t, n, l) => {
        if (null == n || null == t) return;
        let i = e.id;
        (await _.A.fetchMessages({ channelId: i, limit: 100 }),
            await b.h.dispatch({
                type: "THREAD_CREATE",
                channel: new j.Lt({
                    id: i,
                    parent_id: t,
                    type: S.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? "null",
                    ownerId: l,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            }));
    },
    getIsLoading: (e) => I.A.isLoadingMessages(e.id),
});
var M = n(451909),
    O = n(118517),
    w = n(747926),
    P = n(46653),
    L = n(734057),
    k = n(188567),
    D = n(475815);
let U = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var F = n(307731),
    G = n(381941),
    V = n(683825),
    H = n(792996),
    B = n(455871);
function W(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function Z(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: s,
            guildId: o,
            hidden: d = !1,
            containerWidth: c,
        } = e,
        m = n.id,
        b = (0, T.QZ)(o),
        j = null != c && c < 460,
        Z = b.slice(0, j ? 2 : 3),
        K = (0, u.bG)([I.A], () => I.A.getMessage(a, s), [a, s]),
        q = (0, u.bG)([L.A], () => L.A.getChannel(a), [a]),
        Y = (0, u.bG)([L.A], () => L.A.getChannel(m), [m]),
        { enableMediaComments: Q } = U.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: $, videoRef: X } = (0, h.X$)(),
        J = (0, p.Lt)(n.flags ?? 0, S.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = R(n, a, o, K?.author.id, Q && J),
        et = i.useRef(null);
    function en(e, t) {
        (e?.stopPropagation(),
            (function (e) {
                if (null == q || null == K || null == s || null == X?.current?.currentTime) return;
                let t =
                        null != e.id
                            ? !0 === e.animated
                                ? `<a:${e.originalName ?? e.name}:${e.id}>`
                                : `<:${e.originalName ?? e.name}:${e.id}>`
                            : "surrogates" in e && null != e.surrogates
                              ? e.surrogates
                              : e.name,
                    n = K.author.id === P.default.getId();
                _.A.sendMessage(q.id, M.Ay.parse(q, t), !1, {
                    location: G.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: q.id, guild_id: q.getGuildId() ?? void 0, message_id: s },
                    allowedMentions: { replied_user: !n },
                    mediaMention: W(m, X),
                });
            })(t));
    }
    let el = ee?.length ?? 0;
    if (!Q || null == q || null == s) return null;
    let ei = H.intl.formatToPlainString(V.default.OYDyt2, { count: el });
    return (0, l.jsxs)(f.animated.div, {
        className: r()(B.M0, { [B.pd]: d }),
        inert: d,
        style: {
            opacity: (0, f.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (d ? 0 : `${e}`)),
            transform: (0, f.to)(
                [t.to({ range: [0, 1], output: [50, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, l.jsx)("div", {
                className: B.gm,
                children: Z.map((e) =>
                    (0, l.jsx)(
                        g.u,
                        {
                            title: H.intl.formatToPlainString(V.default["CZCvn+"], { emoji: e.name }),
                            body: H.intl.string(V.default.wQFVGI),
                            children: (0, l.jsx)("button", {
                                type: "button",
                                className: B.x6,
                                onClick: (t) => en(t, e),
                                children: (0, l.jsx)(y.A, {
                                    emojiId: e.id,
                                    emojiName: null != e.id ? e.name : e.surrogates,
                                    shouldAnimate: !1,
                                    animated: "animated" in e ? e.animated : void 0,
                                    surrogate: "surrogates" in e ? e.surrogates : void 0,
                                }),
                            }),
                        },
                        `${e.id ?? 0}:${e.name}`,
                    ),
                ),
            }),
            (0, l.jsx)(z, {}),
            (0, l.jsx)(A.Y, {
                layerContext: $,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(N.A, {
                        channel: q,
                        closePopout: t,
                        messageId: s,
                        pickerIntention: F.EmojiIntention.CHAT,
                        onSelectEmoji: (e) => {
                            let { emoji: n } = e;
                            null != n && (en(void 0, n), t());
                        },
                    });
                },
                position: "right",
                align: "center",
                clickTrap: !0,
                children: (e) =>
                    (0, l.jsx)(g.u, {
                        title: H.intl.string(V.default["ZEs/pI"]),
                        body: H.intl.string(V.default.K8Khlc),
                        targetElementRef: et,
                        children: (0, l.jsx)("button", {
                            ...e,
                            ref: et,
                            type: "button",
                            className: B.x6,
                            children: (0, l.jsx)(v.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, l.jsx)(g.u, {
                title: H.intl.string(V.default.y2TE38),
                body: H.intl.string(V.default.c3OIMS),
                children: (0, l.jsx)("button", {
                    type: "button",
                    className: B.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == q || null == K || null == X?.current?.currentTime)) return;
                        D._U(X.current) && D.sP(X.current);
                        let t = K.author.id === P.default.getId();
                        ((0, O.Yf)({
                            channel: q,
                            message: K,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !q.isPrivate() && !t,
                            mediaMention: W(m, X),
                        }),
                            k._.dispatch(S.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: q.id }));
                    },
                    children: (0, l.jsx)(x.W, { size: "sm" }),
                }),
            }),
            el > 0 &&
                !j &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(z, {}),
                        (0, l.jsx)(E.D, {
                            className: B.jC,
                            tag: "span",
                            onClick: function (e) {
                                (e.stopPropagation(), null != Y && (D._U(X.current) && D.sP(X.current), (0, w.JA)(Y)));
                            },
                            "aria-label": ei,
                            children: (0, l.jsx)(C.E, {
                                variant: "body-sm/semibold",
                                color: "text-link",
                                lineClamp: 1,
                                children: ei,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function z() {
    return (0, l.jsx)("div", { className: B.yF });
}
var K = n(555115),
    q = n(717421),
    Y = n(534890),
    Q = n(646514),
    $ = n(97808),
    X = n(778712),
    J = n(7584);
let ee = /^<(a)?:(\w+):(\d+)>$/;
var et = n(538355),
    en = n(466491);
function el(e) {
    return { opacity: e ? 1 : 0.4, width: `${e ? 20 : 12}px`, height: `${e ? 20 : 12}px` };
}
function ei(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            durationSeconds: a,
            guildId: r,
            channelId: s,
            messageId: o,
            hidden: d = !1,
        } = e,
        { enableMediaComments: c } = U.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        m = (0, p.Lt)(n.flags ?? 0, S.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: g, isControlBarExpanded: A } = (0, h.X$)(),
        v = (0, u.bG)([I.A], () => I.A.getMessage(s, o), [s, o]),
        { data: x } = R(n, s, r, v?.author.id, c && m && g);
    return (i.useEffect(() => {
        g && R.refetch(n, s, r, v?.author.id, c && m && g);
    }, [g, n, s, r, v?.author.id, c, m]),
    !c || null == x || a <= 0)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  !d && (!g || !A) && (0, l.jsx)("div", { className: en.s_ }),
                  (0, l.jsx)(f.animated.div, {
                      className: en.IO,
                      style: {
                          transform: g
                              ? (0, f.to)([t.to({ range: [0, 1], output: [60, 0] })], (e) => `translateY(${e}px)`)
                              : "translateY(60px)",
                      },
                      children: x.map((e) => (0, l.jsx)(er, { hidden: d, message: e, durationSeconds: a }, e.id)),
                  }),
              ],
          });
}
let ea = { formatInline: !0 };
function er(e) {
    let { message: t, durationSeconds: n, hidden: a } = e,
        r = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = i.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(ee);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== J.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        { content: o } = (0, et.A)(t, ea),
        u = "" !== t.content ? o : null,
        { videoRef: d, isActive: c, isControlBarExpanded: m } = (0, h.X$)(),
        [p, A] = i.useState(!1),
        [v, x] = i.useState(!1),
        [C, T] = i.useState(!1);
    i.useEffect(() => {
        let e = d.current;
        if (null != e) return (e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n));
        function n() {
            if (null == e) return;
            let n = e.currentTime,
                l = t?.mediaMention?.timestamp;
            null != l && A(1e3 >= Math.abs(1e3 * n - l));
        }
    }, [t?.mediaMention?.timestamp, d]);
    let N = p || !c || v,
        [b, j] = (0, q.z)(() => ({ ...el(N), config: { ...K.n } }));
    if (
        (i.useEffect(() => {
            let e = !1;
            return (
                !(async function () {
                    T(!0);
                    let t = await j(el(N));
                    !e && t.finished && T(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [j, N]),
        null == t)
    )
        return null;
    let I = (0, l.jsx)(E.D, {
        className: en.xL,
        style: { left: r, display: a ? "none" : "block" },
        inert: a,
        onMouseEnter: () => x(!0),
        onMouseLeave: () => x(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                l = t.messageReference?.message_id;
            null != n && null != l && _.A.jumpToMessage({ channelId: n, messageId: l, flash: !0 });
        },
        children: (0, l.jsx)(f.animated.div, {
            className: en.BC,
            style: b,
            children:
                null != s
                    ? (0, l.jsx)(y.A, {
                          emojiId: s.emojiId,
                          emojiName: s.emojiName,
                          shouldAnimate: p,
                          animated: s.animated,
                          surrogate: s.surrogate,
                          className: en.Zg,
                      })
                    : (0, l.jsx)(Y.ChatIcon, {
                          colorClass: en.Or,
                          color: Q.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == u
        ? I
        : (0, l.jsx)(g.u, {
              positionKey: `${m}`,
              forceOpen: p && null == s && !C,
              asset: (0, l.jsx)($.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: X._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: u,
              children: I,
          });
}
var es = n(478531),
    eo = n(194498),
    eu = n(376595),
    ed = n(773503);
let ec = [];
function em(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: r } = e,
        s = i.useMemo(() => eu.H.fromAttachmentTimeline(t), [t]),
        [o, u] = i.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: d } = (0, h.X$)();
    return (
        (0, eo.A)(() => {
            let e = d.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            u(s.getEventsAtTimestamp(t));
        }),
        (0, l.jsx)(ed.A, {
            speakingUserIds: o.speakingUserIds,
            activeSoundboards: ec,
            userIds: n,
            guildId: a,
            channelId: r,
        })
    );
}
var eh = n(419490),
    ef = n(458977),
    ep = n(42502),
    eg = n(110742),
    eA = n(352527),
    ev = n(996682),
    ex = n(27989);
function eE(e) {
    let {
            size: t = "md",
            width: n,
            height: i,
            color: a = Q.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...s
        } = e,
        o = (0, ex.J)(t),
        u = o?.width ?? n,
        d = o?.height ?? i;
    return (0, l.jsxs)("svg", {
        ...(0, ev.A)(s),
        width: u,
        height: d,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.8334 13.3379C29.1092 13.3381 29.3332 13.562 29.3334 13.8379V25.3379C29.3334 27.5469 27.5423 29.3376 25.3334 29.3379H6.66738C4.45825 29.3379 2.66739 27.547 2.66738 25.3379V13.8379C2.66755 13.5619 2.89134 13.3379 3.16738 13.3379H28.8334ZM14.5853 15.7471C14.0777 15.2396 13.2551 15.2396 12.7475 15.7471L8.74746 19.7471C8.50377 19.9908 8.3666 20.3213 8.3666 20.666C8.3666 20.9676 8.47106 21.2589 8.66054 21.4902L8.74746 21.5849L12.7475 25.5849C13.2551 26.0923 14.0777 26.0924 14.5853 25.5849C15.0927 25.0773 15.0927 24.2547 14.5853 23.7471L12.8041 21.9658H16.0004C18.4117 21.9662 20.3666 23.9216 20.3666 26.333C20.3668 27.0508 20.9495 27.6328 21.6674 27.6328C22.3847 27.6322 22.967 27.0504 22.9672 26.333C22.9672 22.4857 19.8476 19.3666 16.0004 19.3662H12.8041L14.5853 17.5849C15.0927 17.0773 15.0927 16.2547 14.5853 15.7471Z",
                fill: "string" == typeof a ? a : a.css,
                className: r,
            }),
            (0, l.jsx)("path", {
                d: "M9.27675 4.02342C9.67707 3.95309 9.99001 4.3646 9.81484 4.73143L6.81191 11.0146C6.74229 11.1603 6.60667 11.2639 6.44765 11.292L3.27382 11.8515C3.00188 11.8995 2.74267 11.7172 2.69472 11.4453L2.31777 9.31248C1.93416 7.13691 3.38731 5.06133 5.56289 4.67772L9.27675 4.02342Z",
                fill: "string" == typeof a ? a : a.css,
                className: r,
            }),
            (0, l.jsx)("path", {
                d: "M19.7807 2.17088C20.1811 2.10027 20.494 2.51195 20.3187 2.87889L17.3168 9.16209C17.2472 9.30779 17.1116 9.4114 16.9525 9.43944L10.8852 10.5088C10.4848 10.5792 10.1718 10.1676 10.3471 9.80077L13.35 3.51756C13.4197 3.37203 13.5554 3.26921 13.7143 3.2412L19.7807 2.17088Z",
                fill: "string" == typeof a ? a : a.css,
                className: r,
            }),
            (0, l.jsx)("path", {
                d: "M24.2221 1.39745C26.2944 1.17734 28.2121 2.59832 28.5795 4.68163L28.9564 6.81541C29.0042 7.08724 28.822 7.34658 28.5502 7.39452L21.39 8.65721C20.9897 8.72774 20.6769 8.31607 20.8519 7.9492L23.8539 1.66698C23.9239 1.52058 24.0607 1.4146 24.2221 1.39745Z",
                fill: "string" == typeof a ? a : a.css,
                className: r,
            }),
        ],
    });
}
var eC = n(879241);
function e_(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: s, isPlayerActive: o } = e,
        { enableDistributedClips: d } = ef.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = (0, u.bG)(
            [eh.Ay, P.default],
            () =>
                (function (e, t) {
                    let n,
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eh.Ay,
                        i = l.getClips(),
                        a = e.clip_remote_id,
                        r = null != a ? l.getClipByRemoteId(a) : void 0;
                    if (null != r) return r;
                    let s = (0, eg.Vi)(e);
                    if (null == s || null == t || !e.clip_participants?.some((e) => e.id === t)) return;
                    let o = 0;
                    for (let e of Object.values(i)) {
                        let t = (0, eg.Gn)(e);
                        if (null == t) continue;
                        let l = (0, eg.hL)(s, t);
                        null != l && l > o && ((o = l), (n = e));
                    }
                    return n;
                })(t, P.default.getId(), eh.Ay),
            [t],
        ),
        { onShareClick: m } = (0, eA.A)(n),
        h = (0, u.bG)([P.default, I.A], () => {
            let e = I.A.getMessage(n, a);
            return (
                null != e &&
                e.author?.id !== P.default.getId() &&
                (null == e.messageReference ||
                    I.A.getMessage(n, e.messageReference.message_id)?.author?.id !== P.default.getId())
            );
        }),
        f = (0, u.bG)([eh.Ay], () => eh.Ay.hasRepliedWithClip(a), [a]),
        p = i.useCallback(
            (e) => {
                null != c &&
                    (e.stopPropagation(),
                    m({
                        clips: [c],
                        messageReference: { channel_id: n, message_id: a },
                        povTargetInformation: (0, ep.A)(t),
                    }));
            },
            [m, c, n, a, t],
        );
    return d && null != c && !f && h
        ? (0, l.jsxs)("button", {
              className: r()(eC.eZ, { [eC.vu]: s, [eC.jn]: !o }),
              onClick: p,
              children: [
                  (0, l.jsx)(eE, { size: "refresh_sm", color: Q.A.colors.WHITE }),
                  (0, l.jsx)(C.E, {
                      variant: "body-xs/semibold",
                      color: "text-overlay-light",
                      children: H.intl.string(V.default.YKst58),
                  }),
              ],
          })
        : null;
}
var ey = n(862649);
function eT(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: i,
            isActive: a,
            isVolumeExpanded: f,
            attachment: p,
            guildId: g,
            isFullScreen: A,
            showParticipants: v,
            showTextContent: x,
            channelId: E,
            messageId: C,
            showSpeakingIndicators: _,
            clipUserIds: y,
            durationSeconds: T,
            showTimelineComments: N,
            setIsGridView: b,
            isGridView: j,
        } = e,
        I = (0, u.bG)([m.A], () => m.A.theme),
        { activeLayer: S } = (0, h.X$)(),
        { ref: R, width: M } = (0, s.Ay)();
    return (0, l.jsx)(d.N, {
        theme: o.NJ.ONYX,
        children: (e) =>
            (0, l.jsxs)("div", {
                ref: R,
                className: r()(ey.MU, e),
                children: [
                    (0, l.jsx)(es.A, {
                        createdAt: null != p.clip_created_at ? Date.parse(p.clip_created_at) : void 0,
                        participantIds: v ? y : [],
                        applicationId: p.application?.id,
                        title: p.title,
                        guildId: g,
                        playerState: t,
                        isControlBarExpanded: i,
                        isFullScreen: A,
                        activeLayer: S,
                        showTextContent: x,
                        isGridView: j,
                        setIsGridView: b,
                    }),
                    !j &&
                        null != C &&
                        null != E &&
                        (0, l.jsx)(e_, {
                            isControlBarExpanded: i,
                            isPlayerActive: a,
                            attachment: p,
                            messageId: C,
                            channelId: E,
                        }),
                    !j &&
                        _ &&
                        null != p.clip_events_timeline &&
                        null != E &&
                        (0, l.jsx)(em, { guildId: g, timeline: p.clip_events_timeline, userIds: y, channelId: E }),
                    a &&
                        null != g &&
                        null != E &&
                        null != C &&
                        (0, l.jsx)(c.NA.Provider, {
                            value: I,
                            children: (0, l.jsx)(Z, {
                                controlBarAnimationSpring: n,
                                attachment: p,
                                channelId: E,
                                messageId: C,
                                guildId: g,
                                containerWidth: M,
                                hidden: !i || f,
                            }),
                        }),
                    null != g &&
                        null != E &&
                        null != C &&
                        (0, l.jsx)(ei, {
                            controlBarAnimationSpring: n,
                            attachment: p,
                            channelId: E,
                            messageId: C,
                            guildId: g,
                            durationSeconds: p.duration_secs ?? T,
                            hidden: !N,
                        }),
                ],
            }),
    });
}
