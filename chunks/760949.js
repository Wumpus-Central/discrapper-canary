n.d(e, { default: () => g }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(37234),
    c = n(479531),
    d = n(703656),
    x = n(695346),
    u = n(981631),
    h = n(388032),
    b = n(835791),
    m = n(814632);
function g(t) {
    let { transitionState: e, onClose: n } = t,
        [r, g] = s.useState(!1),
        [k, p] = s.useState(null),
        C = async () => {
            p(null), g(!0);
            try {
                await x.Ex.updateSetting(!1), (0, d.uL)(u.Z5c.FRIENDS), (0, o.xf)(), n();
            } catch (t) {
                p(new c.Z(t).getAnyErrorMessage());
            } finally {
                g(!1);
            }
        },
        j = () => {
            (0, d.uL)(u.Z5c.SETTINGS('family-center')), n();
        };
    return (0, i.jsxs)(l.Y0X, {
        className: b.root,
        transitionState: e,
        children: [
            (0, i.jsxs)(l.xBx, {
                separator: !1,
                className: b.header,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        className: b.title,
                        children: h.intl.string(h.t.VGB30N)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        className: b.subtitle,
                        children: h.intl.format(h.t['CrZZ+v'], {
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
                        className: a()(b.buttonContainer, m.marginTop20),
                        children: [
                            (0, i.jsx)(l.zxk, {
                                type: 'submit',
                                className: m.marginBottom8,
                                grow: !0,
                                color: l.zxk.Colors.RED,
                                onClick: C,
                                submitting: r,
                                children: h.intl.string(h.t.cSb7U1)
                            }),
                            (0, i.jsx)(l.zxk, {
                                grow: !0,
                                color: l.zxk.Colors.PRIMARY,
                                onClick: n,
                                children: h.intl.string(h.t['ETE/oK'])
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        children: k
                    })
                ]
            })
        ]
    });
}
