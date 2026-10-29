t.d(n, { A: () => j });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(834730),
    r = t(821609),
    o = t(367513),
    c = t(878678),
    u = t(71393),
    d = t(576705),
    A = t(174459),
    h = t(113783),
    m = t(518769),
    g = t(233993),
    x = t(533233),
    C = t(652215),
    f = t(202541),
    p = t(105292),
    E = t(391203);
function j(e) {
    let { channel: n } = e,
        t = (0, h.uy)(n.id),
        j = (0, h.zy)(n.id, m.ip.AUDIENCE),
        I = (0, s.bG)([u.A], () => u.A.getGuild(n.guild_id), [n.guild_id]),
        N = I?.maxStageVideoChannelUsers ?? 0,
        T =
            null != I && I.features.has(C.GuildFeatures.COMMUNITY)
                ? N < C.p2C
                : I?.premiumTier !== C.TVA.TIER_3 && N <= C.nyz,
        _ = (0, x.A)(n),
        b = (0, s.bG)([d.A], () => d.A.can(g.QY, n));
    function S() {
        (o.A.updateStageVideoLimitBoostUpsellDismissed(n.id, !0),
            A.default.track(C.HAw.BOOSTING_UPSELL_CLICKED, {
                guild_id: n.guild_id,
                type: f.e.VIDEO_STAGE_LIMIT,
                is_moderator: b,
                action: f.pd.DISMISS,
            }));
    }
    let y = { canModerate: b, audienceCount: j, channel: n, speakerCount: t },
        O = l.useRef(y);
    return (l.useEffect(() => {
        O.current = y;
    }),
    l.useEffect(() => {
        let { canModerate: e, audienceCount: n, channel: t, speakerCount: i } = O.current;
        _ &&
            A.default.track(C.HAw.BOOSTING_UPSELL_VIEWED, {
                guild_id: t.guild_id,
                type: f.e.VIDEO_STAGE_LIMIT,
                is_moderator: e,
                listener_count: i + n,
            });
    }, [_]),
    _)
        ? (0, i.jsxs)("div", {
              className: E.bp,
              children: [
                  (0, i.jsx)(v, {}),
                  (0, i.jsxs)("div", {
                      className: E.Qq,
                      children: [
                          (0, i.jsx)(a.E, {
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: T ? p.intl.string(p.t["T+zF9M"]) : p.intl.string(p.t["IZ+SVv"]),
                          }),
                          (0, i.jsx)(a.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: T ? p.intl.string(p.t.Izgpmv) : p.intl.string(p.t["7FHbPG"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: E.Uo,
                      children: T
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(r.$, {
                                        onClick: S,
                                        size: "sm",
                                        variant: "secondary",
                                        text: p.intl.string(p.t.L5eIZ2),
                                    }),
                                    (0, i.jsx)(r.$, {
                                        variant: "expressive",
                                        onClick: function () {
                                            ((0, c.K4)({
                                                guildId: n.guild_id,
                                                location: { section: C.JJy.STAGE_VIDEO_LIMIT },
                                            }),
                                                A.default.track(C.HAw.BOOSTING_UPSELL_CLICKED, {
                                                    guild_id: n.guild_id,
                                                    type: f.e.VIDEO_STAGE_LIMIT,
                                                    is_moderator: b,
                                                    action: f.pd.BOOST,
                                                }));
                                        },
                                        size: "sm",
                                        text: p.intl.string(p.t.Uj0md3),
                                    }),
                                ],
                            })
                          : (0, i.jsx)(r.$, {
                                variant: "primary",
                                onClick: S,
                                size: "sm",
                                text: p.intl.string(p.t.WAI6xu),
                            }),
                  }),
              ],
          })
        : null;
}
function v() {
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
