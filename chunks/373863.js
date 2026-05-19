"use strict";
n.d(t, { A: () => x });
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
var I = n(661531),
    T = n(834730),
    S = n(734066),
    N = n(274372),
    y = n(794905),
    C = n(996682),
    v = n(27989);
function O(e) {
    let {
            size: t = "md",
            width: n,
            height: r,
            color: s = I.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: a = "",
            ...o
        } = e,
        l = (0, v.J)(t),
        u = l?.width ?? n,
        c = l?.height ?? r;
    return (0, i.jsxs)("svg", {
        ...(0, C.A)(o),
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
var R = n(16590),
    b = n(375708),
    D = n(310882);
function L(e) {
    let { attachment: t, channelId: n, messageId: s, isControlBarExpanded: l, isPlayerActive: u } = e,
        { enableAdvancedSignals: c } = S.L_.useConfig({ location: "DistributedClipShareCTA" }),
        d = t.clip_remote_id,
        _ = (0, o.bG)([N.A], () => (null != d ? N.A.getClipByRemoteId(d) : null)),
        { onShareClick: f } = (0, y.A)(n),
        h = (0, o.bG)([N.A], () => null != _ && null != n && null != d && N.A.wasClipSharedInChannel(d, n)),
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
              className: a()(D.eZ, { [D.vu]: l, [D.jn]: !u }),
              onClick: p,
              children: [
                  (0, i.jsx)(O, { size: "refresh_sm", color: I.A.colors.WHITE }),
                  (0, i.jsx)(T.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: b.intl.string(R.default.YKst58),
                  }),
              ],
          });
}
var w = n(696016),
    M = n(581874);
let P = (0, u.Fe)({
    createPromise: () =>
        Promise.all([n.e("84541"), n.e("57174"), n.e("84971"), n.e("30920"), n.e("78010"), n.e("91652")]).then(
            n.bind(n, 664111),
        ),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: M.Lq }),
});
function x(e) {
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
            messageId: y,
            showTextContent: C = T >= 250,
            showParticipants: v = !0,
            volume: O,
            autoMute: D,
            onVolumeChange: x,
            onMutedChange: U,
            onClick: k,
            onContextMenu: G,
            allowFullScreen: F = !0,
        } = e,
        V = t.width ?? 0,
        B = t.height ?? 0,
        H = (0, o.bG)([f.A], () => f.A.getBasicChannel(N)?.guild_id, [N]),
        j = V > 0 && B > 0 ? V / B : 16 / 9,
        Y = Math.min(V > 0 ? V : I, T),
        W = Y / j;
    W > S && (Y = (W = S) * j), Y < I && (W = (Y = I) / j);
    let K = Math.round(Math.min(Y, T)),
        z = Math.round(Math.min(W, S)),
        $ = V > 0 && B > 0 ? Math.min(K / V, z / B, 1) : 1,
        q = (0, c.AE)({ src: n, width: Math.round(V * $), height: Math.round(B * $) }),
        [Z, X] = r.useState(!1),
        [Q, J] = r.useState(!0),
        ee = r.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        et = r.useMemo(() => {
            if (ee)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: l.r,
                        label: b.intl.string(R.default.hFWVZQ),
                        active: Q,
                        onClick: () => J((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [ee, Q]),
        en = (0, _._)({ location: w.Mu }).externalAnalyticsEnabled,
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
        es = r.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: r, videoRef: s, isActive: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(h.A, {
                            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                            participantIds: v ? er : [],
                            applicationId: t.application?.id,
                            title: t.title,
                            guildId: H,
                            playerState: n,
                            isControlBarExpanded: r,
                            isFullScreen: Z,
                            showTextContent: C,
                        }),
                        null != y &&
                            null != N &&
                            (0, i.jsx)(L, {
                                isControlBarExpanded: r,
                                isPlayerActive: a,
                                attachment: t,
                                messageId: y,
                                channelId: N,
                            }),
                        Q &&
                            null != t.clip_events_timeline &&
                            null != s &&
                            null != N &&
                            (0, i.jsx)(A, {
                                guildId: H,
                                timeline: t.clip_events_timeline,
                                videoRef: s,
                                userIds: er,
                                channelId: N,
                            }),
                    ],
                });
            },
            [t, H, Z, v, C, N, y, Q, er],
        );
    return (0, i.jsx)("div", {
        className: a()(M.kL, { [M.HA]: g }, s),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: m ? (e) => e.stopPropagation() : void 0,
        onKeyDown: m ? (e) => e.stopPropagation() : void 0,
        onContextMenu: G,
        style: g ? void 0 : { width: K, height: z },
        children: (0, i.jsx)(P, {
            crossOrigin: null,
            src: E,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: et,
            poster: q,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: u,
            autoplay: p,
            initialVolume: O,
            initialMuted: D,
            onVolumeChange: x,
            onMutedChange: U,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: es,
            parentTransitionState: null,
            onFullscreenChange: X,
            onClick: k,
            withVideoHalo: !0,
            objectFit: g ? "cover" : void 0,
            muxContentMetadata: ei,
            hideFullScreenBtn: !F,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
        }),
    });
}
