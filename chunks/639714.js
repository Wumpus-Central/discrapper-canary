n.d(t, { A: () => A, o: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(505779),
    o = n(311907),
    c = n(397927),
    d = n(73153),
    u = n(714991),
    m = n(970163),
    x = n(184989),
    g = n(486020),
    h = n(240248),
    f = n(409626),
    j = n(305080),
    p = n(652215),
    _ = n(985018),
    I = n(851822),
    v = n(921380),
    E = n(20440);
function A(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: a, closeModal: h } = e,
        [j, E] = l.useState(),
        A = (0, o.bG)([x.A], () => j?.guild?.id != null && x.A.isMember(j?.guild?.id)),
        N = l.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === r.V.DISCORD;
                }),
            [t.websites],
        );
    if (
        (l.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != j && j.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (E(e.invite), null != e.invite && a?.(e.invite));
                }
            };
            null != N && e(N.url);
        }, [N, a, j]),
        null == j || null == j.guild || !j.guild.features.includes(p.GuildFeatures.VERIFIED))
    )
        return null;
    let C = g.Ay.getGuildIconURL({ id: j.guild.id, icon: j.guild.icon, size: 32 });
    return (0, i.jsxs)("div", {
        className: I.fi,
        children: [
            (0, i.jsx)(c.Heading, {
                className: I.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: _.intl.string(_.t.kBDZSL),
            }),
            (0, i.jsxs)("div", {
                className: s()(I.nM, I.mX),
                children: [
                    (0, i.jsx)("img", {
                        className: v.$f,
                        src: C,
                        alt: _.intl.formatToPlainString(_.t.xm6W9D, { guildName: j.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: v.U5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: v.YS,
                                children: [
                                    (0, i.jsx)(c.Text, { variant: "text-sm/semibold", children: j.guild.name }),
                                    (0, i.jsx)(u.A, { guild: j.guild, size: 16 }),
                                ],
                            }),
                            null != j.approximate_member_count &&
                                (0, i.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: _.intl.format(_.t.zRl6XR, { count: j.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(c.Button, {
                variant: "secondary",
                text: A ? _.intl.string(_.t.cEnaWx) : _.intl.string(_.t.XpeFYr),
                onClick: () => {
                    h(),
                        n(f.Ws.JoinOfficialServer),
                        d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: j, code: j.code, context: p.BRT.APP });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function N(e) {
    let { trackClick: t, closeModal: n } = e,
        { canStartAuthorization: l, hasAlreadyLinked: a, officialInvite: s, isMember: r } = (0, j.c)();
    if (null == s || null == s.guild || !s.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let o = g.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        m = g.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        x = (l && !a) || null == m,
        I = (0, i.jsx)("img", {
            className: E.$f,
            src: o,
            alt: _.intl.formatToPlainString(_.t.xm6W9D, { guildName: s.guild.name }),
        }),
        v = x ? E.To : E.Kt,
        A = x ? E.yj : E.FS;
    return (0, i.jsxs)("div", {
        className: E.uW,
        children: [
            (0, i.jsx)(c.Heading, {
                className: E.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: _.intl.string(_.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: E.kL,
                children: [
                    !x && null != m && (0, i.jsx)("img", { className: E.ll, src: m, alt: "" }),
                    (0, i.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: v,
                                children: [
                                    x
                                        ? I
                                        : (0, i.jsx)("div", {
                                              className: E._C,
                                              children: (0, i.jsx)("div", { className: E.kW, children: I }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: A,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: E.YS,
                                                children: [
                                                    (0, i.jsx)(u.A, { guild: s.guild, size: 16 }),
                                                    (0, i.jsx)(c.Heading, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, h.uJ)(s.guild?.description) &&
                                                (0, i.jsx)(c.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: E.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: E.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: E._o }),
                                                                      (0, i.jsx)(c.Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: _.intl.format(_.t["LC+S+m"], {
                                                                              membersOnline:
                                                                                  s.approximate_presence_count,
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          null != s.approximate_member_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: E.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: E.jk }),
                                                                      (0, i.jsx)(c.Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: _.intl.format(_.t.zRl6XR, {
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
                            (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                text: r ? _.intl.string(_.t.cEnaWx) : _.intl.string(_.t.XpeFYr),
                                onClick: () => {
                                    n(),
                                        t(f.Ws.JoinOfficialServer),
                                        d.h.dispatch({
                                            type: "INVITE_MODAL_OPEN",
                                            invite: s,
                                            code: s.code,
                                            context: p.BRT.APP,
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
