"use strict";
n.d(t, { $: () => s });
var i = n(477900),
    r = n(582128),
    a = n(442433);
function s(e) {
    return r.useCallback(
        (t) => {
            (0, a.L3)(t, async () => {
                let { default: t } = await Promise.all([
                    n.e("146652"),
                    n.e("57729"),
                    n.e("610124"),
                    n.e("208113"),
                ]).then(n.bind(n, 806280));
                return (n) => (0, i.jsx)(t, { ...n, navId: e });
            });
        },
        [e],
    );
}
