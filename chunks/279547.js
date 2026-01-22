n.d(t, { d: () => a }), n(896048);
var r = n(64700),
    i = n(198982);
function a(e) {
    let { onError: t, onSuccess: n, report: a } = e,
        [s, o] = r.useState(!1),
        l = s;
    return {
        reportFalsePositive: r.useCallback(async () => {
            if (!l) {
                o(!0);
                try {
                    await a(), null == n || n();
                } catch (n) {
                    let e = new i.LG(n);
                    null == t || t(e);
                } finally {
                    o(!1);
                }
            }
        }, [l, t, n, a]),
        isReportFalsePositiveLoading: s,
    };
}
