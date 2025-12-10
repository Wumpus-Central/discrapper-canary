t.d(n, { Z: () => _ });
var i = t(54381),
    r = t(473749),
    s = t(120356),
    o = t.n(s),
    a = t(793030),
    l = t(481060),
    c = t(511010),
    u = t(64515),
    d = t(892744);
function _(e) {
    let {
        headerText: n,
        descriptionText: t,
        infoRows: s,
        onDismissAndStay: _,
        onDismissAndLeave: f,
        leaveButtonText: m,
        stayButtonText: x,
        transitionState: N,
        impression: g,
    } = e;
    return (0, i.jsx)(a.ExpressiveModal, {
        transitionState: N,
        onClose: () => (_(), Promise.resolve()),
        trackingProps: { impression: g },
        graphic: {
            type: "image",
            src: d.Z,
        },
        title: n,
        subtitle: null != t ? t : void 0,
        actions: [
            {
                text: x,
                onClick: _,
                variant: "secondary",
            },
            {
                text: m,
                onClick: f,
            },
        ],
        children: (0, i.jsx)("div", {
            className: u.infoGroup,
            children: s.map((e, n) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsxs)("div", {
                                className: o()(u.infoRow, e.className),
                                children: [
                                    e.icon,
                                    (0, i.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        children: e.text,
                                    }),
                                ],
                            }),
                            n < s.length - 1 && (0, i.jsx)(c.Z, {}),
                        ],
                    },
                    n,
                ),
            ),
        }),
    });
}
