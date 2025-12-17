n.d(t, { d: () => f });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(728345),
    o = n(925329),
    s = n(463421),
    c = n(314897),
    u = n(906605),
    d = n(748855),
    p = n(849191);
function f(e) {
    var t;
    let { guildId: n, onSetActivityStatus: f } = e,
        h = (0, l.e7)([c.default], () => c.default.getId()),
        m = (0, s.Z)(h, n)[0],
        g = null != (t = (0, a.IX)(null == m ? void 0 : m.application_id).data) ? t : void 0,
        b = r.useCallback(() => {
            null != g && ((0, u.XE)(g.id, !0), f());
        }, [g, f]);
    return null == g
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.L, {
                      label: g.name,
                      icon: (0, i.jsx)(o.Z, {
                          game: g,
                          className: p.icon,
                      }),
                      setStatus: b,
                  }),
                  (0, i.jsx)("div", {
                      role: "separator",
                      className: p.separator,
                  }),
              ],
          });
}
