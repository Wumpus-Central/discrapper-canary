n.d(t, { y: () => g });
var i = n(582128),
    s = n(17928),
    r = n(277984),
    l = n(280450),
    a = n(615405),
    o = n(295405),
    c = n(652215),
    d = n(92202),
    u = n(534284),
    h = n(425565);
let C = null,
    A = null;
function g(e) {
    let { location: t, countGiftCardWallet: n, canFetchPaymentSources: g = !0 } = e,
        { enabled: E } = (0, d.K)({ location: t }),
        p = (0, s.bG)([l.default], () => l.default.getId()),
        _ = (0, u.P)(),
        f = (0, s.bG)([a.A], () => a.A.ipCountryCode),
        { hasFetchedPaymentSources: m, hasValidPaymentMethod: T } = (0, s.cf)(
            [o.A],
            () => ({
                hasFetchedPaymentSources: o.A.hasFetchedPaymentSources,
                hasValidPaymentMethod: (function (e, t) {
                    let { countGiftCardWallet: n } = t;
                    return Object.values(e).some(
                        (e) => !e.invalid && e.type !== c.hes.UNKNOWN && (n || e.type !== c.hes.TDS_WALLET),
                    );
                })(o.A.paymentSources, { countGiftCardWallet: n }),
            }),
            [n],
        ),
        v = E && _ && null != f && h.ob.has(f),
        N = v && g;
    return (
        i.useEffect(() => {
            !N ||
                C === p ||
                o.A.hasFetchedPaymentSources ||
                a.A.isPaymentSourceFetching ||
                ((C = p),
                r.$o().then((e) => {
                    null == e && (A = p);
                }));
        }, [N, p]),
        v && A !== p && m && !T
    );
}
