n.d(t, { W: () => u });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(141408),
    c = n(95632);
function u(e) {
    let { label: t, onClick: n, "aria-hidden": i, leading: a, trailing: u, inInput: f = !1 } = e,
        _ = null;
    null != a &&
        (_ = (0, r.jsx)("div", {
            className: l.leading,
            children: (0, r.jsx)(d, {
                accessory: a,
                leading: !0,
            }),
        }));
    let p = null;
    return (
        null != u &&
            (p = (0, r.jsx)("div", {
                className: l.trailing,
                children: (0, r.jsx)(d, { accessory: u }),
            })),
        (0, r.jsxs)("div", {
            className: o()(c.listBoxItemContent, l.option, { [c.inInput]: f }),
            onClick: n,
            "aria-hidden": i,
            children: [
                _,
                (0, r.jsx)(s.xvT, {
                    variant: "text-md/normal",
                    color: "currentColor",
                    lineClamp: 1,
                    style: {
                        gridColumnStart: null != _ ? "2" : "1",
                        gridColumnEnd: null != p ? "2" : "3",
                    },
                    children: t,
                }),
                p,
            ],
        })
    );
}
function d(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (i.isValidElement(t))
        return (0, r.jsx)("div", {
            className: o()({ [l.iconAccessory]: n }),
            children: t,
        });
    if ("string" == typeof t)
        return (0, r.jsx)(s.xvT, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: t,
        });
    if ("object" == typeof t && "type" in t && "image" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: l.imageAccessory,
        });
    if ("object" == typeof t && "type" in t && "avatar" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: l.avatarAccessory,
        });
    if ("object" == typeof t && "type" in t && "badge" === t.type) return (0, r.jsx)(s.Cts, { type: t.badgeType });
    let a = t;
    return (0, r.jsx)("div", {
        className: l.iconAccessory,
        children: (0, r.jsx)(a, {
            size: "refresh_sm",
            color: "currentColor",
        }),
    });
}
