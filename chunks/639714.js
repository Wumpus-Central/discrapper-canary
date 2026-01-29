l.d(t, {
    A: () => b,
    o: () => y,
}),
    l(896048),
    l(747238);
var n = l(627968),
    i = l(64700),
    a = l(503698),
    r = l.n(a),
    s = l(798236),
    o = l(311907),
    c = l(397927),
    d = l(73153),
    u = l(714991),
    m = l(970163),
    x = l(184989),
    f = l(486020),
    g = l(409626),
    h = l(652215),
    p = l(985018),
    j = l(851822),
    v = l(921380);

function b(e) {
    let { detectedGame: t, trackClick: l, onInviteResolved: a, closeModal: b } = e,
        [y, A] = i.useState(),
        N = (0, o.bG)([x.A], () => {
            var e, t;
            return (
                (null == y || null == (e = y.guild) ? void 0 : e.id) != null &&
                x.A.isMember(null == y || null == (t = y.guild) ? void 0 : t.id)
            );
        }),
        O = i.useMemo(() => {
            var e;
            return null == (e = t.websites)
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === s.w.DISCORD;
                  });
        }, [t.websites]);
    if (
        (i.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (A(e.invite), null != e.invite && (null == a || a(e.invite)));
                }
            };
            null != O && e(O.url);
        }, [O, a, y]),
        null == y || null == y.guild || !y.guild.features.includes(h.GuildFeatures.VERIFIED))
    )
        return null;
    let _ = f.Ay.getGuildIconURL({
        id: y.guild.id,
        icon: y.guild.icon,
        size: 32,
    });
    return (0, n.jsxs)("div", {
        className: j.fi,
        children: [
            (0, n.jsx)(c.Heading, {
                className: j.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: p.intl.string(p.t.kBDZSL),
            }),
            (0, n.jsxs)("div", {
                className: r()(j.nM, j.mX),
                children: [
                    (0, n.jsx)("img", {
                        className: v.$f,
                        src: _,
                        alt: p.intl.formatToPlainString(p.t.xm6W9D, {
                            guildName: y.guild.name,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: v.U5,
                        children: [
                            (0, n.jsxs)("div", {
                                className: v.YS,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        children: y.guild.name,
                                    }),
                                    (0, n.jsx)(u.A, {
                                        guild: y.guild,
                                        size: 16,
                                    }),
                                ],
                            }),
                            null != y.approximate_member_count &&
                                (0, n.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: p.intl.format(p.t.zRl6XR, {
                                        count: y.approximate_member_count,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.Button, {
                variant: "secondary",
                text: N ? p.intl.string(p.t.cEnaWx) : p.intl.string(p.t.XpeFYr),
                onClick: () => {
                    b(),
                        l(g.Ws.JoinOfficialServer),
                        d.h.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: y,
                            code: y.code,
                            context: h.BRT.APP,
                        });
                },
                fullWidth: !0,
            }),
        ],
    });
}

function y(e) {
    let { detectedGame: t, trackClick: l, onInviteResolved: a, closeModal: b } = e,
        [y, A] = i.useState(),
        N = i.useRef(null),
        O = i.useRef(a);
    i.useEffect(() => {
        O.current = a;
    }, [a]);
    let _ = (0, o.bG)([x.A], () => {
            var e, t;
            return (
                (null == y || null == (e = y.guild) ? void 0 : e.id) != null &&
                x.A.isMember(null == y || null == (t = y.guild) ? void 0 : t.id)
            );
        }),
        I = i.useMemo(() => {
            var e;
            return null == (e = t.websites)
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === s.w.DISCORD;
                  });
        }, [t.websites]);
    if (
        (i.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    var l, n;
                    if ((null == (l = N.current) ? void 0 : l.toLowerCase()) === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned &&
                        ((N.current = t),
                        A(e.invite),
                        null != e.invite && (null == (n = O.current) || n.call(O, e.invite)));
                }
            };
            null != I && e(I.url);
        }, [I]),
        null == y || null == y.guild || !y.guild.features.includes(h.GuildFeatures.VERIFIED))
    )
        return null;
    let w = f.Ay.getGuildIconURL({
        id: y.guild.id,
        icon: y.guild.icon,
        size: 32,
    });
    return (0, n.jsxs)("div", {
        className: j.fi,
        children: [
            (0, n.jsx)(c.Heading, {
                className: j.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: p.intl.string(p.t.kBDZSL),
            }),
            (0, n.jsxs)("div", {
                className: r()(j.nM, j.mX),
                children: [
                    (0, n.jsx)("img", {
                        className: v.$f,
                        src: w,
                        alt: p.intl.formatToPlainString(p.t.xm6W9D, {
                            guildName: y.guild.name,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: v.U5,
                        children: [
                            (0, n.jsxs)("div", {
                                className: v.YS,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        children: y.guild.name,
                                    }),
                                    (0, n.jsx)(u.A, {
                                        guild: y.guild,
                                        size: 16,
                                    }),
                                ],
                            }),
                            null != y.approximate_member_count &&
                                (0, n.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: p.intl.format(p.t.zRl6XR, {
                                        count: y.approximate_member_count,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(c.Button, {
                variant: "secondary",
                text: _ ? p.intl.string(p.t.cEnaWx) : p.intl.string(p.t.XpeFYr),
                onClick: () => {
                    b(),
                        l(g.Ws.JoinOfficialServer),
                        d.h.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: y,
                            code: y.code,
                            context: h.BRT.APP,
                        });
                },
                fullWidth: !0,
            }),
        ],
    });
}
