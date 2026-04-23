n.d(t, { k: () => r });
var i = n(735438),
    s = n.n(i),
    l = n(311907),
    a = n(787392);
function r(e) {
    return (0, l.yK)([a.A], () =>
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
