n.d(t, { default: () => N }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(481060),
    s = n(893776),
    i = n(809206),
    c = n(600164),
    a = n(390885),
    u = n(626135),
    m = n(361207),
    f = n(981631),
    d = n(630724),
    p = n(388032),
    _ = n(327342);
function g(e) {
    let { email: t, setEmail: n, claimRequired: u, onSuccess: m, onClose: f } = e,
        [g, S] = o.useState(),
        [N, x] = o.useState(''),
        [y, C] = o.useState(''),
        [b, v] = o.useState(!1);
    o.useEffect(() => a.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT), []);
    let O = async (e) => {
        e.preventDefault(), v(!0), S(''), C('');
        try {
            await (0, i.S2)({
                email: t,
                password: N
            }),
                v(!1),
                m();
        } catch (e) {
            var n, r;
            (null == e || null == (n = e.body) ? void 0 : n.email) && S(e.body.email), (null == e || null == (r = e.body) ? void 0 : r.password) && C(e.body.password), v(!1);
        }
    };
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(l.xBx, {
                className: _.formHeader,
                direction: c.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)('div', { className: _.formImage }),
                    (0, r.jsx)(l.X6q, {
                        className: _.formTitle,
                        variant: 'heading-xl/semibold',
                        children: p.intl.string(p.t.uQShv7)
                    }),
                    (0, r.jsx)(l.Text, {
                        className: _.formBody,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u ? p.intl.string(p.t.sW28gY) : p.intl.string(p.t['gP/vPT'])
                    }),
                    (0, r.jsx)(l.olH, {
                        className: _.closeButton,
                        onClick: f
                    })
                ]
            }),
            (0, r.jsx)(l.hzk, {
                children: (0, r.jsxs)('form', {
                    className: _.formContent,
                    onSubmit: O,
                    children: [
                        (0, r.jsx)(l.xJW, {
                            title: p.intl.string(p.t.dI4d4e),
                            className: _.formItem,
                            children: (0, r.jsx)(l.oil, {
                                value: t,
                                error: g,
                                onChange: (e) => n(e),
                                autoFocus: !0
                            })
                        }),
                        (0, r.jsx)(l.xJW, {
                            title: p.intl.string(p.t['CIGa+/']),
                            className: _.formItem,
                            children: (0, r.jsx)(l.oil, {
                                type: 'password',
                                value: N,
                                error: y,
                                onChange: (e) => x(e)
                            })
                        }),
                        (0, r.jsx)(l.zxk, {
                            type: 'submit',
                            size: l.zxk.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: b,
                            disabled: 0 === t.length || 0 === N.length,
                            children: p.intl.string(p.t.fiNVio)
                        }),
                        u &&
                            (0, r.jsx)(l.zxk, {
                                className: _.logoutButton,
                                color: l.zxk.Colors.PRIMARY,
                                look: l.zxk.Looks.LINK,
                                size: l.zxk.Sizes.NONE,
                                onClick: () => {
                                    s.Z.logout('claim_account_modal'), f();
                                },
                                children: p.intl.string(p.t['2jxGen'])
                            })
                    ]
                })
            })
        ]
    });
}
function S(e) {
    let { email: t, claimRequired: n, onClose: s } = e,
        i = n ? p.t.D7trIC : p.t.JNWX7O;
    return (
        o.useEffect(() => a.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(l.hzk, {
                    className: _.successContent,
                    children: [
                        !n &&
                            (0, r.jsx)(l.olH, {
                                className: _.closeButton,
                                onClick: s
                            }),
                        (0, r.jsx)('div', { className: _.successImage }),
                        (0, r.jsx)(l.Text, {
                            className: _.successTitle,
                            variant: 'text-lg/semibold',
                            children: p.intl.format(i, { email: t })
                        }),
                        (0, r.jsx)(l.Text, {
                            className: _.successPromotion,
                            variant: 'text-md/normal',
                            children: p.intl.string(p.t.eXqM2d)
                        })
                    ]
                }),
                n
                    ? (0, r.jsx)(l.mzw, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(l.zxk, {
                              size: l.zxk.Sizes.LARGE,
                              onClick: s,
                              children: p.intl.string(p.t.BddRzc)
                          })
                      })
                    : (0, r.jsx)(l.mzw, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(l.zxk, {
                              color: l.zxk.Colors.BRAND,
                              size: l.zxk.Sizes.LARGE,
                              onClick: function () {
                                  window.open((0, m.t3)(), '_blank'),
                                      u.default.track(f.rMx.DOWNLOAD_APP, {
                                          platform: (0, m.DW)(),
                                          ptb: !1,
                                          released: !0,
                                          has_e_mail: !0,
                                          referring_location: 'Claim Modal',
                                          qr_code: !1
                                      });
                              },
                              children: p.intl.string(p.t.ygArIS)
                          })
                      })
            ]
        })
    );
}
function N(e) {
    let { onClose: t, transitionState: n, claimRequired: s = !1 } = e,
        [i, c] = o.useState(''),
        [a, u] = o.useState(!1);
    return a
        ? (0, r.jsx)(l.Y0X, {
              transitionState: n,
              parentComponent: 'ClaimAccountModal',
              children: (0, r.jsx)(S, {
                  email: i,
                  claimRequired: s,
                  onClose: t
              })
          })
        : (0, r.jsx)(l.Y0X, {
              transitionState: n,
              parentComponent: 'ClaimAccountModal',
              children: (0, r.jsx)(g, {
                  email: i,
                  setEmail: c,
                  claimRequired: s,
                  onSuccess: () => u(!0),
                  onClose: t
              })
          });
}
