n.d(t, { A: () => N, o: () => C });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    o = n(311907),
    c = n(534514),
    d = n(834730),
    u = n(821609),
    m = n(73153),
    h = n(714991),
    f = n(970163),
    _ = n(184989),
    g = n(486020),
    p = n(240248),
    x = n(409626),
    E = n(305080),
    A = n(652215),
    v = n(985018),
    I = n(141535),
    b = n(127537),
    j = n(149225);
function N(e) {
    let { game: t, trackAction: n, onInviteResolved: i, closeModal: p } = e,
        [E, j] = a.useState(),
        N = (0, o.bG)([_.A], () => E?.guild?.id != null && _.A.isMember(E?.guild?.id)),
        C = a.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === s.V.DISCORD;
                }),
            [t.websites],
        );
    a.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != E && E.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, f.A)(t);
                !0 !== e.banned && (j(e.invite), null != e.invite && i?.(e.invite));
            }
        };
        null != C && e(C.url);
    }, [C, i, E]);
    let S = a.useCallback(() => {
        null != E &&
            (n(x.Ws.JoinOfficialServer),
            p(),
            m.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: E, code: E.code, context: A.BRT.APP }));
    }, [E, n, p]);
    if (null == E || null == E.guild || !E.guild.features.includes(A.GuildFeatures.VERIFIED)) return null;
    let y = g.Ay.getGuildIconURL({ id: E.guild.id, icon: E.guild.icon, size: 32 });
    return (0, l.jsxs)("div", {
        className: I.fi,
        children: [
            (0, l.jsx)(c.D, {
                className: I.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: v.intl.string(v.t.kBDZSL),
            }),
            (0, l.jsxs)("div", {
                className: r()(I.nM, I.mX),
                children: [
                    (0, l.jsx)("img", {
                        className: b.$f,
                        src: y,
                        alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: E.guild.name }),
                    }),
                    (0, l.jsxs)("div", {
                        className: b.U5,
                        children: [
                            (0, l.jsxs)("div", {
                                className: b.YS,
                                children: [
                                    (0, l.jsx)(d.E, { variant: "text-sm/semibold", children: E.guild.name }),
                                    (0, l.jsx)(h.A, { guild: E.guild, size: 16 }),
                                ],
                            }),
                            null != E.approximate_member_count &&
                                (0, l.jsx)(d.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, { count: E.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(u.$, {
                variant: "secondary",
                text: N ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                onClick: S,
                fullWidth: !0,
            }),
        ],
    });
}
function C(e) {
    let { trackAction: t, closeModal: n } = e,
        { canStartAuthorization: i, hasAlreadyLinked: r, officialInvite: s, isMember: o } = (0, E.c)(),
        f = a.useCallback(() => {
            null != s &&
                (t(x.Ws.JoinOfficialServer),
                n(),
                m.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: A.BRT.APP }));
        }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(A.GuildFeatures.VERIFIED)) return null;
    let _ = g.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        I = g.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        b = (i && !r) || null == I,
        N = (0, l.jsx)("img", {
            className: j.$f,
            src: _,
            alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        C = b ? j.To : j.Kt,
        S = b ? j.yj : j.FS;
    return (0, l.jsxs)("div", {
        className: j.uW,
        children: [
            (0, l.jsx)(c.D, {
                className: j.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: v.intl.string(v.t["U2N+ci"]),
            }),
            (0, l.jsxs)("div", {
                className: j.kL,
                children: [
                    !b && null != I && (0, l.jsx)("img", { className: j.ll, src: I, alt: "", draggable: !1 }),
                    (0, l.jsxs)("div", {
                        className: j.hQ,
                        children: [
                            (0, l.jsxs)("div", {
                                className: C,
                                children: [
                                    b
                                        ? N
                                        : (0, l.jsx)("div", {
                                              className: j._C,
                                              children: (0, l.jsx)("div", { className: j.kW, children: N }),
                                          }),
                                    (0, l.jsxs)("div", {
                                        className: S,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: j.YS,
                                                children: [
                                                    (0, l.jsx)(h.A, { guild: s.guild, size: 16 }),
                                                    (0, l.jsx)(c.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, p.uJ)(s.guild?.description) &&
                                                (0, l.jsx)(d.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, l.jsxs)("div", {
                                                      className: j.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, l.jsxs)("div", {
                                                                  className: j.Tb,
                                                                  children: [
                                                                      (0, l.jsx)("i", { className: j._o }),
                                                                      (0, l.jsx)(d.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: v.intl.format(v.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, l.jsxs)("div", {
                                                                  className: j.Tb,
                                                                  children: [
                                                                      (0, l.jsx)("i", { className: j.jk }),
                                                                      (0, l.jsx)(d.E, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: v.intl.format(v.t.zRl6XR, {
                                                                              count: s.approximate_member_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                      ],
                                                  })
                                                : null,
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsx)(u.$, {
                                variant: "secondary",
                                text: o ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                                onClick: f,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
