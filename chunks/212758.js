s.d(e, { A: () => d });
var a = s(627968),
    A = s(64700),
    i = s(503698),
    l = s.n(i),
    r = s(772707),
    n = s(834730),
    _ = s(922529),
    I = s(529505),
    h = s(117816);
function d(t) {
    let {
        headerText: e,
        descriptionText: s,
        infoRows: i,
        onDismissAndStay: d,
        onDismissAndLeave: E,
        leaveButtonText: u,
        stayButtonText: o,
        transitionState: L,
        impression: c,
    } = t;
    return (0, a.jsx)(r.k, {
        transitionState: L,
        onClose: () => (d(), Promise.resolve()),
        trackingProps: { impression: c },
        graphic: { type: "image", src: h.A },
        title: e,
        subtitle: s ?? void 0,
        actions: [
            { text: o, onClick: d, variant: "secondary" },
            { text: u, onClick: E },
        ],
        children: (0, a.jsx)("div", {
            className: I.Cu,
            children: i.map((t, e) =>
                (0, a.jsxs)(
                    A.Fragment,
                    {
                        children: [
                            (0, a.jsxs)("div", {
                                className: l()(I.lj, t.className),
                                children: [t.icon, (0, a.jsx)(n.E, { variant: "text-md/medium", children: t.text })],
                            }),
                            e < i.length - 1 && (0, a.jsx)(_.A, {}),
                        ],
                    },
                    e,
                ),
            ),
        }),
    });
}
