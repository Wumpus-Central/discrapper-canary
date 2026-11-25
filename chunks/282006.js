var l = n(477900),
    i = n(582128),
    a = n(855986),
    r = n(140735),
    s = n(442433),
    o = n(485947),
    u = n(69282),
    c = n(657048),
    d = n(773669),
    m = n(652215),
    A = n(792996),
    p = n(4577);
let h = i.memo(function (e) {
    let { id: t, title: h, count: f, guildId: g, className: x } = e,
        I = (0, u.Xx)({ roleId: t, guildId: g, size: 16 }),
        v = (0, a.bG)([d.default], () => (null == f ? null : new Intl.NumberFormat(d.default.locale).format(f)), [f]),
        T = i.useCallback(
            (e) => {
                I?.src != null &&
                    (0, s.L3)(e, async () => {
                        let { default: e } = await n.e(733743).then(n.bind(n, 455538));
                        return (t) => (0, l.jsx)(e, { ...t, imageUrl: I.src });
                    });
            },
            [I?.src],
        );
    return t === m.clD.UNKNOWN
        ? (0, l.jsx)("div", { className: x, children: (0, l.jsx)("div", { className: p.k1 }) })
        : (0, l.jsxs)(o.A, {
              className: x,
              children: [
                  (0, l.jsx)(r.A, { children: null == f ? h : A.intl.format(A.t.Uaqbke, { title: h, count: f }) }),
                  (0, l.jsxs)("div", {
                      className: p.CN,
                      "aria-hidden": !0,
                      children: [
                          null != I
                              ? (0, l.jsx)("span", {
                                    onContextMenu: T,
                                    children: (0, l.jsx)(c.A, { className: p.UT, ...I }),
                                })
                              : null,
                          (0, l.jsx)("span", { className: p.iy, children: h }),
                          null == v ? null : (0, l.jsxs)("span", { children: ["\xa0\u2014 ", v] }),
                      ],
                  }),
              ],
          });
});
n.d(t, {}, { Y: h });
