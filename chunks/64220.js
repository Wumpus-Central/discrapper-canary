n.d(t, { Z: () => u }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(921944),
    s = n(388032),
    l = n(971631);
function c(e) {
    let { markAsDismissed: t } = e;
    i.useEffect(() => {
        let e = setTimeout(() => {
            t(o.L.AUTO_DISMISS);
        }, 8000);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let n = () => {
        t(o.L.USER_DISMISS);
    };
    return (0, r.jsxs)(a.P3F, {
        className: l.container,
        onClick: n,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "always-white",
                children: s.intl.string(s.t.fJNqJi),
            }),
            (0, r.jsx)("div", { className: l.pointer }),
        ],
    });
}
function u(e) {
    let { children: t, markAsDismissed: n, targetElementRef: o } = e,
        [s, l] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = setTimeout(() => {
                l(!0);
            }, 1000);
            return () => {
                clearTimeout(e);
            };
        }, [l]),
        (0, r.jsx)(a.yRy, {
            targetElementRef: o,
            position: "top",
            align: "left",
            shouldShow: s,
            renderPopout: () => (0, r.jsx)(c, { markAsDismissed: n }),
            children: t,
        })
    );
}
