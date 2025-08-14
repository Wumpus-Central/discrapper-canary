n.d(t, { default: () => x }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(755721),
    i = n(481060),
    s = n(893776),
    c = n(809206),
    a = n(600164),
    u = n(390885),
    m = n(626135),
    f = n(361207),
    d = n(981631),
    p = n(630724),
    _ = n(388032),
    g = n(678254);
function S(e) {
    let { email: t, setEmail: n, claimRequired: m, onSuccess: f, onClose: d } = e,
        [S, N] = l.useState(),
        [x, y] = l.useState(""),
        [C, b] = l.useState(""),
        [O, j] = l.useState(!1);
    l.useEffect(() => u.Z.flowStep(p.MK.ANY, p.mx.CLAIM_ACCOUNT), []);
    let v = async (e) => {
        e.preventDefault(), j(!0), N(""), b("");
        try {
            await (0, c.S2)({
                email: t,
                password: x,
            }),
                j(!1),
                f();
        } catch (e) {
            var n, r;
            (null == e || null == (n = e.body) ? void 0 : n.email) && N(e.body.email),
                (null == e || null == (r = e.body) ? void 0 : r.password) && b(e.body.password),
                j(!1);
        }
    };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(i.xBx, {
                className: g.formHeader,
                direction: a.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)("div", { className: g.formImage }),
                    (0, r.jsx)(i.X6q, {
                        className: g.formTitle,
                        variant: "heading-xl/semibold",
                        children: _.intl.string(_.t.uQShv7),
                    }),
                    (0, r.jsx)(i.Text, {
                        className: g.formBody,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: m ? _.intl.string(_.t.sW28gY) : _.intl.string(_.t["gP/vPT"]),
                    }),
                    (0, r.jsx)(i.olH, {
                        className: g.closeButton,
                        onClick: d,
                    }),
                ],
            }),
            (0, r.jsx)(i.hzk, {
                children: (0, r.jsxs)("form", {
                    className: g.formContent,
                    onSubmit: v,
                    children: [
                        (0, r.jsx)(i.xJW, {
                            title: _.intl.string(_.t.dI4d4e),
                            className: g.formItem,
                            children: (0, r.jsx)(i.oil, {
                                value: t,
                                error: S,
                                onChange: (e) => n(e),
                                autoFocus: !0,
                            }),
                        }),
                        (0, r.jsx)(i.xJW, {
                            title: _.intl.string(_.t["CIGa+/"]),
                            className: g.formItem,
                            children: (0, r.jsx)(i.oil, {
                                type: "password",
                                value: x,
                                error: C,
                                onChange: (e) => y(e),
                            }),
                        }),
                        (0, r.jsx)(o.zx, {
                            type: "submit",
                            size: o.zx.Sizes.LARGE,
                            fullWidth: !0,
                            submitting: O,
                            disabled: 0 === t.length || 0 === x.length,
                            children: _.intl.string(_.t.fiNVio),
                        }),
                        m &&
                            (0, r.jsx)(o.zx, {
                                className: g.logoutButton,
                                color: o.zx.Colors.PRIMARY,
                                look: o.zx.Looks.LINK,
                                size: o.zx.Sizes.NONE,
                                onClick: () => {
                                    s.Z.logout("claim_account_modal"), d();
                                },
                                children: _.intl.string(_.t["2jxGen"]),
                            }),
                    ],
                }),
            }),
        ],
    });
}
function N(e) {
    let { email: t, claimRequired: n, onClose: s } = e,
        c = n ? _.t.D7trIC : _.t.JNWX7O;
    return (
        l.useEffect(() => u.Z.flowStep(p.MK.ANY, p.mx.CLAIM_ACCOUNT_SUCCESS), []),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(i.hzk, {
                    className: g.successContent,
                    children: [
                        !n &&
                            (0, r.jsx)(i.olH, {
                                className: g.closeButton,
                                onClick: s,
                            }),
                        (0, r.jsx)("div", { className: g.successImage }),
                        (0, r.jsx)(i.Text, {
                            className: g.successTitle,
                            variant: "text-lg/semibold",
                            children: _.intl.format(c, { email: t }),
                        }),
                        (0, r.jsx)(i.Text, {
                            className: g.successPromotion,
                            variant: "text-md/normal",
                            children: _.intl.string(_.t.eXqM2d),
                        }),
                    ],
                }),
                n
                    ? (0, r.jsx)(i.mzw, {
                          direction: a.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(o.zx, {
                              size: o.zx.Sizes.LARGE,
                              onClick: s,
                              children: _.intl.string(_.t.BddRzc),
                          }),
                      })
                    : (0, r.jsx)(i.mzw, {
                          direction: a.Z.Direction.VERTICAL,
                          children: (0, r.jsx)(o.zx, {
                              color: o.zx.Colors.BRAND,
                              size: o.zx.Sizes.LARGE,
                              onClick: function () {
                                  window.open((0, f.t3)(), "_blank"),
                                      m.default.track(d.rMx.DOWNLOAD_APP, {
                                          platform: (0, f.DW)(),
                                          ptb: !1,
                                          released: !0,
                                          has_e_mail: !0,
                                          referring_location: "Claim Modal",
                                          qr_code: !1,
                                      });
                              },
                              children: _.intl.string(_.t.ygArIS),
                          }),
                      }),
            ],
        })
    );
}
function x(e) {
    let { onClose: t, transitionState: n, claimRequired: o = !1 } = e,
        [s, c] = l.useState(""),
        [a, u] = l.useState(!1);
    return a
        ? (0, r.jsx)(i.Y0X, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, r.jsx)(N, {
                  email: s,
                  claimRequired: o,
                  onClose: t,
              }),
          })
        : (0, r.jsx)(i.Y0X, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, r.jsx)(S, {
                  email: s,
                  setEmail: c,
                  claimRequired: o,
                  onSuccess: () => u(!0),
                  onClose: t,
              }),
          });
}
