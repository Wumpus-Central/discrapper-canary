n.d(t, { A: () => _ });
var s = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(158954),
    o = n(397927),
    d = n(922529),
    c = n(89300),
    u = n(117816);
function _(e) {
    let {
        headerText: t,
        descriptionText: n,
        infoRows: r,
        onDismissAndStay: _,
        onDismissAndLeave: m,
        leaveButtonText: f,
        stayButtonText: g,
        transitionState: x,
        impression: N,
    } = e;
    return (0, s.jsx)(l.ExpressiveModal, {
        transitionState: x,
        onClose: () => (_(), Promise.resolve()),
        trackingProps: { impression: N },
        graphic: {
            type: "image",
            src: u.A,
        },
        title: t,
        subtitle: null != n ? n : void 0,
        actions: [
            {
                text: g,
                onClick: _,
                variant: "secondary",
            },
            {
                text: f,
                onClick: m,
            },
        ],
        children: (0, s.jsx)("div", {
            className: c.Cu,
            children: r.map((e, t) =>
                (0, s.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, s.jsxs)("div", {
                                className: a()(c.lj, e.className),
                                children: [
                                    e.icon,
                                    (0, s.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        children: e.text,
                                    }),
                                ],
                            }),
                            t < r.length - 1 && (0, s.jsx)(d.A, {}),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
