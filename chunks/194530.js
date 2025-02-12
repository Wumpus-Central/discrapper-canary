n.d(t, { default: () => g }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(809206),
    o = n(118012),
    c = n(25990),
    d = n(155433),
    u = n(981631),
    h = n(388032),
    m = n(977109);
function g(e) {
    var t, n, g, x;
    let { transitionState: _, onSuccess: p, onClose: E, requirementsUpdated: C, noSkip: f = !1 } = e,
        [N, I] = s.useState(''),
        [T, S] = s.useState(''),
        [j, v] = s.useState(''),
        [b, A] = s.useState(null),
        [O, R] = s.useState(null),
        D = (0, l.e7)([c.Z], () => c.Z.getErrors()),
        P = (0, l.e7)([c.Z], () => c.Z.getFormState()),
        y = s.useRef(null);
    async function Z(e) {
        e.preventDefault(), (0, a.b9)();
        let t = !1;
        if (('' === T ? (A(h.intl.string(h.t['/7/oPT'])), (t = !0)) : A(null), T !== j ? (R(h.intl.string(h.t.IEKYZ2)), (t = !0)) : R(null), t)) return;
        let n = await (0, a.Mn)({
            password: N,
            newPassword: T
        });
        if (null == n ? void 0 : n.ok) p();
        else {
            var i;
            (null == n ? void 0 : null === (i = n.body) || void 0 === i ? void 0 : i.username) != null && (0, d.P)();
        }
    }
    return (
        s.useEffect(() => {
            if (_ === r.Dvm.ENTERED) {
                var e;
                null === (e = y.current) || void 0 === e || e.focus();
            }
        }, [_]),
        (0, i.jsxs)(r.Y0X, {
            transitionState: _,
            children: [
                (0, i.jsxs)(r.xBx, {
                    separator: !1,
                    className: m.header,
                    children: [
                        (0, i.jsx)(o.Z, {
                            color: o.Z.Colors.HEADER_PRIMARY,
                            size: o.Z.Sizes.SIZE_24,
                            className: m.title,
                            children: h.intl.string(h.t['geta7+'])
                        }),
                        (0, i.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: m.subtitle,
                            children: C ? h.intl.string(h.t['37iHbW']) : h.intl.string(h.t.iOurYm)
                        }),
                        !0 !== f &&
                            (0, i.jsx)(r.olH, {
                                onClick: E,
                                className: m.modalCloseButton
                            })
                    ]
                }),
                (0, i.jsxs)('form', {
                    onSubmit: Z,
                    children: [
                        (0, i.jsxs)(r.hzk, {
                            className: m.content,
                            children: [
                                (0, i.jsx)(r.xJW, {
                                    title: h.intl.string(h.t.WBqMRU),
                                    error: null == D ? void 0 : null === (t = D.password) || void 0 === t ? void 0 : t[0],
                                    children: (0, i.jsx)(r.oil, {
                                        type: 'password',
                                        value: N,
                                        onChange: I,
                                        inputRef: y
                                    })
                                }),
                                (0, i.jsx)(r.xJW, {
                                    className: m.newPassword,
                                    title: h.intl.string(h.t['8dM4FB']),
                                    error: null !== (x = null !== (g = null == D ? void 0 : null === (n = D.new_password) || void 0 === n ? void 0 : n[0]) && void 0 !== g ? g : b) && void 0 !== x ? x : void 0,
                                    children: (0, i.jsx)(r.oil, {
                                        type: 'password',
                                        value: T,
                                        onChange: S
                                    })
                                }),
                                (0, i.jsx)(r.xJW, {
                                    className: m.newPassword,
                                    title: h.intl.string(h.t.iQG2KC),
                                    error: null != O ? O : void 0,
                                    children: (0, i.jsx)(r.oil, {
                                        type: 'password',
                                        value: j,
                                        onChange: v
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(r.mzw, {
                            children: [
                                (0, i.jsx)(r.zxk, {
                                    type: 'submit',
                                    color: r.zxk.Colors.BRAND,
                                    size: r.zxk.Sizes.MEDIUM,
                                    submitting: P === u.QZA.SUBMITTING,
                                    children: h.intl.string(h.t.i4jeWV)
                                }),
                                !0 !== f &&
                                    (0, i.jsx)(r.zxk, {
                                        className: m.cancel,
                                        look: r.zxk.Looks.LINK,
                                        color: r.zxk.Colors.PRIMARY,
                                        onClick: E,
                                        children: h.intl.string(h.t['ETE/oK'])
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
