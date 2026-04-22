i.d(e, { A: () => _ });
var l = i(627968),
    n = i(64700),
    a = i(735438),
    r = i.n(a),
    s = i(189213),
    o = i(292666),
    d = i(154672),
    c = i(198982),
    u = i(976860),
    E = i(652215),
    I = i(650583),
    A = i(985018);
let _ = (t) => {
    let { email: e, guildId: i, transitionState: a, onClose: _ } = t,
        [h, g] = n.useState(""),
        [m, S] = n.useState(null),
        y = n.useCallback(async () => {
            if (null != i)
                try {
                    let t = await d.A.verifyCode(h, i, e);
                    t.guild && (_(), (0, u.pX)(E.BVt.CHANNEL(t.guild.id)));
                } catch (t) {
                    S(new c.LG(t));
                }
        }, [h, e, i, _]),
        L = r().throttle(() => {
            d.A.sendVerificationEmail(e, !0, i);
        }, 1e3),
        x = async (t) => {
            null != h && "" !== h && t.key === I.dh.ENTER && (await y());
        };
    return (0, l.jsx)(s.Modal, {
        transitionState: a,
        onClose: _,
        title: A.intl.string(A.t.SJ3Lxc),
        subtitle: A.intl.format(A.t["b+W0oq"], { email: e, onClick: L }),
        actions: [{ variant: "primary", text: A.intl.string(A.t.geKm7t), onClick: y }],
        children: (0, l.jsx)(o.k, {
            label: A.intl.string(A.t.rpWT1s),
            onKeyPress: x,
            onChange: (t) => {
                null != t && "" !== t && g(t);
            },
            error: m?.getAnyErrorMessage(),
        }),
    });
};
