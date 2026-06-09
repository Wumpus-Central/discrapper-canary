"use strict";
n.d(t, { A: () => eN });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(26137),
    u = n(268218),
    c = n(776231),
    d = n(614269),
    _ = n(829097),
    h = n(734057),
    f = n(945810);
let p = (0, f.mj)({
    kind: "user",
    name: "2026-05-clips-scrub-preview-frontend",
    defaultConfig: { enableScrubPreview: !1 },
    variations: { 1: { enableScrubPreview: !0 } },
});
var E = n(505124),
    m = n(43990),
    g = n(922016),
    A = n(460905),
    I = n(110384),
    T = n(720149),
    S = n(565645),
    y = n(822123),
    N = n(267889),
    v = n(451909),
    C = n(118517),
    R = n(232835),
    O = n(625494);
let b = (0, f.mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var D = n(652215),
    L = n(307731),
    w = n(381941),
    M = n(909022);
function P(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function x(e) {
    let { attachmentId: t, channelId: n, messageId: s, guildId: l, videoRef: u, hidden: c = !1 } = e,
        d = (0, y.QZ)(l).slice(0, 3),
        _ = (0, o.bG)([h.A], () => h.A.getChannel(n), [n]),
        { enableMediaComments: f } = b.useConfig({ location: "ClipEmbedMediaMentionBar" }),
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
                T.A.sendMessage(_.id, v.Ay.parse(_, n), !1, {
                    location: w.Hx.MEDIA_MENTION,
                    messageReference: { channel_id: _.id, guild_id: _.getGuildId() ?? void 0, message_id: s },
                    mediaMention: P(t, u),
                });
            })(n);
    }
    return f && null != _ && null != s
        ? (0, i.jsxs)("div", {
              className: a()(M.M0, { [M.pd]: c }),
              children: [
                  (0, i.jsx)("div", {
                      className: M.gm,
                      children: d.map((e) =>
                          (0, i.jsx)(
                              "button",
                              {
                                  type: "button",
                                  className: M.x6,
                                  onClick: (t) => E(t, e),
                                  children: (0, i.jsx)(S.A, {
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
                  (0, i.jsx)(k, {}),
                  (0, i.jsx)(g.Y, {
                      targetElementRef: p,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(N.A, {
                              channel: _,
                              closePopout: t,
                              messageId: s,
                              pickerIntention: L.EmojiIntention.CHAT,
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
                              className: M.x6,
                              children: (0, i.jsx)(A.n, { size: "sm" }),
                          }),
                  }),
                  (0, i.jsx)("button", {
                      type: "button",
                      className: M.x6,
                      onClick: function (e) {
                          if ((e.stopPropagation(), null == _ || null == s)) return;
                          let n = R.A.getMessage(_.id, s);
                          null == n ||
                              (null != u?.current?.currentTime &&
                                  ((0, C.Yf)({
                                      channel: _,
                                      message: n,
                                      shouldMention: !e.shiftKey,
                                      showMentionToggle: !_.isPrivate(),
                                      mediaMention: P(t, u),
                                  }),
                                  O._.dispatch(D.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: _.id })));
                      },
                      children: (0, i.jsx)(I.W, { size: "sm" }),
                  }),
              ],
          })
        : null;
}
function k() {
    return (0, i.jsx)("div", { className: M.yF });
}
var U = n(459192),
    G = n(534890),
    F = n(661531),
    V = n(97808),
    B = n(778712),
    H = n(228366);
let j = [],
    Y = {},
    W = {};
function K(e) {
    if (null == e.id || null == e.channel_id || null == e.media_mention || null != W[e.id]) return !1;
    let t = {
            attachmentId: e.media_mention.attachment_id,
            timestamp: e.media_mention.timestamp,
            channelId: e.channel_id,
            messageId: e.id,
        },
        n = Y[t.attachmentId] ?? (Y[t.attachmentId] = []);
    return (Y[t.attachmentId] = n.concat(t).sort((e, t) => e.timestamp - t.timestamp)), (W[e.id] = t.attachmentId), !0;
}
function $(e) {
    let t = W[e];
    if (null == t) return !1;
    let n = Y[t];
    if (null != n) {
        let i = n.filter((t) => t.messageId !== e);
        0 === i.length ? delete Y[t] : (Y[t] = i);
    }
    return delete W[e], !0;
}
class z extends o.Ay.Store {
    static displayName = "MediaMentionStore";
    getMentionsForAttachment(e) {
        return Y[e] ?? j;
    }
}
let q = new z(H.h, {
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => K(t) || e, !1);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => K(t) || e, !1);
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return K(t);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        return $(t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return t.reduce((e, t) => $(t) || e, !1);
    },
    LOGOUT: function () {
        (Y = {}), (W = {});
    },
});
var X = n(7584);
let Z = /^<(a)?:(\w+):(\d+)>$/;
var Q = n(465364),
    J = n(933668);
function ee(e) {
    let { attachmentId: t, durationSeconds: n, hidden: r = !1 } = e,
        s = (0, o.bG)([q], () => q.getMentionsForAttachment(t), [t]),
        { enableMediaComments: l } = b.useConfig({ location: "ClipEmbedMediaMentionTimeline" });
    return !l || 0 === s.length || n <= 0
        ? null
        : (0, i.jsx)("div", {
              className: a()(J.IO, { [J.pd]: r }),
              children: s.map((e) => (0, i.jsx)(et, { entry: e, durationSeconds: n }, e.messageId)),
          });
}
function et(e) {
    let { entry: t, durationSeconds: n } = e,
        s = (0, o.bG)([R.A], () => R.A.getMessage(t.channelId, t.messageId), [t.channelId, t.messageId]),
        a = `${Math.min(100, (t.timestamp / 1e3 / n) * 100)}%`,
        l = r.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(Z);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== X.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(s?.content ?? ""),
            [s?.content],
        ),
        u = r.useMemo(() => (null != s && "" !== s.content ? (0, Q.Ay)(s, { formatInline: !0 }).content : null), [s]);
    if (null == s) return null;
    let c = (0, i.jsx)("div", {
        className: J.xL,
        style: { left: a },
        children:
            null != l
                ? (0, i.jsx)(S.A, {
                      emojiId: l.emojiId,
                      emojiName: l.emojiName,
                      shouldAnimate: !1,
                      animated: l.animated,
                      surrogate: l.surrogate,
                      className: J.Zg,
                  })
                : (0, i.jsx)(G.o, { colorClass: J.Or, color: F.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
    });
    return null == u
        ? c
        : (0, i.jsx)(U.u, {
              asset: (0, i.jsx)(V.eu, {
                  src: s.author.getAvatarURL(void 0, 16),
                  size: B._3.SIZE_16,
                  "aria-hidden": !0,
              }),
              assetSize: 16,
              lineClamp: 1,
              body: u,
              children: c,
          });
}
var en = n(783384),
    ei = n(194498),
    er = n(376595),
    es = n(773503);
let ea = [];
function eo(e) {
    let { timeline: t, userIds: n, videoRef: s, guildId: a, channelId: o } = e,
        l = r.useMemo(() => er.H.fromAttachmentTimeline(t), [t]),
        [u, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, ei.A)(() => {
            let e = s.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(es.A, {
            speakingUserIds: u.speakingUserIds,
            activeSoundboards: ea,
            userIds: n,
            guildId: a,
            channelId: o,
        })
    );
}
var el = n(834730),
    eu = n(274372),
    ec = n(458977),
    ed = n(352527),
    e_ = n(996682),
    eh = n(27989);
function ef(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = F.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        l = (0, eh.J)(t),
        u = l?.width ?? n,
        c = l?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, e_.A)(o),
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
var ep = n(16590),
    eE = n(375708),
    em = n(310882);
function eg(e) {
    let { attachment: t, channelId: n, messageId: s, isControlBarExpanded: l, isPlayerActive: u } = e,
        { enableDistributedClips: c } = ec.A.useConfig({ location: "DistributedClipShareCTA" }),
        d = t.clip_remote_id,
        _ = (0, o.bG)([eu.Ay], () => (null != d ? eu.Ay.getClipByRemoteId(d) : null)),
        { onShareClick: h } = (0, ed.A)(n),
        f = (0, o.bG)([eu.Ay], () => null != _ && null != n && null != d && eu.Ay.wasClipSharedInChannel(d, n)),
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
              className: a()(em.eZ, { [em.vu]: l, [em.jn]: !u }),
              onClick: p,
              children: [
                  (0, i.jsx)(ef, { size: "refresh_sm", color: F.A.colors.WHITE }),
                  (0, i.jsx)(el.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: eE.intl.string(ep.default.YKst58),
                  }),
              ],
          });
}
var eA = n(834926);
function eI(e) {
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
        clipUserIds: g,
        durationSeconds: A,
    } = e;
    return (0, i.jsx)(m.N, {
        theme: E.NJ.MIDNIGHT,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(eA.MU, e),
                children: [
                    (0, i.jsx)(en.A, {
                        createdAt: null != l.clip_created_at ? Date.parse(l.clip_created_at) : void 0,
                        participantIds: d ? g : [],
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
                        (0, i.jsx)(eg, {
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
                        (0, i.jsx)(eo, {
                            guildId: u,
                            timeline: l.clip_events_timeline,
                            videoRef: r,
                            userIds: g,
                            channelId: h,
                        }),
                    s &&
                        null != u &&
                        (0, i.jsx)(x, {
                            attachmentId: l.id,
                            channelId: h,
                            messageId: f,
                            guildId: u,
                            videoRef: r,
                            hidden: !n || o,
                        }),
                    null != u &&
                        (0, i.jsx)(ee, { attachmentId: l.id, durationSeconds: l.duration_secs ?? A, hidden: !n }),
                ],
            }),
    });
}
var eT = n(696016),
    eS = n(581874);
let ey = (0, u.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: eS.Lq }),
});
function eN(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: s,
            autoPlay: u,
            src: f,
            fillContainer: E = !1,
            minWidth: m = 500,
            maxWidth: g = 1 / 0,
            maxHeight: A = 1 / 0,
            channelId: I,
            messageId: T,
            showTextContent: S = g >= 250,
            showParticipants: y = !0,
            volume: N,
            autoMute: v,
            onVolumeChange: C,
            onMutedChange: R,
            onClick: O,
            onContextMenu: b,
            allowFullScreen: D = !0,
        } = e,
        L = t.width ?? 0,
        w = t.height ?? 0,
        M = (0, o.bG)([h.A], () => h.A.getBasicChannel(I)?.guild_id, [I]),
        P = L > 0 && w > 0 ? L / w : 16 / 9,
        x = Math.min(L > 0 ? L : m, g),
        k = x / P;
    k > A && (x = (k = A) * P), x < m && (k = (x = m) / P);
    let U = Math.round(Math.min(x, g)),
        G = Math.round(Math.min(k, A)),
        F = L > 0 && w > 0 ? Math.min(U / L, G / w, 1) : 1,
        V = (0, c.AE)({ src: n, width: Math.round(L * F), height: Math.round(w * F) }),
        [B, H] = r.useState(!1),
        [j, Y] = r.useState(!0),
        [W, K] = r.useState(0),
        $ = r.useCallback((e, t) => {
            Number.isFinite(t) && t > 0 && K((e) => (e === t ? e : t));
        }, []),
        z = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        q = r.useMemo(() => {
            if (z)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: l.r,
                        label: eE.intl.string(ep.default.hFWVZQ),
                        active: j,
                        onClick: () => Y((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [z, j]),
        X = (0, _._)({ location: eT.Mu }).externalAnalyticsEnabled,
        Z = r.useMemo(
            () =>
                X
                    ? {
                          contentId: f,
                          videoStreamType: d.u.isHlsUrl(f) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [X, f, t.title],
        ),
        Q = r.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: J } = p.useConfig({ location: "ClipsPlayer" }),
        ee = r.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: r, videoRef: s, isActive: a, isVolumeExpanded: o } = e;
                return (0, i.jsx)(eI, {
                    attachment: t,
                    guildId: M,
                    isFullScreen: B,
                    showParticipants: y,
                    showTextContent: S,
                    channelId: I,
                    messageId: T,
                    showSpeakingIndicators: j,
                    clipUserIds: Q,
                    durationSeconds: W,
                    playerState: n,
                    isControlBarExpanded: r,
                    videoRef: s,
                    isActive: a,
                    isVolumeExpanded: o,
                });
            },
            [t, M, B, y, S, I, T, j, Q, W],
        );
    return (0, i.jsx)("div", {
        className: a()(eS.kL, { [eS.HA]: E }, s),
        onClick: (e) => e.stopPropagation(),
        onContextMenu: b,
        style: E ? void 0 : { width: U, height: G },
        children: (0, i.jsx)(ey, {
            src: f,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: q,
            poster: V,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            autoplay: u,
            initialActive: !1,
            initialVolume: N,
            initialMuted: v,
            onVolumeChange: C,
            onMutedChange: R,
            onProgressUpdate: $,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ee,
            parentTransitionState: null,
            onFullscreenChange: H,
            onClick: O,
            withVideoHalo: !0,
            objectFit: E ? "cover" : void 0,
            muxContentMetadata: Z,
            hideFullScreenBtn: !D,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            scrubPreviewVttUrl: J ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: J ? t.spritesheet_image_url : void 0,
        }),
    });
}
