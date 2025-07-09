(n.d(t, { default: () => x }), n(388685));
var r = n(255367),
    o = n(73800),
    l = n(755721),
    s = n(481060),
    i = n(893776),
    c = n(809206),
    a = n(600164),
    u = n(390885),
    m = n(626135),
    f = n(361207),
    d = n(981631),
    p = n(630724),
    _ = n(388032),
    g = n(327342);
function S(e) {
    let { email: t, setEmail: n, claimRequired: m, onSuccess: f, onClose: d } = e,
        [S, N] = o.useState(),
        [x, y] = o.useState(''),
        [C, b] = o.useState(''),
        [v, O] = o.useState(!1);
    o.useEffect(() => u.Z.flowStep(p.MK.ANY, p.mx.CLAIM_ACCOUNT), []);
    let j = async (e) => {
        (e.preventDefault(), O(!0), N(''), b(''));
        try {
            (await (0, c.S2)({
                email: t,
                password: x
            }),
                O(!1),
                f());
        } catch (e) {
            var n, r;
            ((null == e || null == (n = e.body) ? void 0 : n.email) && N(e.body.email), (null == e || null == (r = e.body) ? void 0 : r.password) && b(e.body.password), O(!1));
        }
    };
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(s.xBx, {
                className: g.formHeader,
                direction: a.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)('div', { className: g.formImage }),
                    (0, r.jsx)(s.X6q, {
                        className: g.formTitle,
                        variant: 'heading-xl/semibold',
                        children: _.intl.string(_.t.uQShv7)
                    }),
                    (0, r.jsx)(s.Text, {
                        className: g.formBody,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: m ? _.intl.string(_.t.sW28gY) : _.intl.string(_.t['gP/vPT'])
                    }),
                    (0, r.jsx)(s.olH, {
                        className: g.closeButton,
                        onClick: d
                    })
                ]
            }),
            (0, r.jsx)(s.hzk, {
                children: (0, r.jsxs)('form', {
                    className: g.formContent,
                    onSubmit: j,
                    children: [
                        (0, r.jsx)(s.xJW, {
                            title: _.intl.string(_.t.dI4d4e),
                            className: g.formItem,
                            children: (0, r.jsx)(s.oil, {
                                value: t,
                                error: S,
                                onChange: (e) => n(e),
                                autoFocus: !0
                            })
                        }),
                        (0, r.jsx)(s.xJW, {
                            title: _.intl.string(_.t['CIGa+/']),
                            className: g.formItem,
                            children: (0, r.jsx)(s.oil, {
                                type: 'password',
                                value: x,
                                error: C,
                                onChange: (e) => y(e)
                            })
                        }),
                        (0, r.jsx)(l.zx, {
                            type: 'submit',
                            size: l.zx.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: v,
                            disabled: 0 === t.length || 0 === x.length,
                            children: _.intl.string(_.t.fiNVio)
                        }),
                        m &&
                            (0, r.jsx)(l.zx, {
                                className: g.logoutButton,
                                color: l.zx.Colors.PRIMARY,
                                look: l.zx.Looks.LINK,
                                size: l.zx.Sizes.NONE,
                                onClick: () => {
                                    (i.Z.logout('claim_account_modal'), d());
                                },
                                children: _.intl.string(_.t['2jxGen'])
                            })
                    ]
                })
            })
        ]
    });
}
function N(e) {
    let { email: t, claimRequired: n, onClose: i } = e,
        c = n ? _.t.D7trIC : _.t.JNWX7O;
    return (
        o.useEffect(() => u.Z.flowStep(p.MK.ANY, p.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(s.hzk, {
                    className: g.successContent,
                    children: [
                        !n &&
                            (0, r.jsx)(s.olH, {
                                className: g.closeButton,
                                onClick: i
                            }),
                        (0, r.jsx)('div', { className: g.successImage }),
                        (0, r.jsx)(s.Text, {
                            className: g.successTitle,
                            variant: 'text-lg/semibold',
                            children: _.intl.format(c, { email: t })
                        }),
                        (0, r.jsx)(s.Text, {
                            className: g.successPromotion,
                            variant: 'text-md/normal',
                            children: _.intl.string(_.t.eXqM2d)
                        })
                    ]
                }),
                n
                    ? (0, r.jsx)(s.mzw, {
                          direction: a.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(l.zx, {
                              size: l.zx.Sizes.LARGE,
                              onClick: i,
                              children: _.intl.string(_.t.BddRzc)
                          })
                      })
                    : (0, r.jsx)(s.mzw, {
                          direction: a.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(l.zx, {
                              color: l.zx.Colors.BRAND,
                              size: l.zx.Sizes.LARGE,
                              onClick: function () {
                                  (window.open((0, f.t3)(), '_blank'),
                                      m.default.track(d.rMx.DOWNLOAD_APP, {
                                          platform: (0, f.DW)(),
                                          ptb: !1,
                                          released: !0,
                                          has_e_mail: !0,
                                          referring_location: 'Claim Modal',
                                          qr_code: !1
                                      }));
                              },
                              children: _.intl.string(_.t.ygArIS)
                          })
                      })
            ]
        })
    );
}
function x(e) {
    let { onClose: t, transitionState: n, claimRequired: l = !1 } = e,
        [i, c] = o.useState(''),
        [a, u] = o.useState(!1);
    return a
        ? (0, r.jsx)(s.Y0X, {
              transitionState: n,
              parentComponent: 'ClaimAccountModal',
              children: (0, r.jsx)(N, {
                  email: i,
                  claimRequired: l,
                  onClose: t
              })
          })
        : (0, r.jsx)(s.Y0X, {
              transitionState: n,
              parentComponent: 'ClaimAccountModal',
              children: (0, r.jsx)(S, {
                  email: i,
                  setEmail: c,
                  claimRequired: l,
                  onSuccess: () => u(!0),
                  onClose: t
              })
          });
}
