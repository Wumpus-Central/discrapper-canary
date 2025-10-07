n.d(t, { W: () => c });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(141408),
    l = n(95632);
function c(e) {
    let { label: t, onClick: n, "aria-hidden": i, leading: c, trailing: d } = e,
        f = (0, r.jsx)("div", {});
    null != c &&
        (f = (0, r.jsx)("div", {
            className: s.leading,
            children: (0, r.jsx)(u, { accessory: c }),
        }));
    let _ = (0, r.jsx)("div", {});
    return (
        null != d &&
            (_ = (0, r.jsx)("div", {
                className: s.trailing,
                children: (0, r.jsx)(u, { accessory: d }),
            })),
        (0, r.jsxs)("div", {
            className: a()(l.listBoxItemContent, s.option),
            onClick: n,
            "aria-hidden": i,
            children: [
                f,
                (0, r.jsx)(o.xvT, {
                    variant: "text-md/normal",
                    color: "currentColor",
                    lineClamp: 1,
                    children: t,
                }),
                _,
            ],
        })
    );
}
function u(e) {
    let { accessory: t } = e;
    if (null == t) return null;
    if ("string" == typeof t)
        return (0, r.jsx)(o.xvT, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: t,
        });
    if ("object" == typeof t && "type" in t && "image" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: s.imageAccessory,
        });
    if ("object" == typeof t && "type" in t && "avatar" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: s.avatarAccessory,
        });
    if ("object" == typeof t && "type" in t && "badge" === t.type) return (0, r.jsx)(o.Cts, { type: t.badgeType });
    let n = t;
    return (0, r.jsx)("div", {
        className: s.iconAccessory,
        children: (0, r.jsx)(n, {
            size: "refresh_sm",
            color: "currentColor",
        }),
    });
}
