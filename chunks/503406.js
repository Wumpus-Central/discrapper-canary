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
    _ = n(388032),
    N = n(879943);
let v = (0, m.hQ)(),
    g = (e) => {
        let { email: t, guildId: n, onClose: s } = e,
            [r, m] = i.useState(''),
            [g, E] = i.useState(null),
            I = i.useCallback(async () => {
                if (null != n)
                    try {
                        let e = await d.Z.verifyCode(r, n, t);
                        e.guild && (null == s || s(), (0, x.uL)(h.Z5c.CHANNEL(e.guild.id)));
                    } catch (e) {
                        E(new u.Hx(e));
                    }
            }, [r, t, n, s]),
            f = o().throttle(() => {
                d.Z.sendVerificationEmail(t, !0, n);
            }, 1000),
            S = async (e) => {
                null != r && '' !== r && e.charCode === h.yXg.ENTER && (await I());
            };
        return (0, l.jsxs)('div', {
            className: N.container,
            children: [
                (0, l.jsx)('div', { className: N.topImage }),
                (0, l.jsx)(c.X6q, {
                    className: a()(N.centerText, N.header),
                    variant: 'heading-xl/semibold',
                    children: _.intl.string(_.t.SJ3Lxc)
                }),
                (0, l.jsx)('div', {
                    className: N.descriptionWidth,
                    children: (0, l.jsx)(c.Text, {
                        className: N.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: _.intl.format(_.t['b+W0oq'], {
                            email: t,
                            onClick: f
                        })
                    })
                }),
                (0, l.jsxs)(c.xJW, {
                    className: N.formItem,
                    children: [
                        (0, l.jsx)(c.vwX, {
                            id: v,
                            children: _.intl.string(_.t.rpWT1t)
                        }),
                        (0, l.jsx)(c.oil, {
                            onKeyPress: S,
                            onChange: (e) => {
                                null != e && '' !== e && m(e);
                            },
                            error: null == g ? void 0 : g.getAnyErrorMessage(),
                            'aria-labelledby': v
                        })
                    ]
                }),
                (0, l.jsx)(c.zxk, {
                    fullWidth: !0,
                    onClick: I,
                    size: c.zxk.Sizes.LARGE,
                    color: c.zxk.Colors.BRAND,
                    children: (0, l.jsx)(c.Text, {
                        className: N.submitText,
                        variant: 'text-sm/normal',
                        children: _.intl.string(_.t.geKm7u)
                    })
                })
            ]
        });
    };
