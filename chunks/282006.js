n.d(t, { Y: () => j });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    a = n(140735),
    r = n(442433),
    o = n(485947),
    u = n(69282),
    d = n(657048),
    c = n(773669),
    m = n(652215),
    x = n(375708),
    h = n(4577);
let j = i.memo(function (e) {
    let { id: t, title: j, count: g, guildId: p, className: f } = e,
        N = (0, u.Xx)({ roleId: t, guildId: p, size: 16 }),
        A = (0, s.bG)([c.default], () => (null == g ? null : new Intl.NumberFormat(c.default.locale).format(g)), [g]),
        I = i.useCallback(
            (e) => {
                N?.src != null &&
                    (0, r.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("95340"), n.e("733743")]).then(n.bind(n, 455538));
                        return (t) => (0, l.jsx)(e, { ...t, imageUrl: N.src });
                    });
            },
            [N?.src],
        );
    return t === m.clD.UNKNOWN
        ? (0, l.jsx)("div", { className: f, children: (0, l.jsx)("div", { className: h.k1 }) })
        : (0, l.jsxs)(o.A, {
              className: f,
              children: [
                  (0, l.jsx)(a.A, { children: null == g ? j : x.intl.format(x.t.Uaqbke, { title: j, count: g }) }),
                  (0, l.jsxs)("div", {
                      className: h.CN,
                      "aria-hidden": !0,
                      children: [
                          null != N
                              ? (0, l.jsx)("span", {
                                    onContextMenu: I,
                                    children: (0, l.jsx)(d.A, { className: h.UT, ...N }),
                                })
                              : null,
                          (0, l.jsx)("span", { className: h.iy, children: j }),
                          null == A ? null : (0, l.jsxs)("span", { children: ["\xa0\u2014 ", A] }),
                      ],
                  }),
              ],
          });
});
