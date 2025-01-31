t.d(s, { Z: () => m }), t(47120);
var n = t(200651),
    l = t(192379),
    i = t(442837),
    a = t(481060),
    r = t(809206),
    o = t(25990),
    c = t(155433),
    d = t(388032),
    x = t(981818);
function m(e) {
    var s, t;
    let { emailToken: m, isSlideReady: u, onClose: _, onBack: E, onNext: N } = e,
        [A, C] = l.useState(''),
        [h, S] = l.useState(''),
        [k, p] = l.useState(!1),
        j = (0, i.e7)([o.Z], () => o.Z.getErrors()),
        M = l.useRef(null);
    async function I(e) {
        e.preventDefault(), p(!0);
        let s = await (0, r.Mn)({
            email: A,
            emailToken: m,
            password: h
        });
        if ((p(!1), null == s ? void 0 : s.ok)) N(A);
        else {
            var t, n;
            (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.username) != null ? (0, c.P)() : (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.email_token) != null && (null == E || E());
        }
    }
    return (
        l.useEffect(() => {
            if (u) {
                var e;
                null === (e = M.current) || void 0 === e || e.focus();
            }
        }, [u]),
        (0, n.jsxs)('form', {
            onSubmit: I,
            children: [
                (0, n.jsxs)(a.xBx, {
                    separator: !1,
                    className: x.header,
                    children: [
                        (0, n.jsx)(a.X6q, {
                            className: x.title,
                            variant: 'heading-xl/extrabold',
                            children: d.intl.string(d.t.p3280t)
                        }),
                        (0, n.jsx)(a.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: x.subtitle,
                            children: d.intl.string(d.t['1k44EB'])
                        }),
                        (0, n.jsx)(a.olH, {
                            onClick: _,
                            className: x.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(a.hzk, {
                    className: x.content,
                    children: [
                        (0, n.jsx)(a.xJW, {
                            title: d.intl.string(d.t['w/qqKC']),
                            error: null == j ? void 0 : null === (s = j.email) || void 0 === s ? void 0 : s[0],
                            children: (0, n.jsx)(a.oil, {
                                type: 'email',
                                value: A,
                                onChange: C,
                                inputRef: M
                            })
                        }),
                        (0, n.jsx)(a.xJW, {
                            className: x.password,
                            title: d.intl.string(d.t.TmdnJy),
                            error: null == j ? void 0 : null === (t = j.password) || void 0 === t ? void 0 : t[0],
                            children: (0, n.jsx)(a.oil, {
                                type: 'password',
                                value: h,
                                onChange: S
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(a.mzw, {
                    children: [
                        (0, n.jsx)(a.zxk, {
                            type: 'submit',
                            color: a.zxk.Colors.BRAND,
                            size: a.zxk.Sizes.MEDIUM,
                            submitting: k,
                            children: d.intl.string(d.t.i4jeWV)
                        }),
                        null != E
                            ? (0, n.jsx)(a.zxk, {
                                  className: x.__invalid_cancel,
                                  look: a.zxk.Looks.LINK,
                                  color: a.zxk.Colors.PRIMARY,
                                  onClick: E,
                                  children: d.intl.string(d.t['13/7kZ'])
                              })
                            : (0, n.jsx)(a.zxk, {
                                  className: x.__invalid_cancel,
                                  look: a.zxk.Looks.LINK,
                                  color: a.zxk.Colors.PRIMARY,
                                  onClick: _,
                                  children: d.intl.string(d.t['ETE/oK'])
                              })
                    ]
                })
            ]
        })
    );
}
