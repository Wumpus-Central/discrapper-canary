n.d(t, { A: () => ey });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(494012),
    o = n(505124),
    u = n(855986),
    c = n(43990),
    d = n(453903),
    m = n(413599),
    f = n(683574);
n(938796);
var p = n(120692),
    h = n(665260),
    g = n(683063),
    A = n(265872),
    C = n(460905),
    E = n(110384),
    x = n(939249),
    v = n(834730),
    _ = n(138399),
    b = n(565645),
    y = n(822123),
    T = n(863576),
    S = n(73153),
    I = n(95701),
    N = n(596344),
    j = n(652215);
let R = (0, u.UT)(N.A, {
    getQueryId: (e, t, n, i, l) => (null != n && null != t && null != i && l ? e.id : null),
    get: (e) => (N.A.isReady(e.id) ? N.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let l = e.id;
        (await _.A.fetchMessages({ channelId: l, limit: 100 }),
            await S.h.dispatch({
                type: "THREAD_CREATE",
                channel: new I.Lt({
                    id: l,
                    parent_id: t,
                    type: j.rbe.MEDIA_THREAD,
                    name: e.title ?? "",
                    guild_id: n ?? "null",
                    ownerId: i,
                    threadMetadata: { archived: !0, autoArchiveDuration: 60, locked: !0, invitable: !1 },
                }),
                messageId: e.id,
            }));
    },
    getIsLoading: (e) => N.A.isLoadingMessages(e.id),
});
var M = n(451909),
    O = n(118517),
    P = n(747926),
    k = n(46653),
    L = n(734057),
    D = n(188567),
    w = n(475815);
let U = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var G = n(307731),
    F = n(381941),
    B = n(683825),
    V = n(792996),
    H = n(455871);
