n.d(t, { V: () => m });
var a = n(627968),
    i = n(64700),
    s = n(342494),
    l = n(780964),
    r = n(840065),
    o = n(88001),
    d = n(519412),
    c = n(985018),
    u = n(438705);
let m = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: m } = e,
        h = i.useCallback(() => {
            m(), (0, r.openUserSettings)(l.X.SUBSCRIPTIONS_PANEL);
        }, [m]);
    return (0, a.jsx)(s.AM, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: u },
        shouldShow: n,
        title: c.intl.format(d.default.bx8sR9, { premiumGroupProductName: (0, o.DP)() }),
        body: c.intl.format(d.default.Pw4OFZ, { premiumGroupProductName: (0, o.DP)() }),
        onRequestClose: m,
        actions: [{ text: c.intl.string(d.default.DD26QR), onClick: h }],
    });
};
