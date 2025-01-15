n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    a = n(192379),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(401430),
    u = n(155268),
    m = n(600164),
    g = n(313201),
    h = n(695103),
    p = n(388032),
    x = n(840891),
    f = n(232186);
let _ = /^\d+$|^$/;
((s = i || (i = {})).LOCALHOST = 'localhost'), (s.PROXY = 'proxy');
function E(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: i,
            authorizationError: s,
            authorizing: E
        } = (0, l.cj)([h.Z], () => ({
            authorizedApplicationId: h.Z.testModeApplicationId,
            authorizationError: h.Z.error,
            authorizing: h.Z.isFetchingAuthorization
        })),
        [C, T] = a.useState(null != i ? i : ''),
        [S, b] = a.useState('8080'),
        [I, N] = a.useState('localhost'),
        v = (0, g.Dt)(),
        A = _.test(C);
    async function j() {
        d.q$();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case 'localhost':
                    return 'https://localhost:'.concat(t);
                case 'proxy':
                    return (0, u.Z)(n);
            }
        })(I, S, C);
        null != (await d.Wt(C, e)) && t();
    }
    a.useEffect(() => () => c.Z.wait(() => d.q$()), []);
    let R = null != i && i === C,
        O = R
            ? function () {
                  d.mc(), T(''), N(null);
              }
            : j;
    return (0, r.jsxs)(o.ModalRoot, {
        'aria-labelledby': v,
        transitionState: n,
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                justify: m.Z.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(o.FormTitle, {
                        id: v,
                        tag: 'h1',
                        className: f.marginReset,
                        children: p.intl.string(p.t.f8fzk5)
                    }),
                    (0, r.jsx)(o.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, r.jsxs)(o.ModalContent, {
                className: x.modalContent,
                children: [
                    (0, r.jsx)(o.FormText, {
                        className: f.marginBottom20,
                        type: o.FormText.Types.DESCRIPTION,
                        children: p.intl.string(p.t.a6Vilp)
                    }),
                    null == s
                        ? null
                        : (0, r.jsx)(o.FormErrorBlock, {
                              className: f.marginBottom20,
                              children: s
                          }),
                    (0, r.jsx)('form', {
                        onSubmit: (e) => {
                            e.preventDefault(), O();
                        },
                        children: (0, r.jsxs)(m.Z, {
                            direction: m.Z.Direction.VERTICAL,
                            align: m.Z.Align.START,
                            children: [
                                (0, r.jsx)(o.FormItem, {
                                    className: x.inputWrapper,
                                    title: p.intl.string(p.t.P6TzgI),
                                    required: !0,
                                    children: (0, r.jsx)(o.TextInput, {
                                        value: C,
                                        maxLength: 19,
                                        error: A ? null : p.intl.string(p.t.gPNgKC),
                                        onChange: function (e) {
                                            T(e);
                                        },
                                        disabled: E
                                    })
                                }),
                                (0, r.jsx)(o.FormItem, {
                                    className: x.inputWrapper,
                                    title: p.intl.string(p.t['/GTqXF']),
                                    children: (0, r.jsx)(o.SingleSelect, {
                                        isDisabled: !A || '' === C,
                                        value: I,
                                        options: [
                                            {
                                                value: 'localhost',
                                                label: p.intl.string(p.t['+Y9Y6u']),
                                                key: 'localhost'
                                            },
                                            {
                                                value: 'proxy',
                                                label: p.intl.string(p.t.uaksyc),
                                                key: 'proxy'
                                            }
                                        ],
                                        onChange: function (e) {
                                            N(e);
                                        },
                                        placeholder: 'URL Origin Type'
                                    })
                                }),
                                'localhost' !== I
                                    ? null
                                    : (0, r.jsx)(o.FormItem, {
                                          className: x.inputWrapper,
                                          title: p.intl.string(p.t.fF4zxs),
                                          required: !0,
                                          children: (0, r.jsx)(o.TextInput, {
                                              value: S,
                                              maxLength: 5,
                                              onChange: (e) => b(e),
                                              disabled: E
                                          })
                                      }),
                                (0, r.jsx)(o.Button, {
                                    submitting: E,
                                    type: 'submit',
                                    disabled: !A || 0 === C.length || ('localhost' === I && 0 === S.length),
                                    color: R ? o.Button.Colors.RED : o.Button.Colors.GREEN,
                                    children: R ? p.intl.string(p.t.d6TR3N) : p.intl.string(p.t.qwuK5O)
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
