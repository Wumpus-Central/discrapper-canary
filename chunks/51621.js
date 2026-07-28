"use strict";
n.d(t, { $: () => o });
var r = n(421114),
    i = n(576024),
    a = n(582128);
function o(e, t) {
    let n = null == t ? void 0 : t.isDisabled,
        [o, s] = (0, a.useState)(!1);
    return (
        (0, i.N)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && s(!!(0, r.N$)(e.current, { tabbable: !0 }).nextNode());
                };
                t();
                let n = new MutationObserver(t);
                return (
                    n.observe(e.current, {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ["tabIndex", "disabled"],
                    }),
                    () => {
                        n.disconnect();
                    }
                );
            }
        }),
        !n && o
    );
}
