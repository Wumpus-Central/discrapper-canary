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
    p = n(981631),
    h = n(388032),
    g = n(85890);
let v = (0, m.hQ)(),
    _ = (e) => {
        let { email: t, guildId: n, onClose: i } = e,
            [s, m] = l.useState(""),
            [_, x] = l.useState(null),
            N = l.useCallback(async () => {
                if (null != n)
                    try {
                        let e = await d.Z.verifyCode(s, n, t);
                        e.guild && (null == i || i(), (0, f.uL)(p.Z5c.CHANNEL(e.guild.id)));
                    } catch (e) {
                        x(new u.Hx(e));
                    }
            }, [s, t, n, i]),
            E = o().throttle(() => {
                d.Z.sendVerificationEmail(t, !0, n);
            }, 1000),
            y = async (e) => {
                null != s && "" !== s && e.charCode === p.yXg.ENTER && (await N());
            };
        return (0, r.jsxs)("div", {
            className: g.container,
            children: [
                (0, r.jsx)("div", { className: g.topImage }),
                (0, r.jsx)(c.X6q, {
                    className: a()(g.centerText, g.header),
                    variant: "heading-xl/semibold",
                    children: h.intl.string(h.t.SJ3Lxc),
                }),
                (0, r.jsx)("div", {
                    className: g.descriptionWidth,
                    children: (0, r.jsx)(c.Text, {
                        className: g.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: h.intl.format(h.t["b+W0oq"], {
                            email: t,
                            onClick: E,
                        }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: g.formItem,
                    children: [
                        (0, r.jsx)(c.vwX, {
                            id: v,
                            children: h.intl.string(h.t.rpWT1t),
                        }),
                        (0, r.jsx)(c.oil, {
                            onKeyPress: y,
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
                    text: h.intl.string(h.t.geKm7u),
                }),
            ],
        });
    };
