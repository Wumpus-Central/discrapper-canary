n.d(t, { A: () => eI });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(494012),
    o = n(505124),
    u = n(43990),
    d = n(683574);
n(938796);
var c = n(221877),
    m = n(665260),
    p = n(17928),
    g = n(683063),
    h = n(922016),
    f = n(460905),
    x = n(110384),
    C = n(939249),
    I = n(834730),
    A = n(148494),
    j = n(565645),
    _ = n(822123),
    v = n(267889),
    E = n(228366),
    M = n(95701),
    y = n(232835),
    b = n(652215);
let N = (0, p.UT)(y.A, {
    getQueryId: (e, t, n, l, i) => (null != n && null != t && null != l && i ? e.id : null),
    get: (e) => (y.A.isReady(e.id) ? y.A.getMessages(e.id) : null),
    load: async (e, t, n, l) => {
        if (null == n || null == t) return;
        let i = e.id;
        await A.A.fetchMessages({ channelId: i, limit: 100 }),
            await E.h.dispatch({
                type: "THREAD_CREATE",
                channel: new M.Lt({
                    id: i,
                    parent_id: t,
                    type: b.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? b.eGj,
                    ownerId: l,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            });
    },
    getIsLoading: (e) => y.A.isLoadingMessages(e.id),
});
var T = n(451909),
    L = n(118517),
    S = n(747926),
    w = n(280450),
    k = n(734057),
    P = n(625494),
    R = n(475815);
let O = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var $ = n(307731),
    D = n(381941),
    H = n(711918),
    G = n(375708),
    V = n(455871);
function z(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function U(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: r,
            guildId: o,
            hidden: u = !1,
            containerWidth: E,
        } = e,
        M = n.id,
        U = (0, _.QZ)(o),
        Z = null != E && E < 460,
        B = U.slice(0, Z ? 2 : 3),
        Y = (0, p.bG)([y.A], () => y.A.getMessage(a, r), [a, r]),
        F = (0, p.bG)([k.A], () => k.A.getChannel(a), [a]),
        X = (0, p.bG)([k.A], () => k.A.getChannel(M), [M]),
        { enableMediaComments: Q } = O.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: J, videoRef: q } = (0, d.X$)(),
        W = (0, m.Lt)(n.flags ?? 0, b.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = N(n, a, o, Y?.author.id, Q && W),
        et = i.useRef(null);
    function en(e, t) {
        e?.stopPropagation(),
            (function (e) {
                if (null == F || null == Y || null == r || null == q?.current?.currentTime) return;
                let t =
                        null != e.id
                            ? !0 === e.animated
                                ? `<a:${e.originalName ?? e.name}:${e.id}>`
                                : `<:${e.originalName ?? e.name}:${e.id}>`
                            : "surrogates" in e && null != e.surrogates
                              ? e.surrogates
                              : e.name,
                    n = Y.author.id === w.default.getId();
                A.A.sendMessage(F.id, T.Ay.parse(F, t), !1, {
                    location: D.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: F.id, guild_id: F.getGuildId() ?? void 0, message_id: r },
                    allowedMentions: { replied_user: !n },
                    mediaMention: z(M, q),
                });
            })(t);
    }
    let el = ee?.length ?? 0;
    if (!Q || null == F || null == r) return null;
    let ei = G.intl.formatToPlainString(H.default.OYDyt2, { count: el });
    return (0, l.jsxs)(c.animated.div, {
        className: s()(V.M0, { [V.pd]: u }),
        inert: u,
        style: {
            opacity: (0, c.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (u ? 0 : `${e}`)),
            transform: (0, c.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, l.jsx)("div", {
                className: V.gm,
                children: B.map((e) =>
                    (0, l.jsx)(
                        g.u,
                        {
                            title: G.intl.formatToPlainString(H.default["CZCvn+"], { emoji: e.name }),
                            body: G.intl.string(H.default.wQFVGI),
                            children: (0, l.jsx)("button", {
                                type: "button",
                                className: V.x6,
                                onClick: (t) => en(t, e),
                                children: (0, l.jsx)(j.A, {
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
            (0, l.jsx)(K, {}),
            (0, l.jsx)(h.Y, {
                layerContext: J,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, l.jsx)(v.A, {
                        channel: F,
                        closePopout: t,
                        messageId: r,
                        pickerIntention: $.EmojiIntention.CHAT,
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
                    (0, l.jsx)(g.u, {
                        title: G.intl.string(H.default["ZEs/pI"]),
                        body: G.intl.string(H.default.K8Khlc),
                        targetElementRef: et,
                        children: (0, l.jsx)("button", {
                            ...e,
                            ref: et,
                            type: "button",
                            className: V.x6,
                            children: (0, l.jsx)(f.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, l.jsx)(g.u, {
                title: G.intl.string(H.default.y2TE38),
                body: G.intl.string(H.default.c3OIMS),
                children: (0, l.jsx)("button", {
                    type: "button",
                    className: V.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == F || null == Y || null == q?.current?.currentTime)) return;
                        R._U(q.current) && R.sP(q.current);
                        let t = Y.author.id === w.default.getId();
                        (0, L.Yf)({
                            channel: F,
                            message: Y,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !F.isPrivate() && !t,
                            mediaMention: z(M, q),
                        }),
                            P._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: F.id });
                    },
                    children: (0, l.jsx)(x.W, { size: "sm" }),
                }),
            }),
            el > 0 &&
                !Z &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(K, {}),
                        (0, l.jsx)(C.D, {
                            className: V.jC,
                            tag: "span",
                            onClick: function (e) {
                                e.stopPropagation(), null != X && (R._U(q.current) && R.sP(q.current), (0, S.JA)(X));
                            },
                            "aria-label": ei,
                            children: (0, l.jsx)(I.E, {
                                variant: "text-sm/semibold",
                                color: "text-link",
                                lineClamp: 1,
                                children: ei,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function K() {
    return (0, l.jsx)("div", { className: V.yF });
}
var Z = n(555115),
    B = n(717421),
    Y = n(534890),
    F = n(661531),
    X = n(97808),
    Q = n(778712),
    J = n(7584);
let q = /^<(a)?:(\w+):(\d+)>$/;
var W = n(521981),
    ee = n(466491);
function et(e) {
    return { opacity: e ? 1 : 0.4, width: `${e ? 20 : 12}px`, height: `${e ? 20 : 12}px` };
}
function en(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            durationSeconds: a,
            guildId: s,
            channelId: r,
            messageId: o,
            hidden: u = !1,
        } = e,
        { enableMediaComments: g } = O.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        h = (0, m.Lt)(n.flags ?? 0, b.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: f, isControlBarExpanded: x } = (0, d.X$)(),
        C = (0, p.bG)([y.A], () => y.A.getMessage(r, o), [r, o]),
        { data: I } = N(n, r, s, C?.author.id, g && h && f);
    return (i.useEffect(() => {
        f && N.refetch(n, r, s, C?.author.id, g && h && f);
    }, [f, n, r, s, C?.author.id, g, h]),
    !g || null == I || a <= 0)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  !u && (!f || !x) && (0, l.jsx)("div", { className: ee.s_ }),
                  (0, l.jsx)(c.animated.div, {
                      className: ee.IO,
                      style: {
                          transform: f
                              ? (0, c.to)([t.to({ range: [0, 1], output: [56, 0] })], (e) => `translateY(${e}px)`)
                              : "translateY(56px)",
                      },
                      children: I.map((e) => (0, l.jsx)(el, { hidden: u, message: e, durationSeconds: a }, e.id)),
                  }),
              ],
          });
}
function el(e) {
    let { message: t, durationSeconds: n, hidden: a } = e,
        s = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        r = i.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(q);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== J.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        o = i.useMemo(() => (null != t && "" !== t.content ? (0, W.Ay)(t, { formatInline: !0 }).content : null), [t]),
        { videoRef: u, isActive: m, isControlBarExpanded: p } = (0, d.X$)(),
        [h, f] = i.useState(!1),
        [x, I] = i.useState(!1),
        [_, v] = i.useState(!1);
    i.useEffect(() => {
        let e = u.current;
        if (null != e) return e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n);
        function n() {
            if (null == e) return;
            let n = e.currentTime,
                l = t?.mediaMention?.timestamp;
            null != l && f(1e3 >= Math.abs(1e3 * n - l));
        }
    }, [t?.mediaMention?.timestamp, u]);
    let E = h || !m || x,
        [M, y] = (0, B.z)(() => ({ ...et(E), config: { ...Z.n } }));
    if (
        (i.useEffect(() => {
            let e = !1;
            return (
                (async function () {
                    v(!0);
                    let t = await y(et(E));
                    !e && t.finished && v(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [y, E]),
        null == t)
    )
        return null;
    let b = (0, l.jsx)(C.D, {
        className: ee.xL,
        style: { left: s, display: a ? "none" : "block" },
        inert: a,
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                l = t.messageReference?.message_id;
            null != n && null != l && A.A.jumpToMessage({ channelId: n, messageId: l, flash: !0 });
        },
        children: (0, l.jsx)(c.animated.div, {
            className: ee.BC,
            style: M,
            children:
                null != r
                    ? (0, l.jsx)(j.A, {
                          emojiId: r.emojiId,
                          emojiName: r.emojiName,
                          shouldAnimate: h,
                          animated: r.animated,
                          surrogate: r.surrogate,
                          className: ee.Zg,
                      })
                    : (0, l.jsx)(Y.ChatIcon, {
                          colorClass: ee.Or,
                          color: F.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == o
        ? b
        : (0, l.jsx)(g.u, {
              positionKey: `${p}`,
              delay: 200,
              forceOpen: h && null == r && !_,
              asset: (0, l.jsx)(X.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: Q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: o,
              children: b,
          });
}
var ei = n(478531),
    ea = n(194498),
    es = n(376595),
    er = n(773503);
let eo = [];
function eu(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: s } = e,
        r = i.useMemo(() => es.H.fromAttachmentTimeline(t), [t]),
        [o, u] = i.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: c } = (0, d.X$)();
    return (
        (0, ea.A)(() => {
            let e = c.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            u(r.getEventsAtTimestamp(t));
        }),
        (0, l.jsx)(er.A, {
            speakingUserIds: o.speakingUserIds,
            activeSoundboards: eo,
            userIds: n,
            guildId: a,
            channelId: s,
        })
    );
}
var ed = n(915725),
    ec = n(458977),
    em = n(352527),
    ep = n(996682),
    eg = n(27989);
function eh(e) {
    let {
            size: t = "md",
            width: n,
            height: i,
            color: a = F.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...r
        } = e,
        o = (0, eg.J)(t),
        u = o?.width ?? n,
        d = o?.height ?? i;
    return (0, l.jsxs)("svg", {
        ...(0, ep.A)(r),
        width: u,
        height: d,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.8334 13.3379C29.1092 13.3381 29.3332 13.562 29.3334 13.8379V25.3379C29.3334 27.5469 27.5423 29.3376 25.3334 29.3379H6.66738C4.45825 29.3379 2.66739 27.547 2.66738 25.3379V13.8379C2.66755 13.5619 2.89134 13.3379 3.16738 13.3379H28.8334ZM14.5853 15.7471C14.0777 15.2396 13.2551 15.2396 12.7475 15.7471L8.74746 19.7471C8.50377 19.9908 8.3666 20.3213 8.3666 20.666C8.3666 20.9676 8.47106 21.2589 8.66054 21.4902L8.74746 21.5849L12.7475 25.5849C13.2551 26.0923 14.0777 26.0924 14.5853 25.5849C15.0927 25.0773 15.0927 24.2547 14.5853 23.7471L12.8041 21.9658H16.0004C18.4117 21.9662 20.3666 23.9216 20.3666 26.333C20.3668 27.0508 20.9495 27.6328 21.6674 27.6328C22.3847 27.6322 22.967 27.0504 22.9672 26.333C22.9672 22.4857 19.8476 19.3666 16.0004 19.3662H12.8041L14.5853 17.5849C15.0927 17.0773 15.0927 16.2547 14.5853 15.7471Z",
                fill: "string" == typeof a ? a : a.css,
                className: s,
            }),
            (0, l.jsx)("path", {
                d: "M9.27675 4.02342C9.67707 3.95309 9.99001 4.3646 9.81484 4.73143L6.81191 11.0146C6.74229 11.1603 6.60667 11.2639 6.44765 11.292L3.27382 11.8515C3.00188 11.8995 2.74267 11.7172 2.69472 11.4453L2.31777 9.31248C1.93416 7.13691 3.38731 5.06133 5.56289 4.67772L9.27675 4.02342Z",
                fill: "string" == typeof a ? a : a.css,
                className: s,
            }),
            (0, l.jsx)("path", {
                d: "M19.7807 2.17088C20.1811 2.10027 20.494 2.51195 20.3187 2.87889L17.3168 9.16209C17.2472 9.30779 17.1116 9.4114 16.9525 9.43944L10.8852 10.5088C10.4848 10.5792 10.1718 10.1676 10.3471 9.80077L13.35 3.51756C13.4197 3.37203 13.5554 3.26921 13.7143 3.2412L19.7807 2.17088Z",
                fill: "string" == typeof a ? a : a.css,
                className: s,
            }),
            (0, l.jsx)("path", {
                d: "M24.2221 1.39745C26.2944 1.17734 28.2121 2.59832 28.5795 4.68163L28.9564 6.81541C29.0042 7.08724 28.822 7.34658 28.5502 7.39452L21.39 8.65721C20.9897 8.72774 20.6769 8.31607 20.8519 7.9492L23.8539 1.66698C23.9239 1.52058 24.0607 1.4146 24.2221 1.39745Z",
                fill: "string" == typeof a ? a : a.css,
                className: s,
            }),
        ],
    });
}
var ef = n(879241);
function ex(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: r, isPlayerActive: o } = e,
        { enableDistributedClips: u } = ec.A.useConfig({ location: "DistributedClipShareCTA" }),
        d = t.clip_remote_id,
        c = (0, p.bG)([ed.Ay], () => (null != d ? ed.Ay.getClipByRemoteId(d) : null)),
        { onShareClick: m } = (0, em.A)(n),
        g = (0, p.bG)([ed.Ay], () => null != c && null != n && null != d && ed.Ay.wasClipSharedInChannel(d, n)),
        h = i.useCallback(
            (e) => {
                null != c &&
                    (e.stopPropagation(),
                    m({
                        clips: [c],
                        messageReference: { channel_id: n, message_id: a },
                        povTargetInformation:
                            null != t.duration_secs && null != t.clip_sync_timestamp
                                ? { duration: t.duration_secs, syncTimestamp: Date.parse(t.clip_sync_timestamp) }
                                : void 0,
                    }));
            },
            [m, c, n, a, t.duration_secs, t.clip_sync_timestamp],
        );
    return !u || null == c || g
        ? null
        : (0, l.jsxs)("button", {
              className: s()(ef.eZ, { [ef.vu]: r, [ef.jn]: !o }),
              onClick: h,
              children: [
                  (0, l.jsx)(eh, { size: "refresh_sm", color: F.A.colors.WHITE }),
                  (0, l.jsx)(I.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: G.intl.string(H.default.YKst58),
                  }),
              ],
          });
}
var eC = n(862649);
function eI(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: i,
            isActive: a,
            isVolumeExpanded: c,
            attachment: m,
            guildId: p,
            isFullScreen: g,
            showParticipants: h,
            showTextContent: f,
            channelId: x,
            messageId: C,
            showSpeakingIndicators: I,
            clipUserIds: A,
            durationSeconds: j,
            showTimelineComments: _,
        } = e,
        { activeLayer: v } = (0, d.X$)(),
        { ref: E, width: M } = (0, r.Ay)();
    return (0, l.jsx)(u.N, {
        theme: o.NJ.MIDNIGHT,
        children: (e) =>
            (0, l.jsxs)("div", {
                ref: E,
                className: s()(eC.MU, e),
                children: [
                    (0, l.jsx)(ei.A, {
                        createdAt: null != m.clip_created_at ? Date.parse(m.clip_created_at) : void 0,
                        participantIds: h ? A : [],
                        applicationId: m.application?.id,
                        title: m.title,
                        guildId: p,
                        playerState: t,
                        isControlBarExpanded: i,
                        isFullScreen: g,
                        activeLayer: v,
                        showTextContent: f,
                    }),
                    null != C &&
                        null != x &&
                        (0, l.jsx)(ex, {
                            isControlBarExpanded: i,
                            isPlayerActive: a,
                            attachment: m,
                            messageId: C,
                            channelId: x,
                        }),
                    I &&
                        null != m.clip_events_timeline &&
                        null != x &&
                        (0, l.jsx)(eu, { guildId: p, timeline: m.clip_events_timeline, userIds: A, channelId: x }),
                    a &&
                        null != p &&
                        null != x &&
                        null != C &&
                        (0, l.jsx)(U, {
                            controlBarAnimationSpring: n,
                            attachment: m,
                            channelId: x,
                            messageId: C,
                            guildId: p,
                            containerWidth: M,
                            hidden: !i || c,
                        }),
                    null != p &&
                        null != x &&
                        null != C &&
                        (0, l.jsx)(en, {
                            controlBarAnimationSpring: n,
                            attachment: m,
                            channelId: x,
                            messageId: C,
                            guildId: p,
                            durationSeconds: m.duration_secs ?? j,
                            hidden: !_,
                        }),
                ],
            }),
    });
}
