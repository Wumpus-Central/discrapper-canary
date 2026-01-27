n.d(t, {
    d: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(198982);

function l(e) {
    let { onError: t, onSuccess: n, report: l } = e,
        [a, s] = r.useState(!1);
    return {
        reportFalsePositive: r.useCallback(async () => {
            if (!a) {
                s(!0);
                try {
                    await l(), null == n || n();
                } catch (n) {
                    let e = new i.LG(n);
                    null == t || t(e);
                } finally {
                    s(!1);
                }
            }
        }, [a, t, n, l]),
        isReportFalsePositiveLoading: a,
    };
}
