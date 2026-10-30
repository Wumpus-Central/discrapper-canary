u.d(e, { N: () => a, p: () => i });
var d = u(17928),
    p = u(406935),
    s = u(646769),
    c = u(405018);
let a = (0, s.c$)(
    "privacy",
    "swpMessagePromotionOptedOut",
    (t) => t?.value ?? null,
    (t) => (null != t ? p._t.create({ value: t }) : void 0),
);
function i() {
    let t = a.useSetting(),
        { locked: e, defaultOptedOut: u } = (0, d.cf)([c.A], () => ({
            locked: c.A.isLocked(),
            defaultOptedOut: c.A.defaultsToOptedOut(),
        }));
    return { locked: e, optedOut: e || (t ?? u) };
}
