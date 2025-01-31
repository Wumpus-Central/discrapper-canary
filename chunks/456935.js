t.d(n, {
    I9: () => x,
    ZP: () => h
});
var i = t(200651),
    l = t(192379),
    s = t(692547),
    a = t(481060),
    r = t(496675),
    o = t(484455),
    c = t(981631),
    d = t(388032),
    u = t(31619);
function x(e) {
    switch (e) {
        case c.sFg.LOW:
            return d.intl.string(d.t.SsCK8P);
        case c.sFg.MEDIUM:
            return d.intl.string(d.t.WwNoR0);
        case c.sFg.HIGH:
            return d.intl.string(d.t.I2jMUF);
        case c.sFg.VERY_HIGH:
            return d.intl.string(d.t.cJY8w8);
        default:
            return '';
    }
}
let m = {
        [c.sFg.NONE]: '',
        [c.sFg.LOW]: s.Z.unsafe_rawColors.GREEN_360.css,
        [c.sFg.MEDIUM]: s.Z.unsafe_rawColors.YELLOW_300.css,
        [c.sFg.HIGH]: s.Z.unsafe_rawColors.ORANGE_345.css,
        [c.sFg.VERY_HIGH]: s.Z.unsafe_rawColors.RED_400.css
    },
    h = function (e) {
        let { guild: n } = e,
            s = r.Z.can(c.Plq.MANAGE_GUILD, n),
            h = n.verificationLevel,
            f = h === c.sFg.VERY_HIGH ? a.AtH : a._XJ,
            v = l.useMemo(() => x(h), [h]),
            g = m[h],
            j = (0, i.jsx)('div', {
                className: u.verificationLevelTitle,
                children: d.intl.format(d.t.OpV87e, {
                    verificationLevelHook: function () {
                        return (0, i.jsx)(
                            a.Text,
                            {
                                className: u.verificationLevelHook,
                                style: { color: g },
                                variant: 'text-sm/semibold',
                                children: v
                            },
                            'hook'
                        );
                    }
                })
            }),
            C = h === c.sFg.VERY_HIGH ? d.intl.string(d.t.IlXyd3) : d.intl.string(d.t.JlzMPj);
        return (0, i.jsx)(o.Z, {
            title: j,
            children: (0, i.jsxs)('div', {
                className: u.verificationContainer,
                children: [
                    (0, i.jsx)(f, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: u.icon
                    }),
                    (0, i.jsx)(a.Text, {
                        className: u.guildVerificationText,
                        variant: 'text-sm/normal',
                        children: C
                    }),
                    s &&
                        (0, i.jsx)(a.P3F, {
                            className: u.iconInteractiveContainer,
                            onClick: () =>
                                (0, a.ZDy)(async () => {
                                    let { default: e } = await t.e('72458').then(t.bind(t, 694278));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            guild: n
                                        });
                                }),
                            children: (0, i.jsx)(a.vdY, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: u.iconInteractive
                            })
                        })
                ]
            })
        });
    };
