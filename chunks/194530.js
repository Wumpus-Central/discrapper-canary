(n.d(t, { default: () => p }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(809206),
    o = n(25990),
    c = n(155433),
    d = n(981631),
    u = n(388032),
    m = n(132709);
function p(e) {
    var t, n, p, g;
    let { transitionState: h, onSuccess: f, onClose: b, requirementsUpdated: x, noSkip: _ = !1 } = e,
        [E, j] = r.useState(''),
        [O, C] = r.useState(''),
        [S, v] = r.useState(''),
        [T, N] = r.useState(null),
        [I, y] = r.useState(null),
        A = (0, s.e7)([o.Z], () => o.Z.getErrors()),
        P = (0, s.e7)([o.Z], () => o.Z.getFormState()),
        R = r.useRef(null);
    async function D(e) {
        (e.preventDefault(), (0, a.b9)());
        let t = !1;
        if (('' === O ? (N(u.intl.string(u.t['/7/oPT'])), (t = !0)) : N(null), O !== S ? (y(u.intl.string(u.t.IEKYZ2)), (t = !0)) : y(null), t)) return;
        let n = await (0, a.Mn)({
            password: E,
            newPassword: O
        });
        if (null == n ? void 0 : n.ok) f();
        else {
            var i;
            (null == n || null == (i = n.body) ? void 0 : i.username) != null && (0, c.P)();
        }
    }
    return (
        r.useEffect(() => {
            if (h === l.Dvm.ENTERED) {
                var e;
                null == (e = R.current) || e.focus();
            }
        }, [h]),
        (0, i.jsxs)(l.Y0X, {
            transitionState: h,
            parentComponent: 'ChangePasswordModal',
            children: [
                (0, i.jsxs)(l.xBx, {
                    separator: !1,
                    className: m.header,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            color: 'header-primary',
                            variant: 'heading-xl/bold',
                            className: m.title,
                            children: u.intl.string(u.t['geta7+'])
                        }),
                        (0, i.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: m.subtitle,
                            children: x ? u.intl.string(u.t['37iHbW']) : u.intl.string(u.t.iOurYm)
                        }),
                        !0 !== _ &&
                            (0, i.jsx)(l.olH, {
                                onClick: b,
                                className: m.modalCloseButton
                            })
                    ]
                }),
                (0, i.jsxs)('form', {
                    onSubmit: D,
                    children: [
                        (0, i.jsxs)(l.hzk, {
                            className: m.content,
                            children: [
                                (0, i.jsx)(l.xJW, {
                                    title: u.intl.string(u.t.WBqMRU),
                                    error: null == A || null == (t = A.password) ? void 0 : t[0],
                                    children: (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        value: E,
                                        onChange: j,
                                        inputRef: R
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: m.newPassword,
                                    title: u.intl.string(u.t['8dM4FB']),
                                    error: null != (g = null != (p = null == A || null == (n = A.new_password) ? void 0 : n[0]) ? p : T) ? g : void 0,
                                    children: (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        value: O,
                                        onChange: C
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: m.newPassword,
                                    title: u.intl.string(u.t.iQG2KC),
                                    error: null != I ? I : void 0,
                                    children: (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        value: S,
                                        onChange: v
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(l.mzw, {
                            children: [
                                (0, i.jsx)(l.zxk, {
                                    type: 'submit',
                                    color: l.zxk.Colors.BRAND,
                                    size: l.zxk.Sizes.MEDIUM,
                                    submitting: P === d.QZA.SUBMITTING,
                                    children: u.intl.string(u.t.i4jeWV)
                                }),
                                !0 !== _ &&
                                    (0, i.jsx)(l.zxk, {
                                        className: m.cancel,
                                        look: l.zxk.Looks.LINK,
                                        color: l.zxk.Colors.PRIMARY,
                                        onClick: b,
                                        children: u.intl.string(u.t['ETE/oK'])
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
