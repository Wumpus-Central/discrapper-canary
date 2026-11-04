var a = l(477900),
    n = l(582128),
    i = l(189213),
    r = l(834730),
    s = l(103557),
    u = l(540665),
    o = l(639519),
    d = l(381991),
    c = l(371169),
    C = l(246338),
    g = l(526767),
    h = l(191850),
    f = l(792996);
l.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, onClose: l } = t,
                [p, b] = n.useState(""),
                [k, v] = n.useState(null),
                [m, x] = n.useState(!1),
                y = n.useMemo(() => (0, C.oX)("ConjureCustomWidgetModal"), []),
                S = n.useCallback(() => {
                    l().catch(() => void 0);
                }, [l]),
                w = n.useCallback((t) => {
                    (b(t), v(null));
                }, []),
                j = n.useCallback(async () => {
                    let t = p.trim();
                    if ("" === t) return void v(f.intl.string(h.default.AuyDIq));
                    if (null == y || m) return;
                    (x(!0), v(null));
                    let e = null;
                    try {
                        ((e = await (0, c.gA)({ guild_id: y, install_scope: "user" })),
                            (0, u.ensureConnection)(e),
                            (0, u.dv)(e, (0, g.a)(t)),
                            (0, d.A)(e, "create"),
                            S());
                    } catch (t) {
                        if (null != e) {
                            ((0, d.A)(e, "create"), S());
                            return;
                        }
                        v((0, o.mG)(t));
                    } finally {
                        x(!1);
                    }
                }, [p, y, m, S]),
                A = n.useCallback(() => {
                    j().catch(() => void 0);
                }, [j]);
            return null == y
                ? (0, a.jsx)(i.a, {
                      transitionState: e,
                      onClose: l,
                      title: f.intl.string(h.default.rCU6IG),
                      actions: [{ text: f.intl.string(f.t.cpT0Cq), variant: "secondary", onClick: S }],
                      children: (0, a.jsx)(r.E, {
                          variant: "body-md/normal",
                          color: "text-muted",
                          children: f.intl.string(h.default["UN2H+/"]),
                      }),
                  })
                : (0, a.jsx)(i.a, {
                      transitionState: e,
                      onClose: l,
                      title: f.intl.string(h.default.yI85oV),
                      actions: [
                          { text: f.intl.string(f.t["ETE/oC"]), variant: "secondary", onClick: S, disabled: m },
                          {
                              text: f.intl.string(h.default.MDZXiK),
                              variant: "primary",
                              onClick: A,
                              loading: m,
                              disabled: "" === p.trim(),
                          },
                      ],
                      children: (0, a.jsx)(s.f, {
                          label: f.intl.string(h.default["09BSx3"]),
                          description: f.intl.string(h.default.SKwzvJ),
                          placeholder: f.intl.string(h.default.K7zdCZ),
                          value: p,
                          onChange: w,
                          maxLength: 2e3,
                          showCharacterCount: !0,
                          rows: 5,
                          autoFocus: !0,
                          error: k,
                          disabled: m,
                      }),
                  });
        },
    },
);
