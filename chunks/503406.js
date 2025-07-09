(n.d(t, { Z: () => v }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(755721),
    d = n(481060),
    u = n(231239),
    m = n(881052),
    h = n(313201),
    x = n(703656),
    _ = n(981631),
    g = n(388032),
    f = n(768680);
let p = (0, h.hQ)(),
    v = (e) => {
        let { email: t, guildId: n, onClose: r } = e,
            [s, h] = i.useState(''),
            [v, N] = i.useState(null),
            E = i.useCallback(async () => {
                if (null != n)
                    try {
                        let e = await u.Z.verifyCode(s, n, t);
                        e.guild && (null == r || r(), (0, x.uL)(_.Z5c.CHANNEL(e.guild.id)));
                    } catch (e) {
                        N(new m.Hx(e));
                    }
            }, [s, t, n, r]),
            S = o().throttle(() => {
                u.Z.sendVerificationEmail(t, !0, n);
            }, 1000),
            I = async (e) => {
                null != s && '' !== s && e.charCode === _.yXg.ENTER && (await E());
            };
        return (0, l.jsxs)('div', {
            className: f.container,
            children: [
                (0, l.jsx)('div', { className: f.topImage }),
                (0, l.jsx)(d.X6q, {
                    className: a()(f.centerText, f.header),
                    variant: 'heading-xl/semibold',
                    children: g.intl.string(g.t.SJ3Lxc)
                }),
                (0, l.jsx)('div', {
                    className: f.descriptionWidth,
                    children: (0, l.jsx)(d.Text, {
                        className: f.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: g.intl.format(g.t['b+W0oq'], {
                            email: t,
                            onClick: S
                        })
                    })
                }),
                (0, l.jsxs)(d.xJW, {
                    className: f.formItem,
                    children: [
                        (0, l.jsx)(d.vwX, {
                            id: p,
                            children: g.intl.string(g.t.rpWT1t)
                        }),
                        (0, l.jsx)(d.oil, {
                            onKeyPress: I,
                            onChange: (e) => {
                                null != e && '' !== e && h(e);
                            },
                            error: null == v ? void 0 : v.getAnyErrorMessage(),
                            'aria-labelledby': p
                        })
                    ]
                }),
                (0, l.jsx)(c.zx, {
                    fullWidth: !0,
                    onClick: E,
                    size: c.zx.Sizes.LARGE,
                    color: c.zx.Colors.BRAND,
                    children: (0, l.jsx)(d.Text, {
                        className: f.submitText,
                        variant: 'text-sm/normal',
                        children: g.intl.string(g.t.geKm7u)
                    })
                })
            ]
        });
    };
