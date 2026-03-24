n.d(t, { A: () => I, o: () => C });
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
    f = n(486020),
    h = n(240248),
    g = n(409626),
    _ = n(305080),
    p = n(652215),
    A = n(985018),
    v = n(851822),
    j = n(921380),
    E = n(20440);
function I(e) {
    let { detectedGame: t, trackAction: n, onInviteResolved: i, closeModal: h } = e,
        [_, E] = l.useState(),
        I = (0, c.bG)([x.A], () => _?.guild?.id != null && x.A.isMember(_?.guild?.id)),
        C = l.useMemo(
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
                if (null != _ && _.code.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, m.A)(t);
                !0 !== e.banned && (E(e.invite), null != e.invite && i?.(e.invite));
            }
        };
        null != C && e(C.url);
    }, [C, i, _]);
    let b = l.useCallback(() => {
        null != _ &&
            (n(g.Ws.JoinOfficialServer),
            h(),
            d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: _, code: _.code, context: p.BRT.APP }));
    }, [_, n, h]);
    if (null == _ || null == _.guild || !_.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let N = f.Ay.getGuildIconURL({ id: _.guild.id, icon: _.guild.icon, size: 32 });
    return (0, a.jsxs)("div", {
        className: v.fi,
        children: [
            (0, a.jsx)(o.Heading, {
                className: v.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: A.intl.string(A.t.kBDZSL),
            }),
            (0, a.jsxs)("div", {
                className: r()(v.nM, v.mX),
                children: [
                    (0, a.jsx)("img", {
                        className: j.$f,
                        src: N,
                        alt: A.intl.formatToPlainString(A.t.xm6W9D, { guildName: _.guild.name }),
                    }),
                    (0, a.jsxs)("div", {
                        className: j.U5,
                        children: [
                            (0, a.jsxs)("div", {
                                className: j.YS,
                                children: [
                                    (0, a.jsx)(o.Text, { variant: "text-sm/semibold", children: _.guild.name }),
                                    (0, a.jsx)(u.A, { guild: _.guild, size: 16 }),
                                ],
                            }),
                            null != _.approximate_member_count &&
                                (0, a.jsx)(o.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: A.intl.format(A.t.zRl6XR, { count: _.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(o.Button, {
                variant: "secondary",
                text: I ? A.intl.string(A.t.cEnaWx) : A.intl.string(A.t.XpeFYr),
                onClick: b,
                fullWidth: !0,
            }),
        ],
    });
}
function C(e) {
    let { trackAction: t, closeModal: n } = e,
        { canStartAuthorization: i, hasAlreadyLinked: r, officialInvite: s, isMember: c } = (0, _.c)(),
        m = l.useCallback(() => {
            null != s &&
                (t(g.Ws.JoinOfficialServer),
                n(),
                d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: s, code: s.code, context: p.BRT.APP }));
        }, [s, t, n]);
    if (null == s || null == s.guild || !s.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let x = f.Ay.getGuildIconURL({ id: s.guild.id, icon: s.guild.icon, size: 48 }),
        v = f.Ay.getGuildSplashURL({ id: s.guild.id, splash: s.guild.splash }),
        j = (i && !r) || null == v,
        I = (0, a.jsx)("img", {
            className: E.$f,
            src: x,
            alt: A.intl.formatToPlainString(A.t.xm6W9D, { guildName: s.guild.name }),
        }),
        C = j ? E.To : E.Kt,
        b = j ? E.yj : E.FS;
    return (0, a.jsxs)("div", {
        className: E.uW,
        children: [
            (0, a.jsx)(o.Heading, {
                className: E.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: A.intl.string(A.t["U2N+ci"]),
            }),
            (0, a.jsxs)("div", {
                className: E.kL,
                children: [
                    !j && null != v && (0, a.jsx)("img", { className: E.ll, src: v, alt: "" }),
                    (0, a.jsxs)("div", {
                        className: E.hQ,
                        children: [
                            (0, a.jsxs)("div", {
                                className: C,
                                children: [
                                    j
                                        ? I
                                        : (0, a.jsx)("div", {
                                              className: E._C,
                                              children: (0, a.jsx)("div", { className: E.kW, children: I }),
                                          }),
                                    (0, a.jsxs)("div", {
                                        className: b,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: E.YS,
                                                children: [
                                                    (0, a.jsx)(u.A, { guild: s.guild, size: 16 }),
                                                    (0, a.jsx)(o.Heading, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: s.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, h.uJ)(s.guild?.description) &&
                                                (0, a.jsx)(o.Text, {
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
                                                                      (0, a.jsx)(o.Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: A.intl.format(A.t["LC+S+m"], {
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
                                                                      (0, a.jsx)(o.Text, {
                                                                          variant: "text-xs/normal",
                                                                          color: "text-muted",
                                                                          children: A.intl.format(A.t.zRl6XR, {
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
                                text: c ? A.intl.string(A.t.cEnaWx) : A.intl.string(A.t.XpeFYr),
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
