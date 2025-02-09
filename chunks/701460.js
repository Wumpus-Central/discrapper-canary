n.d(e, { default: () => h }), n(47120), n(411104);
var i = n(200651),
    o = n(192379),
    s = n(481060),
    l = n(726542),
    r = n(600164),
    a = n(823985),
    c = n(202120),
    d = n(388032),
    u = n(941126);
function h(t) {
    var e, n;
    let { onClose: h, transitionState: x, location: f, successRedirect: m, platformType: p } = t,
        [j, k] = o.useState(''),
        [_, b] = o.useState(null),
        [g, v] = o.useState(!1),
        N = null !== (n = null === (e = l.Z.get(p)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : d.intl.string(d.t['bU/GZm']),
        S = async () => {
            v(!0), b(null);
            try {
                let t = await (0, c.H)(p, {
                    location: f,
                    successRedirect: m,
                    handle: j
                });
                if (null == t) throw Error();
                h();
            } catch {
                b(d.intl.string(d.t['7wbPNj'])), v(!1);
            }
        },
        B = (0, a.r)(p),
        T = (0, a.j)(j, p);
    return (0, i.jsxs)(s.Y0X, {
        transitionState: x,
        className: u.__invalid_modal,
        children: [
            (0, i.jsxs)(s.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-xl/semibold',
                        children: d.intl.formatToPlainString(d.t.ImMhq6, { serviceName: N })
                    }),
                    (0, i.jsx)(s.olH, {
                        className: u.closeButton,
                        onClick: h
                    })
                ]
            }),
            (0, i.jsxs)('form', {
                onSubmit: (t) => {
                    t.preventDefault(), S();
                },
                children: [
                    (0, i.jsxs)(s.hzk, {
                        className: u.content,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                className: u.description,
                                children: d.intl.formatToPlainString(d.t['7TByKi'], { serviceName: N })
                            }),
                            (0, i.jsx)(s.xJW, {
                                title: d.intl.string(d.t.tZ9QFR),
                                error: _,
                                children: (0, i.jsx)(s.oil, {
                                    onChange: k,
                                    placeholder: B,
                                    value: j,
                                    disabled: g,
                                    autoFocus: !0
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(s.mzw, {
                        className: u.footer,
                        children: [
                            (0, i.jsx)(s.zxk, {
                                type: 'submit',
                                submitting: g,
                                disabled: !T,
                                children: d.intl.string(d.t.PDTjLC)
                            }),
                            (0, i.jsx)(s.zxk, {
                                look: s.zxk.Looks.LINK,
                                color: s.zxk.Colors.PRIMARY,
                                onClick: h,
                                children: d.intl.string(d.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
