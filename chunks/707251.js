"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    c = n(397927),
    d = n(367513),
    u = n(793574),
    h = n(688810),
    A = n(313961),
    m = n(384059),
    g = n(47167),
    p = n(689874),
    _ = n(509536),
    f = n(58736),
    x = n(742589),
    C = n(977851),
    E = n(71393),
    I = n(576705),
    N = n(954571),
    b = n(113783),
    S = n(69407),
    T = n(776781),
    v = n(233993),
    y = n(446600),
    j = n(608900),
    R = n(533233),
    O = n(652215),
    L = n(788868),
    M = n(985018),
    D = n(142829);
function G(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: s } = e,
        { analyticsLocations: l, newestAnalyticsLocation: o } = (0, h.Ay)(u.A.VOICE_CHANNEL_HEADER),
        c = (0, r.bG)([A.A], () => A.A.getChatOpen(t.id), [t.id]),
        g = (0, T.Ni)(t.id),
        _ = (0, b.zy)(t.id, S.ip.REQUESTED_TO_SPEAK_ONLY);
    return (0, i.jsxs)(h.f5, {
        value: l,
        children: [
            (0, i.jsx)(p.A, { channelId: t.id }, "clips-enabled-indicator"),
            !s && g
                ? (0, i.jsx)("div", {
                      className: a()(D.x6, { [D.vc]: c }),
                      children: (0, i.jsx)(j.A, {
                          toggleRequestToSpeakSidebar: () => {
                              c && d.A.updateChatOpen(t.id, !1), (0, m.X)(o, m.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n();
                          },
                          showRequestToSpeakSidebar: s,
                          numRequestToSpeak: _,
                      }),
                  })
                : null,
            !c &&
                (0, i.jsx)("div", {
                    className: a()(D.x6, { [D.vc]: s }),
                    children: (0, i.jsx)(C.V, {
                        channelId: t.id,
                        showRequestToSpeakSidebar: s,
                        toggleRequestToSpeakSidebar: n,
                        iconClassName: D.iA,
                    }),
                }),
        ],
    });
}
function U(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l } = e,
        u = (0, g.Ay)(t),
        h = (0, r.bG)([y.A], () => y.A.getStageInstanceByChannel(t.id)),
        A = (0, b.uy)(t.id),
        m = (0, b.zy)(t.id, S.ip.AUDIENCE),
        p = (0, r.bG)([E.A], () => E.A.getGuild(t.guild_id), [t.guild_id]),
        C = p?.maxStageVideoChannelUsers ?? 0,
        T =
            null != p && p.features.has(O.GuildFeatures.COMMUNITY)
                ? C < O.p2C
                : p?.premiumTier !== O.TVA.TIER_3 && C <= O.nyz,
        j = (0, R.A)(t),
        U = (0, r.bG)([I.A], () => I.A.can(v.QY, t)),
        w = () => {
            d.A.updateStageVideoLimitBoostUpsellDismissed(t.id, !0),
                N.default.track(O.HAw.BOOSTING_UPSELL_CLICKED, {
                    guild_id: t.guild_id,
                    type: L.e.VIDEO_STAGE_LIMIT,
                    is_moderator: U,
                    action: L.pd.DISMISS,
                });
        },
        k = { canModerate: U, audienceCount: m, channel: t, speakerCount: A },
        V = s.useRef(k);
    s.useEffect(() => {
        V.current = k;
    }),
        s.useEffect(() => {
            let { canModerate: e, audienceCount: t, channel: n, speakerCount: i } = V.current;
            j &&
                N.default.track(O.HAw.BOOSTING_UPSELL_VIEWED, {
                    guild_id: n.guild_id,
                    type: L.e.VIDEO_STAGE_LIMIT,
                    is_moderator: e,
                    listener_count: i + t,
                });
        }, [j]);
    let B = (0, i.jsx)(c.NPJ, {
        theme: O.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)(f.Ay, {
                toolbar: (0, i.jsx)(G, { toggleRequestToSpeakSidebar: n, showRequestToSpeakSidebar: l, channel: t }),
                onDoubleClick: x.I,
                transparent: !0,
                className: a()(e, D.lF),
                children: [
                    (0, i.jsx)(f.Ay.Icon, {
                        icon: c.qux,
                        disabled: !0,
                        "aria-label": M.intl.string(M.t.EErMzA),
                        className: D.Kk,
                        color: null != h ? o.A.colors.TEXT_MUTED.css : void 0,
                    }),
                    (0, i.jsx)(f.Ay.Title, { className: D.HA, wrapperClassName: D.KD, children: h?.topic ?? u }),
                    (0, i.jsx)(f.Ay.Divider, { className: D.yF }),
                    (0, i.jsxs)(f.Ay.Title, {
                        children: [
                            (0, i.jsx)(c.cNw, { size: "xs", color: o.A.colors.TEXT_MUTED.css }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: D.N_,
                                children: M.intl.format(M.t.chmM9N, { count: A }),
                            }),
                            (0, i.jsx)(c.nFg, { size: "xs", className: D.Kk, color: "currentColor" }),
                            (0, i.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: D.N_,
                                children: M.intl.format(M.t["+v2pN2"], { count: m }),
                            }),
                        ],
                    }),
                ],
            }),
    });
    return j
        ? (0, i.jsxs)("div", {
              children: [
                  B,
                  (0, i.jsxs)("div", {
                      className: D.bp,
                      children: [
                          (0, i.jsx)(P, {}),
                          (0, i.jsxs)("div", {
                              className: D.Qq,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: T ? M.intl.string(M.t["T+zF9M"]) : M.intl.string(M.t["IZ+SVv"]),
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      children: T ? M.intl.string(M.t.Izgpmv) : M.intl.string(M.t["7FHbPG"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: D.Uo,
                              children: T
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(c.Button, {
                                                onClick: w,
                                                size: "sm",
                                                variant: "secondary",
                                                text: M.intl.string(M.t.L5eIZ2),
                                            }),
                                            (0, i.jsx)(c.Button, {
                                                variant: "expressive",
                                                onClick: () => {
                                                    (0, _.K)({
                                                        guildId: t.guild_id,
                                                        location: { section: O.JJy.STAGE_VIDEO_LIMIT },
                                                    }),
                                                        N.default.track(O.HAw.BOOSTING_UPSELL_CLICKED, {
                                                            guild_id: t.guild_id,
                                                            type: L.e.VIDEO_STAGE_LIMIT,
                                                            is_moderator: U,
                                                            action: L.pd.BOOST,
                                                        });
                                                },
                                                size: "sm",
                                                text: M.intl.string(M.t.Uj0md3),
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(c.Button, {
                                        variant: "primary",
                                        onClick: w,
                                        size: "sm",
                                        text: M.intl.string(M.t.WAI6xu),
                                    }),
                          }),
                      ],
                  }),
              ],
          })
        : B;
}
function P() {
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
