"use strict";
n.d(t, { v: () => s });
var i = n(64700),
    r = n(725836);
function s() {
    let { setCheckoutHeaderConfigs: e } = (0, r.ck)();
    return {
        setHeaderBadgeText: i.useCallback(
            (t) => {
                e((e) => (e.headerBadgeText === t ? e : { ...e, headerBadgeText: t ?? void 0 }));
            },
            [e],
        ),
        unsetHeaderBadgeText: i.useCallback(() => {
            e((e) => (null == e.headerBadgeText ? e : { ...e, headerBadgeText: void 0 }));
        }, [e]),
    };
}
