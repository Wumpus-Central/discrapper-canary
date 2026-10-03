e.d(n, { d: () => a });
var i = e(582128),
    s = e(913122);
function a(t) {
    let { onError: n, onSuccess: e, report: a } = t,
        [l, o] = i.useState(!1);
    return {
        reportFalsePositive: i.useCallback(async () => {
            if (!l) {
                o(!0);
                try {
                    (await a(), e?.());
                } catch (e) {
                    let t = new s.LG(e);
                    n?.(t);
                } finally {
                    o(!1);
                }
            }
        }, [l, n, e, a]),
        isReportFalsePositiveLoading: l,
    };
}
