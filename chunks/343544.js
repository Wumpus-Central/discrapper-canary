n.d(t, { Z: () => u });
var i = n(54381),
    s = n(473749),
    r = n(120356),
    a = n.n(r),
    l = n(793030),
    o = n(481060),
    d = n(511010),
    c = n(886097);
function u(e) {
    let {
        headerText: t,
        descriptionText: n,
        infoRows: r,
        onDismissAndStay: u,
        onDismissAndLeave: _,
        leaveButtonText: m,
        stayButtonText: x,
        transitionState: f,
        impression: h,
    } = e;
    return (0, i.jsx)(l.Modal, {
        transitionState: f,
        onClose: () => (u(), Promise.resolve()),
        trackingProps: { impression: h },
        title: t,
        subtitle: null != n ? n : void 0,
        actions: [
            {
                text: x,
                onClick: u,
                variant: "secondary",
            },
            {
                text: m,
                onClick: _,
            },
        ],
        children: (0, i.jsx)("div", {
            className: c.infoGroup,
            children: r.map((e, t) =>
                (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(c.infoRow, e.className),
                                children: [
                                    e.icon,
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        children: e.text,
                                    }),
                                ],
                            }),
                            t < r.length - 1 && (0, i.jsx)(d.Z, {}),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
