n.d(t, { A: () => R }), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(873263),
    a = n(311907),
    o = n(314116),
    c = n(397927),
    u = n(334465),
    d = n(71393),
    _ = n(967198),
    E = n(624458),
    A = n(202384),
    T = n(513461),
    I = n(709977),
    N = n(212455),
    p = n(652215),
    h = n(746080),
    m = n(985018),
    S = n(79790),
    C = n(215433);
let R = () => {
    let e = (0, a.bG)([_.A], () => _.A.getGuildId(), []),
        t = (0, a.bG)([d.A], () => d.A.getGuild(e), [e]),
        l = (0, a.bG)([N.A], () => (null != e ? N.A.getRequest(e) : null), [e]),
        R = (0, s.zy)(),
        g = (0, u.B)(R.pathname, p.BVt.CHANNEL(t?.id, h.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, I.Qd)(t) || g) return null;
    let O = l?.applicationStatus ?? T.B5.STARTED,
        y = null,
        P = null,
        x = null,
        f = [S.lm, C.lm];
    switch (O) {
        case T.B5.SUBMITTED:
            (y = m.intl.string(m.t["5iLvSx"])),
                (P = m.intl.string(m.t.mqtdmQ)),
                (x = () => {
                    (0, o.A)({
                        title: m.intl.string(m.t.aIz1oV),
                        subtitle: m.intl.string(m.t["13tjTU"]),
                        variant: "primary",
                        confirmText: m.intl.string(m.t["cY+Oob"]),
                        onConfirm: () => E.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case T.B5.REJECTED:
            (y = m.intl.string(m.t.lk30cY)),
                (P = m.intl.string(m.t["8RrsHr"])),
                (x = () => {
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                f.push(S.z3);
            break;
        default:
            (y = m.intl.string(m.t.G5YKXP)),
                (P = m.intl.string(m.t["r8/DT+"])),
                (x = () => {
                    (0, A.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: r()(...f),
        children: [
            (0, i.jsx)(c.Text, { className: S.wx, variant: "text-sm/normal", children: y }),
            (0, i.jsx)(c.Button, { variant: "overlay-primary", size: "sm", onClick: x, text: P }),
        ],
    });
};
