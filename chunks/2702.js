n.d(t, { default: () => w }), n(627341), n(47120);
var s = n(200651),
    l = n(192379),
    i = n(120356),
    r = n.n(i),
    a = n(512722),
    o = n.n(a),
    u = n(954955),
    c = n.n(u),
    m = n(278074),
    d = n(442837),
    x = n(481060),
    f = n(809206),
    h = n(118012),
    p = n(219496),
    b = n(575681),
    g = n(807369),
    N = n(180529),
    v = n(25990),
    _ = n(594174),
    j = n(74538),
    C = n(981631),
    k = n(388032),
    I = n(238861),
    E = n(953100);
let W = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, m.EQ)(t)
        .with(
            {
                type: p.K.ERROR,
                message: m.P.select()
            },
            (e) =>
                (0, s.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: e
                })
        )
        .with(
            {
                type: p.K.AVAILABLE,
                message: m.P.select()
            },
            (e) =>
                (0, s.jsx)(x.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, s.jsx)(x.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: k.NW.string(k.t.z7c4bG)
                  })
                : null
        );
};
function w(e) {
    var t;
    let { transitionState: n, onClose: i } = e,
        a = (0, d.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return o()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e;
        }),
        u = l.useMemo(() => j.ZP.canEditDiscriminator(a) && !a.isPomelo(), [a]),
        [m, w] = l.useState(!1),
        [R, z] = l.useState(a.username),
        [S, L] = l.useState(a.discriminator),
        [P, y] = l.useState(''),
        [T, B] = l.useState(!1),
        F = (0, d.e7)([v.Z], () => v.Z.getErrors()),
        M = (0, b.n)(),
        Z = a.isPomelo() && M,
        A = (0, g.a)(R, Z, !1, a.username),
        D = l.useRef(null),
        U = l.useMemo(() => {
            var e, t, n;
            return null != (n = null == F || null == (e = F.username) ? void 0 : e[0]) ? n : null == F || null == (t = F.discriminator) ? void 0 : t[0];
        }, [F]);
    l.useEffect(() => {
        if (n === x.Dvm.ENTERED) {
            var e;
            null == (e = D.current) || e.focus();
        }
    }, [n]);
    let K = S !== a.discriminator;
    async function J(e) {
        e.preventDefault(), B(!0);
        let t = await (0, f.Mn)({
            username: R,
            discriminator: u ? S : void 0,
            password: P
        });
        B(!1), (null == t ? void 0 : t.ok) && i();
    }
    let q = l.useMemo(() => c()(w, 50), []);
    return (0, s.jsxs)(x.Y0X, {
        transitionState: n,
        children: [
            (0, s.jsxs)(x.xBx, {
                separator: !1,
                className: I.header,
                children: [
                    (0, s.jsx)(h.Z, {
                        color: h.Z.Colors.HEADER_PRIMARY,
                        size: h.Z.Sizes.SIZE_24,
                        className: I.title,
                        children: k.NW.string(k.t['m5or5+'])
                    }),
                    (0, s.jsx)(x.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: I.subtitle,
                        children: k.NW.string(k.t.SLJvy8)
                    }),
                    (0, s.jsx)(x.olH, {
                        onClick: i,
                        className: I.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)('form', {
                onSubmit: J,
                children: [
                    (0, s.jsxs)(x.hzk, {
                        className: I.content,
                        children: [
                            (0, s.jsx)(x.xJW, {
                                title: k.NW.string(k.t.TWzdWl),
                                error: U,
                                children: (0, s.jsxs)('div', {
                                    className: r()(E.input, I.multiInput, {
                                        [E.error]: null != U,
                                        [E.focused]: m
                                    }),
                                    children: [
                                        (0, s.jsx)(x.oil, {
                                            name: 'username',
                                            'aria-label': k.NW.string(k.t.qqhR3N),
                                            value: R,
                                            maxLength: C.l$U,
                                            onChange: z,
                                            onFocus: () => q(!0),
                                            onBlur: () => q(!1),
                                            inputRef: D,
                                            className: I.multiInputFirst,
                                            inputClassName: r()(I.multiInputField, { [I.lowercase]: a.isPomelo() })
                                        }),
                                        !a.isPomelo() &&
                                            (0, s.jsx)(x.oil, {
                                                name: 'discriminator',
                                                'aria-label': k.NW.string(k.t.ozumaG),
                                                maxLength: 4,
                                                value: S,
                                                onChange: L,
                                                onFocus: () => q(!0),
                                                onBlur: () => q(!1),
                                                inputPrefix: '#',
                                                disabled: !u,
                                                className: I.multiInputLast,
                                                inputClassName: I.multiInputField
                                            })
                                    ]
                                })
                            }),
                            K
                                ? (0, s.jsx)(x.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: I.discriminatorChangeWarning,
                                      children: k.NW.string(k.t.mConUV)
                                  })
                                : null,
                            Z
                                ? (0, s.jsx)(N.Z, {
                                      show: (null == A ? void 0 : A.type) === p.K.ERROR || m,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, s.jsx)(W, {
                                          usernameStatus: A,
                                          showHint: a.isPomelo()
                                      })
                                  })
                                : null,
                            (0, s.jsx)(x.xJW, {
                                className: I.password,
                                title: k.NW.string(k.t.TmdnJy),
                                error: null == F || null == (t = F.password) ? void 0 : t[0],
                                children: (0, s.jsx)(x.oil, {
                                    type: 'password',
                                    value: P,
                                    onChange: y
                                })
                            })
                        ]
                    }),
                    (0, s.jsxs)(x.mzw, {
                        children: [
                            (0, s.jsx)(x.zxk, {
                                type: 'submit',
                                color: x.zxk.Colors.BRAND,
                                size: x.zxk.Sizes.MEDIUM,
                                submitting: T,
                                children: k.NW.string(k.t.i4jeWV)
                            }),
                            (0, s.jsx)(x.zxk, {
                                className: I.cancel,
                                look: x.zxk.Looks.LINK,
                                color: x.zxk.Colors.PRIMARY,
                                onClick: i,
                                children: k.NW.string(k.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
