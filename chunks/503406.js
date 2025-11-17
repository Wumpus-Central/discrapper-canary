r.d(t, { Z: () => p }), r(388685);
var n = r(54381),
    i = r(473749),
    l = r(392711),
    o = r.n(l),
    a = r(793030),
    c = r(481060),
    s = r(231239),
    u = r(881052),
    d = r(703656),
    f = r(981631),
    O = r(388032);
let p = (e) => {
    let { email: t, guildId: r, transitionState: l, onClose: p } = e,
        [y, b] = i.useState(""),
        [g, j] = i.useState(null),
        m = i.useCallback(async () => {
            if (null != r)
                try {
                    let e = await s.Z.verifyCode(y, r, t);
                    e.guild && (p(), (0, d.uL)(f.Z5c.CHANNEL(e.guild.id)));
                } catch (e) {
                    j(new u.Hx(e));
                }
        }, [y, t, r, p]),
        v = o().throttle(() => {
            s.Z.sendVerificationEmail(t, !0, r);
        }, 1000),
        h = async (e) => {
            null != y && "" !== y && e.charCode === f.yXg.ENTER && (await m());
        };
    return (0, n.jsx)(a.Modal, {
        transitionState: l,
        onClose: p,
        title: O.intl.string(O.t.SJ3Lxc),
        subtitle: O.intl.format(O.t["b+W0oq"], {
            email: t,
            onClick: v,
        }),
        actions: [
            {
                variant: "primary",
                text: O.intl.string(O.t.geKm7t),
                onClick: m,
            },
        ],
        children: (0, n.jsx)(c.oil, {
            label: O.intl.string(O.t.rpWT1s),
            onKeyPress: h,
            onChange: (e) => {
                null != e && "" !== e && b(e);
            },
            error: null == g ? void 0 : g.getAnyErrorMessage(),
        }),
    });
};
