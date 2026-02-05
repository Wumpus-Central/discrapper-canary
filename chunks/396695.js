"use strict";
n.d(t, { E: () => a });
var r = n(64700),
    i = n(695825);
let a = () => {
    let [e, t] = r.useState(!1),
        [n, a] = r.useState(null);
    return {
        loading: e,
        error: n,
        getTrialPurchaseEligibility: r.useCallback(async (e, n, r) => {
            t(!0), a(null);
            try {
                return await (0, i.KD)(e, n, r);
            } catch (e) {
                a(e);
            } finally {
                t(!1);
            }
        }, []),
    };
};
