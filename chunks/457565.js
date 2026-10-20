l.d(e, { default: () => x });
var n = l(477900),
    a = l(582128),
    i = l(189213),
    s = l(834730),
    r = l(103557),
    u = l(976860),
    o = l(319481),
    d = l(639519),
    c = l(371169),
    C = l(246338),
    g = l(526767),
    h = l(652215),
    f = l(746080),
    p = l(261425),
    k = l(105292);
function x(t) {
    let { transitionState: e, onClose: l } = t,
        [x, b] = a.useState(""),
        [m, v] = a.useState(null),
        [y, E] = a.useState(!1),
        N = a.useMemo(() => (0, C.oX)("ConjureCustomWidgetModal"), []),
        S = a.useCallback(() => {
            l().catch(() => void 0);
        }, [l]),
        V = a.useCallback((t) => {
            (b(t), v(null));
        }, []),
        w = a.useCallback(async () => {
            let t = x.trim();
            if ("" === t) return void v(k.intl.string(p.default.AuyDIq));
            if (null == N || y) return;
            (E(!0), v(null));
            let e = null;
            try {
                ((e = await (0, c.gA)({ guild_id: N, install_scope: "user" })),
                    (0, o.ensureConnection)(e),
                    (0, o.sendUserMessage)(e, (0, g.aq)(t)),
                    (0, u.pX)(h.BVt.CHANNEL(N, f.VV.CONJURE, e)),
                    S());
            } catch (t) {
                if (null != e) {
                    ((0, u.pX)(h.BVt.CHANNEL(N, f.VV.CONJURE, e)), S());
                    return;
                }
                v((0, d.mG)(t));
            } finally {
                E(!1);
            }
        }, [x, N, y, S]),
        j = a.useCallback(() => {
            w().catch(() => void 0);
        }, [w]);
    return null == N
        ? (0, n.jsx)(i.a, {
              transitionState: e,
              onClose: l,
              title: k.intl.string(p.default.rCU6IG),
              actions: [{ text: k.intl.string(k.t.cpT0Cq), variant: "secondary", onClick: S }],
              children: (0, n.jsx)(s.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: k.intl.string(p.default["UN2H+/"]),
              }),
          })
        : (0, n.jsx)(i.a, {
              transitionState: e,
              onClose: l,
              title: k.intl.string(p.default.yI85oV),
              actions: [
                  { text: k.intl.string(k.t["ETE/oC"]), variant: "secondary", onClick: S, disabled: y },
                  {
                      text: k.intl.string(p.default.MDZXiK),
                      variant: "primary",
                      onClick: j,
                      loading: y,
                      disabled: "" === x.trim(),
                  },
              ],
              children: (0, n.jsx)(r.f, {
                  label: k.intl.string(p.default["09BSx3"]),
                  description: k.intl.string(p.default.SKwzvJ),
                  placeholder: k.intl.string(p.default.K7zdCZ),
                  value: x,
                  onChange: V,
                  maxLength: g.DC,
                  showCharacterCount: !0,
                  rows: 5,
                  autoFocus: !0,
                  error: m,
                  disabled: y,
              }),
          });
}
