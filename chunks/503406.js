n.d(t, { Z: () => g }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(392711),
    o = n.n(r),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(313201),
    x = n(703656),
    h = n(981631),
    v = n(388032),
    N = n(671777);
let _ = (0, m.hQ)(),
    g = (e) => {
        let { email: t, guildId: n, onClose: s } = e,
            [r, m] = i.useState(''),
            [g, f] = i.useState(null),
            p = i.useCallback(async () => {
                if (null != n)
                    try {
                        let e = await d.Z.verifyCode(r, n, t);
                        e.guild && (null == s || s(), (0, x.uL)(h.Z5c.CHANNEL(e.guild.id)));
                    } catch (e) {
                        f(new u.Hx(e));
                    }
            }, [r, t, n, s]),
            E = o().throttle(() => {
                d.Z.sendVerificationEmail(t, !0, n);
            }, 1000),
            I = async (e) => {
                null != r && '' !== r && e.charCode === h.yXg.ENTER && (await p());
            };
        return (0, l.jsxs)('div', {
            className: N.container,
            children: [
                (0, l.jsx)('div', { className: N.topImage }),
                (0, l.jsx)(c.X6q, {
                    className: a()(N.centerText, N.header),
                    variant: 'heading-xl/semibold',
                    children: v.intl.string(v.t.SJ3Lxc)
                }),
                (0, l.jsx)('div', {
                    className: N.descriptionWidth,
                    children: (0, l.jsx)(c.Text, {
                        className: N.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: v.intl.format(v.t['b+W0oq'], {
                            email: t,
                            onClick: E
                        })
                    })
                }),
                (0, l.jsxs)(c.xJW, {
                    className: N.formItem,
                    children: [
                        (0, l.jsx)(c.vwX, {
                            id: _,
                            children: v.intl.string(v.t.rpWT1t)
                        }),
                        (0, l.jsx)(c.oil, {
                            onKeyPress: I,
                            onChange: (e) => {
                                null != e && '' !== e && m(e);
                            },
                            error: null == g ? void 0 : g.getAnyErrorMessage(),
                            'aria-labelledby': _
                        })
                    ]
                }),
                (0, l.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: p,
                    size: c.zxk.Sizes.LARGE,
                    color: c.zxk.Colors.BRAND,
                    children: (0, l.jsx)(c.Text, {
                        className: N.submitText,
                        variant: 'text-sm/normal',
                        children: v.intl.string(v.t.geKm7u)
                    })
                })
            ]
        });
    };
