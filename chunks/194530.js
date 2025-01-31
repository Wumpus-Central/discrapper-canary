s.d(e, { default: () => v }), s(47120);
var l = s(200651),
    n = s(192379),
    i = s(442837),
    o = s(481060),
    r = s(809206),
    a = s(118012),
    d = s(25990),
    c = s(155433),
    u = s(981631),
    x = s(388032),
    h = s(998976);
function v(t) {
    var e, s, v, m;
    let { transitionState: p, onSuccess: g, onClose: w, requirementsUpdated: _, noSkip: f = !1 } = t,
        [j, k] = n.useState(''),
        [C, E] = n.useState(''),
        [z, N] = n.useState(''),
        [S, b] = n.useState(null),
        [R, T] = n.useState(null),
        Z = (0, i.e7)([d.Z], () => d.Z.getErrors()),
        I = (0, i.e7)([d.Z], () => d.Z.getFormState()),
        P = n.useRef(null);
    async function y(t) {
        t.preventDefault(), (0, r.b9)();
        let e = !1;
        if (('' === C ? (b(x.intl.string(x.t['/7/oPT'])), (e = !0)) : b(null), C !== z ? (T(x.intl.string(x.t.IEKYZ2)), (e = !0)) : T(null), e)) return;
        let s = await (0, r.Mn)({
            password: j,
            newPassword: C
        });
        if (null == s ? void 0 : s.ok) g();
        else {
            var l;
            (null == s ? void 0 : null === (l = s.body) || void 0 === l ? void 0 : l.username) != null && (0, c.P)();
        }
    }
    return (
        n.useEffect(() => {
            if (p === o.Dvm.ENTERED) {
                var t;
                null === (t = P.current) || void 0 === t || t.focus();
            }
        }, [p]),
        (0, l.jsxs)(o.Y0X, {
            transitionState: p,
            children: [
                (0, l.jsxs)(o.xBx, {
                    separator: !1,
                    className: h.header,
                    children: [
                        (0, l.jsx)(a.Z, {
                            color: a.Z.Colors.HEADER_PRIMARY,
                            size: a.Z.Sizes.SIZE_24,
                            className: h.title,
                            children: x.intl.string(x.t['geta7+'])
                        }),
                        (0, l.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: h.subtitle,
                            children: _ ? x.intl.string(x.t['37iHbW']) : x.intl.string(x.t.iOurYm)
                        }),
                        !0 !== f &&
                            (0, l.jsx)(o.olH, {
                                onClick: w,
                                className: h.modalCloseButton
                            })
                    ]
                }),
                (0, l.jsxs)('form', {
                    onSubmit: y,
                    children: [
                        (0, l.jsxs)(o.hzk, {
                            className: h.content,
                            children: [
                                (0, l.jsx)(o.xJW, {
                                    title: x.intl.string(x.t.WBqMRU),
                                    error: null == Z ? void 0 : null === (e = Z.password) || void 0 === e ? void 0 : e[0],
                                    children: (0, l.jsx)(o.oil, {
                                        type: 'password',
                                        value: j,
                                        onChange: k,
                                        inputRef: P
                                    })
                                }),
                                (0, l.jsx)(o.xJW, {
                                    className: h.newPassword,
                                    title: x.intl.string(x.t['8dM4FB']),
                                    error: null !== (m = null !== (v = null == Z ? void 0 : null === (s = Z.new_password) || void 0 === s ? void 0 : s[0]) && void 0 !== v ? v : S) && void 0 !== m ? m : void 0,
                                    children: (0, l.jsx)(o.oil, {
                                        type: 'password',
                                        value: C,
                                        onChange: E
                                    })
                                }),
                                (0, l.jsx)(o.xJW, {
                                    className: h.newPassword,
                                    title: x.intl.string(x.t.iQG2KC),
                                    error: null != R ? R : void 0,
                                    children: (0, l.jsx)(o.oil, {
                                        type: 'password',
                                        value: z,
                                        onChange: N
                                    })
                                })
                            ]
                        }),
                        (0, l.jsxs)(o.mzw, {
                            children: [
                                (0, l.jsx)(o.zxk, {
                                    type: 'submit',
                                    color: o.zxk.Colors.BRAND,
                                    size: o.zxk.Sizes.MEDIUM,
                                    submitting: I === u.QZA.SUBMITTING,
                                    children: x.intl.string(x.t.i4jeWV)
                                }),
                                !0 !== f &&
                                    (0, l.jsx)(o.zxk, {
                                        className: h.cancel,
                                        look: o.zxk.Looks.LINK,
                                        color: o.zxk.Colors.PRIMARY,
                                        onClick: w,
                                        children: x.intl.string(x.t['ETE/oK'])
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
