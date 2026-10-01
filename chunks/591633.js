l.d(e, { default: () => m });
var i = l(477900),
    a = l(582128),
    n = l(189213),
    r = l(834730),
    o = l(103557),
    s = l(976860),
    d = l(948230),
    u = l(936494);
(l(17928), l(945810), l(71393));
var c = l(683180),
    h = l(277977),
    f = l(652215),
    g = l(746080),
    p = l(50617),
    b = l(375708);
function m(t) {
    let { transitionState: e, onClose: l } = t,
        [m, C] = a.useState(""),
        [k, v] = a.useState(null),
        [x, w] = a.useState(!1),
        y = a.useMemo(() => (0, c.$X)("VibegrationsCustomWidgetModal"), []),
        V = a.useCallback(() => {
            l().catch(() => void 0);
        }, [l]),
        N = a.useCallback((t) => {
            (C(t), v(null));
        }, []),
        S = a.useCallback(async () => {
            let t = m.trim();
            if ("" === t) return void v(b.intl.string(p.default.Wo5sQv));
            if (null == y || x) return;
            (w(!0), v(null));
            let e = null;
            try {
                ((e = await (0, d.gA)({ guild_id: y, install_scope: "user" })),
                    (0, h.Hc)(e),
                    (0, h.dv)(
                        e,
                        [
                            "Build a profile card (an application profile widget) for my Discord profile.\nRead the data from the public source below \u2014 it must be reachable without a login.\nRecommend which fields the card should show and ask me to confirm or edit them before you build.\n",
                            t,
                        ].join("\n"),
                    ),
                    (0, s.pX)(f.BVt.CHANNEL(y, g.VV.VIBEGRATIONS, e)),
                    V());
            } catch (t) {
                if (null != e) {
                    ((0, s.pX)(f.BVt.CHANNEL(y, g.VV.VIBEGRATIONS, e)), V());
                    return;
                }
                v((0, u.Xd)(t));
            } finally {
                w(!1);
            }
        }, [m, y, x, V]),
        E = a.useCallback(() => {
            S().catch(() => void 0);
        }, [S]);
    return null == y
        ? (0, i.jsx)(n.a, {
              transitionState: e,
              onClose: l,
              title: b.intl.string(p.default["33l33s"]),
              actions: [{ text: b.intl.string(b.t.cpT0Cq), variant: "secondary", onClick: V }],
              children: (0, i.jsx)(r.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: b.intl.string(p.default["8DyNx1"]),
              }),
          })
        : (0, i.jsx)(n.a, {
              transitionState: e,
              onClose: l,
              title: b.intl.string(p.default["27bu14"]),
              actions: [
                  { text: b.intl.string(b.t["ETE/oC"]), variant: "secondary", onClick: V, disabled: x },
                  {
                      text: b.intl.string(p.default["f/Jz/R"]),
                      variant: "primary",
                      onClick: E,
                      loading: x,
                      disabled: "" === m.trim(),
                  },
              ],
              children: (0, i.jsx)(o.f, {
                  label: b.intl.string(p.default.DAm99t),
                  description: b.intl.string(p.default.blSmfQ),
                  placeholder: b.intl.string(p.default.FYN9Rl),
                  value: m,
                  onChange: N,
                  maxLength: 2e3,
                  showCharacterCount: !0,
                  rows: 5,
                  autoFocus: !0,
                  error: k,
                  disabled: x,
              }),
          });
}
