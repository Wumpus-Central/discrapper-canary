l.d(e, { default: () => p });
var n = l(477900),
    a = l(582128),
    i = l(189213),
    s = l(834730),
    r = l(103557),
    u = l(889921),
    o = l(639519),
    d = l(381991),
    c = l(371169),
    C = l(246338),
    g = l(526767),
    h = l(248675),
    f = l(105292);
function p(t) {
    let { transitionState: e, onClose: l } = t,
        [p, k] = a.useState(""),
        [x, b] = a.useState(null),
        [m, v] = a.useState(!1),
        y = a.useMemo(() => (0, C.oX)("ConjureCustomWidgetModal"), []),
        S = a.useCallback(() => {
            l().catch(() => void 0);
        }, [l]),
        w = a.useCallback((t) => {
            (k(t), b(null));
        }, []),
        j = a.useCallback(async () => {
            let t = p.trim();
            if ("" === t) return void b(f.intl.string(h.default.AuyDIq));
            if (null == y || m) return;
            (v(!0), b(null));
            let e = null;
            try {
                ((e = await (0, c.gA)({ guild_id: y, install_scope: "user" })),
                    (0, u.ensureConnection)(e),
                    (0, u.sendUserMessage)(e, (0, g.aq)(t)),
                    (0, d.Ay)(e),
                    S());
            } catch (t) {
                if (null != e) {
                    ((0, d.Ay)(e), S());
                    return;
                }
                b((0, o.mG)(t));
            } finally {
                v(!1);
            }
        }, [p, y, m, S]),
        A = a.useCallback(() => {
            j().catch(() => void 0);
        }, [j]);
    return null == y
        ? (0, n.jsx)(i.a, {
              transitionState: e,
              onClose: l,
              title: f.intl.string(h.default.rCU6IG),
              actions: [{ text: f.intl.string(f.t.cpT0Cq), variant: "secondary", onClick: S }],
              children: (0, n.jsx)(s.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: f.intl.string(h.default["UN2H+/"]),
              }),
          })
        : (0, n.jsx)(i.a, {
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
              children: (0, n.jsx)(r.f, {
                  label: f.intl.string(h.default["09BSx3"]),
                  description: f.intl.string(h.default.SKwzvJ),
                  placeholder: f.intl.string(h.default.K7zdCZ),
                  value: p,
                  onChange: w,
                  maxLength: g.DC,
                  showCharacterCount: !0,
                  rows: 5,
                  autoFocus: !0,
                  error: x,
                  disabled: m,
              }),
          });
}
