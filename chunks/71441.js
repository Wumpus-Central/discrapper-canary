i.d(e, { A: () => A });
var l = i(627968),
    a = i(64700),
    n = i(735438),
    r = i.n(n),
    s = i(189213),
    o = i(292666),
    c = i(154672),
    d = i(198982),
    u = i(976860),
    _ = i(652215),
    E = i(650583),
    I = i(985018);
let A = (t) => {
    let { email: e, guildId: i, transitionState: n, onClose: A } = t,
        [g, h] = a.useState(""),
        [m, S] = a.useState(null),
        y = a.useCallback(async () => {
            if (null != i)
                try {
                    let t = await c.A.verifyCode(g, i, e);
                    t.guild && (A(), (0, u.pX)(_.BVt.CHANNEL(t.guild.id)));
                } catch (t) {
                    S(new d.LG(t));
                }
        }, [g, e, i, A]),
        f = r().throttle(() => {
            c.A.sendVerificationEmail(e, !0, i);
        }, 1e3),
        L = async (t) => {
            null != g && "" !== g && t.key === E.dh.ENTER && (await y());
        };
    return (0, l.jsx)(s.Modal, {
        transitionState: n,
        onClose: A,
        title: I.intl.string(I.t.SJ3Lxc),
        subtitle: I.intl.format(I.t["b+W0oq"], { email: e, onClick: f }),
        actions: [{ variant: "primary", text: I.intl.string(I.t.geKm7t), onClick: y }],
        children: (0, l.jsx)(o.k, {
            label: I.intl.string(I.t.rpWT1s),
            onKeyPress: L,
            onChange: (t) => {
                null != t && "" !== t && h(t);
            },
            error: m?.getAnyErrorMessage(),
        }),
    });
};
