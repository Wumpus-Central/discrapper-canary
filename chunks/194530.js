n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    }),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(809206),
    o = n(118012),
    c = n(25990),
    d = n(155433),
    u = n(981631),
    m = n(388032),
    g = n(998976);
function h(e) {
    var t, n, h, p;
    let { transitionState: x, onSuccess: f, onClose: _, requirementsUpdated: E, noSkip: C = !1 } = e,
        [T, S] = s.useState(''),
        [b, I] = s.useState(''),
        [N, v] = s.useState(''),
        [A, j] = s.useState(null),
        [R, O] = s.useState(null),
        P = (0, r.e7)([c.Z], () => c.Z.getErrors()),
        y = (0, r.e7)([c.Z], () => c.Z.getFormState()),
        D = s.useRef(null);
    async function B(e) {
        e.preventDefault(), (0, l.b9)();
        let t = !1;
        if (('' === b ? (j(m.intl.string(m.t['/7/oPT'])), (t = !0)) : j(null), b !== N ? (O(m.intl.string(m.t.IEKYZ2)), (t = !0)) : O(null), t)) return;
        let n = await (0, l.Mn)({
            password: T,
            newPassword: b
        });
        if (null == n ? void 0 : n.ok) f();
        else {
            var i;
            (null == n ? void 0 : null === (i = n.body) || void 0 === i ? void 0 : i.username) != null && (0, d.P)();
        }
    }
    return (
        s.useEffect(() => {
            if (x === a.ModalTransitionState.ENTERED) {
                var e;
                null === (e = D.current) || void 0 === e || e.focus();
            }
        }, [x]),
        (0, i.jsxs)(a.ModalRoot, {
            transitionState: x,
            children: [
                (0, i.jsxs)(a.ModalHeader, {
                    separator: !1,
                    className: g.header,
                    children: [
                        (0, i.jsx)(o.Z, {
                            color: o.Z.Colors.HEADER_PRIMARY,
                            size: o.Z.Sizes.SIZE_24,
                            className: g.title,
                            children: m.intl.string(m.t['geta7+'])
                        }),
                        (0, i.jsx)(a.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: g.subtitle,
                            children: E ? m.intl.string(m.t['37iHbW']) : m.intl.string(m.t.iOurYm)
                        }),
                        !0 !== C &&
                            (0, i.jsx)(a.ModalCloseButton, {
                                onClick: _,
                                className: g.modalCloseButton
                            })
                    ]
                }),
                (0, i.jsxs)('form', {
                    onSubmit: B,
                    children: [
                        (0, i.jsxs)(a.ModalContent, {
                            className: g.content,
                            children: [
                                (0, i.jsx)(a.FormItem, {
                                    title: m.intl.string(m.t.WBqMRU),
                                    error: null == P ? void 0 : null === (t = P.password) || void 0 === t ? void 0 : t[0],
                                    children: (0, i.jsx)(a.TextInput, {
                                        type: 'password',
                                        value: T,
                                        onChange: S,
                                        inputRef: D
                                    })
                                }),
                                (0, i.jsx)(a.FormItem, {
                                    className: g.newPassword,
                                    title: m.intl.string(m.t['8dM4FB']),
                                    error: null !== (p = null !== (h = null == P ? void 0 : null === (n = P.new_password) || void 0 === n ? void 0 : n[0]) && void 0 !== h ? h : A) && void 0 !== p ? p : void 0,
                                    children: (0, i.jsx)(a.TextInput, {
                                        type: 'password',
                                        value: b,
                                        onChange: I
                                    })
                                }),
                                (0, i.jsx)(a.FormItem, {
                                    className: g.newPassword,
                                    title: m.intl.string(m.t.iQG2KC),
                                    error: null != R ? R : void 0,
                                    children: (0, i.jsx)(a.TextInput, {
                                        type: 'password',
                                        value: N,
                                        onChange: v
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.ModalFooter, {
                            children: [
                                (0, i.jsx)(a.Button, {
                                    type: 'submit',
                                    color: a.Button.Colors.BRAND,
                                    size: a.Button.Sizes.MEDIUM,
                                    submitting: y === u.QZA.SUBMITTING,
                                    children: m.intl.string(m.t.i4jeWV)
                                }),
                                !0 !== C &&
                                    (0, i.jsx)(a.Button, {
                                        className: g.cancel,
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
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
