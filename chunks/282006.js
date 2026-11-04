var t = n(477900),
    s = n(582128),
    a = n(855986),
    i = n(140735),
    r = n(442433),
    u = n(485947),
    o = n(69282),
    d = n(657048),
    c = n(773669),
    m = n(652215),
    x = n(792996),
    h = n(4577);
let f = s.memo(function (e) {
    let { id: l, title: f, count: p, guildId: j, className: A } = e,
        g = (0, o.Xx)({ roleId: l, guildId: j, size: 16 }),
        N = (0, a.bG)([c.default], () => (null == p ? null : new Intl.NumberFormat(c.default.locale).format(p)), [p]),
        v = s.useCallback(
            (e) => {
                g?.src != null &&
                    (0, r.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e(476662),
                            n.e(253044),
                            n.e(311913),
                            n.e(881717),
                            n.e(363269),
                            n.e(474172),
                            n.e(489218),
                            n.e(912875),
                            n.e(862782),
                            n.e(55348),
                            n.e(95340),
                            n.e(733743),
                        ]).then(n.bind(n, 455538));
                        return (l) => (0, t.jsx)(e, { ...l, imageUrl: g.src });
                    });
            },
            [g?.src],
        );
    return l === m.clD.UNKNOWN
        ? (0, t.jsx)("div", { className: A, children: (0, t.jsx)("div", { className: h.k1 }) })
        : (0, t.jsxs)(u.A, {
              className: A,
              children: [
                  (0, t.jsx)(i.A, { children: null == p ? f : x.intl.format(x.t.Uaqbke, { title: f, count: p }) }),
                  (0, t.jsxs)("div", {
                      className: h.CN,
                      "aria-hidden": !0,
                      children: [
                          null != g
                              ? (0, t.jsx)("span", {
                                    onContextMenu: v,
                                    children: (0, t.jsx)(d.A, { className: h.UT, ...g }),
                                })
                              : null,
                          (0, t.jsx)("span", { className: h.iy, children: f }),
                          null == N ? null : (0, t.jsxs)("span", { children: ["\xa0\u2014 ", N] }),
                      ],
                  }),
              ],
          });
});
n.d(l, {}, { Y: f });
