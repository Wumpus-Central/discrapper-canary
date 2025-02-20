n.d(e, { default: () => g }), n(47120);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(481060),
    l = n(37234),
    c = n(479531),
    d = n(703656),
    x = n(695346),
    u = n(981631),
    h = n(388032),
    b = n(520532),
    m = n(455812);
function g(t) {
    let { transitionState: e, onClose: n } = t,
        [a, g] = r.useState(!1),
        [k, p] = r.useState(null),
        N = async () => {
            p(null), g(!0);
            try {
                await x.Ex.updateSetting(!1), (0, d.uL)(u.Z5c.FRIENDS), (0, l.xf)(), n();
            } catch (t) {
                p(new c.Z(t).getAnyErrorMessage());
            } finally {
                g(!1);
            }
        },
        C = () => {
            (0, d.uL)(u.Z5c.SETTINGS('family-center')), n();
        };
    return (0, s.jsxs)(o.Y0X, {
        className: b.root,
        transitionState: e,
        children: [
            (0, s.jsxs)(o.xBx, {
                separator: !1,
                className: b.header,
                children: [
                    (0, s.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        className: b.title,
                        children: h.NW.string(h.t.VGB30N)
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        className: b.subtitle,
                        children: h.NW.format(h.t['CrZZ+v'], {
                            openSettingsHook: (t, e) =>
                                (0, s.jsx)(
                                    o.eee,
                                    {
                                        onClick: C,
                                        children: t
                                    },
                                    e
                                )
                        })
                    })
                ]
            }),
            (0, s.jsxs)(o.hzk, {
                children: [
                    (0, s.jsxs)('div', {
                        className: i()(b.buttonContainer, m.marginTop20),
                        children: [
                            (0, s.jsx)(o.zxk, {
                                type: 'submit',
                                className: m.marginBottom8,
                                grow: !0,
                                color: o.zxk.Colors.RED,
                                onClick: N,
                                submitting: a,
                                children: h.NW.string(h.t.cSb7U1)
                            }),
                            (0, s.jsx)(o.zxk, {
                                grow: !0,
                                color: o.zxk.Colors.PRIMARY,
                                onClick: n,
                                children: h.NW.string(h.t['ETE/oK'])
                            })
                        ]
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        children: k
                    })
                ]
            })
        ]
    });
}
