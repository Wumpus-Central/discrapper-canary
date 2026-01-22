n.d(t, { A: () => k });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(827734),
    c = n(397927),
    u = n(367513),
    d = n(793574),
    f = n(688810),
    p = n(313961),
    h = n(261718),
    b = n(384059),
    g = n(47167),
    m = n(689874),
    A = n(509536),
    y = n(58736),
    O = n(742589),
    j = n(977851),
    v = n(772475),
    x = n(71393),
    E = n(576705),
    _ = n(954571),
    C = n(113783),
    S = n(69407),
    I = n(776781),
    N = n(233993),
    T = n(446600),
    P = n(608900),
    w = n(533233),
    R = n(652215),
    D = n(788868),
    M = n(985018),
    L = n(20531);
function G(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        { analyticsLocations: i, newestAnalyticsLocation: o } = (0, f.Ay)(d.A.VOICE_CHANNEL_HEADER),
        { chatOpen: c, participantsListOpen: g } = (0, s.cf)(
            [p.A],
            () => ({
                chatOpen: p.A.getChatOpen(t.id),
                participantsListOpen: p.A.getParticipantsListOpen(t.id),
            }),
            [t.id],
        ),
        A = (0, I.Ni)(t.id),
        y = (0, C.zy)(t.id, S.ip.REQUESTED_TO_SPEAK_ONLY),
        { hasParticipantsPanel: O } = (0, h.A)({ location: "StageChannelCallHeader" }),
        x = O && g;
    return (0, r.jsxs)(f.f5, {
        value: i,
        children: [
            (0, r.jsx)(m.A, { channelId: t.id }, "clips-enabled-indicator"),
            !l && A
                ? (0, r.jsx)("div", {
                      className: L.x6,
                      children: (0, r.jsx)(P.A, {
                          toggleRequestToSpeakSidebar: () => {
                              c && u.A.updateChatOpen(t.id, !1),
                                  g && u.A.toggleParticipantsList(t.id, !1),
                                  (0, b.X)(o, b.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR),
                                  n();
                          },
                          showRequestToSpeakSidebar: l,
                          numRequestToSpeak: y,
                      }),
                  })
                : null,
            !g &&
                O &&
                (0, r.jsx)(
                    v.A,
                    {
                        className: a()(L.x6, { [L.vc]: c }),
                        onClick: () => {
                            l && n(), u.A.toggleParticipantsList(t.id, !g);
                        },
                    },
                    "participants-list-button",
                ),
            !c &&
                (0, r.jsx)("div", {
                    className: a()(L.x6, { [L.vc]: x || l }),
                    children: (0, r.jsx)(j.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: l,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: L.iA,
                    }),
                }),
        ],
    });
}
function k(e) {
    var t;
    let { channel: n, toggleRequestToSpeakSidebar: i, showRequestToSpeakSidebar: d } = e,
        f = (0, g.Ay)(n),
        p = (0, s.bG)([T.A], () => T.A.getStageInstanceByChannel(n.id)),
        h = (0, C.uy)(n.id),
        b = (0, C.zy)(n.id, S.ip.AUDIENCE),
        m = (0, s.bG)([x.A], () => x.A.getGuild(n.guild_id), [n.guild_id]),
        j = null != (t = null == m ? void 0 : m.maxStageVideoChannelUsers) ? t : 0,
        v =
            null != m && m.features.has(R.GuildFeatures.COMMUNITY)
                ? j < R.p2C
                : (null == m ? void 0 : m.premiumTier) !== R.TVA.TIER_3 && j <= R.nyz,
        I = (0, w.A)(n),
        P = (0, s.bG)([E.A], () => E.A.can(N.QY, n)),
        k = () => {
            u.A.updateStageVideoLimitBoostUpsellDismissed(n.id, !0),
                _.default.track(R.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: n.guild_id,
                    type: D.e.VIDEO_STAGE_LIMIT,
                    is_moderator: P,
                    action: D.pd.DISMISS,
                });
        },
        V = {
            canModerate: P,
            audienceCount: b,
            channel: n,
            speakerCount: h,
        },
        F = l.useRef(V);
    l.useEffect(() => {
        F.current = V;
    }),
        l.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: r } = F.current;
            I &&
                _.default.track(R.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: D.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: r + t,
                });
        }, [I]);
    let H = (0, r.jsx)(c.NPJ, {
        theme: R.NJ8.DARK,
        children: (e) => {
            var t;
            return (0, r.jsxs)(y.Ay, {
                toolbar: (0, r.jsx)(G, {
                    toggleRequestToSpeakSidebar: i,
                    showRequestToSpeakSidebar: d,
                    channel: n,
                }),
                onDoubleClick: O.I,
                transparent: !0,
                className: a()(e, L.lF),
                children: [
                    (0, r.jsx)(y.Ay.Icon, {
                        icon: c.qux,
                        disabled: !0,
                        "aria-label": M.intl.string(M.t.EErMzA),
                        className: L.Kk,
                        color: null != p ? o.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, r.jsx)(y.Ay.Title, {
                        className: L.HA,
                        wrapperClassName: L.KD,
                        children: null != (t = null == p ? void 0 : p.topic) ? t : f,
                    }),
                    (0, r.jsx)(y.Ay.Divider, { className: L.yF }),
                    (0, r.jsxs)(y.Ay.Title, {
                        children: [
                            (0, r.jsx)(c.cNw, {
                                size: "xs",
                                color: o.A.colors.TEXT_MUTED.css,
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: L.N_,
                                children: M.intl.format(M.t.chmM9N, { count: h }),
                            }),
                            (0, r.jsx)(c.nFg, {
                                size: "xs",
                                className: L.Kk,
                                color: "currentColor",
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: L.N_,
                                children: M.intl.format(M.t["+v2pN2"], { count: b }),
                            }),
                        ],
                    }),
                ],
            });
        },
    });
    return I
        ? (0, r.jsxs)("div", {
              children: [
                  H,
                  (0, r.jsxs)("div", {
                      className: L.bp,
                      children: [
                          (0, r.jsx)(U, {}),
                          (0, r.jsxs)("div", {
                              className: L.Qq,
                              children: [
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: v ? M.intl.string(M.t["T+zF9M"]) : M.intl.string(M.t["IZ+SVv"]),
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: v ? M.intl.string(M.t.Izgpmv) : M.intl.string(M.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: L.Uo,
                              children: v
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(c.Button, {
                                                onClick: k,
                                                size: "sm",
                                                variant: "secondary",
                                                text: M.intl.string(M.t.L5eIZ2),
                                            }),
                                            (0, r.jsx)(c.Button, {
                                                variant: "expressive",
                                                onClick: () => {
                                                    (0, A.K)({
                                                        guildId: n.guild_id,
                                                        location: { section: R.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        _.default.track(R.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: n.guild_id,
                                                            type: D.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: P,
                                                            action: D.pd.BOOST,
                                                        });
                                                },
                                                size: "sm",
                                                text: M.intl.string(M.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, r.jsx)(c.Button, {
                                        variant: "primary",
                                        onClick: k,
                                        size: "sm",
                                        text: M.intl.string(M.t.WAI6xu),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : H;
}
function U() {
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
