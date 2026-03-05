"use strict";
n.d(t, { A: () => E, o: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
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
    _ = n(305080),
    p = n(652215),
    v = n(985018),
    I = n(728528),
    j = n(272746),
    A = n(639142);
function E(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: a, closeModal: f } = e,
        [_, A] = l.useState(),
        E = (0, c.bG)([x.A], () => _?.guild?.id != null && x.A.isMember(_?.guild?.id)),
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
                    if (null != _ && _.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (A(e.invite), null != e.invite && a?.(e.invite));
                }
            };
            null != b && e(b.url);
        }, [b, a, _]),
        null == _ || null == _.guild || !_.guild.features.includes(p.GuildFeatures.VERIFIED))
    )
        return null;
    let N = h.Ay.getGuildIconURL({ id: _.guild.id, icon: _.guild.icon, size: 32 });
    return (0, i.jsxs)("div", {
        className: I.fi,
        children: [
            (0, i.jsx)(o.Heading, {
                className: I.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: v.intl.string(v.t.kBDZSL),
            }),
            (0, i.jsxs)("div", {
                className: r()(I.nM, I.mX),
                children: [
                    (0, i.jsx)("img", {
                        className: j.$f,
                        src: N,
                        alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: _.guild.name }),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.U5,
                        children: [
                            (0, i.jsxs)("div", {
                                className: j.YS,
                                children: [
                                    (0, i.jsx)(o.Text, { variant: "text-sm/semibold", children: _.guild.name }),
                                    (0, i.jsx)(u.A, { guild: _.guild, size: 16 }),
                                ],
                            }),
                            null != _.approximate_member_count &&
                                (0, i.jsx)(o.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: v.intl.format(v.t.zRl6XR, { count: _.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(o.Button, {
                variant: "secondary",
                text: E ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                onClick: () => {
                    f(),
                        n(g.Ws.JoinOfficialServer),
                        d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: _, code: _.code, context: p.BRT.APP });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function b(e) {
    let { trackClick: t, closeModal: n } = e,
        { canStartAuthorization: l, hasAlreadyLinked: a, officialInvite: r, isMember: s } = (0, _.c)();
    if (null == r || null == r.guild || !r.guild.features.includes(p.GuildFeatures.VERIFIED)) return null;
    let c = h.Ay.getGuildIconURL({ id: r.guild.id, icon: r.guild.icon, size: 48 }),
        m = h.Ay.getGuildSplashURL({ id: r.guild.id, splash: r.guild.splash }),
        x = (l && !a) || null == m,
        I = (0, i.jsx)("img", {
            className: A.$f,
            src: c,
            alt: v.intl.formatToPlainString(v.t.xm6W9D, { guildName: r.guild.name }),
        }),
        j = x ? A.To : A.Kt,
        E = x ? A.yj : A.FS;
    return (0, i.jsxs)("div", {
        className: A.uW,
        children: [
            (0, i.jsx)(o.Heading, {
                className: A.Gf,
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: v.intl.string(v.t["U2N+ci"]),
            }),
            (0, i.jsxs)("div", {
                className: A.kL,
                children: [
                    !x && null != m && (0, i.jsx)("img", { className: A.ll, src: m, alt: "" }),
                    (0, i.jsxs)("div", {
                        className: A.hQ,
                        children: [
                            (0, i.jsxs)("div", {
                                className: j,
                                children: [
                                    x
                                        ? I
                                        : (0, i.jsx)("div", {
                                              className: A._C,
                                              children: (0, i.jsx)("div", { className: A.kW, children: I }),
                                          }),
                                    (0, i.jsxs)("div", {
                                        className: E,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: A.YS,
                                                children: [
                                                    (0, i.jsx)(u.A, { guild: r.guild, size: 16 }),
                                                    (0, i.jsx)(o.Heading, {
                                                        variant: "heading-md/semibold",
                                                        color: "text-default",
                                                        children: r.guild.name,
                                                    }),
                                                ],
                                            }),
                                            !(0, f.uJ)(r.guild?.description) &&
                                                (0, i.jsx)(o.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: r.guild?.description,
                                                }),
                                            null != r.approximate_member_count || null != r.approximate_presence_count
                                                ? (0, i.jsxs)("div", {
                                                      className: A.iR,
                                                      children: [
                                                          null != r.approximate_presence_count &&
                                                              (0, i.jsxs)("div", {
                                                                  className: A.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: A._o }),
                                                                      (0, i.jsx)(o.Text, {
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
                                                              (0, i.jsxs)("div", {
                                                                  className: A.Tb,
                                                                  children: [
                                                                      (0, i.jsx)("i", { className: A.jk }),
                                                                      (0, i.jsx)(o.Text, {
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
                            (0, i.jsx)(o.Button, {
                                variant: "secondary",
                                text: s ? v.intl.string(v.t.cEnaWx) : v.intl.string(v.t.XpeFYr),
                                onClick: () => {
                                    n(),
                                        t(g.Ws.JoinOfficialServer),
                                        d.h.dispatch({
                                            type: "INVITE_MODAL_OPEN",
                                            invite: r,
                                            code: r.code,
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
