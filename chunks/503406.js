(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(392711),
    o = n.n(s),
    c = n(755721),
    d = n(481060),
    u = n(231239),
    m = n(881052),
    h = n(313201),
    f = n(703656),
    x = n(981631),
    p = n(388032),
    g = n(768680);
let _ = (0, h.hQ)(),
    v = (e) => {
        let { email: t, guildId: n, onClose: i } = e,
            [s, h] = l.useState(''),
            [v, N] = l.useState(null),
            E = l.useCallback(async () => {
                if (null != n)
                    try {
                        let e = await u.Z.verifyCode(s, n, t);
                        e.guild && (null == i || i(), (0, f.uL)(x.Z5c.CHANNEL(e.guild.id)));
                    } catch (e) {
                        N(new m.Hx(e));
                    }
            }, [s, t, n, i]),
            S = o().throttle(() => {
                u.Z.sendVerificationEmail(t, !0, n);
            }, 1000),
            y = async (e) => {
                null != s && '' !== s && e.charCode === x.yXg.ENTER && (await E());
            };
        return (0, r.jsxs)('div', {
            className: g.container,
            children: [
                (0, r.jsx)('div', { className: g.topImage }),
                (0, r.jsx)(d.X6q, {
                    className: a()(g.centerText, g.header),
                    variant: 'heading-xl/semibold',
                    children: p.intl.string(p.t.SJ3Lxc)
                }),
                (0, r.jsx)('div', {
                    className: g.descriptionWidth,
                    children: (0, r.jsx)(d.Text, {
                        className: g.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: p.intl.format(p.t['b+W0oq'], {
                            email: t,
                            onClick: S
                        })
                    })
                }),
                (0, r.jsxs)(d.xJW, {
                    className: g.formItem,
                    children: [
                        (0, r.jsx)(d.vwX, {
                            id: _,
                            children: p.intl.string(p.t.rpWT1t)
                        }),
                        (0, r.jsx)(d.oil, {
                            onKeyPress: y,
                            onChange: (e) => {
                                null != e && '' !== e && h(e);
                            },
                            error: null == v ? void 0 : v.getAnyErrorMessage(),
                            'aria-labelledby': _
                        })
                    ]
                }),
                (0, r.jsx)(c.zx, {
                    fullWidth: !0,
                    onClick: E,
                    size: c.zx.Sizes.LARGE,
                    color: c.zx.Colors.BRAND,
                    children: (0, r.jsx)(d.Text, {
                        className: g.submitText,
                        variant: 'text-sm/normal',
                        children: p.intl.string(p.t.geKm7u)
                    })
                })
            ]
        });
    };
