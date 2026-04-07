n.d(t, { A: () => b, o: () => C });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(505779),
    o = n(311907),
    c = n(397927),
    d = n(73153),
    u = n(714991),
    m = n(970163),
    x = n(184989),
    g = n(486020),
    h = n(240248),
    f = n(409626),
    p = n(305080),
    _ = n(652215),
    v = n(985018),
    A = n(282063),
    j = n(682209),
    E = n(862809);
function b(e) {
    let { game: t, trackAction: n, onInviteResolved: l, closeModal: h } = e,
        [p, E] = i.useState(),
        b = (0, o.bG)([x.A], () => p?.guild?.id != null && x.A.isMember(p?.guild?.id)),
        C = i.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === s.V.DISCORD;
                }),
            [t.websites],
        );
    i.useEffect(() => {
        let e = async (e) => {
            let t = e.split("/").pop();
            if (null != t) {
                if (null != p && p.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, m.A)(t);
                !0 !== e.banned && (E(e.invite), null != e.invite && l?.(e.invite));
            }
        };
        null != C && e(C.url);
    }, [C, l, p]);
    let I = i.useCallback(() => {
        null != p &&
            (n(f.Ws.JoinOfficialServer),
            h(),
            d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: p, code: p.code, context: _.BRT.APP }));
    }, [p, n, h]);
    if (null == p || null == p.guild || !p.guild.features.includes(_.GuildFeatures.VERIFIED)) return null;
    let N = g.Ay.getGuildIconURL({ id: p.guild.id, icon: p.guild.icon, size: 32 });
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
                        src: N,
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
                onClick: I,
                fullWidth: !0,
            }),
        ],
    });
}
function C(e) {
    let { trackAction: t, closeModal: n } = e,
        { canStartAuthorization: l, hasAlreadyLinked: r, officialInvite: s, isMember: o } = (0, p.c)(),
        m = i.useCallback(() => {
            null != s &&
                (t(f.Ws.JoinOfficialServer),
                n(),
                d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: _.BRT.APP }));
        }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(_.GuildFeatures.VERIFIED)) return null;
    let x = g.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        A = g.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        j = (l && !r) || null == A,
        b = (0, a.jsx)("img", {
            className: E.$f,
            src: x,
            alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: s.guild.name }),
            draggable: !1,
        }),
        C = j ? E.To : E.Kt,
        I = j ? E.yj : E.FS;
    return (0, a.jsxs)("div", {
        className: E.uW,
        children: [
            (0, a.jsx)(c.Heading, {
                className: E.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: v.intl.string(v.t["U2N+ci"]),
            }),
            (0, a.jsxs)("div", {
                className: E.kL,
                children: [
                    !j && null != A && (0, a.jsx)("img", { className: E.ll, src: A, alt: "", draggable: !1 }),
                    (0, a.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: C,
                                children: [
                                    j
                                        ? b
                                        : (0, a.jsx)("div", {
                                              className: E._C,
                                              children: (0, a.jsx)("div", { className: E.kW, children: b }),
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: I,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: E.YS,
                                                children: [
                                                    (0, a.jsx)(u.A, { guild: s.guild, size: 16 }),
                                                    (0, a.jsx)(c.Heading, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, h.uJ)(s.guild?.description) &&
                                                (0, a.jsx)(c.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: s.guild?.description,
                                                }),
                                            null != s.approximate_member_count || null != s.approximate_presence_count
                                                ? (0, a.jsxs)("div", {
                                                      className: E.iR,
                                                      children: [
                                                          null != s.approximate_presence_count &&
                                                              (0, a.jsxs)("div", {
                                                                  className: E.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: E._o }),
                                                                      (0, a.jsx)(c.Text, {
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
                                                                  className: E.Tb,
                                                                  children: [
                                                                      (0, a.jsx)("i", { className: E.jk }),
                                                                      (0, a.jsx)(c.Text, {
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
                            (0, a.jsx)(c.Button, {
                                variant: "secondary",
                                text: o ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                                onClick: m,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
