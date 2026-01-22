n.d(t, { k: () => p });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(627363),
    s = n(769015),
    o = n(25528),
    c = n(961350),
    u = n(69555),
    d = n(266069),
    f = n(709889);
function p(e) {
    var t;
    let { guildId: n, onSetActivityStatus: p } = e,
        h = (0, i.bG)([c.default], () => c.default.getId()),
        b = (0, o.A)(h, n)[0],
        g = null != (t = (0, a.YY)(null == b ? void 0 : b.application_id).data) ? t : void 0,
        m = l.useCallback(() => {
            null != g && ((0, u.xA)(g.id, !0), p());
        }, [g, p]);
    return null == g
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.u, {
                      label: g.name,
                      icon: (0, r.jsx)(s.A, {
                          game: g,
                          className: f.K,
                      }),
                      setStatus: m,
                  }),
                  (0, r.jsx)("div", {
                      role: "separator",
                      className: f.m,
                  }),
              ],
          });
}
