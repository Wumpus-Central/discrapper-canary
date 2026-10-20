l.d(t, { default: () => w });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    r = l(189213),
    s = l(476713),
    u = l(215026),
    d = l(177953),
    c = l(834730),
    o = l(289873),
    x = l(691885),
    h = l(103557),
    m = l(548118),
    f = l(245179),
    j = l(639519),
    v = l(845329),
    b = l(319481),
    p = l(261425),
    g = l(105292),
    C = l(699900);
let k = { shield: s.l, hammer: u.w, group: d.n };
function y(e) {
    let { error: t } = e;
    return null != t
        ? (0, n.jsx)("div", {
              className: C.rf,
              children: (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: t }),
          })
        : (0, n.jsx)("div", { className: C.Lq, children: (0, n.jsx)(o.y, {}) });
}
function E(e) {
    let { intro: t, error: l } = e;
    return null == t
        ? (0, n.jsx)(y, { error: l })
        : (0, n.jsxs)("div", {
              className: C.rf,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-default", children: t.lead }),
                  t.points.map((e, t) => {
                      let l = k[e.icon];
                      return (0, n.jsxs)(
                          "div",
                          {
                              className: C.f_,
                              children: [
                                  (0, n.jsx)(l, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      className: C.sl,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: C.zx,
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
function S(e) {
    let { guilds: t, value: l, hint: i, disabled: r, onChange: s } = e,
        u = g.intl.string(p.default.lHT5Dp),
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
              className: C.rf,
              children: (0, n.jsx)(c.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: g.intl.string(p.default["6ys5dn"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: C.rf,
              children: [
                  (0, n.jsx)(x.l, {
                      selectionMode: "single",
                      label: u,
                      options: d,
                      value: l ?? void 0,
                      onSelectionChange: s,
                      disabled: r,
                  }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: i }),
              ],
          });
}
function N(e) {
    let { question: t, answer: l, disabled: a, error: i, onChange: r } = e;
    return null == t
        ? (0, n.jsx)(y, { error: i })
        : (0, n.jsxs)("div", {
              className: C.rf,
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
                      ? (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: t.hint })
                      : null,
              ],
          });
}
function w(e) {
    var t, l;
    let {
            template: s,
            guildId: u,
            eligibleGuilds: d,
            onStart: c,
            onSubmit: o,
            onCancel: x,
            onSkip: h,
            transitionState: m,
            onClose: C,
        } = e,
        [k, y] = a.useState(0),
        [w, M] = a.useState(() => (d.some((e) => e.id === u) ? u : (d[0]?.id ?? null))),
        [z, A] = a.useState(null),
        [F, I] = a.useState(null),
        [G, T] = a.useState([]),
        [_, D] = a.useState(!1),
        [L, q] = a.useState(null),
        R = a.useRef(null),
        W = a.useRef(!1);
    a.useEffect(() => {
        if (null == w) return;
        let e = !1;
        return (
            c(w)
                .then((t) => {
                    ((R.current = t.projectId), e) ? x(t.projectId) : (I(t.intake), A(t.projectId));
                })
                .catch((t) => {
                    e || q((0, j.mG)(t));
                }),
            () => {
                e = !0;
            }
        );
    }, []);
    let H = (0, i.bG)([f.A], () => (null == z ? null : (0, v.Wn)(f.A.getMessages(z))), [z]),
        P = F ?? H,
        X = (0, i.bG)([f.A], () => null != z && null != f.A.getFinishedAt(z), [z]);
    ((t = s.id),
        (l = null == F && null != H),
        a.useEffect(() => {
            null != z && l && (0, b.prepareTemplate)(z, t);
        }, [z, t, l]));
    let $ = X && null == P;
    a.useEffect(() => {
        $ && null != z && ((W.current = !0), h(z), C().catch(() => void 0));
    }, [C, h, z, $]);
    let B = (0, v.S3)(P),
        J = (0, v.SF)(P),
        K = (0, v.b5)(P),
        O = (0, v.Df)(u, d),
        Q = (0, v.h_)(K, O),
        U = Q[Math.min(k, Q.length - 1)],
        V = Q.length,
        Y = k === V - 1,
        Z = "object" == typeof U ? K[U.index] : void 0,
        ee = "object" == typeof U ? (G[U.index] ?? "") : "",
        et = a.useCallback(async () => {
            (W.current || null == R.current || x(R.current), await C());
        }, [x, C]),
        el = a.useCallback(() => y((e) => Math.max(0, e - 1)), []),
        en = a.useCallback(() => y((e) => Math.min(V - 1, e + 1)), [V]),
        ea = a.useCallback((e, t) => {
            (T((l) => {
                let n = [...l];
                return ((n[e] = t), n);
            }),
                q(null));
        }, []),
        ei = a.useCallback(async () => {
            if (!_ && null != z && null != w && (0, v.n0)(K, G)) {
                (D(!0), q(null));
                try {
                    (await o(z, w, (0, v.kt)(K, G)), (W.current = !0), await C());
                } catch (e) {
                    (q((0, j.mG)(e)), D(!1));
                }
            }
        }, [G, C, o, w, z, K, _]),
        er = { text: g.intl.string(g.t["13/7kX"]), variant: "secondary", onClick: el, disabled: _ },
        es = { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", onClick: et, disabled: _ },
        eu = Z?.optional === !0 && "" === ee.trim(),
        ed = {
            text: g.intl.string(eu ? g.t["5Wxrcd"] : g.t.PDTjLN),
            variant: "primary",
            onClick: en,
            disabled: ("server" === U && null == w) || ("object" == typeof U && !(0, v.Fl)(Z, ee)),
        },
        ec = {
            text: g.intl.string(p.default["5iv8MF"]),
            variant: "primary",
            onClick: ei,
            disabled: null == z || null == w || !(0, v.n0)(K, G),
            loading: _,
        },
        eo = "about" === U ? s.name : "server" === U ? J.title : (Z?.title ?? s.name);
    return (0, n.jsxs)(r.a, {
        transitionState: m,
        onClose: et,
        title: eo,
        size: "md",
        actions: "none" === O ? [es] : [0 === k ? es : er, Y ? ec : ed],
        children: [
            "about" === U ? (0, n.jsx)(E, { intro: B, error: L }) : null,
            "server" === U ? (0, n.jsx)(S, { guilds: d, value: w, hint: J.hint, disabled: _, onChange: M }) : null,
            "object" == typeof U
                ? (0, n.jsx)(
                      N,
                      { question: Z, answer: ee, disabled: _, error: L, onChange: (e) => ea(U.index, e) },
                      U.index,
                  )
                : null,
        ],
    });
}
