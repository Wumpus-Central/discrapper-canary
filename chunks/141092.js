"use strict";
n.d(t, { A: () => ev });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(876230),
    u = n(26137),
    c = n(268218),
    d = n(776231),
    _ = n(614269),
    h = n(829097),
    f = n(734057),
    p = n(945810);
let E = (0, p.mj)({
    kind: "user",
    name: "2026-05-clips-scrub-preview-frontend",
    defaultConfig: { enableScrubPreview: !1 },
    variations: { 1: { enableScrubPreview: !0 } },
});
var m = n(505124),
    g = n(43990),
    A = n(922016),
    I = n(460905),
    T = n(110384),
    S = n(720149),
    y = n(565645),
    N = n(822123),
    v = n(267889),
    C = n(451909),
    R = n(118517),
    O = n(232835),
    b = n(625494);
let D = (0, p.mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var L = n(652215),
    w = n(307731),
    M = n(381941),
    P = n(909022);
function x(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function k(e) {
    let { attachmentId: t, channelId: n, messageId: s, guildId: l, videoRef: u, hidden: c = !1 } = e,
        d = (0, N.QZ)(l).slice(0, 3),
        _ = (0, o.bG)([f.A], () => f.A.getChannel(n), [n]),
        { enableMediaComments: h } = D.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        p = r.useRef(null);
    function E(e, n) {
        e?.stopPropagation(),
            (function (e) {
                if (null == _ || null == s || null == u?.current?.currentTime) return;
                let n =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.name}:${e.id}>`
                            : `<:${e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                S.A.sendMessage(_.id, C.Ay.parse(_, n), !1, {
                    location: M.Hx.MEDIA_MENTION,
                    messageReference: { channel_id: _.id, guild_id: _.getGuildId() ?? void 0, message_id: s },
                    mediaMention: x(t, u),
                });
            })(n);
    }
    return h && null != _ && null != s
        ? (0, i.jsxs)("div", {
              className: a()(P.M0, { [P.pd]: c }),
              children: [
                  (0, i.jsx)("div", {
                      className: P.gm,
                      children: d.map((e) =>
                          (0, i.jsx)(
                              "button",
                              {
                                  type: "button",
                                  className: P.x6,
                                  onClick: (t) => E(t, e),
                                  children: (0, i.jsx)(y.A, {
                                      emojiId: e.id,
                                      emojiName: null != e.id ? e.name : e.surrogates,
                                      shouldAnimate: !1,
                                      animated: "animated" in e ? e.animated : void 0,
                                      surrogate: "surrogates" in e ? e.surrogates : void 0,
                                  }),
                              },
                              `${e.id ?? 0}:${e.name}`,
                          ),
                      ),
                  }),
                  (0, i.jsx)(U, {}),
                  (0, i.jsx)(A.Y, {
                      targetElementRef: p,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(v.A, {
                              channel: _,
                              closePopout: t,
                              messageId: s,
                              pickerIntention: w.EmojiIntention.CHAT,
                              onSelectEmoji: (e) => {
                                  let { emoji: t } = e;
                                  null != t && E(void 0, t);
                              },
                          });
                      },
                      position: "top",
                      align: "center",
                      clickTrap: !0,
                      children: (e) =>
                          (0, i.jsx)("button", {
                              ...e,
                              ref: p,
                              type: "button",
                              className: P.x6,
                              children: (0, i.jsx)(I.n, { size: "sm" }),
                          }),
                  }),
                  (0, i.jsx)("button", {
                      type: "button",
                      className: P.x6,
                      onClick: function (e) {
                          if ((e.stopPropagation(), null == _ || null == s)) return;
                          let n = O.A.getMessage(_.id, s);
                          null == n ||
                              (null != u?.current?.currentTime &&
                                  ((0, R.Yf)({
                                      channel: _,
                                      message: n,
                                      shouldMention: !e.shiftKey,
                                      showMentionToggle: !_.isPrivate(),
                                      mediaMention: x(t, u),
                                  }),
                                  b._.dispatch(L.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: _.id })));
                      },
                      children: (0, i.jsx)(T.W, { size: "sm" }),
                  }),
              ],
          })
        : null;
}
function U() {
    return (0, i.jsx)("div", { className: P.yF });
}
var G = n(459192),
    F = n(534890),
    V = n(661531),
    B = n(97808),
    H = n(778712),
    j = n(228366);
