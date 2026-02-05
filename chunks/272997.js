n.d(t, { k: () => A });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(627363),
    r = n(769015),
    o = n(25528),
    d = n(961350),
    c = n(69555),
    u = n(266069),
    h = n(709889);
function A(e) {
    let { guildId: t, onSetActivityStatus: n } = e,
        A = (0, s.bG)([d.default], () => d.default.getId()),
        g = (0, o.Ay)(A, t)[0],
        m = (0, a.YY)(g?.application_id).data ?? void 0,
        p = l.useCallback(() => {
            null != m && ((0, c.xA)(m.id, !0), n());
        }, [m, n]);
    return null == m
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.u, { label: m.name, icon: (0, i.jsx)(r.A, { game: m, className: h.K }), setStatus: p }),
                  (0, i.jsx)("div", { role: "separator", className: h.m }),
              ],
          });
}
