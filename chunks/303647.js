(a.d(e, { default: () => h }), a(388685), a(953529));
var n = a(255367),
    i = a(73800),
    l = a(481060),
    r = a(479531),
    s = a(600164),
    c = a(99325),
    o = a(75666),
    d = a(388032),
    u = a(685554);
function h(t) {
    var e, a;
    let { transitionState: h, onClose: m, entry: p } = t,
        [x, b] = i.useState(null != (e = p.description) ? e : ''),
        [g, I] = i.useState(null != (a = p.primaryCategoryId) ? a : o.AR.UNCATEGORIZED),
        [j, y] = i.useState(!1),
        [_, f] = i.useState(null),
        k = async () => {
            if ((f(null), x !== p.description || g !== p.primaryCategoryId)) {
                y(!0);
                try {
                    (await (0, c.Dr)(p.channelId, p.guildId, x, g), y(!1), m());
                } catch (t) {
                    (y(!1), f(new r.Z(t)));
                }
            }
        };
    return (0, n.jsxs)(l.Y0X, {
        transitionState: h,
        'aria-label': d.intl.string(d.t.eQ2bLi),
        parentComponent: 'UpdateEntryModal',
        children: [
            (0, n.jsxs)(l.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: u.title,
                        variant: 'heading-xl/semibold',
                        children: d.intl.format(d.t.w9tsNj, { guildName: p.name })
                    }),
                    (0, n.jsx)(l.Text, {
                        className: u.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: d.intl.string(d.t['vEkX//'])
                    }),
                    null != m &&
                        (0, n.jsx)(l.olH, {
                            className: u.closeButton,
                            onClick: m
                        })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: u.createGuild,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(l.xJW, {
                        title: d.intl.string(d.t.FFFAGh),
                        children: (0, n.jsx)(l.Kx8, {
                            value: x,
                            maxLength: 200,
                            placeholder: d.intl.string(d.t.VzuITE),
                            onChange: b,
                            error: null == _ ? void 0 : _.getAnyErrorMessage()
                        })
                    }),
                    (0, n.jsx)(l.xJW, {
                        className: u.formItemSpaced,
                        title: d.intl.string(d.t.Olo8FB),
                        children: (0, n.jsx)(l.q4e, {
                            placeholder: d.intl.string(d.t.XqMe3N),
                            options: (0, o.b7)(p.channelId),
                            clearable: !1,
                            value: g,
                            onChange: I,
                            maxVisibleItems: 4
                        })
                    })
                ]
            }),
            (0, n.jsx)(l.mzw, {
                justify: s.Z.Justify.BETWEEN,
                children: (0, n.jsx)(l.zxk, {
                    variant: 'primary',
                    text: d.intl.string(d.t.R3BPHx),
                    onClick: k,
                    loading: j
                })
            })
        ]
    });
}
