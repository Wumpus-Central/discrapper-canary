n.d(t, { default: () => S }), n(47120);
var r = n(200651),
    o = n(192379),
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
        [g, N] = o.useState(),
        [S, x] = o.useState(''),
        [y, b] = o.useState(''),
        [v, O] = o.useState(!1);
    o.useEffect(() => a.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT), []);
    let j = async (e) => {
        e.preventDefault(), O(!0), N(''), b('');
        try {
            await (0, i.S2)({
                email: t,
                password: S
            }),
                O(!1),
                m();
        } catch (e) {
            var n, r;
            (null == e || null == (n = e.body) ? void 0 : n.email) && N(e.body.email), (null == e || null == (r = e.body) ? void 0 : r.password) && b(e.body.password), O(!1);
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
                        children: p.NW.string(p.t.uQShv7)
                    }),
                    (0, r.jsx)(l.Text, {
                        className: _.formBody,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: u ? p.NW.string(p.t.sW28gY) : p.NW.string(p.t['gP/vPT'])
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
                    onSubmit: j,
                    children: [
                        (0, r.jsx)(l.xJW, {
                            title: p.NW.string(p.t.dI4d4e),
                            className: _.formItem,
                            children: (0, r.jsx)(l.oil, {
                                value: t,
                                error: g,
                                onChange: (e) => n(e),
                                autoFocus: !0
                            })
                        }),
                        (0, r.jsx)(l.xJW, {
                            title: p.NW.string(p.t['CIGa+/']),
                            className: _.formItem,
                            children: (0, r.jsx)(l.oil, {
                                type: 'password',
                                value: S,
                                error: y,
                                onChange: (e) => x(e)
                            })
                        }),
                        (0, r.jsx)(l.zxk, {
                            type: 'submit',
                            size: l.zxk.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: v,
                            disabled: 0 === t.length || 0 === S.length,
                            children: p.NW.string(p.t.fiNVio)
                        }),
                        u &&
                            (0, r.jsx)(l.zxk, {
                                className: _.logoutButton,
                                color: l.zxk.Colors.PRIMARY,
                                look: l.zxk.Looks.LINK,
                                size: l.zxk.Sizes.NONE,
                                onClick: () => {
                                    s.Z.logout(), f();
                                },
                                children: p.NW.string(p.t['2jxGen'])
                            })
                    ]
                })
            })
        ]
    });
}
function N(e) {
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
                            children: p.NW.format(i, { email: t })
                        }),
                        (0, r.jsx)(l.Text, {
                            className: _.successPromotion,
                            variant: 'text-md/normal',
                            children: p.NW.string(p.t.eXqM2d)
                        })
                    ]
                }),
                n
                    ? (0, r.jsx)(l.mzw, {
                          direction: c.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(l.zxk, {
                              size: l.zxk.Sizes.LARGE,
                              onClick: s,
                              children: p.NW.string(p.t.BddRzc)
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
                              children: p.NW.string(p.t.ygArIS)
                          })
                      })
            ]
        })
    );
}
function S(e) {
    let { onClose: t, transitionState: n, claimRequired: s = !1 } = e,
        [i, c] = o.useState(''),
        [a, u] = o.useState(!1);
    return a
        ? (0, r.jsx)(l.Y0X, {
              transitionState: n,
              children: (0, r.jsx)(N, {
                  email: i,
                  claimRequired: s,
                  onClose: t
              })
          })
        : (0, r.jsx)(l.Y0X, {
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