let Y = [],
    W = {},
    K = {};
function $(e) {
    if (null == e.id || null == e.channel_id || null == e.media_mention || null != K[e.id]) return !1;
    let t = {
            attachmentId: e.media_mention.attachment_id,
            timestamp: e.media_mention.timestamp,
            channelId: e.channel_id,
            messageId: e.id,
        },
        n = W[t.attachmentId] ?? (W[t.attachmentId] = []);
    return (W[t.attachmentId] = n.concat(t).sort((e, t) => e.timestamp - t.timestamp)), (K[e.id] = t.attachmentId), !0;
}
function z(e) {
    let t = K[e];
    if (null == t) return !1;
    let n = W[t];
    if (null != n) {
        let i = n.filter((t) => t.messageId !== e);
        0 === i.length ? delete W[t] : (W[t] = i);
    }
    return delete K[e], !0;
}
class q extends o.Ay.Store {
    static displayName = "MediaMentionStore";
    getMentionsForAttachment(e) {
        return W[e] ?? Y;
    }
}
let X = new q(j.h, {
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => $(t) || e, !1);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => $(t) || e, !1);
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return $(t);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        return z(t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return t.reduce((e, t) => z(t) || e, !1);
    },
    LOGOUT: function () {
        (W = {}), (K = {});
    },
});
var Z = n(7584);
let Q = /^<(a)?:(\w+):(\d+)>$/;
var J = n(465364),
    ee = n(933668);
