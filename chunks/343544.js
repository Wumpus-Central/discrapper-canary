n.d(t, { Z: () => m });
var i = n(54381),
    s = n(473749),
    r = n(120356),
    a = n.n(r),
    l = n(793030),
    o = n(481060),
    d = n(511010),
    c = n(674162),
    u = n(73377);
function m(e) {
    let {
        headerText: t,
        descriptionText: n,
        infoRows: r,
        onDismissAndStay: m,
        onDismissAndLeave: _,
        leaveButtonText: f,
        stayButtonText: x,
        transitionState: g,
        impression: h,
    } = e;
    return (0, i.jsx)(l.ExpressiveModal, {
        transitionState: g,
        onClose: () => (m(), Promise.resolve()),
        trackingProps: { impression: h },
        graphic: {
            type: "image",
            src: u.Z,
        },
        title: t,
        subtitle: null != n ? n : void 0,
        actions: [
            {
                text: x,
                onClick: m,
                variant: "secondary",
            },
            {
                text: f,
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
