n.d(t, {
    A: () => v,
}),
    n(896048),
    n(747238);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(798236),
    o = n(311907),
    c = n(397927),
    d = n(73153),
    u = n(714991),
    m = n(970163),
    f = n(184989),
    x = n(486020),
    b = n(409626),
    p = n(652215),
    g = n(985018),
    j = n(851822),
    h = n(921380);

function v(e) {
    let { detectedGame: t, trackClick: n, onInviteResolved: i, closeModal: v } = e,
        [y, O] = r.useState(),
        A = (0, o.bG)([f.A], () => {
            var e, t;
            return (
                (null == y || null == (e = y.guild) ? void 0 : e.id) != null &&
                f.A.isMember(null == y || null == (t = y.guild) ? void 0 : t.id)
            );
        }),
        I = r.useMemo(() => {
            var e;
            return null == (e = t.websites)
                ? void 0
                : e.find((e) => {
                      let { category: t } = e;
                      return t === s.w.DISCORD;
                  });
        }, [t.websites]);
    if (
        (r.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (null != y && y.code.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, m.A)(t);
                    !0 !== e.banned && (O(e.invite), null != e.invite && (null == i || i(e.invite)));
                }
            };
            null != I && e(I.url);
        }, [I, i, y]),
        null == y || null == y.guild || !y.guild.features.includes(p.GuildFeatures.VERIFIED))
    )
        return null;
    let N = x.Ay.getGuildIconURL({
        id: y.guild.id,
        icon: y.guild.icon,
        size: 32,
    });
    return (0, l.jsxs)("div", {
        className: j.fi,
        children: [
            (0, l.jsx)(c.Heading, {
                className: j.bV,
                variant: "text-xs/semibold",
                color: "text-default",
                children: g.intl.string(g.t.kBDZSL),
            }),
            (0, l.jsxs)("div", {
                className: a()(j.nM, j.mX),
                children: [
                    (0, l.jsx)("img", {
                        className: h.$f,
                        src: N,
                        alt: g.intl.formatToPlainString(g.t.xm6W9D, {
                            guildName: y.guild.name,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: h.U5,
                        children: [
                            (0, l.jsxs)("div", {
                                className: h.YS,
                                children: [
                                    (0, l.jsx)(c.Text, {
                                        variant: "text-sm/semibold",
                                        children: y.guild.name,
                                    }),
                                    (0, l.jsx)(u.A, {
                                        guild: y.guild,
                                        size: 16,
                                    }),
                                ],
                            }),
                            null != y.approximate_member_count &&
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    children: g.intl.format(g.t.zRl6XR, {
                                        count: y.approximate_member_count,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(c.Button, {
                variant: "secondary",
                text: A ? g.intl.string(g.t.cEnaWx) : g.intl.string(g.t.XpeFYr),
                onClick: () => {
                    v(),
                        n(b.Ws.JoinOfficialServer),
                        d.h.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: y,
                            code: y.code,
                            context: p.BRT.APP,
                        });
                },
                fullWidth: !0,
            }),
        ],
    });
}
