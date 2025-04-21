n.d(t, { default: () => N }), n(388685);
var r = n(200651),
    l = n(192379),
    o = n(481060),
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
        [g, S] = l.useState(),
        [N, x] = l.useState(''),
        [y, b] = l.useState(''),
        [v, O] = l.useState(!1);
    l.useEffect(() => a.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT), []);
    let j = async (e) => {
        e.preventDefault(), O(!0), S(''), b('');
        try {
            await (0, i.S2)({
                email: t,
                password: N
            }),
                O(!1),
                m();
        } catch (e) {
            var n, r;
            (null == e || null == (n = e.body) ? void 0 : n.email) && S(e.body.email), (null == e || null == (r = e.body) ? void 0 : r.password) && b(e.body.password), O(!1);
        }
    };
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(o.xBx, {
                className: _.formHeader,
                direction: c.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)('div', { className: _.formImage }),
                    (0, r.jsx)(o.X6q, {
                        className: _.formTitle,
                        variant: 'heading-xl/semibold',
                        children: p.intl.string(p.t.uQShv7)
                    }),
                    (0, r.jsx)(o.Text, {
                        className: _.formBody,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u ? p.intl.string(p.t.sW28gY) : p.intl.string(p.t['gP/vPT'])
                    }),
                    (0, r.jsx)(o.olH, {
                        className: _.closeButton,
                        onClick: f
                    })
                ]
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsxs)('form', {
                    className: _.formContent,
                    onSubmit: j,
                    children: [
                        (0, r.jsx)(o.xJW, {
                            title: p.intl.string(p.t.dI4d4e),
                            className: _.formItem,
                            children: (0, r.jsx)(o.oil, {
                                value: t,
                                error: g,
                                onChange: (e) => n(e),
                                autoFocus: !0
                            })
                        }),
                        (0, r.jsx)(o.xJW, {
                            title: p.intl.string(p.t['CIGa+/']),
                            className: _.formItem,
                            children: (0, r.jsx)(o.oil, {
                                type: 'password',
                                value: N,
                                error: y,
                                onChange: (e) => x(e)
                            })
                        }),
                        (0, r.jsx)(o.zxk, {
                            type: 'submit',
                            size: o.zxk.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: v,
                            disabled: 0 === t.length || 0 === N.length,
                            children: p.intl.string(p.t.fiNVio)
                        }),
                        u &&
                            (0, r.jsx)(o.zxk, {
                                className: _.logoutButton,
                                color: o.zxk.Colors.PRIMARY,
                                look: o.zxk.Looks.LINK,
                                size: o.zxk.Sizes.NONE,
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
        l.useEffect(() => a.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsxs)(o.hzk, {
                    className: _.successContent,
                    children: [
                        !n &&
                            (0, r.jsx)(o.olH, {
                                className: _.closeButton,
                                onClick: s
                            }),
                        (0, r.jsx)('div', { className: _.successImage }),
                        (0, r.jsx)(o.Text, {
                            className: _.successTitle,
                            variant: 'text-lg/semibold',
                            children: p.intl.format(i, { email: t })
                        }),
                        (0, r.jsx)(o.Text, {
                            className: _.successPromotion,
                            variant: 'text-md/normal',
                            children: p.intl.string(p.t.eXqM2d)
                        })
                    ]
                }),
                n
                    ? (0, r.jsx)(o.mzw, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(o.zxk, {
                              size: o.zxk.Sizes.LARGE,
                              onClick: s,
                              children: p.intl.string(p.t.BddRzc)
                          })
                      })
                    : (0, r.jsx)(o.mzw, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(o.zxk, {
                              color: o.zxk.Colors.BRAND,
                              size: o.zxk.Sizes.LARGE,
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
        [i, c] = l.useState(''),
        [a, u] = l.useState(!1);
    return a
        ? (0, r.jsx)(o.Y0X, {
              transitionState: n,
              children: (0, r.jsx)(S, {
                  email: i,
                  claimRequired: s,
                  onClose: t
              })
          })
        : (0, r.jsx)(o.Y0X, {
              transitionState: n,
              children: (0, r.jsx)(g, {
                  email: i,
                  setEmail: c,
                  claimRequired: s,
                  onSuccess: () => u(!0),
                  onClose: t
              })
          });
}
