s.d(t, { A: () => u });
var r = s(627968),
    a = s(64700),
    n = s(503698),
    i = s.n(n),
    o = s(772707),
    l = s(834730),
    m = s(922529),
    c = s(529505),
    d = s(117816);
function u(e) {
    let {
        headerText: t,
        descriptionText: s,
        infoRows: n,
        onDismissAndStay: u,
        onDismissAndLeave: h,
        leaveButtonText: k,
        stayButtonText: x,
        transitionState: p,
        impression: g,
    } = e;
    return (0, r.jsx)(o.k, {
        transitionState: p,
        onClose: () => (u(), Promise.resolve()),
        trackingProps: { impression: g },
        graphic: { type: "image", src: d.A },
        title: t,
        subtitle: s ?? void 0,
        actions: [
            { text: x, onClick: u, variant: "secondary" },
            { text: k, onClick: h },
        ],
        children: (0, r.jsx)("div", {
            className: c.Cu,
            children: n.map((e, t) =>
                (0, r.jsxs)(
                    a.Fragment,
                    {
                        children: [
                            (0, r.jsxs)("div", {
                                className: i()(c.lj, e.className),
                                children: [e.icon, (0, r.jsx)(l.E, { variant: "text-md/medium", children: e.text })],
                            }),
                            t < n.length - 1 && (0, r.jsx)(m.A, {}),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
