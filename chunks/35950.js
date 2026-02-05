n.d(t, { A: () => v });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    c = n(311907),
    o = n(397927),
    u = n(993408),
    d = n(821701),
    m = n(645178),
    p = n(833336),
    x = n(836602),
    A = n(773669),
    g = n(405269),
    h = n(927578),
    _ = n(359701),
    j = n(550111),
    y = n(985018),
    C = n(514748);
let E = (e) => {
        let { purchase: t, product: n, user: s } = e,
            d = (0, c.bG)([A.default], () => A.default.locale),
            p = (0, m.Tk)(t),
            x = (0, m.o7)(n),
            _ = h.Ay.canUseCollectibles(s),
            j = (0, u.gA)(t),
            E = (0, u.G0)(n),
            v = !_ && j,
            [b, T] = i.useState(null);
        i.useEffect(() => {
            T(t?.expiresAt != null ? (0, g.Tf)(Date.now(), t.expiresAt) : null);
        }, [t?.expiresAt]);
        let I = null == t || v;
        return (0, l.jsxs)("div", {
            className: r()(C.ip, { [C.w6]: I }),
            children: [
                (0, l.jsx)(o.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, a.isEmpty)(p) ? x : p,
                }),
                I
                    ? (0, l.jsx)(o.Text, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: v
                              ? y.intl.string(y.t.nD78oa)
                              : E && _
                                ? y.intl.string(y.t.hmyYK8)
                                : E
                                  ? y.intl.string(y.t.JY1i0u)
                                  : y.intl.string(y.t.fEGjVQ),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != b &&
                                  (0, l.jsx)(o.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: y.intl.format(y.t.Io7ozn, { days: b.days.toString() }),
                                  }),
                              (0, l.jsxs)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  children: [
                                      y.intl.format(y.t.gW9R4B, {
                                          date: t.purchasedAt.toLocaleDateString(d, { month: "long", year: "numeric" }),
                                      }),
                                      null != t.expiresAt &&
                                          (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)("br", {}),
                                                  y.intl.format(y.t.eZSTa5, {
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
                              j &&
                                  (0, l.jsx)(o.Text, {
                                      variant: "text-xxs/normal",
                                      color: "text-muted",
                                      children: y.intl.string(y.t.nKdAlO),
                                  }),
                          ],
                      }),
            ],
        });
    },
    v = (e) => {
        let { user: t, guildId: n, nameplate: i } = e,
            s = (0, c.cf)([x.A, p.A], () => (null == n ? x.A.getPendingChanges() : p.A.getAllPending())),
            { product: a, purchase: o } = (0, d.A)(i?.skuId),
            m = h.Ay.canUseCollectibles(t),
            A = (0, u.gA)(o),
            g = null == o || (!m && A);
        return (0, l.jsxs)("div", {
            className: r()(C.i1, { [C.Zj]: null != i && g }),
            children: [
                (0, l.jsx)("div", {
                    className: C.u_,
                    role: "img",
                    "aria-label": y.intl.string(y.t.SZeUdR),
                    children: (0, l.jsxs)("div", {
                        className: C.Xp,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)(_._, { width: 124, opacity: 0.9 }),
                            (0, l.jsx)(_._, { width: 124, opacity: 0.9 }),
                            (0, l.jsx)(j.A, { ...s, user: t, guildId: n, nameplate: i, isHighlighted: !0 }),
                            (0, l.jsx)(_._, { width: 124, opacity: 0.9 }),
                            (0, l.jsx)(_._, { width: 124, opacity: 0.9 }),
                        ],
                    }),
                }),
                null != i && (0, l.jsx)(E, { purchase: o, product: a, user: t }),
            ],
        });
    };
