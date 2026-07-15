"use strict";
n.d(t, { A: () => e_ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(505124),
    o = n(43990);
n(938796);
var d = n(580929),
    c = n(665260),
    u = n(17928),
    _ = n(459192),
    E = n(922016),
    A = n(460905),
    h = n(110384),
    I = n(939249),
    f = n(834730),
    p = n(493336),
    T = n(565645),
    m = n(822123),
    g = n(334295),
    S = n(228366),
    N = n(95701),
    C = n(232835),
    R = n(652215);
let O = (0, u.UT)(C.A, {
    getQueryId: (e, t, n, i, r) => (null != n && null != t && null != i && r ? e.id : null),
    get: (e) => (C.A.isReady(e.id) ? C.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let r = e.id;
        await p.A.fetchMessages({ channelId: r, limit: 100 }),
            await S.h.dispatch({
                type: "THREAD_CREATE",
                channel: new N.Lt({
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
    getIsLoading: (e) => C.A.isLoadingMessages(e.id),
});
var L = n(451909),
    D = n(118517),
    y = n(747926),
    v = n(734057),
    b = n(625494);
let M = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var P = n(307731),
    U = n(381941),
    w = n(16590),
    G = n(375708),
    x = n(909022);
function k(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function F(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: l,
            guildId: o,
            videoRef: S,
            hidden: N = !1,
        } = e,
        F = n.id,
        B = (0, m.QZ)(o).slice(0, 3),
        H = (0, u.bG)([C.A], () => C.A.getMessage(a, l), [a, l]),
        j = (0, u.bG)([v.A], () => v.A.getChannel(a), [a]),
        W = (0, u.bG)([v.A], () => v.A.getChannel(F), [F]),
        { enableMediaComments: Y } = M.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        K = (0, c.Lt)(n.flags ?? 0, R.sbO.HAS_TIMELINE_COMMENTS),
        { data: $ } = O(n, a, o, H?.author.id, Y && K),
        z = r.useRef(null);
    function q(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == j || null == l || null == S?.current?.currentTime) return;
                let t =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.originalName ?? e.name}:${e.id}>`
                            : `<:${e.originalName ?? e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                p.A.sendMessage(j.id, L.Ay.parse(j, t), !1, {
                    location: U.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: j.id, guild_id: j.getGuildId() ?? void 0, message_id: l },
                    mediaMention: k(F, S),
                });
            })(t);
    }
    let Z = $?.length ?? 0;
    if (!Y || null == j || null == l) return null;
    let X = G.intl.formatToPlainString(w.default.OYDyt2, { count: Z });
    return (0, i.jsxs)(d.animated.div, {
        className: s()(x.M0, { [x.pd]: N }),
        inert: N,
        style: {
            opacity: (0, d.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (N ? 0 : `${e}`)),
            transform: (0, d.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: x.gm,
                children: B.map((e) =>
                    (0, i.jsx)(
                        _.u,
                        {
                            title: G.intl.formatToPlainString(w.default["CZCvn+"], { emoji: e.name }),
                            body: G.intl.string(w.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: x.x6,
                                onClick: (t) => q(t, e),
                                children: (0, i.jsx)(T.A, {
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
            (0, i.jsx)(V, {}),
            (0, i.jsx)(E.Y, {
                targetElementRef: z,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(g.A, {
                        channel: j,
                        closePopout: t,
                        messageId: l,
                        pickerIntention: P.EmojiIntention.CHAT,
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
                    (0, i.jsx)(_.u, {
                        title: G.intl.string(w.default["ZEs/pI"]),
                        body: G.intl.string(w.default.K8Khlc),
                        targetElementRef: z,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: z,
                            type: "button",
                            className: x.x6,
                            children: (0, i.jsx)(A.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(_.u, {
                title: G.intl.string(w.default.y2TE38),
                body: G.intl.string(w.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: x.x6,
                    onClick: function (e) {
                        e.stopPropagation(),
                            null == j ||
                                null == H ||
                                (null != S?.current?.currentTime &&
                                    ((0, D.Yf)({
                                        channel: j,
                                        message: H,
                                        shouldMention: !e.shiftKey,
                                        showMentionToggle: !j.isPrivate(),
                                        mediaMention: k(F, S),
                                    }),
                                    b._.dispatch(R.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: j.id })));
                    },
                    children: (0, i.jsx)(h.W, { size: "sm" }),
                }),
            }),
            Z > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(V, {}),
                        (0, i.jsx)(I.D, {
                            className: x.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != W && (0, y.JA)(W);
                            },
                            "aria-label": X,
                            children: (0, i.jsx)(f.E, {
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
function V() {
    return (0, i.jsx)("div", { className: x.yF });
}
var B = n(534890),
    H = n(661531),
    j = n(97808),
    W = n(778712),
    Y = n(7584);
let K = /^<(a)?:(\w+):(\d+)>$/;
var $ = n(465364),
    z = n(933668);
function q(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: r,
            durationSeconds: a,
            guildId: s,
            channelId: l,
            messageId: o,
            hidden: _ = !1,
        } = e,
        { enableMediaComments: E } = M.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        A = (0, c.Lt)(n.flags ?? 0, R.sbO.HAS_TIMELINE_COMMENTS),
        h = (0, u.bG)([C.A], () => C.A.getMessage(l, o), [l, o]),
        { data: I } = O(n, l, s, h?.author.id, E && A && r);
    return !E || null == I || a <= 0
        ? null
        : (0, i.jsx)(d.animated.div, {
              className: z.IO,
              inert: _,
              style: {
                  opacity: r ? (0, d.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (_ ? 0 : `${e}`)) : 1,
                  transform: r
                      ? (0, d.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: I.map((e) => (0, i.jsx)(Z, { message: e, durationSeconds: a }, e.id)),
          });
}
function Z(e) {
    let { message: t, durationSeconds: n } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = r.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(K);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== Y.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        l = r.useMemo(() => (null != t && "" !== t.content ? (0, $.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let o = (0, i.jsx)(I.D, {
        className: z.xL,
        style: { left: a },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && p.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != s
                ? (0, i.jsx)(T.A, {
                      emojiId: s.emojiId,
                      emojiName: s.emojiName,
                      shouldAnimate: !1,
                      animated: s.animated,
                      surrogate: s.surrogate,
                      className: z.Zg,
                  })
                : (0, i.jsx)(B.o, { colorClass: z.Or, color: H.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == l
        ? o
        : (0, i.jsx)(_.u, {
              asset: (0, i.jsx)(j.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: W._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: l,
              children: o,
          });
}
var X = n(783384),
    Q = n(194498),
    J = n(376595),
    ee = n(773503);
let et = [];
function en(e) {
    let { timeline: t, userIds: n, videoRef: a, guildId: s, channelId: l } = e,
        o = r.useMemo(() => J.H.fromAttachmentTimeline(t), [t]),
        [d, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, Q.A)(() => {
            let e = a.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(o.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(ee.A, {
            speakingUserIds: d.speakingUserIds,
            activeSoundboards: et,
            userIds: n,
            guildId: s,
            channelId: l,
        })
    );
}
var ei = n(915725),
    er = n(458977),
    ea = n(352527),
    es = n(996682),
    el = n(27989);
function eo(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: a = H.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...l
        } = e,
        o = (0, el.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, es.A)(l),
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
var ed = n(310882);
function ec(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: l, isPlayerActive: o } = e,
        { enableDistributedClips: d } = er.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        _ = (0, u.bG)([ei.Ay], () => (null != c ? ei.Ay.getClipByRemoteId(c) : null)),
        { onShareClick: E } = (0, ea.A)(n),
        A = (0, u.bG)([ei.Ay], () => null != _ && null != n && null != c && ei.Ay.wasClipSharedInChannel(c, n)),
        h = r.useCallback(
            (e) => {
                null != _ &&
                    (e.stopPropagation(), E({ clips: [_], messageReference: { channel_id: n, message_id: a } }));
            },
            [E, _, n, a],
        );
    return !d || null == _ || A
        ? null
        : (0, i.jsxs)("button", {
              className: s()(ed.eZ, { [ed.vu]: l, [ed.jn]: !o }),
              onClick: h,
              children: [
                  (0, i.jsx)(eo, { size: "refresh_sm", color: H.A.colors.WHITE }),
                  (0, i.jsx)(f.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: G.intl.string(w.default.YKst58),
                  }),
              ],
          });
}
var eu = n(834926);
function e_(e) {
    let {
        playerState: t,
        controlBarAnimationSpring: n,
        isControlBarExpanded: r,
        videoRef: a,
        isActive: d,
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
    } = e;
    return (0, i.jsx)(o.N, {
        theme: l.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: s()(eu.MU, e),
                children: [
                    (0, i.jsx)(X.A, {
                        createdAt: null != u.clip_created_at ? Date.parse(u.clip_created_at) : void 0,
                        participantIds: A ? T : [],
                        applicationId: u.application?.id,
                        title: u.title,
                        guildId: _,
                        playerState: t,
                        isControlBarExpanded: r,
                        isFullScreen: E,
                        showTextContent: h,
                    }),
                    null != f &&
                        null != I &&
                        (0, i.jsx)(ec, {
                            isControlBarExpanded: r,
                            isPlayerActive: d,
                            attachment: u,
                            messageId: f,
                            channelId: I,
                        }),
                    p &&
                        null != u.clip_events_timeline &&
                        null != a &&
                        null != I &&
                        (0, i.jsx)(en, {
                            guildId: _,
                            timeline: u.clip_events_timeline,
                            videoRef: a,
                            userIds: T,
                            channelId: I,
                        }),
                    d &&
                        null != _ &&
                        null != I &&
                        null != f &&
                        (0, i.jsx)(F, {
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: I,
                            messageId: f,
                            guildId: _,
                            videoRef: a,
                            hidden: !r || c,
                        }),
                    null != _ &&
                        null != I &&
                        null != f &&
                        (0, i.jsx)(q, {
                            isActive: d,
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: I,
                            messageId: f,
                            guildId: _,
                            durationSeconds: u.duration_secs ?? m,
                            hidden: d && !r,
                        }),
                ],
            }),
    });
}
