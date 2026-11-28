var n = e(477900),
    l = e(582128),
    i = e(189213),
    r = e(834730),
    s = e(103557),
    u = e(540665),
    o = e(639519),
    d = e(381991),
    c = e(233470),
    C = e(246338),
    h = e(526767),
    g = e(258576),
    f = e(792996);
e.d(
    a,
    {},
    {
        default: function (t) {
            let { transitionState: a, onClose: e } = t,
                [b, k] = l.useState(""),
                [p, v] = l.useState(null),
                [m, x] = l.useState(!1),
                y = l.useMemo(() => (0, C.oX)("ConjureCustomWidgetModal"), []),
                S = l.useCallback(() => {
                    e().catch(() => void 0);
                }, [e]),
                w = l.useCallback((t) => {
                    (k(t), v(null));
                }, []),
                j = l.useCallback(async () => {
                    let t = b.trim();
                    if ("" === t) return void v(f.intl.string(g.default.AuyDIq));
                    if (null == y || m) return;
                    (x(!0), v(null));
                    let a = null;
                    try {
                        ((a = await (0, c.gA)({})),
                            (0, u.ensureConnection)(a),
                            (0, u.dv)(a, (0, h.a)(t)),
                            (0, d.A)(a, "create"),
                            S());
                    } catch (t) {
                        if (null != a) {
                            ((0, d.A)(a, "create"), S());
                            return;
                        }
                        v((0, o.mG)(t));
                    } finally {
                        x(!1);
                    }
                }, [b, y, m, S]),
                A = l.useCallback(() => {
                    j().catch(() => void 0);
                }, [j]);
            return null == y
                ? (0, n.jsx)(i.a, {
                      transitionState: a,
                      onClose: e,
                      title: f.intl.string(g.default.rCU6IG),
                      actions: [{ text: f.intl.string(f.t.cpT0Cq), variant: "secondary", onClick: S }],
                      children: (0, n.jsx)(r.E, {
                          variant: "body-md/normal",
                          color: "text-muted",
                          children: f.intl.string(g.default["UN2H+/"]),
                      }),
                  })
                : (0, n.jsx)(i.a, {
                      transitionState: a,
                      onClose: e,
                      title: f.intl.string(g.default.yI85oV),
                      actions: [
                          { text: f.intl.string(f.t["ETE/oC"]), variant: "secondary", onClick: S, disabled: m },
                          {
                              text: f.intl.string(g.default.MDZXiK),
                              variant: "primary",
                              onClick: A,
                              loading: m,
                              disabled: "" === b.trim(),
                          },
                      ],
                      children: (0, n.jsx)(s.f, {
                          label: f.intl.string(g.default["09BSx3"]),
                          description: f.intl.string(g.default.SKwzvJ),
                          placeholder: f.intl.string(g.default.K7zdCZ),
                          value: b,
                          onChange: w,
                          maxLength: 2e3,
                          showCharacterCount: !0,
                          rows: 5,
                          autoFocus: !0,
                          error: p,
                          disabled: m,
                      }),
                  });
        },
    },
);
