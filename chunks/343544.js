t.d(n, { Z: () => _ });
var r = t(255367),
    s = t(73800),
    i = t(120356),
    a = t.n(i),
    o = t(755721),
    l = t(481060),
    c = t(511010),
    d = t(824469),
    u = t(444812);
function _(e) {
    let {
        headerText: n,
        secondaryHeaderText: t,
        descriptionText: i,
        infoRows: _,
        onDismissAndStay: m,
        onDismissAndLeave: x,
        leaveButtonText: f,
        stayButtonText: h,
        transitionState: g,
        impression: N,
    } = e;
    return (0, r.jsxs)(l.Y0X, {
        transitionState: g,
        impression: N,
        parentComponent: "BlockedUserWarningModal",
        children: [
            (0, r.jsx)("img", {
                alt: "",
                className: d.headerImage,
                src: u,
            }),
            (0, r.jsxs)(l.xBx, {
                separator: !1,
                className: d.header,
                children: [
                    (0, r.jsxs)(l.X6q, {
                        variant: "heading-xl/bold",
                        color: "header-primary",
                        className: d.title,
                        children: [
                            n,
                            null != t &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("br", {}), t],
                                }),
                        ],
                    }),
                    null != i &&
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: i,
                        }),
                ],
            }),
            (0, r.jsxs)(l.hzk, {
                className: d.content,
                children: [
                    (0, r.jsx)("div", {
                        className: d.infoGroup,
                        children: _.map((e, n) =>
                            (0, r.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: a()(d.infoRow, e.className),
                                            children: [
                                                e.icon,
                                                (0, r.jsx)(l.Text, {
                                                    variant: "text-md/medium",
                                                    children: e.text,
                                                }),
                                            ],
                                        }),
                                        n < _.length - 1 && (0, r.jsx)(c.Z, {}),
                                    ],
                                },
                                n,
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: d.buttonGroup,
                        children: [
                            (0, r.jsx)(l.zxk, {
                                variant: "secondary",
                                text: h,
                                onClick: m,
                            }),
                            (0, r.jsx)(o.zx, {
                                color: o.zx.Colors.BRAND,
                                size: o.zx.Sizes.MEDIUM,
                                onClick: x,
                                className: d.leave,
                                children: f,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
