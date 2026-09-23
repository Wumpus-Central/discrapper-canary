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
    v = l(759967),
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
        [M, z] = a.useState([]),
        [A, _] = a.useState(!1),
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
    let D = (0, b.NE)(X),
        R = (0, b.Bp)(X),
        T = (0, b.I6)(X),
        Y = (0, b.iZ)(T),
        Z = Y[Math.min(m, Y.length - 1)],
        B = Y.length,
        K = m === B - 1,
        O = "object" == typeof Z ? T[Z.index] : void 0,
        P = "object" == typeof Z ? (M[Z.index] ?? "") : "",
        U = a.useCallback(async () => {
            (G.current || null == L.current || o(L.current), await h());
        }, [o, h]),
        W = a.useCallback(() => g((e) => Math.max(0, e - 1)), []),
        $ = a.useCallback(() => g((e) => Math.min(B - 1, e + 1)), [B]),
        H = a.useCallback((e, t) => {
            (z((l) => {
                let n = [...l];
                return ((n[e] = t), n);
            }),
                I(null));
        }, []),
        J = a.useCallback(async () => {
            if (!A && null != w && null != y && (0, b._F)(T, M)) {
                (_(!0), I(null));
                try {
                    (await d(w, y, (0, b.hU)(T, M)), (G.current = !0), await h());
                } catch (e) {
                    (I((0, f.Xd)(e)), _(!1));
                }
            }
        }, [M, h, d, y, w, T, A]),
        Q = { text: p.intl.string(p.t["13/7kX"]), variant: "secondary", onClick: W, disabled: A },
        V = { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: U, disabled: A },
        ee = O?.optional === !0 && "" === P.trim(),
        et = {
            text: p.intl.string(ee ? p.t["5Wxrcd"] : p.t.PDTjLN),
            variant: "primary",
            onClick: $,
            disabled: ("server" === Z && null == y) || ("object" == typeof Z && !(0, b.In)(O, P)),
        },
        el = {
            text: p.intl.string(v.default.KD2m2Y),
            variant: "primary",
            onClick: J,
            disabled: null == w || null == y || !(0, b._F)(T, M),
            loading: A,
        },
        en = "about" === Z ? t.name : "server" === Z ? R.title : (O?.title ?? t.name);
    return (0, n.jsxs)(r.Modal, {
        transitionState: x,
        onClose: U,
        title: en,
        size: "md",
        actions: [0 === m ? V : Q, K ? el : et],
        children: [
            "about" === Z ? (0, n.jsx)(k, { intro: D, error: F }) : null,
            "server" === Z ? (0, n.jsx)(N, { guilds: s, value: y, hint: R.hint, disabled: A, onChange: C }) : null,
            "object" == typeof Z
                ? (0, n.jsx)(
                      E,
                      { question: O, answer: P, disabled: A, error: F, onChange: (e) => H(Z.index, e) },
                      Z.index,
                  )
                : null,
        ],
    });
}
