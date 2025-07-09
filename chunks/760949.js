(n.d(e, { default: () => C }), n(388685));
var a = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    l = n(755721),
    o = n(481060),
    d = n(37234),
    c = n(479531),
    u = n(703656),
    x = n(695346),
    h = n(981631),
    m = n(916723),
    b = n(388032),
    g = n(381528),
    p = n(20493);
function C(t) {
    let { transitionState: e, onClose: n } = t,
        [r, C] = i.useState(!1),
        [f, j] = i.useState(null),
        k = async () => {
            (j(null), C(!0));
            try {
                (await x.Ex.updateSetting(!1), (0, u.uL)(h.Z5c.FRIENDS), (0, d.xf)(), n());
            } catch (t) {
                j(new c.Z(t).getAnyErrorMessage());
            } finally {
                C(!1);
            }
        },
        N = () => {
            ((0, u.uL)(h.Z5c.SETTINGS('family-center')), n());
        };
    return (0, a.jsxs)(o.Y0X, {
        className: g.root,
        transitionState: e,
        parentComponent: 'FamilyCenterDisableFeatureModal',
        children: [
            (0, a.jsxs)(o.xBx, {
                separator: !1,
                className: g.header,
                children: [
                    (0, a.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        className: g.title,
                        children: b.intl.string(m.default.VGB30N)
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        className: g.subtitle,
                        children: b.intl.format(m.default['CrZZ+v'], {
                            openSettingsHook: (t, e) =>
                                (0, a.jsx)(
                                    o.eee,
                                    {
                                        onClick: N,
                                        children: t
                                    },
                                    e
                                )
                        })
                    })
                ]
            }),
            (0, a.jsxs)(o.hzk, {
                children: [
                    (0, a.jsxs)('div', {
                        className: s()(g.buttonContainer, p.marginTop20),
                        children: [
                            (0, a.jsx)(l.zx, {
                                type: 'submit',
                                className: p.marginBottom8,
                                grow: !0,
                                color: l.zx.Colors.RED,
                                onClick: k,
                                submitting: r,
                                children: b.intl.string(m.default.cSb7U1)
                            }),
                            (0, a.jsx)(l.zx, {
                                grow: !0,
                                color: l.zx.Colors.PRIMARY,
                                onClick: n,
                                children: b.intl.string(b.t['ETE/oK'])
                            })
                        ]
                    }),
                    (0, a.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        children: f
                    })
                ]
            })
        ]
    });
}
