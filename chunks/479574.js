n.d(t, { A: () => eC });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(26137),
    d = n(268218),
    u = n(776231),
    c = n(614269),
    m = n(829097),
    p = n(734057),
    h = n(945810);
let g = (0, h.mj)({
    kind: "user",
    name: "2026-05-clips-scrub-preview-frontend",
    defaultConfig: { enableScrubPreview: !1 },
    variations: { 1: { enableScrubPreview: !0 } },
});
var C = n(922016),
    f = n(460905),
    v = n(110384),
    _ = n(720149),
    A = n(565645),
    I = n(822123),
    x = n(267889),
    j = n(451909),
    M = n(118517),
    S = n(232835),
    E = n(625494);
let b = (0, h.mj)({
    kind: "user",
    name: "2026-05-clips-media-comments",
    defaultConfig: { enableMediaComments: !1 },
    variations: { 1: { enableMediaComments: !0 } },
});
var y = n(652215),
    N = n(307731),
    L = n(381941),
    T = n(909022);
function w(e, t) {
    let n = t?.current?.currentTime;
    return null == n ? { attachment_id: e, timestamp: 0 } : { attachment_id: e, timestamp: Math.floor(1e3 * n) };
}
function k(e) {
    let { attachmentId: t, channelId: n, messageId: a, guildId: o, videoRef: d, isControlBarExpanded: u = !0 } = e,
        c = (0, I.QZ)(o).slice(0, 3),
        m = (0, r.bG)([p.A], () => p.A.getChannel(n), [n]),
        { enableMediaComments: h } = b.useConfig({ location: "ClipEmbedMediaMentionBar" }),
        g = l.useRef(null);
    function k(e, n) {
        e?.stopPropagation(),
            (function (e) {
                if (null == m || null == a || null == d?.current?.currentTime) return;
                let n =
                    null != e.id
                        ? !0 === e.animated
                            ? `<a:${e.name}:${e.id}>`
                            : `<:${e.name}:${e.id}>`
                        : "surrogates" in e && null != e.surrogates
                          ? e.surrogates
                          : e.name;
                _.A.sendMessage(m.id, j.Ay.parse(m, n), !1, {
                    location: L.Hx.MEDIA_MENTION,
                    messageReference: { channel_id: m.id, guild_id: m.getGuildId() ?? void 0, message_id: a },
                    mediaMention: w(t, d),
                });
            })(n);
    }
    return h && null != m && null != a
        ? (0, i.jsxs)("div", {
              className: s()(T.M0, { [T.pd]: !u }),
              children: [
                  (0, i.jsx)("div", {
                      className: T.gm,
                      children: c.map((e) =>
                          (0, i.jsx)(
                              "button",
                              {
                                  type: "button",
                                  className: T.x6,
                                  onClick: (t) => k(t, e),
                                  children: (0, i.jsx)(A.A, {
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
                  (0, i.jsx)(C.Y, {
                      targetElementRef: g,
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(x.A, {
                              channel: m,
                              closePopout: t,
                              messageId: a,
                              pickerIntention: N.EmojiIntention.CHAT,
                              onSelectEmoji: (e) => {
                                  let { emoji: t } = e;
                                  null != t && k(void 0, t);
                              },
                          });
                      },
                      position: "top",
                      align: "center",
                      clickTrap: !0,
                      children: (e) =>
                          (0, i.jsx)("button", {
                              ...e,
                              ref: g,
                              type: "button",
                              className: T.x6,
                              children: (0, i.jsx)(f.n, { size: "sm" }),
                          }),
                  }),
                  (0, i.jsx)("button", {
                      type: "button",
                      className: T.x6,
                      onClick: function (e) {
                          if ((e.stopPropagation(), null == m || null == a)) return;
                          let n = S.A.getMessage(m.id, a);
                          null == n ||
                              (null != d?.current?.currentTime &&
                                  ((0, M.Yf)({
                                      channel: m,
                                      message: n,
                                      shouldMention: !e.shiftKey,
                                      showMentionToggle: !m.isPrivate(),
                                      mediaMention: w(t, d),
                                  }),
                                  E._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: m.id })));
                      },
                      children: (0, i.jsx)(v.W, { size: "sm" }),
                  }),
              ],
          })
        : null;
}
function P() {
    return (0, i.jsx)("div", { className: T.yF });
}
var U = n(534890),
    G = n(661531),
    H = n(228366);
let R = [],
    B = {},
    F = {};
function O(e) {
    if (null == e.id || null == e.channel_id || null == e.media_mention || null != F[e.id]) return !1;
    let t = {
            attachmentId: e.media_mention.attachment_id,
            timestamp: e.media_mention.timestamp,
            channelId: e.channel_id,
            messageId: e.id,
        },
        n = B[t.attachmentId] ?? (B[t.attachmentId] = []);
    return (B[t.attachmentId] = n.concat(t).sort((e, t) => e.timestamp - t.timestamp)), (F[e.id] = t.attachmentId), !0;
}
function D(e) {
    let t = F[e];
    if (null == t) return !1;
    let n = B[t];
    if (null != n) {
        let i = n.filter((t) => t.messageId !== e);
        0 === i.length ? delete B[t] : (B[t] = i);
    }
    return delete F[e], !0;
}
class V extends r.Ay.Store {
    static displayName = "MediaMentionStore";
    getMentionsForAttachment(e) {
        return B[e] ?? R;
    }
}
let Z = new V(H.h, {
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => O(t) || e, !1);
    },
    LOAD_MESSAGES_AROUND_SUCCESS: function (e) {
        let { messages: t } = e;
        return t.reduce((e, t) => O(t) || e, !1);
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        return O(t);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        return D(t);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t } = e;
        return t.reduce((e, t) => D(t) || e, !1);
    },
    LOGOUT: function () {
        (B = {}), (F = {});
    },
});
var $ = n(7584);
let K = /^<(a)?:(\w+):(\d+)>$/;
var z = n(933668);
function Y(e) {
    let { attachmentId: t, durationSeconds: n, isControlBarExpanded: l = !0 } = e,
        a = (0, r.bG)([Z], () => Z.getMentionsForAttachment(t), [t]),
        { enableMediaComments: o } = b.useConfig({ location: "ClipEmbedMediaMentionTimeline" });
    return !o || 0 === a.length || n <= 0
        ? null
        : (0, i.jsx)("div", {
              className: s()(z.IO, { [z.pd]: !l }),
              children: a.map((e) => (0, i.jsx)(W, { entry: e, durationSeconds: n }, e.messageId)),
          });
}
function W(e) {
    let { entry: t, durationSeconds: n } = e,
        a = (0, r.bG)([S.A], () => S.A.getMessage(t.channelId, t.messageId), [t.channelId, t.messageId]),
        s = `${Math.min(100, (t.timestamp / 1e3 / n) * 100)}%`,
        o = l.useMemo(
            () =>
                (function (e) {
                    let t = e.trim();
                    if (0 === t.length) return null;
                    let n = t.match(K);
                    return null != n
                        ? { animated: "a" === n[1], emojiName: n[2], emojiId: n[3] }
                        : "" !== $.Ay.convertSurrogateToName(t, !1)
                          ? { surrogate: t, emojiName: t }
                          : null;
                })(a?.content ?? ""),
            [a?.content],
        );
    return null == a
        ? null
        : (0, i.jsx)("div", {
              className: z.xL,
              style: { left: s },
              children:
                  null != o
                      ? (0, i.jsx)(A.A, {
                            emojiId: o.emojiId,
                            emojiName: o.emojiName,
                            shouldAnimate: !1,
                            animated: o.animated,
                            surrogate: o.surrogate,
                            className: z.Zg,
                        })
                      : (0, i.jsx)(U.o, { colorClass: z.Or, color: G.A.colors.ICON_OVERLAY_LIGHT, size: "refresh_sm" }),
          });
}
var Q = n(783384),
    q = n(194498),
    J = n(376595),
    X = n(773503);
let ee = [];
function et(e) {
    let { timeline: t, userIds: n, videoRef: a, guildId: s, channelId: r } = e,
        o = l.useMemo(() => J.H.fromAttachmentTimeline(t), [t]),
        [d, u] = l.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, q.A)(() => {
            let e = a.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            u(o.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(X.A, {
            speakingUserIds: d.speakingUserIds,
            activeSoundboards: ee,
            userIds: n,
            guildId: s,
            channelId: r,
        })
    );
}
var en = n(834730),
    ei = n(734066),
    el = n(274372),
    ea = n(352527),
    es = n(996682),
    er = n(27989);
function eo(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = G.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...r
        } = e,
        o = (0, er.J)(t),
        d = o?.width ?? n,
        u = o?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, es.A)(r),
        width: d,
        height: u,
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
var ed = n(16590),
    eu = n(375708),
    ec = n(310882);
function em(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: o, isPlayerActive: d } = e,
        { enableAdvancedSignals: u } = ei.L_.useConfig({ location: "DistributedClipShareCTA" }),
        c = t.clip_remote_id,
        m = (0, r.bG)([el.A], () => (null != c ? el.A.getClipByRemoteId(c) : null)),
        { onShareClick: p } = (0, ea.A)(n),
        h = (0, r.bG)([el.A], () => null != m && null != n && null != c && el.A.wasClipSharedInChannel(c, n)),
        g = l.useCallback(
            (e) => {
                null != m &&
                    (e.stopPropagation(), p({ clips: [m], messageReference: { channel_id: n, message_id: a } }));
            },
            [p, m, n, a],
        );
    return !u || null == m || h
        ? null
        : (0, i.jsxs)("button", {
              className: s()(ec.eZ, { [ec.vu]: o, [ec.jn]: !d }),
              onClick: g,
              children: [
                  (0, i.jsx)(eo, { size: "refresh_sm", color: G.A.colors.WHITE }),
                  (0, i.jsx)(en.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: eu.intl.string(ed.default.YKst58),
                  }),
              ],
          });
}
var ep = n(696016),
    eh = n(581874);
