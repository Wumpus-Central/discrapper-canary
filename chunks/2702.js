n.d(t, { default: () => R }), n(627341), n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    r = n.n(s),
    a = n(512722),
    o = n.n(a),
    u = n(954955),
    c = n.n(u),
    d = n(278074),
    m = n(442837),
    x = n(481060),
    f = n(809206),
    h = n(118012),
    p = n(219496),
    v = n(575681),
    b = n(807369),
    g = n(180529),
    _ = n(25990),
    j = n(594174),
    C = n(74538),
    k = n(981631),
    I = n(388032),
    E = n(861920),
    w = n(716722);
let N = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, d.EQ)(t)
        .with(
            {
                type: p.K.ERROR,
                message: d.P.select()
            },
            (e) =>
                (0, i.jsx)(x.Text, {
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
                (0, i.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, i.jsx)(x.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: I.intl.string(I.t.z7c4bG)
                  })
                : null
        );
};
function R(e) {
    var t;
    let { transitionState: n, onClose: s } = e,
        a = (0, m.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return o()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e;
        }),
        u = l.useMemo(() => C.ZP.canEditDiscriminator(a) && !a.isPomelo(), [a]),
        [d, R] = l.useState(!1),
        [z, S] = l.useState(a.username),
        [L, P] = l.useState(a.discriminator),
        [y, T] = l.useState(''),
        [B, F] = l.useState(!1),
        M = (0, m.e7)([_.Z], () => _.Z.getErrors()),
        W = (0, v.n)(),
        Z = a.isPomelo() && W,
        A = (0, b.a)(z, Z, !1, a.username),
        D = l.useRef(null),
        U = l.useMemo(() => {
            var e, t, n;
            return null !== (n = null == M ? void 0 : null === (e = M.username) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : null == M ? void 0 : null === (t = M.discriminator) || void 0 === t ? void 0 : t[0];
        }, [M]);
    l.useEffect(() => {
        if (n === x.Dvm.ENTERED) {
            var e;
            null === (e = D.current) || void 0 === e || e.focus();
        }
    }, [n]);
    let K = L !== a.discriminator;
    async function J(e) {
        e.preventDefault(), F(!0);
        let t = await (0, f.Mn)({
            username: z,
            discriminator: u ? L : void 0,
            password: y
        });
        F(!1), (null == t ? void 0 : t.ok) && s();
    }
    let q = l.useMemo(() => c()(R, 50), []);
    return (0, i.jsxs)(x.Y0X, {
        transitionState: n,
        children: [
            (0, i.jsxs)(x.xBx, {
                separator: !1,
                className: E.header,
                children: [
                    (0, i.jsx)(h.Z, {
                        color: h.Z.Colors.HEADER_PRIMARY,
                        size: h.Z.Sizes.SIZE_24,
                        className: E.title,
                        children: I.intl.string(I.t['m5or5+'])
                    }),
                    (0, i.jsx)(x.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: E.subtitle,
                        children: I.intl.string(I.t.SLJvy8)
                    }),
                    (0, i.jsx)(x.olH, {
                        onClick: s,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)('form', {
                onSubmit: J,
                children: [
                    (0, i.jsxs)(x.hzk, {
                        className: E.content,
                        children: [
                            (0, i.jsx)(x.xJW, {
                                title: I.intl.string(I.t.TWzdWl),
                                error: U,
                                children: (0, i.jsxs)('div', {
                                    className: r()(w.input, E.multiInput, {
                                        [w.error]: null != U,
                                        [w.focused]: d
                                    }),
                                    children: [
                                        (0, i.jsx)(x.oil, {
                                            name: 'username',
                                            'aria-label': I.intl.string(I.t.qqhR3N),
                                            value: z,
                                            maxLength: k.l$U,
                                            onChange: S,
                                            onFocus: () => q(!0),
                                            onBlur: () => q(!1),
                                            inputRef: D,
                                            className: E.multiInputFirst,
                                            inputClassName: r()(E.multiInputField, { [E.lowercase]: a.isPomelo() })
                                        }),
                                        !a.isPomelo() &&
                                            (0, i.jsx)(x.oil, {
                                                name: 'discriminator',
                                                'aria-label': I.intl.string(I.t.ozumaG),
                                                maxLength: 4,
                                                value: L,
                                                onChange: P,
                                                onFocus: () => q(!0),
                                                onBlur: () => q(!1),
                                                inputPrefix: '#',
                                                disabled: !u,
                                                className: E.multiInputLast,
                                                inputClassName: E.multiInputField
                                            })
                                    ]
                                })
                            }),
                            K
                                ? (0, i.jsx)(x.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: E.discriminatorChangeWarning,
                                      children: I.intl.string(I.t.mConUV)
                                  })
                                : null,
                            Z
                                ? (0, i.jsx)(g.Z, {
                                      show: (null == A ? void 0 : A.type) === p.K.ERROR || d,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, i.jsx)(N, {
                                          usernameStatus: A,
                                          showHint: a.isPomelo()
                                      })
                                  })
                                : null,
                            (0, i.jsx)(x.xJW, {
                                className: E.password,
                                title: I.intl.string(I.t.TmdnJy),
                                error: null == M ? void 0 : null === (t = M.password) || void 0 === t ? void 0 : t[0],
                                children: (0, i.jsx)(x.oil, {
                                    type: 'password',
                                    value: y,
                                    onChange: T
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(x.mzw, {
                        children: [
                            (0, i.jsx)(x.zxk, {
                                type: 'submit',
                                color: x.zxk.Colors.BRAND,
                                size: x.zxk.Sizes.MEDIUM,
                                submitting: B,
                                children: I.intl.string(I.t.i4jeWV)
                            }),
                            (0, i.jsx)(x.zxk, {
                                className: E.cancel,
                                look: x.zxk.Looks.LINK,
                                color: x.zxk.Colors.PRIMARY,
                                onClick: s,
                                children: I.intl.string(I.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
