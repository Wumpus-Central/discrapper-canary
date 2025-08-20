n.d(e, { Z: () => _ });
var i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(82659),
    o = n(481060),
    u = n(511010),
    c = n(64515);
function _(t) {
    let {
        headerText: e,
        descriptionText: n,
        infoRows: s,
        onDismissAndStay: _,
        onDismissAndLeave: d,
        leaveButtonText: A,
        stayButtonText: E,
        transitionState: I,
        impression: f,
    } = t;
    return (0, i.jsx)(l.Modal, {
        transitionState: I,
        onClose: () => (_(), Promise.resolve()),
        trackingProps: { impression: f },
        title: e,
        subtitle: null != n ? n : void 0,
        actions: [
            {
                text: E,
                onClick: _,
                variant: "secondary",
            },
            {
                text: A,
                onClick: d,
            },
        ],
        children: (0, i.jsx)("div", {
            className: c.infoGroup,
            children: s.map((t, e) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(c.infoRow, t.className),
                                children: [
                                    t.icon,
                                    (0, i.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        children: t.text,
                                    }),
                                ],
                            }),
                            e < s.length - 1 && (0, i.jsx)(u.Z, {}),
                        ],
                    },
                    e,
                ),
            ),
        }),
    });
}
