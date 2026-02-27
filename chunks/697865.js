n.d(t, { A: () => y });
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(158954),
    a = n(311907),
    o = n(421380),
    d = n(397927),
    u = n(730134),
    c = n(775602),
    m = n(509536),
    p = n(721923),
    _ = n(29086),
    x = n(854627),
    A = n(696451),
    f = n(317525),
    g = n(71393),
    v = n(287809),
    h = n(562153),
    b = n(837921),
    j = n(953382),
    E = n(652215),
    I = n(333354),
    C = n(985018),
    S = n(520277),
    w = n(445826);
let N = b.Ay.getEnableHardwareAcceleration() ? d.JsQ : u.A;
function y(e) {
    let { guildId: t, showVideoCard: n = !1 } = e,
        i = (0, a.bG)([g.A], () => g.A.getGuild(t)),
        u = (0, a.bG)([f.A], () => f.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        b = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        y = b?.id,
        L = (0, a.bG)([A.Ay], () => (null != y ? A.Ay.getMember(t, y) : void 0), [y, t]),
        T = L?.premiumSince != null,
        k = (0, j.q)("GuildPowerupsBoostInfoContainerMember"),
        R = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        {
            avatarDecorationSrc: P,
            avatarSrc: G,
            eventHandlers: O,
        } = (0, x.A)({ userId: b?.id, guildId: t, size: d._3J.SIZE_40, animateOnHover: !R });
    if (null == i || null == L || null == b) return null;
    let D = n ? "div" : d.hLv;
    return (0, r.jsxs)(D, {
        className: n ? S.ft : S.fx,
        children: [
            !n && (0, r.jsx)("img", { alt: "", className: S.Sl, src: w }),
            (0, r.jsxs)("div", {
                className: S.FS,
                children: [
                    (0, r.jsx)(s.EYj, {
                        variant: "text-md/semibold",
                        children: C.intl.string(T ? I.default.KSWK1U : I.default.XXXX5l),
                    }),
                    (0, r.jsx)(s.EYj, {
                        variant: "text-sm/medium",
                        children: C.intl.format(T ? I.default["7fWTg4"] : I.default["7PXeeQ"], {
                            onClick: () => {
                                (0, m.K)({
                                    guildId: t,
                                    location: {
                                        section: E.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                        object: E.ZSU.LEARN_MORE,
                                    },
                                });
                            },
                        }),
                    }),
                ],
            }),
            null != u &&
                !T &&
                (0, r.jsx)(_.V, {
                    avatar: (0, r.jsx)(N, {
                        ...O,
                        user: b,
                        src: G,
                        avatarDecoration: P,
                        size: d._3J.SIZE_40,
                        "aria-hidden": !0,
                        animate: !0,
                    }),
                    username: (0, r.jsx)(d.gyj, {
                        variant: "text-md/semibold",
                        name: h.Ay.getName(t, null, b),
                        colorString: u.colorString,
                        colorStrings: u.colorStrings,
                    }),
                    className: l()(S.Qs, S.cX),
                    message: C.intl.string(C.t["6OSasb"]),
                    decorations: (0, r.jsx)(d._Jp, {
                        color: d.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        className: S.$J,
                    }),
                }),
            (0, r.jsx)(p.A, {
                guild: i,
                className: S.Qs,
                analyticsLocation: {
                    page: E.liQ.GUILD_POWERUPS_OVERVIEW,
                    section: E.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                },
                color: o.XD.BRAND,
                size: o.lO.MEDIUM,
                fullWidth: !0,
                useExpressiveButton: k,
                icon: (0, r.jsx)(d._Jp, { color: "currentColor", size: "sm" }),
            }),
        ],
    });
}
