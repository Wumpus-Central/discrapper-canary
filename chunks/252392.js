l.d(t, { y: () => v });
var a = l(477900),
    r = l(582128),
    s = l(503698),
    n = l.n(s),
    c = l(249686),
    i = l.n(c),
    o = l(661531),
    u = l(603392),
    d = l(628284),
    m = l(695366),
    x = l(834730),
    g = l(23339),
    p = l(627805);
function j(e) {
    let { entity: t, className: l } = e,
        r = n()(
            p.EG,
            { [p.my]: "avatar" === t.type, [p.EB]: "guild" === t.type, [p.Hj]: "guild" === t.type && null == t.src },
            l,
        );
    return (0, a.jsx)("span", { className: r, "aria-hidden": !0, children: (0, a.jsx)(y, { entity: t }) });
}
function y(e) {
    let { entity: t } = e;
    switch (t.type) {
        case "emoji":
            if ("unicode" in t)
                return (0, a.jsx)(x.E, {
                    variant: "text-lg/normal",
                    color: "text-default",
                    tag: "span",
                    lineClamp: 1,
                    children: t.unicode,
                });
            return (0, a.jsx)("img", { className: p.Sl, src: t.src, alt: t.alt ?? "", draggable: !1 });
        case "avatar":
            return (0, a.jsx)("img", { className: p.Sl, src: t.src, alt: t.alt ?? "", draggable: !1 });
        case "guild":
            if (null == t.src) {
                let e = (0, g.oN)(t.name);
                return (0, a.jsx)(x.E, {
                    ...(e.length <= 1
                        ? { variant: "text-xs/normal" }
                        : e.length <= 4
                          ? { variant: "text-xxs/normal" }
                          : 5 === e.length
                            ? { variant: "text-xxs/normal", style: { fontSize: 7 } }
                            : { variant: "text-xxs/normal", style: { fontSize: 5 } }),
                    color: "text-default",
                    tag: "span",
                    lineClamp: 1,
                    children: e,
                });
            }
            return (0, a.jsx)("img", { className: p.Sl, src: t.src, alt: t.name, draggable: !1 });
        case "image":
            return (0, a.jsx)("img", { className: n()(p.Sl, p.M2), src: t.src, alt: t.alt ?? "", draggable: !1 });
    }
}
function h(e) {
    return "object" == typeof e && null != e && "type" in e && "string" == typeof e.type;
}
var f = l(395762);
let N = {
    success: { color: o.A.colors.ICON_FEEDBACK_POSITIVE, icon: d.y },
    critical: { color: o.A.colors.ICON_FEEDBACK_CRITICAL, icon: m.E },
};
function v(e) {
    let { variant: t = "default", text: l, icon: s, iconColor: c, secondaryIconColor: d } = e,
        m = (0, u.r)(o.A.modules.toast.TEXT_LINE_COUNT),
        g = r.useMemo(() => {
            let e = N[t];
            if (null == e && h(s)) return (0, a.jsx)(j, { entity: s });
            let l = e?.icon ?? (h(s) ? void 0 : s);
            if (null == l) return null;
            let r = { color: e?.color ?? c ?? o.A.colors.ICON_DEFAULT };
            return (null != d && (r.secondaryColor = d), (0, a.jsx)(l, { className: f.icon, size: "sm", ...r }));
        }, [s, c, d, t]);
    return (0, a.jsxs)("div", {
        className: n()(f.wrapper, f[t]),
        children: [
            (0, a.jsx)("div", { className: n()(f.baselayer, f[t]) }),
            (0, a.jsxs)("div", {
                className: f.content,
                children: [
                    g,
                    !i()(l) &&
                        (0, a.jsx)(x.E, { variant: "text-md/normal", color: "text-strong", lineClamp: m, children: l }),
                ],
            }),
        ],
    });
}
