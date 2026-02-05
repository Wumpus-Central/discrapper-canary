n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(397927),
    c = n(367513),
    u = n(793574),
    h = n(688810),
    A = n(313961),
    g = n(261718),
    m = n(384059),
    p = n(47167),
    _ = n(689874),
    x = n(509536),
    f = n(58736),
    E = n(742589),
    C = n(977851),
    I = n(772475),
    S = n(71393),
    b = n(576705),
    N = n(954571),
    T = n(113783),
    j = n(69407),
    v = n(776781),
    y = n(233993),
    R = n(446600),
    O = n(608900),
    L = n(533233),
    D = n(652215),
    M = n(788868),
    G = n(985018),
    U = n(20531);
function P(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: s, newestAnalyticsLocation: o } = (0, h.Ay)(u.A.VOICE_CHANNEL_HEADER),
        { chatOpen: d, participantsListOpen: p } = (0, r.cf)(
            [A.A],
            () => ({ chatOpen: A.A.getChatOpen(t.id), participantsListOpen: A.A.getParticipantsListOpen(t.id) }),
            [t.id],
        ),
        x = (0, v.Ni)(t.id),
        f = (0, T.zy)(t.id, j.ip.REQUESTED_TO_SPEAK_ONLY),
        { hasParticipantsPanel: E } = (0, g.A)({ location: "StageChannelCallHeader" }),
        S = E && p;
    return (0, i.jsxs)(h.f5, {
        value: s,
        children: [
            (0, i.jsx)(_.A, { channelId: t.id }, "clips-enabled-indicator"),
            !l && x
                ? (0, i.jsx)("div", {
                      className: U.x6,
                      children: (0, i.jsx)(O.A, {
                          toggleRequestToSpeakSidebar: () => {
                              d && c.A.updateChatOpen(t.id, !1),
                                  p && c.A.toggleParticipantsList(t.id, !1),
                                  (0, m.X)(o, m.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR),
                                  n();
                          },
                          showRequestToSpeakSidebar: l,
                          numRequestToSpeak: f,
                      }),
                  })
                : null,
            !p &&
                E &&
                (0, i.jsx)(
                    I.A,
                    {
                        className: a()(U.x6, { [U.vc]: d }),
                        onClick: () => {
                            l && n(), c.A.toggleParticipantsList(t.id, !p);
                        },
                    },
                    "participants-list-button",
                ),
            !d &&
                (0, i.jsx)("div", {
                    className: a()(U.x6, { [U.vc]: S || l }),
                    children: (0, i.jsx)(C.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: l,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: U.iA,
                    }),
                }),
        ],
    });
}
function k(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        u = (0, p.Ay)(t),
        h = (0, r.bG)([R.A], () => R.A.getStageInstanceByChannel(t.id)),
        A = (0, T.uy)(t.id),
        g = (0, T.zy)(t.id, j.ip.AUDIENCE),
        m = (0, r.bG)([S.A], () => S.A.getGuild(t.guild_id), [t.guild_id]),
        _ = m?.maxStageVideoChannelUsers ?? 0,
        C =
            null != m && m.features.has(D.GuildFeatures.COMMUNITY)
                ? _ < D.p2C
                : m?.premiumTier !== D.TVA.TIER_3 && _ <= D.nyz,
        I = (0, L.A)(t),
        v = (0, r.bG)([b.A], () => b.A.can(y.QY, t)),
        O = () => {
            c.A.updateStageVideoLimitBoostUpsellDismissed(t.id, !0),
                N.default.track(D.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: t.guild_id,
                    type: M.e.VIDEO_STAGE_LIMIT,
                    is_moderator: v,
                    action: M.pd.DISMISS,
                });
        },
        k = { canModerate: v, audienceCount: g, channel: t, speakerCount: A },
        V = l.useRef(k);
    l.useEffect(() => {
        V.current = k;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = V.current;
            I &&
                N.default.track(D.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: M.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t,
                });
        }, [I]);
    let B = (0, i.jsx)(d.NPJ, {
        theme: D.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)(f.Ay, {
                toolbar: (0, i.jsx)(P, { toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s, channel: t }),
                onDoubleClick: E.I,
                transparent: !0,
                className: a()(e, U.lF),
                children: [
                    (0, i.jsx)(f.Ay.Icon, {
                        icon: d.qux,
                        disabled: !0,
                        "aria-label": G.intl.string(G.t.EErMzA),
                        className: U.Kk,
                        color: null != h ? o.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, i.jsx)(f.Ay.Title, { className: U.HA, wrapperClassName: U.KD, children: h?.topic ?? u }),
                    (0, i.jsx)(f.Ay.Divider, { className: U.yF }),
                    (0, i.jsxs)(f.Ay.Title, {
                        children: [
                            (0, i.jsx)(d.cNw, { size: "xs", color: o.A.colors.TEXT_MUTED.css }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: U.N_,
                                children: G.intl.format(G.t.chmM9N, { count: A }),
                            }),
                            (0, i.jsx)(d.nFg, { size: "xs", className: U.Kk, color: "currentColor" }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: U.N_,
                                children: G.intl.format(G.t["+v2pN2"], { count: g }),
                            }),
                        ],
                    }),
                ],
            }),
    });
    return I
        ? (0, i.jsxs)("div", {
              children: [
                  B,
                  (0, i.jsxs)("div", {
                      className: U.bp,
                      children: [
                          (0, i.jsx)(w, {}),
                          (0, i.jsxs)("div", {
                              className: U.Qq,
                              children: [
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: C ? G.intl.string(G.t["T+zF9M"]) : G.intl.string(G.t["IZ+SVv"]),
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: C ? G.intl.string(G.t.Izgpmv) : G.intl.string(G.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: U.Uo,
                              children: C
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(d.Button, {
                                                onClick: O,
                                                size: "sm",
                                                variant: "secondary",
                                                text: G.intl.string(G.t.L5eIZ2),
                                            }),
                                            (0, i.jsx)(d.Button, {
                                                variant: "expressive",
                                                onClick: () => {
                                                    (0, x.K)({
                                                        guildId: t.guild_id,
                                                        location: { section: D.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        N.default.track(D.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: t.guild_id,
                                                            type: M.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: v,
                                                            action: M.pd.BOOST,
                                                        });
                                                },
                                                size: "sm",
                                                text: G.intl.string(G.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(d.Button, {
                                        variant: "primary",
                                        onClick: O,
                                        size: "sm",
                                        text: G.intl.string(G.t.WAI6xu),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : B;
}
function w() {
    return (0, i.jsxs)("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        children: [
            (0, i.jsxs)("g", {
                clipPath: "url(#clip0_595_59940)",
                children: [
                    (0, i.jsx)("path", {
                        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
                        fill: "url(#paint0_linear_595_59940)",
                    }),
                    (0, i.jsx)("path", {
                        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
                        fill: "white",
                    }),
                    (0, i.jsx)("path", {
                        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
                        fill: "white",
                    }),
                ],
            }),
            (0, i.jsxs)("defs", {
                children: [
                    (0, i.jsxs)("linearGradient", {
                        id: "paint0_linear_595_59940",
                        x1: "2.4046e-06",
                        y1: "35.2166",
                        x2: "35.7182",
                        y2: "-1.45185",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            (0, i.jsx)("stop", { stopColor: "#3E70DD" }),
                            (0, i.jsx)("stop", { offset: "1", stopColor: "#B377F3" }),
                        ],
                    }),
                    (0, i.jsx)("clipPath", {
                        id: "clip0_595_59940",
                        children: (0, i.jsx)("rect", { width: "36", height: "36", fill: "white" }),
                    }),
                ],
            }),
        ],
    });
}
