var l = t(477900),
    n = t(582128),
    r = t(192308),
    s = t(858899),
    i = t(28863),
    u = t(834981),
    o = t(327919),
    c = t(792996),
    h = t(665956);
t.d(
    a,
    {},
    {
        s: function () {
            let e = (0, u.vx)(),
                a = n.useCallback(() => {
                    (0, o.A)(e, r.s7, () =>
                        (0, s.P0)({
                            text: c.intl.formatToPlainString(h.default.D1BwNC, { count: e.length }),
                            variant: "critical",
                        }),
                    );
                }, [e]);
            return n.useMemo(
                () =>
                    c.intl.format(c.t["mv/fF2"], {
                        guardianHook: (t, r) =>
                            e.length > 0
                                ? (0, l.jsx)(i.Anchor, { onClick: a, children: t }, r)
                                : (0, l.jsx)(n.Fragment, { children: t }, r),
                    }),
                [e, a],
            );
        },
    },
);
