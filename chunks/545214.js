i.d(e, { A: () => d, k: () => T });
var n = i(311907),
    l = i(419954),
    s = i(287809),
    r = i(780964),
    a = i(100817),
    u = i(32096),
    o = i(985018);
function d() {
    let t = (0, u.b)(),
        e = (0, n.bG)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && !t.verified;
        });
    return !t && e;
}
let T = (0, l.E2)(r.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [o.intl.string(o.t.m0FidJ)],
    usePredicate: d,
    Component: a.A,
});
