"use strict";
n.d(t, { A: () => eT });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(494012),
    o = n(505124),
    d = n(43990),
    c = n(683574);
n(938796);
var u = n(159265),
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
    R = n(95701),
    O = n(232835),
    L = n(652215);
let D = (0, E.UT)(O.A, {
    getQueryId: (e, t, n, i, r) => (null != n && null != t && null != i && r ? e.id : null),
    get: (e) => (O.A.isReady(e.id) ? O.A.getMessages(e.id) : null),
    load: async (e, t, n, i) => {
        if (null == n || null == t) return;
        let r = e.id;
        await m.A.fetchMessages({ channelId: r, limit: 100 }),
            await C.h.dispatch({
                type: "THREAD_CREATE",
                channel: new R.Lt({
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
    getIsLoading: (e) => O.A.isLoadingMessages(e.id),
});
var y = n(451909),
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
        R = n.id,
        j = (0, S.QZ)(o),
        Y = null != C && C < 460,
        K = j.slice(0, Y ? 2 : 3),
        $ = (0, E.bG)([O.A], () => O.A.getMessage(a, l), [a, l]),
        z = (0, E.bG)([P.A], () => P.A.getChannel(a), [a]),
        Z = (0, E.bG)([P.A], () => P.A.getChannel(R), [R]),
        { enableMediaComments: q } = G.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: X, videoRef: Q } = (0, c.X$)(),
        J = (0, _.Lt)(n.flags ?? 0, L.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = D(n, a, o, $?.author.id, q && J),
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
                m.A.sendMessage(z.id, y.Ay.parse(z, t), !1, {
                    location: k.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: z.id, guild_id: z.getGuildId() ?? void 0, message_id: l },
                    allowedMentions: { replied_user: !n },
                    mediaMention: H(R, Q),
                });
            })(t);
    }
    let ei = ee?.length ?? 0;
    if (!q || null == z || null == l) return null;
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
                            mediaMention: H(R, Q),
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
                                e.stopPropagation(), null != Z && (w._U(Q.current) && w.sP(Q.current), (0, b.JA)(Z));
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
var Y = n(555115),
    K = n(717421),
    $ = n(534890),
    z = n(661531),
    Z = n(97808),
    q = n(778712),
    X = n(7584);
let Q = /^<(a)?:(\w+):(\d+)>$/;
var J = n(521981),
    ee = n(537452);
function et(e) {
    return { opacity: e ? 1 : 0.4, width: `${e ? 20 : 12}px`, height: `${e ? 20 : 12}px` };
}
function en(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            durationSeconds: a,
            guildId: s,
            channelId: l,
            messageId: o,
            hidden: d = !1,
        } = e,
        { enableMediaComments: A } = G.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        h = (0, _.Lt)(n.flags ?? 0, L.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: I, isControlBarExpanded: f } = (0, c.X$)(),
        p = (0, E.bG)([O.A], () => O.A.getMessage(l, o), [l, o]),
        { data: T } = D(n, l, s, p?.author.id, A && h && I);
    return (r.useEffect(() => {
        I && D.refetch(n, l, s, p?.author.id, A && h && I);
    }, [I, n, l, s, p?.author.id, A, h]),
    !A || null == T || a <= 0)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !d && (!I || !f) && (0, i.jsx)("div", { className: ee.s_ }),
                  (0, i.jsx)(u.animated.div, {
                      className: ee.IO,
                      style: {
                          transform: I
                              ? (0, u.to)([t.to({ range: [0, 1], output: [56, 0] })], (e) => `translateY(${e}px)`)
                              : "translateY(56px)",
                      },
                      children: T.map((e) => (0, i.jsx)(ei, { hidden: d, message: e, durationSeconds: a }, e.id)),
                  }),
              ],
          });
}
function ei(e) {
    let { message: t, durationSeconds: n, hidden: a } = e,
        s = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        l = r.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(Q);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== X.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(t?.content ?? ""),
            [t?.content],
        ),
        o = r.useMemo(() => (null != t && "" !== t.content ? (0, J.Ay)(t, { formatInline: !0 }).content : null), [t]),
        { videoRef: d, isActive: _, isControlBarExpanded: E } = (0, c.X$)(),
        [h, I] = r.useState(!1),
        [f, T] = r.useState(!1),
        [S, N] = r.useState(!1);
    r.useEffect(() => {
        let e = d.current;
        if (null != e) return e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n);
        function n() {
            if (null == e) return;
            let n = e.currentTime,
                i = t?.mediaMention?.timestamp;
            null != i && I(1e3 >= Math.abs(1e3 * n - i));
        }
    }, [t?.mediaMention?.timestamp, d]);
    let C = h || !_ || f,
        [R, O] = (0, K.z)(() => ({ ...et(C), config: { ...Y.n } }));
    if (
        (r.useEffect(() => {
            let e = !1;
            return (
                (async function () {
                    N(!0);
                    let t = await O(et(C));
                    !e && t.finished && N(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [O, C]),
        null == t)
    )
        return null;
    let L = (0, i.jsx)(p.D, {
        className: ee.xL,
        style: { left: s, display: a ? "none" : "block" },
        inert: a,
        onMouseEnter: () => T(!0),
        onMouseLeave: () => T(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                i = t.messageReference?.message_id;
            null != n && null != i && m.A.jumpToMessage({ channelId: n, messageId: i, flash: !0 });
        },
        children: (0, i.jsx)(u.animated.div, {
            className: ee.BC,
            style: R,
            children:
                null != l
                    ? (0, i.jsx)(g.A, {
                          emojiId: l.emojiId,
                          emojiName: l.emojiName,
                          shouldAnimate: h,
                          animated: l.animated,
                          surrogate: l.surrogate,
                          className: ee.Zg,
                      })
                    : (0, i.jsx)($.o, {
                          colorClass: ee.Or,
                          color: z.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == o
        ? L
        : (0, i.jsx)(A.u, {
              positionKey: `${E}`,
              delay: 200,
              forceOpen: h && null == l && !S,
              asset: (0, i.jsx)(Z.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: o,
              children: L,
          });
}
var er = n(783384),
    ea = n(972117),
    es = n(376595),
    el = n(773503);
let eo = [];
function ed(e) {
    let { timeline: t, userIds: n, guildId: a, channelId: s } = e,
        l = r.useMemo(() => es.H.fromAttachmentTimeline(t), [t]),
        [o, d] = r.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: u } = (0, c.X$)();
    return (
        (0, ea.A)(() => {
            let e = u.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            d(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(el.A, {
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
    e_ = n(352527),
    eE = n(996682),
    eA = n(27989);
function eh(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: a = z.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...l
        } = e,
        o = (0, eA.J)(t),
        d = o?.width ?? n,
        c = o?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, eE.A)(l),
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
var eI = n(218474);
function ef(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: l, isPlayerActive: o } = e,
        { enableDistributedClips: d } = eu.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        u = (0, E.bG)([ec.Ay], () => (null != c ? ec.Ay.getClipByRemoteId(c) : null)),
        { onShareClick: _ } = (0, e_.A)(n),
        A = (0, E.bG)([ec.Ay], () => null != u && null != n && null != c && ec.Ay.wasClipSharedInChannel(c, n)),
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
              className: s()(eI.eZ, { [eI.vu]: l, [eI.jn]: !o }),
              onClick: h,
              children: [
                  (0, i.jsx)(eh, { size: "refresh_sm", color: z.A.colors.WHITE }),
                  (0, i.jsx)(T.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: V.intl.string(F.default.YKst58),
                  }),
              ],
          });
}
var ep = n(668534);
function eT(e) {
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
            showTimelineComments: S,
        } = e,
        { activeLayer: N } = (0, c.X$)(),
        { ref: C, width: R } = (0, l.Ay)();
    return (0, i.jsx)(d.N, {
        theme: o.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: C,
                className: s()(ep.MU, e),
                children: [
                    (0, i.jsx)(er.A, {
                        createdAt: null != _.clip_created_at ? Date.parse(_.clip_created_at) : void 0,
                        participantIds: h ? m : [],
                        applicationId: _.application?.id,
                        title: _.title,
                        guildId: E,
                        playerState: t,
                        isControlBarExpanded: r,
                        isFullScreen: A,
                        activeLayer: N,
                        showTextContent: I,
                    }),
                    null != p &&
                        null != f &&
                        (0, i.jsx)(ef, {
                            isControlBarExpanded: r,
                            isPlayerActive: a,
                            attachment: _,
                            messageId: p,
                            channelId: f,
                        }),
                    T &&
                        null != _.clip_events_timeline &&
                        null != f &&
                        (0, i.jsx)(ed, { guildId: E, timeline: _.clip_events_timeline, userIds: m, channelId: f }),
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
                            containerWidth: R,
                            hidden: !r || u,
                        }),
                    null != E &&
                        null != f &&
                        null != p &&
                        (0, i.jsx)(en, {
                            controlBarAnimationSpring: n,
                            attachment: _,
                            channelId: f,
                            messageId: p,
                            guildId: E,
                            durationSeconds: _.duration_secs ?? g,
                            hidden: !S,
                        }),
                ],
            }),
    });
}
