n.d(t, { default: () => g }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(809206),
    o = n(118012),
    c = n(25990),
    d = n(155433),
    u = n(981631),
    m = n(388032),
    p = n(132709);
function g(e) {
    var t, n, g, h;
    let { transitionState: f, onSuccess: b, onClose: _, requirementsUpdated: x, noSkip: E = !1 } = e,
        [j, C] = r.useState(''),
        [O, S] = r.useState(''),
        [v, T] = r.useState(''),
        [N, I] = r.useState(null),
        [y, A] = r.useState(null),
        P = (0, s.e7)([c.Z], () => c.Z.getErrors()),
        R = (0, s.e7)([c.Z], () => c.Z.getFormState()),
        D = r.useRef(null);
    async function Z(e) {
        e.preventDefault(), (0, a.b9)();
        let t = !1;
        if (('' === O ? (I(m.intl.string(m.t['/7/oPT'])), (t = !0)) : I(null), O !== v ? (A(m.intl.string(m.t.IEKYZ2)), (t = !0)) : A(null), t)) return;
        let n = await (0, a.Mn)({
            password: j,
            newPassword: O
        });
        if (null == n ? void 0 : n.ok) b();
        else {
            var i;
            (null == n || null == (i = n.body) ? void 0 : i.username) != null && (0, d.P)();
        }
    }
    return (
        r.useEffect(() => {
            if (f === l.Dvm.ENTERED) {
                var e;
                null == (e = D.current) || e.focus();
            }
        }, [f]),
        (0, i.jsxs)(l.Y0X, {
            transitionState: f,
            children: [
                (0, i.jsxs)(l.xBx, {
                    separator: !1,
                    className: p.header,
                    children: [
                        (0, i.jsx)(o.Z, {
                            color: o.Z.Colors.HEADER_PRIMARY,
                            size: o.Z.Sizes.SIZE_24,
                            className: p.title,
                            children: m.intl.string(m.t['geta7+'])
                        }),
                        (0, i.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: p.subtitle,
                            children: x ? m.intl.string(m.t['37iHbW']) : m.intl.string(m.t.iOurYm)
                        }),
                        !0 !== E &&
                            (0, i.jsx)(l.olH, {
                                onClick: _,
                                className: p.modalCloseButton
                            })
                    ]
                }),
                (0, i.jsxs)('form', {
                    onSubmit: Z,
                    children: [
                        (0, i.jsxs)(l.hzk, {
                            className: p.content,
                            children: [
                                (0, i.jsx)(l.xJW, {
                                    title: m.intl.string(m.t.WBqMRU),
                                    error: null == P || null == (t = P.password) ? void 0 : t[0],
                                    children: (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        value: j,
                                        onChange: C,
                                        inputRef: D
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: p.newPassword,
                                    title: m.intl.string(m.t['8dM4FB']),
                                    error: null != (h = null != (g = null == P || null == (n = P.new_password) ? void 0 : n[0]) ? g : N) ? h : void 0,
                                    children: (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        value: O,
                                        onChange: S
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: p.newPassword,
                                    title: m.intl.string(m.t.iQG2KC),
                                    error: null != y ? y : void 0,
                                    children: (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        value: v,
                                        onChange: T
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
                                    submitting: R === u.QZA.SUBMITTING,
                                    children: m.intl.string(m.t.i4jeWV)
                                }),
                                !0 !== E &&
                                    (0, i.jsx)(l.zxk, {
                                        className: p.cancel,
                                        look: l.zxk.Looks.LINK,
                                        color: l.zxk.Colors.PRIMARY,
                                        onClick: _,
                                        children: m.intl.string(m.t['ETE/oK'])
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