function et(e) {
    let { attachmentId: t, durationSeconds: n, hidden: r = !1 } = e,
        s = (0, o.bG)([X], () => X.getMentionsForAttachment(t), [t]),
        { enableMediaComments: l } = D.useConfig({ location: "ClipEmbedMediaMentionTimeline" });
    return !l || 0 === s.length || n <= 0
        ? null
        : (0, i.jsx)("div", {
              className: a()(ee.IO, { [ee.pd]: r }),
              children: s.map((e) => (0, i.jsx)(en, { entry: e, durationSeconds: n }, e.messageId)),
          });
}
function en(e) {
    let { entry: t, durationSeconds: n } = e,
        s = (0, o.bG)([O.A], () => O.A.getMessage(t.channelId, t.messageId), [t.channelId, t.messageId]),
        a = `${Math.min(100, (t.timestamp / 1e3 / n) * 100)}%`,
        l = r.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(Q);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== Z.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(s?.content ?? ""),
            [s?.content],
        ),
        u = r.useMemo(() => (null != s && "" !== s.content ? (0, J.Ay)(s, { formatInline: !0 }).content : null), [s]);
    if (null == s) return null;
    let c = (0, i.jsx)("div", {
        className: ee.xL,
        style: { left: a },
        children:
            null != l
                ? (0, i.jsx)(y.A, {
                      emojiId: l.emojiId,
                      emojiName: l.emojiName,
                      shouldAnimate: !1,
                      animated: l.animated,
                      surrogate: l.surrogate,
                      className: ee.Zg,
                  })
                : (0, i.jsx)(F.o, { colorClass: ee.Or, color: V.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == u
        ? c
        : (0, i.jsx)(G.u, {
              asset: (0, i.jsx)(B.eu, {
                  src: s.author.getAvatarURL(void 0, 16),
                  size: H._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: u,
              children: c,
          });
}
var ei = n(783384),
    er = n(194498),
    es = n(376595),
    ea = n(773503);
let eo = [];
function el(e) {
    let { timeline: t, userIds: n, videoRef: s, guildId: a, channelId: o } = e,
        l = r.useMemo(() => es.H.fromAttachmentTimeline(t), [t]),
        [u, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, er.A)(() => {
            let e = s.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(ea.A, {
            speakingUserIds: u.speakingUserIds,
            activeSoundboards: eo,
            userIds: n,
            guildId: a,
            channelId: o,
        })
    );
}
var eu = n(834730),
    ec = n(274372),
    ed = n(458977),
    e_ = n(352527),
    eh = n(996682),
    ef = n(27989);
function ep(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = V.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        l = (0, ef.J)(t),
        u = l?.width ?? n,
        c = l?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, eh.A)(o),
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
var eE = n(16590),
    em = n(375708),
    eg = n(310882);
function eA(e) {
    let { attachment: t, channelId: n, messageId: s, isControlBarExpanded: l, isPlayerActive: u } = e,
        { enableDistributedClips: c } = ed.A.useConfig({ location: "DistributedClipShareCTA" }),
        d = t.clip_remote_id,
        _ = (0, o.bG)([ec.Ay], () => (null != d ? ec.Ay.getClipByRemoteId(d) : null)),
        { onShareClick: h } = (0, e_.A)(n),
        f = (0, o.bG)([ec.Ay], () => null != _ && null != n && null != d && ec.Ay.wasClipSharedInChannel(d, n)),
        p = r.useCallback(
            (e) => {
                null != _ &&
                    (e.stopPropagation(), h({ clips: [_], messageReference: { channel_id: n, message_id: s } }));
            },
            [h, _, n, s],
        );
    return !c || null == _ || f
        ? null
        : (0, i.jsxs)("button", {
              className: a()(eg.eZ, { [eg.vu]: l, [eg.jn]: !u }),
              onClick: p,
              children: [
                  (0, i.jsx)(ep, { size: "refresh_sm", color: V.A.colors.WHITE }),
                  (0, i.jsx)(eu.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: em.intl.string(eE.default.YKst58),
                  }),
              ],
          });
}
var eI = n(834926);
function eT(e) {
    let {
        playerState: t,
        isControlBarExpanded: n,
        videoRef: r,
        isActive: s,
        isVolumeExpanded: o,
        attachment: l,
        guildId: u,
        isFullScreen: c,
        showParticipants: d,
        showTextContent: _,
        channelId: h,
        messageId: f,
        showSpeakingIndicators: p,
        clipUserIds: E,
        durationSeconds: A,
    } = e;
    return (0, i.jsx)(g.N, {
        theme: m.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(eI.MU, e),
                children: [
                    (0, i.jsx)(ei.A, {
                        createdAt: null != l.clip_created_at ? Date.parse(l.clip_created_at) : void 0,
                        participantIds: d ? E : [],
                        applicationId: l.application?.id,
                        title: l.title,
                        guildId: u,
                        playerState: t,
                        isControlBarExpanded: n,
                        isFullScreen: c,
                        showTextContent: _,
                    }),
                    null != f &&
                        null != h &&
                        (0, i.jsx)(eA, {
                            isControlBarExpanded: n,
                            isPlayerActive: s,
                            attachment: l,
                            messageId: f,
                            channelId: h,
                        }),
                    p &&
                        null != l.clip_events_timeline &&
                        null != r &&
                        null != h &&
                        (0, i.jsx)(el, {
                            guildId: u,
                            timeline: l.clip_events_timeline,
                            videoRef: r,
                            userIds: E,
                            channelId: h,
                        }),
                    s &&
                        null != u &&
                        (0, i.jsx)(k, {
                            attachmentId: l.id,
                            channelId: h,
                            messageId: f,
                            guildId: u,
                            videoRef: r,
                            hidden: !n || o,
                        }),
                    null != u &&
                        (0, i.jsx)(et, { attachmentId: l.id, durationSeconds: l.duration_secs ?? A, hidden: !n }),
                ],
            }),
    });
}
var eS = n(696016),
    ey = n(581874);
let eN = (0, c.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: ey.Lq }),
});
function ev(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: s,
            autoPlay: c,
            src: p,
            fillContainer: m = !1,
            minWidth: g = 500,
            maxWidth: A = 1 / 0,
            maxHeight: I = 1 / 0,
            channelId: T,
            messageId: S,
            showTextContent: y = A >= 250,
            showParticipants: N = !0,
            volume: v,
            autoMute: C,
            onVolumeChange: R,
            onMutedChange: O,
            onClick: b,
            onContextMenu: D,
            onPlay: L,
            allowFullScreen: w = !0,
        } = e,
        M = t.width ?? 0,
        P = t.height ?? 0,
        x = (0, o.bG)([f.A], () => f.A.getBasicChannel(T)?.guild_id, [T]),
        k = M > 0 && P > 0 ? M / P : 16 / 9,
        U = Math.min(M > 0 ? M : g, A),
        G = U / k;
    G > I && (U = (G = I) * k), U < g && (G = (U = g) / k);
    let F = Math.round(Math.min(U, A)),
        V = Math.round(Math.min(G, I)),
        B = M > 0 && P > 0 ? Math.min(F / M, V / P, 1) : 1,
        H = (0, d.AE)({ src: n, width: Math.round(M * B), height: Math.round(P * B) }),
        [j, Y] = r.useState(!1),
        [W, K] = r.useState(!0),
        [$, z] = r.useState(0),
        q = r.useRef(0),
        X = r.useCallback(
            (e, t) => {
                t !== l.KB.BUFFERING_RECOVERY && e === l.Q6.PLAYING && L?.(t !== l.KB.USER, 1e3 * q.current, 1e3 * $);
            },
            [$, L],
        ),
        Z = r.useCallback((e, t) => {
            (q.current = e), Number.isFinite(t) && t > 0 && z((e) => (e === t ? e : t));
        }, []),
        Q = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        J = r.useMemo(() => {
            if (Q)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: u.r,
                        label: em.intl.string(eE.default.hFWVZQ),
                        active: W,
                        onClick: () => K((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [Q, W]),
        ee = (0, h._)({ location: eS.Mu }).externalAnalyticsEnabled,
        et = r.useMemo(
            () =>
                ee
                    ? {
                          contentId: p,
                          videoStreamType: _.u.isHlsUrl(p) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [ee, p, t.title],
        ),
        en = r.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: ei } = E.useConfig({ location: "ClipsPlayer" }),
        er = r.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: r, videoRef: s, isActive: a, isVolumeExpanded: o } = e;
                return (0, i.jsx)(eT, {
                    attachment: t,
                    guildId: x,
                    isFullScreen: j,
                    showParticipants: N,
                    showTextContent: y,
                    channelId: T,
                    messageId: S,
                    showSpeakingIndicators: W,
                    clipUserIds: en,
                    durationSeconds: $,
                    playerState: n,
                    isControlBarExpanded: r,
                    videoRef: s,
                    isActive: a,
                    isVolumeExpanded: o,
                });
            },
            [t, x, j, N, y, T, S, W, en, $],
        );
    return (0, i.jsx)("div", {
        className: a()(ey.kL, { [ey.HA]: m }, s),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: D,
        style: m ? void 0 : { width: F, height: V },
        children: (0, i.jsx)(eN, {
            src: p,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: J,
            poster: H,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: c,
            initialActive: !1,
            initialVolume: v,
            initialMuted: C,
            onVolumeChange: R,
            onMutedChange: O,
            onProgressUpdate: Z,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: er,
            parentTransitionState: null,
            onFullscreenChange: Y,
            onClick: b,
            onPlayerStateChange: X,
            withVideoHalo: !0,
            objectFit: m ? "cover" : void 0,
            muxContentMetadata: et,
            hideFullScreenBtn: !w,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            scrubPreviewVttUrl: ei ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: ei ? t.spritesheet_image_url : void 0,
        }),
    });
}
