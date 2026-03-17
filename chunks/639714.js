n.d(t, { A: () => I, o: () => b });
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
    f = n(486020),
    h = n(240248),
    g = n(409626),
    p = n(305080),
    v = n(652215),
    j = n(985018),
    _ = n(851822),
    A = n(921380),
    E = n(20440);
function I(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: i, closeModal: h } = e,
        [p, E] = l.useState(),
        I = (0, o.bG)([x.A], () => p?.guild?.id != null && x.A.isMember(p?.guild?.id)),
        b = l.useMemo(
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
                    !0 !== e.banned && (E(e.invite), null != e.invite && i?.(e.invite));
                }
            };
            null != b && e(b.url);
        }, [b, i, p]),
        null == p || null == p.guild || !p.guild.features.includes(v.GuildFeatures.VERIFIED))
    )
        return null;
    let N = f.Ay.getGuildIconURL({ id: p.guild.id, icon: p.guild.icon, size: 32 });
    return (0, a.jsxs)("div", {
        className: _.fi,
        children: [
            (0, a.jsx)(c.Heading, {
                className: _.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: j.intl.string(j.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: r()(_.nM, _.mX),
                children: [
                    (0, a.jsx)("img", {
                        className: A.$f,
                        src: N,
                        alt: j.intl.formatToPlainString(j.t.xm6W9D, { guildName: p.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: A.U5,
                        children: [
                            (0, a.jsxs)("div", {
                                className: A.YS,
                                children: [
                                    (0, a.jsx)(c.Text, { variant: "text-sm/semibold", children: p.guild.name }),
                                    (0, a.jsx)(u.A, { guild: p.guild, size: 16 }),
                                ],
                            }),
                            null != p.approximate_member_count &&
                                (0, a.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: j.intl.format(j.t.zRl6XR, { count: p.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c.Button, {
                variant: "secondary",
                text: I ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
                onClick: () => {
                    h(),
                        n(g.Ws.JoinOfficialServer),
                        d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: p, code: p.code, context: v.BRT.APP });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function b(e) {
    let { trackClick: t, closeModal: n } = e,
        { canStartAuthorization: l, hasAlreadyLinked: i, officialInvite: r, isMember: s } = (0, p.c)();
    if (null == r || null == r.guild || !r.guild.features.includes(v.GuildFeatures.VERIFIED)) return null;
    let o = f.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        m = f.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        x = (l && !i) || null == m,
        _ = (0, a.jsx)("img", {
            className: E.$f,
            src: o,
            alt: j.intl.formatToPlainString(j.t.xm6W9D, { guildName: r.guild.name }),
        }),
        A = x ? E.To : E.Kt,
        I = x ? E.yj : E.FS;
    return (0, a.jsxs)("div", {
        className: E.uW,
        children: [
            (0, a.jsx)(c.Heading, {
                className: E.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: j.intl.string(j.t["U2N+ci"]),
            }),
            (0, a.jsxs)("div", {
                className: E.kL,
                children: [
                    !x && null != m && (0, a.jsx)("img", { className: E.ll, src: m, alt: "" }),
                    (0, a.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: A,
                                children: [
                                    x
                                        ? _
                                        : (0, a.jsx)("div", {
                                              className: E._C,
                                              children: (0, a.jsx)("div", { className: E.kW, children: _ }),
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: I,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: E.YS,
                                                children: [
                                                    (0, a.jsx)(u.A, { guild: r.guild, size: 16 }),
                                                    (0, a.jsx)(c.Heading, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, h.uJ)(r.guild?.description) &&
                                                (0, a.jsx)(c.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, a.jsxs)("div", {
                                                      className: E.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, a.jsxs)("div", {
                                                                  className: E.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: E._o }),
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: j.intl.format(j.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  r.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != r.approximate_member_count &&
                                                              (0, a.jsxs)("div", {
                                                                  className: E.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: E.jk }),
                                                                      (0, a.jsx)(c.Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: j.intl.format(j.t.zRl6XR, {
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
                                text: s ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
                                onClick: () => {
                                    n(),
                                        t(g.Ws.JoinOfficialServer),
                                        d.h.dispatch({
                                            type: "INVITE_MODAL_OPEN",
                                            invite: r,
                                            code: r.code,
                                            context: v.BRT.APP,
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
