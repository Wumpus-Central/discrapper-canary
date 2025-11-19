n.d(t, { d: () => h });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(728345),
    o = n(925329),
    s = n(463421),
    c = n(314897),
    u = n(906605),
    d = n(748855),
    p = n(175379);
function h(e) {
    var t;
    let { guildId: n, onSetActivityStatus: h } = e,
        f = (0, l.e7)([c.default], () => c.default.getId()),
        m = (0, s.Z)(f, n)[0],
        g = null != (t = (0, a.IX)(null == m ? void 0 : m.application_id).data) ? t : void 0,
        b = r.useCallback(() => {
            null != g && ((0, u.XE)(g.id, !0), h());
        }, [g, h]);
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
