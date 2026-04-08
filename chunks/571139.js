n.d(t, { A: () => N }), n(321073);
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(873263),
    r = n(311907),
    o = n(314116),
    d = n(397927),
    c = n(334465),
    u = n(71393),
    h = n(967198),
    A = n(624458),
    _ = n(202384),
    m = n(513461),
    g = n(709977),
    p = n(212455),
    f = n(652215),
    x = n(746080),
    E = n(985018),
    I = n(610749),
    C = n(375986);
let N = () => {
    let e = (0, r.bG)([h.A], () => h.A.getGuildId(), []),
        t = (0, r.bG)([u.A], () => u.A.getGuild(e), [e]),
        l = (0, r.bG)([p.A], () => (null != e ? p.A.getRequest(e) : null), [e]),
        N = (0, a.zy)(),
        T = (0, c.B)(N.pathname, f.BVt.CHANNEL(t?.id, x.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, g.Qd)(t) || T) return null;
    let S = l?.applicationStatus ?? m.B5.STARTED,
        b = null,
        v = null,
        y = null,
        j = [I.lm, C.lm];
    switch (S) {
        case m.B5.SUBMITTED:
            (b = E.intl.string(E.t["5iLvSx"])),
                (v = E.intl.string(E.t.mqtdmQ)),
                (y = () => {
                    (0, o.A)({
                        title: E.intl.string(E.t.aIz1oV),
                        subtitle: E.intl.string(E.t["13tjTU"]),
                        variant: "primary",
                        confirmText: E.intl.string(E.t["cY+Oob"]),
                        onConfirm: () => A.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case m.B5.REJECTED:
            (b = E.intl.string(E.t.lk30cY)),
                (v = E.intl.string(E.t["8RrsHr"])),
                (y = () => {
                    (0, d.mMO)(async () => {
                        let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                j.push(I.z3);
            break;
        default:
            (b = E.intl.string(E.t.G5YKXP)),
                (v = E.intl.string(E.t["r8/DT+"])),
                (y = () => {
                    (0, _.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: s()(...j),
        children: [
            (0, i.jsx)(d.Text, { className: I.wx, variant: "text-sm/normal", children: b }),
            (0, i.jsx)(d.Button, { variant: "overlay-primary", size: "sm", onClick: y, text: v }),
        ],
    });
};
