t.d(l, { default: () => w });
var n = t(477900),
    a = t(582128),
    s = t(17928),
    i = t(189213),
    r = t(476713),
    u = t(215026),
    d = t(177953),
    c = t(834730),
    o = t(289873),
    h = t(691885),
    x = t(103557),
    m = t(548118),
    v = t(936494),
    f = t(993396),
    j = t(783791),
    b = t(50617),
    g = t(375708),
    p = t(473306);
let C = { shield: r.l, hammer: u.w, group: d.n };
function k(e) {
    let { error: l } = e;
    return null != l
        ? (0, n.jsx)("div", {
              className: p.rf,
              children: (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: l }),
          })
        : (0, n.jsx)("div", { className: p.Lq, children: (0, n.jsx)(o.y, {}) });
}
function y(e) {
    let { intro: l, error: t } = e;
    return null == l
        ? (0, n.jsx)(k, { error: t })
        : (0, n.jsxs)("div", {
              className: p.rf,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-default", children: l.lead }),
                  l.points.map((e, l) => {
                      let t = C[e.icon];
                      return (0, n.jsxs)(
                          "div",
                          {
                              className: p.f_,
                              children: [
                                  (0, n.jsx)(t, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      className: p.sl,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: p.zx,
                                      children: [
                                          (0, n.jsx)(c.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              children: e.title,
                                          }),
                                          null != e.subtext && "" !== e.subtext
                                              ? (0, n.jsx)(c.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: e.subtext,
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          },
                          l,
                      );
                  }),
              ],
          });
}
function N(e) {
    let { guilds: l, value: t, hint: s, disabled: i, onChange: r } = e,
        u = g.intl.string(b.default["6NyGSZ"]),
        d = a.useMemo(
            () => [
                {
                    label: u,
                    options: l.map((e) => ({
                        id: `template-wizard-${e.id}`,
                        value: e.id,
                        label: e.name,
                        leading: (0, n.jsx)(m.Ay, { guild: e, size: m.Ay.Sizes.MINI, active: !0 }),
                    })),
                },
            ],
            [l, u],
        );
    return 0 === l.length
        ? (0, n.jsx)("div", {
              className: p.rf,
              children: (0, n.jsx)(c.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: g.intl.string(b.default.ipwoYO),
              }),
          })
        : (0, n.jsxs)("div", {
              className: p.rf,
              children: [
                  (0, n.jsx)(h.l, {
                      selectionMode: "single",
                      label: u,
                      options: d,
                      value: t ?? void 0,
                      onSelectionChange: r,
                      disabled: i,
                  }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
              ],
          });
}
function E(e) {
    let { questions: l, answers: t, disabled: a, error: s, onChange: i } = e;
    return 0 === l.length
        ? (0, n.jsx)(k, { error: s })
        : (0, n.jsx)("div", {
              className: p.rf,
              children: l.map((e, r) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: p.zx,
                          children: [
                              l.length > 1
                                  ? (0, n.jsx)(c.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: e.title,
                                    })
                                  : null,
                              (0, n.jsx)(x.f, {
                                  label: e.title,
                                  hideLabel: !0,
                                  placeholder: e.placeholder,
                                  rows: l.length > 1 ? 4 : 8,
                                  autosize: !0,
                                  autoFocus: 0 === r,
                                  value: t[r] ?? "",
                                  error: r === l.length - 1 ? s : null,
                                  disabled: a,
                                  onChange: (e) => i(r, e),
                              }),
                          ],
                      },
                      e.id,
                  ),
              ),
          });
}
function w(e) {
    let {
            template: l,
            guildId: t,
            eligibleGuilds: r,
            onStart: u,
            onSubmit: d,
            onCancel: c,
            onSkip: o,
            transitionState: h,
            onClose: x,
        } = e,
        [m, p] = a.useState(0),
        [C, k] = a.useState(() => (r.some((e) => e.id === t) ? t : (r[0]?.id ?? null))),
        [w, S] = a.useState(null),
        [z, A] = a.useState([]),
        [M, _] = a.useState(!1),
        [F, L] = a.useState(null),
        q = a.useRef(null),
        G = a.useRef(!1);
    a.useEffect(() => {
        if (null == C) return;
        let e = !1;
        return (
            u(C)
                .then((l) => {
                    ((q.current = l), e ? c(l) : S(l));
                })
                .catch((l) => {
                    e || L((0, v.Xd)(l));
                }),
            () => {
                e = !0;
            }
        );
    }, []);
    let I = (0, s.bG)([j.Ay], () => (null == w ? null : (0, f.rL)(j.Ay.getMessages(w))), [w]),
        X = (0, s.bG)([j.Ay], () => null != w && null != j.Ay.getFinishedAt(w), [w]) && null == I;
    a.useEffect(() => {
        X && null != w && ((G.current = !0), o(w), x().catch(() => void 0));
    }, [x, o, w, X]);
    let D = (0, f.NE)(I),
        R = (0, f.Bp)(I),
        T = (0, f.I6)(I),
        Y = f.pc[m],
        B = f.pc.length,
        K = m === B - 1,
        O = a.useCallback(async () => {
            (G.current || null == q.current || c(q.current), await x());
        }, [c, x]),
        P = a.useCallback(() => p((e) => Math.max(0, e - 1)), []),
        U = a.useCallback(() => p((e) => Math.min(B - 1, e + 1)), [B]),
        Z = a.useCallback((e, l) => {
            (A((t) => {
                let n = [...t];
                return ((n[e] = l), n);
            }),
                L(null));
        }, []),
        $ = a.useCallback(async () => {
            if (!M && null != w && null != C && (0, f._F)(T, z)) {
                (_(!0), L(null));
                try {
                    (await d(w, C, (0, f.hU)(T, z)), (G.current = !0), await x());
                } catch (e) {
                    (L((0, v.Xd)(e)), _(!1));
                }
            }
        }, [z, x, d, C, w, T, M]),
        H = { text: g.intl.string(g.t["13/7kX"]), variant: "secondary", onClick: P, disabled: M },
        J = { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", onClick: O, disabled: M },
        Q = { text: g.intl.string(g.t.PDTjLN), variant: "primary", onClick: U, disabled: "server" === Y && null == C },
        V = {
            text: g.intl.string(b.default.KD2m2Y),
            variant: "primary",
            onClick: $,
            disabled: null == w || null == C || !(0, f._F)(T, z),
            loading: M,
        },
        W = "about" === Y ? l.name : "server" === Y ? R.title : 1 === T.length ? T[0].title : l.name;
    return (0, n.jsxs)(i.Modal, {
        transitionState: h,
        onClose: O,
        title: W,
        size: "md",
        actions: [0 === m ? J : H, K ? V : Q],
        children: [
            "about" === Y ? (0, n.jsx)(y, { intro: D, error: F }) : null,
            "server" === Y ? (0, n.jsx)(N, { guilds: r, value: C, hint: R.hint, disabled: M, onChange: k }) : null,
            "questions" === Y ? (0, n.jsx)(E, { questions: T, answers: z, disabled: M, error: F, onChange: Z }) : null,
        ],
    });
}
