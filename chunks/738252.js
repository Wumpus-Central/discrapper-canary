l.d(t, { A: () => v });
var r = l(627968),
    a = l(64700),
    s = l(503698),
    n = l.n(s),
    i = l(735438),
    c = l(311907),
    o = l(834730),
    u = l(836602),
    d = l(773669),
    m = l(405269),
    A = l(927578),
    p = l(993408),
    _ = l(821701),
    h = l(536572),
    g = l(130147),
    f = l(512213),
    x = l(985018),
    E = l(383171);
let I = (e) => {
        let { purchase: t, product: l, user: s } = e,
            u = (0, c.bG)([d.default], () => d.default.locale),
            _ = (0, h.Sw)(t),
            g = (0, h.VG)(l),
            f = A.Ay.canUseCollectibles(s),
            I = (0, p.gA)(t),
            v = (0, p.G0)(l),
            C = !f && I,
            [b, N] = a.useState(null);
        a.useEffect(() => {
            N(t?.expiresAt != null ? (0, m.Tf)(Date.now(), t.expiresAt) : null);
        }, [t?.expiresAt]);
        let y = null == t || C;
        return (0, r.jsxs)("div", {
            className: n()(E.ip, { [E.w6]: y }),
            children: [
                (0, r.jsx)(o.E, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, i.isEmpty)(_) ? g : _,
                }),
                y
                    ? (0, r.jsx)(o.E, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: C
                              ? x.intl.string(x.t.nD78oa)
                              : v && f
                                ? x.intl.string(x.t.hmyYK8)
                                : v
                                  ? x.intl.string(x.t.JY1i0u)
                                  : x.intl.string(x.t.fEGjVQ),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              null != b &&
                                  (0, r.jsx)(o.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: x.intl.format(x.t.Io7ozn, { days: b.days.toString() }),
                                  }),
                              (0, r.jsxs)(o.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      x.intl.format(x.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(u, { month: "long", year: "numeric" }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("br", {}),
                                                  x.intl.format(x.t.eZSTa5, {
                                                      date: t.expiresAt.toLocaleDateString(u, {
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
                              I &&
                                  (0, r.jsx)(o.E, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: x.intl.string(x.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    v = (e) => {
        let { user: t, guildId: l, nameplate: a } = e,
            s = (0, c.cf)([u.A], () => u.A.getPendingChanges(l)),
            { product: i, purchase: o } = (0, _.A)(a?.skuId),
            d = A.Ay.canUseCollectibles(t),
            m = (0, p.gA)(o),
            h = null == o || (!d && m);
        return (0, r.jsxs)("div", {
            className: n()(E.i1, { [E.Zj]: null != a && h }),
            children: [
                (0, r.jsx)("div", {
                    className: E.u_,
                    role: "img",
                    "aria-label": x.intl.string(x.t.SZeUdR),
                    children: (0, r.jsxs)("div", {
                        className: E.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, r.jsx)(g._, { width: 124, opacity: 0.9 }),
                            (0, r.jsx)(g._, { width: 124, opacity: 0.9 }),
                            (0, r.jsx)(f.A, { ...s, user: t, guildId: l, nameplate: a, isHighlighted: !0 }),
                            (0, r.jsx)(g._, { width: 124, opacity: 0.9 }),
                            (0, r.jsx)(g._, { width: 124, opacity: 0.9 }),
                        ],
                    }),
                }),
                null != a && (0, r.jsx)(I, { purchase: o, product: i, user: t }),
            ],
        });
    };
