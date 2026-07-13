n.d(t, { A: () => eh });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(505124),
    o = n(43990);
n(938796);
var d = n(580929),
    c = n(665260),
    u = n(17928),
    h = n(459192),
    m = n(922016),
    p = n(460905),
    g = n(110384),
    f = n(939249),
    A = n(834730),
    x = n(493336),
    v = n(565645),
    E = n(822123),
    C = n(334295),
    I = n(228366),
    _ = n(95701),
    T = n(232835),
    j = n(652215);
let S = (0, u.UT)(T.A, {
    getQueryId: (e, t, n, i, l) => (null != n && null != t && null != i && l ? e.id : null),
    get: (e) => (T.A.isReady(e.id) ? T.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let l = e.id;
        await x.A.fetchMessages({ channelId: l, limit: 100 }),
            await I.h.dispatch({
                type: "THREAD_CREATE",
                channel: new _.Lt({
                    id: l,
                    parent_id: t,
                    type: j.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? j.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => T.A.isLoadingMessages(e.id),
});
var N = n(451909),
    y = n(118517),
    b = n(747926),
    M = n(734057),
    R = n(625494);
let k = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var w = n(307731),
    O = n(381941),
    L = n(16590),
    P = n(375708),
    U = n(909022);
function D(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function G(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: s,
            messageId: r,
            guildId: o,
            videoRef: I,
            hidden: _ = !1,
        } = e,
        G = n.id,
        H = (0, E.QZ)(o).slice(0, 3),
        V = (0, u.bG)([T.A], () => T.A.getMessage(s, r), [s, r]),
        W = (0, u.bG)([M.A], () => M.A.getChannel(s), [s]),
        B = (0, u.bG)([M.A], () => M.A.getChannel(G), [G]),
        { enableMediaComments: Z } = k.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        z = (0, c.Lt)(n.flags ?? 0, j.sbO.HAS_TIMELINE_COMMENTS),
        { data: K } = S(n, s, o, V?.author.id, Z && z),
        q = l.useRef(null);
    function Y(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == W || null == r || null == I?.current?.currentTime) return;
                let t =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.originalName ?? e.name}:${e.id}>`
                            : `<:${e.originalName ?? e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                x.A.sendMessage(W.id, N.Ay.parse(W, t), !1, {
                    location: O.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: W.id, guild_id: W.getGuildId() ?? void 0, message_id: r },
                    mediaMention: D(G, I),
                });
            })(t);
    }
    let $ = K?.length ?? 0;
    if (!Z || null == W || null == r) return null;
    let Q = P.intl.formatToPlainString(L.default.OYDyt2, { count: $ });
    return (0, i.jsxs)(d.animated.div, {
        className: a()(U.M0, { [U.pd]: _ }),
        inert: _,
        style: {
            opacity: (0, d.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (_ ? 0 : `${e}`)),
            transform: (0, d.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: U.gm,
                children: H.map((e) =>
                    (0, i.jsx)(
                        h.u,
                        {
                            title: P.intl.formatToPlainString(L.default["CZCvn+"], { emoji: e.name }),
                            body: P.intl.string(L.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: U.x6,
                                onClick: (t) => Y(t, e),
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
            (0, i.jsx)(F, {}),
            (0, i.jsx)(m.Y, {
                targetElementRef: q,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(C.A, {
                        channel: W,
                        closePopout: t,
                        messageId: r,
                        pickerIntention: w.EmojiIntention.CHAT,
                        onSelectEmoji: (e) => {
                            let { emoji: n } = e;
                            null != n && (Y(void 0, n), t());
                        },
                    });
                },
                position: "top",
                align: "center",
                clickTrap: !0,
                children: (e) =>
                    (0, i.jsx)(h.u, {
                        title: P.intl.string(L.default["ZEs/pI"]),
                        body: P.intl.string(L.default.K8Khlc),
                        targetElementRef: q,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: q,
                            type: "button",
                            className: U.x6,
                            children: (0, i.jsx)(p.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(h.u, {
                title: P.intl.string(L.default.y2TE38),
                body: P.intl.string(L.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: U.x6,
                    onClick: function (e) {
                        e.stopPropagation(),
                            null == W ||
                                null == V ||
                                (null != I?.current?.currentTime &&
                                    ((0, y.Yf)({
                                        channel: W,
                                        message: V,
                                        shouldMention: !e.shiftKey,
                                        showMentionToggle: !W.isPrivate(),
                                        mediaMention: D(G, I),
                                    }),
                                    R._.dispatch(j.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: W.id })));
                    },
                    children: (0, i.jsx)(g.W, { size: "sm" }),
                }),
            }),
            $ > 0 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(F, {}),
                        (0, i.jsx)(f.D, {
                            className: U.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != B && (0, b.JA)(B);
                            },
                            "aria-label": Q,
                            children: (0, i.jsx)(A.E, {
                                variant: "text-sm/semibold",
                                color: "text-link",
                                lineClamp: 1,
                                children: Q,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function F() {
    return (0, i.jsx)("div", { className: U.yF });
}
var H = n(534890),
    V = n(661531),
    W = n(97808),
    B = n(778712),
    Z = n(7584);
let z = /^<(a)?:(\w+):(\d+)>$/;
var K = n(465364),
    q = n(933668);
function Y(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            isActive: l,
            durationSeconds: s,
            guildId: a,
            channelId: r,
            messageId: o,
            hidden: h = !1,
        } = e,
        { enableMediaComments: m } = k.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        p = (0, c.Lt)(n.flags ?? 0, j.sbO.HAS_TIMELINE_COMMENTS),
        g = (0, u.bG)([T.A], () => T.A.getMessage(r, o), [r, o]),
        { data: f } = S(n, r, a, g?.author.id, m && p && l);
    return !m || null == f || s <= 0
        ? null
        : (0, i.jsx)(d.animated.div, {
              className: q.IO,
              inert: h,
              style: {
                  opacity: l ? (0, d.to)(t.to({ range: [0.5, 1], output: [0, 1] }), (e) => (h ? 0 : `${e}`)) : 1,
                  transform: l
                      ? (0, d.to)([t.to({ range: [0, 1], output: [96, 0] })], (e) => `translateY(${e}px)`)
                      : "translateY(60px)",
              },
              children: f.map((e) => (0, i.jsx)($, { message: e, durationSeconds: s }, e.id)),
          });
}
function $(e) {
    let { message: t, durationSeconds: n } = e,
        s = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        a = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(z);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== Z.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        r = l.useMemo(() => (null != t && "" !== t.content ? (0, K.Ay)(t, { formatInline: !0 }).content : null), [t]);
    if (null == t) return null;
    let o = (0, i.jsx)(f.D, {
        className: q.xL,
        style: { left: s },
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && x.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children:
            null != a
                ? (0, i.jsx)(v.A, {
                      emojiId: a.emojiId,
                      emojiName: a.emojiName,
                      shouldAnimate: !1,
                      animated: a.animated,
                      surrogate: a.surrogate,
                      className: q.Zg,
                  })
                : (0, i.jsx)(H.o, { colorClass: q.Or, color: V.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == r
        ? o
        : (0, i.jsx)(h.u, {
              asset: (0, i.jsx)(W.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: B._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: r,
              children: o,
          });
}
var Q = n(783384),
    X = n(194498),
    J = n(376595),
    ee = n(773503);
let et = [];
function en(e) {
    let { timeline: t, userIds: n, videoRef: s, guildId: a, channelId: r } = e,
        o = l.useMemo(() => J.H.fromAttachmentTimeline(t), [t]),
        [d, c] = l.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, X.A)(() => {
            let e = s.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(o.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(ee.A, {
            speakingUserIds: d.speakingUserIds,
            activeSoundboards: et,
            userIds: n,
            guildId: a,
            channelId: r,
        })
    );
}
var ei = n(274372),
    el = n(458977),
    es = n(352527),
    ea = n(996682),
    er = n(27989);
function eo(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: s = V.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...r
        } = e,
        o = (0, er.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, ea.A)(r),
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
var ed = n(310882);
function ec(e) {
    let { attachment: t, channelId: n, messageId: s, isControlBarExpanded: r, isPlayerActive: o } = e,
        { enableDistributedClips: d } = el.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        h = (0, u.bG)([ei.Ay], () => (null != c ? ei.Ay.getClipByRemoteId(c) : null)),
        { onShareClick: m } = (0, es.A)(n),
        p = (0, u.bG)([ei.Ay], () => null != h && null != n && null != c && ei.Ay.wasClipSharedInChannel(c, n)),
        g = l.useCallback(
            (e) => {
                null != h &&
                    (e.stopPropagation(), m({ clips: [h], messageReference: { channel_id: n, message_id: s } }));
            },
            [m, h, n, s],
        );
    return !d || null == h || p
        ? null
        : (0, i.jsxs)("button", {
              className: a()(ed.eZ, { [ed.vu]: r, [ed.jn]: !o }),
              onClick: g,
              children: [
                  (0, i.jsx)(eo, { size: "refresh_sm", color: V.A.colors.WHITE }),
                  (0, i.jsx)(A.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: P.intl.string(L.default.YKst58),
                  }),
              ],
          });
}
var eu = n(834926);
function eh(e) {
    let {
        playerState: t,
        controlBarAnimationSpring: n,
        isControlBarExpanded: l,
        videoRef: s,
        isActive: d,
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
        durationSeconds: E,
    } = e;
    return (0, i.jsx)(o.N, {
        theme: r.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(eu.MU, e),
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
                        showTextContent: g,
                    }),
                    null != A &&
                        null != f &&
                        (0, i.jsx)(ec, {
                            isControlBarExpanded: l,
                            isPlayerActive: d,
                            attachment: u,
                            messageId: A,
                            channelId: f,
                        }),
                    x &&
                        null != u.clip_events_timeline &&
                        null != s &&
                        null != f &&
                        (0, i.jsx)(en, {
                            guildId: h,
                            timeline: u.clip_events_timeline,
                            videoRef: s,
                            userIds: v,
                            channelId: f,
                        }),
                    d &&
                        null != h &&
                        null != f &&
                        null != A &&
                        (0, i.jsx)(G, {
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: f,
                            messageId: A,
                            guildId: h,
                            videoRef: s,
                            hidden: !l || c,
                        }),
                    null != h &&
                        null != f &&
                        null != A &&
                        (0, i.jsx)(Y, {
                            isActive: d,
                            controlBarAnimationSpring: n,
                            attachment: u,
                            channelId: f,
                            messageId: A,
                            guildId: h,
                            durationSeconds: u.duration_secs ?? E,
                            hidden: d && !l,
                        }),
                ],
            }),
    });
}
