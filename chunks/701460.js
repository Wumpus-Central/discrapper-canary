(n.d(e, { default: () => h }), n(388685), n(415506), n(953529));
var i = n(255367),
    a = n(73800),
    r = n(481060),
    o = n(726542),
    s = n(600164),
    l = n(823985),
    c = n(202120),
    d = n(388032),
    u = n(712694);
function h(t) {
    var e, n;
    let { onClose: h, transitionState: x, location: m, successRedirect: f, platformType: p } = t,
        [j, v] = a.useState(''),
        [_, g] = a.useState(null),
        [S, b] = a.useState(!1),
        k = null != (n = null == (e = o.Z.get(p)) ? void 0 : e.name) ? n : d.intl.string(d.t['bU/GZm']),
        y = async () => {
            (b(!0), g(null));
            try {
                let t = await (0, c.H)(p, {
                    location: m,
                    successRedirect: f,
                    handle: j
                });
                if (null == t) throw Error();
                h();
            } catch (t) {
                (g(d.intl.string(d.t['7wbPNj'])), b(!1));
            }
        },
        B = (0, l.r)(p),
        N = (0, l.j)(j, p);
    return (0, i.jsxs)(r.Y0X, {
        transitionState: x,
        className: u.__invalid_modal,
        parentComponent: 'FederatedSocialModal',
        children: [
            (0, i.jsxs)(r.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-xl/semibold',
                        children: d.intl.formatToPlainString(d.t.ImMhq6, { serviceName: k })
                    }),
                    (0, i.jsx)(r.olH, {
                        className: u.closeButton,
                        onClick: h
                    })
                ]
            }),
            (0, i.jsxs)('form', {
                onSubmit: (t) => {
                    (t.preventDefault(), y());
                },
                children: [
                    (0, i.jsxs)(r.hzk, {
                        className: u.content,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                className: u.description,
                                children: d.intl.formatToPlainString(d.t['7TByKi'], { serviceName: k })
                            }),
                            (0, i.jsx)(r.xJW, {
                                title: d.intl.string(d.t.tZ9QFR),
                                error: _,
                                children: (0, i.jsx)(r.oil, {
                                    onChange: v,
                                    placeholder: B,
                                    value: j,
                                    disabled: S,
                                    autoFocus: !0
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(r.mzw, {
                        className: u.footer,
                        children: (0, i.jsxs)(r.hE2, {
                            direction: 'horizontal-reverse',
                            children: [
                                (0, i.jsx)(r.zxk, {
                                    variant: 'primary',
                                    text: d.intl.string(d.t.PDTjLC),
                                    type: 'submit',
                                    loading: S,
                                    disabled: !N
                                }),
                                (0, i.jsx)(r.zxk, {
                                    variant: 'secondary',
                                    text: d.intl.string(d.t['ETE/oK']),
                                    onClick: h
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
