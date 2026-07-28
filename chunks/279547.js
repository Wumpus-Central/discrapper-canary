e.d(n, { d: () => l });
var i = e(582128),
    a = e(913122);
function l(t) {
    let { onError: n, onSuccess: e, report: l } = t,
        [s, r] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!s) {
                r(!0);
                try {
                    await l(), e?.();
                } catch (e) {
                    let t = new a.LG(e);
                    n?.(t);
                } finally {
                    r(!1);
                }
            }
        }, [s, n, e, l]),
        isReportFalsePositiveLoading: s,
    };
}
