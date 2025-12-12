n.d(t, { Z: () => _ });
var i = n(54381),
    s = n(473749),
    r = n(120356),
    a = n.n(r),
    l = n(793030),
    o = n(481060),
    d = n(511010),
    c = n(64515),
    u = n(892744);
function _(e) {
    let {
        headerText: t,
        descriptionText: n,
        infoRows: r,
        onDismissAndStay: _,
        onDismissAndLeave: m,
        leaveButtonText: x,
        stayButtonText: f,
        transitionState: g,
        impression: h,
    } = e;
    return (0, i.jsx)(l.ExpressiveModal, {
        transitionState: g,
        onClose: () => (_(), Promise.resolve()),
        trackingProps: { impression: h },
        graphic: {
            type: "image",
            src: u.Z,
        },
        title: t,
        subtitle: null != n ? n : void 0,
        actions: [
            {
                text: f,
                onClick: _,
                variant: "secondary",
            },
            {
                text: x,
                onClick: m,
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
