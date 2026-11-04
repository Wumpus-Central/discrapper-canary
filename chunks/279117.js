var n = r(912295),
    i = r(811390),
    o = r(582128);
r.d(
    t,
    {},
    {
        $: function (e, t) {
            let r = t?.isDisabled,
                [a, s] = (0, o.useState)(!1);
            return (
                (0, i.N)(() => {
                    if (e?.current && !r) {
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
        },
    },
);
