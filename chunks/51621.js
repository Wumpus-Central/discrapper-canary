"use strict";
r.d(t, { $: () => a });
var n = r(421114),
    o = r(576024),
    i = r(582128);
function a(e, t) {
    let r = null == t ? void 0 : t.isDisabled,
        [a, s] = (0, i.useState)(!1);
    return (
        (0, o.N)(() => {
            if ((null == e ? void 0 : e.current) && !r) {
                let t = () => {
                    e.current && s(!!(0, n.N$)(e.current, { tabbable: !0 }).nextNode());
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
        !r && a
    );
}
