n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(26137),
    d = n(268218),
    u = n(776231),
    c = n(614269),
    h = n(829097),
    m = n(734057),
    p = n(401648),
    g = n(194498),
    x = n(376595),
    f = n(773503);
let A = [];
function y(e) {
    let { timeline: t, userIds: n, videoRef: r, guildId: a, channelId: s } = e,
        o = l.useMemo(() => x.H.fromAttachmentTimeline(t), [t]),
        [d, u] = l.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, g.A)(() => {
            let e = r.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            u(o.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(f.A, {
            speakingUserIds: d.speakingUserIds,
            activeSoundboards: A,
            userIds: n,
            guildId: a,
            channelId: s,
        })
    );
}
var w = n(939249),
    I = n(734066),
    v = n(274372),
    C = n(794905),
    j = n(16590),
    E = n(375708),
    M = n(310882);
function _(e) {
    let { attachment: t, channelId: n, messageId: r } = e,
        { enableAdvancedSignals: a } = I.L_.useConfig({ location: "DistributedClipShareCTA" }),
        o = t.clip_remote_id,
        d = (0, s.bG)([v.A], () => (null != o ? v.A.getClipByRemoteId(o) : null)),
        { onShareClick: u } = (0, C.A)(n),
        c = (0, s.bG)([v.A], () => null != d && null != n && null != o && v.A.wasClipSharedInChannel(o, n)),
        h = l.useCallback(
            (e) => {
                null != d &&
                    (e.stopPropagation(), u({ clips: [d], messageReference: { channel_id: n, message_id: r } }));
            },
            [u, d, n, r],
        );
    return !a || null == d || c
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  " \xb7 ",
                  (0, i.jsx)(w.D, {
                      tag: "span",
                      className: M.s,
                      onClick: h,
                      children: E.intl.string(j.default.YKst58),
                  }),
              ],
          });
}
var S = n(696016),
    N = n(581874);
let b = (0, d.Fe)({
    createPromise: () =>
        Promise.all([n.e("99245"), n.e("57174"), n.e("84971"), n.e("30920"), n.e("78010"), n.e("91652")]).then(
            n.bind(n, 664111),
        ),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: N.Lq }),
});
function O(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: r,
            active: d = !1,
            autoPlay: g,
            src: x,
            embed: f = !1,
            fillContainer: A = !1,
            minWidth: w = 500,
            maxWidth: I = 1 / 0,
            maxHeight: v = 1 / 0,
            channelId: C,
            messageId: M,
            showTextContent: O = I >= 250,
            showParticipants: T = !0,
            volume: V,
            autoMute: P,
            onVolumeChange: D,
            onMutedChange: k,
            onClick: U,
            onContextMenu: L,
        } = e,
        R = t.width ?? 0,
        F = t.height ?? 0,
        H = (0, s.bG)([m.A], () => m.A.getBasicChannel(C)?.guild_id, [C]),
        W = R > 0 && F > 0 ? R / F : 16 / 9,
        G = Math.min(R > 0 ? R : w, I),
        X = G / W;
    X > v && (G = (X = v) * W), G < w && (X = (G = w) / W);
    let z = Math.round(Math.min(G, I)),
        B = Math.round(Math.min(X, v)),
        Q = R > 0 && F > 0 ? Math.min(z / R, B / F, 1) : 1,
        Y = (0, u.AE)({ src: n, width: Math.round(R * Q), height: Math.round(F * Q) }),
        [Z, K] = l.useState(!1),
        [q, $] = l.useState(!0),
        J = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        ee = l.useMemo(() => {
            if (J)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: o.r,
                        label: E.intl.string(j.default.hFWVZQ),
                        active: q,
                        onClick: () => $((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [J, q]),
        et = (0, h._)({ location: S.Mu }).externalAnalyticsEnabled,
        en = l.useMemo(
            () =>
                et
                    ? {
                          contentId: x,
                          videoStreamType: c.u.isHlsUrl(x) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [et, x, t.title],
        ),
        ei = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        el = l.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: l, videoRef: r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(p.A, {
                            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                            participantIds: T ? ei : [],
                            applicationId: t.application?.id,
                            title: t.title,
                            guildId: H,
                            playerState: n,
                            isControlBarExpanded: l,
                            isFullScreen: Z,
                            showTextContent: O,
                            shareCTA:
                                null != M && null != C && (0, i.jsx)(_, { attachment: t, messageId: M, channelId: C }),
                        }),
                        q &&
                            null != t.clip_events_timeline &&
                            null != r &&
                            null != C &&
                            (0, i.jsx)(y, {
                                guildId: H,
                                timeline: t.clip_events_timeline,
                                videoRef: r,
                                userIds: ei,
                                channelId: C,
                            }),
                    ],
                });
            },
            [t, H, Z, T, O, C, M, q, ei],
        );
    return (0, i.jsx)("div", {
        className: a()(N.kL, { [N.HA]: A }, r),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: f ? (e) => e.stopPropagation() : void 0,
        onKeyDown: f ? (e) => e.stopPropagation() : void 0,
        onContextMenu: L,
        style: A ? void 0 : { width: z, height: B },
        children: (0, i.jsx)(b, {
            crossOrigin: null,
            src: x,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: ee,
            poster: Y,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: d,
            autoplay: g,
            initialVolume: V,
            initialMuted: P,
            onVolumeChange: D,
            onMutedChange: k,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: el,
            parentTransitionState: null,
            onFullscreenChange: K,
            onClick: U,
            withVideoHalo: !0,
            objectFit: A ? "cover" : void 0,
            muxContentMetadata: en,
        }),
    });
}
