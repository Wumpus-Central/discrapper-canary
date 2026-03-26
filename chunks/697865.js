n.d(t, { A: () => L });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    l = n(158954),
    o = n(311907),
    a = n(421380),
    d = n(397927),
    u = n(730134),
    c = n(775602),
    m = n(509536),
    p = n(721923),
    _ = n(29086),
    f = n(854627),
    g = n(696451),
    x = n(317525),
    A = n(71393),
    v = n(287809),
    h = n(562153),
    E = n(837921),
    j = n(953382),
    b = n(652215),
    I = n(333354),
    S = n(985018),
    C = n(509754),
    w = n(445826);
let N = E.Ay.getEnableHardwareAcceleration() ? d.JsQ : u.A;
function L(e) {
    let { guildId: t, showVideoCard: n = !1 } = e,
        i = (0, o.bG)([A.A], () => A.A.getGuild(t)),
        u = (0, o.bG)([x.A], () => x.A.getSortedRoles(t).find((e) => e.tags?.premium_subscriber === null)),
        E = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        L = E?.id,
        y = (0, o.bG)([g.Ay], () => (null != L ? g.Ay.getMember(t, L) : void 0), [L, t]),
        k = y?.premiumSince != null,
        R = (0, j.q)("GuildPowerupsBoostInfoContainerMember"),
        T = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        {
            avatarDecorationSrc: G,
            avatarSrc: P,
            eventHandlers: O,
        } = (0, f.A)({ userId: E?.id, guildId: t, size: d._3J.SIZE_40, animateOnHover: !T });
    if (null == i || null == y || null == E) return null;
    let D = n ? "div" : d.hLv;
    return (0, r.jsxs)(D, {
        className: n ? C.ft : C.fx,
        children: [
            !n && (0, r.jsx)("img", { alt: "", className: C.Sl, src: w }),
            (0, r.jsxs)("div", {
                className: C.FS,
                children: [
                    (0, r.jsx)(l.EYj, {
                        variant: "text-md/semibold",
                        children: S.intl.string(k ? I.default.KSWK1U : I.default.XXXX5l),
                    }),
                    (0, r.jsx)(l.EYj, {
                        variant: "text-sm/medium",
                        children: S.intl.format(k ? I.default["7fWTg4"] : I.default["7PXeeQ"], {
                            onClick: () => {
                                (0, m.K4)({
                                    guildId: t,
                                    location: {
                                        section: b.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                        object: b.ZSU.LEARN_MORE,
                                    },
                                });
                            },
                        }),
                    }),
                ],
            }),
            null != u &&
                !k &&
                (0, r.jsx)(_.V, {
                    avatar: (0, r.jsx)(N, {
                        ...O,
                        user: E,
                        src: P,
                        avatarDecoration: G,
                        size: d._3J.SIZE_40,
                        "aria-hidden": !0,
                        animate: !0,
                    }),
                    username: (0, r.jsx)(d.gyj, {
                        variant: "text-md/semibold",
                        name: h.Ay.getName(t, null, E),
                        colorString: u.colorString,
                        colorStrings: u.colorStrings,
                    }),
                    className: s()(C.Qs, C.cX),
                    message: S.intl.string(S.t["6OSasb"]),
                    decorations: (0, r.jsx)(d._Jp, {
                        color: d.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                        className: C.$J,
                    }),
                }),
            (0, r.jsx)(p.A, {
                guild: i,
                className: C.Qs,
                analyticsLocation: {
                    page: b.liQ.GUILD_POWERUPS_OVERVIEW,
                    section: b.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                },
                color: a.XD.BRAND,
                size: a.lO.MEDIUM,
                fullWidth: !0,
                useExpressiveButton: R,
                icon: (0, r.jsx)(d._Jp, { color: "currentColor", size: "sm" }),
            }),
        ],
    });
}
