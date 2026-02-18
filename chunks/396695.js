i.d(t, { E: () => a });
var l = i(64700),
    n = i(695825);
let a = () => {
    let [e, t] = l.useState(!1),
        [i, a] = l.useState(null);
    return {
        loading: e,
        error: i,
        getTrialPurchaseEligibility: l.useCallback(async (e, i, l) => {
            t(!0), a(null);
            try {
                return await (0, n.KD)(e, i, l);
            } catch (e) {
                a(e);
            } finally {
                t(!1);
            }
        }, []),
    };
};
