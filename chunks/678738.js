n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(313201),
    c = n(938111),
    u = n(104287),
    d = n(516117);
function f(e) {
    let {
            children: t,
            heading: n,
            headingIcon: a,
            introText: f,
            className: p,
            scrollTargetId: _,
            headingClassName: m,
            headingVariant: h = "text-xs/semibold",
            headingColor: g = "text-default",
        } = e,
        E = (0, l.Dt)(),
        b = i.useRef(null),
        y = (0, u.b)(),
        O = null != _ && y === _;
    return (
        (0, c.Z)(b, O),
        (0, r.jsxs)("section", {
            ref: O ? b : void 0,
            className: o()(d.section, p),
            "aria-labelledby": null != n ? E : void 0,
            children: [
                null != n &&
                    (0, r.jsxs)("div", {
                        className: d.headings,
                        children: [
                            (0, r.jsxs)("div", {
                                className: d.header,
                                children: [
                                    (0, r.jsx)(s.Heading, {
                                        variant: h,
                                        color: g,
                                        className: m,
                                        id: E,
                                        children: n,
                                    }),
                                    a,
                                ],
                            }),
                            null != f &&
                                (0, r.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    children: f,
                                }),
                        ],
                    }),
                (0, r.jsx)(s.y5t, { children: t }),
            ],
        })
    );
}
