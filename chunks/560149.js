n.d(t, { A: () => eb });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    u = n(494012),
    s = n(505124),
    c = n(17928),
    o = n(43990),
    d = n(453903),
    m = n(363195),
    f = n(683574);
n(938796);
var h = n(941143),
    g = n(665260),
    p = n(683063),
    v = n(265872),
    x = n(460905),
    S = n(110384),
    E = n(939249),
    y = n(834730),
    A = n(148494),
    b = n(788026),
    C = n(822123),
    j = n(969602),
    I = n(73153),
    _ = n(95701),
    T = n(232835),
    M = n(652215);
let N = (0, c.UT)(T.A, {
    getQueryId: (e, t, n, r, l) => (null != n && null != t && null != r && l ? e.id : null),
    get: (e) => (T.A.isReady(e.id) ? T.A.getMessages(e.id) : null),
    load: async (e, t, n, r) => {
        if (null == n || null == t) return;
        let l = e.id;
        (await A.A.fetchMessages({ channelId: l, limit: 100 }),
            await I.h.dispatch({
                type: "THREAD_CREATE",
                channel: new _.Lt({
                    id: l,
                    parent_id: t,
                    type: M.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? M.eGj,
                    ownerId: r,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            }));
    },
    getIsLoading: (e) => T.A.isLoadingMessages(e.id),
});
var w = n(451909),
    L = n(118517),
    R = n(747926),
    k = n(280450),
    P = n(734057),
    O = n(625494),
    G = n(475815);
let V = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var D = n(307731),
    U = n(381941),
    H = n(507216),
    z = n(105292),
    $ = n(455871);
function F(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function Z(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: i,
            messageId: u,
            guildId: s,
            hidden: o = !1,
            containerWidth: d,
        } = e,
        m = n.id,
        I = (0, C.QZ)(s),
        _ = null != d && d < 460,
        Z = I.slice(0, _ ? 2 : 3),
        X = (0, c.bG)([T.A], () => T.A.getMessage(i, u), [i, u]),
        K = (0, c.bG)([P.A], () => P.A.getChannel(i), [i]),
        Y = (0, c.bG)([P.A], () => P.A.getChannel(m), [m]),
        { enableMediaComments: Q } = V.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: J, videoRef: q } = (0, f.X$)(),
        W = (0, g.Lt)(n.flags ?? 0, M.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = N(n, i, s, X?.author.id, Q && W),
        et = l.useRef(null);
    function en(e, t) {
        (e?.stopPropagation(),
            (function (e) {
                if (null == K || null == X || null == u || null == q?.current?.currentTime) return;
                let t =
                        null != e.id
                            ? !0 === e.animated
                                ? `<a:${e.originalName ?? e.name}:${e.id}>`
                                : `<:${e.originalName ?? e.name}:${e.id}>`
                            : "surrogates" in e && null != e.surrogates
                              ? e.surrogates
                              : e.name,
                    n = X.author.id === k.default.getId();
                A.A.sendMessage(K.id, w.Ay.parse(K, t), !1, {
                    location: U.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: K.id, guild_id: K.getGuildId() ?? void 0, message_id: u },
                    allowedMentions: { replied_user: !n },
                    mediaMention: F(m, q),
                });
            })(t));
    }
    let er = ee?.length ?? 0;
    if (!Q || null == K || null == u) return null;
    let el = z.intl.formatToPlainString(H.default.OYDyt2, { count: er });
    return (0, r.jsxs)(h.animated.div, {
        className: a()($.M0, { [$.pd]: o }),
        inert: o,
        style: {
            opacity: (0, h.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (o ? 0 : `${e}`)),
            transform: (0, h.to)(
                [t.to({ range: [0, 1], output: [50, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, r.jsx)("div", {
                className: $.gm,
                children: Z.map((e) =>
                    (0, r.jsx)(
                        p.u,
                        {
                            title: z.intl.formatToPlainString(H.default["CZCvn+"], { emoji: e.name }),
                            body: z.intl.string(H.default.wQFVGI),
                            children: (0, r.jsx)("button", {
                                type: "button",
                                className: $.x6,
                                onClick: (t) => en(t, e),
                                children: (0, r.jsx)(b.A, {
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
            (0, r.jsx)(B, {}),
            (0, r.jsx)(v.Y, {
                layerContext: J,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(j.A, {
                        channel: K,
                        closePopout: t,
                        messageId: u,
                        pickerIntention: D.EmojiIntention.CHAT,
                        onSelectEmoji: (e) => {
                            let { emoji: n } = e;
                            null != n && (en(void 0, n), t());
                        },
                    });
                },
                position: "right",
                align: "center",
                clickTrap: !0,
                children: (e) =>
                    (0, r.jsx)(p.u, {
                        title: z.intl.string(H.default["ZEs/pI"]),
                        body: z.intl.string(H.default.K8Khlc),
                        targetElementRef: et,
                        children: (0, r.jsx)("button", {
                            ...e,
                            ref: et,
                            type: "button",
                            className: $.x6,
                            children: (0, r.jsx)(x.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, r.jsx)(p.u, {
                title: z.intl.string(H.default.y2TE38),
                body: z.intl.string(H.default.c3OIMS),
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: $.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == K || null == X || null == q?.current?.currentTime)) return;
                        G._U(q.current) && G.sP(q.current);
                        let t = X.author.id === k.default.getId();
                        ((0, L.Yf)({
                            channel: K,
                            message: X,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !K.isPrivate() && !t,
                            mediaMention: F(m, q),
                        }),
                            O._.dispatch(M.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: K.id }));
                    },
                    children: (0, r.jsx)(S.W, { size: "sm" }),
                }),
            }),
            er > 0 &&
                !_ &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(B, {}),
                        (0, r.jsx)(E.D, {
                            className: $.jC,
                            tag: "span",
                            onClick: function (e) {
                                (e.stopPropagation(), null != Y && (G._U(q.current) && G.sP(q.current), (0, R.JA)(Y)));
                            },
                            "aria-label": el,
                            children: (0, r.jsx)(y.E, {
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
    return (0, r.jsx)("div", { className: $.yF });
}
var X = n(555115),
    K = n(717421),
    Y = n(534890),
    Q = n(661531),
    J = n(97808),
    q = n(778712),
    W = n(7584);
let ee = /^<(a)?:(\w+):(\d+)>$/;
var et = n(521981),
    en = n(466491);
function er(e) {
    return { opacity: e ? 1 : 0.4, width: `${e ? 20 : 12}px`, height: `${e ? 20 : 12}px` };
}
function el(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            durationSeconds: i,
            guildId: a,
            channelId: u,
            messageId: s,
            hidden: o = !1,
        } = e,
        { enableMediaComments: d } = V.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        m = (0, g.Lt)(n.flags ?? 0, M.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: p, isControlBarExpanded: v } = (0, f.X$)(),
        x = (0, c.bG)([T.A], () => T.A.getMessage(u, s), [u, s]),
        { data: S } = N(n, u, a, x?.author.id, d && m && p);
    return (l.useEffect(() => {
        p && N.refetch(n, u, a, x?.author.id, d && m && p);
    }, [p, n, u, a, x?.author.id, d, m]),
    !d || null == S || i <= 0)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !o && (!p || !v) && (0, r.jsx)("div", { className: en.s_ }),
                  (0, r.jsx)(h.animated.div, {
                      className: en.IO,
                      style: {
                          transform: p
                              ? (0, h.to)([t.to({ range: [0, 1], output: [60, 0] })], (e) => `translateY(${e}px)`)
                              : "translateY(60px)",
                      },
                      children: S.map((e) => (0, r.jsx)(ei, { hidden: o, message: e, durationSeconds: i }, e.id)),
                  }),
              ],
          });
}
function ei(e) {
    let { message: t, durationSeconds: n, hidden: i } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        u = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(ee);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== W.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        s = l.useMemo(() => (null != t && "" !== t.content ? (0, et.Ay)(t, { formatInline: !0 }).content : null), [t]),
        { videoRef: c, isActive: o, isControlBarExpanded: d } = (0, f.X$)(),
        [m, g] = l.useState(!1),
        [v, x] = l.useState(!1),
        [S, y] = l.useState(!1);
    l.useEffect(() => {
        let e = c.current;
        if (null != e) return (e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n));
        function n() {
            if (null == e) return;
            let n = e.currentTime,
                r = t?.mediaMention?.timestamp;
            null != r && g(1e3 >= Math.abs(1e3 * n - r));
        }
    }, [t?.mediaMention?.timestamp, c]);
    let C = m || !o || v,
        [j, I] = (0, K.z)(() => ({ ...er(C), config: { ...X.n } }));
    if (
        (l.useEffect(() => {
            let e = !1;
            return (
                (async function () {
                    y(!0);
                    let t = await I(er(C));
                    !e && t.finished && y(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [I, C]),
        null == t)
    )
        return null;
    let _ = (0, r.jsx)(E.D, {
        className: en.xL,
        style: { left: a, display: i ? "none" : "block" },
        inert: i,
        onMouseEnter: () => x(!0),
        onMouseLeave: () => x(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                r = t.messageReference?.message_id;
            null != n && null != r && A.A.jumpToMessage({ channelId: n, messageId: r, flash: !0 });
        },
        children: (0, r.jsx)(h.animated.div, {
            className: en.BC,
            style: j,
            children:
                null != u
                    ? (0, r.jsx)(b.A, {
                          emojiId: u.emojiId,
                          emojiName: u.emojiName,
                          shouldAnimate: m,
                          animated: u.animated,
                          surrogate: u.surrogate,
                          className: en.Zg,
                      })
                    : (0, r.jsx)(Y.ChatIcon, {
                          colorClass: en.Or,
                          color: Q.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == s
        ? _
        : (0, r.jsx)(p.u, {
              positionKey: `${d}`,
              forceOpen: m && null == u && !S,
              asset: (0, r.jsx)(J.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: s,
              children: _,
          });
}
var ea = n(478531),
    eu = n(194498),
    es = n(376595),
    ec = n(773503);
let eo = [];
function ed(e) {
    let { timeline: t, userIds: n, guildId: i, channelId: a } = e,
        u = l.useMemo(() => es.H.fromAttachmentTimeline(t), [t]),
        [s, c] = l.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: o } = (0, f.X$)();
    return (
        (0, eu.A)(() => {
            let e = o.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(u.getEventsAtTimestamp(t));
        }),
        (0, r.jsx)(ec.A, {
            speakingUserIds: s.speakingUserIds,
            activeSoundboards: eo,
            userIds: n,
            guildId: i,
            channelId: a,
        })
    );
}
var em = n(915725),
    ef = n(458977),
    eh = n(42502),
    eg = n(110742),
    ep = n(352527),
    ev = n(996682),
    ex = n(27989);
function eS(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: i = Q.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...u
        } = e,
        s = (0, ex.J)(t),
        c = s?.width ?? n,
        o = s?.height ?? l;
    return (0, r.jsxs)("svg", {
        ...(0, ev.A)(u),
        width: c,
        height: o,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, r.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.8334 13.3379C29.1092 13.3381 29.3332 13.562 29.3334 13.8379V25.3379C29.3334 27.5469 27.5423 29.3376 25.3334 29.3379H6.66738C4.45825 29.3379 2.66739 27.547 2.66738 25.3379V13.8379C2.66755 13.5619 2.89134 13.3379 3.16738 13.3379H28.8334ZM14.5853 15.7471C14.0777 15.2396 13.2551 15.2396 12.7475 15.7471L8.74746 19.7471C8.50377 19.9908 8.3666 20.3213 8.3666 20.666C8.3666 20.9676 8.47106 21.2589 8.66054 21.4902L8.74746 21.5849L12.7475 25.5849C13.2551 26.0923 14.0777 26.0924 14.5853 25.5849C15.0927 25.0773 15.0927 24.2547 14.5853 23.7471L12.8041 21.9658H16.0004C18.4117 21.9662 20.3666 23.9216 20.3666 26.333C20.3668 27.0508 20.9495 27.6328 21.6674 27.6328C22.3847 27.6322 22.967 27.0504 22.9672 26.333C22.9672 22.4857 19.8476 19.3666 16.0004 19.3662H12.8041L14.5853 17.5849C15.0927 17.0773 15.0927 16.2547 14.5853 15.7471Z",
                fill: "string" == typeof i ? i : i.css,
                className: a,
            }),
            (0, r.jsx)("path", {
                d: "M9.27675 4.02342C9.67707 3.95309 9.99001 4.3646 9.81484 4.73143L6.81191 11.0146C6.74229 11.1603 6.60667 11.2639 6.44765 11.292L3.27382 11.8515C3.00188 11.8995 2.74267 11.7172 2.69472 11.4453L2.31777 9.31248C1.93416 7.13691 3.38731 5.06133 5.56289 4.67772L9.27675 4.02342Z",
                fill: "string" == typeof i ? i : i.css,
                className: a,
            }),
            (0, r.jsx)("path", {
                d: "M19.7807 2.17088C20.1811 2.10027 20.494 2.51195 20.3187 2.87889L17.3168 9.16209C17.2472 9.30779 17.1116 9.4114 16.9525 9.43944L10.8852 10.5088C10.4848 10.5792 10.1718 10.1676 10.3471 9.80077L13.35 3.51756C13.4197 3.37203 13.5554 3.26921 13.7143 3.2412L19.7807 2.17088Z",
                fill: "string" == typeof i ? i : i.css,
                className: a,
            }),
            (0, r.jsx)("path", {
                d: "M24.2221 1.39745C26.2944 1.17734 28.2121 2.59832 28.5795 4.68163L28.9564 6.81541C29.0042 7.08724 28.822 7.34658 28.5502 7.39452L21.39 8.65721C20.9897 8.72774 20.6769 8.31607 20.8519 7.9492L23.8539 1.66698C23.9239 1.52058 24.0607 1.4146 24.2221 1.39745Z",
                fill: "string" == typeof i ? i : i.css,
                className: a,
            }),
        ],
    });
}
var eE = n(879241);
function ey(e) {
    let { attachment: t, channelId: n, messageId: i, isControlBarExpanded: u, isPlayerActive: s } = e,
        { enableDistributedClips: o } = ef.A.useConfig({ location: "DistributedClipShareCTA" }),
        d = (0, c.bG)(
            [em.Ay, k.default],
            () =>
                (function (e, t) {
                    let n,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : em.Ay,
                        l = r.getClips(),
                        i = e.clip_remote_id,
                        a = null != i ? r.getClipByRemoteId(i) : void 0;
                    if (null != a) return a;
                    let u = (0, eg.Vi)(e);
                    if (null == u || null == t || !e.clip_participants?.some((e) => e.id === t)) return;
                    let s = 0;
                    for (let e of Object.values(l)) {
                        let t = (0, eg.Gn)(e);
                        if (null == t) continue;
                        let r = (0, eg.hL)(u, t);
                        null != r && r > s && ((s = r), (n = e));
                    }
                    return n;
                })(t, k.default.getId(), em.Ay),
            [t],
        ),
        { onShareClick: m } = (0, ep.A)(n),
        f = (0, c.bG)([k.default, T.A], () => {
            let e = T.A.getMessage(n, i);
            return (
                null != e &&
                e.author?.id !== k.default.getId() &&
                (null == e.messageReference ||
                    T.A.getMessage(n, e.messageReference.message_id)?.author?.id !== k.default.getId())
            );
        }),
        h = (0, c.bG)([em.Ay], () => em.Ay.hasRepliedWithClip(i), [i]),
        g = l.useCallback(
            (e) => {
                null != d &&
                    (e.stopPropagation(),
                    m({
                        clips: [d],
                        messageReference: { channel_id: n, message_id: i },
                        povTargetInformation: (0, eh.A)(t),
                    }));
            },
            [m, d, n, i, t],
        );
    return o && null != d && !h && f
        ? (0, r.jsxs)("button", {
              className: a()(eE.eZ, { [eE.vu]: u, [eE.jn]: !s }),
              onClick: g,
              children: [
                  (0, r.jsx)(eS, { size: "refresh_sm", color: Q.A.colors.WHITE }),
                  (0, r.jsx)(y.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: z.intl.string(H.default.YKst58),
                  }),
              ],
          })
        : null;
}
var eA = n(862649);
function eb(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: l,
            isActive: i,
            isVolumeExpanded: h,
            attachment: g,
            guildId: p,
            isFullScreen: v,
            showParticipants: x,
            showTextContent: S,
            channelId: E,
            messageId: y,
            showSpeakingIndicators: A,
            clipUserIds: b,
            durationSeconds: C,
            showTimelineComments: j,
            setIsGridView: I,
            isGridView: _,
        } = e,
        T = (0, c.bG)([m.A], () => m.A.theme),
        { activeLayer: M } = (0, f.X$)(),
        { ref: N, width: w } = (0, u.Ay)();
    return (0, r.jsx)(o.N, {
        theme: s.NJ.ONYX,
        children: (e) =>
            (0, r.jsxs)("div", {
                ref: N,
                className: a()(eA.MU, e),
                children: [
                    (0, r.jsx)(ea.A, {
                        createdAt: null != g.clip_created_at ? Date.parse(g.clip_created_at) : void 0,
                        participantIds: x ? b : [],
                        applicationId: g.application?.id,
                        title: g.title,
                        guildId: p,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: v,
                        activeLayer: M,
                        showTextContent: S,
                        isGridView: _,
                        setIsGridView: I,
                    }),
                    !_ &&
                        null != y &&
                        null != E &&
                        (0, r.jsx)(ey, {
                            isControlBarExpanded: l,
                            isPlayerActive: i,
                            attachment: g,
                            messageId: y,
                            channelId: E,
                        }),
                    !_ &&
                        A &&
                        null != g.clip_events_timeline &&
                        null != E &&
                        (0, r.jsx)(ed, { guildId: p, timeline: g.clip_events_timeline, userIds: b, channelId: E }),
                    i &&
                        null != p &&
                        null != E &&
                        null != y &&
                        (0, r.jsx)(d.NA.Provider, {
                            value: T,
                            children: (0, r.jsx)(Z, {
                                controlBarAnimationSpring: n,
                                attachment: g,
                                channelId: E,
                                messageId: y,
                                guildId: p,
                                containerWidth: w,
                                hidden: !l || h,
                            }),
                        }),
                    null != p &&
                        null != E &&
                        null != y &&
                        (0, r.jsx)(el, {
                            controlBarAnimationSpring: n,
                            attachment: g,
                            channelId: E,
                            messageId: y,
                            guildId: p,
                            durationSeconds: g.duration_secs ?? C,
                            hidden: !j,
                        }),
                ],
            }),
    });
}
