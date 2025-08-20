n.d(t, { $: () => l }), n(388685);
var r = n(647438),
    i = n(881052);
function l(e) {
    let { onError: t, onSuccess: n, report: l } = e,
        [o, a] = r.useState(!1);
    return {
        reportFalsePositive: r.useCallback(async () => {
            if (!o) {
                a(!0);
                try {
                    await l(), null == n || n();
                } catch (n) {
                    let e = new i.Hx(n);
                    null == t || t(e);
                } finally {
                    a(!1);
                }
            }
        }, [o, t, n, l]),
        isReportFalsePositiveLoading: o,
    };
}
