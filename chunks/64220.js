n.d(t, { Z: () => d }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(481060),
    l = n(921944),
    s = n(388032),
    o = n(990287);
function c(e) {
    let { markAsDismissed: t } = e;
    return (
        r.useEffect(() => {
            let e = setTimeout(() => {
                t(l.L.AUTO_DISMISS);
            }, 8000);
            return () => {
                clearTimeout(e);
            };
        }, [t]),
        (0, a.jsxs)(i.P3F, {
            className: o.container,
            onClick: () => {
                t(l.L.USER_DISMISS);
            },
            children: [
                (0, a.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    color: "always-white",
                    children: s.intl.string(s.t.fJNqJi),
                }),
                (0, a.jsx)("div", { className: o.pointer }),
            ],
        })
    );
}
function d(e) {
    let { children: t, markAsDismissed: n, targetElementRef: l } = e,
        [s, o] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = setTimeout(() => {
                o(!0);
            }, 1000);
            return () => {
                clearTimeout(e);
            };
        }, [o]),
        (0, a.jsx)(i.yRy, {
            targetElementRef: l,
            position: "top",
            align: "left",
            shouldShow: s,
            renderPopout: () => (0, a.jsx)(c, { markAsDismissed: n }),
            children: t,
        })
    );
}
