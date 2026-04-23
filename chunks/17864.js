l.d(t, { A: () => p });
var n = l(627968),
    i = l(64700),
    a = l(989349),
    s = l.n(a),
    C = l(417597),
    r = l(192308),
    o = l(834730),
    d = l(939249),
    c = l(950305),
    u = l(551816),
    m = l(134413),
    h = l(266047),
    x = l(221950),
    g = l(985018),
    H = l(62255),
    _ = l(128799);
function p(e) {
    let { guild: t, onSubmit: a } = e,
        p = (0, C.bG)([h.A], () => h.A.getMembersCountByGuildId(t.id, u.Tu.NEW_GUILD_MEMBER), [t.id]),
        f = (0, C.bG)([h.A], () => {
            let e = h.A.getNewMemberTimestamp(t.id);
            return s()(e).format("h:mm A");
        }, [t.id]),
        j = (0, C.bG)([h.A], () => h.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        b = i.useCallback(() => {
            (0, x.UD)(t.id), a?.();
        }, [t.id, a]),
        A = i.useCallback(() => {
            j
                ? b()
                : (0, r.openModalLazy)(async () => {
                      let { default: e } = await l.e("56562").then(l.bind(l, 470857));
                      return (t) => (0, n.jsx)(e, { ...t, onConfirm: b });
                  });
        }, [b, j]),
        v = new Intl.NumberFormat(g.intl.currentLocale).format(p),
        V = (0, m.Y0)(t.id),
        L = (0, m.vA)(t.id),
        D = i.useMemo(() => 1 + +!!V + +!!L, [V, L]);
    return 0 === p
        ? null
        : (0, n.jsxs)("tr", {
              className: _.iS,
              onClick: A,
              children: [
                  (0, n.jsx)("td", {
                      colSpan: 3,
                      children: (0, n.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "always-white",
                          children: g.intl.format(g.t["/i5uJ1"], { count: v, date: f }),
                      }),
                  }),
                  (0, n.jsx)("td", { colSpan: D }),
                  (0, n.jsx)("td", {
                      colSpan: 2,
                      children: (0, n.jsx)("div", {
                          className: H.$E,
                          children: (0, n.jsx)(d.D, {
                              onClick: A,
                              className: _.Fu,
                              children: (0, n.jsxs)(o.E, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: _.Lb,
                                  children: [
                                      (0, n.jsx)("div", { children: g.intl.string(g.t.rkyOzK) }),
                                      (0, n.jsx)(c.n, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: _.Ke,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              ],
          });
}
