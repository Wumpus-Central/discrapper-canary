r.d(n, { Z: () => u });
var t = r(255367),
    s = r(73800),
    i = r(120356),
    a = r.n(i),
    l = r(755721),
    o = r(481060),
    d = r(511010),
    c = r(531835),
    m = r(444812);
function u(e) {
    let {
        headerText: n,
        secondaryHeaderText: r,
        descriptionText: i,
        infoRows: u,
        onDismissAndStay: _,
        onDismissAndLeave: f,
        leaveButtonText: x,
        stayButtonText: h,
        transitionState: g,
        impression: N,
    } = e;
    return (0, t.jsxs)(o.Y0X, {
        transitionState: g,
        impression: N,
        parentComponent: "BlockedUserWarningModal",
        children: [
            (0, t.jsx)("img", {
                alt: "",
                className: c.headerImage,
                src: m,
            }),
            (0, t.jsxs)(o.xBx, {
                separator: !1,
                className: c.header,
                children: [
                    (0, t.jsxs)(o.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: c.title,
                        children: [
                            n,
                            null != r &&
                                (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)("br", {}), r],
                                }),
                        ],
                    }),
                    null != i &&
                        (0, t.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: i,
                        }),
                ],
            }),
            (0, t.jsxs)(o.hzk, {
                className: c.content,
                children: [
                    (0, t.jsx)("div", {
                        className: c.infoGroup,
                        children: u.map((e, n) =>
                            (0, t.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: a()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, t.jsx)(o.Text, {
                                                    variant: "text-md/medium",
                                                    children: e.text,
                                                }),
                                            ],
                                        }),
                                        n < u.length - 1 && (0, t.jsx)(d.Z, {}),
                                    ],
                                },
                                n,
                            ),
                        ),
                    }),
                    (0, t.jsxs)("div", {
                        className: c.buttonGroup,
                        children: [
                            (0, t.jsx)(o.zxk, {
                                variant: "secondary",
                                text: h,
                                onClick: _,
                            }),
                            (0, t.jsx)(l.zx, {
                                color: l.zx.Colors.BRAND,
                                size: l.zx.Sizes.MEDIUM,
                                onClick: f,
                                className: c.leave,
                                children: x,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
