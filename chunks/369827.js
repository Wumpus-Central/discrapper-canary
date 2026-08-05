"use strict";
n.d(t, { L: () => l });
var i = n(582128),
    r = n(17928),
    a = n(277984),
    s = n(295405);
function l() {
    let { defaultPaymentSourceId: e, hasFetchedPaymentSources: t } = (0, r.cf)([s.A], () => ({
        defaultPaymentSourceId: s.A.defaultPaymentSourceId,
        hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
    }));
    return (
        i.useEffect(() => {
            t || (0, a.$o)();
        }, [t]),
        e
    );
}
