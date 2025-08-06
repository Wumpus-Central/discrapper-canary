(n.d(t, { $: () => o }), n(388685));
var r = n(73800),
    i = n(881052);
function o(e) {
    let { onError: t, onSuccess: n, report: o } = e,
        [a, s] = r.useState(!1),
        l = a;
    return {
        reportFalsePositive: r.useCallback(async () => {
            if (!l) {
                s(!0);
                try {
                    (await o(), null == n || n());
                } catch (n) {
                    let e = new i.Hx(n);
                    null == t || t(e);
                } finally {
                    s(!1);
                }
            }
        }, [l, t, n, o]),
        isReportFalsePositiveLoading: a
    };
}
