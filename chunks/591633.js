e.d(l, { default: () => m });
var i = e(477900),
    a = e(582128),
    n = e(189213),
    r = e(834730),
    o = e(103557),
    s = e(976860),
    d = e(948230),
    u = e(936494);
(e(17928), e(945810), e(71393));
var c = e(683180),
    h = e(277977),
    f = e(652215),
    g = e(746080),
    p = e(759967),
    b = e(375708);
function m(t) {
    let { transitionState: l, onClose: e } = t,
        [m, C] = a.useState(""),
        [k, v] = a.useState(null),
        [x, w] = a.useState(!1),
        y = a.useMemo(() => (0, c.$X)("VibegrationsCustomWidgetModal"), []),
        V = a.useCallback(() => {
            e().catch(() => void 0);
        }, [e]),
        N = a.useCallback((t) => {
            (C(t), v(null));
        }, []),
        S = a.useCallback(async () => {
            let t = m.trim();
            if ("" === t) return void v(b.intl.string(p.default.Wo5sQv));
            if (null == y || x) return;
            (w(!0), v(null));
            let l = null;
            try {
                ((l = await (0, d.gA)({ guild_id: y, install_scope: "user" })),
                    (0, h.Hc)(l),
                    (0, h.dv)(
                        l,
                        [
                            "Build a profile card (an application profile widget) for my Discord profile.\nRead the data from the public source below \u2014 it must be reachable without a login.\nRecommend which fields the card should show and ask me to confirm or edit them before you build.\n",
                            t,
                        ].join("\n"),
                    ),
                    (0, s.pX)(f.BVt.CHANNEL(y, g.VV.VIBEGRATIONS, l)),
                    V());
            } catch (t) {
                if (null != l) {
                    ((0, s.pX)(f.BVt.CHANNEL(y, g.VV.VIBEGRATIONS, l)), V());
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
        ? (0, i.jsx)(n.Modal, {
              transitionState: l,
              onClose: e,
              title: b.intl.string(p.default["33l33s"]),
              actions: [{ text: b.intl.string(b.t.cpT0Cq), variant: "secondary", onClick: V }],
              children: (0, i.jsx)(r.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: b.intl.string(p.default["8DyNx1"]),
              }),
          })
        : (0, i.jsx)(n.Modal, {
              transitionState: l,
              onClose: e,
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
