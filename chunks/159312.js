var e = n(477900),
    a = n(582128),
    i = n(331322),
    t = n(534514),
    s = n(834730),
    d = n(821609),
    u = n(858899),
    c = n(580342),
    o = n(845079),
    h = n(424947),
    p = n(641655),
    g = n(252753),
    x = n(191850),
    b = n(792996),
    f = n(566600);
n.d(
    r,
    {},
    {
        default: function (l) {
            let { projectId: r, guildId: n, publishOptions: j = null, onClose: m, busyRef: v } = l,
                k = (0, p.A)(r),
                A = (0, h.A)(r, n, j);
            (0, c.A)(r);
            let { project: y } = k;
            a.useEffect(() => {
                null != v && (v.current = A.sharing);
            }, [v, A.sharing]);
            let w = b.intl.formatToPlainString(x.default.pgxjO4, { app: y?.name ?? "" });
            return (0, e.jsxs)("div", {
                className: f.n,
                role: "dialog",
                "aria-label": w,
                children: [
                    null != y ? (0, e.jsx)(o.A, { project: y, size: "dialog" }) : null,
                    (0, e.jsxs)(i.B, {
                        gap: 4,
                        children: [
                            (0, e.jsx)(t.D, { variant: "heading-md/semibold", children: w }),
                            (0, e.jsx)(s.E, {
                                variant: "body-sm/normal",
                                color: "text-subtle",
                                children: b.intl.string(x.default.mbybxl),
                            }),
                        ],
                    }),
                    null == y
                        ? null
                        : (0, e.jsx)(g.A, {
                              project: y,
                              sharing: k,
                              servers: A,
                              serversLabel: b.intl.string(x.default.bRGLUO),
                          }),
                    null != A.error
                        ? (0, e.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: A.error,
                          })
                        : null,
                    null != A.picked
                        ? (0, e.jsx)(d.$, {
                              variant: "primary",
                              text: b.intl.string(x.default["+uQwxA"]),
                              loading: A.sharing,
                              onClick: () => A.finish(m, (l) => (0, u.P0)({ text: l, variant: "success" })),
                              fullWidth: !0,
                          })
                        : null,
                ],
            });
        },
    },
);
