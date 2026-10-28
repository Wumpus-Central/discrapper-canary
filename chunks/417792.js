n.d(t, { y: () => A });
var i = n(582128),
    s = n(17928),
    r = n(277984),
    l = n(280450),
    a = n(615405),
    o = n(295405),
    c = n(652215),
    d = n(92202),
    u = n(534284);
let h = null,
    C = null;
function A(e) {
    let { location: t, countGiftCardWallet: n, canFetchPaymentSources: A = !0 } = e,
        { enabled: g } = (0, d.K)({ location: t }),
        E = (0, s.bG)([l.default], () => l.default.getId()),
        p = (0, u.P)(),
        { hasFetchedPaymentSources: _, hasValidPaymentMethod: f } = (0, s.cf)(
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
        m = g && p,
        T = m && A;
    return (
        i.useEffect(() => {
            !T ||
                h === E ||
                o.A.hasFetchedPaymentSources ||
                a.A.isPaymentSourceFetching ||
                ((h = E),
                r.$o().then((e) => {
                    null == e && (C = E);
                }));
        }, [T, E]),
        m && C !== E && _ && !f
    );
}
