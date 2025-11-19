n.d(t, { $: () => a }), n(388685);
var r = n(473749),
    i = n(881052);
function a(e) {
    let { onError: t, onSuccess: n, report: a } = e,
        [o, s] = r.useState(!1),
        l = o;
    return {
        reportFalsePositive: r.useCallback(async () => {
            if (!l) {
                s(!0);
                try {
                    await a(), null == n || n();
                } catch (n) {
                    let e = new i.Hx(n);
                    null == t || t(e);
                } finally {
                    s(!1);
                }
            }
        }, [l, t, n, a]),
        isReportFalsePositiveLoading: o,
    };
}
