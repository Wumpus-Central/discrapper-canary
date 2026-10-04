i.d(e, { default: () => m });
var a = i(477900),
    l = i(582128),
    n = i(189213),
    r = i(834730),
    o = i(103557),
    s = i(976860),
    d = i(477818),
    u = i(489586);
(i(17928), i(945810), i(71393));
var c = i(870440),
    h = i(597331),
    f = i(652215),
    C = i(746080),
    g = i(248675),
    p = i(375708);
function m(t) {
    let { transitionState: e, onClose: i } = t,
        [m, b] = l.useState(""),
        [k, v] = l.useState(null),
        [w, x] = l.useState(!1),
        y = l.useMemo(() => (0, c.oX)("VibegrationsCustomWidgetModal"), []),
        V = l.useCallback(() => {
            i().catch(() => void 0);
        }, [i]),
        E = l.useCallback((t) => {
            (b(t), v(null));
        }, []),
        N = l.useCallback(async () => {
            let t = m.trim();
            if ("" === t) return void v(p.intl.string(g.default.AuyDIq));
            if (null == y || w) return;
            (x(!0), v(null));
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
                    (0, s.pX)(f.BVt.CHANNEL(y, C.VV.CONJURE, e)),
                    V());
            } catch (t) {
                if (null != e) {
                    ((0, s.pX)(f.BVt.CHANNEL(y, C.VV.CONJURE, e)), V());
                    return;
                }
                v((0, u.mG)(t));
            } finally {
                x(!1);
            }
        }, [m, y, w, V]),
        S = l.useCallback(() => {
            N().catch(() => void 0);
        }, [N]);
    return null == y
        ? (0, a.jsx)(n.a, {
              transitionState: e,
              onClose: i,
              title: p.intl.string(g.default.rCU6IG),
              actions: [{ text: p.intl.string(p.t.cpT0Cq), variant: "secondary", onClick: V }],
              children: (0, a.jsx)(r.E, {
                  variant: "text-md/normal",
                  color: "text-muted",
                  children: p.intl.string(g.default["UN2H+/"]),
              }),
          })
        : (0, a.jsx)(n.a, {
              transitionState: e,
              onClose: i,
              title: p.intl.string(g.default.yI85oV),
              actions: [
                  { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: V, disabled: w },
                  {
                      text: p.intl.string(g.default.MDZXiK),
                      variant: "primary",
                      onClick: S,
                      loading: w,
                      disabled: "" === m.trim(),
                  },
              ],
              children: (0, a.jsx)(o.f, {
                  label: p.intl.string(g.default["09BSx3"]),
                  description: p.intl.string(g.default.SKwzvJ),
                  placeholder: p.intl.string(g.default.K7zdCZ),
                  value: m,
                  onChange: E,
                  maxLength: 2e3,
                  showCharacterCount: !0,
                  rows: 5,
                  autoFocus: !0,
                  error: k,
                  disabled: w,
              }),
          });
}
