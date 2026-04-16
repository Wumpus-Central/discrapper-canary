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
    p = n(709977),
    g = n(212455),
    f = n(652215),
    E = n(746080),
    x = n(985018),
    I = n(182430),
    C = n(580537);
let N = () => {
    let e = (0, r.bG)([h.A], () => h.A.getGuildId(), []),
        t = (0, r.bG)([u.A], () => u.A.getGuild(e), [e]),
        l = (0, r.bG)([g.A], () => (null != e ? g.A.getRequest(e) : null), [e]),
        N = (0, a.zy)(),
        T = (0, c.B)(N.pathname, f.BVt.CHANNEL(t?.id, E.VV.GUILD_ONBOARDING))?.isExact === !0;
    if (null == t || !(0, p.Qd)(t) || T) return null;
    let S = l?.applicationStatus ?? m.B5.STARTED,
        b = null,
        y = null,
        v = null,
        R = [I.lm, C.lm];
    switch (S) {
        case m.B5.SUBMITTED:
            (b = x.intl.string(x.t["5iLvSx"])),
                (y = x.intl.string(x.t.mqtdmQ)),
                (v = () => {
                    (0, o.A)({
                        title: x.intl.string(x.t.aIz1oV),
                        subtitle: x.intl.string(x.t["13tjTU"]),
                        variant: "primary",
                        confirmText: x.intl.string(x.t["cY+Oob"]),
                        onConfirm: () => A.A.removeGuildJoinRequest(t.id),
                    });
                });
            break;
        case m.B5.REJECTED:
            (b = x.intl.string(x.t.lk30cY)),
                (y = x.intl.string(x.t["8RrsHr"])),
                (v = () => {
                    (0, d.mMO)(async () => {
                        let { default: e } = await n.e("37548").then(n.bind(n, 856103));
                        return (n) => (0, i.jsx)(e, { guildId: t.id, ...n });
                    });
                }),
                R.push(I.z3);
            break;
        default:
            (b = x.intl.string(x.t.G5YKXP)),
                (y = x.intl.string(x.t["r8/DT+"])),
                (v = () => {
                    (0, _.Ze)(t.id);
                });
    }
    return (0, i.jsxs)("div", {
        className: s()(...R),
        children: [
            (0, i.jsx)(d.Text, { className: I.wx, variant: "text-sm/normal", children: b }),
            (0, i.jsx)(d.Button, { variant: "overlay-primary", size: "sm", onClick: v, text: y }),
        ],
    });
};
