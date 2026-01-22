r.d(t, {
    A: () => O,
}),
    r(896048);
var n = r(627968),
    l = r(64700),
    i = r(735438),
    o = r.n(i),
    a = r(158954),
    c = r(397927),
    s = r(154672),
    u = r(198982),
    p = r(976860),
    y = r(652215),
    f = r(985018);
let O = (e) => {
    let { email: t, guildId: r, transitionState: i, onClose: O } = e,
        [b, d] = l.useState(""),
        [g, j] = l.useState(null),
        m = l.useCallback(async () => {
            if (null != r)
                try {
                    let e = await s.A.verifyCode(b, r, t);
                    e.guild && (O(), (0, p.pX)(y.BVt.CHANNEL(e.guild.id)));
                } catch (e) {
                    j(new u.LG(e));
                }
        }, [b, t, r, O]),
        h = o().throttle(() => {
            s.A.sendVerificationEmail(t, !0, r);
        }, 1e3),
        E = async (e) => {
            null != b && "" !== b && e.charCode === y.Ks6.ENTER && (await m());
        };
    return (0, n.jsx)(a.Modal, {
        transitionState: i,
        onClose: O,
        title: f.intl.string(f.t.SJ3Lxc),
        subtitle: f.intl.format(f.t["b+W0oq"], {
            email: t,
            onClick: h,
        }),
        actions: [
            {
                variant: "primary",
                text: f.intl.string(f.t.geKm7t),
                onClick: m,
            },
        ],
        children: (0, n.jsx)(c.ksK, {
            label: f.intl.string(f.t.rpWT1s),
            onKeyPress: E,
            onChange: (e) => {
                null != e && "" !== e && d(e);
            },
            error: null == g ? void 0 : g.getAnyErrorMessage(),
        }),
    });
};
