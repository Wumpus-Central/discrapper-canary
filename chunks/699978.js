n.d(t, {
    k: () => o,
}),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(787392);

function o(e) {
    return (0, a.yK)([s.A], () =>
        i()(s.A.getUserVerifiedKeys(e))
            .entries()
            .map((e) => {
                let [t, n] = e;
                return {
                    verifiedKey: t,
                    timestamp: n,
                };
            })
            .sortBy((e) => -1 * e.timestamp)
            .value(),
    );
}
