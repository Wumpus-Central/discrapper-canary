"use strict";
n.d(t, { $: () => a });
var r = n(13163),
    i = n(3388),
    s = n(64700);
function a(e, t) {
    let n = null == t ? void 0 : t.isDisabled,
        [a, o] = (0, s.useState)(!1);
    return (
        (0, i.N)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && o(!!(0, r.N$)(e.current, { tabbable: !0 }).nextNode());
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
        !n && a
    );
}
