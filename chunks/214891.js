n.d(t, { v: () => i });
var l = n(64700),
    r = n(725836);
function i() {
    let { setCheckoutHeaderConfigs: e } = (0, r.ck)();
    return {
        setHeaderBadgeText: l.useCallback(
            (t) => {
                e((e) => (e.headerBadgeText === t ? e : { ...e, headerBadgeText: t ?? void 0 }));
            },
            [e],
        ),
        unsetHeaderBadgeText: l.useCallback(() => {
            e((e) => (null == e.headerBadgeText ? e : { ...e, headerBadgeText: void 0 }));
        }, [e]),
    };
}
