i.d(t, { A: () => A, o: () => N });
var l = i(627968),
    a = i(64700),
    n = i(503698),
    s = i.n(n),
    r = i(798236),
    c = i(311907),
    o = i(397927),
    d = i(73153),
    u = i(714991),
    m = i(970163),
    x = i(184989),
    g = i(486020),
    h = i(409626),
    f = i(652215),
    j = i(985018),
    p = i(851822),
    v = i(921380);
function A(e) {
    let { detectedGame: t, trackClick: i, onInviteResolved: n, closeModal: A } = e,
        [N, _] = a.useState(),
        I = (0, c.bG)([x.A], () => N?.guild?.id != null && x.A.isMember(N?.guild?.id)),
        b = a.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === r.w.DISCORD;
                }),
            [t.websites],
        );
    if (
        (a.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != N && N.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (_(e.invite), null != e.invite && n?.(e.invite));
                }
            };
            null != b && e(b.url);
        }, [b, n, N]),
        null == N || null == N.guild || !N.guild.features.includes(f.GuildFeatures.VERIFIED))
    )
        return null;
    let C = g.Ay.getGuildIconURL({ id: N.guild.id, icon: N.guild.icon, size: 32 });
    return (0, l.jsxs)("div", {
        className: p.fi,
        children: [
            (0, l.jsx)(o.Heading, {
                className: p.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: j.intl.string(j.t.kBDZSL),
            }),
            (0, l.jsxs)("div", {
                className: s()(p.nM, p.mX),
                children: [
                    (0, l.jsx)("img", {
                        className: v.$f,
                        src: C,
                        alt: j.intl.formatToPlainString(j.t.xm6W9D, { guildName: N.guild.name }),
                    }),
                    (0, l.jsxs)("div", {
                        className: v.U5,
                        children: [
                            (0, l.jsxs)("div", {
                                className: v.YS,
                                children: [
                                    (0, l.jsx)(o.Text, { variant: "text-sm/semibold", children: N.guild.name }),
                                    (0, l.jsx)(u.A, { guild: N.guild, size: 16 }),
                                ],
                            }),
                            null != N.approximate_member_count &&
                                (0, l.jsx)(o.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: j.intl.format(j.t.zRl6XR, { count: N.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(o.Button, {
                variant: "secondary",
                text: I ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
                onClick: () => {
                    A(),
                        i(h.Ws.JoinOfficialServer),
                        d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: N, code: N.code, context: f.BRT.APP });
                },
                fullWidth: !0,
            }),
        ],
    });
}
function N(e) {
    let { detectedGame: t, trackClick: i, onInviteResolved: n, closeModal: A } = e,
        [N, _] = a.useState(),
        I = a.useRef(null),
        b = a.useRef(n);
    a.useEffect(() => {
        b.current = n;
    }, [n]);
    let C = (0, c.bG)([x.A], () => N?.guild?.id != null && x.A.isMember(N?.guild?.id)),
        E = a.useMemo(
            () =>
                t.websites?.find((e) => {
                    let { category: t } = e;
                    return t === r.w.DISCORD;
                }),
            [t.websites],
        );
    if (
        (a.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (I.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && ((I.current = t), _(e.invite), null != e.invite && b.current?.(e.invite));
                }
            };
            null != E && e(E.url);
        }, [E]),
        null == N || null == N.guild || !N.guild.features.includes(f.GuildFeatures.VERIFIED))
    )
        return null;
    let G = g.Ay.getGuildIconURL({ id: N.guild.id, icon: N.guild.icon, size: 32 });
    return (0, l.jsxs)("div", {
        className: p.fi,
        children: [
            (0, l.jsx)(o.Heading, {
                className: p.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: j.intl.string(j.t.kBDZSL),
            }),
            (0, l.jsxs)("div", {
                className: s()(p.nM, p.mX),
                children: [
                    (0, l.jsx)("img", {
                        className: v.$f,
                        src: G,
                        alt: j.intl.formatToPlainString(j.t.xm6W9D, { guildName: N.guild.name }),
                    }),
                    (0, l.jsxs)("div", {
                        className: v.U5,
                        children: [
                            (0, l.jsxs)("div", {
                                className: v.YS,
                                children: [
                                    (0, l.jsx)(o.Text, { variant: "text-sm/semibold", children: N.guild.name }),
                                    (0, l.jsx)(u.A, { guild: N.guild, size: 16 }),
                                ],
                            }),
                            null != N.approximate_member_count &&
                                (0, l.jsx)(o.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: j.intl.format(j.t.zRl6XR, { count: N.approximate_member_count }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(o.Button, {
                variant: "secondary",
                text: C ? j.intl.string(j.t.cEnaWx) : j.intl.string(j.t.XpeFYr),
                onClick: () => {
                    A(),
                        i(h.Ws.JoinOfficialServer),
                        d.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: N, code: N.code, context: f.BRT.APP });
                },
                fullWidth: !0,
            }),
        ],
    });
}
