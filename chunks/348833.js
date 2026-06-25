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
    p = n(945810);
let E = (0, p.mj)({
    kind: "user",
    name: "2026-05-clips-scrub-preview-frontend",
    defaultConfig: { enableScrubPreview: !1 },
    variations: { 1: { enableScrubPreview: !0 } },
});
var m = n(505124),
    g = n(43990);
n(938796);
var A = n(308186),
    I = n(665260),
    T = n(459192),
    S = n(922016),
    y = n(460905),
    C = n(110384),
    N = n(939249),
    v = n(834730),
    R = n(493336),
    O = n(565645),
    b = n(822123),
    D = n(334295),
    L = n(228366),
    w = n(95701),
    M = n(232835),
    P = n(652215);
let x = (0, o.UT)(M.A, {
    getQueryId: (e, t, n, i, r) => (null != n && null != t && null != i && r ? e.id : null),
    get: (e) => (M.A.isReady(e.id) ? M.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let r = e.id;
        await R.A.fetchMessages({ channelId: r, limit: 100 }),
            await L.h.dispatch({
                type: "THREAD_CREATE",
                channel: new w.Lt({
                    id: r,
                    parent_id: t,
                    type: P.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? P.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => M.A.isLoadingMessages(e.id),
});
var k = n(451909),
    U = n(118517),
    G = n(747926),
    F = n(625494);
let V = (0, p.mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var B = n(307731),
    j = n(381941),
    H = n(788077),
    Y = n(375708),
    W = n(683934);
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
        p = (0, o.bG)([M.A], () => M.A.getMessage(s, l), [s, l]),
        E = (0, o.bG)([f.A], () => f.A.getChannel(s), [s]),
        m = (0, o.bG)([f.A], () => f.A.getChannel(_), [_]),
        { enableMediaComments: g } = V.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        L = (0, I.Lt)(n.flags ?? 0, P.sbO.HAS_TIMELINE_COMMENTS),
        { data: w } = x(n, s, u, p?.author.id, g && L),
        $ = r.useRef(null);
    function q(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == E || null == l || null == c?.current?.currentTime) return;
                let t =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.originalName ?? e.name}:${e.id}>`
                            : `<:${e.originalName ?? e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                R.A.sendMessage(E.id, k.Ay.parse(E, t), !1, {
                    location: j.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: E.id, guild_id: E.getGuildId() ?? void 0, message_id: l },
                    mediaMention: K(_, c),
                });
            })(t);
    }
    let Z = w?.length ?? 0;
    if (!g || null == E || null == l) return null;
    let X = Y.intl.formatToPlainString(H.default.OYDyt2, { count: Z });
    return (0, i.jsxs)(A.animated.div, {
        className: a()(W.M0, { [W.pd]: d }),
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
                className: W.gm,
                children: h.map((e) =>
                    (0, i.jsx)(
                        T.u,
                        {
                            title: Y.intl.formatToPlainString(H.default["CZCvn+"], { emoji: e.name }),
                            body: Y.intl.string(H.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: W.x6,
                                onClick: (t) => q(t, e),
                                children: (0, i.jsx)(O.A, {
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
                    return (0, i.jsx)(D.A, {
                        channel: E,
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
                        title: Y.intl.string(H.default["ZEs/pI"]),
                        body: Y.intl.string(H.default.K8Khlc),
                        targetElementRef: $,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: $,
                            type: "button",
                            className: W.x6,
                            children: (0, i.jsx)(y.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(T.u, {
                title: Y.intl.string(H.default.y2TE38),
                body: Y.intl.string(H.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: W.x6,
                    onClick: function (e) {
                        e.stopPropagation(),
                            null == E ||
                                null == p ||
                                (null != c?.current?.currentTime &&
                                    ((0, U.Yf)({
                                        channel: E,
                                        message: p,
                                        shouldMention: !e.shiftKey,
                                        showMentionToggle: !E.isPrivate(),
                                        mediaMention: K(_, c),
                                    }),
                                    F._.dispatch(P.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: E.id })));
                    },
                    children: (0, i.jsx)(C.W, { size: "sm" }),
                }),
            }),
            Z > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(z, {}),
                        (0, i.jsx)(N.D, {
                            className: W.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != m && (0, G.JA)(m);
                            },
                            "aria-label": X,
                            children: (0, i.jsx)(v.E, {
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
    return (0, i.jsx)("div", { className: W.yF });
}
var q = n(534890),
    Z = n(661531),
    X = n(97808),
    Q = n(778712),
    J = n(7584);
let ee = /^<(a)?:(\w+):(\d+)>$/;
var et = n(465364),
    en = n(227748);
function ei(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            durationSeconds: r,
            guildId: s,
            channelId: a,
            messageId: l,
            hidden: u = !1,
        } = e,
        { enableMediaComments: c } = V.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        d = (0, I.Lt)(n.flags ?? 0, P.sbO.HAS_TIMELINE_COMMENTS),
        _ = (0, o.bG)([M.A], () => M.A.getMessage(a, l), [a, l]),
        { data: h } = x(n, a, s, _?.author.id, c && d);
    return !c || null == h || r <= 0
        ? null
        : (0, i.jsx)(A.animated.div, {
              className: en.IO,
              inert: u,
              style: {
                  opacity: (0, A.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (u ? 0 : `${e}`)),
                  transform: (0, A.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`),
              },
              children: h.map((e) => (0, i.jsx)(er, { message: e, durationSeconds: r }, e.id)),
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
    let l = (0, i.jsx)(N.D, {
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
                ? (0, i.jsx)(O.A, {
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
    ep = n(27989);
function eE(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = Z.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        l = (0, ep.J)(t),
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
var em = n(974114);
function eg(e) {
    let { attachment: t, channelId: n, messageId: s, isControlBarExpanded: l, isPlayerActive: u } = e,
        { enableDistributedClips: c } = e_.A.useConfig({ location: "DistributedClipShareCTA" }),
        d = t.clip_remote_id,
        _ = (0, o.bG)([ed.Ay], () => (null != d ? ed.Ay.getClipByRemoteId(d) : null)),
        { onShareClick: h } = (0, eh.A)(n),
        f = (0, o.bG)([ed.Ay], () => null != _ && null != n && null != d && ed.Ay.wasClipSharedInChannel(d, n)),
        p = r.useCallback(
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
              onClick: p,
              children: [
                  (0, i.jsx)(eE, { size: "refresh_sm", color: Z.A.colors.WHITE }),
                  (0, i.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: Y.intl.string(H.default.YKst58),
                  }),
              ],
          });
}
var eA = n(332206);
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
        messageId: p,
        showSpeakingIndicators: E,
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
                    null != p &&
                        null != f &&
                        (0, i.jsx)(eg, {
                            isControlBarExpanded: r,
                            isPlayerActive: o,
                            attachment: u,
                            messageId: p,
                            channelId: f,
                        }),
                    E &&
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
                        null != p &&
                        (0, i.jsx)($, {
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: f,
                            messageId: p,
                            guildId: c,
                            videoRef: s,
                            hidden: !r || l,
                        }),
                    o &&
                        null != c &&
                        null != f &&
                        null != p &&
                        (0, i.jsx)(ei, {
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: f,
                            messageId: p,
                            guildId: c,
                            durationSeconds: u.duration_secs ?? I,
                            hidden: !r,
                        }),
                ],
            }),
    });
}
var eT = n(696016),
    eS = n(658610);
let ey = (0, c.Fe)({
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
            autoPlay: p,
            src: m,
            fillContainer: g = !1,
            minWidth: A = 500,
            maxWidth: I = 1 / 0,
            maxHeight: T = 1 / 0,
            channelId: S,
            messageId: y,
            showTextContent: C = I >= 250,
            showParticipants: N = !0,
            volume: v,
            autoMute: R,
            onVolumeChange: O,
            onMutedChange: b,
            onClick: D,
            onContextMenu: L,
            onPlay: w,
            allowFullScreen: M = !0,
        } = e,
        x = n.width ?? 0,
        k = n.height ?? 0,
        U = (0, o.bG)([f.A], () => f.A.getBasicChannel(S)?.guild_id, [S]),
        G = x > 0 && k > 0 ? x / k : 16 / 9,
        V = r.useRef(null);
    (t = n.id),
        r.useEffect(() => {
            function e(e) {
                let { timestampMs: t } = e;
                null != V.current && (V.current.seek(t / 1e3), V.current.play());
            }
            return (
                F._.subscribeKeyed(P.zOV.CLIP_SEEK_VIDEO, t, e),
                () => {
                    F._.unsubscribeKeyed(P.zOV.CLIP_SEEK_VIDEO, t, e);
                }
            );
        }, [t, V]);
    let B = Math.min(x > 0 ? x : A, I),
        j = B / G;
    j > T && (B = (j = T) * G), B < A && (j = (B = A) / G);
    let W = Math.round(Math.min(B, I)),
        K = Math.round(Math.min(j, T)),
        $ = x > 0 && k > 0 ? Math.min(W / x, K / k, 1) : 1,
        z = (0, d.AE)({ src: s, width: Math.round(x * $), height: Math.round(k * $) }),
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
                        label: Y.intl.string(H.default.hFWVZQ),
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
                          contentId: m,
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
        { enableScrubPreview: eu } = E.useConfig({ location: "ClipsPlayer" }),
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
                    guildId: U,
                    isFullScreen: q,
                    showParticipants: N,
                    showTextContent: C,
                    channelId: S,
                    messageId: y,
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
            [n, U, q, N, C, S, y, X, el, J],
        );
    return (0, i.jsx)("div", {
        className: a()(eS.kL, { [eS.HA]: g }, c),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: L,
        style: g ? void 0 : { width: W, height: K },
        children: (0, i.jsx)(ey, {
            src: m,
            downloadUrl: n.url,
            downloadContentType: n.content_type,
            extraButtons: es,
            poster: z,
            posterPlaceholder: n.placeholder,
            posterPlaceholderVersion: n.placeholder_version,
            autoplay: p,
            initialActive: !1,
            initialVolume: v,
            initialMuted: R,
            onVolumeChange: O,
            onMutedChange: b,
            onProgressUpdate: ei,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ec,
            parentTransitionState: null,
            onFullscreenChange: Z,
            onClick: D,
            onPlayerStateChange: en,
            withVideoHalo: !0,
            objectFit: g ? "cover" : void 0,
            muxContentMetadata: eo,
            hideFullScreenBtn: !M,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: V,
            scrubPreviewVttUrl: eu ? n.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: eu ? n.spritesheet_image_url : void 0,
        }),
    });
}
