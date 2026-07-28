n.d(t, { A: () => ef });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(494012),
    o = n(505124),
    d = n(43990),
    c = n(683574);
n(938796);
var u = n(4798),
    h = n(665260),
    m = n(17928),
    p = n(459192),
    g = n(922016),
    f = n(460905),
    A = n(110384),
    x = n(939249),
    v = n(834730),
    C = n(493336),
    E = n(565645),
    T = n(822123),
    _ = n(267889),
    I = n(228366),
    j = n(95701),
    N = n(232835),
    y = n(652215);
let S = (0, m.UT)(N.A, {
    getQueryId: (e, t, n, i, l) => (null != n && null != t && null != i && l ? e.id : null),
    get: (e) => (N.A.isReady(e.id) ? N.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let l = e.id;
        await C.A.fetchMessages({ channelId: l, limit: 100 }),
            await I.h.dispatch({
                type: "THREAD_CREATE",
                channel: new j.Lt({
                    id: l,
                    parent_id: t,
                    type: y.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? y.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => N.A.isLoadingMessages(e.id),
});
var b = n(451909),
    M = n(118517),
    R = n(747926),
    k = n(280450),
    w = n(734057),
    O = n(625494),
    P = n(475815);
let L = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var D = n(307731),
    U = n(381941),
    G = n(16590),
    F = n(375708),
    H = n(731686);
function V(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function W(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: r,
            guildId: o,
            hidden: d = !1,
            containerWidth: I,
        } = e,
        j = n.id,
        W = (0, T.QZ)(o),
        Z = null != I && I < 460,
        z = W.slice(0, Z ? 2 : 3),
        K = (0, m.bG)([N.A], () => N.A.getMessage(a, r), [a, r]),
        q = (0, m.bG)([w.A], () => w.A.getChannel(a), [a]),
        Y = (0, m.bG)([w.A], () => w.A.getChannel(j), [j]),
        { enableMediaComments: $ } = L.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: X, videoRef: J } = (0, c.X$)(),
        Q = (0, h.Lt)(n.flags ?? 0, y.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = S(n, a, o, K?.author.id, $ && Q),
        et = l.useRef(null);
    function en(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == q || null == K || null == r || null == J?.current?.currentTime) return;
                let t =
                        null != e.id
                            ? !0 === e.animated
                                ? `<a:${e.originalName ?? e.name}:${e.id}>`
                                : `<:${e.originalName ?? e.name}:${e.id}>`
                            : "surrogates" in e && null != e.surrogates
                              ? e.surrogates
                              : e.name,
                    n = K.author.id === k.default.getId();
                C.A.sendMessage(q.id, b.Ay.parse(q, t), !1, {
                    location: U.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: q.id, guild_id: q.getGuildId() ?? void 0, message_id: r },
                    allowedMentions: { replied_user: !n },
                    mediaMention: V(j, J),
                });
            })(t);
    }
    let ei = ee?.length ?? 0;
    if (!$ || null == q || null == r) return null;
    let el = F.intl.formatToPlainString(G.default.OYDyt2, { count: ei });
    return (0, i.jsxs)(u.animated.div, {
        className: s()(H.M0, { [H.pd]: d }),
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
                className: H.gm,
                children: z.map((e) =>
                    (0, i.jsx)(
                        p.u,
                        {
                            title: F.intl.formatToPlainString(G.default["CZCvn+"], { emoji: e.name }),
                            body: F.intl.string(G.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: H.x6,
                                onClick: (t) => en(t, e),
                                children: (0, i.jsx)(E.A, {
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
            (0, i.jsx)(B, {}),
            (0, i.jsx)(g.Y, {
                layerContext: X,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(_.A, {
                        channel: q,
                        closePopout: t,
                        messageId: r,
                        pickerIntention: D.EmojiIntention.CHAT,
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
                    (0, i.jsx)(p.u, {
                        title: F.intl.string(G.default["ZEs/pI"]),
                        body: F.intl.string(G.default.K8Khlc),
                        targetElementRef: et,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: et,
                            type: "button",
                            className: H.x6,
                            children: (0, i.jsx)(f.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(p.u, {
                title: F.intl.string(G.default.y2TE38),
                body: F.intl.string(G.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: H.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == q || null == K || null == J?.current?.currentTime)) return;
                        P._U(J.current) && P.sP(J.current);
                        let t = K.author.id === k.default.getId();
                        (0, M.Yf)({
                            channel: q,
                            message: K,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !q.isPrivate() && !t,
                            mediaMention: V(j, J),
                        }),
                            O._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: q.id });
                    },
                    children: (0, i.jsx)(A.W, { size: "sm" }),
                }),
            }),
            ei > 0 &&
                !Z &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(B, {}),
                        (0, i.jsx)(x.D, {
                            className: H.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != Y && (P._U(J.current) && P.sP(J.current), (0, R.JA)(Y));
                            },
                            "aria-label": el,
                            children: (0, i.jsx)(v.E, {
                                variant: "text-sm/semibold",
                                color: "text-link",
                                lineClamp: 1,
                                children: el,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function B() {
    return (0, i.jsx)("div", { className: H.yF });
}
var Z = n(534890),
    z = n(661531),
    K = n(97808),
    q = n(778712),
    Y = n(7584);
let $ = /^<(a)?:(\w+):(\d+)>$/;
var X = n(521981),
    J = n(537452);
function Q(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: a,
            durationSeconds: s,
            guildId: r,
            channelId: o,
            messageId: d,
            hidden: c = !1,
        } = e,
        { enableMediaComments: p } = L.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        g = (0, h.Lt)(n.flags ?? 0, y.sbO.HAS_TIMELINE_COMMENTS),
        f = (0, m.bG)([N.A], () => N.A.getMessage(o, d), [o, d]),
        { data: A } = S(n, o, r, f?.author.id, p && g && a);
    return (l.useEffect(() => {
        a && S.refetch(n, o, r, f?.author.id, p && g && a);
    }, [a, n, o, r, f?.author.id, p, g]),
    !p || null == A || s <= 0)
        ? null
        : (0, i.jsx)(u.animated.div, {
              className: J.IO,
              inert: c,
              style: {
                  opacity: a ? (0, u.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (c ? 0 : `${e}`)) : 1,
                  transform: a
                      ? (0, u.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: A.map((e) => (0, i.jsx)(ee, { message: e, durationSeconds: s }, e.id)),
          });
}
function ee(e) {
    let { message: t, durationSeconds: n } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match($);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== Y.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        r = l.useMemo(() => (null != t && "" !== t.content ? (0, X.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let o = (0, i.jsx)(x.D, {
        className: J.xL,
        style: { left: a },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && C.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != s
                ? (0, i.jsx)(E.A, {
                      emojiId: s.emojiId,
                      emojiName: s.emojiName,
                      shouldAnimate: !1,
                      animated: s.animated,
                      surrogate: s.surrogate,
                      className: J.Zg,
                  })
                : (0, i.jsx)(Z.o, { colorClass: J.Or, color: z.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == r
        ? o
        : (0, i.jsx)(p.u, {
              asset: (0, i.jsx)(K.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: r,
              children: o,
          });
}
var et = n(783384),
    en = n(194498),
    ei = n(376595),
    el = n(773503);
let ea = [];
function es(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: s } = e,
        r = l.useMemo(() => ei.H.fromAttachmentTimeline(t), [t]),
        [o, d] = l.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: u } = (0, c.X$)();
    return (
        (0, en.A)(() => {
            let e = u.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            d(r.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(el.A, {
            speakingUserIds: o.speakingUserIds,
            activeSoundboards: ea,
            userIds: n,
            guildId: a,
            channelId: s,
        })
    );
}
var er = n(915725),
    eo = n(458977),
    ed = n(352527),
    ec = n(996682),
    eu = n(27989);
function eh(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = z.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...r
        } = e,
        o = (0, eu.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, ec.A)(r),
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
var em = n(218474);
function ep(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: r, isPlayerActive: o } = e,
        { enableDistributedClips: d } = eo.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        u = (0, m.bG)([er.Ay], () => (null != c ? er.Ay.getClipByRemoteId(c) : null)),
        { onShareClick: h } = (0, ed.A)(n),
        p = (0, m.bG)([er.Ay], () => null != u && null != n && null != c && er.Ay.wasClipSharedInChannel(c, n)),
        g = l.useCallback(
            (e) => {
                null != u &&
                    (e.stopPropagation(), h({ clips: [u], messageReference: { channel_id: n, message_id: a } }));
            },
            [h, u, n, a],
        );
    return !d || null == u || p
        ? null
        : (0, i.jsxs)("button", {
              className: s()(em.eZ, { [em.vu]: r, [em.jn]: !o }),
              onClick: g,
              children: [
                  (0, i.jsx)(eh, { size: "refresh_sm", color: z.A.colors.WHITE }),
                  (0, i.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: F.intl.string(G.default.YKst58),
                  }),
              ],
          });
}
var eg = n(668534);
function ef(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: l,
            isActive: a,
            isVolumeExpanded: u,
            attachment: h,
            guildId: m,
            isFullScreen: p,
            showParticipants: g,
            showTextContent: f,
            channelId: A,
            messageId: x,
            showSpeakingIndicators: v,
            clipUserIds: C,
            durationSeconds: E,
        } = e,
        { activeLayer: T } = (0, c.X$)(),
        { ref: _, width: I } = (0, r.Ay)();
    return (0, i.jsx)(d.N, {
        theme: o.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: _,
                className: s()(eg.MU, e),
                children: [
                    (0, i.jsx)(et.A, {
                        createdAt: null != h.clip_created_at ? Date.parse(h.clip_created_at) : void 0,
                        participantIds: g ? C : [],
                        applicationId: h.application?.id,
                        title: h.title,
                        guildId: m,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: p,
                        activeLayer: T,
                        showTextContent: f,
                    }),
                    null != x &&
                        null != A &&
                        (0, i.jsx)(ep, {
                            isControlBarExpanded: l,
                            isPlayerActive: a,
                            attachment: h,
                            messageId: x,
                            channelId: A,
                        }),
                    v &&
                        null != h.clip_events_timeline &&
                        null != A &&
                        (0, i.jsx)(es, { guildId: m, timeline: h.clip_events_timeline, userIds: C, channelId: A }),
                    a &&
                        null != m &&
                        null != A &&
                        null != x &&
                        (0, i.jsx)(W, {
                            controlBarAnimationSpring: n,
                            attachment: h,
                            channelId: A,
                            messageId: x,
                            guildId: m,
                            containerWidth: I,
                            hidden: !l || u,
                        }),
                    null != m &&
                        null != A &&
                        null != x &&
                        (0, i.jsx)(Q, {
                            isActive: a,
                            controlBarAnimationSpring: n,
                            attachment: h,
                            channelId: A,
                            messageId: x,
                            guildId: m,
                            durationSeconds: h.duration_secs ?? E,
                            hidden: a && !l,
                        }),
                ],
            }),
    });
}
