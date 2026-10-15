n.d(t, { y: () => C });
var i = n(582128),
    l = n(17928),
    r = n(277984),
    s = n(280450),
    a = n(615405),
    o = n(295405),
    d = n(652215),
    c = n(92202),
    u = n(534284),
    A = n(425565);
let E = null,
    h = null;
function C(e) {
    let { location: t, countGiftCardWallet: n, canFetchPaymentSources: C = !0 } = e,
        { enabled: _ } = (0, c.K)({ location: t }),
        g = (0, l.bG)([s.default], () => s.default.getId()),
        T = (0, u.P)(),
        I = (0, l.bG)([a.A], () => a.A.ipCountryCode),
        { hasFetchedPaymentSources: p, hasValidPaymentMethod: N } = (0, l.cf)(
            [o.A],
            () => ({
                hasFetchedPaymentSources: o.A.hasFetchedPaymentSources,
                hasValidPaymentMethod: (function (e, t) {
                    let { countGiftCardWallet: n } = t;
                    return Object.values(e).some(
                        (e) => !e.invalid && e.type !== d.hes.UNKNOWN && (n || e.type !== d.hes.TDS_WALLET),
                    );
                })(o.A.paymentSources, { countGiftCardWallet: n }),
            }),
            [n],
        ),
        S = _ && T && null != I && A.ob.has(I),
        f = S && C;
    return (
        i.useEffect(() => {
            !f ||
                E === g ||
                o.A.hasFetchedPaymentSources ||
                a.A.isPaymentSourceFetching ||
                ((E = g),
                r.$o().then((e) => {
                    null == e && (h = g);
                }));
        }, [f, g]),
        S && h !== g && p && !N
    );
}
