"use strict";
n.d(t, { k: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(627363),
    a = n(769015),
    o = n(25528),
    c = n(961350),
    d = n(69555),
    u = n(266069),
    h = n(709889);
function A(e) {
    let { guildId: t, onSetActivityStatus: n } = e,
        A = (0, l.bG)([c.default], () => c.default.getId()),
        p = (0, o.Ay)(A, t)[0],
        g = (0, r.YY)(p?.application_id).data ?? void 0,
        m = s.useCallback(() => {
            null != g && ((0, d.xA)(g.id, !0), n());
        }, [g, n]);
    return null == g
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.u, { label: g.name, icon: (0, i.jsx)(a.A, { game: g, className: h.K }), setStatus: m }),
                  (0, i.jsx)("div", { role: "separator", className: h.m }),
              ],
          });
}
