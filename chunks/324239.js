n.d(t, { default: () => x }), n(47120);
var l = n(200651),
    s = n(192379),
    o = n(481060),
    r = n(893776),
    i = n(809206),
    c = n(600164),
    a = n(390885),
    u = n(626135),
    d = n(361207),
    m = n(981631),
    _ = n(630724),
    f = n(388032),
    p = n(306204);
function g(e) {
    let { email: t, setEmail: n, claimRequired: u, onSuccess: d, onClose: m } = e,
        [g, N] = s.useState(),
        [x, S] = s.useState(''),
        [C, T] = s.useState(''),
        [A, v] = s.useState(!1);
    s.useEffect(() => a.Z.flowStep(_.MK.ANY, _.mx.CLAIM_ACCOUNT), []);
    let h = async (e) => {
        e.preventDefault(), v(!0), N(''), T('');
        try {
            await (0, i.S2)({
                email: t,
                password: x
            }),
                v(!1),
                d();
        } catch (e) {
            var n, l;
            (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.email) && N(e.body.email), (null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.password) && T(e.body.password), v(!1);
        }
    };
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsxs)(o.xBx, {
                className: p.formHeader,
                direction: c.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, l.jsx)('div', { className: p.formImage }),
                    (0, l.jsx)(o.X6q, {
                        className: p.formTitle,
                        variant: 'heading-xl/semibold',
                        children: f.intl.string(f.t.uQShv7)
                    }),
                    (0, l.jsx)(o.Text, {
                        className: p.formBody,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u ? f.intl.string(f.t.sW28gY) : f.intl.string(f.t['gP/vPT'])
                    }),
                    (0, l.jsx)(o.olH, {
                        className: p.closeButton,
                        onClick: m
                    })
                ]
            }),
            (0, l.jsx)(o.hzk, {
                children: (0, l.jsxs)('form', {
                    className: p.formContent,
                    onSubmit: h,
                    children: [
                        (0, l.jsx)(o.xJW, {
                            title: f.intl.string(f.t.dI4d4e),
                            className: p.formItem,
                            children: (0, l.jsx)(o.oil, {
                                value: t,
                                error: g,
                                onChange: (e) => n(e),
                                autoFocus: !0
                            })
                        }),
                        (0, l.jsx)(o.xJW, {
                            title: f.intl.string(f.t['CIGa+/']),
                            className: p.formItem,
                            children: (0, l.jsx)(o.oil, {
                                type: 'password',
                                value: x,
                                error: C,
                                onChange: (e) => S(e)
                            })
                        }),
                        (0, l.jsx)(o.zxk, {
                            type: 'submit',
                            size: o.zxk.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: A,
                            disabled: 0 === t.length || 0 === x.length,
                            children: f.intl.string(f.t.fiNVio)
                        }),
                        u &&
                            (0, l.jsx)(o.zxk, {
                                className: p.logoutButton,
                                color: o.zxk.Colors.PRIMARY,
                                look: o.zxk.Looks.LINK,
                                size: o.zxk.Sizes.NONE,
                                onClick: () => {
                                    r.Z.logout(), m();
                                },
                                children: f.intl.string(f.t['2jxGen'])
                            })
                    ]
                })
            })
        ]
    });
}
function N(e) {
    let { email: t, claimRequired: n, onClose: r } = e,
        i = n ? f.t.D7trIC : f.t.JNWX7O;
    return (
        s.useEffect(() => a.Z.flowStep(_.MK.ANY, _.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, l.jsxs)('div', {
            children: [
                (0, l.jsxs)(o.hzk, {
                    className: p.successContent,
                    children: [
                        !n &&
                            (0, l.jsx)(o.olH, {
                                className: p.closeButton,
                                onClick: r
                            }),
                        (0, l.jsx)('div', { className: p.successImage }),
                        (0, l.jsx)(o.Text, {
                            className: p.successTitle,
                            variant: 'text-lg/semibold',
                            children: f.intl.format(i, { email: t })
                        }),
                        (0, l.jsx)(o.Text, {
                            className: p.successPromotion,
                            variant: 'text-md/normal',
                            children: f.intl.string(f.t.eXqM2d)
                        })
                    ]
                }),
                n
                    ? (0, l.jsx)(o.mzw, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, l.jsx)(o.zxk, {
                              size: o.zxk.Sizes.LARGE,
                              onClick: r,
                              children: f.intl.string(f.t.BddRzc)
                          })
                      })
                    : (0, l.jsx)(o.mzw, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, l.jsx)(o.zxk, {
                              color: o.zxk.Colors.BRAND,
                              size: o.zxk.Sizes.LARGE,
                              onClick: function () {
                                  window.open((0, d.t3)(), '_blank'),
                                      u.default.track(m.rMx.DOWNLOAD_APP, {
                                          platform: (0, d.DW)(),
                                          ptb: !1,
                                          released: !0,
                                          has_e_mail: !0,
                                          referring_location: 'Claim Modal',
                                          qr_code: !1
                                      });
                              },
                              children: f.intl.string(f.t.ygArIS)
                          })
                      })
            ]
        })
    );
}
function x(e) {
    let { onClose: t, transitionState: n, claimRequired: r = !1 } = e,
        [i, c] = s.useState(''),
        [a, u] = s.useState(!1);
    return a
        ? (0, l.jsx)(o.Y0X, {
              transitionState: n,
              children: (0, l.jsx)(N, {
                  email: i,
                  claimRequired: r,
                  onClose: t
              })
          })
        : (0, l.jsx)(o.Y0X, {
              transitionState: n,
              children: (0, l.jsx)(g, {
                  email: i,
                  setEmail: c,
                  claimRequired: r,
                  onSuccess: () => u(!0),
                  onClose: t
              })
          });
}
