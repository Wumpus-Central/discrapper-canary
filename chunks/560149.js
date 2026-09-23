n.d(t, { A: () => eb });
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(494012),
    s = n(505124),
    c = n(43990),
    o = n(683574);
n(938796);
var d = n(498516),
    m = n(665260),
    f = n(17928),
    g = n(683063),
    h = n(922016),
    p = n(460905),
    v = n(110384),
    x = n(939249),
    S = n(834730),
    C = n(148494),
    b = n(565645),
    y = n(822123),
    E = n(267889),
    j = n(228366),
    A = n(95701),
    I = n(232835),
    T = n(652215);
let M = (0, f.UT)(I.A, {
    getQueryId: (e, t, n, r, l) => (null != n && null != t && null != r && l ? e.id : null),
    get: (e) => (I.A.isReady(e.id) ? I.A.getMessages(e.id) : null),
    load: async (e, t, n, r) => {
        if (null == n || null == t) return;
        let l = e.id;
        (await C.A.fetchMessages({ channelId: l, limit: 100 }),
            await j.h.dispatch({
                type: "THREAD_CREATE",
                channel: new A.Lt({
                    id: l,
                    parent_id: t,
                    type: T.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? T.eGj,
                    ownerId: r,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            }));
    },
    getIsLoading: (e) => I.A.isLoadingMessages(e.id),
});
var _ = n(451909),
    N = n(118517),
    L = n(747926),
    k = n(280450),
    R = n(734057),
    w = n(625494),
    P = n(475815);
let O = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var D = n(307731),
    V = n(381941),
    U = n(704796),
    H = n(375708),
    z = n(455871);
function F(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function G(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: u,
            guildId: s,
            hidden: c = !1,
            containerWidth: j,
        } = e,
        A = n.id,
        G = (0, y.QZ)(s),
        Z = null != j && j < 460,
        K = G.slice(0, Z ? 2 : 3),
        X = (0, f.bG)([I.A], () => I.A.getMessage(a, u), [a, u]),
        Y = (0, f.bG)([R.A], () => R.A.getChannel(a), [a]),
        B = (0, f.bG)([R.A], () => R.A.getChannel(A), [A]),
        { enableMediaComments: Q } = O.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: q, videoRef: W } = (0, o.X$)(),
        J = (0, m.Lt)(n.flags ?? 0, T.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = M(n, a, s, X?.author.id, Q && J),
        et = l.useRef(null);
    function en(e, t) {
        (e?.stopPropagation(),
            (function (e) {
                if (null == Y || null == X || null == u || null == W?.current?.currentTime) return;
                let t =
                        null != e.id
                            ? !0 === e.animated
                                ? `<a:${e.originalName ?? e.name}:${e.id}>`
                                : `<:${e.originalName ?? e.name}:${e.id}>`
                            : "surrogates" in e && null != e.surrogates
                              ? e.surrogates
                              : e.name,
                    n = X.author.id === k.default.getId();
                C.A.sendMessage(Y.id, _.Ay.parse(Y, t), !1, {
                    location: V.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: Y.id, guild_id: Y.getGuildId() ?? void 0, message_id: u },
                    allowedMentions: { replied_user: !n },
                    mediaMention: F(A, W),
                });
            })(t));
    }
    let er = ee?.length ?? 0;
    if (!Q || null == Y || null == u) return null;
    let el = H.intl.formatToPlainString(U.default.OYDyt2, { count: er });
    return (0, r.jsxs)(d.animated.div, {
        className: i()(z.M0, { [z.pd]: c }),
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
                className: z.gm,
                children: K.map((e) =>
                    (0, r.jsx)(
                        g.u,
                        {
                            title: H.intl.formatToPlainString(U.default["CZCvn+"], { emoji: e.name }),
                            body: H.intl.string(U.default.wQFVGI),
                            children: (0, r.jsx)("button", {
                                type: "button",
                                className: z.x6,
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
            (0, r.jsx)($, {}),
            (0, r.jsx)(h.Y, {
                layerContext: q,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(E.A, {
                        channel: Y,
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
                    (0, r.jsx)(g.u, {
                        title: H.intl.string(U.default["ZEs/pI"]),
                        body: H.intl.string(U.default.K8Khlc),
                        targetElementRef: et,
                        children: (0, r.jsx)("button", {
                            ...e,
                            ref: et,
                            type: "button",
                            className: z.x6,
                            children: (0, r.jsx)(p.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, r.jsx)(g.u, {
                title: H.intl.string(U.default.y2TE38),
                body: H.intl.string(U.default.c3OIMS),
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: z.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == Y || null == X || null == W?.current?.currentTime)) return;
                        P._U(W.current) && P.sP(W.current);
                        let t = X.author.id === k.default.getId();
                        ((0, N.Yf)({
                            channel: Y,
                            message: X,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !Y.isPrivate() && !t,
                            mediaMention: F(A, W),
                        }),
                            w._.dispatch(T.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: Y.id }));
                    },
                    children: (0, r.jsx)(v.W, { size: "sm" }),
                }),
            }),
            er > 0 &&
                !Z &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)($, {}),
                        (0, r.jsx)(x.D, {
                            className: z.jC,
                            tag: "span",
                            onClick: function (e) {
                                (e.stopPropagation(), null != B && (P._U(W.current) && P.sP(W.current), (0, L.JA)(B)));
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
function $() {
    return (0, r.jsx)("div", { className: z.yF });
}
var Z = n(555115),
    K = n(717421),
    X = n(534890),
    Y = n(661531),
    B = n(97808),
    Q = n(778712),
    q = n(7584);
let W = /^<(a)?:(\w+):(\d+)>$/;
var J = n(521981),
    ee = n(466491);
function et(e) {
    return { opacity: e ? 1 : 0.4, width: `${e ? 20 : 12}px`, height: `${e ? 20 : 12}px` };
}
function en(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            durationSeconds: a,
            guildId: i,
            channelId: u,
            messageId: s,
            hidden: c = !1,
        } = e,
        { enableMediaComments: g } = O.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        h = (0, m.Lt)(n.flags ?? 0, T.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: p, isControlBarExpanded: v } = (0, o.X$)(),
        x = (0, f.bG)([I.A], () => I.A.getMessage(u, s), [u, s]),
        { data: S } = M(n, u, i, x?.author.id, g && h && p);
    return (l.useEffect(() => {
        p && M.refetch(n, u, i, x?.author.id, g && h && p);
    }, [p, n, u, i, x?.author.id, g, h]),
    !g || null == S || a <= 0)
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
                      children: S.map((e) => (0, r.jsx)(er, { hidden: c, message: e, durationSeconds: a }, e.id)),
                  }),
              ],
          });
}
function er(e) {
    let { message: t, durationSeconds: n, hidden: a } = e,
        i = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        u = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(W);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== q.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        s = l.useMemo(() => (null != t && "" !== t.content ? (0, J.Ay)(t, { formatInline: !0 }).content : null), [t]),
        { videoRef: c, isActive: m, isControlBarExpanded: f } = (0, o.X$)(),
        [h, p] = l.useState(!1),
        [v, S] = l.useState(!1),
        [y, E] = l.useState(!1);
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
    let j = h || !m || v,
        [A, I] = (0, K.z)(() => ({ ...et(j), config: { ...Z.n } }));
    if (
        (l.useEffect(() => {
            let e = !1;
            return (
                (async function () {
                    E(!0);
                    let t = await I(et(j));
                    !e && t.finished && E(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [I, j]),
        null == t)
    )
        return null;
    let T = (0, r.jsx)(x.D, {
        className: ee.xL,
        style: { left: i, display: a ? "none" : "block" },
        inert: a,
        onMouseEnter: () => S(!0),
        onMouseLeave: () => S(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                r = t.messageReference?.message_id;
            null != n && null != r && C.A.jumpToMessage({ channelId: n, messageId: r, flash: !0 });
        },
        children: (0, r.jsx)(d.animated.div, {
            className: ee.BC,
            style: A,
            children:
                null != u
                    ? (0, r.jsx)(b.A, {
                          emojiId: u.emojiId,
                          emojiName: u.emojiName,
                          shouldAnimate: h,
                          animated: u.animated,
                          surrogate: u.surrogate,
                          className: ee.Zg,
                      })
                    : (0, r.jsx)(X.ChatIcon, {
                          colorClass: ee.Or,
                          color: Y.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == s
        ? T
        : (0, r.jsx)(g.u, {
              positionKey: `${f}`,
              forceOpen: h && null == u && !y,
              asset: (0, r.jsx)(B.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: Q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: s,
              children: T,
          });
}
var el = n(478531),
    ea = n(194498),
    ei = n(376595),
    eu = n(773503);
let es = [];
function ec(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: i } = e,
        u = l.useMemo(() => ei.H.fromAttachmentTimeline(t), [t]),
        [s, c] = l.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: d } = (0, o.X$)();
    return (
        (0, ea.A)(() => {
            let e = d.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(u.getEventsAtTimestamp(t));
        }),
        (0, r.jsx)(eu.A, {
            speakingUserIds: s.speakingUserIds,
            activeSoundboards: es,
            userIds: n,
            guildId: a,
            channelId: i,
        })
    );
}
var eo = n(915725),
    ed = n(458977),
    em = n(42502),
    ef = n(110742),
    eg = n(352527),
    eh = n(996682),
    ep = n(27989);
function ev(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = Y.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: i = "",
            ...u
        } = e,
        s = (0, ep.J)(t),
        c = s?.width ?? n,
        o = s?.height ?? l;
    return (0, r.jsxs)("svg", {
        ...(0, eh.A)(u),
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
                fill: "string" == typeof a ? a : a.css,
                className: i,
            }),
            (0, r.jsx)("path", {
                d: "M9.27675 4.02342C9.67707 3.95309 9.99001 4.3646 9.81484 4.73143L6.81191 11.0146C6.74229 11.1603 6.60667 11.2639 6.44765 11.292L3.27382 11.8515C3.00188 11.8995 2.74267 11.7172 2.69472 11.4453L2.31777 9.31248C1.93416 7.13691 3.38731 5.06133 5.56289 4.67772L9.27675 4.02342Z",
                fill: "string" == typeof a ? a : a.css,
                className: i,
            }),
            (0, r.jsx)("path", {
                d: "M19.7807 2.17088C20.1811 2.10027 20.494 2.51195 20.3187 2.87889L17.3168 9.16209C17.2472 9.30779 17.1116 9.4114 16.9525 9.43944L10.8852 10.5088C10.4848 10.5792 10.1718 10.1676 10.3471 9.80077L13.35 3.51756C13.4197 3.37203 13.5554 3.26921 13.7143 3.2412L19.7807 2.17088Z",
                fill: "string" == typeof a ? a : a.css,
                className: i,
            }),
            (0, r.jsx)("path", {
                d: "M24.2221 1.39745C26.2944 1.17734 28.2121 2.59832 28.5795 4.68163L28.9564 6.81541C29.0042 7.08724 28.822 7.34658 28.5502 7.39452L21.39 8.65721C20.9897 8.72774 20.6769 8.31607 20.8519 7.9492L23.8539 1.66698C23.9239 1.52058 24.0607 1.4146 24.2221 1.39745Z",
                fill: "string" == typeof a ? a : a.css,
                className: i,
            }),
        ],
    });
}
var ex = n(879241);
function eS(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: u, isPlayerActive: s } = e,
        { enableDistributedClips: c } = ed.A.useConfig({ location: "DistributedClipShareCTA" }),
        o = (0, f.bG)(
            [eo.Ay, k.default],
            () =>
                (function (e, t) {
                    let n,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eo.Ay,
                        l = r.getClips(),
                        a = e.clip_remote_id,
                        i = null != a ? r.getClipByRemoteId(a) : void 0;
                    if (null != i) return i;
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
                })(t, k.default.getId(), eo.Ay),
            [t],
        ),
        { onShareClick: d } = (0, eg.A)(n),
        m = (0, f.bG)([k.default, I.A], () => {
            let e = I.A.getMessage(n, a);
            return (
                null != e &&
                e.author?.id !== k.default.getId() &&
                (null == e.messageReference ||
                    I.A.getMessage(n, e.messageReference.message_id)?.author?.id !== k.default.getId())
            );
        }),
        g = (0, f.bG)([eo.Ay], () => eo.Ay.hasRepliedWithClip(a), [a]),
        h = l.useCallback(
            (e) => {
                null != o &&
                    (e.stopPropagation(),
                    d({
                        clips: [o],
                        messageReference: { channel_id: n, message_id: a },
                        povTargetInformation: (0, em.A)(t),
                    }));
            },
            [d, o, n, a, t],
        );
    return c && null != o && !g && m
        ? (0, r.jsxs)("button", {
              className: i()(ex.eZ, { [ex.vu]: u, [ex.jn]: !s }),
              onClick: h,
              children: [
                  (0, r.jsx)(ev, { size: "refresh_sm", color: Y.A.colors.WHITE }),
                  (0, r.jsx)(S.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: H.intl.string(U.default.YKst58),
                  }),
              ],
          })
        : null;
}
var eC = n(862649);
function eb(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: l,
            isActive: a,
            isVolumeExpanded: d,
            attachment: m,
            guildId: f,
            isFullScreen: g,
            showParticipants: h,
            showTextContent: p,
            channelId: v,
            messageId: x,
            showSpeakingIndicators: S,
            clipUserIds: C,
            durationSeconds: b,
            showTimelineComments: y,
            setIsGridView: E,
            isGridView: j,
        } = e,
        { activeLayer: A } = (0, o.X$)(),
        { ref: I, width: T } = (0, u.Ay)();
    return (0, r.jsx)(c.N, {
        theme: s.NJ.ONYX,
        children: (e) =>
            (0, r.jsxs)("div", {
                ref: I,
                className: i()(eC.MU, e),
                children: [
                    (0, r.jsx)(el.A, {
                        createdAt: null != m.clip_created_at ? Date.parse(m.clip_created_at) : void 0,
                        participantIds: h ? C : [],
                        applicationId: m.application?.id,
                        title: m.title,
                        guildId: f,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: g,
                        activeLayer: A,
                        showTextContent: p,
                        isGridView: j,
                        setIsGridView: E,
                    }),
                    !j &&
                        null != x &&
                        null != v &&
                        (0, r.jsx)(eS, {
                            isControlBarExpanded: l,
                            isPlayerActive: a,
                            attachment: m,
                            messageId: x,
                            channelId: v,
                        }),
                    !j &&
                        S &&
                        null != m.clip_events_timeline &&
                        null != v &&
                        (0, r.jsx)(ec, { guildId: f, timeline: m.clip_events_timeline, userIds: C, channelId: v }),
                    a &&
                        null != f &&
                        null != v &&
                        null != x &&
                        (0, r.jsx)(G, {
                            controlBarAnimationSpring: n,
                            attachment: m,
                            channelId: v,
                            messageId: x,
                            guildId: f,
                            containerWidth: T,
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
                            durationSeconds: m.duration_secs ?? b,
                            hidden: !y,
                        }),
                ],
            }),
    });
}
