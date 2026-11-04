var a = i(477900),
    s = i(582128),
    n = i(935462),
    l = i(534514),
    r = i(834730),
    o = i(331322),
    c = i(95477),
    d = i(821609),
    m = i(123292),
    u = i(830215),
    h = i(631670),
    x = i(235986),
    j = i(894778),
    p = i(129230),
    C = i(53505),
    f = i(652215),
    g = i(315290),
    b = i(792996),
    A = i(27977);
function N(t) {
    let { email: e, setEmail: i, claimRequired: p, onSuccess: C, onClose: f } = t,
        [N, S] = s.useState(),
        [v, _] = s.useState(""),
        [y, k] = s.useState(""),
        [E, w] = s.useState(!1);
    return (
        s.useEffect(() => j.A.flowStep(g.do.ANY, g.hc.CLAIM_ACCOUNT), []),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)(n.rQ, {
                    className: A._5,
                    direction: x.A.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, a.jsx)("div", { className: A.gD }),
                        (0, a.jsx)(l.D, {
                            className: A.Hc,
                            variant: "heading-xl/semibold",
                            children: b.intl.string(b.t["uQShv/"]),
                        }),
                        (0, a.jsx)(r.E, {
                            className: A.bQ,
                            variant: "body-md/normal",
                            color: "text-default",
                            children: p ? b.intl.string(b.t.sW28gZ) : b.intl.string(b.t["gP/vPe"]),
                        }),
                        (0, a.jsx)(n.s_, { className: A.b, onClick: f }),
                    ],
                }),
                (0, a.jsx)(n.$m, {
                    children: (0, a.jsx)("form", {
                        className: A.oB,
                        onSubmit: async function (t) {
                            (t.preventDefault(), w(!0), S(""), k(""));
                            try {
                                (await (0, h.KD)({ email: e, password: v }), w(!1), C());
                            } catch (t) {
                                (t?.body?.email && S(t.body.email), t?.body?.password && k(t.body.password), w(!1));
                            }
                        },
                        children: (0, a.jsxs)(o.B, {
                            gap: 16,
                            children: [
                                (0, a.jsx)(c.k, {
                                    label: b.intl.string(b.t.dI4d4S),
                                    value: e,
                                    error: N,
                                    onChange: (t) => i(t),
                                    autoFocus: !0,
                                }),
                                (0, a.jsx)(c.k, {
                                    label: b.intl.string(b.t["CIGa+7"]),
                                    type: "password",
                                    value: v,
                                    error: y,
                                    onChange: (t) => _(t),
                                }),
                                (0, a.jsx)(d.$, {
                                    text: b.intl.string(b.t.fiNVin),
                                    variant: "primary",
                                    fullWidth: !0,
                                    type: "submit",
                                    loading: E,
                                    disabled: 0 === e.length || 0 === v.length,
                                }),
                                p &&
                                    (0, a.jsx)("div", {
                                        className: A.pV,
                                        children: (0, a.jsx)(m.Q, {
                                            text: b.intl.string(b.t["2jxGer"]),
                                            onClick: () => {
                                                (u.A.logout("claim_account_modal"), f());
                                            },
                                        }),
                                    }),
                            ],
                        }),
                    }),
                }),
            ],
        })
    );
}
function S(t) {
    let { email: e, claimRequired: i, onClose: l } = t,
        o = i ? b.t.D7trIB : b.t.JNWX7G;
    return (
        s.useEffect(() => j.A.flowStep(g.do.ANY, g.hc.CLAIM_ACCOUNT_SUCCESS), []),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsxs)(n.$m, {
                    className: A.Zc,
                    children: [
                        !i && (0, a.jsx)(n.s_, { className: A.b, onClick: l }),
                        (0, a.jsx)("div", { className: A.hW }),
                        (0, a.jsx)(r.E, {
                            className: A.QK,
                            variant: "body-lg/semibold",
                            children: b.intl.format(o, { email: e }),
                        }),
                        (0, a.jsx)(r.E, {
                            className: A.pQ,
                            variant: "body-md/normal",
                            children: b.intl.string(b.t.eXqM2d),
                        }),
                    ],
                }),
                i
                    ? (0, a.jsx)(n.jl, {
                          direction: x.A.Direction.VERTICAL,
                          children: (0, a.jsx)(d.$, {
                              text: b.intl.string(b.t.BddRzS),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: l,
                          }),
                      })
                    : (0, a.jsx)(n.jl, {
                          direction: x.A.Direction.VERTICAL,
                          children: (0, a.jsx)(d.$, {
                              text: b.intl.string(b.t.ygArIV),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  (window.open((0, C.SU)(), "_blank"),
                                      p.default.track(f.HAw.DOWNLOAD_APP, {
                                          platform: (0, C.Vf)(),
                                          ptb: !1,
                                          released: !0,
                                          has_e_mail: !0,
                                          referring_location: "Claim Modal",
                                          qr_code: !1,
                                      }));
                              },
                          }),
                      }),
            ],
        })
    );
}
i.d(
    e,
    {},
    {
        default: function (t) {
            let { onClose: e, transitionState: i, claimRequired: l = !1 } = t,
                [r, o] = s.useState(""),
                [c, d] = s.useState(!1);
            return c
                ? (0, a.jsx)(n.EO, {
                      transitionState: i,
                      parentComponent: "ClaimAccountModal",
                      children: (0, a.jsx)(S, { email: r, claimRequired: l, onClose: e }),
                  })
                : (0, a.jsx)(n.EO, {
                      transitionState: i,
                      parentComponent: "ClaimAccountModal",
                      children: (0, a.jsx)(N, {
                          email: r,
                          setEmail: o,
                          claimRequired: l,
                          onSuccess: () => d(!0),
                          onClose: e,
                      }),
                  });
        },
    },
);
