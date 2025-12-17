t.d(n, { Z: () => _ });
var i = t(54381),
    r = t(473749),
    s = t(120356),
    o = t.n(s),
    a = t(793030),
    l = t(481060),
    c = t(511010),
    d = t(674162),
    u = t(73377);
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
            src: u.Z,
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
                            n < s.length - 1 && (0, i.jsx)(c.Z, {}),
                        ],
                    },
                    n,
                ),
            ),
        }),
    });
}
