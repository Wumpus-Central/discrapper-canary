n.d(t, { A: () => I, o: () => b });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(505779),
    c = n(311907),
    o = n(397927),
    d = n(73153),
    u = n(714991),
    m = n(970163),
    x = n(184989),
    h = n(486020),
    f = n(240248),
    g = n(409626),
    p = n(305080),
    _ = n(652215),
    v = n(985018),
    j = n(282063),
    A = n(682209),
    C = n(862809);
function I(e) {
    let { detectedGame: t, trackAction: n, onInviteResolved: i, closeModal: f } = e,
        [p, C] = l.useState(),
        I = (0, c.bG)([x.A], () => p?.guild?.id != null && x.A.isMember(p?.guild?.id)),
        b = l.useMemo(
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
                if (null != p && p.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, m.A)(t);
                !0 !== e.banned && (C(e.invite), null != e.invite && i?.(e.invite));
            }
        };
        null != b && e(b.url);
    }, [b, i, p]);
    let E = l.useCallback(() => {
        null != p &&
            (n(g.Ws.JoinOfficialServer),
            f(),
            d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: p, code: p.code, context: _.BRT.APP }));
    }, [p, n, f]);
    if (null == p || null == p.guild || !p.guild.features.includes(_.GuildFeatures.VERIFIED)) return null;
    let N = h.Ay.getGuildIconURL({ id: p.guild.id, icon: p.guild.icon, size: 32 });
    return (0, a.jsxs)("div", {
        className: j.fi,
        children: [
            (0, a.jsx)(o.Heading, {
                className: j.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: v.intl.string(v.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: r()(j.nM, j.mX),
                children: [
                    (0, a.jsx)("img", {
                        className: A.$f,
                        src: N,
                        alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: p.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: A.U5,
                        children: [
                            (0, a.jsxs)("div", {
                                className: A.YS,
                                children: [
                                    (0, a.jsx)(o.Text, { variant: "text-sm/semibold", children: p.guild.name }),
                                    (0, a.jsx)(u.A, { guild: p.guild, size: 16 }),
                                ],
                            }),
                            null != p.approximate_member_count &&
                                (0, a.jsx)(o.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, { count: p.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(o.Button, {
                variant: "secondary",
                text: I ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                onClick: E,
                fullWidth: !0,
            }),
        ],
    });
}
function b(e) {
    let { trackAction: t, closeModal: n } = e,
        { canStartAuthorization: i, hasAlreadyLinked: r, officialInvite: s, isMember: c } = (0, p.c)(),
        m = l.useCallback(() => {
            null != s &&
                (t(g.Ws.JoinOfficialServer),
                n(),
                d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: _.BRT.APP }));
        }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(_.GuildFeatures.VERIFIED)) return null;
    let x = h.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        j = h.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        A = (i && !r) || null == j,
        I = (0, a.jsx)("img", {
            className: C.$f,
            src: x,
            alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: s.guild.name }),
        }),
        b = A ? C.To : C.Kt,
        E = A ? C.yj : C.FS;
    return (0, a.jsxs)("div", {
        className: C.uW,
        children: [
            (0, a.jsx)(o.Heading, {
                className: C.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: v.intl.string(v.t["U2N+ci"]),
            }),
            (0, a.jsxs)("div", {
                className: C.kL,
                children: [
                    !A && null != j && (0, a.jsx)("img", { className: C.ll, src: j, alt: "" }),
                    (0, a.jsxs)("div", {
                        className: C.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: b,
                                children: [
                                    A
                                        ? I
                                        : (0, a.jsx)("div", {
                                              className: C._C,
                                              children: (0, a.jsx)("div", { className: C.kW, children: I }),
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: E,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: C.YS,
                                                children: [
                                                    (0, a.jsx)(u.A, { guild: s.guild, size: 16 }),
                                                    (0, a.jsx)(o.Heading, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, f.uJ)(s.guild?.description) &&
                                                (0, a.jsx)(o.Text, {
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
                                                                      (0, a.jsx)(o.Text, {
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
                                                                      (0, a.jsx)(o.Text, {
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
                            (0, a.jsx)(o.Button, {
                                variant: "secondary",
                                text: c ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
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
