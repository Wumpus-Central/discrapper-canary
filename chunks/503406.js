n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(392711),
    o = n.n(r),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(313201),
    x = n(703656),
    h = n(981631),
    g = n(388032),
    v = n(671777);
let N = (0, m.hQ)();
t.Z = (e) => {
    let { email: t, guildId: n, onClose: l } = e,
        [r, m] = s.useState(''),
        [j, f] = s.useState(null),
        C = s.useCallback(async () => {
            if (null != n)
                try {
                    let e = await d.Z.verifyCode(r, n, t);
                    e.guild && (null == l || l(), (0, x.uL)(h.Z5c.CHANNEL(e.guild.id)));
                } catch (e) {
                    f(new u.Hx(e));
                }
        }, [r, t, n, l]),
        I = o().throttle(() => {
            d.Z.sendVerificationEmail(t, !0, n);
        }, 1000),
        p = async (e) => {
            null != r && '' !== r && e.charCode === h.yXg.ENTER && (await C());
        };
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsx)('div', { className: v.topImage }),
            (0, i.jsx)(c.Heading, {
                className: a()(v.centerText, v.header),
                variant: 'heading-xl/semibold',
                children: g.intl.string(g.t.SJ3Lxc)
            }),
            (0, i.jsx)('div', {
                className: v.descriptionWidth,
                children: (0, i.jsx)(c.Text, {
                    className: v.centerText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: g.intl.format(g.t['b+W0oq'], {
                        email: t,
                        onClick: I
                    })
                })
            }),
            (0, i.jsxs)(c.FormItem, {
                className: v.formItem,
                children: [
                    (0, i.jsx)(c.FormTitle, {
                        id: N,
                        children: g.intl.string(g.t.rpWT1t)
                    }),
                    (0, i.jsx)(c.TextInput, {
                        onKeyPress: p,
                        onChange: (e) => {
                            null != e && '' !== e && m(e);
                        },
                        error: null == j ? void 0 : j.getAnyErrorMessage(),
                        'aria-labelledby': N
                    })
                ]
            }),
            (0, i.jsx)(c.Button, {
                fullWidth: !0,
                onClick: C,
                size: c.Button.Sizes.LARGE,
                color: c.Button.Colors.BRAND,
                children: (0, i.jsx)(c.Text, {
                    className: v.submitText,
                    variant: 'text-sm/normal',
                    children: g.intl.string(g.t.geKm7u)
                })
            })
        ]
    });
};
