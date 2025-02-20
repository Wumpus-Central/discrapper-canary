s.d(t, { default: () => v }), s(47120);
var l = s(200651),
    n = s(192379),
    o = s(442837),
    i = s(481060),
    r = s(809206),
    a = s(118012),
    d = s(25990),
    c = s(155433),
    u = s(981631),
    x = s(388032),
    h = s(518347);
function v(e) {
    var t, s, v, N;
    let { transitionState: m, onSuccess: p, onClose: g, requirementsUpdated: w, noSkip: _ = !1 } = e,
        [f, j] = n.useState(''),
        [W, k] = n.useState(''),
        [C, E] = n.useState(''),
        [z, S] = n.useState(null),
        [b, R] = n.useState(null),
        T = (0, o.e7)([d.Z], () => d.Z.getErrors()),
        Z = (0, o.e7)([d.Z], () => d.Z.getFormState()),
        I = n.useRef(null);
    async function P(e) {
        e.preventDefault(), (0, r.b9)();
        let t = !1;
        if (('' === W ? (S(x.NW.string(x.t['/7/oPT'])), (t = !0)) : S(null), W !== C ? (R(x.NW.string(x.t.IEKYZ2)), (t = !0)) : R(null), t)) return;
        let s = await (0, r.Mn)({
            password: f,
            newPassword: W
        });
        if (null == s ? void 0 : s.ok) p();
        else {
            var l;
            (null == s ? void 0 : null === (l = s.body) || void 0 === l ? void 0 : l.username) != null && (0, c.P)();
        }
    }
    return (
        n.useEffect(() => {
            if (m === i.Dvm.ENTERED) {
                var e;
                null === (e = I.current) || void 0 === e || e.focus();
            }
        }, [m]),
        (0, l.jsxs)(i.Y0X, {
            transitionState: m,
            children: [
                (0, l.jsxs)(i.xBx, {
                    separator: !1,
                    className: h.header,
                    children: [
                        (0, l.jsx)(a.Z, {
                            color: a.Z.Colors.HEADER_PRIMARY,
                            size: a.Z.Sizes.SIZE_24,
                            className: h.title,
                            children: x.NW.string(x.t['geta7+'])
                        }),
                        (0, l.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: h.subtitle,
                            children: w ? x.NW.string(x.t['37iHbW']) : x.NW.string(x.t.iOurYm)
                        }),
                        !0 !== _ &&
                            (0, l.jsx)(i.olH, {
                                onClick: g,
                                className: h.modalCloseButton
                            })
                    ]
                }),
                (0, l.jsxs)('form', {
                    onSubmit: P,
                    children: [
                        (0, l.jsxs)(i.hzk, {
                            className: h.content,
                            children: [
                                (0, l.jsx)(i.xJW, {
                                    title: x.NW.string(x.t.WBqMRU),
                                    error: null == T ? void 0 : null === (t = T.password) || void 0 === t ? void 0 : t[0],
                                    children: (0, l.jsx)(i.oil, {
                                        type: 'password',
                                        value: f,
                                        onChange: j,
                                        inputRef: I
                                    })
                                }),
                                (0, l.jsx)(i.xJW, {
                                    className: h.newPassword,
                                    title: x.NW.string(x.t['8dM4FB']),
                                    error: null !== (N = null !== (v = null == T ? void 0 : null === (s = T.new_password) || void 0 === s ? void 0 : s[0]) && void 0 !== v ? v : z) && void 0 !== N ? N : void 0,
                                    children: (0, l.jsx)(i.oil, {
                                        type: 'password',
                                        value: W,
                                        onChange: k
                                    })
                                }),
                                (0, l.jsx)(i.xJW, {
                                    className: h.newPassword,
                                    title: x.NW.string(x.t.iQG2KC),
                                    error: null != b ? b : void 0,
                                    children: (0, l.jsx)(i.oil, {
                                        type: 'password',
                                        value: C,
                                        onChange: E
                                    })
                                })
                            ]
                        }),
                        (0, l.jsxs)(i.mzw, {
                            children: [
                                (0, l.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.BRAND,
                                    size: i.zxk.Sizes.MEDIUM,
                                    submitting: Z === u.QZA.SUBMITTING,
                                    children: x.NW.string(x.t.i4jeWV)
                                }),
                                !0 !== _ &&
                                    (0, l.jsx)(i.zxk, {
                                        className: h.cancel,
                                        look: i.zxk.Looks.LINK,
                                        color: i.zxk.Colors.PRIMARY,
                                        onClick: g,
                                        children: x.NW.string(x.t['ETE/oK'])
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
