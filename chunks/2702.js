n.d(t, { default: () => P }), n(314940), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(512722),
    l = n.n(a),
    u = n(954955),
    d = n.n(u),
    c = n(278074),
    g = n(442837),
    m = n(481060),
    f = n(809206),
    E = n(118012),
    h = n(219496),
    p = n(575681),
    S = n(807369),
    _ = n(180529),
    v = n(25990),
    x = n(594174),
    T = n(74538),
    O = n(981631),
    b = n(388032),
    y = n(238861),
    M = n(953100);
let L = (e) => {
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
                      children: b.intl.string(b.t.z7c4bG)
                  })
                : null
        );
};
function P(e) {
    var t;
    let { transitionState: n, onClose: s } = e,
        a = (0, g.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return l()(null != e, 'ChangeUsernameModal: currentUser cannot be undefined'), e;
        }),
        u = r.useMemo(() => T.ZP.canEditDiscriminator(a) && !a.isPomelo(), [a]),
        [c, P] = r.useState(!1),
        [C, R] = r.useState(a.username),
        [N, k] = r.useState(a.discriminator),
        [A, I] = r.useState(''),
        [U, w] = r.useState(!1),
        Z = (0, g.e7)([v.Z], () => v.Z.getErrors()),
        j = (0, p.n)(),
        G = a.isPomelo() && j,
        F = (0, S.a)(C, G, !1, a.username),
        D = r.useRef(null),
        z = r.useMemo(() => {
            var e, t, n;
            return null != (n = null == Z || null == (e = Z.username) ? void 0 : e[0]) ? n : null == Z || null == (t = Z.discriminator) ? void 0 : t[0];
        }, [Z]);
    r.useEffect(() => {
        if (n === m.Dvm.ENTERED) {
            var e;
            null == (e = D.current) || e.focus();
        }
    }, [n]);
    let B = N !== a.discriminator;
    async function W(e) {
        e.preventDefault(), w(!0);
        let t = await (0, f.Mn)({
            username: C,
            discriminator: u ? N : void 0,
            password: A
        });
        w(!1), (null == t ? void 0 : t.ok) && s();
    }
    let H = r.useMemo(() => d()(P, 50), []);
    return (0, i.jsxs)(m.Y0X, {
        transitionState: n,
        parentComponent: 'ChangeUsernameModal',
        children: [
            (0, i.jsxs)(m.xBx, {
                separator: !1,
                className: y.header,
                children: [
                    (0, i.jsx)(E.Z, {
                        color: E.Z.Colors.HEADER_PRIMARY,
                        size: E.Z.Sizes.SIZE_24,
                        className: y.title,
                        children: b.intl.string(b.t['m5or5+'])
                    }),
                    (0, i.jsx)(m.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: y.subtitle,
                        children: b.intl.string(b.t.SLJvy8)
                    }),
                    (0, i.jsx)(m.olH, {
                        onClick: s,
                        className: y.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)('form', {
                onSubmit: W,
                children: [
                    (0, i.jsxs)(m.hzk, {
                        className: y.content,
                        children: [
                            (0, i.jsx)(m.xJW, {
                                title: b.intl.string(b.t.TWzdWl),
                                error: z,
                                children: (0, i.jsxs)('div', {
                                    className: o()(M.input, y.multiInput, {
                                        [M.error]: null != z,
                                        [M.focused]: c
                                    }),
                                    children: [
                                        (0, i.jsx)(m.oil, {
                                            name: 'username',
                                            'aria-label': b.intl.string(b.t.qqhR3N),
                                            value: C,
                                            maxLength: O.l$U,
                                            onChange: R,
                                            onFocus: () => H(!0),
                                            onBlur: () => H(!1),
                                            inputRef: D,
                                            className: y.multiInputFirst,
                                            inputClassName: o()(y.multiInputField, { [y.lowercase]: a.isPomelo() })
                                        }),
                                        !a.isPomelo() &&
                                            (0, i.jsx)(m.oil, {
                                                name: 'discriminator',
                                                'aria-label': b.intl.string(b.t.ozumaG),
                                                maxLength: 4,
                                                value: N,
                                                onChange: k,
                                                onFocus: () => H(!0),
                                                onBlur: () => H(!1),
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
                                      children: b.intl.string(b.t.mConUV)
                                  })
                                : null,
                            G
                                ? (0, i.jsx)(_.Z, {
                                      show: (null == F ? void 0 : F.type) === h.K.ERROR || c,
                                      top: 8,
                                      bottom: 4,
                                      children: (0, i.jsx)(L, {
                                          usernameStatus: F,
                                          showHint: a.isPomelo()
                                      })
                                  })
                                : null,
                            (0, i.jsx)(m.xJW, {
                                className: y.password,
                                title: b.intl.string(b.t.TmdnJy),
                                error: null == Z || null == (t = Z.password) ? void 0 : t[0],
                                children: (0, i.jsx)(m.oil, {
                                    type: 'password',
                                    value: A,
                                    onChange: I
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
                                submitting: U,
                                children: b.intl.string(b.t.i4jeWV)
                            }),
                            (0, i.jsx)(m.zxk, {
                                className: y.cancel,
                                look: m.zxk.Looks.LINK,
                                color: m.zxk.Colors.PRIMARY,
                                onClick: s,
                                children: b.intl.string(b.t['ETE/oK'])
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
