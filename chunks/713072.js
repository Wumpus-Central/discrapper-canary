n.d(t, { W: () => u });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(141408),
    c = n(95632);
function u(e) {
    let { label: t, onClick: n, "aria-hidden": i, leading: o, trailing: u, inInput: f = !1 } = e,
        p = null;
    null != o &&
        (p = (0, r.jsx)("div", {
            className: l.leading,
            children: (0, r.jsx)(d, {
                accessory: o,
                leading: !0,
            }),
        }));
    let _ = null;
    return (
        null != u &&
            (_ = (0, r.jsx)("div", {
                className: l.trailing,
                children: (0, r.jsx)(d, { accessory: u }),
            })),
        (0, r.jsxs)("div", {
            className: a()(c.listBoxItemContent, l.option, { [c.inInput]: f }),
            onClick: n,
            "aria-hidden": i,
            children: [
                p,
                (0, r.jsx)(s.xvT, {
                    variant: "text-md/normal",
                    color: "currentColor",
                    lineClamp: 1,
                    style: {
                        gridColumnStart: null != p ? "2" : "1",
                        gridColumnEnd: null != _ ? "2" : "3",
                    },
                    children: t,
                }),
                _,
            ],
        })
    );
}
function d(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (i.isValidElement(t))
        return (0, r.jsx)("div", {
            className: a()({ [l.iconAccessory]: n }),
            children: t,
        });
    if ("string" == typeof t)
        return (0, r.jsx)(s.xvT, {
            variant: "text-sm/normal",
            color: "text-subtle",
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
    let o = t;
    return (0, r.jsx)("div", {
        className: l.iconAccessory,
        children: (0, r.jsx)(o, {
            size: "refresh_sm",
            color: "currentColor",
        }),
    });
}
