a.d(e, { default: () => p });
var l = a(477900),
    n = a(582128),
    i = a(189213),
    r = a(834730),
    s = a(103557),
    u = a(322227),
    o = a(639519),
    d = a(381991),
    c = a(371169),
    C = a(246338),
    g = a(526767),
    h = a(809526),
    f = a(105292);
function p(t) {
    let { transitionState: e, onClose: a } = t,
        [p, b] = n.useState(""),
        [k, m] = n.useState(null),
        [v, x] = n.useState(!1),
        y = n.useMemo(() => (0, C.oX)("ConjureCustomWidgetModal"), []),
        S = n.useCallback(() => {
            a().catch(() => void 0);
        }, [a]),
        w = n.useCallback((t) => {
            (b(t), m(null));
        }, []),
        j = n.useCallback(async () => {
            let t = p.trim();
            if ("" === t) return void m(f.intl.string(h.default.AuyDIq));
            if (null == y || v) return;
            (x(!0), m(null));
            let e = null;
            try {
                ((e = await (0, c.gA)({ guild_id: y, install_scope: "user" })),
                    (0, u.ensureConnection)(e),
                    (0, u.sendUserMessage)(e, (0, g.aq)(t)),
                    (0, d.A)(e, "create"),
                    S());
            } catch (t) {
                if (null != e) {
                    ((0, d.A)(e, "create"), S());
                    return;
                }
                m((0, o.mG)(t));
            } finally {
                x(!1);
            }
        }, [p, y, v, S]),
        A = n.useCallback(() => {
            j().catch(() => void 0);
        }, [j]);
    return null == y
        ? (0, l.jsx)(i.a, {
              transitionState: e,
              onClose: a,
              title: f.intl.string(h.default.rCU6IG),
              actions: [{ text: f.intl.string(f.t.cpT0Cq), variant: "secondary", onClick: S }],
              children: (0, l.jsx)(r.E, {
                  variant: "body-md/normal",
                  color: "text-muted",
                  children: f.intl.string(h.default["UN2H+/"]),
              }),
          })
        : (0, l.jsx)(i.a, {
              transitionState: e,
              onClose: a,
              title: f.intl.string(h.default.yI85oV),
              actions: [
                  { text: f.intl.string(f.t["ETE/oC"]), variant: "secondary", onClick: S, disabled: v },
                  {
                      text: f.intl.string(h.default.MDZXiK),
                      variant: "primary",
                      onClick: A,
                      loading: v,
                      disabled: "" === p.trim(),
                  },
              ],
              children: (0, l.jsx)(s.f, {
                  label: f.intl.string(h.default["09BSx3"]),
                  description: f.intl.string(h.default.SKwzvJ),
                  placeholder: f.intl.string(h.default.K7zdCZ),
                  value: p,
                  onChange: w,
                  maxLength: g.DC,
                  showCharacterCount: !0,
                  rows: 5,
                  autoFocus: !0,
                  error: k,
                  disabled: v,
              }),
          });
}
