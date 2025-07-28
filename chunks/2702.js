(n.d(t, { default: () => E }), n(314940), n(388685));
var a = n(255367),
    s = n(73800),
    i = n(120356),
    l = n.n(i),
    r = n(512722),
    u = n.n(r),
    o = n(954955),
    c = n.n(o),
    d = n(278074),
    m = n(442837),
    h = n(755721),
    x = n(481060),
    f = n(809206),
    p = n(219496),
    b = n(575681),
    g = n(807369),
    v = n(180529),
    j = n(25990),
    _ = n(594174),
    C = n(74538),
    w = n(981631),
    U = n(388032),
    k = n(238861),
    I = n(165005);
let N = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, d.EQ)(t)
        .with(
            {
                type: p.K.ERROR,
                message: d.P.select()
            },
            (e) =>
                (0, a.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: e
                })
        )
        .with(
            {
                type: p.K.AVAILABLE,
                message: d.P.select()
            },
            (e) =>
                (0, a.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-feedback-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, a.jsx)(x.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-default',
                      children: U.intl.string(U.t.z7c4bG)
                  })
                : null
        );
};
function E(e) {
    var t;
    let { transitionState: n, onClose: i } = e,
        r = (0, m.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return (u()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e);
        }),
        o = s.useMemo(() => C.ZP.canEditDiscriminator(r) && !r.hasUniqueUsername(), [r]),
        [d, E] = s.useState(!1),
        [y, L] = s.useState(r.username),
        [R, S] = s.useState(r.discriminator),
        [T, q] = s.useState(''),
        [F, B] = s.useState(!1),
        W = (0, m.e7)([j.Z], () => j.Z.getErrors()),
        z = (0, b.n)(),
        M = r.hasUniqueUsername() && z,
        D = (0, g.a)(y, M, !1, r.username),
        J = s.useRef(null),
        K = s.useMemo(() => {
            var e, t, n;
            return null != (n = null == W || null == (e = W.username) ? void 0 : e[0]) ? n : null == W || null == (t = W.discriminator) ? void 0 : t[0];
        }, [W]);
    s.useEffect(() => {
        if (n === x.Dvm.ENTERED) {
            var e;
            null == (e = J.current) || e.focus();
        }
    }, [n]);
    let Z = R !== r.discriminator;
    async function A(e) {
        (e.preventDefault(), B(!0));
        let t = await (0, f.Mn)({
            username: y,
            discriminator: o ? R : void 0,
            password: T
        });
        (B(!1), (null == t ? void 0 : t.ok) && i());
    }
    let P = s.useMemo(() => c()(E, 50), []);
    return (0, a.jsxs)(x.Y0X, {
        transitionState: n,
        parentComponent: 'ChangeUsernameModal',
        children: [
            (0, a.jsxs)(x.xBx, {
                separator: !1,
                className: k.header,
                children: [
                    (0, a.jsx)(x.X6q, {
                        color: 'header-primary',
                        variant: 'heading-xl/bold',
                        className: k.title,
                        children: U.intl.string(U.t['m5or5+'])
                    }),
                    (0, a.jsx)(x.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: k.subtitle,
                        children: U.intl.string(U.t.SLJvy8)
                    }),
                    (0, a.jsx)(x.olH, {
                        onClick: i,
                        className: k.modalCloseButton
                    })
                ]
            }),
            (0, a.jsxs)('form', {
                onSubmit: A,
                children: [
                    (0, a.jsxs)(x.hzk, {
                        className: k.content,
                        children: [
                            (0, a.jsx)(x.xJW, {
                                title: U.intl.string(U.t.TWzdWl),
                                error: K,
                                children: (0, a.jsxs)('div', {
                                    className: l()(I.input, k.multiInput, {
                                        [I.error]: null != K,
                                        [I.focused]: d
                                    }),
                                    children: [
                                        (0, a.jsx)(h.Is, {
                                            name: 'username',
                                            'aria-label': U.intl.string(U.t.qqhR3N),
                                            value: y,
                                            maxLength: w.l$U,
                                            onChange: L,
                                            onFocus: () => P(!0),
                                            onBlur: () => P(!1),
                                            inputRef: J,
                                            className: k.multiInputFirst,
                                            inputClassName: l()(k.multiInputField, { [k.lowercase]: r.hasUniqueUsername() })
                                        }),
                                        !r.hasUniqueUsername() &&
                                            (0, a.jsx)(h.Is, {
                                                name: 'discriminator',
                                                'aria-label': U.intl.string(U.t.ozumaG),
                                                maxLength: 4,
                                                value: R,
                                                onChange: S,
                                                onFocus: () => P(!0),
                                                onBlur: () => P(!1),
                                                disabled: !o,
                                                className: k.multiInputLast,
                                                inputClassName: k.multiInputField
                                            })
                                    ]
                                })
                            }),
                            Z
                                ? (0, a.jsx)(x.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: k.discriminatorChangeWarning,
                                      children: U.intl.string(U.t.mConUV)
                                  })
                                : null,
                            M
                                ? (0, a.jsx)(v.Z, {
                                      show: (null == D ? void 0 : D.type) === p.K.ERROR || d,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, a.jsx)(N, {
                                          usernameStatus: D,
                                          showHint: r.hasUniqueUsername()
                                      })
                                  })
                                : null,
                            (0, a.jsx)(x.xJW, {
                                className: k.password,
                                title: U.intl.string(U.t.TmdnJy),
                                error: null == W || null == (t = W.password) ? void 0 : t[0],
                                children: (0, a.jsx)(x.oil, {
                                    type: 'password',
                                    value: T,
                                    onChange: q
                                })
                            })
                        ]
                    }),
                    (0, a.jsxs)(x.mzw, {
                        children: [
                            (0, a.jsx)(x.zxk, {
                                variant: 'primary',
                                text: U.intl.string(U.t.i4jeWV),
                                type: 'submit',
                                loading: F
                            }),
                            (0, a.jsx)('div', {
                                'data-button-hoisted-classname-wrapper': !0,
                                className: k.cancel,
                                children: (0, a.jsx)(x.zxk, {
                                    variant: 'secondary',
                                    text: U.intl.string(U.t['ETE/oK']),
                                    onClick: i
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
