n.d(t, { A: () => g }), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(873263),
    a = n(311907),
    o = n(314116),
    c = n(397927),
    d = n(334465),
    u = n(71393),
    _ = n(967198),
    E = n(624458),
    T = n(202384),
    A = n(513461),
    I = n(709977),
    p = n(212455),
    N = n(652215),
    m = n(746080),
    h = n(985018),
    R = n(463149),
    S = n(504226);
let g = () => {
    let e = (0, a.bG)([_.A], () => _.A.getGuildId(), []),
        t = (0, a.bG)([u.A], () => u.A.getGuild(e), [e]),
        l = (0, a.bG)([p.A], () => (null != e ? p.A.getRequest(e) : null), [e]),
        g = (0, s.zy)(),
        C = (0, d.B)(g.pathname, N.BVt.CHANNEL(t?.id, m.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, I.Qd)(t) || C) return null;
    let O = l?.applicationStatus ?? A.B5.STARTED,
        y = null,
        x = null,
        f = null,
        P = [R.lm, S.lm];
    switch (O) {
        case A.B5.SUBMITTED:
            (y = h.intl.string(h.t["5iLvSx"])),
                (x = h.intl.string(h.t.mqtdmQ)),
                (f = () => {
                    (0, o.A)({
                        title: h.intl.string(h.t.aIz1oV),
                        subtitle: h.intl.string(h.t["13tjTU"]),
                        variant: "primary",
                        confirmText: h.intl.string(h.t["cY+Oob"]),
                        onConfirm: () => E.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case A.B5.REJECTED:
            (y = h.intl.string(h.t.lk30cY)),
                (x = h.intl.string(h.t["8RrsHr"])),
                (f = () => {
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                P.push(R.z3);
            break;
        default:
            (y = h.intl.string(h.t.G5YKXP)),
                (x = h.intl.string(h.t["r8/DT+"])),
                (f = () => {
                    (0, T.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: r()(...P),
        children: [
            (0, i.jsx)(c.Text, { className: R.wx, variant: "text-sm/normal", children: y }),
            (0, i.jsx)(c.Button, { variant: "overlay-primary", size: "sm", onClick: f, text: x }),
        ],
    });
};
