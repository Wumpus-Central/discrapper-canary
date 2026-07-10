"use strict";
n.d(t, { A: () => eC });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(876230),
    d = n(26137),
    c = n(268218),
    u = n(776231),
    _ = n(614269),
    E = n(829097),
    A = n(734057),
    h = n(945810);
let I = (0, h.mj)({
    kind: "user",
    name: "2026-05-clips-scrub-preview-frontend",
    defaultConfig: { enableScrubPreview: !1 },
    variations: { 1: { enableScrubPreview: !0 } },
});
var f = n(505124),
    p = n(43990);
n(938796);
var T = n(580929),
    m = n(665260),
    g = n(459192),
    S = n(922016),
    N = n(460905),
    C = n(110384),
    R = n(939249),
    O = n(834730),
    L = n(493336),
    D = n(565645),
    y = n(822123),
    v = n(334295),
    b = n(228366),
    M = n(95701),
    P = n(232835),
    U = n(652215);
let w = (0, l.UT)(P.A, {
    getQueryId: (e, t, n, i, r) => (null != n && null != t && null != i && r ? e.id : null),
    get: (e) => (P.A.isReady(e.id) ? P.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let r = e.id;
        await L.A.fetchMessages({ channelId: r, limit: 100 }),
            await b.h.dispatch({
                type: "THREAD_CREATE",
                channel: new M.Lt({
                    id: r,
                    parent_id: t,
                    type: U.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? U.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => P.A.isLoadingMessages(e.id),
});
var G = n(451909),
    x = n(118517),
    k = n(747926),
    F = n(625494);
let V = (0, h.mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var B = n(307731),
    H = n(381941),
    j = n(788077),
    W = n(375708),
    Y = n(683934);
function K(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function $(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: o,
            guildId: d,
            videoRef: c,
            hidden: u = !1,
        } = e,
        _ = n.id,
        E = (0, y.QZ)(d).slice(0, 3),
        h = (0, l.bG)([P.A], () => P.A.getMessage(a, o), [a, o]),
        I = (0, l.bG)([A.A], () => A.A.getChannel(a), [a]),
        f = (0, l.bG)([A.A], () => A.A.getChannel(_), [_]),
        { enableMediaComments: p } = V.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        b = (0, m.Lt)(n.flags ?? 0, U.sbO.HAS_TIMELINE_COMMENTS),
        { data: M } = w(n, a, d, h?.author.id, p && b),
        $ = r.useRef(null);
    function q(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == I || null == o || null == c?.current?.currentTime) return;
                let t =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.originalName ?? e.name}:${e.id}>`
                            : `<:${e.originalName ?? e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                L.A.sendMessage(I.id, G.Ay.parse(I, t), !1, {
                    location: H.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: I.id, guild_id: I.getGuildId() ?? void 0, message_id: o },
                    mediaMention: K(_, c),
                });
            })(t);
    }
    let Z = M?.length ?? 0;
    if (!p || null == I || null == o) return null;
    let X = W.intl.formatToPlainString(j.default.OYDyt2, { count: Z });
    return (0, i.jsxs)(T.animated.div, {
        className: s()(Y.M0, { [Y.pd]: u }),
        inert: u,
        style: {
            opacity: (0, T.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (u ? 0 : `${e}`)),
            transform: (0, T.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: Y.gm,
                children: E.map((e) =>
                    (0, i.jsx)(
                        g.u,
                        {
                            title: W.intl.formatToPlainString(j.default["CZCvn+"], { emoji: e.name }),
                            body: W.intl.string(j.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: Y.x6,
                                onClick: (t) => q(t, e),
                                children: (0, i.jsx)(D.A, {
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
                    return (0, i.jsx)(v.A, {
                        channel: I,
                        closePopout: t,
                        messageId: o,
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
                    (0, i.jsx)(g.u, {
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
            (0, i.jsx)(g.u, {
                title: W.intl.string(j.default.y2TE38),
                body: W.intl.string(j.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: Y.x6,
                    onClick: function (e) {
                        e.stopPropagation(),
                            null == I ||
                                null == h ||
                                (null != c?.current?.currentTime &&
                                    ((0, x.Yf)({
                                        channel: I,
                                        message: h,
                                        shouldMention: !e.shiftKey,
                                        showMentionToggle: !I.isPrivate(),
                                        mediaMention: K(_, c),
                                    }),
                                    F._.dispatch(U.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: I.id })));
                    },
                    children: (0, i.jsx)(C.W, { size: "sm" }),
                }),
            }),
            Z > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(z, {}),
                        (0, i.jsx)(R.D, {
                            className: Y.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != f && (0, k.JA)(f);
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
    en = n(227748);
function ei(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: r,
            durationSeconds: a,
            guildId: s,
            channelId: o,
            messageId: d,
            hidden: c = !1,
        } = e,
        { enableMediaComments: u } = V.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        _ = (0, m.Lt)(n.flags ?? 0, U.sbO.HAS_TIMELINE_COMMENTS),
        E = (0, l.bG)([P.A], () => P.A.getMessage(o, d), [o, d]),
        { data: A } = w(n, o, s, E?.author.id, u && _ && r);
    return !u || null == A || a <= 0
        ? null
        : (0, i.jsx)(T.animated.div, {
              className: en.IO,
              inert: c,
              style: {
                  opacity: r ? (0, T.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (c ? 0 : `${e}`)) : 1,
                  transform: r
                      ? (0, T.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: A.map((e) => (0, i.jsx)(er, { message: e, durationSeconds: a }, e.id)),
          });
}
function er(e) {
    let { message: t, durationSeconds: n } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = r.useMemo(
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
        l = r.useMemo(() => (null != t && "" !== t.content ? (0, et.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let o = (0, i.jsx)(R.D, {
        className: en.xL,
        style: { left: a },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && L.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != s
                ? (0, i.jsx)(D.A, {
                      emojiId: s.emojiId,
                      emojiName: s.emojiName,
                      shouldAnimate: !1,
                      animated: s.animated,
                      surrogate: s.surrogate,
                      className: en.Zg,
                  })
                : (0, i.jsx)(q.o, { colorClass: en.Or, color: Z.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == l
        ? o
        : (0, i.jsx)(g.u, {
              asset: (0, i.jsx)(X.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: Q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: l,
              children: o,
          });
}
var ea = n(783384),
    es = n(194498),
    el = n(376595),
    eo = n(773503);
let ed = [];
function ec(e) {
    let { timeline: t, userIds: n, videoRef: a, guildId: s, channelId: l } = e,
        o = r.useMemo(() => el.H.fromAttachmentTimeline(t), [t]),
        [d, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, es.A)(() => {
            let e = a.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(o.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(eo.A, {
            speakingUserIds: d.speakingUserIds,
            activeSoundboards: ed,
            userIds: n,
            guildId: s,
            channelId: l,
        })
    );
}
var eu = n(274372),
    e_ = n(458977),
    eE = n(352527),
    eA = n(996682),
    eh = n(27989);
function eI(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: a = Z.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...l
        } = e,
        o = (0, eh.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, eA.A)(l),
        width: d,
        height: c,
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
var ef = n(974114);
function ep(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: o, isPlayerActive: d } = e,
        { enableDistributedClips: c } = e_.A.useConfig({ location: "DistributedClipShareCTA" }),
        u = t.clip_remote_id,
        _ = (0, l.bG)([eu.Ay], () => (null != u ? eu.Ay.getClipByRemoteId(u) : null)),
        { onShareClick: E } = (0, eE.A)(n),
        A = (0, l.bG)([eu.Ay], () => null != _ && null != n && null != u && eu.Ay.wasClipSharedInChannel(u, n)),
        h = r.useCallback(
            (e) => {
                null != _ &&
                    (e.stopPropagation(), E({ clips: [_], messageReference: { channel_id: n, message_id: a } }));
            },
            [E, _, n, a],
        );
    return !c || null == _ || A
        ? null
        : (0, i.jsxs)("button", {
              className: s()(ef.eZ, { [ef.vu]: o, [ef.jn]: !d }),
              onClick: h,
              children: [
                  (0, i.jsx)(eI, { size: "refresh_sm", color: Z.A.colors.WHITE }),
                  (0, i.jsx)(O.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: W.intl.string(j.default.YKst58),
                  }),
              ],
          });
}
var eT = n(332206);
function em(e) {
    let {
        playerState: t,
        controlBarAnimationSpring: n,
        isControlBarExpanded: r,
        videoRef: a,
        isActive: l,
        isVolumeExpanded: o,
        attachment: d,
        guildId: c,
        isFullScreen: u,
        showParticipants: _,
        showTextContent: E,
        channelId: A,
        messageId: h,
        showSpeakingIndicators: I,
        clipUserIds: T,
        durationSeconds: m,
    } = e;
    return (0, i.jsx)(p.N, {
        theme: f.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: s()(eT.MU, e),
                children: [
                    (0, i.jsx)(ea.A, {
                        createdAt: null != d.clip_created_at ? Date.parse(d.clip_created_at) : void 0,
                        participantIds: _ ? T : [],
                        applicationId: d.application?.id,
                        title: d.title,
                        guildId: c,
                        playerState: t,
                        isControlBarExpanded: r,
                        isFullScreen: u,
                        showTextContent: E,
                    }),
                    null != h &&
                        null != A &&
                        (0, i.jsx)(ep, {
                            isControlBarExpanded: r,
                            isPlayerActive: l,
                            attachment: d,
                            messageId: h,
                            channelId: A,
                        }),
                    I &&
                        null != d.clip_events_timeline &&
                        null != a &&
                        null != A &&
                        (0, i.jsx)(ec, {
                            guildId: c,
                            timeline: d.clip_events_timeline,
                            videoRef: a,
                            userIds: T,
                            channelId: A,
                        }),
                    l &&
                        null != c &&
                        null != A &&
                        null != h &&
                        (0, i.jsx)($, {
                            controlBarAnimationSpring: n,
                            attachment: d,
                            channelId: A,
                            messageId: h,
                            guildId: c,
                            videoRef: a,
                            hidden: !r || o,
                        }),
                    null != c &&
                        null != A &&
                        null != h &&
                        (0, i.jsx)(ei, {
                            isActive: l,
                            controlBarAnimationSpring: n,
                            attachment: d,
                            channelId: A,
                            messageId: h,
                            guildId: c,
                            durationSeconds: d.duration_secs ?? m,
                            hidden: l && !r,
                        }),
                ],
            }),
    });
}
var eg = n(696016),
    eS = n(658610);
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
            posterUrl: a,
            className: c,
            autoPlay: h,
            src: f,
            fillContainer: p = !1,
            minWidth: T = 500,
            maxWidth: m = 1 / 0,
            maxHeight: g = 1 / 0,
            channelId: S,
            messageId: N,
            showTextContent: C = m >= 250,
            showParticipants: R = !0,
            volume: O,
            autoMute: L,
            onVolumeChange: D,
            onMutedChange: y,
            onClick: v,
            onContextMenu: b,
            onPlay: M,
            allowFullScreen: P = !0,
        } = e,
        w = n.width ?? 0,
        G = n.height ?? 0,
        x = (0, l.bG)([A.A], () => A.A.getBasicChannel(S)?.guild_id, [S]),
        k = w > 0 && G > 0 ? w / G : 16 / 9;
    (k > 2 || k < 1) && (k = 16 / 9);
    let V = r.useRef(null);
    (t = n.id),
        r.useEffect(() => {
            function e(e) {
                let { timestampMs: t } = e;
                null != V.current && (V.current.seek(t / 1e3), V.current.play());
            }
            return (
                F._.subscribeKeyed(U.zOV.CLIP_SEEK_VIDEO, t, e),
                () => {
                    F._.unsubscribeKeyed(U.zOV.CLIP_SEEK_VIDEO, t, e);
                }
            );
        }, [t, V]);
    let B = Math.min(w > 0 ? w : T, m),
        H = B / k;
    H > g && (B = (H = g) * k), B < T && (H = (B = T) / k);
    let Y = Math.round(Math.min(B, m)),
        K = Math.round(Math.min(H, g)),
        $ = w > 0 && G > 0 ? Math.min(Y / w, K / G, 1) : 1,
        z = (0, u.AE)({ src: a, width: Math.round(w * $), height: Math.round(G * $) }),
        [q, Z] = r.useState(!1),
        [X, Q] = r.useState(!0),
        [J, ee] = r.useState(0),
        et = r.useRef(0),
        en = r.useCallback(
            (e, t) => {
                t !== o.KB.BUFFERING_RECOVERY && e === o.Q6.PLAYING && M?.(t !== o.KB.USER, 1e3 * et.current, 1e3 * J);
            },
            [J, M],
        ),
        ei = r.useCallback((e, t) => {
            (et.current = e), Number.isFinite(t) && t > 0 && ee((e) => (e === t ? e : t));
        }, []),
        er = r.useMemo(() => n.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [n.clip_events_timeline]),
        ea = r.useMemo(() => {
            if (er)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: d.r,
                        label: W.intl.string(j.default.hFWVZQ),
                        active: X,
                        onClick: () => Q((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [er, X]),
        es = (0, E._)({ location: eg.Mu }).externalAnalyticsEnabled,
        el = r.useMemo(
            () =>
                es
                    ? {
                          contentId: f.split("?")[0],
                          videoStreamType: _.u.isHlsUrl(f) ? "hls" : "mp4",
                          contentType: "clips",
                          title: n.title,
                      }
                    : void 0,
            [es, f, n.title],
        ),
        eo = r.useMemo(
            () =>
                n.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [n.clip_participants],
        ),
        { enableScrubPreview: ed } = I.useConfig({ location: "ClipsPlayer" }),
        ec = r.useCallback(
            (e) => {
                let {
                    playerState: t,
                    isControlBarExpanded: r,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: l,
                    controlBarAnimationSpring: o,
                } = e;
                return (0, i.jsx)(em, {
                    attachment: n,
                    controlBarAnimationSpring: o,
                    guildId: x,
                    isFullScreen: q,
                    showParticipants: R,
                    showTextContent: C,
                    channelId: S,
                    messageId: N,
                    showSpeakingIndicators: X,
                    clipUserIds: eo,
                    durationSeconds: J,
                    playerState: t,
                    isControlBarExpanded: r,
                    videoRef: a,
                    isActive: s,
                    isVolumeExpanded: l,
                });
            },
            [n, x, q, R, C, S, N, X, eo, J],
        );
    return (0, i.jsx)("div", {
        className: s()(eS.kL, { [eS.HA]: p }, c),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: b,
        style: p ? void 0 : { width: Y, height: K },
        children: (0, i.jsx)(eN, {
            src: f,
            downloadUrl: n.url,
            downloadContentType: n.content_type,
            extraButtons: ea,
            poster: z,
            posterPlaceholder: n.placeholder,
            posterPlaceholderVersion: n.placeholder_version,
            autoplay: h,
            initialActive: !1,
            initialVolume: O,
            initialMuted: L,
            onVolumeChange: D,
            onMutedChange: y,
            onProgressUpdate: ei,
            orientation: "landscape",
            minWidth: 0,
            minHeight: 0,
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ec,
            parentTransitionState: null,
            onFullscreenChange: Z,
            onClick: v,
            onPlayerStateChange: en,
            withVideoHalo: !0,
            objectFit: p ? "cover" : void 0,
            muxContentMetadata: el,
            hideFullScreenBtn: !P,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            playerRef: V,
            scrubPreviewVttUrl: ed ? n.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: ed ? n.spritesheet_image_url : void 0,
        }),
    });
}
