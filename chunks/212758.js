n.d(t, { A: () => d });
var r = n(627968),
    s = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(772707),
    l = n(834730),
    c = n(922529),
    u = n(529505),
    m = n(117816);
function d(e) {
    let {
        headerText: t,
        descriptionText: n,
        infoRows: a,
        onDismissAndStay: d,
        onDismissAndLeave: h,
        leaveButtonText: k,
        stayButtonText: x,
        transitionState: f,
        impression: p,
    } = e;
    return (0, r.jsx)(o.k, {
        transitionState: f,
        onClose: function () {
            return d(), Promise.resolve();
        },
        trackingProps: { impression: p },
        graphic: { type: "image", src: m.A },
        title: t,
        subtitle: n ?? void 0,
        actions: [
            { text: x, onClick: d, variant: "secondary" },
            { text: k, onClick: h },
        ],
        children: (0, r.jsx)("div", {
            className: u.Cu,
            children: a.map((e, t) =>
                (0, r.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, r.jsxs)("div", {
                                className: i()(u.lj, e.className),
                                children: [e.icon, (0, r.jsx)(l.E, { variant: "text-md/medium", children: e.text })],
                            }),
                            t < a.length - 1 && (0, r.jsx)(c.A, {}),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
