l.d(t, { A: () => E });
var a = l(627968),
    s = l(64700),
    r = l(503698),
    i = l.n(r),
    n = l(735438),
    c = l(311907),
    d = l(834730),
    o = l(836602),
    u = l(773669),
    m = l(405269),
    p = l(927578),
    x = l(993408),
    _ = l(821701),
    h = l(536572),
    A = l(130147),
    g = l(512213),
    v = l(985018),
    j = l(383171);
let y = (e) => {
        let { purchase: t, product: l, user: r } = e,
            o = (0, c.bG)([u.default], () => u.default.locale),
            _ = (0, h.Sw)(t),
            A = (0, h.VG)(l),
            g = p.Ay.canUseCollectibles(r),
            y = (0, x.gA)(t),
            E = (0, x.G0)(l),
            N = !g && y,
            [b, f] = s.useState(null);
        s.useEffect(() => {
            f(t?.expiresAt != null ? (0, m.Tf)(Date.now(), t.expiresAt) : null);
        }, [t?.expiresAt]);
        let I = null == t || N;
        return (0, a.jsxs)("div", {
            className: i()(j.ip, { [j.w6]: I }),
            children: [
                (0, a.jsx)(d.E, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, n.isEmpty)(_) ? A : _,
                }),
                I
                    ? (0, a.jsx)(d.E, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: N
                              ? v.intl.string(v.t.nD78oa)
                              : E && g
                                ? v.intl.string(v.t.hmyYK8)
                                : E
                                  ? v.intl.string(v.t.JY1i0u)
                                  : v.intl.string(v.t.fEGjVQ),
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              null != b &&
                                  (0, a.jsx)(d.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: v.intl.format(v.t.Io7ozn, { days: b.days.toString() }),
                                  }),
                              (0, a.jsxs)(d.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      v.intl.format(v.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(o, { month: "long", year: "numeric" }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("br", {}),
                                                  v.intl.format(v.t.eZSTa5, {
                                                      date: t.expiresAt.toLocaleDateString(o, {
                                                          minute: "numeric",
                                                          hour: "numeric",
                                                          day: "numeric",
                                                          month: "long",
                                                          year: "numeric",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              y &&
                                  (0, a.jsx)(d.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: v.intl.string(v.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    E = (e) => {
        let { user: t, guildId: l, nameplate: s } = e,
            r = (0, c.cf)([o.A], () => o.A.getPendingChanges(l)),
            { product: n, purchase: d } = (0, _.A)(s?.skuId),
            u = p.Ay.canUseCollectibles(t),
            m = (0, x.gA)(d),
            h = null == d || (!u && m);
        return (0, a.jsxs)("div", {
            className: i()(j.i1, { [j.Zj]: null != s && h }),
            children: [
                (0, a.jsx)("div", {
                    className: j.u_,
                    role: "img",
                    "aria-label": v.intl.string(v.t.SZeUdR),
                    children: (0, a.jsxs)("div", {
                        className: j.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, a.jsx)(A._, { width: 124, opacity: 0.9 }),
                            (0, a.jsx)(A._, { width: 124, opacity: 0.9 }),
                            (0, a.jsx)(g.A, { ...r, user: t, guildId: l, nameplate: s, isHighlighted: !0 }),
                            (0, a.jsx)(A._, { width: 124, opacity: 0.9 }),
                            (0, a.jsx)(A._, { width: 124, opacity: 0.9 }),
                        ],
                    }),
                }),
                null != s && (0, a.jsx)(y, { purchase: d, product: n, user: t }),
            ],
        });
    };
