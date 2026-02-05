s.d(e, { A: () => o });
var _ = s(627968),
    i = s(64700),
    a = s(503698),
    A = s.n(a),
    n = s(158954),
    r = s(397927),
    l = s(922529),
    I = s(89300),
    E = s(117816);
function o(t) {
    let {
        headerText: e,
        descriptionText: s,
        infoRows: a,
        onDismissAndStay: o,
        onDismissAndLeave: d,
        leaveButtonText: u,
        stayButtonText: h,
        transitionState: L,
        impression: c,
    } = t;
    return (0, _.jsx)(n.ExpressiveModal, {
        transitionState: L,
        onClose: () => (o(), Promise.resolve()),
        trackingProps: { impression: c },
        graphic: { type: "image", src: E.A },
        title: e,
        subtitle: s ?? void 0,
        actions: [
            { text: h, onClick: o, variant: "secondary" },
            { text: u, onClick: d },
        ],
        children: (0, _.jsx)("div", {
            className: I.Cu,
            children: a.map((t, e) =>
                (0, _.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, _.jsxs)("div", {
                                className: A()(I.lj, t.className),
                                children: [t.icon, (0, _.jsx)(r.Text, { variant: "text-md/medium", children: t.text })],
                            }),
                            e < a.length - 1 && (0, _.jsx)(l.A, {}),
                        ],
                    },
                    e,
                ),
            ),
        }),
    });
}
