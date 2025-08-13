t.d(n, { Z: () => m });
var s = t(255367),
    i = t(73800),
    r = t(120356),
    a = t.n(r),
    l = t(755721),
    o = t(481060),
    d = t(511010),
    c = t(531835),
    u = t(444812);
function m(e) {
    let {
        headerText: n,
        secondaryHeaderText: t,
        descriptionText: r,
        infoRows: m,
        onDismissAndStay: x,
        onDismissAndLeave: h,
        leaveButtonText: _,
        stayButtonText: f,
        transitionState: g,
        impression: j,
    } = e;
    return (0, s.jsxs)(o.Y0X, {
        transitionState: g,
        impression: j,
        parentComponent: "BlockedUserWarningModal",
        children: [
            (0, s.jsx)("img", {
                alt: "",
                className: c.headerImage,
                src: u,
            }),
            (0, s.jsxs)(o.xBx, {
                separator: !1,
                className: c.header,
                children: [
                    (0, s.jsxs)(o.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: c.title,
                        children: [
                            n,
                            null != t &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)("br", {}), t],
                                }),
                        ],
                    }),
                    null != r &&
                        (0, s.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: r,
                        }),
                ],
            }),
            (0, s.jsxs)(o.hzk, {
                className: c.content,
                children: [
                    (0, s.jsx)("div", {
                        className: c.infoGroup,
                        children: m.map((e, n) =>
                            (0, s.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, s.jsxs)("div", {
                                            className: a()(c.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, s.jsx)(o.Text, {
                                                    variant: "text-md/medium",
                                                    children: e.text,
                                                }),
                                            ],
                                        }),
                                        n < m.length - 1 && (0, s.jsx)(d.Z, {}),
                                    ],
                                },
                                n,
                            ),
                        ),
                    }),
                    (0, s.jsxs)("div", {
                        className: c.buttonGroup,
                        children: [
                            (0, s.jsx)(o.zxk, {
                                variant: "secondary",
                                text: f,
                                onClick: x,
                            }),
                            (0, s.jsx)(l.zx, {
                                color: l.zx.Colors.BRAND,
                                size: l.zx.Sizes.MEDIUM,
                                onClick: h,
                                className: c.leave,
                                children: _,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
