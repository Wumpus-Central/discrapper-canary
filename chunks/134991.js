n.d(t, {
    V: () => p,
});
var a = n(627968),
    l = n(64700),
    r = n(342494),
    i = n(780964),
    s = n(840065),
    o = n(88001),
    c = n(652215),
    d = n(519412),
    u = n(985018),
    m = n(438705);
let p = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: p } = e,
        h = l.useCallback(() => {
            p(),
                (0, s.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL, {
                    section: c.nc_.SUBSCRIPTIONS,
                });
        }, [p]);
    return (0, a.jsx)(r.AM, {
        targetElementRef: t,
        position: "top",
        caretConfig: {
            align: "start",
        },
        size: "md",
        graphic: {
            type: "image",
            src: m,
        },
        shouldShow: n,
        title: u.intl.format(d.default.bx8sR9, {
            premiumGroupProductName: (0, o.DP)(),
        }),
        body: u.intl.format(d.default.StWqzJ, {
            totalSeats: o.LM,
        }),
        onRequestClose: p,
        actions: [
            {
                text: u.intl.string(d.default.DD26QR),
                onClick: h,
            },
        ],
    });
};
