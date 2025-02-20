n.d(e, { default: () => h }), n(47120), n(411104), n(266796);
var o = n(200651),
    s = n(192379),
    i = n(481060),
    r = n(726542),
    a = n(600164),
    c = n(823985),
    l = n(202120),
    d = n(388032),
    u = n(304682);
function h(t) {
    var e, n;
    let { onClose: h, transitionState: x, location: f, successRedirect: m, platformType: p } = t,
        [N, j] = s.useState(''),
        [k, _] = s.useState(null),
        [b, g] = s.useState(!1),
        v = null !== (n = null === (e = r.Z.get(p)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : d.NW.string(d.t['bU/GZm']),
        S = async () => {
            g(!0), _(null);
            try {
                let t = await (0, l.H)(p, {
                    location: f,
                    successRedirect: m,
                    handle: N
                });
                if (null == t) throw Error();
                h();
            } catch (t) {
                _(d.NW.string(d.t['7wbPNj'])), g(!1);
            }
        },
        B = (0, c.r)(p),
        T = (0, c.j)(N, p);
    return (0, o.jsxs)(i.Y0X, {
        transitionState: x,
        className: u.__invalid_modal,
        children: [
            (0, o.jsxs)(i.xBx, {
                direction: a.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, o.jsx)(i.X6q, {
                        variant: 'heading-xl/semibold',
                        children: d.NW.formatToPlainString(d.t.ImMhq6, { serviceName: v })
                    }),
                    (0, o.jsx)(i.olH, {
                        className: u.closeButton,
                        onClick: h
                    })
                ]
            }),
            (0, o.jsxs)('form', {
                onSubmit: (t) => {
                    t.preventDefault(), S();
                },
                children: [
                    (0, o.jsxs)(i.hzk, {
                        className: u.content,
                        children: [
                            (0, o.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                className: u.description,
                                children: d.NW.formatToPlainString(d.t['7TByKi'], { serviceName: v })
                            }),
                            (0, o.jsx)(i.xJW, {
                                title: d.NW.string(d.t.tZ9QFR),
                                error: k,
                                children: (0, o.jsx)(i.oil, {
                                    onChange: j,
                                    placeholder: B,
                                    value: N,
                                    disabled: b,
                                    autoFocus: !0
                                })
                            })
                        ]
                    }),
                    (0, o.jsxs)(i.mzw, {
                        className: u.footer,
                        children: [
                            (0, o.jsx)(i.zxk, {
                                type: 'submit',
                                submitting: b,
                                disabled: !T,
                                children: d.NW.string(d.t.PDTjLC)
                            }),
                            (0, o.jsx)(i.zxk, {
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.PRIMARY,
                                onClick: h,
                                children: d.NW.string(d.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
