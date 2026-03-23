n.d(t, { A: () => b, o: () => C });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    o = n(311907),
    c = n(397927),
    d = n(73153),
    u = n(714991),
    m = n(970163),
    x = n(184989),
    _ = n(486020),
    g = n(240248),
    f = n(409626),
    p = n(305080),
    h = n(652215),
    v = n(985018),
    A = n(851822),
    j = n(921380),
    I = n(20440);
function b(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: i, closeModal: g } = e,
        [p, I] = l.useState(),
        b = (0, o.bG)([x.A], () => p?.guild?.id != null && x.A.isMember(p?.guild?.id)),
        C = l.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === s.V.DISCORD;
                }),
            [t.websites],
        );
    if (
        (l.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != p && p.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (I(e.invite), null != e.invite && i?.(e.invite));
                }
            };
            null != C && e(C.url);
        }, [C, i, p]),
        null == p || null == p.guild || !p.guild.features.includes(h.GuildFeatures.VERIFIED))
    )
        return null;
    let E = _.Ay.getGuildIconURL({ id: p.guild.id, icon: p.guild.icon, size: 32 });
    return (0, a.jsxs)("div", {
        className: A.fi,
        children: [
            (0, a.jsx)(c.Heading, {
                className: A.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: v.intl.string(v.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: r()(A.nM, A.mX),
                children: [
                    (0, a.jsx)("img", {
                        className: j.$f,
                        src: E,
                        alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: p.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: j.U5,
                        children: [
                            (0, a.jsxs)("div", {
                                className: j.YS,
                                children: [
                                    (0, a.jsx)(c.Text, { variant: "text-sm/semibold", children: p.guild.name }),
                                    (0, a.jsx)(u.A, { guild: p.guild, size: 16 }),
                                ],
                            }),
                            null != p.approximate_member_count &&
                                (0, a.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, { count: p.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c.Button, {
                variant: "secondary",
                text: b ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                onClick: () => {
                    g(),
                        n(f.Ws.JoinOfficialServer),
                        d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: p, code: p.code, context: h.BRT.APP });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function C(e) {
    let { trackClick: t, closeModal: n } = e,
        { canStartAuthorization: l, hasAlreadyLinked: i, officialInvite: r, isMember: s } = (0, p.c)();
    if (null == r || null == r.guild || !r.guild.features.includes(h.GuildFeatures.VERIFIED)) return null;
    let o = _.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        m = _.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        x = (l && !i) || null == m,
        A = (0, a.jsx)("img", {
            className: I.$f,
            src: o,
            alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: r.guild.name }),
        }),
        j = x ? I.To : I.Kt,
        b = x ? I.yj : I.FS;
    return (0, a.jsxs)("div", {
        className: I.uW,
        children: [
            (0, a.jsx)(c.Heading, {
                className: I.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: v.intl.string(v.t["U2N+ci"]),
            }),
            (0, a.jsxs)("div", {
                className: I.kL,
                children: [
                    !x && null != m && (0, a.jsx)("img", { className: I.ll, src: m, alt: "" }),
                    (0, a.jsxs)("div", {
                        className: I.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: j,
                                children: [
                                    x
                                        ? A
                                        : (0, a.jsx)("div", {
                                              className: I._C,
                                              children: (0, a.jsx)("div", { className: I.kW, children: A }),
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: b,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: I.YS,
                                                children: [
                                                    (0, a.jsx)(u.A, { guild: r.guild, size: 16 }),
                                                    (0, a.jsx)(c.Heading, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, g.uJ)(r.guild?.description) &&
                                                (0, a.jsx)(c.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, a.jsxs)("div", {
                                                      className: I.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, a.jsxs)("div", {
                                                                  className: I.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: I._o }),
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: v.intl.format(v.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  r.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != r.approximate_member_count &&
                                                              (0, a.jsxs)("div", {
                                                                  className: I.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: I.jk }),
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: v.intl.format(v.t.zRl6XR, {
                                                                              count: r.approximate_member_count,
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
                            (0, a.jsx)(c.Button, {
                                variant: "secondary",
                                text: s ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                                onClick: () => {
                                    n(),
                                        t(f.Ws.JoinOfficialServer),
                                        d.h.dispatch({
                                            type: "INVITE_MODAL_OPEN",
                                            invite: r,
                                            code: r.code,
                                            context: h.BRT.APP,
                                        });
                                },
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
