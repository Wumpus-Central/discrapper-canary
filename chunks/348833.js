"use strict";
n.d(t, { A: () => eC });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(876230),
    u = n(26137),
    c = n(268218),
    d = n(776231),
    _ = n(614269),
    h = n(829097),
    f = n(734057),
    E = n(945810);
let p = (0, E.mj)({
    kind: "user",
    name: "2026-05-clips-scrub-preview-frontend",
    defaultConfig: { enableScrubPreview: !1 },
    variations: { 1: { enableScrubPreview: !0 } },
});
var m = n(505124),
    g = n(43990);
n(938796);
var A = n(580929),
    I = n(665260),
    T = n(459192),
    S = n(922016),
    N = n(460905),
    C = n(110384),
    y = n(939249),
    O = n(834730),
    R = n(493336),
    v = n(565645),
    b = n(822123),
    L = n(334295),
    D = n(228366),
    w = n(95701),
    P = n(232835),
    M = n(652215);
let x = (0, o.UT)(P.A, {
    getQueryId: (e, t, n, i, r) => (null != n && null != t && null != i && r ? e.id : null),
    get: (e) => (P.A.isReady(e.id) ? P.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let r = e.id;
        await R.A.fetchMessages({ channelId: r, limit: 100 }),
            await D.h.dispatch({
                type: "THREAD_CREATE",
                channel: new w.Lt({
                    id: r,
                    parent_id: t,
                    type: M.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? M.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => P.A.isLoadingMessages(e.id),
});
var U = n(451909),
    k = n(118517),
    G = n(747926),
    V = n(625494);
let F = (0, E.mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var B = n(307731),
    H = n(381941),
    j = n(16590),
    W = n(375708),
    Y = n(909022);
function K(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function $(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: s,
            messageId: l,
            guildId: u,
            videoRef: c,
            hidden: d = !1,
        } = e,
        _ = n.id,
        h = (0, b.QZ)(u).slice(0, 3),
        E = (0, o.bG)([P.A], () => P.A.getMessage(s, l), [s, l]),
        p = (0, o.bG)([f.A], () => f.A.getChannel(s), [s]),
        m = (0, o.bG)([f.A], () => f.A.getChannel(_), [_]),
        { enableMediaComments: g } = F.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        D = (0, I.Lt)(n.flags ?? 0, M.sbO.HAS_TIMELINE_COMMENTS),
        { data: w } = x(n, s, u, E?.author.id, g && D),
        $ = r.useRef(null);
    function q(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == p || null == l || null == c?.current?.currentTime) return;
                let t =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.originalName ?? e.name}:${e.id}>`
                            : `<:${e.originalName ?? e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                R.A.sendMessage(p.id, U.Ay.parse(p, t), !1, {
                    location: H.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: p.id, guild_id: p.getGuildId() ?? void 0, message_id: l },
                    mediaMention: K(_, c),
                });
            })(t);
    }
    let Z = w?.length ?? 0;
    if (!g || null == p || null == l) return null;
    let X = W.intl.formatToPlainString(j.default.OYDyt2, { count: Z });
    return (0, i.jsxs)(A.animated.div, {
        className: a()(Y.M0, { [Y.pd]: d }),
        inert: d,
        style: {
            opacity: (0, A.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (d ? 0 : `${e}`)),
            transform: (0, A.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: Y.gm,
                children: h.map((e) =>
                    (0, i.jsx)(
                        T.u,
                        {
                            title: W.intl.formatToPlainString(j.default["CZCvn+"], { emoji: e.name }),
                            body: W.intl.string(j.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: Y.x6,
                                onClick: (t) => q(t, e),
                                children: (0, i.jsx)(v.A, {
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
            (0, i.jsx)(S.Y, {
                targetElementRef: $,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(L.A, {
                        channel: p,
                        closePopout: t,
                        messageId: l,
                        pickerIntention: B.EmojiIntention.CHAT,
                        onSelectEmoji: (e) => {
                            let { emoji: n } = e;
                            null != n && (q(void 0, n), t());
                        },
                    });
                },
                position: "top",
                align: "center",
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(T.u, {
                        title: W.intl.string(j.default["ZEs/pI"]),
                        body: W.intl.string(j.default.K8Khlc),
                        targetElementRef: $,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: $,
                            type: "button",
                            className: Y.x6,
                            children: (0, i.jsx)(N.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(T.u, {
                title: W.intl.string(j.default.y2TE38),
                body: W.intl.string(j.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: Y.x6,
                    onClick: function (e) {
                        e.stopPropagation(),
                            null == p ||
                                null == E ||
                                (null != c?.current?.currentTime &&
                                    ((0, k.Yf)({
                                        channel: p,
                                        message: E,
                                        shouldMention: !e.shiftKey,
                                        showMentionToggle: !p.isPrivate(),
                                        mediaMention: K(_, c),
                                    }),
                                    V._.dispatch(M.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: p.id })));
                    },
                    children: (0, i.jsx)(C.W, { size: "sm" }),
                }),
            }),
            Z > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(z, {}),
                        (0, i.jsx)(y.D, {
                            className: Y.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != m && (0, G.JA)(m);
                            },
                            "aria-label": X,
                            children: (0, i.jsx)(O.E, {
                                variant: "text-sm/semibold",
                                color: "text-link",
                                lineClamp: 1,
                                children: X,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function z() {
    return (0, i.jsx)("div", { className: Y.yF });
}
var q = n(534890),
    Z = n(661531),
    X = n(97808),
    Q = n(778712),
    J = n(7584);
let ee = /^<(a)?:(\w+):(\d+)>$/;
var et = n(465364),
    en = n(933668);
function ei(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: r,
            durationSeconds: s,
            guildId: a,
            channelId: l,
            messageId: u,
            hidden: c = !1,
        } = e,
        { enableMediaComments: d } = F.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        _ = (0, I.Lt)(n.flags ?? 0, M.sbO.HAS_TIMELINE_COMMENTS),
        h = (0, o.bG)([P.A], () => P.A.getMessage(l, u), [l, u]),
        { data: f } = x(n, l, a, h?.author.id, d && _ && r);
    return !d || null == f || s <= 0
        ? null
        : (0, i.jsx)(A.animated.div, {
              className: en.IO,
              inert: c,
              style: {
                  opacity: r ? (0, A.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (c ? 0 : `${e}`)) : 1,
                  transform: r
                      ? (0, A.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: f.map((e) => (0, i.jsx)(er, { message: e, durationSeconds: s }, e.id)),
          });
}
function er(e) {
    let { message: t, durationSeconds: n } = e,
        s = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        a = r.useMemo(
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
        o = r.useMemo(() => (null != t && "" !== t.content ? (0, et.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let l = (0, i.jsx)(y.D, {
        className: en.xL,
        style: { left: s },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && R.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != a
                ? (0, i.jsx)(v.A, {
                      emojiId: a.emojiId,
                      emojiName: a.emojiName,
                      shouldAnimate: !1,
                      animated: a.animated,
                      surrogate: a.surrogate,
                      className: en.Zg,
                  })
                : (0, i.jsx)(q.o, { colorClass: en.Or, color: Z.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == o
        ? l
        : (0, i.jsx)(T.u, {
              asset: (0, i.jsx)(X.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: Q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: o,
              children: l,
          });
}
var es = n(783384),
    ea = n(194498),
    eo = n(376595),
    el = n(773503);
let eu = [];
function ec(e) {
    let { timeline: t, userIds: n, videoRef: s, guildId: a, channelId: o } = e,
        l = r.useMemo(() => eo.H.fromAttachmentTimeline(t), [t]),
        [u, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, ea.A)(() => {
            let e = s.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(el.A, {
            speakingUserIds: u.speakingUserIds,
            activeSoundboards: eu,
            userIds: n,
            guildId: a,
            channelId: o,
        })
    );
}
var ed = n(274372),
    e_ = n(458977),
    eh = n(352527),
    ef = n(996682),
    eE = n(27989);
function ep(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = Z.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        l = (0, eE.J)(t),
        u = l?.width ?? n,
        c = l?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, ef.A)(o),
        width: u,
        height: c,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.8334 13.3379C29.1092 13.3381 29.3332 13.562 29.3334 13.8379V25.3379C29.3334 27.5469 27.5423 29.3376 25.3334 29.3379H6.66738C4.45825 29.3379 2.66739 27.547 2.66738 25.3379V13.8379C2.66755 13.5619 2.89134 13.3379 3.16738 13.3379H28.8334ZM14.5853 15.7471C14.0777 15.2396 13.2551 15.2396 12.7475 15.7471L8.74746 19.7471C8.50377 19.9908 8.3666 20.3213 8.3666 20.666C8.3666 20.9676 8.47106 21.2589 8.66054 21.4902L8.74746 21.5849L12.7475 25.5849C13.2551 26.0923 14.0777 26.0924 14.5853 25.5849C15.0927 25.0773 15.0927 24.2547 14.5853 23.7471L12.8041 21.9658H16.0004C18.4117 21.9662 20.3666 23.9216 20.3666 26.333C20.3668 27.0508 20.9495 27.6328 21.6674 27.6328C22.3847 27.6322 22.967 27.0504 22.9672 26.333C22.9672 22.4857 19.8476 19.3666 16.0004 19.3662H12.8041L14.5853 17.5849C15.0927 17.0773 15.0927 16.2547 14.5853 15.7471Z",
                fill: "string" == typeof s ? s : s.css,
                className: a,
            }),
            (0, i.jsx)("path", {
                d: "M9.27675 4.02342C9.67707 3.95309 9.99001 4.3646 9.81484 4.73143L6.81191 11.0146C6.74229 11.1603 6.60667 11.2639 6.44765 11.292L3.27382 11.8515C3.00188 11.8995 2.74267 11.7172 2.69472 11.4453L2.31777 9.31248C1.93416 7.13691 3.38731 5.06133 5.56289 4.67772L9.27675 4.02342Z",
                fill: "string" == typeof s ? s : s.css,
                className: a,
            }),
            (0, i.jsx)("path", {
                d: "M19.7807 2.17088C20.1811 2.10027 20.494 2.51195 20.3187 2.87889L17.3168 9.16209C17.2472 9.30779 17.1116 9.4114 16.9525 9.43944L10.8852 10.5088C10.4848 10.5792 10.1718 10.1676 10.3471 9.80077L13.35 3.51756C13.4197 3.37203 13.5554 3.26921 13.7143 3.2412L19.7807 2.17088Z",
                fill: "string" == typeof s ? s : s.css,
                className: a,
            }),
            (0, i.jsx)("path", {
                d: "M24.2221 1.39745C26.2944 1.17734 28.2121 2.59832 28.5795 4.68163L28.9564 6.81541C29.0042 7.08724 28.822 7.34658 28.5502 7.39452L21.39 8.65721C20.9897 8.72774 20.6769 8.31607 20.8519 7.9492L23.8539 1.66698C23.9239 1.52058 24.0607 1.4146 24.2221 1.39745Z",
                fill: "string" == typeof s ? s : s.css,
                className: a,
            }),
        ],
    });
}
var em = n(310882);
function eg(e) {
    let { attachment: t, channelId: n, messageId: s, isControlBarExpanded: l, isPlayerActive: u } = e,
        { enableDistributedClips: c } = e_.A.useConfig({ location: "DistributedClipShareCTA" }),
        d = t.clip_remote_id,
        _ = (0, o.bG)([ed.Ay], () => (null != d ? ed.Ay.getClipByRemoteId(d) : null)),
        { onShareClick: h } = (0, eh.A)(n),
        f = (0, o.bG)([ed.Ay], () => null != _ && null != n && null != d && ed.Ay.wasClipSharedInChannel(d, n)),
        E = r.useCallback(
            (e) => {
                null != _ &&
                    (e.stopPropagation(), h({ clips: [_], messageReference: { channel_id: n, message_id: s } }));
            },
            [h, _, n, s],
        );
    return !c || null == _ || f
        ? null
        : (0, i.jsxs)("button", {
              className: a()(em.eZ, { [em.vu]: l, [em.jn]: !u }),
              onClick: E,
              children: [
                  (0, i.jsx)(ep, { size: "refresh_sm", color: Z.A.colors.WHITE }),
                  (0, i.jsx)(O.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: W.intl.string(j.default.YKst58),
                  }),
              ],
          });
}
var eA = n(834926);
function eI(e) {
    let {
        playerState: t,
        controlBarAnimationSpring: n,
        isControlBarExpanded: r,
        videoRef: s,
        isActive: o,
        isVolumeExpanded: l,
        attachment: u,
        guildId: c,
        isFullScreen: d,
        showParticipants: _,
        showTextContent: h,
        channelId: f,
        messageId: E,
        showSpeakingIndicators: p,
        clipUserIds: A,
        durationSeconds: I,
    } = e;
    return (0, i.jsx)(g.N, {
        theme: m.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(eA.MU, e),
                children: [
                    (0, i.jsx)(es.A, {
                        createdAt: null != u.clip_created_at ? Date.parse(u.clip_created_at) : void 0,
                        participantIds: _ ? A : [],
                        applicationId: u.application?.id,
                        title: u.title,
                        guildId: c,
                        playerState: t,
                        isControlBarExpanded: r,
                        isFullScreen: d,
                        showTextContent: h,
                    }),
                    null != E &&
                        null != f &&
                        (0, i.jsx)(eg, {
                            isControlBarExpanded: r,
                            isPlayerActive: o,
                            attachment: u,
                            messageId: E,
                            channelId: f,
                        }),
                    p &&
                        null != u.clip_events_timeline &&
                        null != s &&
                        null != f &&
                        (0, i.jsx)(ec, {
                            guildId: c,
                            timeline: u.clip_events_timeline,
                            videoRef: s,
                            userIds: A,
                            channelId: f,
                        }),
                    o &&
                        null != c &&
                        null != f &&
                        null != E &&
                        (0, i.jsx)($, {
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: f,
                            messageId: E,
                            guildId: c,
                            videoRef: s,
                            hidden: !r || l,
                        }),
                    null != c &&
                        null != f &&
                        null != E &&
                        (0, i.jsx)(ei, {
                            isActive: o,
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: f,
                            messageId: E,
                            guildId: c,
                            durationSeconds: u.duration_secs ?? I,
                            hidden: o && !r,
                        }),
                ],
            }),
    });
}
var eT = n(696016),
    eS = n(581874);
let eN = (0, c.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: eS.Lq }),
});
function eC(e) {
    var t;
    let {
            attachment: n,
            posterUrl: s,
            className: c,
            autoPlay: E,
            src: m,
            fillContainer: g = !1,
            minWidth: A = 500,
            maxWidth: I = 1 / 0,
            maxHeight: T = 1 / 0,
            channelId: S,
            messageId: N,
            showTextContent: C = I >= 250,
            showParticipants: y = !0,
            volume: O,
            autoMute: R,
            onVolumeChange: v,
            onMutedChange: b,
            onClick: L,
            onContextMenu: D,
            onPlay: w,
            allowFullScreen: P = !0,
        } = e,
        x = n.width ?? 0,
        U = n.height ?? 0,
        k = (0, o.bG)([f.A], () => f.A.getBasicChannel(S)?.guild_id, [S]),
        G = x > 0 && U > 0 ? x / U : 16 / 9;
    (G > 2 || G < 1) && (G = 16 / 9);
    let F = r.useRef(null);
    (t = n.id),
        r.useEffect(() => {
            function e(e) {
                let { timestampMs: t } = e;
                null != F.current && (F.current.seek(t / 1e3), F.current.play());
            }
            return (
                V._.subscribeKeyed(M.zOV.CLIP_SEEK_VIDEO, t, e),
                () => {
                    V._.unsubscribeKeyed(M.zOV.CLIP_SEEK_VIDEO, t, e);
                }
            );
        }, [t, F]);
    let B = Math.min(x > 0 ? x : A, I),
        H = B / G;
    H > T && (B = (H = T) * G), B < A && (H = (B = A) / G);
    let Y = Math.round(Math.min(B, I)),
        K = Math.round(Math.min(H, T)),
        $ = x > 0 && U > 0 ? Math.min(Y / x, K / U, 1) : 1,
        z = (0, d.AE)({ src: s, width: Math.round(x * $), height: Math.round(U * $) }),
        [q, Z] = r.useState(!1),
        [X, Q] = r.useState(!0),
        [J, ee] = r.useState(0),
        et = r.useRef(0),
        en = r.useCallback(
            (e, t) => {
                t !== l.KB.BUFFERING_RECOVERY && e === l.Q6.PLAYING && w?.(t !== l.KB.USER, 1e3 * et.current, 1e3 * J);
            },
            [J, w],
        ),
        ei = r.useCallback((e, t) => {
            (et.current = e), Number.isFinite(t) && t > 0 && ee((e) => (e === t ? e : t));
        }, []),
        er = r.useMemo(() => n.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [n.clip_events_timeline]),
        es = r.useMemo(() => {
            if (er)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: u.r,
                        label: W.intl.string(j.default.hFWVZQ),
                        active: X,
                        onClick: () => Q((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [er, X]),
        ea = (0, h._)({ location: eT.Mu }).externalAnalyticsEnabled,
        eo = r.useMemo(
            () =>
                ea
                    ? {
                          contentId: m.split("?")[0],
                          videoStreamType: _.u.isHlsUrl(m) ? "hls" : "mp4",
                          contentType: "clips",
                          title: n.title,
                      }
                    : void 0,
            [ea, m, n.title],
        ),
        el = r.useMemo(
            () =>
                n.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [n.clip_participants],
        ),
        { enableScrubPreview: eu } = p.useConfig({ location: "ClipsPlayer" }),
        ec = r.useCallback(
            (e) => {
                let {
                    playerState: t,
                    isControlBarExpanded: r,
                    videoRef: s,
                    isActive: a,
                    isVolumeExpanded: o,
                    controlBarAnimationSpring: l,
                } = e;
                return (0, i.jsx)(eI, {
                    attachment: n,
                    controlBarAnimationSpring: l,
                    guildId: k,
                    isFullScreen: q,
                    showParticipants: y,
                    showTextContent: C,
                    channelId: S,
                    messageId: N,
                    showSpeakingIndicators: X,
                    clipUserIds: el,
                    durationSeconds: J,
                    playerState: t,
                    isControlBarExpanded: r,
                    videoRef: s,
                    isActive: a,
                    isVolumeExpanded: o,
                });
            },
            [n, k, q, y, C, S, N, X, el, J],
        );
    return (0, i.jsx)("div", {
        className: a()(eS.kL, { [eS.HA]: g }, c),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: D,
        style: g ? void 0 : { width: Y, height: K },
        children: (0, i.jsx)(eN, {
            src: m,
            downloadUrl: n.url,
            downloadContentType: n.content_type,
            extraButtons: es,
            poster: z,
            posterPlaceholder: n.placeholder,
            posterPlaceholderVersion: n.placeholder_version,
            autoplay: E,
            initialActive: !1,
            initialVolume: O,
            initialMuted: R,
            onVolumeChange: v,
            onMutedChange: b,
            onProgressUpdate: ei,
            orientation: "landscape",
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ec,
            parentTransitionState: null,
            onFullscreenChange: Z,
            onClick: L,
            onPlayerStateChange: en,
            withVideoHalo: !0,
            objectFit: g ? "cover" : void 0,
            muxContentMetadata: eo,
            hideFullScreenBtn: !P,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: F,
            scrubPreviewVttUrl: eu ? n.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: eu ? n.spritesheet_image_url : void 0,
        }),
    });
}
