n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(17928),
    r = n(26137),
    d = n(268218),
    c = n(776231),
    p = n(614269),
    u = n(829097),
    h = n(734057),
    C = n(401648),
    m = n(194498),
    g = n(376595),
    v = n(773503);
let _ = [];
function x(e) {
    let { timeline: t, userIds: n, videoRef: a, guildId: s, channelId: o } = e,
        r = l.useMemo(() => g.H.fromAttachmentTimeline(t), [t]),
        [d, c] = l.useState({ speakingUserIds: [], activeSoundboards: [] });
    return (
        (0, m.A)(() => {
            let e = a.current;
            if (null == e) return;
            let t = 1e3 * e.currentTime;
            c(r.getEventsAtTimestamp(t));
        }),
        (0, i.jsx)(v.A, {
            speakingUserIds: d.speakingUserIds,
            activeSoundboards: _,
            userIds: n,
            guildId: s,
            channelId: o,
        })
    );
}
var A = n(661531),
    f = n(834730),
    M = n(734066),
    y = n(274372),
    I = n(794905),
    w = n(996682),
    L = n(27989);
function k(e) {
    let {
            size: t = "md",
            width: n,
            height: l,
            color: a = A.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: s = "",
            ...o
        } = e,
        r = (0, L.J)(t),
        d = r?.width ?? n,
        c = r?.height ?? l;
    return (0, i.jsxs)("svg", {
        ...(0, w.A)(o),
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
var b = n(16590),
    j = n(375708),
    S = n(310882);
function T(e) {
    let { attachment: t, channelId: n, messageId: a, isControlBarExpanded: r, isPlayerActive: d } = e,
        { enableAdvancedSignals: c } = M.L_.useConfig({ location: "DistributedClipShareCTA" }),
        p = t.clip_remote_id,
        u = (0, o.bG)([y.A], () => (null != p ? y.A.getClipByRemoteId(p) : null)),
        { onShareClick: h } = (0, I.A)(n),
        C = (0, o.bG)([y.A], () => null != u && null != n && null != p && y.A.wasClipSharedInChannel(p, n)),
        m = l.useCallback(
            (e) => {
                null != u &&
                    (e.stopPropagation(), h({ clips: [u], messageReference: { channel_id: n, message_id: a } }));
            },
            [h, u, n, a],
        );
    return !c || null == u || C
        ? null
        : (0, i.jsxs)("button", {
              className: s()(S.eZ, { [S.vu]: r, [S.jn]: !d }),
              onClick: m,
              children: [
                  (0, i.jsx)(k, { size: "refresh_sm", color: A.A.colors.WHITE }),
                  (0, i.jsx)(f.E, {
                      variant: "text-xs/semibold",
                      color: "always-white",
                      children: j.intl.string(b.default.YKst58),
                  }),
              ],
          });
}
var P = n(696016),
    E = n(581874);
let H = (0, d.Fe)({
    createPromise: () =>
        Promise.all([n.e("95705"), n.e("57174"), n.e("84971"), n.e("30920"), n.e("78010"), n.e("91652")]).then(
            n.bind(n, 664111),
        ),
    webpackId: 664111,
    name: "DiscordVideoPlayer",
    renderLoader: () => (0, i.jsx)("div", { className: E.Lq }),
});
function V(e) {
    let {
            attachment: t,
            posterUrl: n,
            className: a,
            active: d = !1,
            autoPlay: m,
            src: g,
            embed: v = !1,
            fillContainer: _ = !1,
            minWidth: A = 500,
            maxWidth: f = 1 / 0,
            maxHeight: M = 1 / 0,
            channelId: y,
            messageId: I,
            showTextContent: w = f >= 250,
            showParticipants: L = !0,
            volume: k,
            autoMute: S,
            onVolumeChange: V,
            onMutedChange: B,
            onClick: N,
            onContextMenu: F,
            allowFullScreen: U = !0,
        } = e,
        Z = t.width ?? 0,
        D = t.height ?? 0,
        R = (0, o.bG)([h.A], () => h.A.getBasicChannel(y)?.guild_id, [y]),
        G = Z > 0 && D > 0 ? Z / D : 16 / 9,
        K = Math.min(Z > 0 ? Z : A, f),
        O = K / G;
    O > M && (K = (O = M) * G), K < A && (O = (K = A) / G);
    let W = Math.round(Math.min(K, f)),
        q = Math.round(Math.min(O, M)),
        z = Z > 0 && D > 0 ? Math.min(W / Z, q / D, 1) : 1,
        J = (0, c.AE)({ src: n, width: Math.round(Z * z), height: Math.round(D * z) }),
        [Q, Y] = l.useState(!1),
        [X, $] = l.useState(!0),
        ee = l.useMemo(() => t.clip_events_timeline?.some((e) => null != e.speaking) ?? !1, [t.clip_events_timeline]),
        et = l.useMemo(() => {
            if (ee)
                return [
                    {
                        id: "speaking-indicators",
                        iconComponent: r.r,
                        label: j.intl.string(b.default.hFWVZQ),
                        active: X,
                        onClick: () => $((e) => !e),
                        "data-testid": "clips-player-speaking-indicators-toggle",
                    },
                ];
        }, [ee, X]),
        en = (0, u._)({ location: P.Mu }).externalAnalyticsEnabled,
        ei = l.useMemo(
            () =>
                en
                    ? {
                          contentId: g,
                          videoStreamType: p.u.isHlsUrl(g) ? "hls" : "mp4",
                          contentType: "clips",
                          title: t.title,
                      }
                    : void 0,
            [en, g, t.title],
        ),
        el = l.useMemo(
            () =>
                t.clip_participants?.map((e) => {
                    let { id: t } = e;
                    return t;
                }) ?? [],
            [t.clip_participants],
        ),
        ea = l.useCallback(
            (e) => {
                let { playerState: n, isControlBarExpanded: l, videoRef: a, isActive: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(C.A, {
                            createdAt: null != t.clip_created_at ? Date.parse(t.clip_created_at) : void 0,
                            participantIds: L ? el : [],
                            applicationId: t.application?.id,
                            title: t.title,
                            guildId: R,
                            playerState: n,
                            isControlBarExpanded: l,
                            isFullScreen: Q,
                            showTextContent: w,
                        }),
                        null != I &&
                            null != y &&
                            (0, i.jsx)(T, {
                                isControlBarExpanded: l,
                                isPlayerActive: s,
                                attachment: t,
                                messageId: I,
                                channelId: y,
                            }),
                        X &&
                            null != t.clip_events_timeline &&
                            null != a &&
                            null != y &&
                            (0, i.jsx)(x, {
                                guildId: R,
                                timeline: t.clip_events_timeline,
                                videoRef: a,
                                userIds: el,
                                channelId: y,
                            }),
                    ],
                });
            },
            [t, R, Q, L, w, y, I, X, el],
        );
    return (0, i.jsx)("div", {
        className: s()(E.kL, { [E.HA]: _ }, a),
        onClick: (e) => e.stopPropagation(),
        onKeyUp: v ? (e) => e.stopPropagation() : void 0,
        onKeyDown: v ? (e) => e.stopPropagation() : void 0,
        onContextMenu: F,
        style: _ ? void 0 : { width: W, height: q },
        children: (0, i.jsx)(H, {
            crossOrigin: null,
            src: g,
            downloadUrl: t.url,
            downloadContentType: t.content_type,
            extraButtons: et,
            poster: J,
            posterPlaceholder: t.placeholder,
            posterPlaceholderVersion: t.placeholder_version,
            active: d,
            autoplay: m,
            initialVolume: k,
            initialMuted: S,
            onVolumeChange: V,
            onMutedChange: B,
            orientation: "landscape",
            loadingSpinnerPosition: "center",
            renderPersistentOverlay: ea,
            parentTransitionState: null,
            onFullscreenChange: Y,
            onClick: N,
            withVideoHalo: !0,
            objectFit: _ ? "cover" : void 0,
            muxContentMetadata: ei,
            hideFullScreenBtn: !U,
            hideSkipButtons: !0,
            compactTimeDisplay: !0,
            autoHideVolumeSlider: !0,
            hidePlaybackSpeedBtn: !0,
        }),
    });
}
