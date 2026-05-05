"use strict";
n.d(t, { A: () => L });
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
    h = n(401648),
    p = n(194498),
    E = n(376595),
    m = n(773503);
let g = [];
function A(e) {
    let { timeline: t, userIds: n, videoRef: s, guildId: a, channelId: o } = e,
        l = r.useMemo(() => E.H.fromAttachmentTimeline(t), [t]),
        [u, c] = r.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, p.A)(() => {
            let e = s.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(l.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(m.A, {
            speakingUserIds: u.speakingUserIds,
            activeSoundboards: g,
            userIds: n,
            guildId: a,
            channelId: o,
        })
    );
}
var I = n(939249),
    T = n(734066),
    S = n(274372),
    N = n(794905),
    y = n(16590),
    C = n(375708),
    v = n(310882);
function O(e) {
    let { attachment: t, channelId: n, messageId: s } = e,
        { enableAdvancedSignals: a } = T.L_.useConfig({ location: "DistributedClipShareCTA" }),
        l = t.clip_remote_id,
        u = (0, o.bG)([S.A], () => (null != l ? S.A.getClipByRemoteId(l) : null)),
        { onShareClick: c } = (0, N.A)(n),
        d = (0, o.bG)([S.A], () => null != u && null != n && null != l && S.A.wasClipSharedInChannel(l, n)),
        _ = r.useCallback(
            (e) => {
                null != u &&
                    (e.stopPropagation(), c({ clips: [u], messageReference: { channel_id: n, message_id: s } }));
            },
            [c, u, n, s],
        );
    return !a || null == u || d
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " \xb7 ",
                  (0, i.jsx)(I.D, {
                      tag: "span",
                      className: v.s,
                      onClick: _,
                      children: C.intl.string(y.default.YKst58),
                  }),
              ],
          });
}
var R = n(696016),
    b = n(581874);
let D = (0, u.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("85094"),
            n.e("3302"),
            n.e("57174"),
            n.e("84971"),
            n.e("78010"),
            n.e("30920"),
            n.e("91652"),
        ]).then(n.bind(n, 664111)),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: b.Lq }),
});
function L(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: s,
            active: u = !1,
            autoPlay: p,
            src: E,
            embed: m = !1,
            fillContainer: g = !1,
            minWidth: I = 500,
            maxWidth: T = 1 / 0,
            maxHeight: S = 1 / 0,
            channelId: N,
            messageId: v,
            showTextContent: L = T >= 250,
            showParticipants: w = !0,
            volume: M,
            autoMute: P,
            onVolumeChange: x,
            onMutedChange: U,
            onClick: k,
            onContextMenu: G,
        } = e,
        F = t.width ?? 0,
        V = t.height ?? 0,
        B = (0, o.bG)([f.A], () => f.A.getBasicChannel(N)?.guild_id, [N]),
        H = F > 0 && V > 0 ? F / V : 16 / 9,
        j = Math.min(F > 0 ? F : I, T),
        Y = j / H;
    Y > S && (j = (Y = S) * H), j < I && (Y = (j = I) / H);
    let W = Math.round(Math.min(j, T)),
        K = Math.round(Math.min(Y, S)),
        z = F > 0 && V > 0 ? Math.min(W / F, K / V, 1) : 1,
        $ = (0, c.AE)({ src: n, width: Math.round(F * z), height: Math.round(V * z) }),
        [q, Z] = r.useState(!1),
        [X, Q] = r.useState(!0),
        J = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ee = r.useMemo(() => {
            if (J)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: l.r,
                        label: C.intl.string(y.default.hFWVZQ),
                        active: X,
                        onClick: () => Q((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [J, X]),
        et = (0, _._)({ location: R.Mu }).externalAnalyticsEnabled,
        en = r.useMemo(
            () =>
                et
                    ? {
                          contentId: E,
                          videoStreamType: d.u.isHlsUrl(E) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [et, E, t.title],
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
                let { playerState: n, isControlBarExpanded: r, videoRef: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(h.A, {
                            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                            participantIds: w ? ei : [],
                            applicationId: t.application?.id,
                            title: t.title,
                            guildId: B,
                            playerState: n,
                            isControlBarExpanded: r,
                            isFullScreen: q,
                            showTextContent: L,
                            shareCTA:
                                null != v && null != N && (0, i.jsx)(O, { attachment: t, messageId: v, channelId: N }),
                        }),
                        X &&
                            null != t.clip_events_timeline &&
                            null != s &&
                            null != N &&
                            (0, i.jsx)(A, {
                                guildId: B,
                                timeline: t.clip_events_timeline,
                                videoRef: s,
                                userIds: ei,
                                channelId: N,
                            }),
                    ],
                });
            },
            [t, B, q, w, L, N, v, X, ei],
        );
    return (0, i.jsx)("div", {
        className: a()(b.kL, { [b.HA]: g }, s),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: m ? (e) => e.stopPropagation() : void 0,
        onKeyDown: m ? (e) => e.stopPropagation() : void 0,
        onContextMenu: G,
        style: g ? void 0 : { width: W, height: K },
        children: (0, i.jsx)(D, {
            crossOrigin: null,
            src: E,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: ee,
            poster: $,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: u,
            autoplay: p,
            initialVolume: M,
            initialMuted: P,
            onVolumeChange: x,
            onMutedChange: U,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: er,
            parentTransitionState: null,
            onFullscreenChange: Z,
            onClick: k,
            withVideoHalo: !0,
            objectFit: g ? "cover" : void 0,
            muxContentMetadata: en,
        }),
    });
}
