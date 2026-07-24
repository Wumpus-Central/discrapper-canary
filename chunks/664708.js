n.d(t, { A: () => ep });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(505124),
    o = n(43990),
    d = n(683574);
n(938796);
var c = n(183812),
    u = n(665260),
    h = n(17928),
    m = n(459192),
    p = n(922016),
    g = n(460905),
    f = n(110384),
    A = n(939249),
    x = n(834730),
    v = n(493336),
    C = n(565645),
    E = n(822123),
    T = n(267889),
    _ = n(228366),
    I = n(95701),
    j = n(232835),
    N = n(652215);
let y = (0, h.UT)(j.A, {
    getQueryId: (e, t, n, i, l) => (null != n && null != t && null != i && l ? e.id : null),
    get: (e) => (j.A.isReady(e.id) ? j.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let l = e.id;
        await v.A.fetchMessages({ channelId: l, limit: 100 }),
            await _.h.dispatch({
                type: "THREAD_CREATE",
                channel: new I.Lt({
                    id: l,
                    parent_id: t,
                    type: N.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? N.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => j.A.isLoadingMessages(e.id),
});
var S = n(451909),
    b = n(118517),
    M = n(747926),
    R = n(734057),
    k = n(625494),
    w = n(475815);
let O = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var P = n(307731),
    L = n(381941),
    D = n(16590),
    U = n(375708),
    G = n(731686);
function F(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function H(e) {
    let { controlBarAnimationSpring: t, attachment: n, channelId: a, messageId: r, guildId: o, hidden: _ = !1 } = e,
        I = n.id,
        H = (0, E.QZ)(o).slice(0, 3),
        B = (0, h.bG)([j.A], () => j.A.getMessage(a, r), [a, r]),
        W = (0, h.bG)([R.A], () => R.A.getChannel(a), [a]),
        Z = (0, h.bG)([R.A], () => R.A.getChannel(I), [I]),
        { enableMediaComments: z } = O.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: K, videoRef: q } = (0, d.X$)(),
        Y = (0, u.Lt)(n.flags ?? 0, N.sbO.HAS_TIMELINE_COMMENTS),
        { data: $ } = y(n, a, o, B?.author.id, z && Y),
        X = l.useRef(null);
    function J(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == W || null == r || null == q?.current?.currentTime) return;
                let t =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.originalName ?? e.name}:${e.id}>`
                            : `<:${e.originalName ?? e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                v.A.sendMessage(W.id, S.Ay.parse(W, t), !1, {
                    location: L.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: W.id, guild_id: W.getGuildId() ?? void 0, message_id: r },
                    mediaMention: F(I, q),
                });
            })(t);
    }
    let Q = $?.length ?? 0;
    if (!z || null == W || null == r) return null;
    let ee = U.intl.formatToPlainString(D.default.OYDyt2, { count: Q });
    return (0, i.jsxs)(c.animated.div, {
        className: s()(G.M0, { [G.pd]: _ }),
        inert: _,
        style: {
            opacity: (0, c.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (_ ? 0 : `${e}`)),
            transform: (0, c.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: G.gm,
                children: H.map((e) =>
                    (0, i.jsx)(
                        m.u,
                        {
                            title: U.intl.formatToPlainString(D.default["CZCvn+"], { emoji: e.name }),
                            body: U.intl.string(D.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: G.x6,
                                onClick: (t) => J(t, e),
                                children: (0, i.jsx)(C.A, {
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
            (0, i.jsx)(p.Y, {
                layerContext: K,
                targetElementRef: X,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(T.A, {
                        channel: W,
                        closePopout: t,
                        messageId: r,
                        pickerIntention: P.EmojiIntention.CHAT,
                        onSelectEmoji: (e) => {
                            let { emoji: n } = e;
                            null != n && (J(void 0, n), t());
                        },
                    });
                },
                position: "top",
                align: "center",
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(m.u, {
                        title: U.intl.string(D.default["ZEs/pI"]),
                        body: U.intl.string(D.default.K8Khlc),
                        targetElementRef: X,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: X,
                            type: "button",
                            className: G.x6,
                            children: (0, i.jsx)(g.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(m.u, {
                title: U.intl.string(D.default.y2TE38),
                body: U.intl.string(D.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: G.x6,
                    onClick: function (e) {
                        e.stopPropagation(),
                            null == W ||
                                null == B ||
                                (null != q?.current?.currentTime &&
                                    (w._U(q.current) && w.sP(q.current),
                                    (0, b.Yf)({
                                        channel: W,
                                        message: B,
                                        shouldMention: !e.shiftKey,
                                        showMentionToggle: !W.isPrivate(),
                                        mediaMention: F(I, q),
                                    }),
                                    k._.dispatch(N.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: W.id })));
                    },
                    children: (0, i.jsx)(f.W, { size: "sm" }),
                }),
            }),
            Q > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(V, {}),
                        (0, i.jsx)(A.D, {
                            className: G.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != Z && (w._U(q.current) && w.sP(q.current), (0, M.JA)(Z));
                            },
                            "aria-label": ee,
                            children: (0, i.jsx)(x.E, {
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
function V() {
    return (0, i.jsx)("div", { className: G.yF });
}
var B = n(534890),
    W = n(661531),
    Z = n(97808),
    z = n(778712),
    K = n(7584);
let q = /^<(a)?:(\w+):(\d+)>$/;
var Y = n(521981),
    $ = n(537452);
function X(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: a,
            durationSeconds: s,
            guildId: r,
            channelId: o,
            messageId: d,
            hidden: m = !1,
        } = e,
        { enableMediaComments: p } = O.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        g = (0, u.Lt)(n.flags ?? 0, N.sbO.HAS_TIMELINE_COMMENTS),
        f = (0, h.bG)([j.A], () => j.A.getMessage(o, d), [o, d]),
        { data: A } = y(n, o, r, f?.author.id, p && g && a);
    return (l.useEffect(() => {
        a && y.refetch(n, o, r, f?.author.id, p && g && a);
    }, [a, n, o, r, f?.author.id, p, g]),
    !p || null == A || s <= 0)
        ? null
        : (0, i.jsx)(c.animated.div, {
              className: $.IO,
              inert: m,
              style: {
                  opacity: a ? (0, c.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (m ? 0 : `${e}`)) : 1,
                  transform: a
                      ? (0, c.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: A.map((e) => (0, i.jsx)(J, { message: e, durationSeconds: s }, e.id)),
          });
}
function J(e) {
    let { message: t, durationSeconds: n } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(q);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== K.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        r = l.useMemo(() => (null != t && "" !== t.content ? (0, Y.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let o = (0, i.jsx)(A.D, {
        className: $.xL,
        style: { left: a },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && v.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != s
                ? (0, i.jsx)(C.A, {
                      emojiId: s.emojiId,
                      emojiName: s.emojiName,
                      shouldAnimate: !1,
                      animated: s.animated,
                      surrogate: s.surrogate,
                      className: $.Zg,
                  })
                : (0, i.jsx)(B.o, { colorClass: $.Or, color: W.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == r
        ? o
        : (0, i.jsx)(m.u, {
              asset: (0, i.jsx)(Z.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: z._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: r,
              children: o,
          });
}
var Q = n(783384),
    ee = n(194498),
    et = n(376595),
    en = n(773503);
let ei = [];
function el(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: s } = e,
        r = l.useMemo(() => et.H.fromAttachmentTimeline(t), [t]),
        [o, c] = l.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: u } = (0, d.X$)();
    return (
        (0, ee.A)(() => {
            let e = u.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(r.getEventsAtTimestamp(t));
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
    er = n(352527),
    eo = n(996682),
    ed = n(27989);
function ec(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = W.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...r
        } = e,
        o = (0, ed.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, eo.A)(r),
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
function eh(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: r, isPlayerActive: o } = e,
        { enableDistributedClips: d } = es.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        u = (0, h.bG)([ea.Ay], () => (null != c ? ea.Ay.getClipByRemoteId(c) : null)),
        { onShareClick: m } = (0, er.A)(n),
        p = (0, h.bG)([ea.Ay], () => null != u && null != n && null != c && ea.Ay.wasClipSharedInChannel(c, n)),
        g = l.useCallback(
            (e) => {
                null != u &&
                    (e.stopPropagation(), m({ clips: [u], messageReference: { channel_id: n, message_id: a } }));
            },
            [m, u, n, a],
        );
    return !d || null == u || p
        ? null
        : (0, i.jsxs)("button", {
              className: s()(eu.eZ, { [eu.vu]: r, [eu.jn]: !o }),
              onClick: g,
              children: [
                  (0, i.jsx)(ec, { size: "refresh_sm", color: W.A.colors.WHITE }),
                  (0, i.jsx)(x.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: U.intl.string(D.default.YKst58),
                  }),
              ],
          });
}
var em = n(668534);
function ep(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: l,
            isActive: a,
            isVolumeExpanded: c,
            attachment: u,
            guildId: h,
            isFullScreen: m,
            showParticipants: p,
            showTextContent: g,
            channelId: f,
            messageId: A,
            showSpeakingIndicators: x,
            clipUserIds: v,
            durationSeconds: C,
        } = e,
        { activeLayer: E } = (0, d.X$)();
    return (0, i.jsx)(o.N, {
        theme: r.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: s()(em.MU, e),
                children: [
                    (0, i.jsx)(Q.A, {
                        createdAt: null != u.clip_created_at ? Date.parse(u.clip_created_at) : void 0,
                        participantIds: p ? v : [],
                        applicationId: u.application?.id,
                        title: u.title,
                        guildId: h,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: m,
                        activeLayer: E,
                        showTextContent: g,
                    }),
                    null != A &&
                        null != f &&
                        (0, i.jsx)(eh, {
                            isControlBarExpanded: l,
                            isPlayerActive: a,
                            attachment: u,
                            messageId: A,
                            channelId: f,
                        }),
                    x &&
                        null != u.clip_events_timeline &&
                        null != f &&
                        (0, i.jsx)(el, { guildId: h, timeline: u.clip_events_timeline, userIds: v, channelId: f }),
                    a &&
                        null != h &&
                        null != f &&
                        null != A &&
                        (0, i.jsx)(H, {
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: f,
                            messageId: A,
                            guildId: h,
                            hidden: !l || c,
                        }),
                    null != h &&
                        null != f &&
                        null != A &&
                        (0, i.jsx)(X, {
                            isActive: a,
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: f,
                            messageId: A,
                            guildId: h,
                            durationSeconds: u.duration_secs ?? C,
                            hidden: a && !l,
                        }),
                ],
            }),
    });
}
