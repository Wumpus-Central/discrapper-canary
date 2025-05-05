n.d(t, { Z: () => N }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(313201),
    x = n(703656),
    h = n(981631),
    _ = n(388032),
    g = n(768680);
let f = (0, m.hQ)(),
    N = (e) => {
        let { email: t, guildId: n, onClose: r } = e,
            [a, m] = i.useState(''),
            [N, v] = i.useState(null),
            p = i.useCallback(async () => {
                if (null != n)
                    try {
                        let e = await d.Z.verifyCode(a, n, t);
                        e.guild && (null == r || r(), (0, x.uL)(h.Z5c.CHANNEL(e.guild.id)));
                    } catch (e) {
                        v(new u.Hx(e));
                    }
            }, [a, t, n, r]),
            E = o().throttle(() => {
                d.Z.sendVerificationEmail(t, !0, n);
            }, 1000),
            S = async (e) => {
                null != a && '' !== a && e.charCode === h.yXg.ENTER && (await p());
            };
        return (0, l.jsxs)('div', {
            className: g.container,
            children: [
                (0, l.jsx)('div', { className: g.topImage }),
                (0, l.jsx)(c.X6q, {
                    className: s()(g.centerText, g.header),
                    variant: 'heading-xl/semibold',
                    children: _.intl.string(_.t.SJ3Lxc)
                }),
                (0, l.jsx)('div', {
                    className: g.descriptionWidth,
                    children: (0, l.jsx)(c.Text, {
                        className: g.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: _.intl.format(_.t['b+W0oq'], {
                            email: t,
                            onClick: E
                        })
                    })
                }),
                (0, l.jsxs)(c.xJW, {
                    className: g.formItem,
                    children: [
                        (0, l.jsx)(c.vwX, {
                            id: f,
                            children: _.intl.string(_.t.rpWT1t)
                        }),
                        (0, l.jsx)(c.oil, {
                            onKeyPress: S,
                            onChange: (e) => {
                                null != e && '' !== e && m(e);
                            },
                            error: null == N ? void 0 : N.getAnyErrorMessage(),
                            'aria-labelledby': f
                        })
                    ]
                }),
                (0, l.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: p,
                    size: c.zxk.Sizes.LARGE,
                    color: c.zxk.Colors.BRAND,
                    children: (0, l.jsx)(c.Text, {
                        className: g.submitText,
                        variant: 'text-sm/normal',
                        children: _.intl.string(_.t.geKm7u)
                    })
                })
            ]
        });
    };
