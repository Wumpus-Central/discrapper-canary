l.d(t, { default: () => w });
var n = l(477900),
    a = l(582128),
    s = l(17928),
    i = l(189213),
    r = l(476713),
    u = l(215026),
    d = l(177953),
    c = l(834730),
    o = l(289873),
    x = l(691885),
    h = l(103557),
    m = l(548118),
    v = l(936494),
    f = l(993396),
    j = l(783791),
    g = l(50617),
    b = l(375708),
    p = l(473306);
let C = { shield: r.l, hammer: u.w, group: d.n };
function k(e) {
    let { error: t } = e;
    return null != t
        ? (0, n.jsx)("div", {
              className: p.rf,
              children: (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: t }),
          })
        : (0, n.jsx)("div", { className: p.Lq, children: (0, n.jsx)(o.y, {}) });
}
function y(e) {
    let { intro: t, error: l } = e;
    return null == t
        ? (0, n.jsx)(k, { error: l })
        : (0, n.jsxs)("div", {
              className: p.rf,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-default", children: t.lead }),
                  t.points.map((e, t) => {
                      let l = C[e.icon];
                      return (0, n.jsxs)(
                          "div",
                          {
                              className: p.f_,
                              children: [
                                  (0, n.jsx)(l, {
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
                          t,
                      );
                  }),
              ],
          });
}
function E(e) {
    let { guilds: t, value: l, hint: s, disabled: i, onChange: r } = e,
        u = b.intl.string(g.default["6NyGSZ"]),
        d = a.useMemo(
            () => [
                {
                    label: u,
                    options: t.map((e) => ({
                        id: `template-wizard-${e.id}`,
                        value: e.id,
                        label: e.name,
                        leading: (0, n.jsx)(m.Ay, { guild: e, size: m.Ay.Sizes.MINI, active: !0 }),
                    })),
                },
            ],
            [t, u],
        );
    return 0 === t.length
        ? (0, n.jsx)("div", {
              className: p.rf,
              children: (0, n.jsx)(c.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: b.intl.string(g.default.ipwoYO),
              }),
          })
        : (0, n.jsxs)("div", {
              className: p.rf,
              children: [
                  (0, n.jsx)(x.l, {
                      selectionMode: "single",
                      label: u,
                      options: d,
                      value: l ?? void 0,
                      onSelectionChange: r,
                      disabled: i,
                  }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
              ],
          });
}
function N(e) {
    let { questions: t, answers: l, disabled: a, error: s, onChange: i } = e;
    return 0 === t.length
        ? (0, n.jsx)(k, { error: s })
        : (0, n.jsx)("div", {
              className: p.rf,
              children: t.map((e, r) =>
                  (0, n.jsxs)(
                      "div",
                      {
                          className: p.zx,
                          children: [
                              t.length > 1
                                  ? (0, n.jsxs)(c.E, {
                                        variant: "text-md/medium",
                                        color: "text-default",
                                        children: [
                                            e.title,
                                            !0 === e.optional
                                                ? (0, n.jsxs)(c.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      tag: "span",
                                                      children: [" ", b.intl.string(g.default.sroJQp)],
                                                  })
                                                : null,
                                        ],
                                    })
                                  : null,
                              (0, n.jsx)(h.f, {
                                  label: e.title,
                                  hideLabel: !0,
                                  placeholder: e.placeholder,
                                  rows: t.length > 1 ? 4 : 8,
                                  autosize: !0,
                                  autoFocus: 0 === r,
                                  value: l[r] ?? "",
                                  error: r === t.length - 1 ? s : null,
                                  disabled: a,
                                  onChange: (e) => i(r, e),
                              }),
                              null != e.hint
                                  ? (0, n.jsx)(c.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: e.hint,
                                    })
                                  : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          });
}
function w(e) {
    let {
            template: t,
            guildId: l,
            eligibleGuilds: r,
            onStart: u,
            onSubmit: d,
            onCancel: c,
            onSkip: o,
            transitionState: x,
            onClose: h,
        } = e,
        [m, p] = a.useState(0),
        [C, k] = a.useState(() => (r.some((e) => e.id === l) ? l : (r[0]?.id ?? null))),
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
                .then((t) => {
                    ((q.current = t), e ? c(t) : S(t));
                })
                .catch((t) => {
                    e || L((0, v.Xd)(t));
                }),
            () => {
                e = !0;
            }
        );
    }, []);
    let I = (0, s.bG)([j.Ay], () => (null == w ? null : (0, f.rL)(j.Ay.getMessages(w))), [w]),
        X = (0, s.bG)([j.Ay], () => null != w && null != j.Ay.getFinishedAt(w), [w]) && null == I;
    a.useEffect(() => {
        X && null != w && ((G.current = !0), o(w), h().catch(() => void 0));
    }, [h, o, w, X]);
    let D = (0, f.NE)(I),
        R = (0, f.Bp)(I),
        T = (0, f.I6)(I),
        Y = f.pc[m],
        B = f.pc.length,
        J = m === B - 1,
        K = a.useCallback(async () => {
            (G.current || null == q.current || c(q.current), await h());
        }, [c, h]),
        O = a.useCallback(() => p((e) => Math.max(0, e - 1)), []),
        P = a.useCallback(() => p((e) => Math.min(B - 1, e + 1)), [B]),
        Q = a.useCallback((e, t) => {
            (A((l) => {
                let n = [...l];
                return ((n[e] = t), n);
            }),
                L(null));
        }, []),
        U = a.useCallback(async () => {
            if (!M && null != w && null != C && (0, f._F)(T, z)) {
                (_(!0), L(null));
                try {
                    (await d(w, C, (0, f.hU)(T, z)), (G.current = !0), await h());
                } catch (e) {
                    (L((0, v.Xd)(e)), _(!1));
                }
            }
        }, [z, h, d, C, w, T, M]),
        Z = { text: b.intl.string(b.t["13/7kX"]), variant: "secondary", onClick: O, disabled: M },
        $ = { text: b.intl.string(b.t["ETE/oC"]), variant: "secondary", onClick: K, disabled: M },
        H = { text: b.intl.string(b.t.PDTjLN), variant: "primary", onClick: P, disabled: "server" === Y && null == C },
        V = {
            text: b.intl.string(g.default.KD2m2Y),
            variant: "primary",
            onClick: U,
            disabled: null == w || null == C || !(0, f._F)(T, z),
            loading: M,
        },
        W = "about" === Y ? t.name : "server" === Y ? R.title : 1 === T.length ? T[0].title : t.name;
    return (0, n.jsxs)(i.Modal, {
        transitionState: x,
        onClose: K,
        title: W,
        size: "md",
        actions: [0 === m ? $ : Z, J ? V : H],
        children: [
            "about" === Y ? (0, n.jsx)(y, { intro: D, error: F }) : null,
            "server" === Y ? (0, n.jsx)(E, { guilds: r, value: C, hint: R.hint, disabled: M, onChange: k }) : null,
            "questions" === Y ? (0, n.jsx)(N, { questions: T, answers: z, disabled: M, error: F, onChange: Q }) : null,
        ],
    });
}
