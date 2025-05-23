n.d(t, { default: () => L }), n(314940), n(388685);
var i = n(255367),
    s = n(73800),
    a = n(120356),
    r = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(954955),
    d = n.n(u),
    c = n(278074),
    g = n(442837),
    m = n(481060),
    f = n(809206),
    E = n(118012),
    h = n(219496),
    _ = n(575681),
    p = n(807369),
    v = n(180529),
    S = n(25990),
    b = n(594174),
    x = n(74538),
    T = n(981631),
    O = n(388032),
    y = n(238861),
    k = n(953100);
let M = (e) => {
    let { usernameStatus: t, showHint: n } = e;
    return (0, c.EQ)(t)
        .with(
            {
                type: h.K.ERROR,
                message: c.P.select()
            },
            (e) =>
                (0, i.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-danger',
                    children: e
                })
        )
        .with(
            {
                type: h.K.AVAILABLE,
                message: c.P.select()
            },
            (e) =>
                (0, i.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-positive',
                    children: e
                })
        )
        .otherwise(() =>
            n
                ? (0, i.jsx)(m.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: O.intl.string(O.t.z7c4bG)
                  })
                : null
        );
};
function L(e) {
    var t;
    let { transitionState: n, onClose: a } = e,
        o = (0, g.e7)([b.default], () => {
            let e = b.default.getCurrentUser();
            return l()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e;
        }),
        u = s.useMemo(() => x.ZP.canEditDiscriminator(o) && !o.isPomelo(), [o]),
        [c, L] = s.useState(!1),
        [P, R] = s.useState(o.username),
        [C, U] = s.useState(o.discriminator),
        [N, A] = s.useState(''),
        [I, w] = s.useState(!1),
        Z = (0, g.e7)([S.Z], () => S.Z.getErrors()),
        j = (0, _.n)(),
        G = o.isPomelo() && j,
        F = (0, p.a)(P, G, !1, o.username),
        D = s.useRef(null),
        z = s.useMemo(() => {
            var e, t, n;
            return null != (n = null == Z || null == (e = Z.username) ? void 0 : e[0]) ? n : null == Z || null == (t = Z.discriminator) ? void 0 : t[0];
        }, [Z]);
    s.useEffect(() => {
        if (n === m.Dvm.ENTERED) {
            var e;
            null == (e = D.current) || e.focus();
        }
    }, [n]);
    let B = C !== o.discriminator;
    async function q(e) {
        e.preventDefault(), w(!0);
        let t = await (0, f.Mn)({
            username: P,
            discriminator: u ? C : void 0,
            password: N
        });
        w(!1), (null == t ? void 0 : t.ok) && a();
    }
    let W = s.useMemo(() => d()(L, 50), []);
    return (0, i.jsxs)(m.Y0X, {
        transitionState: n,
        children: [
            (0, i.jsxs)(m.xBx, {
                separator: !1,
                className: y.header,
                children: [
                    (0, i.jsx)(E.Z, {
                        color: E.Z.Colors.HEADER_PRIMARY,
                        size: E.Z.Sizes.SIZE_24,
                        className: y.title,
                        children: O.intl.string(O.t['m5or5+'])
                    }),
                    (0, i.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: y.subtitle,
                        children: O.intl.string(O.t.SLJvy8)
                    }),
                    (0, i.jsx)(m.olH, {
                        onClick: a,
                        className: y.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)('form', {
                onSubmit: q,
                children: [
                    (0, i.jsxs)(m.hzk, {
                        className: y.content,
                        children: [
                            (0, i.jsx)(m.xJW, {
                                title: O.intl.string(O.t.TWzdWl),
                                error: z,
                                children: (0, i.jsxs)('div', {
                                    className: r()(k.input, y.multiInput, {
                                        [k.error]: null != z,
                                        [k.focused]: c
                                    }),
                                    children: [
                                        (0, i.jsx)(m.oil, {
                                            name: 'username',
                                            'aria-label': O.intl.string(O.t.qqhR3N),
                                            value: P,
                                            maxLength: T.l$U,
                                            onChange: R,
                                            onFocus: () => W(!0),
                                            onBlur: () => W(!1),
                                            inputRef: D,
                                            className: y.multiInputFirst,
                                            inputClassName: r()(y.multiInputField, { [y.lowercase]: o.isPomelo() })
                                        }),
                                        !o.isPomelo() &&
                                            (0, i.jsx)(m.oil, {
                                                name: 'discriminator',
                                                'aria-label': O.intl.string(O.t.ozumaG),
                                                maxLength: 4,
                                                value: C,
                                                onChange: U,
                                                onFocus: () => W(!0),
                                                onBlur: () => W(!1),
                                                inputPrefix: '#',
                                                disabled: !u,
                                                className: y.multiInputLast,
                                                inputClassName: y.multiInputField
                                            })
                                    ]
                                })
                            }),
                            B
                                ? (0, i.jsx)(m.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: y.discriminatorChangeWarning,
                                      children: O.intl.string(O.t.mConUV)
                                  })
                                : null,
                            G
                                ? (0, i.jsx)(v.Z, {
                                      show: (null == F ? void 0 : F.type) === h.K.ERROR || c,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, i.jsx)(M, {
                                          usernameStatus: F,
                                          showHint: o.isPomelo()
                                      })
                                  })
                                : null,
                            (0, i.jsx)(m.xJW, {
                                className: y.password,
                                title: O.intl.string(O.t.TmdnJy),
                                error: null == Z || null == (t = Z.password) ? void 0 : t[0],
                                children: (0, i.jsx)(m.oil, {
                                    type: 'password',
                                    value: N,
                                    onChange: A
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(m.mzw, {
                        children: [
                            (0, i.jsx)(m.zxk, {
                                type: 'submit',
                                color: m.zxk.Colors.BRAND,
                                size: m.zxk.Sizes.MEDIUM,
                                submitting: I,
                                children: O.intl.string(O.t.i4jeWV)
                            }),
                            (0, i.jsx)(m.zxk, {
                                className: y.cancel,
                                look: m.zxk.Looks.LINK,
                                color: m.zxk.Colors.PRIMARY,
                                onClick: a,
                                children: O.intl.string(O.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
