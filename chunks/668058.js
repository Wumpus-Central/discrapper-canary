n.d(t, { $: () => l }), n(388685);
var r = n(192379),
    i = n(881052);
function l(e) {
    let { onError: t, onSuccess: n, report: l } = e,
        [a, o] = r.useState(!1);
    return {
        reportFalsePositive: r.useCallback(async () => {
            if (!a) {
                o(!0);
                try {
                    await l(), null == n || n();
                } catch (n) {
                    let e = new i.Hx(n);
                    null == t || t(e);
                } finally {
                    o(!1);
                }
            }
        }, [a, t, n, l]),
        isReportFalsePositiveLoading: a
    };
}
