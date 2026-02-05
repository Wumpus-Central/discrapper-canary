n.d(t, { k: () => l });
var i = n(735438),
    s = n.n(i),
    r = n(311907),
    a = n(787392);
function l(e) {
    return (0, r.yK)([a.A], () =>
        s()(a.A.getUserVerifiedKeys(e))
            .entries()
            .map((e) => {
                let [t, n] = e;
                return { verifiedKey: t, timestamp: n };
            })
            .sortBy((e) => -1 * e.timestamp)
            .value(),
    );
}
