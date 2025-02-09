a.d(t, { default: () => h }), a(47120);
var i = a(200651),
    n = a(192379),
    l = a(481060),
    s = a(479531),
    r = a(600164),
    c = a(99325),
    o = a(486527),
    d = a(388032),
    u = a(199519);
function h(e) {
    var t, a;
    let { transitionState: h, onClose: m, entry: x } = e,
        [b, p] = n.useState(null !== (t = x.description) && void 0 !== t ? t : ''),
        [g, I] = n.useState(null !== (a = x.primaryCategoryId) && void 0 !== a ? a : o.AR.UNCATEGORIZED),
        [j, k] = n.useState(!1),
        [N, _] = n.useState(null),
        f = async () => {
            if ((_(null), b !== x.description || g !== x.primaryCategoryId)) {
                k(!0);
                try {
                    await (0, c.Dr)(x.channelId, x.guildId, b, g), k(!1), m();
                } catch (e) {
                    k(!1), _(new s.Z(e));
                }
            }
        };
    return (0, i.jsxs)(l.Y0X, {
        transitionState: h,
        'aria-label': d.intl.string(d.t.eQ2bLi),
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: d.intl.format(d.t.w9tsNj, { guildName: x.name })
                    }),
                    (0, i.jsx)(l.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: d.intl.string(d.t['vEkX//'])
                    }),
                    null != m &&
                        (0, i.jsx)(l.olH, {
                            className: u.closeButton,
                            onClick: m
                        })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                className: u.createGuild,
                paddingFix: !1,
                children: [
                    (0, i.jsx)(l.xJW, {
                        title: d.intl.string(d.t.FFFAGh),
                        children: (0, i.jsx)(l.Kx8, {
                            value: b,
                            maxLength: 200,
                            placeholder: d.intl.string(d.t.VzuITE),
                            onChange: p,
                            error: null == N ? void 0 : N.getAnyErrorMessage()
                        })
                    }),
                    (0, i.jsx)(l.xJW, {
                        className: u.formItemSpaced,
                        title: d.intl.string(d.t.Olo8FB),
                        children: (0, i.jsx)(l.q4e, {
                            placeholder: d.intl.string(d.t.XqMe3N),
                            options: (0, o.b7)(x.channelId),
                            clearable: !1,
                            value: g,
                            onChange: I,
                            maxVisibleItems: 4
                        })
                    })
                ]
            }),
            (0, i.jsx)(l.mzw, {
                justify: r.Z.Justify.BETWEEN,
                children: (0, i.jsx)(l.zxk, {
                    color: l.zxk.Colors.BRAND,
                    onClick: f,
                    submitting: j,
                    children: d.intl.string(d.t.R3BPHx)
                })
            })
        ]
    });
}
