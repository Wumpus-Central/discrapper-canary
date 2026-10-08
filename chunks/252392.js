l.d(t, { y: () => N });
var a = l(477900),
    n = l(582128),
    r = l(503698),
    s = l.n(r),
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
        n = s()(
            p.EG,
            { [p.my]: "avatar" === t.type, [p.EB]: "guild" === t.type, [p.Hj]: "guild" === t.type && null == t.src },
            l,
        );
    return (0, a.jsx)("span", { className: n, "aria-hidden": !0, children: (0, a.jsx)(y, { entity: t }) });
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
            return (0, a.jsx)("img", { className: s()(p.Sl, p.M2), src: t.src, alt: t.alt ?? "", draggable: !1 });
    }
}
function h(e) {
    return "object" == typeof e && null != e && "type" in e && "string" == typeof e.type;
}
var C = l(395762);
let f = {
    success: { color: o.A.colors.ICON_FEEDBACK_POSITIVE, icon: d.y },
    critical: { color: o.A.colors.ICON_FEEDBACK_CRITICAL, icon: m.E },
};
function N(e) {
    return null != e.__dangerouslyRenderContent
        ? (0, a.jsx)("div", { className: C.customContent, children: e.__dangerouslyRenderContent() })
        : (0, a.jsx)(v, { ...e });
}
function v(e) {
    let { variant: t = "default", text: l, icon: r, iconColor: c, secondaryIconColor: d } = e,
        m = (0, u.r)(o.A.modules.toast.TEXT_LINE_COUNT),
        g = n.useMemo(() => {
            let e = f[t];
            if (null == e && h(r)) return (0, a.jsx)(j, { entity: r });
            let l = e?.icon ?? (h(r) ? void 0 : r);
            if (null == l) return null;
            let n = { color: e?.color ?? c ?? o.A.colors.ICON_DEFAULT };
            return (null != d && (n.secondaryColor = d), (0, a.jsx)(l, { className: C.icon, size: "sm", ...n }));
        }, [r, c, d, t]);
    return (0, a.jsxs)("div", {
        className: s()(C.wrapper, C[t]),
        children: [
            (0, a.jsx)("div", { className: s()(C.baselayer, C[t]) }),
            (0, a.jsxs)("div", {
                className: C.content,
                children: [
                    g,
                    !i()(l) &&
                        (0, a.jsx)(x.E, { variant: "text-md/normal", color: "text-strong", lineClamp: m, children: l }),
                ],
            }),
        ],
    });
}
