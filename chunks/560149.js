n.d(t, { A: () => eC });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(494012),
    u = n(505124),
    o = n(43990),
    c = n(683574);
n(938796);
var d = n(479669),
    m = n(665260),
    f = n(17928),
    g = n(683063),
    h = n(922016),
    p = n(460905),
    x = n(110384),
    v = n(939249),
    S = n(834730),
    A = n(148494),
    C = n(565645),
    b = n(822123),
    j = n(267889),
    I = n(228366),
    y = n(95701),
    E = n(232835),
    _ = n(652215);
let T = (0, f.UT)(E.A, {
    getQueryId: (e, t, n, r, l) => (null != n && null != t && null != r && l ? e.id : null),
    get: (e) => (E.A.isReady(e.id) ? E.A.getMessages(e.id) : null),
    load: async (e, t, n, r) => {
        if (null == n || null == t) return;
        let l = e.id;
        (await A.A.fetchMessages({ channelId: l, limit: 100 }),
            await I.h.dispatch({
                type: "THREAD_CREATE",
                channel: new y.Lt({
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
    getIsLoading: (e) => E.A.isLoadingMessages(e.id),
});
var M = n(451909),
    N = n(118517),
    L = n(747926),
    R = n(280450),
    w = n(734057),
    k = n(625494),
    P = n(475815);
let O = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var D = n(307731),
    U = n(381941),
    V = n(268378),
    $ = n(375708),
    H = n(455871);
function z(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function F(e) {
    let {
            controlBarAnimationSpring: t,
            attachment: n,
            channelId: i,
            messageId: s,
            guildId: u,
            hidden: o = !1,
            containerWidth: I,
        } = e,
        y = n.id,
        F = (0, b.QZ)(u),
        Z = null != I && I < 460,
        K = F.slice(0, Z ? 2 : 3),
        Y = (0, f.bG)([E.A], () => E.A.getMessage(i, s), [i, s]),
        B = (0, f.bG)([w.A], () => w.A.getChannel(i), [i]),
        X = (0, f.bG)([w.A], () => w.A.getChannel(y), [y]),
        { enableMediaComments: Q } = O.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        { activeLayer: q, videoRef: W } = (0, c.X$)(),
        J = (0, m.Lt)(n.flags ?? 0, _.sbO.HAS_TIMELINE_COMMENTS),
        { data: ee } = T(n, i, u, Y?.author.id, Q && J),
        et = l.useRef(null);
    function en(e, t) {
        (e?.stopPropagation(),
            (function (e) {
                if (null == B || null == Y || null == s || null == W?.current?.currentTime) return;
                let t =
                        null != e.id
                            ? !0 === e.animated
                                ? `<a:${e.originalName ?? e.name}:${e.id}>`
                                : `<:${e.originalName ?? e.name}:${e.id}>`
                            : "surrogates" in e && null != e.surrogates
                              ? e.surrogates
                              : e.name,
                    n = Y.author.id === R.default.getId();
                A.A.sendMessage(B.id, M.Ay.parse(B, t), !1, {
                    location: U.Hx.MEDIA_MENTION,
                    doNotScroll: !0,
                    messageReference: { channel_id: B.id, guild_id: B.getGuildId() ?? void 0, message_id: s },
                    allowedMentions: { replied_user: !n },
                    mediaMention: z(y, W),
                });
            })(t));
    }
    let er = ee?.length ?? 0;
    if (!Q || null == B || null == s) return null;
    let el = $.intl.formatToPlainString(V.default.OYDyt2, { count: er });
    return (0, r.jsxs)(d.animated.div, {
        className: a()(H.M0, { [H.pd]: o }),
        inert: o,
        style: {
            opacity: (0, d.to)(t.to({ range: [0, 1], output: [0, 1] }), (e) => (o ? 0 : `${e}`)),
            transform: (0, d.to)(
                [t.to({ range: [0, 1], output: [42, 0] })],
                (e) => `translateY(${e}px) translateX(-50%)`,
            ),
        },
        children: [
            (0, r.jsx)("div", {
                className: H.gm,
                children: K.map((e) =>
                    (0, r.jsx)(
                        g.u,
                        {
                            title: $.intl.formatToPlainString(V.default["CZCvn+"], { emoji: e.name }),
                            body: $.intl.string(V.default.wQFVGI),
                            children: (0, r.jsx)("button", {
                                type: "button",
                                className: H.x6,
                                onClick: (t) => en(t, e),
                                children: (0, r.jsx)(C.A, {
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
            (0, r.jsx)(G, {}),
            (0, r.jsx)(h.Y, {
                layerContext: q,
                targetElementRef: et,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(j.A, {
                        channel: B,
                        closePopout: t,
                        messageId: s,
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
                        title: $.intl.string(V.default["ZEs/pI"]),
                        body: $.intl.string(V.default.K8Khlc),
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
            (0, r.jsx)(g.u, {
                title: $.intl.string(V.default.y2TE38),
                body: $.intl.string(V.default.c3OIMS),
                children: (0, r.jsx)("button", {
                    type: "button",
                    className: H.x6,
                    onClick: function (e) {
                        if ((e.stopPropagation(), null == B || null == Y || null == W?.current?.currentTime)) return;
                        P._U(W.current) && P.sP(W.current);
                        let t = Y.author.id === R.default.getId();
                        ((0, N.Yf)({
                            channel: B,
                            message: Y,
                            shouldMention: !e.shiftKey && !t,
                            showMentionToggle: !B.isPrivate() && !t,
                            mediaMention: z(y, W),
                        }),
                            k._.dispatch(_.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: B.id }));
                    },
                    children: (0, r.jsx)(x.W, { size: "sm" }),
                }),
            }),
            er > 0 &&
                !Z &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(G, {}),
                        (0, r.jsx)(v.D, {
                            className: H.jC,
                            tag: "span",
                            onClick: function (e) {
                                (e.stopPropagation(), null != X && (P._U(W.current) && P.sP(W.current), (0, L.JA)(X)));
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
function G() {
    return (0, r.jsx)("div", { className: H.yF });
}
var Z = n(555115),
    K = n(717421),
    Y = n(534890),
    B = n(661531),
    X = n(97808),
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
            durationSeconds: i,
            guildId: a,
            channelId: s,
            messageId: u,
            hidden: o = !1,
        } = e,
        { enableMediaComments: g } = O.useConfig({ location: "ClipEmbedMediaMentionTimeline" }),
        h = (0, m.Lt)(n.flags ?? 0, _.sbO.HAS_TIMELINE_COMMENTS),
        { isActive: p, isControlBarExpanded: x } = (0, c.X$)(),
        v = (0, f.bG)([E.A], () => E.A.getMessage(s, u), [s, u]),
        { data: S } = T(n, s, a, v?.author.id, g && h && p);
    return (l.useEffect(() => {
        p && T.refetch(n, s, a, v?.author.id, g && h && p);
    }, [p, n, s, a, v?.author.id, g, h]),
    !g || null == S || i <= 0)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !o && (!p || !x) && (0, r.jsx)("div", { className: ee.s_ }),
                  (0, r.jsx)(d.animated.div, {
                      className: ee.IO,
                      style: {
                          transform: p
                              ? (0, d.to)([t.to({ range: [0, 1], output: [54, 0] })], (e) => `translateY(${e}px)`)
                              : "translateY(54px)",
                      },
                      children: S.map((e) => (0, r.jsx)(er, { hidden: o, message: e, durationSeconds: i }, e.id)),
                  }),
              ],
          });
}
function er(e) {
    let { message: t, durationSeconds: n, hidden: i } = e,
        a = `${Math.min(100, ((t.mediaMention?.timestamp ?? 0) / 1e3 / n) * 100)}%`,
        s = l.useMemo(
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
        u = l.useMemo(() => (null != t && "" !== t.content ? (0, J.Ay)(t, { formatInline: !0 }).content : null), [t]),
        { videoRef: o, isActive: m, isControlBarExpanded: f } = (0, c.X$)(),
        [h, p] = l.useState(!1),
        [x, S] = l.useState(!1),
        [b, j] = l.useState(!1);
    l.useEffect(() => {
        let e = o.current;
        if (null != e) return (e.addEventListener("timeupdate", n), () => e.removeEventListener("timeupdate", n));
        function n() {
            if (null == e) return;
            let n = e.currentTime,
                r = t?.mediaMention?.timestamp;
            null != r && p(1e3 >= Math.abs(1e3 * n - r));
        }
    }, [t?.mediaMention?.timestamp, o]);
    let I = h || !m || x,
        [y, E] = (0, K.z)(() => ({ ...et(I), config: { ...Z.n } }));
    if (
        (l.useEffect(() => {
            let e = !1;
            return (
                (async function () {
                    j(!0);
                    let t = await E(et(I));
                    !e && t.finished && j(!1);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [E, I]),
        null == t)
    )
        return null;
    let _ = (0, r.jsx)(v.D, {
        className: ee.xL,
        style: { left: a, display: i ? "none" : "block" },
        inert: i,
        onMouseEnter: () => S(!0),
        onMouseLeave: () => S(!1),
        onClick: function (e) {
            e.stopPropagation();
            let n = t.messageReference?.channel_id,
                r = t.messageReference?.message_id;
            null != n && null != r && A.A.jumpToMessage({ channelId: n, messageId: r, flash: !0 });
        },
        children: (0, r.jsx)(d.animated.div, {
            className: ee.BC,
            style: y,
            children:
                null != s
                    ? (0, r.jsx)(C.A, {
                          emojiId: s.emojiId,
                          emojiName: s.emojiName,
                          shouldAnimate: h,
                          animated: s.animated,
                          surrogate: s.surrogate,
                          className: ee.Zg,
                      })
                    : (0, r.jsx)(Y.ChatIcon, {
                          colorClass: ee.Or,
                          color: B.A.colors.ICON_OVERLAY_LIGHT,
                          size: "custom",
                          width: "100%",
                          height: "100%",
                      }),
        }),
    });
    return null == u
        ? _
        : (0, r.jsx)(g.u, {
              positionKey: `${f}`,
              forceOpen: h && null == s && !b,
              asset: (0, r.jsx)(X.eu, {
                  src: t.author.getAvatarURL(void 0, 16),
                  size: Q._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: u,
              children: _,
          });
}
var el = n(478531),
    ei = n(194498),
    ea = n(376595),
    es = n(773503);
let eu = [];
function eo(e) {
    let { timeline: t, userIds: n, guildId: i, channelId: a } = e,
        s = l.useMemo(() => ea.H.fromAttachmentTimeline(t), [t]),
        [u, o] = l.useState({ speakingUserIds: [], activeSoundboards: [] }),
        { videoRef: d } = (0, c.X$)();
    return (
        (0, ei.A)(() => {
            let e = d.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            o(s.getEventsAtTimestamp(t));
        }),
        (0, r.jsx)(es.A, {
            speakingUserIds: u.speakingUserIds,
            activeSoundboards: eu,
            userIds: n,
            guildId: i,
            channelId: a,
        })
    );
}
var ec = n(915725),
    ed = n(458977),
    em = n(42502),
    ef = n(110742),
    eg = n(352527),
    eh = n(996682),
    ep = n(27989);
function ex(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: i = B.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...s
        } = e,
        u = (0, ep.J)(t),
        o = u?.width ?? n,
        c = u?.height ?? l;
    return (0, r.jsxs)("svg", {
        ...(0, eh.A)(s),
        width: o,
        height: c,
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
var ev = n(879241);
function eS(e) {
    let { attachment: t, channelId: n, messageId: i, isControlBarExpanded: s, isPlayerActive: u } = e,
        { enableDistributedClips: o } = ed.A.useConfig({ location: "DistributedClipShareCTA" }),
        c = (0, f.bG)(
            [ec.Ay, R.default],
            () =>
                (function (e, t) {
                    let n,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec.Ay,
                        l = r.getClips(),
                        i = e.clip_remote_id,
                        a = null != i ? r.getClipByRemoteId(i) : void 0;
                    if (null != a) return a;
                    let s = (0, ef.Vi)(e);
                    if (null == s || null == t || !e.clip_participants?.some((e) => e.id === t)) return;
                    let u = 0;
                    for (let e of Object.values(l)) {
                        let t = (0, ef.Gn)(e);
                        if (null == t) continue;
                        let r = (0, ef.hL)(s, t);
                        null != r && r > u && ((u = r), (n = e));
                    }
                    return n;
                })(t, R.default.getId(), ec.Ay),
            [t],
        ),
        { onShareClick: d } = (0, eg.A)(n),
        m = (0, f.bG)([R.default, E.A], () => {
            let e = E.A.getMessage(n, i);
            return (
                null != e &&
                e.author?.id !== R.default.getId() &&
                (null == e.messageReference ||
                    E.A.getMessage(n, e.messageReference.message_id)?.author?.id !== R.default.getId())
            );
        }),
        g = (0, f.bG)([ec.Ay], () => ec.Ay.hasRepliedWithClip(i), [i]),
        h = l.useCallback(
            (e) => {
                null != c &&
                    (e.stopPropagation(),
                    d({
                        clips: [c],
                        messageReference: { channel_id: n, message_id: i },
                        povTargetInformation: (0, em.A)(t),
                    }));
            },
            [d, c, n, i, t],
        );
    return o && null != c && !g && m
        ? (0, r.jsxs)("button", {
              className: a()(ev.eZ, { [ev.vu]: s, [ev.jn]: !u }),
              onClick: h,
              children: [
                  (0, r.jsx)(ex, { size: "refresh_sm", color: B.A.colors.WHITE }),
                  (0, r.jsx)(S.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: $.intl.string(V.default.YKst58),
                  }),
              ],
          })
        : null;
}
var eA = n(862649);
function eC(e) {
    let {
            playerState: t,
            controlBarAnimationSpring: n,
            isControlBarExpanded: l,
            isActive: i,
            isVolumeExpanded: d,
            attachment: m,
            guildId: f,
            isFullScreen: g,
            showParticipants: h,
            showTextContent: p,
            channelId: x,
            messageId: v,
            showSpeakingIndicators: S,
            clipUserIds: A,
            durationSeconds: C,
            showTimelineComments: b,
        } = e,
        { activeLayer: j } = (0, c.X$)(),
        { ref: I, width: y } = (0, s.Ay)();
    return (0, r.jsx)(o.N, {
        theme: u.NJ.ONYX,
        children: (e) =>
            (0, r.jsxs)("div", {
                ref: I,
                className: a()(eA.MU, e),
                children: [
                    (0, r.jsx)(el.A, {
                        createdAt: null != m.clip_created_at ? Date.parse(m.clip_created_at) : void 0,
                        participantIds: h ? A : [],
                        applicationId: m.application?.id,
                        title: m.title,
                        guildId: f,
                        playerState: t,
                        isControlBarExpanded: l,
                        isFullScreen: g,
                        activeLayer: j,
                        showTextContent: p,
                    }),
                    null != v &&
                        null != x &&
                        (0, r.jsx)(eS, {
                            isControlBarExpanded: l,
                            isPlayerActive: i,
                            attachment: m,
                            messageId: v,
                            channelId: x,
                        }),
                    S &&
                        null != m.clip_events_timeline &&
                        null != x &&
                        (0, r.jsx)(eo, { guildId: f, timeline: m.clip_events_timeline, userIds: A, channelId: x }),
                    i &&
                        null != f &&
                        null != x &&
                        null != v &&
                        (0, r.jsx)(F, {
                            controlBarAnimationSpring: n,
                            attachment: m,
                            channelId: x,
                            messageId: v,
                            guildId: f,
                            containerWidth: y,
                            hidden: !l || d,
                        }),
                    null != f &&
                        null != x &&
                        null != v &&
                        (0, r.jsx)(en, {
                            controlBarAnimationSpring: n,
                            attachment: m,
                            channelId: x,
                            messageId: v,
                            guildId: f,
                            durationSeconds: m.duration_secs ?? C,
                            hidden: !b,
                        }),
                ],
            }),
    });
}
