n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(313201),
    f = n(703656),
    h = n(981631),
    g = n(388032),
    p = n(341430);
let v = (0, m.hQ)(),
    _ = (e) => {
        let { email: t, guildId: n, onClose: i } = e,
            [s, m] = l.useState(""),
            [_, x] = l.useState(null),
            N = l.useCallback(async () => {
                if (null != n)
                    try {
                        let e = await d.Z.verifyCode(s, n, t);
                        e.guild && (null == i || i(), (0, f.uL)(h.Z5c.CHANNEL(e.guild.id)));
                    } catch (e) {
                        x(new u.Hx(e));
                    }
            }, [s, t, n, i]),
            y = o().throttle(() => {
                d.Z.sendVerificationEmail(t, !0, n);
            }, 1000),
            E = async (e) => {
                null != s && "" !== s && e.charCode === h.yXg.ENTER && (await N());
            };
        return (0, r.jsxs)("div", {
            className: p.container,
            children: [
                (0, r.jsx)("div", { className: p.topImage }),
                (0, r.jsx)(c.X6q, {
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
                            onClick: y,
                        }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: p.formItem,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            id: v,
                            children: g.intl.string(g.t.rpWT1t),
                        }),
                        (0, r.jsx)(c.oil, {
                            onKeyPress: E,
                            onChange: (e) => {
                                null != e && "" !== e && m(e);
                            },
                            error: null == _ ? void 0 : _.getAnyErrorMessage(),
                            "aria-labelledby": v,
                        }),
                    ],
                }),
                (0, r.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: N,
                    variant: "primary",
                    text: g.intl.string(g.t.geKm7u),
                }),
            ],
        });
    };
