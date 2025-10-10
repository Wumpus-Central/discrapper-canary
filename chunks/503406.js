n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(703656),
    f = n(981631),
    p = n(388032),
    g = n(85890);
let h = (e) => {
    let { email: t, guildId: n, onClose: i } = e,
        [s, h] = l.useState(""),
        [_, v] = l.useState(null),
        x = l.useCallback(async () => {
            if (null != n)
                try {
                    let e = await d.Z.verifyCode(s, n, t);
                    e.guild && (null == i || i(), (0, m.uL)(f.Z5c.CHANNEL(e.guild.id)));
                } catch (e) {
                    v(new u.Hx(e));
                }
        }, [s, t, n, i]),
        N = o().throttle(() => {
            d.Z.sendVerificationEmail(t, !0, n);
        }, 1000),
        E = async (e) => {
            null != s && "" !== s && e.charCode === f.yXg.ENTER && (await x());
        };
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)("div", { className: g.topImage }),
            (0, r.jsx)(c.X6q, {
                className: a()(g.centerText, g.header),
                variant: "heading-xl/semibold",
                children: p.intl.string(p.t.SJ3Lxc),
            }),
            (0, r.jsx)("div", {
                className: g.descriptionWidth,
                children: (0, r.jsx)(c.Text, {
                    className: g.centerText,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: p.intl.format(p.t["b+W0oq"], {
                        email: t,
                        onClick: N,
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: g.formItem,
                children: (0, r.jsx)(c.oil, {
                    label: p.intl.string(p.t.rpWT1t),
                    onKeyPress: E,
                    onChange: (e) => {
                        null != e && "" !== e && h(e);
                    },
                    error: null == _ ? void 0 : _.getAnyErrorMessage(),
                }),
            }),
            (0, r.jsx)(c.zxk, {
                fullWidth: !0,
                onClick: x,
                variant: "primary",
                text: p.intl.string(p.t.geKm7u),
            }),
        ],
    });
};
