i.d(t, {
    A: () => u,
});
var n = i(627968),
    s = i(64700),
    r = i(503698),
    a = i.n(r),
    l = i(158954),
    o = i(397927),
    d = i(922529),
    c = i(89300),
    m = i(117816);

function u(e) {
    let {
        headerText: t,
        descriptionText: i,
        infoRows: r,
        onDismissAndStay: u,
        onDismissAndLeave: _,
        leaveButtonText: g,
        stayButtonText: f,
        transitionState: h,
        impression: N,
    } = e;
    return (0, n.jsx)(l.ExpressiveModal, {
        transitionState: h,
        onClose: () => (u(), Promise.resolve()),
        trackingProps: {
            impression: N,
        },
        graphic: {
            type: "image",
            src: m.A,
        },
        title: t,
        subtitle: null != i ? i : void 0,
        actions: [
            {
                text: f,
                onClick: u,
                variant: "secondary",
            },
            {
                text: g,
                onClick: _,
            },
        ],
        children: (0, n.jsx)("div", {
            className: c.Cu,
            children: r.map((e, t) =>
                (0, n.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, n.jsxs)("div", {
                                className: a()(c.lj, e.className),
                                children: [
                                    e.icon,
                                    (0, n.jsx)(o.Text, {
                                        variant: "text-md/medium",
                                        children: e.text,
                                    }),
                                ],
                            }),
                            t < r.length - 1 && (0, n.jsx)(d.A, {}),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
