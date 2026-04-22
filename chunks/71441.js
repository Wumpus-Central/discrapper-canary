i.d(e, { A: () => A });
var l = i(627968),
    a = i(64700),
    n = i(735438),
    r = i.n(n),
    s = i(158954),
    o = i(397927),
    c = i(154672),
    d = i(198982),
    u = i(976860),
    _ = i(652215),
    I = i(650583),
    E = i(985018);
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
        x = r().throttle(() => {
            c.A.sendVerificationEmail(e, !0, i);
        }, 1e3),
        f = async (t) => {
            null != g && "" !== g && t.key === I.dh.ENTER && (await y());
        };
    return (0, l.jsx)(s.Modal, {
        transitionState: n,
        onClose: A,
        title: E.intl.string(E.t.SJ3Lxc),
        subtitle: E.intl.format(E.t["b+W0oq"], { email: e, onClick: x }),
        actions: [{ variant: "primary", text: E.intl.string(E.t.geKm7t), onClick: y }],
        children: (0, l.jsx)(o.ksK, {
            label: E.intl.string(E.t.rpWT1s),
            onKeyPress: f,
            onChange: (t) => {
                null != t && "" !== t && h(t);
            },
            error: m?.getAnyErrorMessage(),
        }),
    });
};
