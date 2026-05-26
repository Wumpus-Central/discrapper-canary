"use strict";
n.d(t, { A: () => eh });
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
    f = n(734057),
    h = n(922016),
    p = n(460905),
    E = n(110384),
    m = n(720149),
    g = n(565645),
    A = n(822123),
    I = n(267889),
    T = n(451909),
    S = n(118517),
    N = n(232835),
    y = n(625494);
let C = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var v = n(652215),
    O = n(307731),
    R = n(381941),
    b = n(683934);
function D(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function L(e) {
    let { attachmentId: t, channelId: n, messageId: s, guildId: l, videoRef: u, isControlBarExpanded: c = !0 } = e,
        d = (0, A.QZ)(l).slice(0, 3),
        _ = (0, o.bG)([f.A], () => f.A.getChannel(n), [n]),
        { enableMediaComments: L } = C.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        M = r.useRef(null);
    function P(e, n) {
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
                m.A.sendMessage(_.id, T.Ay.parse(_, n), !1, {
                    location: R.Hx.MEDIA_MENTION,
                    messageReference: { channel_id: _.id, guild_id: _.getGuildId() ?? void 0, message_id: s },
                    mediaMention: D(t, u),
                });
            })(n);
    }
    return L && null != _ && null != s
        ? (0, i.jsxs)("div", {
              className: a()(b.M0, { [b.pd]: !c }),
              children: [
                  (0, i.jsx)("div", {
                      className: b.gm,
                      children: d.map((e) =>
                          (0, i.jsx)(
                              "button",
                              {
                                  type: "button",
                                  className: b.x6,
                                  onClick: (t) => P(t, e),
                                  children: (0, i.jsx)(g.A, {
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
                  (0, i.jsx)(w, {}),
                  (0, i.jsx)(h.Y, {
                      targetElementRef: M,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(I.A, {
                              channel: _,
                              closePopout: t,
                              messageId: s,
                              pickerIntention: O.EmojiIntention.CHAT,
                              onSelectEmoji: (e) => {
                                  let { emoji: t } = e;
                                  null != t && P(void 0, t);
                              },
                          });
                      },
                      position: "top",
                      align: "center",
                      clickTrap: !0,
                      children: (e) =>
                          (0, i.jsx)("button", {
                              ...e,
                              ref: M,
                              type: "button",
                              className: b.x6,
                              children: (0, i.jsx)(p.n, { size: "sm" }),
                          }),
                  }),
                  (0, i.jsx)("button", {
                      type: "button",
                      className: b.x6,
                      onClick: function (e) {
                          if ((e.stopPropagation(), null == _ || null == s)) return;
                          let n = N.A.getMessage(_.id, s);
                          null == n ||
                              (null != u?.current?.currentTime &&
                                  ((0, S.Yf)({
                                      channel: _,
                                      message: n,
                                      shouldMention: !e.shiftKey,
                                      showMentionToggle: !_.isPrivate(),
                                      mediaMention: D(t, u),
                                  }),
                                  y._.dispatch(v.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: _.id })));
                      },
                      children: (0, i.jsx)(E.W, { size: "sm" }),
                  }),
              ],
          })
        : null;
}
function w() {
    return (0, i.jsx)("div", { className: b.yF });
}
var M = n(534890),
    P = n(661531),
    x = n(228366);
let U = [],
    k = {},
    G = {};
function F(e) {
    if (null == e.id || null == e.channel_id || null == e.media_mention || null != G[e.id]) return !1;
    let t = {
            attachmentId: e.media_mention.attachment_id,
            timestamp: e.media_mention.timestamp,
            channelId: e.channel_id,
            messageId: e.id,
        },
        n = k[t.attachmentId] ?? (k[t.attachmentId] = []);
    return (k[t.attachmentId] = n.concat(t).sort((e, t) => e.timestamp - t.timestamp)), (G[e.id] = t.attachmentId), !0;
}
function V(e) {
    let t = G[e];
    if (null == t) return !1;
    let n = k[t];
    if (null != n) {
        let i = n.filter((t) => t.messageId !== e);
        0 === i.length ? delete k[t] : (k[t] = i);
    }
    return delete G[e], !0;
}
class B extends o.Ay.Store {
    static displayName = "MediaMentionStore";
    getMentionsForAttachment(e) {
        return k[e] ?? U;
    }
}
let H = new B(x.h, {
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => F(t) || e, !1);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => F(t) || e, !1);
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return F(t);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        return V(t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return t.reduce((e, t) => V(t) || e, !1);
    },
    LOGOUT: function () {
        (k = {}), (G = {});
    },
});
var j = n(7584);
let Y = /^<(a)?:(\w+):(\d+)>$/;
var W = n(227748);
function K(e) {
    let { attachmentId: t, durationSeconds: n, isControlBarExpanded: r = !0 } = e,
        s = (0, o.bG)([H], () => H.getMentionsForAttachment(t), [t]),
        { enableMediaComments: l } = C.useConfig({ location: "ClipEmbedMediaMentionTimeline" });
    return !l || 0 === s.length || n <= 0
        ? null
        : (0, i.jsx)("div", {
              className: a()(W.IO, { [W.pd]: !r }),
              children: s.map((e) => (0, i.jsx)(z, { entry: e, durationSeconds: n }, e.messageId)),
          });
}
function z(e) {
    let { entry: t, durationSeconds: n } = e,
        s = (0, o.bG)([N.A], () => N.A.getMessage(t.channelId, t.messageId), [t.channelId, t.messageId]),
        a = `${Math.min(100, (t.timestamp / 1e3 / n) * 100)}%`,
        l = r.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(Y);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== j.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(s?.content ?? ""),
            [s?.content],
        );
    return null == s
        ? null
        : (0, i.jsx)("div", {
              className: W.xL,
              style: { left: a },
              children:
                  null != l
                      ? (0, i.jsx)(g.A, {
                            emojiId: l.emojiId,
                            emojiName: l.emojiName,
                            shouldAnimate: !1,
                            animated: l.animated,
                            surrogate: l.surrogate,
                            className: W.Zg,
                        })
                      : (0, i.jsx)(M.o, { colorClass: W.Or, color: P.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
          });
}
var $ = n(783384),
    q = n(194498),
    X = n(376595),
    Z = n(773503);
let Q = [];
function J(e) {
    let { timeline: t, userIds: n, videoRef: s, guildId: a, channelId: o } = e,
        l = r.useMemo(() => X.H.fromAttachmentTimeline(t), [t]),
        [u, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, q.A)(() => {
            let e = s.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(Z.A, {
            speakingUserIds: u.speakingUserIds,
            activeSoundboards: Q,
            userIds: n,
            guildId: a,
            channelId: o,
        })
    );
}
var ee = n(834730),
    et = n(734066),
    en = n(274372),
    ei = n(352527),
    er = n(996682),
    es = n(27989);
function ea(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = P.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        l = (0, es.J)(t),
        u = l?.width ?? n,
        c = l?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, er.A)(o),
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
var eo = n(788077),
    el = n(375708),
    eu = n(974114);
function ec(e) {
    let { attachment: t, channelId: n, messageId: s, isControlBarExpanded: l, isPlayerActive: u } = e,
        { enableAdvancedSignals: c } = et.L_.useConfig({ location: "DistributedClipShareCTA" }),
        d = t.clip_remote_id,
        _ = (0, o.bG)([en.A], () => (null != d ? en.A.getClipByRemoteId(d) : null)),
        { onShareClick: f } = (0, ei.A)(n),
        h = (0, o.bG)([en.A], () => null != _ && null != n && null != d && en.A.wasClipSharedInChannel(d, n)),
        p = r.useCallback(
            (e) => {
                null != _ &&
                    (e.stopPropagation(), f({ clips: [_], messageReference: { channel_id: n, message_id: s } }));
            },
            [f, _, n, s],
        );
    return !c || null == _ || h
        ? null
        : (0, i.jsxs)("button", {
              className: a()(eu.eZ, { [eu.vu]: l, [eu.jn]: !u }),
              onClick: p,
              children: [
                  (0, i.jsx)(ea, { size: "refresh_sm", color: P.A.colors.WHITE }),
                  (0, i.jsx)(ee.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: el.intl.string(eo.default.YKst58),
                  }),
              ],
          });
}
var ed = n(696016),
    e_ = n(658610);
let ef = (0, u.Fe)({
    createPromise: () =>
        Promise.all([n.e("3040"), n.e("57174"), n.e("84971"), n.e("78179"), n.e("78010"), n.e("91652")]).then(
            n.bind(n, 664111),
        ),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: e_.Lq }),
});
function eh(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: s,
            active: u = !1,
            autoPlay: h,
            src: p,
            embed: E = !1,
            fillContainer: m = !1,
            minWidth: g = 500,
            maxWidth: A = 1 / 0,
            maxHeight: I = 1 / 0,
            channelId: T,
            messageId: S,
            showTextContent: N = A >= 250,
            showParticipants: y = !0,
            volume: C,
            autoMute: v,
            onVolumeChange: O,
            onMutedChange: R,
            onClick: b,
            onContextMenu: D,
            allowFullScreen: w = !0,
        } = e,
        M = t.width ?? 0,
        P = t.height ?? 0,
        x = (0, o.bG)([f.A], () => f.A.getBasicChannel(T)?.guild_id, [T]),
        U = M > 0 && P > 0 ? M / P : 16 / 9,
        k = Math.min(M > 0 ? M : g, A),
        G = k / U;
    G > I && (k = (G = I) * U), k < g && (G = (k = g) / U);
    let F = Math.round(Math.min(k, A)),
        V = Math.round(Math.min(G, I)),
        B = M > 0 && P > 0 ? Math.min(F / M, V / P, 1) : 1,
        H = (0, c.AE)({ src: n, width: Math.round(M * B), height: Math.round(P * B) }),
        [j, Y] = r.useState(!1),
        [W, z] = r.useState(!0),
        [q, X] = r.useState(0),
        Z = r.useCallback((e, t) => {
            Number.isFinite(t) && t > 0 && X((e) => (e === t ? e : t));
        }, []),
        Q = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ee = r.useMemo(() => {
            if (Q)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: l.r,
                        label: el.intl.string(eo.default.hFWVZQ),
                        active: W,
                        onClick: () => z((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [Q, W]),
        et = (0, _._)({ location: ed.Mu }).externalAnalyticsEnabled,
        en = r.useMemo(
            () =>
                et
                    ? {
                          contentId: p,
                          videoStreamType: d.u.isHlsUrl(p) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [et, p, t.title],
        ),
        ei = r.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        er = r.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: r, videoRef: s, isActive: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)($.A, {
                            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                            participantIds: y ? ei : [],
                            applicationId: t.application?.id,
                            title: t.title,
                            guildId: x,
                            playerState: n,
                            isControlBarExpanded: r,
                            isFullScreen: j,
                            showTextContent: N,
                        }),
                        null != S &&
                            null != T &&
                            (0, i.jsx)(ec, {
                                isControlBarExpanded: r,
                                isPlayerActive: a,
                                attachment: t,
                                messageId: S,
                                channelId: T,
                            }),
                        W &&
                            null != t.clip_events_timeline &&
                            null != s &&
                            null != T &&
                            (0, i.jsx)(J, {
                                guildId: x,
                                timeline: t.clip_events_timeline,
                                videoRef: s,
                                userIds: ei,
                                channelId: T,
                            }),
                        a &&
                            null != x &&
                            (0, i.jsx)(L, {
                                attachmentId: t.id,
                                channelId: T,
                                messageId: S,
                                guildId: x,
                                videoRef: s,
                                isControlBarExpanded: r,
                            }),
                        null != x && (0, i.jsx)(K, { attachmentId: t.id, durationSeconds: q, isControlBarExpanded: r }),
                    ],
                });
            },
            [t, x, j, y, N, T, S, W, ei, q],
        );
    return (0, i.jsx)("div", {
        className: a()(e_.kL, { [e_.HA]: m }, s),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: E ? (e) => e.stopPropagation() : void 0,
        onKeyDown: E ? (e) => e.stopPropagation() : void 0,
        onContextMenu: D,
        style: m ? void 0 : { width: F, height: V },
        children: (0, i.jsx)(ef, {
            crossOrigin: null,
            src: p,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: ee,
            poster: H,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: u,
            autoplay: h,
            initialVolume: C,
            initialMuted: v,
            onVolumeChange: O,
            onMutedChange: R,
            onProgressUpdate: Z,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: er,
            parentTransitionState: null,
            onFullscreenChange: Y,
            onClick: b,
            withVideoHalo: !0,
            objectFit: m ? "cover" : void 0,
            muxContentMetadata: en,
            hideFullScreenBtn: !w,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
        }),
    });
}
