l.d(t, { A: () => g });
var n = l(627968),
    i = l(64700),
    a = l(989349),
    s = l.n(a),
    r = l(417597),
    o = l(397927),
    C = l(551816),
    d = l(134413),
    c = l(266047),
    u = l(221950),
    m = l(985018),
    x = l(957346),
    h = l(633020);
function g(e) {
    let { guild: t, onSubmit: a } = e,
        g = (0, r.bG)([c.A], () => c.A.getMembersCountByGuildId(t.id, C.Tu.NEW_GUILD_MEMBER), [t.id]),
        _ = (0, r.bG)([c.A], () => {
            let e = c.A.getNewMemberTimestamp(t.id);
            return s()(e).format("h:mm A");
        }, [t.id]),
        H = (0, r.bG)([c.A], () => c.A.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        p = i.useCallback(() => {
            (0, u.UD)(t.id), a?.();
        }, [t.id, a]),
        f = i.useCallback(() => {
            H
                ? p()
                : (0, o.mMO)(async () => {
                      let { default: e } = await l.e("56562").then(l.bind(l, 470857));
                      return (t) => (0, n.jsx)(e, { ...t, onConfirm: p });
                  });
        }, [p, H]),
        j = new Intl.NumberFormat(m.intl.currentLocale).format(g),
        b = (0, d.Y0)(t.id),
        v = (0, d.vA)(t.id),
        A = i.useMemo(() => 1 + +!!b + +!!v, [b, v]);
    return 0 === g
        ? null
        : (0, n.jsxs)("tr", {
              className: h.iS,
              onClick: f,
              children: [
                  (0, n.jsx)("td", {
                      colSpan: 3,
                      children: (0, n.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "always-white",
                          children: m.intl.format(m.t["/i5uJ1"], { count: j, date: _ }),
                      }),
                  }),
                  (0, n.jsx)("td", { colSpan: A }),
                  (0, n.jsx)("td", {
                      colSpan: 2,
                      children: (0, n.jsx)("div", {
                          className: x.$E,
                          children: (0, n.jsx)(o.DUT, {
                              onClick: f,
                              className: h.Fu,
                              children: (0, n.jsxs)(o.Text, {
                                  variant: "text-sm/normal",
                                  color: "always-white",
                                  className: h.Lb,
                                  children: [
                                      (0, n.jsx)("div", { children: m.intl.string(m.t.rkyOzK) }),
                                      (0, n.jsx)(o.nys, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 16,
                                          height: 16,
                                          className: h.Ke,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                  }),
              ],
          });
}
