s.d(t, { Z: () => m }), s(388685);
var n = s(255367),
    r = s(73800),
    l = s(442837),
    i = s(481060),
    a = s(809206),
    o = s(25990),
    c = s(155433),
    x = s(388032),
    d = s(652297);
function m(e) {
    var t, s;
    let { emailToken: m, isSlideReady: u, onClose: _, onBack: E, onNext: N } = e,
        [A, h] = r.useState(''),
        [C, p] = r.useState(''),
        [j, S] = r.useState(!1),
        k = (0, l.e7)([o.Z], () => o.Z.getErrors()),
        f = r.useRef(null);
    async function g(e) {
        e.preventDefault(), S(!0);
        let t = await (0, a.Mn)({
            email: A,
            emailToken: m,
            password: C
        });
        if ((S(!1), null == t ? void 0 : t.ok)) N(A);
        else {
            var s, n;
            (null == t || null == (s = t.body) ? void 0 : s.username) != null ? (0, c.P)() : (null == t || null == (n = t.body) ? void 0 : n.email_token) != null && (null == E || E());
        }
    }
    return (
        r.useEffect(() => {
            if (u) {
                var e;
                null == (e = f.current) || e.focus();
            }
        }, [u]),
        (0, n.jsxs)('form', {
            onSubmit: g,
            children: [
                (0, n.jsxs)(i.xBx, {
                    separator: !1,
                    className: d.header,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            className: d.title,
                            variant: 'heading-xl/extrabold',
                            children: x.intl.string(x.t.p3280t)
                        }),
                        (0, n.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: d.subtitle,
                            children: x.intl.string(x.t['1k44EB'])
                        }),
                        (0, n.jsx)(i.olH, {
                            onClick: _,
                            className: d.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(i.hzk, {
                    className: d.content,
                    children: [
                        (0, n.jsx)(i.xJW, {
                            title: x.intl.string(x.t['w/qqKC']),
                            error: null == k || null == (t = k.email) ? void 0 : t[0],
                            children: (0, n.jsx)(i.oil, {
                                type: 'email',
                                value: A,
                                onChange: h,
                                inputRef: f
                            })
                        }),
                        (0, n.jsx)(i.xJW, {
                            className: d.password,
                            title: x.intl.string(x.t.TmdnJy),
                            error: null == k || null == (s = k.password) ? void 0 : s[0],
                            children: (0, n.jsx)(i.oil, {
                                type: 'password',
                                value: C,
                                onChange: p
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(i.mzw, {
                    children: [
                        (0, n.jsx)(i.zxk, {
                            type: 'submit',
                            color: i.zxk.Colors.BRAND,
                            size: i.zxk.Sizes.MEDIUM,
                            submitting: j,
                            children: x.intl.string(x.t.i4jeWV)
                        }),
                        null != E
                            ? (0, n.jsx)(i.zxk, {
                                  className: d.__invalid_cancel,
                                  look: i.zxk.Looks.LINK,
                                  color: i.zxk.Colors.PRIMARY,
                                  onClick: E,
                                  children: x.intl.string(x.t['13/7kZ'])
                              })
                            : (0, n.jsx)(i.zxk, {
                                  className: d.__invalid_cancel,
                                  look: i.zxk.Looks.LINK,
                                  color: i.zxk.Colors.PRIMARY,
                                  onClick: _,
                                  children: x.intl.string(x.t['ETE/oK'])
                              })
                    ]
                })
            ]
        })
    );
}
