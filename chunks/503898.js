n.d(t, { A: () => N });
var a = n(477900),
    i = n(855986),
    r = n(477782),
    l = n(570287),
    A = n(734057),
    u = n(994500),
    o = n(287809),
    s = n(899360),
    d = n(242225),
    c = n(931937),
    I = n(149164),
    g = n(192308),
    f = n(752222),
    p = n(792996);
let G = [];
function N(e) {
    let { user: t, location: N } = e,
        O = (0, c.A)(N),
        _ = (0, i.bG)([o.default, u.A], () => (0, d.A)(t, o.default.getCurrentUser()?.id, u.A), [t]),
        m = (0, i.bG)([A.A], () => null != A.A.getDMFromUserId(t.id), [t.id]),
        y = (0, l.A)(t.id),
        E = O.length > 0 && _ && (m || y),
        { data: b } = (0, I.s)(E ? O : G);
    if (!E) return null;
    let S = (0, s.m$)((0, s.Ay)(b));
    return (0, a.jsx)(r.Dr, {
        id: "invite-to-linked-game-organization",
        label: p.intl.string(f.default["wkSug+"]),
        subtext: S,
        disabled: null != S,
        action: () => {
            var e;
            return (
                (e = t.id),
                void (0, g.mM)(async () => {
                    let { default: t } = await Promise.all([
                        n.e(740775),
                        n.e(787139),
                        n.e(635864),
                        n.e(248988),
                        n.e(611281),
                    ]).then(n.bind(n, 53416));
                    return (n) => (0, a.jsx)(t, { userId: e, ...n });
                })
            );
        },
    });
}
