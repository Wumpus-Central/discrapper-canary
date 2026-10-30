t.d(n, { N: () => u, p: () => s });
var l = t(17928),
    i = t(406935),
    a = t(646769),
    r = t(405018);
let u = (0, a.c$)(
    "privacy",
    "swpMessagePromotionOptedOut",
    (e) => e?.value ?? null,
    (e) => (null != e ? i._t.create({ value: e }) : void 0),
);
function s() {
    let e = u.useSetting(),
        { locked: n, defaultOptedOut: t } = (0, l.cf)([r.A], () => ({
            locked: r.A.isLocked(),
            defaultOptedOut: r.A.defaultsToOptedOut(),
        }));
    return { locked: n, optedOut: n || (e ?? t) };
}
