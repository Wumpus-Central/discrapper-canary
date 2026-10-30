n.d(l, { Y: () => f });
var t = n(477900),
    s = n(582128),
    i = n(17928),
    a = n(140735),
    r = n(442433),
    u = n(485947),
    o = n(69282),
    c = n(657048),
    d = n(773669),
    m = n(652215),
    x = n(105292),
    h = n(4577);
let f = s.memo(function (e) {
    let { id: l, title: f, count: j, guildId: A, className: p } = e,
        g = (0, o.Xx)({ roleId: l, guildId: A, size: 16 }),
        N = (0, i.bG)([d.default], () => (null == j ? null : new Intl.NumberFormat(d.default.locale).format(j)), [j]),
        v = s.useCallback(
            (e) => {
                g?.src != null &&
                    (0, r.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("95340"), n.e("733743")]).then(n.bind(n, 455538));
                        return (l) => (0, t.jsx)(e, { ...l, imageUrl: g.src });
                    });
            },
            [g?.src],
        );
    return l === m.clD.UNKNOWN
        ? (0, t.jsx)("div", { className: p, children: (0, t.jsx)("div", { className: h.k1 }) })
        : (0, t.jsxs)(u.A, {
              className: p,
              children: [
                  (0, t.jsx)(a.A, { children: null == j ? f : x.intl.format(x.t.Uaqbke, { title: f, count: j }) }),
                  (0, t.jsxs)("div", {
                      className: h.CN,
                      "aria-hidden": !0,
                      children: [
                          null != g
                              ? (0, t.jsx)("span", {
                                    onContextMenu: v,
                                    children: (0, t.jsx)(c.A, { className: h.UT, ...g }),
                                })
                              : null,
                          (0, t.jsx)("span", { className: h.iy, children: f }),
                          null == N ? null : (0, t.jsxs)("span", { children: ["\xa0\u2014 ", N] }),
                      ],
                  }),
              ],
          });
});
