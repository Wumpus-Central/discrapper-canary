var l = n(477900),
    i = n(582128),
    o = n(192308),
    r = n(858899),
    a = n(28863),
    u = n(834981),
    s = n(327919),
    c = n(792996),
    d = n(665956);
n.d(
    t,
    {},
    {
        s: function () {
            let e = (0, u.vx)(),
                t = i.useCallback(() => {
                    (0, s.A)(e, o.s7, () =>
                        (0, r.P0)({
                            text: c.intl.formatToPlainString(d.default.D1BwNC, { count: e.length }),
                            variant: "critical",
                        }),
                    );
                }, [e]);
            return i.useMemo(
                () =>
                    c.intl.format(c.t["mv/fF2"], {
                        guardianHook: (n, o) =>
                            e.length > 0
                                ? (0, l.jsx)(a.Anchor, { onClick: t, children: n }, o)
                                : (0, l.jsx)(i.Fragment, { children: n }, o),
                    }),
                [e, t],
            );
        },
    },
);