function W(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function K(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: a,
            messageId: s,
            guildId: o,
            hidden: c = !1,
            containerWidth: d,
        } = e,
        m = n.id,
        S = (0, y.QZ)(o),
        I = null != d && d < 460,
        K = S.slice(0, I ? 2 : 3),
        Y = (0, u.bG)([N.A], () => N.A.getMessage(a, s), [a, s]),
        q = (0, u.bG)([L.A], () => L.A.getChannel(a), [a]),
        Q = (0, u.bG)([L.A], () => L.A.getChannel(m), [m]),
        { enableMediaComments: $ } = U.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: X, videoRef: Z } = (0, f.X$)(),
        J = (0, h.Lt)(n.flags ?? 0, j.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = R(n, a, o, Y?.author.id, $ && J),
        et = l.useRef(null);
    function en(e, t) {
        (e?.stopPropagation(),
            (function (e) {
                if (null == q || null == Y || null == s || null == Z?.current?.currentTime) return;
                let t =
                        null != e.id
                            ? !0 === e.animated
                                ? `<a:${e.originalName ?? e.name}:${e.id}>`
                                : `<:${e.originalName ?? e.name}:${e.id}>`
                            : "surrogates" in e && null != e.surrogates
                              ? e.surrogates
                              : e.name,
                    n = Y.author.id === k.default.getId();
                _.A.sendMessage(q.id, M.Ay.parse(q, t), !1, {
                    location: F.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: q.id, guild_id: q.getGuildId() ?? void 0, message_id: s },
                    allowedMentions: { replied_user: !n },
                    mediaMention: W(m, Z),
                });
            })(t));
    }
    let ei = ee?.length ?? 0;
    if (!$ || null == q || null == s) return null;
    let el = V.intl.formatToPlainString(B.default.OYDyt2, { count: ei });
    return (0, i.jsxs)(p.animated.div, {
        className: r()(H.M0, { [H.pd]: c }),
        inert: c,
        style: {
            opacity: (0, p.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (c ? 0 : `${e}`)),
            transform: (0, p.to)(
                [t.to({ range: [0, 1], output: [50, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, i.jsx)("div", {
                className: H.gm,
                children: K.map((e) =>
                    (0, i.jsx)(
                        g.u,
                        {
                            title: V.intl.formatToPlainString(B.default["CZCvn+"], { emoji: e.name }),
                            body: V.intl.string(B.default.wQFVGI),
                            children: (0, i.jsx)("button", {
                                type: "button",
                                className: H.x6,
                                onClick: (t) => en(t, e),
                                children: (0, i.jsx)(b.A, {
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
            (0, i.jsx)(z, {}),
            (0, i.jsx)(A.Y, {
                layerContext: X,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(T.A, {
                        channel: q,
                        closePopout: t,
                        messageId: s,
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
                    (0, i.jsx)(g.u, {
                        title: V.intl.string(B.default["ZEs/pI"]),
                        body: V.intl.string(B.default.K8Khlc),
                        targetElementRef: et,
                        children: (0, i.jsx)("button", {
                            ...e,
                            ref: et,
                            type: "button",
                            className: H.x6,
                            children: (0, i.jsx)(C.ReactionIcon, { size: "sm" }),
                        }),
                    }),
            }),
            (0, i.jsx)(g.u, {
                title: V.intl.string(B.default.y2TE38),
                body: V.intl.string(B.default.c3OIMS),
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: H.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == q || null == Y || null == Z?.current?.currentTime)) return;
                        w._U(Z.current) && w.sP(Z.current);
                        let t = Y.author.id === k.default.getId();
                        ((0, O.Yf)({
                            channel: q,
                            message: Y,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !q.isPrivate() && !t,
                            mediaMention: W(m, Z),
                        }),
                            D._.dispatch(j.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: q.id }));
                    },
                    children: (0, i.jsx)(E.ArrowAngleLeftUpIcon, { size: "sm" }),
                }),
            }),
            ei > 0 &&
                !I &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(z, {}),
                        (0, i.jsx)(x.D, {
                            className: H.jC,
                            tag: "span",
                            onClick: function (e) {
                                (e.stopPropagation(), null != Q && (w._U(Z.current) && w.sP(Z.current), (0, P.JA)(Q)));
                            },
                            "aria-label": el,
                            children: (0, i.jsx)(v.E, {
                                variant: "body-sm/semibold",
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
function z() {
    return (0, i.jsx)("div", { className: H.yF });
}
var Y = n(555115),
    q = n(717421),
    Q = n(534890),
    $ = n(646514),
    X = n(97808),
    Z = n(778712),
    J = n(7584);
let ee = /^<(a)?:(\w+):(\d+)>$/;
var et = n(538355),
    en = n(466491);
function ei(e) {
    return { opacity: e ? 1 : 0.4, width: `${e ? 20 : 12}px`, height: `${e ? 20 : 12}px` };
}
function el(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            durationSeconds: a,
            guildId: r,
            channelId: s,
            messageId: o,
            hidden: c = !1,
        } = e,
        { enableMediaComments: d } = U.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        m = (0, h.Lt)(n.flags ?? 0, j.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: g, isControlBarExpanded: A } = (0, f.X$)(),
        C = (0, u.bG)([N.A], () => N.A.getMessage(s, o), [s, o]),
        { data: E } = R(n, s, r, C?.author.id, d && m && g);
    return (l.useEffect(() => {
        g && R.refetch(n, s, r, C?.author.id, d && m && g);
    }, [g, n, s, r, C?.author.id, d, m]),
    !d || null == E || a <= 0)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !c && (!g || !A) && (0, i.jsx)("div", { className: en.s_ }),
                  (0, i.jsx)(p.animated.div, {
                      className: en.IO,
                      style: {
                          transform: g
                              ? (0, p.to)([t.to({ range: [0, 1], output: [60, 0] })], (e) => `translateY(${e}px)`)
                              : "translateY(60px)",
                      },
                      children: E.map((e) => (0, i.jsx)(er, { hidden: c, message: e, durationSeconds: a }, e.id)),
                  }),
              ],
          });
}
let ea = { formatInline: !0 };
function er(e) {
    let { message: t, durationSeconds: n, hidden: a } = e,
        r = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(ee);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== J.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        { content: o } = (0, et.A)(t, ea),
        u = "" !== t.content ? o : null,
        { videoRef: c, isActive: d, isControlBarExpanded: m } = (0, f.X$)(),
        [h, A] = l.useState(!1),
        [C, E] = l.useState(!1),
        [v, y] = l.useState(!1);
    l.useEffect(() => {
        let e = c.current;
        if (null != e) return (e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n));
        function n() {
            if (null == e) return;
            let n = e.currentTime,
                i = t?.mediaMention?.timestamp;
            null != i && A(1e3 >= Math.abs(1e3 * n - i));
        }
    }, [t?.mediaMention?.timestamp, c]);
    let T = h || !d || C,
        [S, I] = (0, q.z)(() => ({ ...ei(T), config: { ...Y.n } }));
    if (
        (l.useEffect(() => {
            let e = !1;
            return (
                !(async function () {
                    y(!0);
                    let t = await I(ei(T));
                    !e && t.finished && y(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [I, T]),
        null == t)
    )
        return null;
    let N = (0, i.jsx)(x.D, {
        className: en.xL,
        style: { left: r, display: a ? "none" : "block" },
        inert: a,
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && _.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children: (0, i.jsx)(p.animated.div, {
            className: en.BC,
            style: S,
            children:
                null != s
                    ? (0, i.jsx)(b.A, {
                          emojiId: s.emojiId,
                          emojiName: s.emojiName,
                          shouldAnimate: h,
                          animated: s.animated,
                          surrogate: s.surrogate,
                          className: en.Zg,
                      })
                    : (0, i.jsx)(Q.ChatIcon, {
                          colorClass: en.Or,
                          color: $.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == u
        ? N
        : (0, i.jsx)(g.u, {
              positionKey: `${m}`,
              forceOpen: h && null == s && !v,
              asset: (0, i.jsx)(X.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: Z._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: u,
              children: N,
          });
}
var es = n(478531),
    eo = n(194498),
    eu = n(376595),
    ec = n(773503);
let ed = [];
function em(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: r } = e,
        s = l.useMemo(() => eu.H.fromAttachmentTimeline(t), [t]),
        [o, u] = l.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: c } = (0, f.X$)();
    return (
        (0, eo.A)(() => {
            let e = c.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            u(s.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(ec.A, {
            speakingUserIds: o.speakingUserIds,
            activeSoundboards: ed,
            userIds: n,
            guildId: a,
            channelId: r,
        })
    );
}
var ef = n(419490),
    ep = n(458977),
    eh = n(42502),
    eg = n(110742),
    eA = n(352527),
    eC = n(996682),
    eE = n(27989);
function ex(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = $.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...s
        } = e,
        o = (0, eE.J)(t),
        u = o?.width ?? n,
        c = o?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, eC.A)(s),
        width: u,
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
                className: r,
            }),
            (0, i.jsx)("path", {
                d: "M9.27675 4.02342C9.67707 3.95309 9.99001 4.3646 9.81484 4.73143L6.81191 11.0146C6.74229 11.1603 6.60667 11.2639 6.44765 11.292L3.27382 11.8515C3.00188 11.8995 2.74267 11.7172 2.69472 11.4453L2.31777 9.31248C1.93416 7.13691 3.38731 5.06133 5.56289 4.67772L9.27675 4.02342Z",
                fill: "string" == typeof a ? a : a.css,
                className: r,
            }),
            (0, i.jsx)("path", {
                d: "M19.7807 2.17088C20.1811 2.10027 20.494 2.51195 20.3187 2.87889L17.3168 9.16209C17.2472 9.30779 17.1116 9.4114 16.9525 9.43944L10.8852 10.5088C10.4848 10.5792 10.1718 10.1676 10.3471 9.80077L13.35 3.51756C13.4197 3.37203 13.5554 3.26921 13.7143 3.2412L19.7807 2.17088Z",
                fill: "string" == typeof a ? a : a.css,
                className: r,
            }),
            (0, i.jsx)("path", {
                d: "M24.2221 1.39745C26.2944 1.17734 28.2121 2.59832 28.5795 4.68163L28.9564 6.81541C29.0042 7.08724 28.822 7.34658 28.5502 7.39452L21.39 8.65721C20.9897 8.72774 20.6769 8.31607 20.8519 7.9492L23.8539 1.66698C23.9239 1.52058 24.0607 1.4146 24.2221 1.39745Z",
                fill: "string" == typeof a ? a : a.css,
                className: r,
            }),
        ],
    });
}
var ev = n(879241);
function e_(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: s, isPlayerActive: o } = e,
        { enableDistributedClips: c } = ep.A.useConfig({ location: "DistributedClipShareCTA" }),
        d = (0, u.bG)(
            [ef.Ay, k.default],
            () =>
                (function (e, t) {
                    let n,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ef.Ay,
                        l = i.getClips(),
                        a = e.clip_remote_id,
                        r = null != a ? i.getClipByRemoteId(a) : void 0;
                    if (null != r) return r;
                    let s = (0, eg.Vi)(e);
                    if (null == s || null == t || !e.clip_participants?.some((e) => e.id === t)) return;
                    let o = 0;
                    for (let e of Object.values(l)) {
                        let t = (0, eg.Gn)(e);
                        if (null == t) continue;
                        let i = (0, eg.hL)(s, t);
                        null != i && i > o && ((o = i), (n = e));
                    }
                    return n;
                })(t, k.default.getId(), ef.Ay),
            [t],
        ),
        { onShareClick: m } = (0, eA.A)(n),
        f = (0, u.bG)([k.default, N.A], () => {
            let e = N.A.getMessage(n, a);
            return (
                null != e &&
                e.author?.id !== k.default.getId() &&
                (null == e.messageReference ||
                    N.A.getMessage(n, e.messageReference.message_id)?.author?.id !== k.default.getId())
            );
        }),
        p = (0, u.bG)([ef.Ay], () => ef.Ay.hasRepliedWithClip(a), [a]),
        h = l.useCallback(
            (e) => {
                null != d &&
                    (e.stopPropagation(),
                    m({
                        clips: [d],
                        messageReference: { channel_id: n, message_id: a },
                        povTargetInformation: (0, eh.A)(t),
                    }));
            },
            [m, d, n, a, t],
        );
    return c && null != d && !p && f
        ? (0, i.jsxs)("button", {
              className: r()(ev.eZ, { [ev.vu]: s, [ev.jn]: !o }),
              onClick: h,
              children: [
                  (0, i.jsx)(ex, { size: "refresh_sm", color: $.A.colors.WHITE }),
                  (0, i.jsx)(v.E, {
                      variant: "body-xs/semibold",
                      color: "text-overlay-light",
                      children: V.intl.string(B.default.YKst58),
                  }),
              ],
          })
        : null;
}
var eb = n(862649);
function ey(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: l,
            isActive: a,
            isVolumeExpanded: p,
            attachment: h,
            guildId: g,
            isFullScreen: A,
            showParticipants: C,
            showTextContent: E,
            channelId: x,
            messageId: v,
            showSpeakingIndicators: _,
            clipUserIds: b,
            durationSeconds: y,
            showTimelineComments: T,
            setIsGridView: S,
            isGridView: I,
        } = e,
        N = (0, u.bG)([m.A], () => m.A.theme),
        { activeLayer: j } = (0, f.X$)(),
        { ref: R, width: M } = (0, s.Ay)();
    return (0, i.jsx)(c.N, {
        theme: o.NJ.ONYX,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: R,
                className: r()(eb.MU, e),
                children: [
                    (0, i.jsx)(es.A, {
                        createdAt: null != h.clip_created_at ? Date.parse(h.clip_created_at) : void 0,
                        participantIds: C ? b : [],
                        applicationId: h.application?.id,
                        title: h.title,
                        guildId: g,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: A,
                        activeLayer: j,
                        showTextContent: E,
                        isGridView: I,
                        setIsGridView: S,
                    }),
                    !I &&
                        null != v &&
                        null != x &&
                        (0, i.jsx)(e_, {
                            isControlBarExpanded: l,
                            isPlayerActive: a,
                            attachment: h,
                            messageId: v,
                            channelId: x,
                        }),
                    !I &&
                        _ &&
                        null != h.clip_events_timeline &&
                        null != x &&
                        (0, i.jsx)(em, { guildId: g, timeline: h.clip_events_timeline, userIds: b, channelId: x }),
                    a &&
                        null != g &&
                        null != x &&
                        null != v &&
                        (0, i.jsx)(d.NA.Provider, {
                            value: N,
                            children: (0, i.jsx)(K, {
                                controlBarAnimationSpring: n,
                                attachment: h,
                                channelId: x,
                                messageId: v,
                                guildId: g,
                                containerWidth: M,
                                hidden: !l || p,
                            }),
                        }),
                    null != g &&
                        null != x &&
                        null != v &&
                        (0, i.jsx)(el, {
                            controlBarAnimationSpring: n,
                            attachment: h,
                            channelId: x,
                            messageId: v,
                            guildId: g,
                            durationSeconds: h.duration_secs ?? y,
                            hidden: !T,
                        }),
                ],
            }),
    });
}
