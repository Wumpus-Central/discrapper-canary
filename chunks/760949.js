n.d(e, { default: () => p }), n(388685);
var a = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    l = n(481060),
    o = n(37234),
    d = n(479531),
    c = n(703656),
    u = n(695346),
    x = n(981631),
    h = n(524499),
    m = n(388032),
    b = n(381528),
    g = n(20493);
function p(t) {
    let { transitionState: e, onClose: n } = t,
        [r, p] = i.useState(!1),
        [k, C] = i.useState(null),
        f = async () => {
            C(null), p(!0);
            try {
                await u.Ex.updateSetting(!1), (0, c.uL)(x.Z5c.FRIENDS), (0, o.xf)(), n();
            } catch (t) {
                C(new d.Z(t).getAnyErrorMessage());
            } finally {
                p(!1);
            }
        },
        j = () => {
            (0, c.uL)(x.Z5c.SETTINGS('family-center')), n();
        };
    return (0, a.jsxs)(l.Y0X, {
        className: b.root,
        transitionState: e,
        parentComponent: 'FamilyCenterDisableFeatureModal',
        children: [
            (0, a.jsxs)(l.xBx, {
                separator: !1,
                className: b.header,
                children: [
                    (0, a.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        className: b.title,
                        children: m.intl.string(h.default.VGB30N)
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        className: b.subtitle,
                        children: m.intl.format(h.default['CrZZ+v'], {
                            openSettingsHook: (t, e) =>
                                (0, a.jsx)(
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
            (0, a.jsxs)(l.hzk, {
                children: [
                    (0, a.jsxs)('div', {
                        className: s()(b.buttonContainer, g.marginTop20),
                        children: [
                            (0, a.jsx)(l.zxk, {
                                type: 'submit',
                                className: g.marginBottom8,
                                grow: !0,
                                color: l.zxk.Colors.RED,
                                onClick: f,
                                submitting: r,
                                children: m.intl.string(h.default.cSb7U1)
                            }),
                            (0, a.jsx)(l.zxk, {
                                grow: !0,
                                color: l.zxk.Colors.PRIMARY,
                                onClick: n,
                                children: m.intl.string(m.t['ETE/oK'])
                            })
                        ]
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        children: k
                    })
                ]
            })
        ]
    });
}
