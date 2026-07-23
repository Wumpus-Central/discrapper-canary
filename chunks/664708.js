"use strict";
n.d(t, { A: () => eA });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(505124),
    o = n(43990),
    d = n(683574);
n(938796);
var c = n(617498),
    u = n(665260),
    _ = n(17928),
    E = n(459192),
    A = n(922016),
    h = n(460905),
    I = n(110384),
    f = n(939249),
    p = n(834730),
    T = n(493336),
    m = n(565645),
    g = n(822123),
    S = n(334295),
    N = n(228366),
    C = n(95701),
    O = n(232835),
    R = n(652215);
let L = (0, _.UT)(O.A, {
    getQueryId: (e, t, n, i, r) => (null != n && null != t && null != i && r ? e.id : null),
    get: (e) => (O.A.isReady(e.id) ? O.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let r = e.id;
        await T.A.fetchMessages({ channelId: r, limit: 100 }),
            await N.h.dispatch({
                type: "THREAD_CREATE",
                channel: new C.Lt({
                    id: r,
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
    getIsLoading: (e) => O.A.isLoadingMessages(e.id),
});
var y = n(451909),
    D = n(118517),
    v = n(747926),
    b = n(734057),
    M = n(625494),
    P = n(475815);
let U = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var w = n(307731),
    G = n(381941),
    x = n(16590),
    k = n(375708),
    F = n(731686);
function V(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function B(e) {
    let { controlBarAnimationSpring: t, attachment: n, channelId: a, messageId: l, guildId: o, hidden: N = !1 } = e,
        C = n.id,
        B = (0, g.QZ)(o).slice(0, 3),
        j = (0, _.bG)([O.A], () => O.A.getMessage(a, l), [a, l]),
        W = (0, _.bG)([b.A], () => b.A.getChannel(a), [a]),
        Y = (0, _.bG)([b.A], () => b.A.getChannel(C), [C]),
        { enableMediaComments: K } = U.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: $, videoRef: z } = (0, d.X$)(),
        q = (0, u.Lt)(n.flags ?? 0, R.sbO.HAS_TIMELINE_COMMENTS),
        { data: Z } = L(n, a, o, j?.author.id, K && q),
        X = r.useRef(null);
    function Q(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == W || null == l || null == z?.current?.currentTime) return;
                let t =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.originalName ?? e.name}:${e.id}>`
                            : `<:${e.originalName ?? e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                T.A.sendMessage(W.id, y.Ay.parse(W, t), !1, {
                    location: G.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: W.id, guild_id: W.getGuildId() ?? void 0, message_id: l },
                    mediaMention: V(C, z),
                });
            })(t);
    }
    let J = Z?.length ?? 0;
    if (!K || null == W || null == l) return null;
    let ee = k.intl.formatToPlainString(x.default.OYDyt2, { count: J });
    return (0, i.jsxs)(c.animated.div, {
        className: s()(F.M0, { [F.pd]: N }),
        inert: N,
        style: {
            opacity: (0, c.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (N ? 0 : `${e}`)),
            transform: (0, c.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: F.gm,
                children: B.map((e) =>
                    (0, i.jsx)(
                        E.u,
                        {
                            title: k.intl.formatToPlainString(x.default["CZCvn+"], { emoji: e.name }),
                            body: k.intl.string(x.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: F.x6,
                                onClick: (t) => Q(t, e),
                                children: (0, i.jsx)(m.A, {
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
            (0, i.jsx)(H, {}),
            (0, i.jsx)(A.Y, {
                layerContext: $,
                targetElementRef: X,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(S.A, {
                        channel: W,
                        closePopout: t,
                        messageId: l,
                        pickerIntention: w.EmojiIntention.CHAT,
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
                    (0, i.jsx)(E.u, {
                        title: k.intl.string(x.default["ZEs/pI"]),
                        body: k.intl.string(x.default.K8Khlc),
                        targetElementRef: X,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: X,
                            type: "button",
                            className: F.x6,
                            children: (0, i.jsx)(h.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(E.u, {
                title: k.intl.string(x.default.y2TE38),
                body: k.intl.string(x.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: F.x6,
                    onClick: function (e) {
                        e.stopPropagation(),
                            null == W ||
                                null == j ||
                                (null != z?.current?.currentTime &&
                                    (P._U(z.current) && P.sP(z.current),
                                    (0, D.Yf)({
                                        channel: W,
                                        message: j,
                                        shouldMention: !e.shiftKey,
                                        showMentionToggle: !W.isPrivate(),
                                        mediaMention: V(C, z),
                                    }),
                                    M._.dispatch(R.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: W.id })));
                    },
                    children: (0, i.jsx)(I.W, { size: "sm" }),
                }),
            }),
            J > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(H, {}),
                        (0, i.jsx)(f.D, {
                            className: F.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != Y && (P._U(z.current) && P.sP(z.current), (0, v.JA)(Y));
                            },
                            "aria-label": ee,
                            children: (0, i.jsx)(p.E, {
                                variant: "text-sm/semibold",
                                color: "text-link",
                                lineClamp: 1,
                                children: ee,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function H() {
    return (0, i.jsx)("div", { className: F.yF });
}
var j = n(534890),
    W = n(661531),
    Y = n(97808),
    K = n(778712),
    $ = n(7584);
let z = /^<(a)?:(\w+):(\d+)>$/;
var q = n(521981),
    Z = n(537452);
function X(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: a,
            durationSeconds: s,
            guildId: l,
            channelId: o,
            messageId: d,
            hidden: E = !1,
        } = e,
        { enableMediaComments: A } = U.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        h = (0, u.Lt)(n.flags ?? 0, R.sbO.HAS_TIMELINE_COMMENTS),
        I = (0, _.bG)([O.A], () => O.A.getMessage(o, d), [o, d]),
        { data: f } = L(n, o, l, I?.author.id, A && h && a);
    return (r.useEffect(() => {
        a && L.refetch(n, o, l, I?.author.id, A && h && a);
    }, [a, n, o, l, I?.author.id, A, h]),
    !A || null == f || s <= 0)
        ? null
        : (0, i.jsx)(c.animated.div, {
              className: Z.IO,
              inert: E,
              style: {
                  opacity: a ? (0, c.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (E ? 0 : `${e}`)) : 1,
                  transform: a
                      ? (0, c.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: f.map((e) => (0, i.jsx)(Q, { message: e, durationSeconds: s }, e.id)),
          });
}
function Q(e) {
    let { message: t, durationSeconds: n } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = r.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(z);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== $.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        l = r.useMemo(() => (null != t && "" !== t.content ? (0, q.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let o = (0, i.jsx)(f.D, {
        className: Z.xL,
        style: { left: a },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && T.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != s
                ? (0, i.jsx)(m.A, {
                      emojiId: s.emojiId,
                      emojiName: s.emojiName,
                      shouldAnimate: !1,
                      animated: s.animated,
                      surrogate: s.surrogate,
                      className: Z.Zg,
                  })
                : (0, i.jsx)(j.o, { colorClass: Z.Or, color: W.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == l
        ? o
        : (0, i.jsx)(E.u, {
              asset: (0, i.jsx)(Y.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: K._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: l,
              children: o,
          });
}
var J = n(783384),
    ee = n(194498),
    et = n(376595),
    en = n(773503);
let ei = [];
function er(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: s } = e,
        l = r.useMemo(() => et.H.fromAttachmentTimeline(t), [t]),
        [o, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: u } = (0, d.X$)();
    return (
        (0, ee.A)(() => {
            let e = u.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(en.A, {
            speakingUserIds: o.speakingUserIds,
            activeSoundboards: ei,
            userIds: n,
            guildId: a,
            channelId: s,
        })
    );
}
var ea = n(915725),
    es = n(458977),
    el = n(352527),
    eo = n(996682),
    ed = n(27989);
function ec(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: a = W.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...l
        } = e,
        o = (0, ed.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, eo.A)(l),
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
var eu = n(218474);
function e_(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: l, isPlayerActive: o } = e,
        { enableDistributedClips: d } = es.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        u = (0, _.bG)([ea.Ay], () => (null != c ? ea.Ay.getClipByRemoteId(c) : null)),
        { onShareClick: E } = (0, el.A)(n),
        A = (0, _.bG)([ea.Ay], () => null != u && null != n && null != c && ea.Ay.wasClipSharedInChannel(c, n)),
        h = r.useCallback(
            (e) => {
                null != u &&
                    (e.stopPropagation(), E({ clips: [u], messageReference: { channel_id: n, message_id: a } }));
            },
            [E, u, n, a],
        );
    return !d || null == u || A
        ? null
        : (0, i.jsxs)("button", {
              className: s()(eu.eZ, { [eu.vu]: l, [eu.jn]: !o }),
              onClick: h,
              children: [
                  (0, i.jsx)(ec, { size: "refresh_sm", color: W.A.colors.WHITE }),
                  (0, i.jsx)(p.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: k.intl.string(x.default.YKst58),
                  }),
              ],
          });
}
var eE = n(668534);
function eA(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: r,
            isActive: a,
            isVolumeExpanded: c,
            attachment: u,
            guildId: _,
            isFullScreen: E,
            showParticipants: A,
            showTextContent: h,
            channelId: I,
            messageId: f,
            showSpeakingIndicators: p,
            clipUserIds: T,
            durationSeconds: m,
        } = e,
        { activeLayer: g } = (0, d.X$)();
    return (0, i.jsx)(o.N, {
        theme: l.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: s()(eE.MU, e),
                children: [
                    (0, i.jsx)(J.A, {
                        createdAt: null != u.clip_created_at ? Date.parse(u.clip_created_at) : void 0,
                        participantIds: A ? T : [],
                        applicationId: u.application?.id,
                        title: u.title,
                        guildId: _,
                        playerState: t,
                        isControlBarExpanded: r,
                        isFullScreen: E,
                        activeLayer: g,
                        showTextContent: h,
                    }),
                    null != f &&
                        null != I &&
                        (0, i.jsx)(e_, {
                            isControlBarExpanded: r,
                            isPlayerActive: a,
                            attachment: u,
                            messageId: f,
                            channelId: I,
                        }),
                    p &&
                        null != u.clip_events_timeline &&
                        null != I &&
                        (0, i.jsx)(er, { guildId: _, timeline: u.clip_events_timeline, userIds: T, channelId: I }),
                    a &&
                        null != _ &&
                        null != I &&
                        null != f &&
                        (0, i.jsx)(B, {
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: I,
                            messageId: f,
                            guildId: _,
                            hidden: !r || c,
                        }),
                    null != _ &&
                        null != I &&
                        null != f &&
                        (0, i.jsx)(X, {
                            isActive: a,
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: I,
                            messageId: f,
                            guildId: _,
                            durationSeconds: u.duration_secs ?? m,
                            hidden: a && !r,
                        }),
                ],
            }),
    });
}
