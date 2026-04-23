"use strict";
r.d(t, { $: () => i });
var n = r(693321),
    a = r(3388),
    s = r(64700);
function i(e, t) {
    let r = null == t ? void 0 : t.isDisabled,
        [i, o] = (0, s.useState)(!1);
    return (
        (0, a.N)(() => {
            if ((null == e ? void 0 : e.current) && !r) {
                let t = () => {
                    e.current && o(!!(0, n.N$)(e.current, { tabbable: !0 }).nextNode());
                };
                t();
                let r = new MutationObserver(t);
                return (
                    r.observe(e.current, {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ["tabIndex", "disabled"],
                    }),
                    () => {
                        r.disconnect();
                    }
                );
            }
        }),
        !r && i
    );
}
