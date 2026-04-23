i.d(t, { E: () => s });
var l = i(64700),
    n = i(695825);
let s = () => {
    let [e, t] = l.useState(!1),
        [i, s] = l.useState(null);
    return {
        loading: e,
        error: i,
        getTrialPurchaseEligibility: l.useCallback(async (e, i, l) => {
            t(!0), s(null);
            try {
                return await (0, n.KD)(e, i, l);
            } catch (e) {
                s(e);
            } finally {
                t(!1);
            }
        }, []),
    };
};
