var a = t(477900),
    i = t(582128),
    e = t(855986),
    r = t(189213),
    s = t(331322),
    d = t(834730),
    o = t(534514),
    c = t(885574),
    u = t(803306),
    m = t(627363),
    g = t(682163),
    x = t(71393),
    h = t(287809),
    p = t(562153),
    j = t(427589),
    f = t(792996),
    y = t(191850),
    b = t(598198);
t.d(
    n,
    {},
    {
        default: function (l) {
            let { project: n, onDecide: t, ...C } = l,
                E = n.application_id,
                v = n.owner_user_id,
                z = n.guild_id ?? null,
                { data: A } = (0, m.YY)(E),
                N = (0, e.bG)([x.A], () => (null != z ? x.A.getGuild(z) : null), [z]),
                k = (0, e.bG)([h.default], () => h.default.getUser(v), [v]);
            function B(l) {
                (t(l), C.onClose());
            }
            i.useEffect(() => {
                null == h.default.getUser(v) &&
                    (async function (l) {
                        try {
                            await (0, u.wz)(l);
                        } catch {}
                    })(v);
            }, [v]);
            let _ = A?.description?.trim();
            return (0, a.jsx)(r.a, {
                ...C,
                title: f.intl.string(y.default.aJxyk5),
                actions: [
                    { text: f.intl.string(f.t["ETE/oC"]), variant: "secondary", onClick: () => B(!1) },
                    { text: f.intl.string(y.default.IHEjZ9), variant: "primary", onClick: () => B(!0) },
                ],
                children: (0, a.jsxs)(s.B, {
                    gap: 16,
                    children: [
                        null != N
                            ? (0, a.jsxs)(s.B, {
                                  direction: "horizontal",
                                  gap: 8,
                                  align: "center",
                                  children: [
                                      (0, a.jsx)(g.Ay, {
                                          guild: N,
                                          size: g.Ay.Sizes.SMALLER,
                                          className: b.bQ,
                                          "aria-hidden": !0,
                                      }),
                                      (0, a.jsx)(d.E, {
                                          variant: "body-md/normal",
                                          color: "text-default",
                                          children: f.intl.format(y.default.nfGy4j, { guildName: N.name }),
                                      }),
                                  ],
                              })
                            : null,
                        (0, a.jsxs)(s.B, {
                            gap: 12,
                            padding: 16,
                            className: b.HL,
                            children: [
                                (0, a.jsxs)(s.B, {
                                    direction: "horizontal",
                                    gap: 12,
                                    align: "center",
                                    children: [
                                        (0, a.jsx)(j.A, { project: n, size: 48, className: b.Z2 }),
                                        (0, a.jsx)(o.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 2,
                                            children: n.name,
                                        }),
                                    ],
                                }),
                                null != _ && "" !== _
                                    ? (0, a.jsx)(d.E, {
                                          variant: "body-sm/normal",
                                          color: "text-default",
                                          lineClamp: 5,
                                          children: _,
                                      })
                                    : null,
                                null != k
                                    ? (0, a.jsxs)(s.B, {
                                          direction: "horizontal",
                                          gap: 8,
                                          align: "center",
                                          children: [
                                              (0, a.jsx)(d.E, {
                                                  variant: "body-sm/normal",
                                                  color: "text-muted",
                                                  children: f.intl.string(y.default.m7TBWa),
                                              }),
                                              (0, a.jsx)("img", {
                                                  src: k.getAvatarURL(z, 40),
                                                  alt: "",
                                                  className: b.my,
                                              }),
                                              (0, a.jsx)(d.E, {
                                                  variant: "body-sm/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: p.Ay.getName(z, null, k),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, a.jsxs)(s.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "start",
                            className: b.lm,
                            children: [
                                (0, a.jsx)(c.CircleInformationIcon, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: b.EP,
                                    "aria-hidden": !0,
                                }),
                                (0, a.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: f.intl.string(y.default["2tnen+"]),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
