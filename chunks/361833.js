t.d(s, { Z: () => N }), t(47120);
var n = t(200651),
    r = t(192379),
    a = t(442837),
    l = t(481060),
    o = t(809206),
    i = t(25990),
    c = t(155433),
    d = t(388032),
    x = t(925495);
function N(e) {
    var s, t;
    let { emailToken: N, isSlideReady: m, onClose: u, onBack: _, onNext: E } = e,
        [A, h] = r.useState(''),
        [C, p] = r.useState(''),
        [j, S] = r.useState(!1),
        k = (0, a.e7)([i.Z], () => i.Z.getErrors()),
        f = r.useRef(null);
    async function g(e) {
        e.preventDefault(), S(!0);
        let s = await (0, o.Mn)({
            email: A,
            emailToken: N,
            password: C
        });
        if ((S(!1), null == s ? void 0 : s.ok)) E(A);
        else {
            var t, n;
            (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.username) != null ? (0, c.P)() : (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.email_token) != null && (null == _ || _());
        }
    }
    return (
        r.useEffect(() => {
            if (m) {
                var e;
                null === (e = f.current) || void 0 === e || e.focus();
            }
        }, [m]),
        (0, n.jsxs)('form', {
            onSubmit: g,
            children: [
                (0, n.jsxs)(l.xBx, {
                    separator: !1,
                    className: x.header,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            className: x.title,
                            variant: 'heading-xl/extrabold',
                            children: d.NW.string(d.t.p3280t)
                        }),
                        (0, n.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: x.subtitle,
                            children: d.NW.string(d.t['1k44EB'])
                        }),
                        (0, n.jsx)(l.olH, {
                            onClick: u,
                            className: x.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(l.hzk, {
                    className: x.content,
                    children: [
                        (0, n.jsx)(l.xJW, {
                            title: d.NW.string(d.t['w/qqKC']),
                            error: null == k ? void 0 : null === (s = k.email) || void 0 === s ? void 0 : s[0],
                            children: (0, n.jsx)(l.oil, {
                                type: 'email',
                                value: A,
                                onChange: h,
                                inputRef: f
                            })
                        }),
                        (0, n.jsx)(l.xJW, {
                            className: x.password,
                            title: d.NW.string(d.t.TmdnJy),
                            error: null == k ? void 0 : null === (t = k.password) || void 0 === t ? void 0 : t[0],
                            children: (0, n.jsx)(l.oil, {
                                type: 'password',
                                value: C,
                                onChange: p
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(l.mzw, {
                    children: [
                        (0, n.jsx)(l.zxk, {
                            type: 'submit',
                            color: l.zxk.Colors.BRAND,
                            size: l.zxk.Sizes.MEDIUM,
                            submitting: j,
                            children: d.NW.string(d.t.i4jeWV)
                        }),
                        null != _
                            ? (0, n.jsx)(l.zxk, {
                                  className: x.__invalid_cancel,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  onClick: _,
                                  children: d.NW.string(d.t['13/7kZ'])
                              })
                            : (0, n.jsx)(l.zxk, {
                                  className: x.__invalid_cancel,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  onClick: u,
                                  children: d.NW.string(d.t['ETE/oK'])
                              })
                    ]
                })
            ]
        })
    );
}
