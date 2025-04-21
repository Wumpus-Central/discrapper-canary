n.d(e, { default: () => k }), n(388685);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(37234),
    c = n(479531),
    d = n(703656),
    u = n(695346),
    x = n(981631),
    h = n(332495),
    b = n(388032),
    m = n(381528),
    g = n(20493);
function k(t) {
    let { transitionState: e, onClose: n } = t,
        [a, k] = s.useState(!1),
        [p, f] = s.useState(null),
        C = async () => {
            f(null), k(!0);
            try {
                await u.Ex.updateSetting(!1), (0, d.uL)(x.Z5c.FRIENDS), (0, o.xf)(), n();
            } catch (t) {
                f(new c.Z(t).getAnyErrorMessage());
            } finally {
                k(!1);
            }
        },
        j = () => {
            (0, d.uL)(x.Z5c.SETTINGS('family-center')), n();
        };
    return (0, i.jsxs)(l.Y0X, {
        className: m.root,
        transitionState: e,
        children: [
            (0, i.jsxs)(l.xBx, {
                separator: !1,
                className: m.header,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        className: m.title,
                        children: b.intl.string(h.default.VGB30N)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        className: m.subtitle,
                        children: b.intl.format(h.default['CrZZ+v'], {
                            openSettingsHook: (t, e) =>
                                (0, i.jsx)(
                                    l.eee,
                                    {
                                        onClick: j,
                                        children: t
                                    },
                                    e
                                )
                        })
                    })
                ]
            }),
            (0, i.jsxs)(l.hzk, {
                children: [
                    (0, i.jsxs)('div', {
                        className: r()(m.buttonContainer, g.marginTop20),
                        children: [
                            (0, i.jsx)(l.zxk, {
                                type: 'submit',
                                className: g.marginBottom8,
                                grow: !0,
                                color: l.zxk.Colors.RED,
                                onClick: C,
                                submitting: a,
                                children: b.intl.string(h.default.cSb7U1)
                            }),
                            (0, i.jsx)(l.zxk, {
                                grow: !0,
                                color: l.zxk.Colors.PRIMARY,
                                onClick: n,
                                children: b.intl.string(b.t['ETE/oK'])
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        children: p
                    })
                ]
            })
        ]
    });
}
