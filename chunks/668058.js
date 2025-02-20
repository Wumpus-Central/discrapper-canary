n.d(t, { $: () => a }), n(47120);
var r = n(192379),
    i = n(881052);
function a(e) {
    let { onError: t, onSuccess: n, report: a } = e,
        [o, l] = r.useState(!1);
    return {
        reportFalsePositive: r.useCallback(async () => {
            if (!o) {
                l(!0);
                try {
                    await a(), null == n || n();
                } catch (n) {
                    let e = new i.Hx(n);
                    null == t || t(e);
                } finally {
                    l(!1);
                }
            }
        }, [o, t, n, a]),
        isReportFalsePositiveLoading: o
    };
}
