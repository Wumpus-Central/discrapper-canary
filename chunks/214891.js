n.d(t, { v: () => r });
var l = n(64700),
    i = n(725836);
function r() {
    let { setCheckoutHeaderConfigs: e } = (0, i.ck)();
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
