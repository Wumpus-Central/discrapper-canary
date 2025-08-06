n.d(t, { Z: () => U });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(475179),
    h = n(100527),
    p = n(906732),
    f = n(358221),
    g = n(185935),
    m = n(522651),
    b = n(933557),
    y = n(236091),
    x = n(623624),
    j = n(665149),
    _ = n(984370),
    O = n(616286),
    v = n(975146),
    C = n(430824),
    E = n(496675),
    S = n(626135),
    Z = n(431328),
    I = n(501655),
    P = n(200498),
    T = n(146085),
    N = n(427679),
    R = n(592473),
    w = n(903108),
    A = n(981631),
    D = n(474936),
    k = n(388032),
    L = n(523335);
function M(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: i } = e,
        { analyticsLocations: l, newestAnalyticsLocation: o } = (0, p.ZP)(h.Z.VOICE_CHANNEL_HEADER),
        { chatOpen: c, participantsListOpen: u } = (0, s.cj)(
            [f.Z],
            () => ({
                chatOpen: f.Z.getChatOpen(t.id),
                participantsListOpen: f.Z.getParticipantsListOpen(t.id),
            }),
            [t.id],
        ),
        b = (0, P.B)(t.id),
        x = (0, Z.Rk)(t.id, I.pV.REQUESTED_TO_SPEAK_ONLY),
        { hasParticipantsPanel: j } = (0, g.Z)({ location: "StageChannelCallHeader" }),
        _ = j && u;
    return (0, r.jsxs)(p.Gt, {
        value: l,
        children: [
            (0, r.jsx)(y.Z, { channelId: t.id }, "clips-enabled-indicator"),
            !i && b
                ? (0, r.jsx)("div", {
                      className: L.button,
                      children: (0, r.jsx)(R.Z, {
                          toggleRequestToSpeakSidebar: () => {
                              c && d.Z.updateChatOpen(t.id, !1),
                                  u && d.Z.toggleParticipantsList(t.id, !1),
                                  (0, m.v)(o, m.d.OPEN_REQUEST_TO_SPEAK_SIDEBAR),
                                  n();
                          },
                          showRequestToSpeakSidebar: i,
                          numRequestToSpeak: x,
                      }),
                  })
                : null,
            !u &&
                j &&
                (0, r.jsx)(
                    v.Z,
                    {
                        className: a()(L.button, { [L.sidebarOpen]: c }),
                        onClick: () => {
                            i && n(), d.Z.toggleParticipantsList(t.id, !u);
                        },
                    },
                    "participants-list-button",
                ),
            !c &&
                (0, r.jsx)("div", {
                    className: a()(L.button, { [L.sidebarOpen]: _ || i }),
                    children: (0, r.jsx)(O.T, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: i,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: L.buttonIcon,
                    }),
                }),
        ],
    });
}
function U(e) {
    var t;
    let { channel: n, toggleRequestToSpeakSidebar: l, showRequestToSpeakSidebar: h } = e,
        p = (0, b.ZP)(n),
        f = (0, s.e7)([N.Z], () => N.Z.getStageInstanceByChannel(n.id)),
        g = (0, Z.Io)(n.id),
        m = (0, Z.Rk)(n.id, I.pV.AUDIENCE),
        y = (0, s.e7)([C.Z], () => C.Z.getGuild(n.guild_id), [n.guild_id]),
        O = null != (t = null == y ? void 0 : y.maxStageVideoChannelUsers) ? t : 0,
        v =
            null != y && y.features.has(A.oNc.COMMUNITY)
                ? O < A.TU7
                : (null == y ? void 0 : y.premiumTier) !== A.Eu4.TIER_3 && O <= A.eez,
        P = (0, w.Z)(n),
        R = (0, s.e7)([E.Z], () => E.Z.can(T.yP, n)),
        U = () => {
            d.Z.updateStageVideoLimitBoostUpsellDismissed(n.id, !0),
                S.default.track(A.rMx.BOOSTING_UPSELL_CLICKED, {
                    guild_id: n.guild_id,
                    type: D.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: R,
                    action: D.T7.DISMISS,
                });
        },
        G = {
            canModerate: R,
            audienceCount: m,
            channel: n,
            speakerCount: g,
        },
        F = i.useRef(G);
    i.useEffect(() => {
        F.current = G;
    }),
        i.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: r } = F.current;
            P &&
                S.default.track(A.rMx.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: D.cd.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: r + t,
                });
        }, [P]);
    let B = (0, r.jsx)(u.f6W, {
        theme: A.BRd.DARK,
        children: (e) => {
            var t;
            return (0, r.jsxs)(j.ZP, {
                toolbar: (0, r.jsx)(M, {
                    toggleRequestToSpeakSidebar: l,
                    showRequestToSpeakSidebar: h,
                    channel: n,
                }),
                onDoubleClick: _.O,
                transparent: !0,
                className: a()(e, L.participants),
                children: [
                    (0, r.jsx)(j.ZP.Icon, {
                        icon: u.ewx,
                        disabled: !0,
                        "aria-label": k.intl.string(k.t.EErMzM),
                        className: L.icon,
                        color: null != f ? o.Z.colors.HEADER_MUTED.css : void 0,
                    }),
                    (0, r.jsx)(j.ZP.Title, {
                        className: L.channelName,
                        wrapperClassName: L.channelNameWrapper,
                        children: null != (t = null == f ? void 0 : f.topic) ? t : p,
                    }),
                    (0, r.jsx)(j.ZP.Divider, { className: L.divider }),
                    (0, r.jsxs)(j.ZP.Title, {
                        children: [
                            (0, r.jsx)(u.S6n, {
                                size: "xs",
                                color: o.Z.colors.TEXT_LOW_CONTRAST.css,
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: L.speakerCount,
                                children: k.intl.format(k.t.chmM9P, { count: g }),
                            }),
                            (0, r.jsx)(u.BFJ, {
                                size: "xs",
                                className: L.icon,
                                color: "currentColor",
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: L.speakerCount,
                                children: k.intl.format(k.t["+v2pNz"], { count: m }),
                            }),
                        ],
                    }),
                ],
            });
        },
    });
    return P
        ? (0, r.jsxs)("div", {
              children: [
                  B,
                  (0, r.jsxs)("div", {
                      className: L.boostUpsell,
                      children: [
                          (0, r.jsx)(H, {}),
                          (0, r.jsxs)("div", {
                              className: L.text,
                              children: [
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-md/medium",
                                      color: "header-primary",
                                      children: v ? k.intl.string(k.t["T+zF9P"]) : k.intl.string(k.t["IZ+SVl"]),
                                  }),
                                  (0, r.jsx)(u.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: v ? k.intl.string(k.t.Izgpmp) : k.intl.string(k.t["7FHbPD"]),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: L.buttons,
                              children: v
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.zx, {
                                                className: L.notNowButton,
                                                onClick: U,
                                                look: c.zx.Looks.BLANK,
                                                size: c.zx.Sizes.SMALL,
                                                children: k.intl.string(k.t.L5eIZ2),
                                            }),
                                            (0, r.jsx)(u.gtL, {
                                                size: c.zx.Sizes.SMALL,
                                                onClick: () => {
                                                    (0, x.f)({
                                                        guildId: n.guild_id,
                                                        location: { section: A.jXE.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        S.default.track(A.rMx.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: n.guild_id,
                                                            type: D.cd.VIDEO_STAGE_LIMIT,
                                                            is_moderator: R,
                                                            action: D.T7.BOOST,
                                                        });
                                                },
                                                className: L.boostButton,
                                                children: k.intl.string(k.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, r.jsx)(c.zx, {
                                        className: L.notNowButton,
                                        onClick: U,
                                        look: c.zx.Looks.BLANK,
                                        size: c.zx.Sizes.SMALL,
                                        children: k.intl.string(k.t.WAI6xs),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : B;
}
function H() {
    return (0, r.jsxs)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        children: [
            (0, r.jsxs)("g", {
                clipPath: "url(#clip0_595_59940)",
                children: [
                    (0, r.jsx)("path", {
                        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
                        fill: "url(#paint0_linear_595_59940)",
                    }),
                    (0, r.jsx)("path", {
                        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
                        fill: "white",
                    }),
                    (0, r.jsx)("path", {
                        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
                        fill: "white",
                    }),
                ],
            }),
            (0, r.jsxs)("defs", {
                children: [
                    (0, r.jsxs)("linearGradient", {
                        id: "paint0_linear_595_59940",
                        x1: "2.4046e-06",
                        y1: "35.2166",
                        x2: "35.7182",
                        y2: "-1.45185",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, r.jsx)("stop", { stopColor: "#3E70DD" }),
                            (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#B377F3",
                            }),
                        ],
                    }),
                    (0, r.jsx)("clipPath", {
                        id: "clip0_595_59940",
                        children: (0, r.jsx)("rect", {
                            width: "36",
                            height: "36",
                            fill: "white",
                        }),
                    }),
                ],
            }),
        ],
    });
}
