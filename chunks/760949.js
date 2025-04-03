n.d(e, { default: () => k }), n(47120);
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
    h = n(332495),
    b = n(388032),
    m = n(381528),
    g = n(20493);
function k(t) {
    let { transitionState: e, onClose: n } = t,
        [a, k] = r.useState(!1),
        [p, N] = r.useState(null),
        C = async () => {
            N(null), k(!0);
            try {
                await x.Ex.updateSetting(!1), (0, d.uL)(u.Z5c.FRIENDS), (0, l.xf)(), n();
            } catch (t) {
                N(new c.Z(t).getAnyErrorMessage());
            } finally {
                k(!1);
            }
        },
        j = () => {
            (0, d.uL)(u.Z5c.SETTINGS('family-center')), n();
        };
    return (0, s.jsxs)(o.Y0X, {
        className: m.root,
        transitionState: e,
        children: [
            (0, s.jsxs)(o.xBx, {
                separator: !1,
                className: m.header,
                children: [
                    (0, s.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        className: m.title,
                        children: b.NW.string(h.Z.VGB30N)
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        className: m.subtitle,
                        children: b.NW.format(h.Z['CrZZ+v'], {
                            openSettingsHook: (t, e) =>
                                (0, s.jsx)(
                                    o.eee,
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
            (0, s.jsxs)(o.hzk, {
                children: [
                    (0, s.jsxs)('div', {
                        className: i()(m.buttonContainer, g.marginTop20),
                        children: [
                            (0, s.jsx)(o.zxk, {
                                type: 'submit',
                                className: g.marginBottom8,
                                grow: !0,
                                color: o.zxk.Colors.RED,
                                onClick: C,
                                submitting: a,
                                children: b.NW.string(h.Z.cSb7U1)
                            }),
                            (0, s.jsx)(o.zxk, {
                                grow: !0,
                                color: o.zxk.Colors.PRIMARY,
                                onClick: n,
                                children: b.NW.string(b.t['ETE/oK'])
                            })
                        ]
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        children: p
                    })
                ]
            })
        ]
    });
}
