e.d(n, { d: () => s });
var i = e(582128),
    a = e(913122);
function s(t) {
    let { onError: n, onSuccess: e, report: s } = t,
        [l, r] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!l) {
                r(!0);
                try {
                    (await s(), e?.());
                } catch (e) {
                    let t = new a.LG(e);
                    n?.(t);
                } finally {
                    r(!1);
                }
            }
        }, [l, n, e, s]),
        isReportFalsePositiveLoading: l,
    };
}
