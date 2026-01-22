n.d(t, { c: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(683329),
    c = n(336389);
function u(e) {
    let { label: t, onClick: n, "aria-hidden": i, leading: a, trailing: u, inInput: f = !1 } = e,
        p = null;
    null != a &&
        (p = (0, r.jsx)("div", {
            className: l.R4,
            children: (0, r.jsx)(d, {
                accessory: a,
                leading: !0,
            }),
        }));
    let _ = null;
    return (
        null != u &&
            (_ = (0, r.jsx)("div", {
                className: l.ZY,
                children: (0, r.jsx)(d, { accessory: u }),
            })),
        (0, r.jsxs)("div", {
            className: s()(c.uN, l.uK, { [c.MO]: f }),
            onClick: n,
            "aria-hidden": i,
            children: [
                p,
                (0, r.jsx)(o.EYj, {
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
            className: s()({ [l.MG]: n }),
            children: t,
        });
    if ("string" == typeof t)
        return (0, r.jsx)(o.EYj, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: t,
        });
    if ("object" == typeof t && "type" in t && "image" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: l.mQ,
        });
    if ("object" == typeof t && "type" in t && "avatar" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: l.CD,
        });
    if ("object" == typeof t && "type" in t && "badge" === t.type) return (0, r.jsx)(o.Exy, { type: t.badgeType });
    let a = t;
    return (0, r.jsx)("div", {
        className: l.MG,
        children: (0, r.jsx)(a, {
            size: "refresh_sm",
            color: "currentColor",
        }),
    });
}
