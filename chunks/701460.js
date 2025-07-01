(n.d(e, { default: () => h }), n(388685), n(415506), n(953529));
var i = n(255367),
    o = n(73800),
    l = n(481060),
    r = n(726542),
    s = n(600164),
    a = n(823985),
    c = n(202120),
    d = n(388032),
    u = n(712694);
function h(t) {
    var e, n;
    let { onClose: h, transitionState: m, location: x, successRedirect: f, platformType: p } = t,
        [j, k] = o.useState(''),
        [_, b] = o.useState(null),
        [g, S] = o.useState(!1),
        N = null != (n = null == (e = r.Z.get(p)) ? void 0 : e.name) ? n : d.intl.string(d.t['bU/GZm']),
        v = async () => {
            (S(!0), b(null));
            try {
                let t = await (0, c.H)(p, {
                    location: x,
                    successRedirect: f,
                    handle: j
                });
                if (null == t) throw Error();
                h();
            } catch (t) {
                (b(d.intl.string(d.t['7wbPNj'])), S(!1));
            }
        },
        B = (0, a.r)(p),
        C = (0, a.j)(j, p);
    return (0, i.jsxs)(l.Y0X, {
        transitionState: m,
        className: u.__invalid_modal,
        parentComponent: 'FederatedSocialModal',
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        children: d.intl.formatToPlainString(d.t.ImMhq6, { serviceName: N })
                    }),
                    (0, i.jsx)(l.olH, {
                        className: u.closeButton,
                        onClick: h
                    })
                ]
            }),
            (0, i.jsxs)('form', {
                onSubmit: (t) => {
                    (t.preventDefault(), v());
                },
                children: [
                    (0, i.jsxs)(l.hzk, {
                        className: u.content,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                className: u.description,
                                children: d.intl.formatToPlainString(d.t['7TByKi'], { serviceName: N })
                            }),
                            (0, i.jsx)(l.xJW, {
                                title: d.intl.string(d.t.tZ9QFR),
                                error: _,
                                children: (0, i.jsx)(l.oil, {
                                    onChange: k,
                                    placeholder: B,
                                    value: j,
                                    disabled: g,
                                    autoFocus: !0
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(l.mzw, {
                        className: u.footer,
                        children: [
                            (0, i.jsx)(l.zxk, {
                                type: 'submit',
                                submitting: g,
                                disabled: !C,
                                children: d.intl.string(d.t.PDTjLC)
                            }),
                            (0, i.jsx)(l.zxk, {
                                look: l.zxk.Looks.LINK,
                                color: l.zxk.Colors.PRIMARY,
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
