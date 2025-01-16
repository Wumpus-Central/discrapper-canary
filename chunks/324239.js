n.r(e),
    n.d(e, {
        default: function () {
            return C;
        }
    }),
    n(47120);
var o = n(200651),
    l = n(192379),
    s = n(481060),
    r = n(893776),
    i = n(809206),
    a = n(600164),
    c = n(390885),
    u = n(626135),
    d = n(361207),
    m = n(981631),
    f = n(630724),
    _ = n(388032),
    p = n(348371);
function g(t) {
    let { email: e, setEmail: n, claimRequired: u, onSuccess: d, onClose: m } = t,
        [g, N] = l.useState(),
        [C, S] = l.useState(''),
        [T, x] = l.useState(''),
        [A, I] = l.useState(!1);
    l.useEffect(() => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT), []);
    let v = async (t) => {
        t.preventDefault(), I(!0), N(''), x('');
        try {
            await (0, i.S2)({
                email: e,
                password: C
            }),
                I(!1),
                d();
        } catch (t) {
            var n, o;
            (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.email) && N(t.body.email), (null == t ? void 0 : null === (o = t.body) || void 0 === o ? void 0 : o.password) && x(t.body.password), I(!1);
        }
    };
    return (0, o.jsxs)('div', {
        children: [
            (0, o.jsxs)(s.ModalHeader, {
                className: p.formHeader,
                direction: a.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, o.jsx)('div', { className: p.formImage }),
                    (0, o.jsx)(s.Heading, {
                        className: p.formTitle,
                        variant: 'heading-xl/semibold',
                        children: _.intl.string(_.t.uQShv7)
                    }),
                    (0, o.jsx)(s.Text, {
                        className: p.formBody,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u ? _.intl.string(_.t.sW28gY) : _.intl.string(_.t['gP/vPT'])
                    }),
                    (0, o.jsx)(s.ModalCloseButton, {
                        className: p.closeButton,
                        onClick: m
                    })
                ]
            }),
            (0, o.jsx)(s.ModalContent, {
                children: (0, o.jsxs)('form', {
                    className: p.formContent,
                    onSubmit: v,
                    children: [
                        (0, o.jsx)(s.FormItem, {
                            title: _.intl.string(_.t.dI4d4e),
                            className: p.formItem,
                            children: (0, o.jsx)(s.TextInput, {
                                value: e,
                                error: g,
                                onChange: (t) => n(t),
                                autoFocus: !0
                            })
                        }),
                        (0, o.jsx)(s.FormItem, {
                            title: _.intl.string(_.t['CIGa+/']),
                            className: p.formItem,
                            children: (0, o.jsx)(s.TextInput, {
                                type: 'password',
                                value: C,
                                error: T,
                                onChange: (t) => S(t)
                            })
                        }),
                        (0, o.jsx)(s.Button, {
                            type: 'submit',
                            size: s.Button.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: A,
                            disabled: 0 === e.length || 0 === C.length,
                            children: _.intl.string(_.t.fiNVio)
                        }),
                        u &&
                            (0, o.jsx)(s.Button, {
                                className: p.logoutButton,
                                color: s.Button.Colors.PRIMARY,
                                look: s.Button.Looks.LINK,
                                size: s.Button.Sizes.NONE,
                                onClick: () => {
                                    r.Z.logout(), m();
                                },
                                children: _.intl.string(_.t['2jxGen'])
                            })
                    ]
                })
            })
        ]
    });
}
function N(t) {
    let { email: e, claimRequired: n, onClose: r } = t,
        i = n ? _.t.D7trIC : _.t.JNWX7O;
    function g() {
        window.open((0, d.t3)(), '_blank'),
            u.default.track(m.rMx.DOWNLOAD_APP, {
                platform: (0, d.DW)(),
                ptb: !1,
                released: !0,
                has_e_mail: !0,
                referring_location: 'Claim Modal',
                qr_code: !1
            });
    }
    return (
        l.useEffect(() => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, o.jsxs)('div', {
            children: [
                (0, o.jsxs)(s.ModalContent, {
                    className: p.successContent,
                    children: [
                        !n &&
                            (0, o.jsx)(s.ModalCloseButton, {
                                className: p.closeButton,
                                onClick: r
                            }),
                        (0, o.jsx)('div', { className: p.successImage }),
                        (0, o.jsx)(s.Text, {
                            className: p.successTitle,
                            variant: 'text-lg/semibold',
                            children: _.intl.format(i, { email: e })
                        }),
                        (0, o.jsx)(s.Text, {
                            className: p.successPromotion,
                            variant: 'text-md/normal',
                            children: _.intl.string(_.t.eXqM2d)
                        })
                    ]
                }),
                n
                    ? (0, o.jsx)(s.ModalFooter, {
                          direction: a.Z.Direction.VERTICAL,
                          children: (0, o.jsx)(s.Button, {
                              size: s.Button.Sizes.LARGE,
                              onClick: r,
                              children: _.intl.string(_.t.BddRzc)
                          })
                      })
                    : (0, o.jsx)(s.ModalFooter, {
                          direction: a.Z.Direction.VERTICAL,
                          children: (0, o.jsx)(s.Button, {
                              color: s.Button.Colors.BRAND,
                              size: s.Button.Sizes.LARGE,
                              onClick: g,
                              children: _.intl.string(_.t.ygArIS)
                          })
                      })
            ]
        })
    );
}
function C(t) {
    let { onClose: e, transitionState: n, claimRequired: r = !1 } = t,
        [i, a] = l.useState(''),
        [c, u] = l.useState(!1);
    return c
        ? (0, o.jsx)(s.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(N, {
                  email: i,
                  claimRequired: r,
                  onClose: e
              })
          })
        : (0, o.jsx)(s.ModalRoot, {
              transitionState: n,
              children: (0, o.jsx)(g, {
                  email: i,
                  setEmail: a,
                  claimRequired: r,
                  onSuccess: () => u(!0),
                  onClose: e
              })
          });
}
