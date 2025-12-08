t.d(n, { Z: () => c });
var i = t(54381),
    r = t(473749),
    s = t(120356),
    o = t.n(s),
    a = t(793030),
    l = t(481060),
    u = t(511010),
    d = t(64515);
function c(e) {
    let {
        headerText: n,
        descriptionText: t,
        infoRows: s,
        onDismissAndStay: c,
        onDismissAndLeave: _,
        leaveButtonText: f,
        stayButtonText: m,
        transitionState: x,
        impression: N,
    } = e;
    return (0, i.jsx)(a.Modal, {
        transitionState: x,
        onClose: () => (c(), Promise.resolve()),
        trackingProps: { impression: N },
        title: n,
        subtitle: null != t ? t : void 0,
        actions: [
            {
                text: m,
                onClick: c,
                variant: "secondary",
            },
            {
                text: f,
                onClick: _,
            },
        ],
        children: (0, i.jsx)("div", {
            className: d.infoGroup,
            children: s.map((e, n) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsxs)("div", {
                                className: o()(d.infoRow, e.className),
                                children: [
                                    e.icon,
                                    (0, i.jsx)(l.Text, {
                                        variant: "text-md/medium",
                                        children: e.text,
                                    }),
                                ],
                            }),
                            n < s.length - 1 && (0, i.jsx)(u.Z, {}),
                        ],
                    },
                    n,
                ),
            ),
        }),
    });
}
