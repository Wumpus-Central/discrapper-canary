(n.d(t, { default: () => p }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(809206),
    o = n(25990),
    c = n(155433),
    d = n(981631),
    u = n(388032),
    m = n(132709);
function p(e) {
    var t, n, p, g;
    let { transitionState: h, onSuccess: f, onClose: b, requirementsUpdated: x, noSkip: _ = !1 } = e,
        [j, C] = r.useState(''),
        [E, O] = r.useState(''),
        [v, S] = r.useState(''),
        [T, N] = r.useState(null),
        [I, y] = r.useState(null),
        A = (0, s.e7)([o.Z], () => o.Z.getErrors()),
        P = (0, s.e7)([o.Z], () => o.Z.getFormState()),
        R = r.useRef(null);
    async function D(e) {
        (e.preventDefault(), (0, l.b9)());
        let t = !1;
        if (('' === E ? (N(u.intl.string(u.t['/7/oPT'])), (t = !0)) : N(null), E !== v ? (y(u.intl.string(u.t.IEKYZ2)), (t = !0)) : y(null), t)) return;
        let n = await (0, l.Mn)({
            password: j,
            newPassword: E
        });
        if (null == n ? void 0 : n.ok) f();
        else {
            var i;
            (null == n || null == (i = n.body) ? void 0 : i.username) != null && (0, c.P)();
        }
    }
    return (
        r.useEffect(() => {
            if (h === a.Dvm.ENTERED) {
                var e;
                null == (e = R.current) || e.focus();
            }
        }, [h]),
        (0, i.jsxs)(a.Y0X, {
            transitionState: h,
            parentComponent: 'ChangePasswordModal',
            children: [
                (0, i.jsxs)(a.xBx, {
                    separator: !1,
                    className: m.header,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            color: 'header-primary',
                            variant: 'heading-xl/bold',
                            className: m.title,
                            children: u.intl.string(u.t['geta7+'])
                        }),
                        (0, i.jsx)(a.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: m.subtitle,
                            children: x ? u.intl.string(u.t['37iHbW']) : u.intl.string(u.t.iOurYm)
                        }),
                        !0 !== _ &&
                            (0, i.jsx)(a.olH, {
                                onClick: b,
                                className: m.modalCloseButton
                            })
                    ]
                }),
                (0, i.jsxs)('form', {
                    onSubmit: D,
                    children: [
                        (0, i.jsxs)(a.hzk, {
                            className: m.content,
                            children: [
                                (0, i.jsx)(a.xJW, {
                                    title: u.intl.string(u.t.WBqMRU),
                                    error: null == A || null == (t = A.password) ? void 0 : t[0],
                                    children: (0, i.jsx)(a.oil, {
                                        type: 'password',
                                        value: j,
                                        onChange: C,
                                        inputRef: R
                                    })
                                }),
                                (0, i.jsx)(a.xJW, {
                                    className: m.newPassword,
                                    title: u.intl.string(u.t['8dM4FB']),
                                    error: null != (g = null != (p = null == A || null == (n = A.new_password) ? void 0 : n[0]) ? p : T) ? g : void 0,
                                    children: (0, i.jsx)(a.oil, {
                                        type: 'password',
                                        value: E,
                                        onChange: O
                                    })
                                }),
                                (0, i.jsx)(a.xJW, {
                                    className: m.newPassword,
                                    title: u.intl.string(u.t.iQG2KC),
                                    error: null != I ? I : void 0,
                                    children: (0, i.jsx)(a.oil, {
                                        type: 'password',
                                        value: v,
                                        onChange: S
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.mzw, {
                            children: [
                                (0, i.jsx)(a.zxk, {
                                    variant: 'primary',
                                    text: u.intl.string(u.t.i4jeWV),
                                    type: 'submit',
                                    loading: P === d.QZA.SUBMITTING
                                }),
                                !0 !== _ &&
                                    (0, i.jsx)('div', {
                                        'data-button-hoisted-classname-wrapper': !0,
                                        className: m.cancel,
                                        children: (0, i.jsx)(a.zxk, {
                                            variant: 'secondary',
                                            text: u.intl.string(u.t['ETE/oK']),
                                            onClick: b
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
