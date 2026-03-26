l.d(t, { A: () => v });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(735438),
    c = l(311907),
    o = l(397927),
    d = l(836602),
    u = l(773669),
    m = l(405269),
    p = l(927578),
    x = l(993408),
    A = l(821701),
    g = l(536572),
    h = l(130147),
    _ = l(512213),
    j = l(985018),
    y = l(177890);
let C = (e) => {
        let { purchase: t, product: l, user: i } = e,
            d = (0, c.bG)([u.default], () => u.default.locale),
            A = (0, g.Sw)(t),
            h = (0, g.VG)(l),
            _ = p.Ay.canUseCollectibles(i),
            C = (0, x.gA)(t),
            v = (0, x.G0)(l),
            E = !_ && C,
            [f, I] = s.useState(null);
        s.useEffect(() => {
            I(t?.expiresAt != null ? (0, m.Tf)(Date.now(), t.expiresAt) : null);
        }, [t?.expiresAt]);
        let T = null == t || E;
        return (0, n.jsxs)("div", {
            className: r()(y.ip, { [y.w6]: T }),
            children: [
                (0, n.jsx)(o.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, a.isEmpty)(A) ? h : A,
                }),
                T
                    ? (0, n.jsx)(o.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: E
                              ? j.intl.string(j.t.nD78oa)
                              : v && _
                                ? j.intl.string(j.t.hmyYK8)
                                : v
                                  ? j.intl.string(j.t.JY1i0u)
                                  : j.intl.string(j.t.fEGjVQ),
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              null != f &&
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.format(j.t.Io7ozn, { days: f.days.toString() }),
                                  }),
                              (0, n.jsxs)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      j.intl.format(j.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(d, { month: "long", year: "numeric" }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)("br", {}),
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
                                  (0, n.jsx)(o.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: j.intl.string(j.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    v = (e) => {
        let { user: t, guildId: l, nameplate: s } = e,
            i = (0, c.cf)([d.A], () => d.A.getPendingChanges(l)),
            { product: a, purchase: o } = (0, A.A)(s?.skuId),
            u = p.Ay.canUseCollectibles(t),
            m = (0, x.gA)(o),
            g = null == o || (!u && m);
        return (0, n.jsxs)("div", {
            className: r()(y.i1, { [y.Zj]: null != s && g }),
            children: [
                (0, n.jsx)("div", {
                    className: y.u_,
                    role: "img",
                    "aria-label": j.intl.string(j.t.SZeUdR),
                    children: (0, n.jsxs)("div", {
                        className: y.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, n.jsx)(h._, { width: 124, opacity: 0.9 }),
                            (0, n.jsx)(h._, { width: 124, opacity: 0.9 }),
                            (0, n.jsx)(_.A, { ...i, user: t, guildId: l, nameplate: s, isHighlighted: !0 }),
                            (0, n.jsx)(h._, { width: 124, opacity: 0.9 }),
                            (0, n.jsx)(h._, { width: 124, opacity: 0.9 }),
                        ],
                    }),
                }),
                null != s && (0, n.jsx)(C, { purchase: o, product: a, user: t }),
            ],
        });
    };
