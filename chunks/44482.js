var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(805251),
    o = n(379261),
    d = n(834730),
    c = n(594615),
    u = n(198450);
function _(e) {
    let { accessory: t, leading: n } = e;
    if (null == t) return null;
    if (r.isValidElement(t)) return (0, i.jsx)("div", { className: s()({ [u.MG]: n }), children: t });
    if ("string" == typeof t) return (0, i.jsx)(d.E, { variant: "body-sm/normal", color: "text-subtle", children: t });
    if ("object" == typeof t && "type" in t)
        switch (t.type) {
            case "image":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: u.mQ });
            case "avatar":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: u.CD });
            case "badge":
                return (0, i.jsx)(l.E, { type: t.badgeType, variant: "primary" });
            default:
                return null;
        }
    return (0, i.jsx)("div", {
        className: u.MG,
        children: (0, i.jsx)(t, { size: "refresh_sm", color: "currentColor" }),
    });
}
n.d(
    t,
    {},
    {
        c: function (e) {
            let {
                    label: t,
                    description: n,
                    onClick: r,
                    "aria-hidden": a,
                    leading: l,
                    trailing: E,
                    inInput: A = !1,
                } = e,
                h = null;
            null != l &&
                (h = (0, i.jsx)("div", { className: u.R4, children: (0, i.jsx)(_, { accessory: l, leading: !0 }) }));
            let f = null;
            null != E && (f = (0, i.jsx)("div", { className: u.ZY, children: (0, i.jsx)(_, { accessory: E }) }));
            let I = !A && null != n && "" !== n,
                p = { gridColumnStart: null != h ? "2" : "1", gridColumnEnd: null != f ? "2" : "3" };
            return (0, i.jsxs)("div", {
                className: s()(c.uN, u.uK, { [c.MO]: A }),
                onClick: r,
                "aria-hidden": a,
                "data-has-description": I || void 0,
                children: [
                    h,
                    A
                        ? (0, i.jsx)(d.E, {
                              variant: "body-md/normal",
                              color: "currentColor",
                              lineClamp: 1,
                              style: p,
                              children: t,
                          })
                        : (0, i.jsx)(o.r, { variant: "body-md/normal", style: p, children: t }),
                    I &&
                        (0, i.jsx)(d.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            style: { gridColumnStart: null != h ? "2" : "1", gridColumnEnd: null != f ? "2" : "3" },
                            children: n,
                        }),
                    f,
                ],
            });
        },
    },
);
