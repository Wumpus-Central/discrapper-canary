n.d(t, { Z: () => d });
var r = n(255367),
    s = n(73800),
    i = n(120356),
    a = n.n(i),
    l = n(755721),
    o = n(481060),
    u = n(511010),
    c = n(64515),
    _ = n(444812);
function d(e) {
    let {
        headerText: t,
        secondaryHeaderText: n,
        descriptionText: i,
        infoRows: d,
        onDismissAndStay: A,
        onDismissAndLeave: f,
        leaveButtonText: E,
        stayButtonText: I,
        transitionState: S,
        impression: N,
    } = e;
    return (0, r.jsxs)(o.Y0X, {
        transitionState: S,
        impression: N,
        parentComponent: "BlockedUserWarningModal",
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: c.headerImage,
                src: _,
            }),
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                className: c.header,
                children: [
                    (0, r.jsxs)(o.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: c.title,
                        children: [
                            t,
                            null != n &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("br", {}), n],
                                }),
                        ],
                    }),
                    null != i &&
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: i,
                        }),
                ],
            }),
            (0, r.jsxs)(o.hzk, {
                className: c.content,
                children: [
                    (0, r.jsx)("div", {
                        className: c.infoGroup,
                        children: d.map((e, t) =>
                            (0, r.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: a()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-md/medium",
                                                    children: e.text,
                                                }),
                                            ],
                                        }),
                                        t < d.length - 1 && (0, r.jsx)(u.Z, {}),
                                    ],
                                },
                                t,
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: c.buttonGroup,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                variant: "secondary",
                                text: I,
                                onClick: A,
                            }),
                            (0, r.jsx)(l.zx, {
                                color: l.zx.Colors.BRAND,
                                size: l.zx.Sizes.MEDIUM,
                                onClick: f,
                                className: c.leave,
                                children: E,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
