n.d(t, { k: () => A });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(627363),
    r = n(769015),
    o = n(25528),
    c = n(961350),
    d = n(69555),
    u = n(266069),
    h = n(859700);
function A(e) {
    let { guildId: t, onSetActivityStatus: n } = e,
        A = (0, s.bG)([c.default], () => c.default.getId()),
        _ = (0, o.Ay)(A, t)[0],
        m = (0, a.YY)(_?.application_id).data ?? void 0,
        g = l.useCallback(() => {
            null != m && ((0, d.xA)(m.id, !0), n());
        }, [m, n]);
    return null == m
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.u, { label: m.name, icon: (0, i.jsx)(r.A, { game: m, className: h.K }), setStatus: g }),
                  (0, i.jsx)("div", { role: "separator", className: h.m }),
              ],
          });
}
