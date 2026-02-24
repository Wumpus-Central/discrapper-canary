n.d(t, { A: () => m }), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(873263),
    s = n(311907),
    o = n(314116),
    c = n(397927),
    _ = n(334465),
    E = n(71393),
    d = n(967198),
    u = n(624458),
    A = n(202384),
    T = n(513461),
    I = n(709977),
    N = n(212455),
    R = n(652215),
    S = n(746080),
    C = n(985018),
    O = n(463149),
    p = n(504226);
let m = () => {
    let e = (0, s.bG)([d.A], () => d.A.getGuildId(), []),
        t = (0, s.bG)([E.A], () => E.A.getGuild(e), [e]),
        l = (0, s.bG)([N.A], () => (null != e ? N.A.getRequest(e) : null), [e]),
        m = (0, a.zy)(),
        P = (0, _.B)(m.pathname, R.BVt.CHANNEL(t?.id, S.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, I.Qd)(t) || P) return null;
    let D = l?.applicationStatus ?? T.B5.STARTED,
        g = null,
        U = null,
        h = null,
        M = [O.lm, p.lm];
    switch (D) {
        case T.B5.SUBMITTED:
            (g = C.intl.string(C.t["5iLvSx"])),
                (U = C.intl.string(C.t.mqtdmQ)),
                (h = () => {
                    (0, o.A)({
                        title: C.intl.string(C.t.aIz1oV),
                        subtitle: C.intl.string(C.t["13tjTU"]),
                        variant: "primary",
                        confirmText: C.intl.string(C.t["cY+Oob"]),
                        onConfirm: () => u.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case T.B5.REJECTED:
            (g = C.intl.string(C.t.lk30cY)),
                (U = C.intl.string(C.t["8RrsHr"])),
                (h = () => {
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                M.push(O.z3);
            break;
        default:
            (g = C.intl.string(C.t.G5YKXP)),
                (U = C.intl.string(C.t["r8/DT+"])),
                (h = () => {
                    (0, A.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: r()(...M),
        children: [
            (0, i.jsx)(c.Text, { className: O.wx, variant: "text-sm/normal", children: g }),
            (0, i.jsx)(c.Button, { variant: "overlay-primary", size: "sm", onClick: h, text: U }),
        ],
    });
};
