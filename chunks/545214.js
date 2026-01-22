i.d(e, {
    A: () => T,
    k: () => A,
});
var n = i(311907),
    l = i(419954),
    s = i(287809),
    r = i(780964),
    u = i(100817),
    a = i(32096),
    o = i(985018);

function T() {
    let t = (0, a.b)(),
        e = (0, n.bG)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && !t.verified;
        });
    return !t && e;
}
let A = (0, l.E2)(r.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [o.intl.string(o.t.m0FidJ)],
    usePredicate: T,
    Component: u.A,
});
