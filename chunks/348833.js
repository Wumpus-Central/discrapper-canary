n.d(t, { A: () => eM });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(876230),
    d = n(26137),
    u = n(268218),
    c = n(776231),
    m = n(614269),
    p = n(829097),
    h = n(734057),
    g = n(945810);
let C = (0, g.mj)({
    kind: "user",
    name: "2026-05-clips-scrub-preview-frontend",
    defaultConfig: { enableScrubPreview: !1 },
    variations: { 1: { enableScrubPreview: !0 } },
});
var f = n(505124),
    A = n(43990);
n(938796);
var I = n(580929),
    v = n(665260),
    x = n(459192),
    j = n(922016),
    _ = n(460905),
    M = n(110384),
    b = n(939249),
    y = n(834730),
    E = n(493336),
    N = n(565645),
    S = n(822123),
    T = n(334295),
    k = n(228366),
    L = n(95701),
    w = n(232835),
    R = n(652215);
let P = (0, r.UT)(w.A, {
    getQueryId: (e, t, n, i, l) => (null != n && null != t && null != i && l ? e.id : null),
    get: (e) => (w.A.isReady(e.id) ? w.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let l = e.id;
        await E.A.fetchMessages({ channelId: l, limit: 100 }),
            await k.h.dispatch({
                type: "THREAD_CREATE",
                channel: new L.Lt({
                    id: l,
                    parent_id: t,
                    type: R.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? R.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => w.A.isLoadingMessages(e.id),
});
var D = n(451909),
    H = n(118517),
    O = n(747926),
    V = n(625494);
let B = (0, g.mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var G = n(307731),
    U = n(381941),
    F = n(16590),
    K = n(375708),
    Z = n(909022);
function $(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function Y(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: o,
            guildId: d,
            videoRef: u,
            hidden: c = !1,
        } = e,
        m = n.id,
        p = (0, S.QZ)(d).slice(0, 3),
        g = (0, r.bG)([w.A], () => w.A.getMessage(a, o), [a, o]),
        C = (0, r.bG)([h.A], () => h.A.getChannel(a), [a]),
        f = (0, r.bG)([h.A], () => h.A.getChannel(m), [m]),
        { enableMediaComments: A } = B.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        k = (0, v.Lt)(n.flags ?? 0, R.sbO.HAS_TIMELINE_COMMENTS),
        { data: L } = P(n, a, d, g?.author.id, A && k),
        Y = l.useRef(null);
    function Q(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == C || null == o || null == u?.current?.currentTime) return;
                let t =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.originalName ?? e.name}:${e.id}>`
                            : `<:${e.originalName ?? e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                E.A.sendMessage(C.id, D.Ay.parse(C, t), !1, {
                    location: U.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: C.id, guild_id: C.getGuildId() ?? void 0, message_id: o },
                    mediaMention: $(m, u),
                });
            })(t);
    }
    let J = L?.length ?? 0;
    if (!A || null == C || null == o) return null;
    let W = K.intl.formatToPlainString(F.default.OYDyt2, { count: J });
    return (0, i.jsxs)(I.animated.div, {
        className: s()(Z.M0, { [Z.pd]: c }),
        inert: c,
        style: {
            opacity: (0, I.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (c ? 0 : `${e}`)),
            transform: (0, I.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: Z.gm,
                children: p.map((e) =>
                    (0, i.jsx)(
                        x.u,
                        {
                            title: K.intl.formatToPlainString(F.default["CZCvn+"], { emoji: e.name }),
                            body: K.intl.string(F.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: Z.x6,
                                onClick: (t) => Q(t, e),
                                children: (0, i.jsx)(N.A, {
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
            (0, i.jsx)(z, {}),
            (0, i.jsx)(j.Y, {
                targetElementRef: Y,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(T.A, {
                        channel: C,
                        closePopout: t,
                        messageId: o,
                        pickerIntention: G.EmojiIntention.CHAT,
                        onSelectEmoji: (e) => {
                            let { emoji: n } = e;
                            null != n && (Q(void 0, n), t());
                        },
                    });
                },
                position: "top",
                align: "center",
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(x.u, {
                        title: K.intl.string(F.default["ZEs/pI"]),
                        body: K.intl.string(F.default.K8Khlc),
                        targetElementRef: Y,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: Y,
                            type: "button",
                            className: Z.x6,
                            children: (0, i.jsx)(_.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(x.u, {
                title: K.intl.string(F.default.y2TE38),
                body: K.intl.string(F.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: Z.x6,
                    onClick: function (e) {
                        e.stopPropagation(),
                            null == C ||
                                null == g ||
                                (null != u?.current?.currentTime &&
                                    ((0, H.Yf)({
                                        channel: C,
                                        message: g,
                                        shouldMention: !e.shiftKey,
                                        showMentionToggle: !C.isPrivate(),
                                        mediaMention: $(m, u),
                                    }),
                                    V._.dispatch(R.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: C.id })));
                    },
                    children: (0, i.jsx)(M.W, { size: "sm" }),
                }),
            }),
            J > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(z, {}),
                        (0, i.jsx)(b.D, {
                            className: Z.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != f && (0, O.JA)(f);
                            },
                            "aria-label": W,
                            children: (0, i.jsx)(y.E, {
                                variant: "text-sm/semibold",
                                color: "text-link",
                                lineClamp: 1,
                                children: W,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function z() {
    return (0, i.jsx)("div", { className: Z.yF });
}
var Q = n(534890),
    J = n(661531),
    W = n(97808),
    X = n(778712),
    q = n(7584);
let ee = /^<(a)?:(\w+):(\d+)>$/;
var et = n(465364),
    en = n(933668);
function ei(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: l,
            durationSeconds: a,
            guildId: s,
            channelId: o,
            messageId: d,
            hidden: u = !1,
        } = e,
        { enableMediaComments: c } = B.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        m = (0, v.Lt)(n.flags ?? 0, R.sbO.HAS_TIMELINE_COMMENTS),
        p = (0, r.bG)([w.A], () => w.A.getMessage(o, d), [o, d]),
        { data: h } = P(n, o, s, p?.author.id, c && m && l);
    return !c || null == h || a <= 0
        ? null
        : (0, i.jsx)(I.animated.div, {
              className: en.IO,
              inert: u,
              style: {
                  opacity: l ? (0, I.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (u ? 0 : `${e}`)) : 1,
                  transform: l
                      ? (0, I.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: h.map((e) => (0, i.jsx)(el, { message: e, durationSeconds: a }, e.id)),
          });
}
function el(e) {
    let { message: t, durationSeconds: n } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(ee);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== q.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        r = l.useMemo(() => (null != t && "" !== t.content ? (0, et.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let o = (0, i.jsx)(b.D, {
        className: en.xL,
        style: { left: a },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && E.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != s
                ? (0, i.jsx)(N.A, {
                      emojiId: s.emojiId,
                      emojiName: s.emojiName,
                      shouldAnimate: !1,
                      animated: s.animated,
                      surrogate: s.surrogate,
                      className: en.Zg,
                  })
                : (0, i.jsx)(Q.o, { colorClass: en.Or, color: J.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == r
        ? o
        : (0, i.jsx)(x.u, {
              asset: (0, i.jsx)(W.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: X._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: r,
              children: o,
          });
}
var ea = n(783384),
    es = n(194498),
    er = n(376595),
    eo = n(773503);
let ed = [];
function eu(e) {
    let { timeline: t, userIds: n, videoRef: a, guildId: s, channelId: r } = e,
        o = l.useMemo(() => er.H.fromAttachmentTimeline(t), [t]),
        [d, u] = l.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, es.A)(() => {
            let e = a.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            u(o.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(eo.A, {
            speakingUserIds: d.speakingUserIds,
            activeSoundboards: ed,
            userIds: n,
            guildId: s,
            channelId: r,
        })
    );
}
var ec = n(274372),
    em = n(458977),
    ep = n(352527),
    eh = n(996682),
    eg = n(27989);
function eC(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = J.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...r
        } = e,
        o = (0, eg.J)(t),
        d = o?.width ?? n,
        u = o?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, eh.A)(r),
        width: d,
        height: u,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.8334 13.3379C29.1092 13.3381 29.3332 13.562 29.3334 13.8379V25.3379C29.3334 27.5469 27.5423 29.3376 25.3334 29.3379H6.66738C4.45825 29.3379 2.66739 27.547 2.66738 25.3379V13.8379C2.66755 13.5619 2.89134 13.3379 3.16738 13.3379H28.8334ZM14.5853 15.7471C14.0777 15.2396 13.2551 15.2396 12.7475 15.7471L8.74746 19.7471C8.50377 19.9908 8.3666 20.3213 8.3666 20.666C8.3666 20.9676 8.47106 21.2589 8.66054 21.4902L8.74746 21.5849L12.7475 25.5849C13.2551 26.0923 14.0777 26.0924 14.5853 25.5849C15.0927 25.0773 15.0927 24.2547 14.5853 23.7471L12.8041 21.9658H16.0004C18.4117 21.9662 20.3666 23.9216 20.3666 26.333C20.3668 27.0508 20.9495 27.6328 21.6674 27.6328C22.3847 27.6322 22.967 27.0504 22.9672 26.333C22.9672 22.4857 19.8476 19.3666 16.0004 19.3662H12.8041L14.5853 17.5849C15.0927 17.0773 15.0927 16.2547 14.5853 15.7471Z",
                fill: "string" == typeof a ? a : a.css,
                className: s,
            }),
            (0, i.jsx)("path", {
                d: "M9.27675 4.02342C9.67707 3.95309 9.99001 4.3646 9.81484 4.73143L6.81191 11.0146C6.74229 11.1603 6.60667 11.2639 6.44765 11.292L3.27382 11.8515C3.00188 11.8995 2.74267 11.7172 2.69472 11.4453L2.31777 9.31248C1.93416 7.13691 3.38731 5.06133 5.56289 4.67772L9.27675 4.02342Z",
                fill: "string" == typeof a ? a : a.css,
                className: s,
            }),
            (0, i.jsx)("path", {
                d: "M19.7807 2.17088C20.1811 2.10027 20.494 2.51195 20.3187 2.87889L17.3168 9.16209C17.2472 9.30779 17.1116 9.4114 16.9525 9.43944L10.8852 10.5088C10.4848 10.5792 10.1718 10.1676 10.3471 9.80077L13.35 3.51756C13.4197 3.37203 13.5554 3.26921 13.7143 3.2412L19.7807 2.17088Z",
                fill: "string" == typeof a ? a : a.css,
                className: s,
            }),
            (0, i.jsx)("path", {
                d: "M24.2221 1.39745C26.2944 1.17734 28.2121 2.59832 28.5795 4.68163L28.9564 6.81541C29.0042 7.08724 28.822 7.34658 28.5502 7.39452L21.39 8.65721C20.9897 8.72774 20.6769 8.31607 20.8519 7.9492L23.8539 1.66698C23.9239 1.52058 24.0607 1.4146 24.2221 1.39745Z",
                fill: "string" == typeof a ? a : a.css,
                className: s,
            }),
        ],
    });
}
var ef = n(310882);
function eA(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: o, isPlayerActive: d } = e,
        { enableDistributedClips: u } = em.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        m = (0, r.bG)([ec.Ay], () => (null != c ? ec.Ay.getClipByRemoteId(c) : null)),
        { onShareClick: p } = (0, ep.A)(n),
        h = (0, r.bG)([ec.Ay], () => null != m && null != n && null != c && ec.Ay.wasClipSharedInChannel(c, n)),
        g = l.useCallback(
            (e) => {
                null != m &&
                    (e.stopPropagation(), p({ clips: [m], messageReference: { channel_id: n, message_id: a } }));
            },
            [p, m, n, a],
        );
    return !u || null == m || h
        ? null
        : (0, i.jsxs)("button", {
              className: s()(ef.eZ, { [ef.vu]: o, [ef.jn]: !d }),
              onClick: g,
              children: [
                  (0, i.jsx)(eC, { size: "refresh_sm", color: J.A.colors.WHITE }),
                  (0, i.jsx)(y.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: K.intl.string(F.default.YKst58),
                  }),
              ],
          });
}
var eI = n(834926);
function ev(e) {
    let {
        playerState: t,
        controlBarAnimationSpring: n,
        isControlBarExpanded: l,
        videoRef: a,
        isActive: r,
        isVolumeExpanded: o,
        attachment: d,
        guildId: u,
        isFullScreen: c,
        showParticipants: m,
        showTextContent: p,
        channelId: h,
        messageId: g,
        showSpeakingIndicators: C,
        clipUserIds: I,
        durationSeconds: v,
    } = e;
    return (0, i.jsx)(A.N, {
        theme: f.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: s()(eI.MU, e),
                children: [
                    (0, i.jsx)(ea.A, {
                        createdAt: null != d.clip_created_at ? Date.parse(d.clip_created_at) : void 0,
                        participantIds: m ? I : [],
                        applicationId: d.application?.id,
                        title: d.title,
                        guildId: u,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: c,
                        showTextContent: p,
                    }),
                    null != g &&
                        null != h &&
                        (0, i.jsx)(eA, {
                            isControlBarExpanded: l,
                            isPlayerActive: r,
                            attachment: d,
                            messageId: g,
                            channelId: h,
                        }),
                    C &&
                        null != d.clip_events_timeline &&
                        null != a &&
                        null != h &&
                        (0, i.jsx)(eu, {
                            guildId: u,
                            timeline: d.clip_events_timeline,
                            videoRef: a,
                            userIds: I,
                            channelId: h,
                        }),
                    r &&
                        null != u &&
                        null != h &&
                        null != g &&
                        (0, i.jsx)(Y, {
                            controlBarAnimationSpring: n,
                            attachment: d,
                            channelId: h,
                            messageId: g,
                            guildId: u,
                            videoRef: a,
                            hidden: !l || o,
                        }),
                    null != u &&
                        null != h &&
                        null != g &&
                        (0, i.jsx)(ei, {
                            isActive: r,
                            controlBarAnimationSpring: n,
                            attachment: d,
                            channelId: h,
                            messageId: g,
                            guildId: u,
                            durationSeconds: d.duration_secs ?? v,
                            hidden: r && !l,
                        }),
                ],
            }),
    });
}
var ex = n(696016),
    ej = n(581874);
let e_ = (0, u.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: ej.Lq }),
});
function eM(e) {
    var t;
    let {
            attachment: n,
            posterUrl: a,
            className: u,
            autoPlay: g,
            src: f,
            fillContainer: A = !1,
            minWidth: I = 500,
            maxWidth: v = 1 / 0,
            maxHeight: x = 1 / 0,
            channelId: j,
            messageId: _,
            showTextContent: M = v >= 250,
            showParticipants: b = !0,
            volume: y,
            autoMute: E,
            onVolumeChange: N,
            onMutedChange: S,
            onClick: T,
            onContextMenu: k,
            onPlay: L,
            allowFullScreen: w = !0,
        } = e,
        P = n.width ?? 0,
        D = n.height ?? 0,
        H = (0, r.bG)([h.A], () => h.A.getBasicChannel(j)?.guild_id, [j]),
        O = P > 0 && D > 0 ? P / D : 16 / 9;
    (O > 2 || O < 1) && (O = 16 / 9);
    let B = l.useRef(null);
    (t = n.id),
        l.useEffect(() => {
            function e(e) {
                let { timestampMs: t } = e;
                null != B.current && (B.current.seek(t / 1e3), B.current.play());
            }
            return (
                V._.subscribeKeyed(R.zOV.CLIP_SEEK_VIDEO, t, e),
                () => {
                    V._.unsubscribeKeyed(R.zOV.CLIP_SEEK_VIDEO, t, e);
                }
            );
        }, [t, B]);
    let G = Math.min(P > 0 ? P : I, v),
        U = G / O;
    U > x && (G = (U = x) * O), G < I && (U = (G = I) / O);
    let Z = Math.round(Math.min(G, v)),
        $ = Math.round(Math.min(U, x)),
        Y = P > 0 && D > 0 ? Math.min(Z / P, $ / D, 1) : 1,
        z = (0, c.AE)({ src: a, width: Math.round(P * Y), height: Math.round(D * Y) }),
        [Q, J] = l.useState(!1),
        [W, X] = l.useState(!0),
        [q, ee] = l.useState(0),
        et = l.useRef(0),
        en = l.useCallback(
            (e, t) => {
                t !== o.KB.BUFFERING_RECOVERY && e === o.Q6.PLAYING && L?.(t !== o.KB.USER, 1e3 * et.current, 1e3 * q);
            },
            [q, L],
        ),
        ei = l.useCallback((e, t) => {
            (et.current = e), Number.isFinite(t) && t > 0 && ee((e) => (e === t ? e : t));
        }, []),
        el = l.useMemo(() => n.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [n.clip_events_timeline]),
        ea = l.useMemo(() => {
            if (el)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: K.intl.string(F.default.hFWVZQ),
                        active: W,
                        onClick: () => X((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [el, W]),
        es = (0, p._)({ location: ex.Mu }).externalAnalyticsEnabled,
        er = l.useMemo(
            () =>
                es
                    ? {
                          contentId: f.split("?")[0],
                          videoStreamType: m.u.isHlsUrl(f) ? "hls" : "mp4",
                          contentType: "clips",
                          title: n.title,
                      }
                    : void 0,
            [es, f, n.title],
        ),
        eo = l.useMemo(
            () =>
                n.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [n.clip_participants],
        ),
        { enableScrubPreview: ed } = C.useConfig({ location: "ClipsPlayer" }),
        eu = l.useCallback(
            (e) => {
                let {
                    playerState: t,
                    isControlBarExpanded: l,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: r,
                    controlBarAnimationSpring: o,
                } = e;
                return (0, i.jsx)(ev, {
                    attachment: n,
                    controlBarAnimationSpring: o,
                    guildId: H,
                    isFullScreen: Q,
                    showParticipants: b,
                    showTextContent: M,
                    channelId: j,
                    messageId: _,
                    showSpeakingIndicators: W,
                    clipUserIds: eo,
                    durationSeconds: q,
                    playerState: t,
                    isControlBarExpanded: l,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: r,
                });
            },
            [n, H, Q, b, M, j, _, W, eo, q],
        );
    return (0, i.jsx)("div", {
        className: s()(ej.kL, { [ej.HA]: A }, u),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: k,
        style: A ? void 0 : { width: Z, height: $ },
        children: (0, i.jsx)(e_, {
            src: f,
            downloadUrl: n.url,
            downloadContentType: n.content_type,
            extraButtons: ea,
            poster: z,
            posterPlaceholder: n.placeholder,
            posterPlaceholderVersion: n.placeholder_version,
            autoplay: g,
            initialActive: !1,
            initialVolume: y,
            initialMuted: E,
            onVolumeChange: N,
            onMutedChange: S,
            onProgressUpdate: ei,
            orientation: "landscape",
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: eu,
            parentTransitionState: null,
            onFullscreenChange: J,
            onClick: T,
            onPlayerStateChange: en,
            withVideoHalo: !0,
            objectFit: A ? "cover" : void 0,
            muxContentMetadata: er,
            hideFullScreenBtn: !w,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: B,
            scrubPreviewVttUrl: ed ? n.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: ed ? n.spritesheet_image_url : void 0,
        }),
    });
}
