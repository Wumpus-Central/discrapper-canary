t.d(s, { Z: () => N }), t(47120);
var n = t(200651),
    r = t(192379),
    a = t(442837),
    l = t(481060),
    o = t(809206),
    i = t(25990),
    c = t(155433),
    x = t(388032),
    d = t(652297);
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
            (null == s || null == (t = s.body) ? void 0 : t.username) != null ? (0, c.P)() : (null == s || null == (n = s.body) ? void 0 : n.email_token) != null && (null == _ || _());
        }
    }
    return (
        r.useEffect(() => {
            if (m) {
                var e;
                null == (e = f.current) || e.focus();
            }
        }, [m]),
        (0, n.jsxs)('form', {
            onSubmit: g,
            children: [
                (0, n.jsxs)(l.xBx, {
                    separator: !1,
                    className: d.header,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            className: d.title,
                            variant: 'heading-xl/extrabold',
                            children: x.NW.string(x.t.p3280t)
                        }),
                        (0, n.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: d.subtitle,
                            children: x.NW.string(x.t['1k44EB'])
                        }),
                        (0, n.jsx)(l.olH, {
                            onClick: u,
                            className: d.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(l.hzk, {
                    className: d.content,
                    children: [
                        (0, n.jsx)(l.xJW, {
                            title: x.NW.string(x.t['w/qqKC']),
                            error: null == k || null == (s = k.email) ? void 0 : s[0],
                            children: (0, n.jsx)(l.oil, {
                                type: 'email',
                                value: A,
                                onChange: h,
                                inputRef: f
                            })
                        }),
                        (0, n.jsx)(l.xJW, {
                            className: d.password,
                            title: x.NW.string(x.t.TmdnJy),
                            error: null == k || null == (t = k.password) ? void 0 : t[0],
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
                            children: x.NW.string(x.t.i4jeWV)
                        }),
                        null != _
                            ? (0, n.jsx)(l.zxk, {
                                  className: d.__invalid_cancel,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  onClick: _,
                                  children: x.NW.string(x.t['13/7kZ'])
                              })
                            : (0, n.jsx)(l.zxk, {
                                  className: d.__invalid_cancel,
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.PRIMARY,
                                  onClick: u,
                                  children: x.NW.string(x.t['ETE/oK'])
                              })
                    ]
                })
            ]
        })
    );
}
