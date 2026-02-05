n.d(t, { V: () => h });
var a = n(627968),
    s = n(64700),
    i = n(342494),
    l = n(780964),
    r = n(840065),
    o = n(88001),
    d = n(652215),
    c = n(519412),
    u = n(985018),
    m = n(438705);
let h = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: h } = e,
        x = s.useCallback(() => {
            h(), (0, r.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL, { section: d.nc_.SUBSCRIPTIONS });
        }, [h]);
    return (0, a.jsx)(i.AM, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: m },
        shouldShow: n,
        title: u.intl.format(c.default.bx8sR9, { premiumGroupProductName: (0, o.DP)() }),
        body: u.intl.format(c.default.StWqzJ, { totalSeats: o.LM }),
        onRequestClose: h,
        actions: [{ text: u.intl.string(c.default.DD26QR), onClick: x }],
    });
};