let eg = (0, d.Fe)({
    createPromise: () => Promise.resolve().then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: eh.Lq }),
});
function eC(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: a,
            active: d = !1,
            autoPlay: h,
            src: C,
            embed: f = !1,
            fillContainer: v = !1,
            minWidth: _ = 500,
            maxWidth: A = 1 / 0,
            maxHeight: I = 1 / 0,
            channelId: x,
            messageId: j,
            showTextContent: M = A >= 250,
            showParticipants: S = !0,
            volume: E,
            autoMute: b,
            onVolumeChange: y,
            onMutedChange: N,
            onClick: L,
            onContextMenu: T,
            allowFullScreen: w = !0,
        } = e,
        P = t.width ?? 0,
        U = t.height ?? 0,
        G = (0, r.bG)([p.A], () => p.A.getBasicChannel(x)?.guild_id, [x]),
        H = P > 0 && U > 0 ? P / U : 16 / 9,
        R = Math.min(P > 0 ? P : _, A),
        B = R / H;
    B > I && (R = (B = I) * H), R < _ && (B = (R = _) / H);
    let F = Math.round(Math.min(R, A)),
        O = Math.round(Math.min(B, I)),
        D = P > 0 && U > 0 ? Math.min(F / P, O / U, 1) : 1,
        V = (0, u.AE)({ src: n, width: Math.round(P * D), height: Math.round(U * D) }),
        [Z, $] = l.useState(!1),
        [K, z] = l.useState(!0),
        [W, q] = l.useState(0),
        J = l.useCallback((e, t) => {
            Number.isFinite(t) && t > 0 && q((e) => (e === t ? e : t));
        }, []),
        X = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ee = l.useMemo(() => {
            if (X)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: o.r,
                        label: eu.intl.string(ed.default.hFWVZQ),
                        active: K,
                        onClick: () => z((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [X, K]),
        en = (0, m._)({ location: ep.Mu }).externalAnalyticsEnabled,
        ei = l.useMemo(
            () =>
                en
                    ? {
                          contentId: C,
                          videoStreamType: c.u.isHlsUrl(C) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [en, C, t.title],
        ),
        el = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        { enableScrubPreview: ea } = g.useConfig({ location: "ClipsPlayer" }),
        es = l.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: l, videoRef: a, isActive: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(Q.A, {
                            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                            participantIds: S ? el : [],
                            applicationId: t.application?.id,
                            title: t.title,
                            guildId: G,
                            playerState: n,
                            isControlBarExpanded: l,
                            isFullScreen: Z,
                            showTextContent: M,
                        }),
                        null != j &&
                            null != x &&
                            (0, i.jsx)(em, {
                                isControlBarExpanded: l,
                                isPlayerActive: s,
                                attachment: t,
                                messageId: j,
                                channelId: x,
                            }),
                        K &&
                            null != t.clip_events_timeline &&
                            null != a &&
                            null != x &&
                            (0, i.jsx)(et, {
                                guildId: G,
                                timeline: t.clip_events_timeline,
                                videoRef: a,
                                userIds: el,
                                channelId: x,
                            }),
                        s &&
                            null != G &&
                            (0, i.jsx)(k, {
                                attachmentId: t.id,
                                channelId: x,
                                messageId: j,
                                guildId: G,
                                videoRef: a,
                                isControlBarExpanded: l,
                            }),
                        null != G && (0, i.jsx)(Y, { attachmentId: t.id, durationSeconds: W, isControlBarExpanded: l }),
                    ],
                });
            },
            [t, G, Z, S, M, x, j, K, el, W],
        );
    return (0, i.jsx)("div", {
        className: s()(eh.kL, { [eh.HA]: v }, a),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: f ? (e) => e.stopPropagation() : void 0,
        onKeyDown: f ? (e) => e.stopPropagation() : void 0,
        onContextMenu: T,
        style: v ? void 0 : { width: F, height: O },
        children: (0, i.jsx)(eg, {
            src: C,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: ee,
            poster: V,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: d,
            autoplay: h,
            initialVolume: E,
            initialMuted: b,
            onVolumeChange: y,
            onMutedChange: N,
            onProgressUpdate: J,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: es,
            parentTransitionState: null,
            onFullscreenChange: $,
            onClick: L,
            withVideoHalo: !0,
            objectFit: v ? "cover" : void 0,
            muxContentMetadata: ei,
            hideFullScreenBtn: !w,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
            scrubPreviewVttUrl: ea ? t.spritesheet_vtt_url : void 0,
            scrubPreviewImageUrl: ea ? t.spritesheet_image_url : void 0,
        }),
    });
}
