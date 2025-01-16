n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var s = n(200651),
    o = n(192379),
    l = n(442837),
    a = n(481060),
    i = n(809206),
    r = n(25990),
    d = n(155433),
    c = n(388032),
    u = n(981818);
function m(e) {
    var t, n;
    let { emailToken: m, isSlideReady: _, onClose: E, onBack: N, onNext: x } = e,
        [A, C] = o.useState(''),
        [h, M] = o.useState(''),
        [S, p] = o.useState(!1),
        I = (0, l.e7)([r.Z], () => r.Z.getErrors()),
        f = o.useRef(null);
    async function j(e) {
        e.preventDefault(), p(!0);
        let t = await (0, i.Mn)({
            email: A,
            emailToken: m,
            password: h
        });
        if ((p(!1), null == t ? void 0 : t.ok)) x(A);
        else {
            var n, s;
            (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null ? (0, d.P)() : (null == t ? void 0 : null === (s = t.body) || void 0 === s ? void 0 : s.email_token) != null && (null == N || N());
        }
    }
    return (
        o.useEffect(() => {
            if (_) {
                var e;
                null === (e = f.current) || void 0 === e || e.focus();
            }
        }, [_]),
        (0, s.jsxs)('form', {
            onSubmit: j,
            children: [
                (0, s.jsxs)(a.ModalHeader, {
                    separator: !1,
                    className: u.header,
                    children: [
                        (0, s.jsx)(a.Heading, {
                            className: u.title,
                            variant: 'heading-xl/extrabold',
                            children: c.intl.string(c.t.p3280t)
                        }),
                        (0, s.jsx)(a.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: u.subtitle,
                            children: c.intl.string(c.t['1k44EB'])
                        }),
                        (0, s.jsx)(a.ModalCloseButton, {
                            onClick: E,
                            className: u.modalCloseButton
                        })
                    ]
                }),
                (0, s.jsxs)(a.ModalContent, {
                    className: u.content,
                    children: [
                        (0, s.jsx)(a.FormItem, {
                            title: c.intl.string(c.t['w/qqKC']),
                            error: null == I ? void 0 : null === (t = I.email) || void 0 === t ? void 0 : t[0],
                            children: (0, s.jsx)(a.TextInput, {
                                type: 'email',
                                value: A,
                                onChange: C,
                                inputRef: f
                            })
                        }),
                        (0, s.jsx)(a.FormItem, {
                            className: u.password,
                            title: c.intl.string(c.t.TmdnJy),
                            error: null == I ? void 0 : null === (n = I.password) || void 0 === n ? void 0 : n[0],
                            children: (0, s.jsx)(a.TextInput, {
                                type: 'password',
                                value: h,
                                onChange: M
                            })
                        })
                    ]
                }),
                (0, s.jsxs)(a.ModalFooter, {
                    children: [
                        (0, s.jsx)(a.Button, {
                            type: 'submit',
                            color: a.Button.Colors.BRAND,
                            size: a.Button.Sizes.MEDIUM,
                            submitting: S,
                            children: c.intl.string(c.t.i4jeWV)
                        }),
                        null != N
                            ? (0, s.jsx)(a.Button, {
                                  className: u.__invalid_cancel,
                                  look: a.Button.Looks.LINK,
                                  color: a.Button.Colors.PRIMARY,
                                  onClick: N,
                                  children: c.intl.string(c.t['13/7kZ'])
                              })
                            : (0, s.jsx)(a.Button, {
                                  className: u.__invalid_cancel,
                                  look: a.Button.Looks.LINK,
                                  color: a.Button.Colors.PRIMARY,
                                  onClick: E,
                                  children: c.intl.string(c.t['ETE/oK'])
                              })
                    ]
                })
            ]
        })
    );
}
