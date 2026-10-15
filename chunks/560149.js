n.d(t, { A: () => ey });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    u = n(494012),
    s = n(505124),
    c = n(43990),
    o = n(683574);
n(938796);
var d = n(308941),
    m = n(665260),
    f = n(17928),
    h = n(683063),
    g = n(922016),
    p = n(460905),
    v = n(110384),
    x = n(939249),
    S = n(834730),
    E = n(148494),
    y = n(565645),
    b = n(822123),
    C = n(660484),
    A = n(73153),
    j = n(95701),
    I = n(232835),
    _ = n(652215);
let T = (0, f.UT)(I.A, {
    getQueryId: (e, t, n, r, l) => (null != n && null != t && null != r && l ? e.id : null),
    get: (e) => (I.A.isReady(e.id) ? I.A.getMessages(e.id) : null),
    load: async (e, t, n, r) => {
        if (null == n || null == t) return;
        let l = e.id;
        (await E.A.fetchMessages({ channelId: l, limit: 100 }),
            await A.h.dispatch({
                type: "THREAD_CREATE",
                channel: new j.Lt({
                    id: l,
                    parent_id: t,
                    type: _.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? _.eGj,
                    ownerId: r,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            }));
    },
    getIsLoading: (e) => I.A.isLoadingMessages(e.id),
});
var M = n(451909),
    N = n(118517),
    w = n(747926),
    L = n(280450),
    R = n(734057),
    k = n(625494),
    P = n(475815);
let O = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var G = n(307731),
    V = n(381941),
    D = n(268378),
    U = n(105292),
    H = n(455871);
function z(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function $(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: i,
            messageId: u,
            guildId: s,
            hidden: c = !1,
            containerWidth: A,
        } = e,
        j = n.id,
        $ = (0, b.QZ)(s),
        Z = null != A && A < 460,
        B = $.slice(0, Z ? 2 : 3),
        X = (0, f.bG)([I.A], () => I.A.getMessage(i, u), [i, u]),
        K = (0, f.bG)([R.A], () => R.A.getChannel(i), [i]),
        Y = (0, f.bG)([R.A], () => R.A.getChannel(j), [j]),
        { enableMediaComments: Q } = O.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: J, videoRef: q } = (0, o.X$)(),
        W = (0, m.Lt)(n.flags ?? 0, _.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = T(n, i, s, X?.author.id, Q && W),
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
                    n = X.author.id === L.default.getId();
                E.A.sendMessage(K.id, M.Ay.parse(K, t), !1, {
                    location: V.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: K.id, guild_id: K.getGuildId() ?? void 0, message_id: u },
                    allowedMentions: { replied_user: !n },
                    mediaMention: z(j, q),
                });
            })(t));
    }
    let er = ee?.length ?? 0;
    if (!Q || null == K || null == u) return null;
    let el = U.intl.formatToPlainString(D.default.OYDyt2, { count: er });
    return (0, r.jsxs)(d.animated.div, {
        className: a()(H.M0, { [H.pd]: c }),
        inert: c,
        style: {
            opacity: (0, d.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (c ? 0 : `${e}`)),
            transform: (0, d.to)(
                [t.to({ range: [0, 1], output: [50, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, r.jsx)("div", {
                className: H.gm,
                children: B.map((e) =>
                    (0, r.jsx)(
                        h.u,
                        {
                            title: U.intl.formatToPlainString(D.default["CZCvn+"], { emoji: e.name }),
                            body: U.intl.string(D.default.wQFVGI),
                            children: (0, r.jsx)("button", {
                                type: "button",
                                className: H.x6,
                                onClick: (t) => en(t, e),
                                children: (0, r.jsx)(y.A, {
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
            (0, r.jsx)(F, {}),
            (0, r.jsx)(g.Y, {
                layerContext: J,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(C.A, {
                        channel: K,
                        closePopout: t,
                        messageId: u,
                        pickerIntention: G.EmojiIntention.CHAT,
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
                    (0, r.jsx)(h.u, {
                        title: U.intl.string(D.default["ZEs/pI"]),
                        body: U.intl.string(D.default.K8Khlc),
                        targetElementRef: et,
                        children: (0, r.jsx)("button", {
                            ...e,
                            ref: et,
                            type: "button",
                            className: H.x6,
                            children: (0, r.jsx)(p.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, r.jsx)(h.u, {
                title: U.intl.string(D.default.y2TE38),
                body: U.intl.string(D.default.c3OIMS),
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: H.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == K || null == X || null == q?.current?.currentTime)) return;
                        P._U(q.current) && P.sP(q.current);
                        let t = X.author.id === L.default.getId();
                        ((0, N.Yf)({
                            channel: K,
                            message: X,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !K.isPrivate() && !t,
                            mediaMention: z(j, q),
                        }),
                            k._.dispatch(_.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: K.id }));
                    },
                    children: (0, r.jsx)(v.W, { size: "sm" }),
                }),
            }),
            er > 0 &&
                !Z &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(F, {}),
                        (0, r.jsx)(x.D, {
                            className: H.jC,
                            tag: "span",
                            onClick: function (e) {
                                (e.stopPropagation(), null != Y && (P._U(q.current) && P.sP(q.current), (0, w.JA)(Y)));
                            },
                            "aria-label": el,
                            children: (0, r.jsx)(S.E, {
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
function F() {
    return (0, r.jsx)("div", { className: H.yF });
}
var Z = n(555115),
    B = n(717421),
    X = n(534890),
    K = n(661531),
    Y = n(97808),
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
            durationSeconds: i,
            guildId: a,
            channelId: u,
            messageId: s,
            hidden: c = !1,
        } = e,
        { enableMediaComments: h } = O.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        g = (0, m.Lt)(n.flags ?? 0, _.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: p, isControlBarExpanded: v } = (0, o.X$)(),
        x = (0, f.bG)([I.A], () => I.A.getMessage(u, s), [u, s]),
        { data: S } = T(n, u, a, x?.author.id, h && g && p);
    return (l.useEffect(() => {
        p && T.refetch(n, u, a, x?.author.id, h && g && p);
    }, [p, n, u, a, x?.author.id, h, g]),
    !h || null == S || i <= 0)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !c && (!p || !v) && (0, r.jsx)("div", { className: ee.s_ }),
                  (0, r.jsx)(d.animated.div, {
                      className: ee.IO,
                      style: {
                          transform: p
                              ? (0, d.to)([t.to({ range: [0, 1], output: [60, 0] })], (e) => `translateY(${e}px)`)
                              : "translateY(60px)",
                      },
                      children: S.map((e) => (0, r.jsx)(er, { hidden: c, message: e, durationSeconds: i }, e.id)),
                  }),
              ],
          });
}
function er(e) {
    let { message: t, durationSeconds: n, hidden: i } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        u = l.useMemo(
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
        s = l.useMemo(() => (null != t && "" !== t.content ? (0, W.Ay)(t, { formatInline: !0 }).content : null), [t]),
        { videoRef: c, isActive: m, isControlBarExpanded: f } = (0, o.X$)(),
        [g, p] = l.useState(!1),
        [v, S] = l.useState(!1),
        [b, C] = l.useState(!1);
    l.useEffect(() => {
        let e = c.current;
        if (null != e) return (e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n));
        function n() {
            if (null == e) return;
            let n = e.currentTime,
                r = t?.mediaMention?.timestamp;
            null != r && p(1e3 >= Math.abs(1e3 * n - r));
        }
    }, [t?.mediaMention?.timestamp, c]);
    let A = g || !m || v,
        [j, I] = (0, B.z)(() => ({ ...et(A), config: { ...Z.n } }));
    if (
        (l.useEffect(() => {
            let e = !1;
            return (
                (async function () {
                    C(!0);
                    let t = await I(et(A));
                    !e && t.finished && C(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [I, A]),
        null == t)
    )
        return null;
    let _ = (0, r.jsx)(x.D, {
        className: ee.xL,
        style: { left: a, display: i ? "none" : "block" },
        inert: i,
        onMouseEnter: () => S(!0),
        onMouseLeave: () => S(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                r = t.messageReference?.message_id;
            null != n && null != r && E.A.jumpToMessage({ channelId: n, messageId: r, flash: !0 });
        },
        children: (0, r.jsx)(d.animated.div, {
            className: ee.BC,
            style: j,
            children:
                null != u
                    ? (0, r.jsx)(y.A, {
                          emojiId: u.emojiId,
                          emojiName: u.emojiName,
                          shouldAnimate: g,
                          animated: u.animated,
                          surrogate: u.surrogate,
                          className: ee.Zg,
                      })
                    : (0, r.jsx)(X.ChatIcon, {
                          colorClass: ee.Or,
                          color: K.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == s
        ? _
        : (0, r.jsx)(h.u, {
              positionKey: `${f}`,
              forceOpen: g && null == u && !b,
              asset: (0, r.jsx)(Y.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: Q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: s,
              children: _,
          });
}
var el = n(478531),
    ei = n(194498),
    ea = n(376595),
    eu = n(773503);
let es = [];
function ec(e) {
    let { timeline: t, userIds: n, guildId: i, channelId: a } = e,
        u = l.useMemo(() => ea.H.fromAttachmentTimeline(t), [t]),
        [s, c] = l.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: d } = (0, o.X$)();
    return (
        (0, ei.A)(() => {
            let e = d.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(u.getEventsAtTimestamp(t));
        }),
        (0, r.jsx)(eu.A, {
            speakingUserIds: s.speakingUserIds,
            activeSoundboards: es,
            userIds: n,
            guildId: i,
            channelId: a,
        })
    );
}
var eo = n(274372),
    ed = n(458977),
    em = n(42502),
    ef = n(110742),
    eh = n(352527),
    eg = n(996682),
    ep = n(27989);
function ev(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: i = K.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...u
        } = e,
        s = (0, ep.J)(t),
        c = s?.width ?? n,
        o = s?.height ?? l;
    return (0, r.jsxs)("svg", {
        ...(0, eg.A)(u),
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
var ex = n(879241);
function eS(e) {
    let { attachment: t, channelId: n, messageId: i, isControlBarExpanded: u, isPlayerActive: s } = e,
        { enableDistributedClips: c } = ed.A.useConfig({ location: "DistributedClipShareCTA" }),
        o = (0, f.bG)(
            [eo.Ay, L.default],
            () =>
                (function (e, t) {
                    let n,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eo.Ay,
                        l = r.getClips(),
                        i = e.clip_remote_id,
                        a = null != i ? r.getClipByRemoteId(i) : void 0;
                    if (null != a) return a;
                    let u = (0, ef.Vi)(e);
                    if (null == u || null == t || !e.clip_participants?.some((e) => e.id === t)) return;
                    let s = 0;
                    for (let e of Object.values(l)) {
                        let t = (0, ef.Gn)(e);
                        if (null == t) continue;
                        let r = (0, ef.hL)(u, t);
                        null != r && r > s && ((s = r), (n = e));
                    }
                    return n;
                })(t, L.default.getId(), eo.Ay),
            [t],
        ),
        { onShareClick: d } = (0, eh.A)(n),
        m = (0, f.bG)([L.default, I.A], () => {
            let e = I.A.getMessage(n, i);
            return (
                null != e &&
                e.author?.id !== L.default.getId() &&
                (null == e.messageReference ||
                    I.A.getMessage(n, e.messageReference.message_id)?.author?.id !== L.default.getId())
            );
        }),
        h = (0, f.bG)([eo.Ay], () => eo.Ay.hasRepliedWithClip(i), [i]),
        g = l.useCallback(
            (e) => {
                null != o &&
                    (e.stopPropagation(),
                    d({
                        clips: [o],
                        messageReference: { channel_id: n, message_id: i },
                        povTargetInformation: (0, em.A)(t),
                    }));
            },
            [d, o, n, i, t],
        );
    return c && null != o && !h && m
        ? (0, r.jsxs)("button", {
              className: a()(ex.eZ, { [ex.vu]: u, [ex.jn]: !s }),
              onClick: g,
              children: [
                  (0, r.jsx)(ev, { size: "refresh_sm", color: K.A.colors.WHITE }),
                  (0, r.jsx)(S.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: U.intl.string(D.default.YKst58),
                  }),
              ],
          })
        : null;
}
var eE = n(862649);
function ey(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: l,
            isActive: i,
            isVolumeExpanded: d,
            attachment: m,
            guildId: f,
            isFullScreen: h,
            showParticipants: g,
            showTextContent: p,
            channelId: v,
            messageId: x,
            showSpeakingIndicators: S,
            clipUserIds: E,
            durationSeconds: y,
            showTimelineComments: b,
            setIsGridView: C,
            isGridView: A,
        } = e,
        { activeLayer: j } = (0, o.X$)(),
        { ref: I, width: _ } = (0, u.Ay)();
    return (0, r.jsx)(c.N, {
        theme: s.NJ.ONYX,
        children: (e) =>
            (0, r.jsxs)("div", {
                ref: I,
                className: a()(eE.MU, e),
                children: [
                    (0, r.jsx)(el.A, {
                        createdAt: null != m.clip_created_at ? Date.parse(m.clip_created_at) : void 0,
                        participantIds: g ? E : [],
                        applicationId: m.application?.id,
                        title: m.title,
                        guildId: f,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: h,
                        activeLayer: j,
                        showTextContent: p,
                        isGridView: A,
                        setIsGridView: C,
                    }),
                    !A &&
                        null != x &&
                        null != v &&
                        (0, r.jsx)(eS, {
                            isControlBarExpanded: l,
                            isPlayerActive: i,
                            attachment: m,
                            messageId: x,
                            channelId: v,
                        }),
                    !A &&
                        S &&
                        null != m.clip_events_timeline &&
                        null != v &&
                        (0, r.jsx)(ec, { guildId: f, timeline: m.clip_events_timeline, userIds: E, channelId: v }),
                    i &&
                        null != f &&
                        null != v &&
                        null != x &&
                        (0, r.jsx)($, {
                            controlBarAnimationSpring: n,
                            attachment: m,
                            channelId: v,
                            messageId: x,
                            guildId: f,
                            containerWidth: _,
                            hidden: !l || d,
                        }),
                    null != f &&
                        null != v &&
                        null != x &&
                        (0, r.jsx)(en, {
                            controlBarAnimationSpring: n,
                            attachment: m,
                            channelId: v,
                            messageId: x,
                            guildId: f,
                            durationSeconds: m.duration_secs ?? y,
                            hidden: !b,
                        }),
                ],
            }),
    });
}
