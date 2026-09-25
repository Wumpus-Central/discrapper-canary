l.d(t, { default: () => w });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    r = l(189213),
    s = l(476713),
    u = l(215026),
    d = l(177953),
    o = l(834730),
    c = l(289873),
    x = l(691885),
    h = l(103557),
    m = l(548118),
    f = l(936494),
    b = l(993396),
    j = l(783791),
    v = l(50617),
    p = l(375708),
    g = l(473306);
let y = { shield: s.l, hammer: u.w, group: d.n };
function C(e) {
    let { error: t } = e;
    return null != t
        ? (0, n.jsx)("div", {
              className: g.rf,
              children: (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: t }),
          })
        : (0, n.jsx)("div", { className: g.Lq, children: (0, n.jsx)(c.y, {}) });
}
function k(e) {
    let { intro: t, error: l } = e;
    return null == t
        ? (0, n.jsx)(C, { error: l })
        : (0, n.jsxs)("div", {
              className: g.rf,
              children: [
                  (0, n.jsx)(o.E, { variant: "text-md/medium", color: "text-default", children: t.lead }),
                  t.points.map((e, t) => {
                      let l = y[e.icon];
                      return (0, n.jsxs)(
                          "div",
                          {
                              className: g.f_,
                              children: [
                                  (0, n.jsx)(l, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      className: g.sl,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: g.zx,
                                      children: [
                                          (0, n.jsx)(o.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              children: e.title,
                                          }),
                                          null != e.subtext && "" !== e.subtext
                                              ? (0, n.jsx)(o.E, {
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
function N(e) {
    let { guilds: t, value: l, hint: i, disabled: r, onChange: s } = e,
        u = p.intl.string(v.default["6NyGSZ"]),
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
              className: g.rf,
              children: (0, n.jsx)(o.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: p.intl.string(v.default.ipwoYO),
              }),
          })
        : (0, n.jsxs)("div", {
              className: g.rf,
              children: [
                  (0, n.jsx)(x.l, {
                      selectionMode: "single",
                      label: u,
                      options: d,
                      value: l ?? void 0,
                      onSelectionChange: s,
                      disabled: r,
                  }),
                  (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: i }),
              ],
          });
}
function E(e) {
    let { question: t, answer: l, disabled: a, error: i, onChange: r } = e;
    return null == t
        ? (0, n.jsx)(C, { error: i })
        : (0, n.jsxs)("div", {
              className: g.rf,
              children: [
                  (0, n.jsx)(h.f, {
                      label: t.title,
                      hideLabel: !0,
                      placeholder: t.placeholder,
                      rows: 8,
                      autosize: !0,
                      autoFocus: !0,
                      value: l,
                      error: i,
                      disabled: a,
                      onChange: r,
                  }),
                  null != t.hint
                      ? (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: t.hint })
                      : null,
              ],
          });
}
function w(e) {
    let {
            template: t,
            guildId: l,
            eligibleGuilds: s,
            onStart: u,
            onSubmit: d,
            onCancel: o,
            onSkip: c,
            transitionState: x,
            onClose: h,
        } = e,
        [m, g] = a.useState(0),
        [y, C] = a.useState(() => (s.some((e) => e.id === l) ? l : (s[0]?.id ?? null))),
        [w, S] = a.useState(null),
        [z, A] = a.useState([]),
        [M, _] = a.useState(!1),
        [F, I] = a.useState(null),
        L = a.useRef(null),
        G = a.useRef(!1);
    a.useEffect(() => {
        if (null == y) return;
        let e = !1;
        return (
            u(y)
                .then((t) => {
                    ((L.current = t), e ? o(t) : S(t));
                })
                .catch((t) => {
                    e || I((0, f.Xd)(t));
                }),
            () => {
                e = !0;
            }
        );
    }, []);
    let X = (0, i.bG)([j.Ay], () => (null == w ? null : (0, b.rL)(j.Ay.getMessages(w))), [w]),
        q = (0, i.bG)([j.Ay], () => null != w && null != j.Ay.getFinishedAt(w), [w]) && null == X;
    a.useEffect(() => {
        q && null != w && ((G.current = !0), c(w), h().catch(() => void 0));
    }, [h, c, w, q]);
    let B = (0, b.NE)(X),
        D = (0, b.Bp)(X),
        R = (0, b.I6)(X),
        T = (0, b.iZ)(R, (0, b.Bl)(l, s)),
        Y = T[Math.min(m, T.length - 1)],
        Z = T.length,
        K = m === Z - 1,
        O = "object" == typeof Y ? R[Y.index] : void 0,
        P = "object" == typeof Y ? (z[Y.index] ?? "") : "",
        U = a.useCallback(async () => {
            (G.current || null == L.current || o(L.current), await h());
        }, [o, h]),
        W = a.useCallback(() => g((e) => Math.max(0, e - 1)), []),
        $ = a.useCallback(() => g((e) => Math.min(Z - 1, e + 1)), [Z]),
        H = a.useCallback((e, t) => {
            (A((l) => {
                let n = [...l];
                return ((n[e] = t), n);
            }),
                I(null));
        }, []),
        J = a.useCallback(async () => {
            if (!M && null != w && null != y && (0, b._F)(R, z)) {
                (_(!0), I(null));
                try {
                    (await d(w, y, (0, b.hU)(R, z)), (G.current = !0), await h());
                } catch (e) {
                    (I((0, f.Xd)(e)), _(!1));
                }
            }
        }, [z, h, d, y, w, R, M]),
        Q = { text: p.intl.string(p.t["13/7kX"]), variant: "secondary", onClick: W, disabled: M },
        V = { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: U, disabled: M },
        ee = O?.optional === !0 && "" === P.trim(),
        et = {
            text: p.intl.string(ee ? p.t["5Wxrcd"] : p.t.PDTjLN),
            variant: "primary",
            onClick: $,
            disabled: ("server" === Y && null == y) || ("object" == typeof Y && !(0, b.In)(O, P)),
        },
        el = {
            text: p.intl.string(v.default.KD2m2Y),
            variant: "primary",
            onClick: J,
            disabled: null == w || null == y || !(0, b._F)(R, z),
            loading: M,
        },
        en = "about" === Y ? t.name : "server" === Y ? D.title : (O?.title ?? t.name);
    return (0, n.jsxs)(r.a, {
        transitionState: x,
        onClose: U,
        title: en,
        size: "md",
        actions: [0 === m ? V : Q, K ? el : et],
        children: [
            "about" === Y ? (0, n.jsx)(k, { intro: B, error: F }) : null,
            "server" === Y ? (0, n.jsx)(N, { guilds: s, value: y, hint: D.hint, disabled: M, onChange: C }) : null,
            "object" == typeof Y
                ? (0, n.jsx)(
                      E,
                      { question: O, answer: P, disabled: M, error: F, onChange: (e) => H(Y.index, e) },
                      Y.index,
                  )
                : null,
        ],
    });
}
