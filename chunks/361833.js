(n.d(t, { Z: () => m }), n(388685));
var s = n(255367),
    a = n(73800),
    r = n(442837),
    i = n(481060),
    l = n(809206),
    o = n(25990),
    c = n(155433),
    d = n(388032),
    x = n(652297);
function m(e) {
    var t, n;
    let { emailToken: m, isSlideReady: u, onClose: _, onBack: E, onNext: N } = e,
        [h, A] = a.useState(''),
        [p, C] = a.useState(''),
        [j, f] = a.useState(!1),
        S = (0, r.e7)([o.Z], () => o.Z.getErrors()),
        g = a.useRef(null);
    async function v(e) {
        (e.preventDefault(), f(!0));
        let t = await (0, l.Mn)({
            email: h,
            emailToken: m,
            password: p
        });
        if ((f(!1), null == t ? void 0 : t.ok)) N(h);
        else {
            var n, s;
            (null == t || null == (n = t.body) ? void 0 : n.username) != null ? (0, c.P)() : (null == t || null == (s = t.body) ? void 0 : s.email_token) != null && (null == E || E());
        }
    }
    return (
        a.useEffect(() => {
            if (u) {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [u]),
        (0, s.jsxs)('form', {
            onSubmit: v,
            children: [
                (0, s.jsxs)(i.xBx, {
                    separator: !1,
                    className: x.header,
                    children: [
                        (0, s.jsx)(i.X6q, {
                            className: x.title,
                            variant: 'heading-xl/extrabold',
                            children: d.intl.string(d.t.p3280t)
                        }),
                        (0, s.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: x.subtitle,
                            children: d.intl.string(d.t['1k44EB'])
                        }),
                        (0, s.jsx)(i.olH, {
                            onClick: _,
                            className: x.modalCloseButton
                        })
                    ]
                }),
                (0, s.jsxs)(i.hzk, {
                    className: x.content,
                    children: [
                        (0, s.jsx)(i.xJW, {
                            title: d.intl.string(d.t['w/qqKC']),
                            error: null == S || null == (t = S.email) ? void 0 : t[0],
                            children: (0, s.jsx)(i.oil, {
                                type: 'email',
                                value: h,
                                onChange: A,
                                inputRef: g
                            })
                        }),
                        (0, s.jsx)(i.xJW, {
                            className: x.password,
                            title: d.intl.string(d.t.TmdnJy),
                            error: null == S || null == (n = S.password) ? void 0 : n[0],
                            children: (0, s.jsx)(i.oil, {
                                type: 'password',
                                value: p,
                                onChange: C
                            })
                        })
                    ]
                }),
                (0, s.jsxs)(i.mzw, {
                    children: [
                        (0, s.jsx)(i.zxk, {
                            variant: 'primary',
                            text: d.intl.string(d.t.i4jeWV),
                            type: 'submit',
                            loading: j
                        }),
                        null != E
                            ? (0, s.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: x.__invalid_cancel,
                                  children: (0, s.jsx)(i.zxk, {
                                      variant: 'secondary',
                                      text: d.intl.string(d.t['13/7kZ']),
                                      onClick: E
                                  })
                              })
                            : (0, s.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: x.__invalid_cancel,
                                  children: (0, s.jsx)(i.zxk, {
                                      variant: 'secondary',
                                      text: d.intl.string(d.t['ETE/oK']),
                                      onClick: _
                                  })
                              })
                    ]
                })
            ]
        })
    );
}
