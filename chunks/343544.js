n.d(e, { Z: () => c });
var r = n(951288),
    i = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(82659),
    o = n(481060),
    u = n(511010),
    _ = n(64515);
function c(t) {
    let {
        headerText: e,
        descriptionText: n,
        infoRows: s,
        onDismissAndStay: c,
        onDismissAndLeave: d,
        leaveButtonText: A,
        stayButtonText: E,
        transitionState: f,
        impression: I,
    } = t;
    return (0, r.jsx)(l.Modal, {
        transitionState: f,
        onClose: () => (c(), Promise.resolve()),
        trackingProps: { impression: I },
        title: e,
        subtitle: null != n ? n : void 0,
        actions: [
            {
                text: E,
                onClick: c,
                variant: "secondary",
            },
            {
                text: A,
                onClick: d,
            },
        ],
        children: (0, r.jsx)("div", {
            className: _.infoGroup,
            children: s.map((t, e) =>
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, r.jsxs)("div", {
                                className: a()(_.infoRow, t.className),
                                children: [
                                    t.icon,
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        children: t.text,
                                    }),
                                ],
                            }),
                            e < s.length - 1 && (0, r.jsx)(u.Z, {}),
                        ],
                    },
                    e,
                ),
            ),
        }),
    });
}
