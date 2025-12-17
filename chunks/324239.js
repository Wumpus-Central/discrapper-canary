n.d(e, { default: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    o = n(481060),
    i = n(893776),
    a = n(809206),
    s = n(600164),
    c = n(390885),
    u = n(626135),
    f = n(361207),
    m = n(981631),
    d = n(630724),
    p = n(388032),
    g = n(373060);
function _(t) {
    let { email: e, setEmail: n, claimRequired: u, onSuccess: f, onClose: m } = t,
        [_, S] = l.useState(),
        [y, v] = l.useState(""),
        [N, b] = l.useState(""),
        [j, C] = l.useState(!1);
    l.useEffect(() => c.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT), []);
    let O = async (t) => {
        t.preventDefault(), C(!0), S(""), b("");
        try {
            await (0, a.S2)({
                email: e,
                password: y,
            }),
                C(!1),
                f();
        } catch (t) {
            var n, r;
            (null == t || null == (n = t.body) ? void 0 : n.email) && S(t.body.email),
                (null == t || null == (r = t.body) ? void 0 : r.password) && b(t.body.password),
                C(!1);
        }
    };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(o.xBx, {
                className: g.formHeader,
                direction: s.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)("div", { className: g.formImage }),
                    (0, r.jsx)(o.Heading, {
                        className: g.formTitle,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["uQShv/"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        className: g.formBody,
                        variant: "text-md/normal",
                        color: "text-default",
                        children: u ? p.intl.string(p.t.sW28gZ) : p.intl.string(p.t["gP/vPe"]),
                    }),
                    (0, r.jsx)(o.olH, {
                        className: g.closeButton,
                        onClick: m,
                    }),
                ],
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsx)("form", {
                    className: g.formContent,
                    onSubmit: O,
                    children: (0, r.jsxs)(o.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(o.oil, {
                                label: p.intl.string(p.t.dI4d4S),
                                value: e,
                                error: _,
                                onChange: (t) => n(t),
                                autoFocus: !0,
                            }),
                            (0, r.jsx)(o.oil, {
                                label: p.intl.string(p.t["CIGa+7"]),
                                type: "password",
                                value: y,
                                error: N,
                                onChange: (t) => v(t),
                            }),
                            (0, r.jsx)(o.Button, {
                                text: p.intl.string(p.t.fiNVin),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: j,
                                disabled: 0 === e.length || 0 === y.length,
                            }),
                            u &&
                                (0, r.jsx)("div", {
                                    className: g.logoutButton,
                                    children: (0, r.jsx)(o.Avr, {
                                        text: p.intl.string(p.t["2jxGer"]),
                                        onClick: () => {
                                            i.Z.logout("claim_account_modal"), m();
                                        },
                                    }),
                                }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function S(t) {
    let { email: e, claimRequired: n, onClose: i } = t,
        a = n ? p.t.D7trIB : p.t.JNWX7G;
    return (
        l.useEffect(() => c.Z.flowStep(d.MK.ANY, d.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(o.hzk, {
                    className: g.successContent,
                    children: [
                        !n &&
                            (0, r.jsx)(o.olH, {
                                className: g.closeButton,
                                onClick: i,
                            }),
                        (0, r.jsx)("div", { className: g.successImage }),
                        (0, r.jsx)(o.Text, {
                            className: g.successTitle,
                            variant: "text-lg/semibold",
                            children: p.intl.format(a, { email: e }),
                        }),
                        (0, r.jsx)(o.Text, {
                            className: g.successPromotion,
                            variant: "text-md/normal",
                            children: p.intl.string(p.t.eXqM2d),
                        }),
                    ],
                }),
                n
                    ? (0, r.jsx)(o.mzw, {
                          direction: s.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(o.Button, {
                              text: p.intl.string(p.t.BddRzS),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: i,
                          }),
                      })
                    : (0, r.jsx)(o.mzw, {
                          direction: s.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(o.Button, {
                              text: p.intl.string(p.t.ygArIV),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  window.open((0, f.t3)(), "_blank"),
                                      u.default.track(m.rMx.DOWNLOAD_APP, {
                                          platform: (0, f.DW)(),
                                          ptb: !1,
                                          released: !0,
                                          has_e_mail: !0,
                                          referring_location: "Claim Modal",
                                          qr_code: !1,
                                      });
                              },
                          }),
                      }),
            ],
        })
    );
}
function y(t) {
    let { onClose: e, transitionState: n, claimRequired: i = !1 } = t,
        [a, s] = l.useState(""),
        [c, u] = l.useState(!1);
    return c
        ? (0, r.jsx)(o.Y0X, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, r.jsx)(S, {
                  email: a,
                  claimRequired: i,
                  onClose: e,
              }),
          })
        : (0, r.jsx)(o.Y0X, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, r.jsx)(_, {
                  email: a,
                  setEmail: s,
                  claimRequired: i,
                  onSuccess: () => u(!0),
                  onClose: e,
              }),
          });
}
