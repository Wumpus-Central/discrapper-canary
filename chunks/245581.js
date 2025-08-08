r.d(t, { Z: () => i });
var n = r(255367);
r(73800);
var l = r(481060),
    o = r(313201),
    c = r(268999);
function i(e) {
    let { transitionState: t, title: r, subtitle: i, children: s } = e,
        a = (0, o.Dt)();
    return (0, n.jsxs)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": a,
        parentComponent: "SecureFramesVerificationModal",
        children: [
            (0, n.jsx)("div", {
                className: c.shieldIconContainer,
                children: (0, n.jsx)("div", {
                    className: c.shieldIcon,
                    children: (0, n.jsx)(l.tQf, {
                        size: "custom",
                        width: 55,
                        height: 55,
                        color: l.TVs.colors.HEADER_SECONDARY,
                    }),
                }),
            }),
            (0, n.jsxs)(l.hzk, {
                className: c.content,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: c.title,
                        variant: "heading-lg/bold",
                        color: "header-primary",
                        children: r,
                    }),
                    (0, n.jsx)(l.Text, {
                        className: c.subtitle,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: i,
                    }),
                    s,
                ],
            }),
        ],
    });
}
