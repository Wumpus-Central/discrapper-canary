i.d(e, { A: () => A });
var l = i(627968),
    n = i(64700),
    a = i(735438),
    r = i.n(a),
    s = i(158954),
    o = i(397927),
    d = i(154672),
    c = i(198982),
    u = i(976860),
    I = i(652215),
    E = i(985018);
let A = (t) => {
    let { email: e, guildId: i, transitionState: a, onClose: A } = t,
        [_, h] = n.useState(""),
        [g, m] = n.useState(null),
        S = n.useCallback(async () => {
            if (null != i)
                try {
                    let t = await d.A.verifyCode(_, i, e);
                    t.guild && (A(), (0, u.pX)(I.BVt.CHANNEL(t.guild.id)));
                } catch (t) {
                    m(new c.LG(t));
                }
        }, [_, e, i, A]),
        y = r().throttle(() => {
            d.A.sendVerificationEmail(e, !0, i);
        }, 1e3),
        L = async (t) => {
            null != _ && "" !== _ && t.charCode === I.Ks6.ENTER && (await S());
        };
    return (0, l.jsx)(s.Modal, {
        transitionState: a,
        onClose: A,
        title: E.intl.string(E.t.SJ3Lxc),
        subtitle: E.intl.format(E.t["b+W0oq"], { email: e, onClick: y }),
        actions: [{ variant: "primary", text: E.intl.string(E.t.geKm7t), onClick: S }],
        children: (0, l.jsx)(o.ksK, {
            label: E.intl.string(E.t.rpWT1s),
            onKeyPress: L,
            onChange: (t) => {
                null != t && "" !== t && h(t);
            },
            error: g?.getAnyErrorMessage(),
        }),
    });
};
