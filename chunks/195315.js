n.d(t, { y: () => g });
var i = n(582128),
    s = n(17928),
    r = n(277984),
    l = n(280450),
    a = n(615405),
    o = n(295405),
    c = n(652215),
    d = n(92202),
    u = n(935208),
    h = n(425565);
let C = null,
    A = null;
function g(e) {
    var t;
    let { location: n, countGiftCardWallet: g, canFetchPaymentSources: E = !0 } = e,
        { enabled: p } = (0, d.K)({ location: n }),
        _ = (0, s.bG)([l.default], () => l.default.getId()),
        f = null != (t = (0, s.bG)([l.default], () => l.default.getId())) && u.default.age(t) >= h.I,
        { hasFetchedPaymentSources: m, hasValidPaymentMethod: T } = (0, s.cf)(
            [o.A],
            () => ({
                hasFetchedPaymentSources: o.A.hasFetchedPaymentSources,
                hasValidPaymentMethod: (function (e, t) {
                    let { countGiftCardWallet: n } = t;
                    return Object.values(e).some(
                        (e) => !e.invalid && e.type !== c.hes.UNKNOWN && (n || e.type !== c.hes.TDS_WALLET),
                    );
                })(o.A.paymentSources, { countGiftCardWallet: g }),
            }),
            [g],
        ),
        v = p && f,
        N = v && E;
    return (
        i.useEffect(() => {
            !N ||
                C === _ ||
                o.A.hasFetchedPaymentSources ||
                a.A.isPaymentSourceFetching ||
                ((C = _),
                r.$o().then((e) => {
                    null == e && (A = _);
                }));
        }, [N, _]),
        v && A !== _ && m && !T
    );
}
