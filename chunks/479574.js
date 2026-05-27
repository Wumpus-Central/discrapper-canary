"use strict";
n.d(t, { A: () => eE });
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
var E = n(922016),
    m = n(460905),
    g = n(110384),
    A = n(720149),
    I = n(565645),
    T = n(822123),
    S = n(267889),
    y = n(451909),
    N = n(118517),
    v = n(232835),
    C = n(625494);
let R = (0, f.mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var O = n(652215),
    b = n(307731),
    D = n(381941),
    L = n(909022);
function w(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function M(e) {
    let { attachmentId: t, channelId: n, messageId: s, guildId: l, videoRef: u, isControlBarExpanded: c = !0 } = e,
        d = (0, T.QZ)(l).slice(0, 3),
        _ = (0, o.bG)([h.A], () => h.A.getChannel(n), [n]),
        { enableMediaComments: f } = R.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        p = r.useRef(null);
    function M(e, n) {
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
                A.A.sendMessage(_.id, y.Ay.parse(_, n), !1, {
                    location: D.Hx.MEDIA_MENTION,
                    messageReference: { channel_id: _.id, guild_id: _.getGuildId() ?? void 0, message_id: s },
                    mediaMention: w(t, u),
                });
            })(n);
    }
    return f && null != _ && null != s
        ? (0, i.jsxs)("div", {
              className: a()(L.M0, { [L.pd]: !c }),
              children: [
                  (0, i.jsx)("div", {
                      className: L.gm,
                      children: d.map((e) =>
                          (0, i.jsx)(
                              "button",
                              {
                                  type: "button",
                                  className: L.x6,
                                  onClick: (t) => M(t, e),
                                  children: (0, i.jsx)(I.A, {
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
                  (0, i.jsx)(P, {}),
                  (0, i.jsx)(E.Y, {
                      targetElementRef: p,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(S.A, {
                              channel: _,
                              closePopout: t,
                              messageId: s,
                              pickerIntention: b.EmojiIntention.CHAT,
                              onSelectEmoji: (e) => {
                                  let { emoji: t } = e;
                                  null != t && M(void 0, t);
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
                              className: L.x6,
                              children: (0, i.jsx)(m.n, { size: "sm" }),
                          }),
                  }),
                  (0, i.jsx)("button", {
                      type: "button",
                      className: L.x6,
                      onClick: function (e) {
                          if ((e.stopPropagation(), null == _ || null == s)) return;
                          let n = v.A.getMessage(_.id, s);
                          null == n ||
                              (null != u?.current?.currentTime &&
                                  ((0, N.Yf)({
                                      channel: _,
                                      message: n,
                                      shouldMention: !e.shiftKey,
                                      showMentionToggle: !_.isPrivate(),
                                      mediaMention: w(t, u),
                                  }),
                                  C._.dispatch(O.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: _.id })));
                      },
                      children: (0, i.jsx)(g.W, { size: "sm" }),
                  }),
              ],
          })
        : null;
}
function P() {
    return (0, i.jsx)("div", { className: L.yF });
}
var x = n(534890),
    k = n(661531),
    U = n(228366);
let G = [],
    F = {},
    V = {};
function B(e) {
    if (null == e.id || null == e.channel_id || null == e.media_mention || null != V[e.id]) return !1;
    let t = {
            attachmentId: e.media_mention.attachment_id,
            timestamp: e.media_mention.timestamp,
            channelId: e.channel_id,
            messageId: e.id,
        },
        n = F[t.attachmentId] ?? (F[t.attachmentId] = []);
    return (F[t.attachmentId] = n.concat(t).sort((e, t) => e.timestamp - t.timestamp)), (V[e.id] = t.attachmentId), !0;
}
function H(e) {
    let t = V[e];
    if (null == t) return !1;
    let n = F[t];
    if (null != n) {
        let i = n.filter((t) => t.messageId !== e);
        0 === i.length ? delete F[t] : (F[t] = i);
    }
    return delete V[e], !0;
}
class j extends o.Ay.Store {
    static displayName = "MediaMentionStore";
    getMentionsForAttachment(e) {
        return F[e] ?? G;
    }
}
let Y = new j(U.h, {
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => B(t) || e, !1);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => B(t) || e, !1);
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return B(t);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        return H(t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return t.reduce((e, t) => H(t) || e, !1);
    },
    LOGOUT: function () {
        (F = {}), (V = {});
    },
});
var W = n(7584);
let K = /^<(a)?:(\w+):(\d+)>$/;
var $ = n(933668);
function z(e) {
    let { attachmentId: t, durationSeconds: n, isControlBarExpanded: r = !0 } = e,
        s = (0, o.bG)([Y], () => Y.getMentionsForAttachment(t), [t]),
        { enableMediaComments: l } = R.useConfig({ location: "ClipEmbedMediaMentionTimeline" });
    return !l || 0 === s.length || n <= 0
        ? null
        : (0, i.jsx)("div", {
              className: a()($.IO, { [$.pd]: !r }),
              children: s.map((e) => (0, i.jsx)(q, { entry: e, durationSeconds: n }, e.messageId)),
          });
}
function q(e) {
    let { entry: t, durationSeconds: n } = e,
        s = (0, o.bG)([v.A], () => v.A.getMessage(t.channelId, t.messageId), [t.channelId, t.messageId]),
        a = `${Math.min(100, (t.timestamp / 1e3 / n) * 100)}%`,
        l = r.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(K);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== W.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(s?.content ?? ""),
            [s?.content],
        );
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: $.xL,
              style: { left: a },
              children:
                  null != l
                      ? (0, i.jsx)(I.A, {
                            emojiId: l.emojiId,
                            emojiName: l.emojiName,
                            shouldAnimate: !1,
                            animated: l.animated,
                            surrogate: l.surrogate,
                            className: $.Zg,
                        })
                      : (0, i.jsx)(x.o, { colorClass: $.Or, color: k.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
          });
}
var X = n(783384),
    Z = n(194498),
    Q = n(376595),
    J = n(773503);
let ee = [];
function et(e) {
    let { timeline: t, userIds: n, videoRef: s, guildId: a, channelId: o } = e,
        l = r.useMemo(() => Q.H.fromAttachmentTimeline(t), [t]),
        [u, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, Z.A)(() => {
            let e = s.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(J.A, {
            speakingUserIds: u.speakingUserIds,
            activeSoundboards: ee,
            userIds: n,
            guildId: a,
            channelId: o,
        })
    );
}
var en = n(834730),
    ei = n(734066),
    er = n(274372),
    es = n(352527),
    ea = n(996682),
    eo = n(27989);
function el(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = k.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        l = (0, eo.J)(t),
        u = l?.width ?? n,
        c = l?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, ea.A)(o),
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
var eu = n(16590),
    ec = n(375708),
    ed = n(310882);
function e_(e) {
    let { attachment: t, channelId: n, messageId: s, isControlBarExpanded: l, isPlayerActive: u } = e,
        { enableAdvancedSignals: c } = ei.L_.useConfig({ location: "DistributedClipShareCTA" }),
        d = t.clip_remote_id,
        _ = (0, o.bG)([er.A], () => (null != d ? er.A.getClipByRemoteId(d) : null)),
        { onShareClick: h } = (0, es.A)(n),
        f = (0, o.bG)([er.A], () => null != _ && null != n && null != d && er.A.wasClipSharedInChannel(d, n)),
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
              className: a()(ed.eZ, { [ed.vu]: l, [ed.jn]: !u }),
              onClick: p,
              children: [
                  (0, i.jsx)(el, { size: "refresh_sm", color: k.A.colors.WHITE }),
                  (0, i.jsx)(en.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: ec.intl.string(eu.default.YKst58),
                  }),
              ],
          });
}
var eh = n(696016),
    ef = n(581874);
let ep = (0, u.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: ef.Lq }),
});
function eE(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: s,
            active: u = !1,
            autoPlay: f,
            src: E,
            embed: m = !1,
            fillContainer: g = !1,
            minWidth: A = 500,
            maxWidth: I = 1 / 0,
            maxHeight: T = 1 / 0,
            channelId: S,
            messageId: y,
            showTextContent: N = I >= 250,
            showParticipants: v = !0,
            volume: C,
            autoMute: R,
            onVolumeChange: O,
            onMutedChange: b,
            onClick: D,
            onContextMenu: L,
            allowFullScreen: w = !0,
        } = e,
        P = t.width ?? 0,
        x = t.height ?? 0,
        k = (0, o.bG)([h.A], () => h.A.getBasicChannel(S)?.guild_id, [S]),
        U = P > 0 && x > 0 ? P / x : 16 / 9,
        G = Math.min(P > 0 ? P : A, I),
        F = G / U;
    F > T && (G = (F = T) * U), G < A && (F = (G = A) / U);
    let V = Math.round(Math.min(G, I)),
        B = Math.round(Math.min(F, T)),
        H = P > 0 && x > 0 ? Math.min(V / P, B / x, 1) : 1,
        j = (0, c.AE)({ src: n, width: Math.round(P * H), height: Math.round(x * H) }),
        [Y, W] = r.useState(!1),
        [K, $] = r.useState(!0),
        [q, Z] = r.useState(0),
        Q = r.useCallback((e, t) => {
            Number.isFinite(t) && t > 0 && Z((e) => (e === t ? e : t));
        }, []),
        J = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ee = r.useMemo(() => {
            if (J)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: l.r,
                        label: ec.intl.string(eu.default.hFWVZQ),
                        active: K,
                        onClick: () => $((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [J, K]),
        en = (0, _._)({ location: eh.Mu }).externalAnalyticsEnabled,
        ei = r.useMemo(
            () =>
                en
                    ? {
                          contentId: E,
                          videoStreamType: d.u.isHlsUrl(E) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [en, E, t.title],
        ),
        er = r.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: es } = p.useConfig({ location: "ClipsPlayer" }),
        ea = r.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: r, videoRef: s, isActive: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(X.A, {
                            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                            participantIds: v ? er : [],
                            applicationId: t.application?.id,
                            title: t.title,
                            guildId: k,
                            playerState: n,
                            isControlBarExpanded: r,
                            isFullScreen: Y,
                            showTextContent: N,
                        }),
                        null != y &&
                            null != S &&
                            (0, i.jsx)(e_, {
                                isControlBarExpanded: r,
                                isPlayerActive: a,
                                attachment: t,
                                messageId: y,
                                channelId: S,
                            }),
                        K &&
                            null != t.clip_events_timeline &&
                            null != s &&
                            null != S &&
                            (0, i.jsx)(et, {
                                guildId: k,
                                timeline: t.clip_events_timeline,
                                videoRef: s,
                                userIds: er,
                                channelId: S,
                            }),
                        a &&
                            null != k &&
                            (0, i.jsx)(M, {
                                attachmentId: t.id,
                                channelId: S,
                                messageId: y,
                                guildId: k,
                                videoRef: s,
                                isControlBarExpanded: r,
                            }),
                        null != k && (0, i.jsx)(z, { attachmentId: t.id, durationSeconds: q, isControlBarExpanded: r }),
                    ],
                });
            },
            [t, k, Y, v, N, S, y, K, er, q],
        );
    return (0, i.jsx)("div", {
        className: a()(ef.kL, { [ef.HA]: g }, s),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: m ? (e) => e.stopPropagation() : void 0,
        onKeyDown: m ? (e) => e.stopPropagation() : void 0,
        onContextMenu: L,
        style: g ? void 0 : { width: V, height: B },
        children: (0, i.jsx)(ep, {
            src: E,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: ee,
            poster: j,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: u,
            autoplay: f,
            initialVolume: C,
            initialMuted: R,
            onVolumeChange: O,
            onMutedChange: b,
            onProgressUpdate: Q,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ea,
            parentTransitionState: null,
            onFullscreenChange: W,
            onClick: D,
            withVideoHalo: !0,
            objectFit: g ? "cover" : void 0,
            muxContentMetadata: ei,
            hideFullScreenBtn: !w,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            scrubPreviewVttUrl: es ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: es ? t.spritesheet_image_url : void 0,
        }),
    });
}
