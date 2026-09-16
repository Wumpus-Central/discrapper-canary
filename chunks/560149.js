n.d(t, { A: () => eC });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(494012),
    o = n(505124),
    d = n(43990),
    c = n(683574);
n(938796);
var u = n(128954),
    h = n(665260),
    m = n(17928),
    p = n(683063),
    f = n(922016),
    g = n(460905),
    A = n(110384),
    x = n(939249),
    v = n(834730),
    E = n(148494),
    C = n(565645),
    T = n(822123),
    _ = n(267889),
    S = n(228366),
    I = n(95701),
    j = n(232835),
    b = n(652215);
let y = (0, m.UT)(j.A, {
    getQueryId: (e, t, n, i, l) => (null != n && null != t && null != i && l ? e.id : null),
    get: (e) => (j.A.isReady(e.id) ? j.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let l = e.id;
        (await E.A.fetchMessages({ channelId: l, limit: 100 }),
            await S.h.dispatch({
                type: "THREAD_CREATE",
                channel: new I.Lt({
                    id: l,
                    parent_id: t,
                    type: b.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? b.eGj,
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            }));
    },
    getIsLoading: (e) => j.A.isLoadingMessages(e.id),
});
var N = n(451909),
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
    G = n(704796),
    F = n(375708),
    V = n(455871);
function H(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function B(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: r,
            guildId: o,
            hidden: d = !1,
            containerWidth: S,
        } = e,
        I = n.id,
        B = (0, T.QZ)(o),
        z = null != S && S < 460,
        Z = B.slice(0, z ? 2 : 3),
        K = (0, m.bG)([j.A], () => j.A.getMessage(a, r), [a, r]),
        q = (0, m.bG)([w.A], () => w.A.getChannel(a), [a]),
        Y = (0, m.bG)([w.A], () => w.A.getChannel(I), [I]),
        { enableMediaComments: $ } = L.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: X, videoRef: J } = (0, c.X$)(),
        Q = (0, h.Lt)(n.flags ?? 0, b.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = y(n, a, o, K?.author.id, $ && Q),
        et = l.useRef(null);
    function en(e, t) {
        (e?.stopPropagation(),
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
                E.A.sendMessage(q.id, N.Ay.parse(q, t), !1, {
                    location: U.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: q.id, guild_id: q.getGuildId() ?? void 0, message_id: r },
                    allowedMentions: { replied_user: !n },
                    mediaMention: H(I, J),
                });
            })(t));
    }
    let ei = ee?.length ?? 0;
    if (!$ || null == q || null == r) return null;
    let el = F.intl.formatToPlainString(G.default.OYDyt2, { count: ei });
    return (0, i.jsxs)(u.animated.div, {
        className: s()(V.M0, { [V.pd]: d }),
        inert: d,
        style: {
            opacity: (0, u.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (d ? 0 : `${e}`)),
            transform: (0, u.to)(
                [t.to({ range: [0, 1], output: [50, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: V.gm,
                children: Z.map((e) =>
                    (0, i.jsx)(
                        p.u,
                        {
                            title: F.intl.formatToPlainString(G.default["CZCvn+"], { emoji: e.name }),
                            body: F.intl.string(G.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: V.x6,
                                onClick: (t) => en(t, e),
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
            (0, i.jsx)(W, {}),
            (0, i.jsx)(f.Y, {
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
                position: "right",
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
                            className: V.x6,
                            children: (0, i.jsx)(g.n, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(p.u, {
                title: F.intl.string(G.default.y2TE38),
                body: F.intl.string(G.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: V.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == q || null == K || null == J?.current?.currentTime)) return;
                        P._U(J.current) && P.sP(J.current);
                        let t = K.author.id === k.default.getId();
                        ((0, M.Yf)({
                            channel: q,
                            message: K,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !q.isPrivate() && !t,
                            mediaMention: H(I, J),
                        }),
                            O._.dispatch(b.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: q.id }));
                    },
                    children: (0, i.jsx)(A.W, { size: "sm" }),
                }),
            }),
            ei > 0 &&
                !z &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W, {}),
                        (0, i.jsx)(x.D, {
                            className: V.jC,
                            tag: "span",
                            onClick: function (e) {
                                (e.stopPropagation(), null != Y && (P._U(J.current) && P.sP(J.current), (0, R.JA)(Y)));
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
function W() {
    return (0, i.jsx)("div", { className: V.yF });
}
var z = n(555115),
    Z = n(717421),
    K = n(534890),
    q = n(661531),
    Y = n(97808),
    $ = n(778712),
    X = n(7584);
let J = /^<(a)?:(\w+):(\d+)>$/;
var Q = n(521981),
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
            hidden: d = !1,
        } = e,
        { enableMediaComments: p } = L.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        f = (0, h.Lt)(n.flags ?? 0, b.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: g, isControlBarExpanded: A } = (0, c.X$)(),
        x = (0, m.bG)([j.A], () => j.A.getMessage(r, o), [r, o]),
        { data: v } = y(n, r, s, x?.author.id, p && f && g);
    return (l.useEffect(() => {
        g && y.refetch(n, r, s, x?.author.id, p && f && g);
    }, [g, n, r, s, x?.author.id, p, f]),
    !p || null == v || a <= 0)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !d && (!g || !A) && (0, i.jsx)("div", { className: ee.s_ }),
                  (0, i.jsx)(u.animated.div, {
                      className: ee.IO,
                      style: {
                          transform: g
                              ? (0, u.to)([t.to({ range: [0, 1], output: [60, 0] })], (e) => `translateY(${e}px)`)
                              : "translateY(60px)",
                      },
                      children: v.map((e) => (0, i.jsx)(ei, { hidden: d, message: e, durationSeconds: a }, e.id)),
                  }),
              ],
          });
}
function ei(e) {
    let { message: t, durationSeconds: n, hidden: a } = e,
        s = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        r = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(J);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== X.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        o = l.useMemo(() => (null != t && "" !== t.content ? (0, Q.Ay)(t, { formatInline: !0 }).content : null), [t]),
        { videoRef: d, isActive: h, isControlBarExpanded: m } = (0, c.X$)(),
        [f, g] = l.useState(!1),
        [A, v] = l.useState(!1),
        [T, _] = l.useState(!1);
    l.useEffect(() => {
        let e = d.current;
        if (null != e) return (e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n));
        function n() {
            if (null == e) return;
            let n = e.currentTime,
                i = t?.mediaMention?.timestamp;
            null != i && g(1e3 >= Math.abs(1e3 * n - i));
        }
    }, [t?.mediaMention?.timestamp, d]);
    let S = f || !h || A,
        [I, j] = (0, Z.z)(() => ({ ...et(S), config: { ...z.n } }));
    if (
        (l.useEffect(() => {
            let e = !1;
            return (
                (async function () {
                    _(!0);
                    let t = await j(et(S));
                    !e && t.finished && _(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [j, S]),
        null == t)
    )
        return null;
    let b = (0, i.jsx)(x.D, {
        className: ee.xL,
        style: { left: s, display: a ? "none" : "block" },
        inert: a,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && E.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children: (0, i.jsx)(u.animated.div, {
            className: ee.BC,
            style: I,
            children:
                null != r
                    ? (0, i.jsx)(C.A, {
                          emojiId: r.emojiId,
                          emojiName: r.emojiName,
                          shouldAnimate: f,
                          animated: r.animated,
                          surrogate: r.surrogate,
                          className: ee.Zg,
                      })
                    : (0, i.jsx)(K.ChatIcon, {
                          colorClass: ee.Or,
                          color: q.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == o
        ? b
        : (0, i.jsx)(p.u, {
              positionKey: `${m}`,
              forceOpen: f && null == r && !T,
              asset: (0, i.jsx)(Y.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: $._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: o,
              children: b,
          });
}
var el = n(478531),
    ea = n(194498),
    es = n(376595),
    er = n(773503);
let eo = [];
function ed(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: s } = e,
        r = l.useMemo(() => es.H.fromAttachmentTimeline(t), [t]),
        [o, d] = l.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: u } = (0, c.X$)();
    return (
        (0, ea.A)(() => {
            let e = u.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            d(r.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(er.A, {
            speakingUserIds: o.speakingUserIds,
            activeSoundboards: eo,
            userIds: n,
            guildId: a,
            channelId: s,
        })
    );
}
var ec = n(915725),
    eu = n(458977),
    eh = n(42502),
    em = n(110742),
    ep = n(352527),
    ef = n(996682),
    eg = n(27989);
function eA(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = q.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...r
        } = e,
        o = (0, eg.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, ef.A)(r),
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
var ex = n(879241);
function ev(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: r, isPlayerActive: o } = e,
        { enableDistributedClips: d } = eu.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = (0, m.bG)(
            [ec.Ay, k.default],
            () =>
                (function (e, t) {
                    let n,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec.Ay,
                        l = i.getClips(),
                        a = e.clip_remote_id,
                        s = null != a ? i.getClipByRemoteId(a) : void 0;
                    if (null != s) return s;
                    let r = (0, em.Vi)(e);
                    if (null == r || null == t || !e.clip_participants?.some((e) => e.id === t)) return;
                    let o = 0;
                    for (let e of Object.values(l)) {
                        let t = (0, em.Gn)(e);
                        if (null == t) continue;
                        let i = (0, em.hL)(r, t);
                        null != i && i > o && ((o = i), (n = e));
                    }
                    return n;
                })(t, k.default.getId(), ec.Ay),
            [t],
        ),
        { onShareClick: u } = (0, ep.A)(n),
        h = (0, m.bG)([k.default, j.A], () => {
            let e = j.A.getMessage(n, a);
            return (
                null != e &&
                e.author?.id !== k.default.getId() &&
                (null == e.messageReference ||
                    j.A.getMessage(n, e.messageReference.message_id)?.author?.id !== k.default.getId())
            );
        }),
        p = (0, m.bG)([ec.Ay], () => ec.Ay.hasRepliedWithClip(a), [a]),
        f = l.useCallback(
            (e) => {
                null != c &&
                    (e.stopPropagation(),
                    u({
                        clips: [c],
                        messageReference: { channel_id: n, message_id: a },
                        povTargetInformation: (0, eh.A)(t),
                    }));
            },
            [u, c, n, a, t],
        );
    return d && null != c && !p && h
        ? (0, i.jsxs)("button", {
              className: s()(ex.eZ, { [ex.vu]: r, [ex.jn]: !o }),
              onClick: f,
              children: [
                  (0, i.jsx)(eA, { size: "refresh_sm", color: q.A.colors.WHITE }),
                  (0, i.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: F.intl.string(G.default.YKst58),
                  }),
              ],
          })
        : null;
}
var eE = n(862649);
function eC(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: l,
            isActive: a,
            isVolumeExpanded: u,
            attachment: h,
            guildId: m,
            isFullScreen: p,
            showParticipants: f,
            showTextContent: g,
            channelId: A,
            messageId: x,
            showSpeakingIndicators: v,
            clipUserIds: E,
            durationSeconds: C,
            showTimelineComments: T,
            setIsGridView: _,
            isGridView: S,
        } = e,
        { activeLayer: I } = (0, c.X$)(),
        { ref: j, width: b } = (0, r.Ay)();
    return (0, i.jsx)(d.N, {
        theme: o.NJ.ONYX,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: j,
                className: s()(eE.MU, e),
                children: [
                    (0, i.jsx)(el.A, {
                        createdAt: null != h.clip_created_at ? Date.parse(h.clip_created_at) : void 0,
                        participantIds: f ? E : [],
                        applicationId: h.application?.id,
                        title: h.title,
                        guildId: m,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: p,
                        activeLayer: I,
                        showTextContent: g,
                        isGridView: S,
                        setIsGridView: _,
                    }),
                    !S &&
                        null != x &&
                        null != A &&
                        (0, i.jsx)(ev, {
                            isControlBarExpanded: l,
                            isPlayerActive: a,
                            attachment: h,
                            messageId: x,
                            channelId: A,
                        }),
                    !S &&
                        v &&
                        null != h.clip_events_timeline &&
                        null != A &&
                        (0, i.jsx)(ed, { guildId: m, timeline: h.clip_events_timeline, userIds: E, channelId: A }),
                    a &&
                        null != m &&
                        null != A &&
                        null != x &&
                        (0, i.jsx)(B, {
                            controlBarAnimationSpring: n,
                            attachment: h,
                            channelId: A,
                            messageId: x,
                            guildId: m,
                            containerWidth: b,
                            hidden: !l || u,
                        }),
                    null != m &&
                        null != A &&
                        null != x &&
                        (0, i.jsx)(en, {
                            controlBarAnimationSpring: n,
                            attachment: h,
                            channelId: A,
                            messageId: x,
                            guildId: m,
                            durationSeconds: h.duration_secs ?? C,
                            hidden: !T,
                        }),
                ],
            }),
    });
}
