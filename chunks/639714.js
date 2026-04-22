n.d(t, { A: () => N, o: () => j });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    o = n(311907),
    d = n(534514),
    c = n(834730),
    u = n(821609),
    m = n(73153),
    _ = n(714991),
    h = n(970163),
    f = n(184989),
    g = n(486020),
    p = n(240248),
    x = n(409626),
    b = n(305080),
    A = n(652215),
    v = n(985018),
    E = n(141535),
    I = n(127537),
    C = n(149225);
function N(e) {
    let { game: t, trackAction: n, onInviteResolved: i, closeModal: p } = e,
        [b, C] = l.useState(),
        N = (0, o.bG)([f.A], () => b?.guild?.id != null && f.A.isMember(b?.guild?.id)),
        j = l.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === s.V.DISCORD;
                }),
            [t.websites],
        );
    l.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != b && b.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, h.A)(t);
                !0 !== e.banned && (C(e.invite), null != e.invite && i?.(e.invite));
            }
        };
        null != j && e(j.url);
    }, [j, i, b]);
    let y = l.useCallback(() => {
        null != b &&
            (n(x.Ws.JoinOfficialServer),
            p(),
            m.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: b, code: b.code, context: A.BRT.APP }));
    }, [b, n, p]);
    if (null == b || null == b.guild || !b.guild.features.includes(A.GuildFeatures.VERIFIED)) return null;
    let S = g.Ay.getGuildIconURL({ id: b.guild.id, icon: b.guild.icon, size: 32 });
    return (0, a.jsxs)("div", {
        className: E.fi,
        children: [
            (0, a.jsx)(d.D, {
                className: E.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: v.intl.string(v.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: r()(E.nM, E.mX),
                children: [
                    (0, a.jsx)("img", {
                        className: I.$f,
                        src: S,
                        alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: b.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: I.U5,
                        children: [
                            (0, a.jsxs)("div", {
                                className: I.YS,
                                children: [
                                    (0, a.jsx)(c.E, { variant: "text-sm/semibold", children: b.guild.name }),
                                    (0, a.jsx)(_.A, { guild: b.guild, size: 16 }),
                                ],
                            }),
                            null != b.approximate_member_count &&
                                (0, a.jsx)(c.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, { count: b.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(u.$, {
                variant: "secondary",
                text: N ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                onClick: y,
                fullWidth: !0,
            }),
        ],
    });
}
function j(e) {
    let { trackAction: t, closeModal: n } = e,
        { canStartAuthorization: i, hasAlreadyLinked: r, officialInvite: s, isMember: o } = (0, b.c)(),
        h = l.useCallback(() => {
            null != s &&
                (t(x.Ws.JoinOfficialServer),
                n(),
                m.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: A.BRT.APP }));
        }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(A.GuildFeatures.VERIFIED)) return null;
    let f = g.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        E = g.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        I = (i && !r) || null == E,
        N = (0, a.jsx)("img", {
            className: C.$f,
            src: f,
            alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        j = I ? C.To : C.Kt,
        y = I ? C.yj : C.FS;
    return (0, a.jsxs)("div", {
        className: C.uW,
        children: [
            (0, a.jsx)(d.D, {
                className: C.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: v.intl.string(v.t["U2N+ci"]),
            }),
            (0, a.jsxs)("div", {
                className: C.kL,
                children: [
                    !I && null != E && (0, a.jsx)("img", { className: C.ll, src: E, alt: "", draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: C.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: j,
                                children: [
                                    I
                                        ? N
                                        : (0, a.jsx)("div", {
                                              className: C._C,
                                              children: (0, a.jsx)("div", { className: C.kW, children: N }),
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: y,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: C.YS,
                                                children: [
                                                    (0, a.jsx)(_.A, { guild: s.guild, size: 16 }),
                                                    (0, a.jsx)(d.D, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, p.uJ)(s.guild?.description) &&
                                                (0, a.jsx)(c.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, a.jsxs)("div", {
                                                      className: C.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, a.jsxs)("div", {
                                                                  className: C.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: C._o }),
                                                                      (0, a.jsx)(c.E, {
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
                                                              (0, a.jsxs)("div", {
                                                                  className: C.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: C.jk }),
                                                                      (0, a.jsx)(c.E, {
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
                            (0, a.jsx)(u.$, {
                                variant: "secondary",
                                text: o ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                                onClick: h,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
