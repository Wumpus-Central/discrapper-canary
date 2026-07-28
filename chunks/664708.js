"use strict";
n.d(t, { A: () => eI });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(494012),
    o = n(505124),
    d = n(43990),
    c = n(683574);
n(938796);
var u = n(461376),
    _ = n(665260),
    E = n(17928),
    A = n(459192),
    h = n(922016),
    I = n(460905),
    f = n(110384),
    p = n(939249),
    T = n(834730),
    m = n(148494),
    g = n(565645),
    S = n(822123),
    N = n(267889),
    C = n(228366),
    O = n(95701),
    R = n(232835),
    L = n(652215);
let y = (0, E.UT)(R.A, {
    getQueryId: (e, t, n, i, r) => (null != n && null != t && null != i && r ? e.id : null),
    get: (e) => (R.A.isReady(e.id) ? R.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let r = e.id;
        await m.A.fetchMessages({ channelId: r, limit: 100 }),
            await C.h.dispatch({
                type: "THREAD_CREATE",
                channel: new O.Lt({
                    id: r,
                    parent_id: t,
                    type: L.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? L.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => R.A.isLoadingMessages(e.id),
});
var D = n(451909),
    v = n(118517),
    b = n(747926),
    M = n(280450),
    P = n(734057),
    U = n(625494),
    w = n(475815);
let G = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var x = n(307731),
    k = n(381941),
    F = n(16590),
    V = n(375708),
    B = n(731686);
function H(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function j(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: l,
            guildId: o,
            hidden: d = !1,
            containerWidth: C,
        } = e,
        O = n.id,
        j = (0, S.QZ)(o),
        Y = null != C && C < 460,
        K = j.slice(0, Y ? 2 : 3),
        $ = (0, E.bG)([R.A], () => R.A.getMessage(a, l), [a, l]),
        z = (0, E.bG)([P.A], () => P.A.getChannel(a), [a]),
        q = (0, E.bG)([P.A], () => P.A.getChannel(O), [O]),
        { enableMediaComments: Z } = G.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: X, videoRef: Q } = (0, c.X$)(),
        J = (0, _.Lt)(n.flags ?? 0, L.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = y(n, a, o, $?.author.id, Z && J),
        et = r.useRef(null);
    function en(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == z || null == $ || null == l || null == Q?.current?.currentTime) return;
                let t =
                        null != e.id
                            ? !0 === e.animated
                                ? `<a:${e.originalName ?? e.name}:${e.id}>`
                                : `<:${e.originalName ?? e.name}:${e.id}>`
                            : "surrogates" in e && null != e.surrogates
                              ? e.surrogates
                              : e.name,
                    n = $.author.id === M.default.getId();
                m.A.sendMessage(z.id, D.Ay.parse(z, t), !1, {
                    location: k.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: z.id, guild_id: z.getGuildId() ?? void 0, message_id: l },
                    allowedMentions: { replied_user: !n },
                    mediaMention: H(O, Q),
                });
            })(t);
    }
    let ei = ee?.length ?? 0;
    if (!Z || null == z || null == l) return null;
    let er = V.intl.formatToPlainString(F.default.OYDyt2, { count: ei });
    return (0, i.jsxs)(u.animated.div, {
        className: s()(B.M0, { [B.pd]: d }),
        inert: d,
        style: {
            opacity: (0, u.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (d ? 0 : `${e}`)),
            transform: (0, u.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: B.gm,
                children: K.map((e) =>
                    (0, i.jsx)(
                        A.u,
                        {
                            title: V.intl.formatToPlainString(F.default["CZCvn+"], { emoji: e.name }),
                            body: V.intl.string(F.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: B.x6,
                                onClick: (t) => en(t, e),
                                children: (0, i.jsx)(g.A, {
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
            (0, i.jsx)(W, {}),
            (0, i.jsx)(h.Y, {
                layerContext: X,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(N.A, {
                        channel: z,
                        closePopout: t,
                        messageId: l,
                        pickerIntention: x.EmojiIntention.CHAT,
                        onSelectEmoji: (e) => {
                            let { emoji: n } = e;
                            null != n && (en(void 0, n), t());
                        },
                    });
                },
                position: "top",
                align: "center",
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(A.u, {
                        title: V.intl.string(F.default["ZEs/pI"]),
                        body: V.intl.string(F.default.K8Khlc),
                        targetElementRef: et,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: et,
                            type: "button",
                            className: B.x6,
                            children: (0, i.jsx)(I.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(A.u, {
                title: V.intl.string(F.default.y2TE38),
                body: V.intl.string(F.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: B.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == z || null == $ || null == Q?.current?.currentTime)) return;
                        w._U(Q.current) && w.sP(Q.current);
                        let t = $.author.id === M.default.getId();
                        (0, v.Yf)({
                            channel: z,
                            message: $,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !z.isPrivate() && !t,
                            mediaMention: H(O, Q),
                        }),
                            U._.dispatch(L.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: z.id });
                    },
                    children: (0, i.jsx)(f.W, { size: "sm" }),
                }),
            }),
            ei > 0 &&
                !Y &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W, {}),
                        (0, i.jsx)(p.D, {
                            className: B.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != q && (w._U(Q.current) && w.sP(Q.current), (0, b.JA)(q));
                            },
                            "aria-label": er,
                            children: (0, i.jsx)(T.E, {
                                variant: "text-sm/semibold",
                                color: "text-link",
                                lineClamp: 1,
                                children: er,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function W() {
    return (0, i.jsx)("div", { className: B.yF });
}
var Y = n(534890),
    K = n(661531),
    $ = n(97808),
    z = n(778712),
    q = n(7584);
let Z = /^<(a)?:(\w+):(\d+)>$/;
var X = n(521981),
    Q = n(537452);
function J(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: a,
            durationSeconds: s,
            guildId: l,
            channelId: o,
            messageId: d,
            hidden: c = !1,
        } = e,
        { enableMediaComments: A } = G.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        h = (0, _.Lt)(n.flags ?? 0, L.sbO.HAS_TIMELINE_COMMENTS),
        I = (0, E.bG)([R.A], () => R.A.getMessage(o, d), [o, d]),
        { data: f } = y(n, o, l, I?.author.id, A && h && a);
    return (r.useEffect(() => {
        a && y.refetch(n, o, l, I?.author.id, A && h && a);
    }, [a, n, o, l, I?.author.id, A, h]),
    !A || null == f || s <= 0)
        ? null
        : (0, i.jsx)(u.animated.div, {
              className: Q.IO,
              inert: c,
              style: {
                  opacity: a ? (0, u.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (c ? 0 : `${e}`)) : 1,
                  transform: a
                      ? (0, u.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: f.map((e) => (0, i.jsx)(ee, { message: e, durationSeconds: s }, e.id)),
          });
}
function ee(e) {
    let { message: t, durationSeconds: n } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = r.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(Z);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== q.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        l = r.useMemo(() => (null != t && "" !== t.content ? (0, X.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let o = (0, i.jsx)(p.D, {
        className: Q.xL,
        style: { left: a },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && m.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != s
                ? (0, i.jsx)(g.A, {
                      emojiId: s.emojiId,
                      emojiName: s.emojiName,
                      shouldAnimate: !1,
                      animated: s.animated,
                      surrogate: s.surrogate,
                      className: Q.Zg,
                  })
                : (0, i.jsx)(Y.o, { colorClass: Q.Or, color: K.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == l
        ? o
        : (0, i.jsx)(A.u, {
              asset: (0, i.jsx)($.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: z._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: l,
              children: o,
          });
}
var et = n(783384),
    en = n(972117),
    ei = n(376595),
    er = n(773503);
let ea = [];
function es(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: s } = e,
        l = r.useMemo(() => ei.H.fromAttachmentTimeline(t), [t]),
        [o, d] = r.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: u } = (0, c.X$)();
    return (
        (0, en.A)(() => {
            let e = u.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            d(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(er.A, {
            speakingUserIds: o.speakingUserIds,
            activeSoundboards: ea,
            userIds: n,
            guildId: a,
            channelId: s,
        })
    );
}
var el = n(915725),
    eo = n(458977),
    ed = n(352527),
    ec = n(996682),
    eu = n(27989);
function e_(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: a = K.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...l
        } = e,
        o = (0, eu.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, ec.A)(l),
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
var eE = n(218474);
function eA(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: l, isPlayerActive: o } = e,
        { enableDistributedClips: d } = eo.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        u = (0, E.bG)([el.Ay], () => (null != c ? el.Ay.getClipByRemoteId(c) : null)),
        { onShareClick: _ } = (0, ed.A)(n),
        A = (0, E.bG)([el.Ay], () => null != u && null != n && null != c && el.Ay.wasClipSharedInChannel(c, n)),
        h = r.useCallback(
            (e) => {
                null != u &&
                    (e.stopPropagation(), _({ clips: [u], messageReference: { channel_id: n, message_id: a } }));
            },
            [_, u, n, a],
        );
    return !d || null == u || A
        ? null
        : (0, i.jsxs)("button", {
              className: s()(eE.eZ, { [eE.vu]: l, [eE.jn]: !o }),
              onClick: h,
              children: [
                  (0, i.jsx)(e_, { size: "refresh_sm", color: K.A.colors.WHITE }),
                  (0, i.jsx)(T.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: V.intl.string(F.default.YKst58),
                  }),
              ],
          });
}
var eh = n(668534);
function eI(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: r,
            isActive: a,
            isVolumeExpanded: u,
            attachment: _,
            guildId: E,
            isFullScreen: A,
            showParticipants: h,
            showTextContent: I,
            channelId: f,
            messageId: p,
            showSpeakingIndicators: T,
            clipUserIds: m,
            durationSeconds: g,
        } = e,
        { activeLayer: S } = (0, c.X$)(),
        { ref: N, width: C } = (0, l.Ay)();
    return (0, i.jsx)(d.N, {
        theme: o.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: N,
                className: s()(eh.MU, e),
                children: [
                    (0, i.jsx)(et.A, {
                        createdAt: null != _.clip_created_at ? Date.parse(_.clip_created_at) : void 0,
                        participantIds: h ? m : [],
                        applicationId: _.application?.id,
                        title: _.title,
                        guildId: E,
                        playerState: t,
                        isControlBarExpanded: r,
                        isFullScreen: A,
                        activeLayer: S,
                        showTextContent: I,
                    }),
                    null != p &&
                        null != f &&
                        (0, i.jsx)(eA, {
                            isControlBarExpanded: r,
                            isPlayerActive: a,
                            attachment: _,
                            messageId: p,
                            channelId: f,
                        }),
                    T &&
                        null != _.clip_events_timeline &&
                        null != f &&
                        (0, i.jsx)(es, { guildId: E, timeline: _.clip_events_timeline, userIds: m, channelId: f }),
                    a &&
                        null != E &&
                        null != f &&
                        null != p &&
                        (0, i.jsx)(j, {
                            controlBarAnimationSpring: n,
                            attachment: _,
                            channelId: f,
                            messageId: p,
                            guildId: E,
                            containerWidth: C,
                            hidden: !r || u,
                        }),
                    null != E &&
                        null != f &&
                        null != p &&
                        (0, i.jsx)(J, {
                            isActive: a,
                            controlBarAnimationSpring: n,
                            attachment: _,
                            channelId: f,
                            messageId: p,
                            guildId: E,
                            durationSeconds: _.duration_secs ?? g,
                            hidden: a && !r,
                        }),
                ],
            }),
    });
}
