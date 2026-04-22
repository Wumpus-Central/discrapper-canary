n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(827734),
    c = n(43990),
    d = n(451394),
    u = n(831544),
    _ = n(834730),
    A = n(177953),
    p = n(821609),
    h = n(367513),
    g = n(793574),
    m = n(688810),
    x = n(313961),
    f = n(384059),
    C = n(47167),
    E = n(689874),
    j = n(509536),
    b = n(58736),
    N = n(742589),
    T = n(977851),
    I = n(71393),
    v = n(576705),
    S = n(954571),
    y = n(113783),
    O = n(69407),
    L = n(776781),
    R = n(233993),
    U = n(446600),
    w = n(608900),
    P = n(533233),
    k = n(652215),
    M = n(788868),
    G = n(985018),
    D = n(322646);
function V(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: a, newestAnalyticsLocation: o } = (0, m.Ay)(g.A.VOICE_CHANNEL_HEADER),
        c = (0, r.bG)([x.A], () => x.A.getChatOpen(t.id), [t.id]),
        d = (0, L.Ni)(t.id),
        u = (0, y.zy)(t.id, O.ip.REQUESTED_TO_SPEAK_ONLY);
    return (0, i.jsxs)(m.f5, {
        value: a,
        children: [
            (0, i.jsx)(E.A, { channelId: t.id }, "clips-enabled-indicator"),
            !l && d
                ? (0, i.jsx)("div", {
                      className: s()(D.x6, { [D.vc]: c }),
                      children: (0, i.jsx)(w.A, {
                          toggleRequestToSpeakSidebar: () => {
                              c && h.A.updateChatOpen(t.id, !1), (0, f.X)(o, f.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n();
                          },
                          showRequestToSpeakSidebar: l,
                          numRequestToSpeak: u,
                      }),
                  })
                : null,
            !c &&
                (0, i.jsx)("div", {
                    className: s()(D.x6, { [D.vc]: l }),
                    children: (0, i.jsx)(T.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: l,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: D.iA,
                    }),
                }),
        ],
    });
}
function B(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: a } = e,
        g = (0, C.Ay)(t),
        m = (0, r.bG)([U.A], () => U.A.getStageInstanceByChannel(t.id)),
        x = (0, y.uy)(t.id),
        f = (0, y.zy)(t.id, O.ip.AUDIENCE),
        E = (0, r.bG)([I.A], () => I.A.getGuild(t.guild_id), [t.guild_id]),
        T = E?.maxStageVideoChannelUsers ?? 0,
        L =
            null != E && E.features.has(k.GuildFeatures.COMMUNITY)
                ? T < k.p2C
                : E?.premiumTier !== k.TVA.TIER_3 && T <= k.nyz,
        w = (0, P.A)(t),
        B = (0, r.bG)([v.A], () => v.A.can(R.QY, t)),
        K = () => {
            h.A.updateStageVideoLimitBoostUpsellDismissed(t.id, !0),
                S.default.track(k.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: t.guild_id,
                    type: M.e.VIDEO_STAGE_LIMIT,
                    is_moderator: B,
                    action: M.pd.DISMISS,
                });
        },
        q = { canModerate: B, audienceCount: f, channel: t, speakerCount: x },
        H = l.useRef(q);
    l.useEffect(() => {
        H.current = q;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = H.current;
            w &&
                S.default.track(k.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: M.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t,
                });
        }, [w]);
    let F = (0, i.jsx)(c.N, {
        theme: k.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)(b.Ay, {
                toolbar: (0, i.jsx)(V, { toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: a, channel: t }),
                onDoubleClick: N.I,
                transparent: !0,
                className: s()(e, D.lF),
                children: [
                    (0, i.jsx)(b.Ay.Icon, {
                        icon: d.q,
                        disabled: !0,
                        "aria-label": G.intl.string(G.t.EErMzA),
                        className: D.Kk,
                        color: null != m ? o.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, i.jsx)(b.Ay.Title, { className: D.HA, wrapperClassName: D.KD, children: m?.topic ?? g }),
                    (0, i.jsx)(b.Ay.Divider, { className: D.yF }),
                    (0, i.jsxs)(b.Ay.Title, {
                        children: [
                            (0, i.jsx)(u.c, { size: "xs", color: o.A.colors.TEXT_MUTED.css }),
                            (0, i.jsx)(_.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: D.N_,
                                children: G.intl.format(G.t.chmM9N, { count: x }),
                            }),
                            (0, i.jsx)(A.n, { size: "xs", className: D.Kk, color: "currentColor" }),
                            (0, i.jsx)(_.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: D.N_,
                                children: G.intl.format(G.t["+v2pN2"], { count: f }),
                            }),
                        ],
                    }),
                ],
            }),
    });
    return w
        ? (0, i.jsxs)("div", {
              children: [
                  F,
                  (0, i.jsxs)("div", {
                      className: D.bp,
                      children: [
                          (0, i.jsx)(z, {}),
                          (0, i.jsxs)("div", {
                              className: D.Qq,
                              children: [
                                  (0, i.jsx)(_.E, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: L ? G.intl.string(G.t["T+zF9M"]) : G.intl.string(G.t["IZ+SVv"]),
                                  }),
                                  (0, i.jsx)(_.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: L ? G.intl.string(G.t.Izgpmv) : G.intl.string(G.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: D.Uo,
                              children: L
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(p.$, {
                                                onClick: K,
                                                size: "sm",
                                                variant: "secondary",
                                                text: G.intl.string(G.t.L5eIZ2),
                                            }),
                                            (0, i.jsx)(p.$, {
                                                variant: "expressive",
                                                onClick: () => {
                                                    (0, j.K4)({
                                                        guildId: t.guild_id,
                                                        location: { section: k.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        S.default.track(k.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: t.guild_id,
                                                            type: M.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: B,
                                                            action: M.pd.BOOST,
                                                        });
                                                },
                                                size: "sm",
                                                text: G.intl.string(G.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(p.$, {
                                        variant: "primary",
                                        onClick: K,
                                        size: "sm",
                                        text: G.intl.string(G.t.WAI6xu),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : F;
}
function z() {
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
