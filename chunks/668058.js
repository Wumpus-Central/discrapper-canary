n.d(t, { $: () => a }), n(47120);
var i = n(192379),
    l = n(881052);
function a(e) {
    let { onError: t, onSuccess: n, report: a } = e,
        [r, s] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!r) {
                s(!0);
                try {
                    await a(), null == n || n();
                } catch (n) {
                    let e = new l.Hx(n);
                    null == t || t(e);
                } finally {
                    s(!1);
                }
            }
        }, [r, t, n, a]),
        isReportFalsePositiveLoading: r
    };
}
