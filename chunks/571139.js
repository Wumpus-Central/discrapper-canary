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
    O = n(121615),
    p = n(1624);
let m = () => {
    let e = (0, s.bG)([d.A], () => d.A.getGuildId(), []),
        t = (0, s.bG)([E.A], () => E.A.getGuild(e), [e]),
        l = (0, s.bG)([N.A], () => (null != e ? N.A.getRequest(e) : null), [e]),
        m = (0, a.zy)(),
        P = (0, _.B)(m.pathname, R.BVt.CHANNEL(t?.id, S.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, I.Qd)(t) || P) return null;
    let D = l?.applicationStatus ?? T.B5.STARTED,
        U = null,
        g = null,
        M = null,
        h = [O.lm, p.lm];
    switch (D) {
        case T.B5.SUBMITTED:
            (U = C.intl.string(C.t["5iLvSx"])),
                (g = C.intl.string(C.t.mqtdmQ)),
                (M = () => {
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
            (U = C.intl.string(C.t.lk30cY)),
                (g = C.intl.string(C.t["8RrsHr"])),
                (M = () => {
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                h.push(O.z3);
            break;
        default:
            (U = C.intl.string(C.t.G5YKXP)),
                (g = C.intl.string(C.t["r8/DT+"])),
                (M = () => {
                    (0, A.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: r()(...h),
        children: [
            (0, i.jsx)(c.Text, { className: O.wx, variant: "text-sm/normal", children: U }),
            (0, i.jsx)(c.Button, { variant: "overlay-primary", size: "sm", onClick: M, text: g }),
        ],
    });
};
