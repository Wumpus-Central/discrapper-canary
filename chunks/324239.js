n.d(e, { default: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    o = n(481060),
    i = n(893776),
    s = n(809206),
    a = n(600164),
    c = n(390885),
    u = n(626135),
    m = n(361207),
    d = n(981631),
    f = n(630724),
    p = n(388032),
    _ = n(711165);
function g(t) {
    let { email: e, setEmail: n, claimRequired: u, onSuccess: m, onClose: d } = t,
        [g, S] = l.useState(),
        [y, v] = l.useState(""),
        [N, b] = l.useState(""),
        [j, C] = l.useState(!1);
    l.useEffect(() => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT), []);
    let O = async (t) => {
        t.preventDefault(), C(!0), S(""), b("");
        try {
            await (0, s.S2)({
                email: e,
                password: y,
            }),
                C(!1),
                m();
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
                className: _.formHeader,
                direction: a.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)("div", { className: _.formImage }),
                    (0, r.jsx)(o.Heading, {
                        className: _.formTitle,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["uQShv/"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        className: _.formBody,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: u ? p.intl.string(p.t.sW28gZ) : p.intl.string(p.t["gP/vPe"]),
                    }),
                    (0, r.jsx)(o.olH, {
                        className: _.closeButton,
                        onClick: d,
                    }),
                ],
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsx)("form", {
                    className: _.formContent,
                    onSubmit: O,
                    children: (0, r.jsxs)(o.Kqy, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(o.oil, {
                                label: p.intl.string(p.t.dI4d4S),
                                value: e,
                                error: g,
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
                                    className: _.logoutButton,
                                    children: (0, r.jsx)(o.Avr, {
                                        text: p.intl.string(p.t["2jxGer"]),
                                        onClick: () => {
                                            i.Z.logout("claim_account_modal"), d();
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
        s = n ? p.t.D7trIB : p.t.JNWX7G;
    return (
        l.useEffect(() => c.Z.flowStep(f.MK.ANY, f.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(o.hzk, {
                    className: _.successContent,
                    children: [
                        !n &&
                            (0, r.jsx)(o.olH, {
                                className: _.closeButton,
                                onClick: i,
                            }),
                        (0, r.jsx)("div", { className: _.successImage }),
                        (0, r.jsx)(o.Text, {
                            className: _.successTitle,
                            variant: "text-lg/semibold",
                            children: p.intl.format(s, { email: e }),
                        }),
                        (0, r.jsx)(o.Text, {
                            className: _.successPromotion,
                            variant: "text-md/normal",
                            children: p.intl.string(p.t.eXqM2d),
                        }),
                    ],
                }),
                n
                    ? (0, r.jsx)(o.mzw, {
                          direction: a.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(o.Button, {
                              text: p.intl.string(p.t.BddRzS),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: i,
                          }),
                      })
                    : (0, r.jsx)(o.mzw, {
                          direction: a.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(o.Button, {
                              text: p.intl.string(p.t.ygArIV),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  window.open((0, m.t3)(), "_blank"),
                                      u.default.track(d.rMx.DOWNLOAD_APP, {
                                          platform: (0, m.DW)(),
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
        [s, a] = l.useState(""),
        [c, u] = l.useState(!1);
    return c
        ? (0, r.jsx)(o.Y0X, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, r.jsx)(S, {
                  email: s,
                  claimRequired: i,
                  onClose: e,
              }),
          })
        : (0, r.jsx)(o.Y0X, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, r.jsx)(g, {
                  email: s,
                  setEmail: a,
                  claimRequired: i,
                  onSuccess: () => u(!0),
                  onClose: e,
              }),
          });
}
