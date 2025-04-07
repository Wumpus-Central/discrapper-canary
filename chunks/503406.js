n.d(t, { Z: () => f }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(392711),
    o = n.n(a),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(313201),
    N = n(703656),
    x = n(981631),
    h = n(388032),
    _ = n(768680);
let g = (0, m.hQ)(),
    f = (e) => {
        let { email: t, guildId: n, onClose: i } = e,
            [a, m] = r.useState(''),
            [f, v] = r.useState(null),
            p = r.useCallback(async () => {
                if (null != n)
                    try {
                        let e = await d.Z.verifyCode(a, n, t);
                        e.guild && (null == i || i(), (0, N.uL)(x.Z5c.CHANNEL(e.guild.id)));
                    } catch (e) {
                        v(new u.Hx(e));
                    }
            }, [a, t, n, i]),
            E = o().throttle(() => {
                d.Z.sendVerificationEmail(t, !0, n);
            }, 1000),
            S = async (e) => {
                null != a && '' !== a && e.charCode === x.yXg.ENTER && (await p());
            };
        return (0, l.jsxs)('div', {
            className: _.container,
            children: [
                (0, l.jsx)('div', { className: _.topImage }),
                (0, l.jsx)(c.X6q, {
                    className: s()(_.centerText, _.header),
                    variant: 'heading-xl/semibold',
                    children: h.NW.string(h.t.SJ3Lxc)
                }),
                (0, l.jsx)('div', {
                    className: _.descriptionWidth,
                    children: (0, l.jsx)(c.Text, {
                        className: _.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: h.NW.format(h.t['b+W0oq'], {
                            email: t,
                            onClick: E
                        })
                    })
                }),
                (0, l.jsxs)(c.xJW, {
                    className: _.formItem,
                    children: [
                        (0, l.jsx)(c.vwX, {
                            id: g,
                            children: h.NW.string(h.t.rpWT1t)
                        }),
                        (0, l.jsx)(c.oil, {
                            onKeyPress: S,
                            onChange: (e) => {
                                null != e && '' !== e && m(e);
                            },
                            error: null == f ? void 0 : f.getAnyErrorMessage(),
                            'aria-labelledby': g
                        })
                    ]
                }),
                (0, l.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: p,
                    size: c.zxk.Sizes.LARGE,
                    color: c.zxk.Colors.BRAND,
                    children: (0, l.jsx)(c.Text, {
                        className: _.submitText,
                        variant: 'text-sm/normal',
                        children: h.NW.string(h.t.geKm7u)
                    })
                })
            ]
        });
    };
