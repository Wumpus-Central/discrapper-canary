n.d(t, { A: () => g }), n(321073);
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
    T = n(202384),
    A = n(513461),
    I = n(709977),
    p = n(212455),
    N = n(652215),
    m = n(746080),
    R = n(985018),
    h = n(463149),
    S = n(504226);
let g = () => {
    let e = (0, a.bG)([_.A], () => _.A.getGuildId(), []),
        t = (0, a.bG)([d.A], () => d.A.getGuild(e), [e]),
        l = (0, a.bG)([p.A], () => (null != e ? p.A.getRequest(e) : null), [e]),
        g = (0, s.zy)(),
        C = (0, u.B)(g.pathname, N.BVt.CHANNEL(t?.id, m.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, I.Qd)(t) || C) return null;
    let O = l?.applicationStatus ?? A.B5.STARTED,
        y = null,
        x = null,
        f = null,
        P = [h.lm, S.lm];
    switch (O) {
        case A.B5.SUBMITTED:
            (y = R.intl.string(R.t["5iLvSx"])),
                (x = R.intl.string(R.t.mqtdmQ)),
                (f = () => {
                    (0, o.A)({
                        title: R.intl.string(R.t.aIz1oV),
                        subtitle: R.intl.string(R.t["13tjTU"]),
                        variant: "primary",
                        confirmText: R.intl.string(R.t["cY+Oob"]),
                        onConfirm: () => E.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case A.B5.REJECTED:
            (y = R.intl.string(R.t.lk30cY)),
                (x = R.intl.string(R.t["8RrsHr"])),
                (f = () => {
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                P.push(h.z3);
            break;
        default:
            (y = R.intl.string(R.t.G5YKXP)),
                (x = R.intl.string(R.t["r8/DT+"])),
                (f = () => {
                    (0, T.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: r()(...P),
        children: [
            (0, i.jsx)(c.Text, { className: h.wx, variant: "text-sm/normal", children: y }),
            (0, i.jsx)(c.Button, { variant: "overlay-primary", size: "sm", onClick: f, text: x }),
        ],
    });
};
