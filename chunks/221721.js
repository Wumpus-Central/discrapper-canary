n.d(t, { p: () => o });
var r = n(605294),
    i = n(159447),
    a = n(473749);
function o(e, t) {
    let n = null == t ? void 0 : t.isDisabled,
        [o, s] = (0, a.useState)(!1);
    return (
        (0, i.b)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && s(!!(0, r.QL)(e.current, { tabbable: !0 }).nextNode());
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
