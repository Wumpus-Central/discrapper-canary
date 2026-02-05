n.d(t, { A: () => E });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(735438),
    c = n(311907),
    o = n(397927),
    u = n(993408),
    d = n(821701),
    m = n(645178),
    p = n(836602),
    x = n(773669),
    A = n(405269),
    g = n(927578),
    h = n(359701),
    _ = n(550111),
    j = n(985018),
    y = n(514748);
let C = (e) => {
        let { purchase: t, product: n, user: i } = e,
            d = (0, c.bG)([x.default], () => x.default.locale),
            p = (0, m.Tk)(t),
            h = (0, m.o7)(n),
            _ = g.Ay.canUseCollectibles(i),
            C = (0, u.gA)(t),
            E = (0, u.G0)(n),
            v = !_ && C,
            [b, T] = s.useState(null);
        s.useEffect(() => {
            T(t?.expiresAt != null ? (0, A.Tf)(Date.now(), t.expiresAt) : null);
        }, [t?.expiresAt]);
        let I = null == t || v;
        return (0, l.jsxs)("div", {
            className: r()(y.ip, { [y.w6]: I }),
            children: [
                (0, l.jsx)(o.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, a.isEmpty)(p) ? h : p,
                }),
                I
                    ? (0, l.jsx)(o.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: v
                              ? j.intl.string(j.t.nD78oa)
                              : E && _
                                ? j.intl.string(j.t.hmyYK8)
                                : E
                                  ? j.intl.string(j.t.JY1i0u)
                                  : j.intl.string(j.t.fEGjVQ),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != b &&
                                  (0, l.jsx)(o.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.format(j.t.Io7ozn, { days: b.days.toString() }),
                                  }),
                              (0, l.jsxs)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      j.intl.format(j.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(d, { month: "long", year: "numeric" }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("br", {}),
                                                  j.intl.format(j.t.eZSTa5, {
                                                      date: t.expiresAt.toLocaleDateString(d, {
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
                              C &&
                                  (0, l.jsx)(o.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.string(j.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    E = (e) => {
        let { user: t, guildId: n, nameplate: s } = e,
            i = (0, c.cf)([p.A], () => p.A.getPendingChanges(n)),
            { product: a, purchase: o } = (0, d.A)(s?.skuId),
            m = g.Ay.canUseCollectibles(t),
            x = (0, u.gA)(o),
            A = null == o || (!m && x);
        return (0, l.jsxs)("div", {
            className: r()(y.i1, { [y.Zj]: null != s && A }),
            children: [
                (0, l.jsx)("div", {
                    className: y.u_,
                    role: "img",
                    "aria-label": j.intl.string(j.t.SZeUdR),
                    children: (0, l.jsxs)("div", {
                        className: y.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)(h._, { width: 124, opacity: 0.9 }),
                            (0, l.jsx)(h._, { width: 124, opacity: 0.9 }),
                            (0, l.jsx)(_.A, { ...i, user: t, guildId: n, nameplate: s, isHighlighted: !0 }),
                            (0, l.jsx)(h._, { width: 124, opacity: 0.9 }),
                            (0, l.jsx)(h._, { width: 124, opacity: 0.9 }),
                        ],
                    }),
                }),
                null != s && (0, l.jsx)(C, { purchase: o, product: a, user: t }),
            ],
        });
    };
