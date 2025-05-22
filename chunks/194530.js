n.d(t, { default: () => p }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(809206),
    o = n(118012),
    c = n(25990),
    d = n(155433),
    u = n(981631),
    g = n(388032),
    m = n(132709);
function p(e) {
    var t, n, p, h;
    let { transitionState: f, onSuccess: b, onClose: _, requirementsUpdated: x, noSkip: E = !1 } = e,
        [C, j] = r.useState(''),
        [O, S] = r.useState(''),
        [v, T] = r.useState(''),
        [I, N] = r.useState(null),
        [y, A] = r.useState(null),
        P = (0, s.e7)([c.Z], () => c.Z.getErrors()),
        R = (0, s.e7)([c.Z], () => c.Z.getFormState()),
        D = r.useRef(null);
    async function Z(e) {
        e.preventDefault(), (0, a.b9)();
        let t = !1;
        if (('' === O ? (N(g.intl.string(g.t['/7/oPT'])), (t = !0)) : N(null), O !== v ? (A(g.intl.string(g.t.IEKYZ2)), (t = !0)) : A(null), t)) return;
        let n = await (0, a.Mn)({
            password: C,
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
                    className: m.header,
                    children: [
                        (0, i.jsx)(o.Z, {
                            color: o.Z.Colors.HEADER_PRIMARY,
                            size: o.Z.Sizes.SIZE_24,
                            className: m.title,
                            children: g.intl.string(g.t['geta7+'])
                        }),
                        (0, i.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: m.subtitle,
                            children: x ? g.intl.string(g.t['37iHbW']) : g.intl.string(g.t.iOurYm)
                        }),
                        !0 !== E &&
                            (0, i.jsx)(l.olH, {
                                onClick: _,
                                className: m.modalCloseButton
                            })
                    ]
                }),
                (0, i.jsxs)('form', {
                    onSubmit: Z,
                    children: [
                        (0, i.jsxs)(l.hzk, {
                            className: m.content,
                            children: [
                                (0, i.jsx)(l.xJW, {
                                    title: g.intl.string(g.t.WBqMRU),
                                    error: null == P || null == (t = P.password) ? void 0 : t[0],
                                    children: (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        value: C,
                                        onChange: j,
                                        inputRef: D
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: m.newPassword,
                                    title: g.intl.string(g.t['8dM4FB']),
                                    error: null != (h = null != (p = null == P || null == (n = P.new_password) ? void 0 : n[0]) ? p : I) ? h : void 0,
                                    children: (0, i.jsx)(l.oil, {
                                        type: 'password',
                                        value: O,
                                        onChange: S
                                    })
                                }),
                                (0, i.jsx)(l.xJW, {
                                    className: m.newPassword,
                                    title: g.intl.string(g.t.iQG2KC),
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
                                    children: g.intl.string(g.t.i4jeWV)
                                }),
                                !0 !== E &&
                                    (0, i.jsx)(l.zxk, {
                                        className: m.cancel,
                                        look: l.zxk.Looks.LINK,
                                        color: l.zxk.Colors.PRIMARY,
                                        onClick: _,
                                        children: g.intl.string(g.t['ETE/oK'])
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
