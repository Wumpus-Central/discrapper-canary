n.d(t, { a: () => p });
var a = n(54381),
    l = n(473749),
    i = n(907862),
    r = n(313789),
    s = n(518596),
    o = n(981631),
    c = n(921944),
    d = n(163646),
    u = n(388032),
    m = n(932889);
let p = (e) => {
    let { targetElementRef: t, markAsDismissed: n } = e,
        p = (0, l.useCallback)(() => {
            (0, s.openUserSettings)(r.n.PRIVATE_BROWSING_PANEL, { section: o.oAB.CF_WARP });
        }, []);
    return (0, a.jsx)(i.J2, {
        badge: {
            type: "beta",
            variant: "expressive",
        },
        graphic: {
            type: "image",
            src: m,
        },
        caretConfig: { align: "start" },
        align: "left",
        position: "top",
        size: "lg",
        gradientColor: "nitro-pink",
        title: u.intl.string(d.default.KN6HOb),
        body: u.intl.string(d.default["8ludcY"]),
        targetElementRef: t,
        onRequestClose: () => {
            n(c.L.USER_DISMISS);
        },
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.RzWDqY),
                onClick: () => {
                    n(c.L.TAKE_ACTION), p();
                },
            },
        ],
    });
};
