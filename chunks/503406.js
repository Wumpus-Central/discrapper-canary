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
    g = n(388032),
    p = n(341430);
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
        className: p.container,
        children: [
            (0, r.jsx)("div", { className: p.topImage }),
            (0, r.jsx)(c.Heading, {
                className: a()(p.centerText, p.header),
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t.SJ3Lxc),
            }),
            (0, r.jsx)("div", {
                className: p.descriptionWidth,
                children: (0, r.jsx)(c.Text, {
                    className: p.centerText,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: g.intl.format(g.t["b+W0oq"], {
                        email: t,
                        onClick: N,
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: p.formItem,
                children: (0, r.jsx)(c.oil, {
                    label: g.intl.string(g.t.rpWT1s),
                    onKeyPress: E,
                    onChange: (e) => {
                        null != e && "" !== e && h(e);
                    },
                    error: null == _ ? void 0 : _.getAnyErrorMessage(),
                }),
            }),
            (0, r.jsx)(c.Button, {
                fullWidth: !0,
                onClick: x,
                variant: "primary",
                text: g.intl.string(g.t.geKm7t),
            }),
        ],
    });
};
