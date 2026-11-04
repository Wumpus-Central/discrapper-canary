var t = l(855986),
    i = l(406935),
    a = l(646769),
    r = l(405018);
let u = (0, a.c$)(
    "privacy",
    "swpMessagePromotionOptedOut",
    (e) => e?.value ?? null,
    (e) => (null != e ? i._t.create({ value: e }) : void 0),
);
l.d(
    n,
    {},
    {
        N: u,
        p: function () {
            let e = u.useSetting(),
                { locked: n, defaultOptedOut: l } = (0, t.cf)([r.A], () => ({
                    locked: r.A.isLocked(),
                    defaultOptedOut: r.A.defaultsToOptedOut(),
                }));
            return { locked: n, optedOut: n || (e ?? l) };
        },
    },
);
