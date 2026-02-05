n.d(t, { d: () => a });
var i = n(64700),
    l = n(198982);
function a(e) {
    let { onError: t, onSuccess: n, report: a } = e,
        [r, s] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!r) {
                s(!0);
                try {
                    await a(), n?.();
                } catch (n) {
                    let e = new l.LG(n);
                    t?.(e);
                } finally {
                    s(!1);
                }
            }
        }, [r, t, n, a]),
        isReportFalsePositiveLoading: r,
    };
}
