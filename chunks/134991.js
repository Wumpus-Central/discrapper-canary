n.d(t, { V: () => p });
var i = n(627968),
    s = n(64700),
    l = n(265486),
    a = n(780964),
    r = n(858897),
    o = n(88001),
    d = n(466919),
    c = n(985018),
    u = n(438705);
let p = (e) => {
    let { targetElementRef: t, shouldShow: n, onDismiss: p } = e,
        h = s.useCallback(() => {
            p(), (0, r.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL);
        }, [p]);
    return (0, i.jsx)(l.A, {
        targetElementRef: t,
        position: "top",
        caretConfig: { align: "start" },
        size: "md",
        graphic: { type: "image", src: u },
        shouldShow: n,
        title: c.intl.format(d.default.bx8sR9, { premiumGroupProductName: (0, o.DP)() }),
        body: c.intl.format(d.default.Pw4OFZ, { premiumGroupProductName: (0, o.DP)() }),
        onRequestClose: p,
        actions: [{ text: c.intl.string(d.default.DD26QR), onClick: h }],
    });
};
