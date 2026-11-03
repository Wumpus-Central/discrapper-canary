l.d(t, { y: () => N });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    s = l.n(r),
    o = l(249686),
    c = l.n(o),
    i = l(661531),
    u = l(603392),
    d = l(628284),
    m = l(695366),
    g = l(834730),
    p = l(23339),
    y = l(627805);
function x(e) {
    let { entity: t, className: l } = e,
        a = s()(
            y.EG,
            { [y.my]: "avatar" === t.type, [y.EB]: "guild" === t.type, [y.Hj]: "guild" === t.type && null == t.src },
            l,
        );
    return (0, n.jsx)("span", { className: a, "aria-hidden": !0, children: (0, n.jsx)(f, { entity: t }) });
}
function f(e) {
    let { entity: t } = e;
    switch (t.type) {
        case "emoji":
            if ("unicode" in t)
                return (0, n.jsx)(g.E, {
                    variant: "body-lg/normal",
                    color: "text-default",
                    tag: "span",
                    lineClamp: 1,
                    children: t.unicode,
                });
            return (0, n.jsx)("img", { className: y.Sl, src: t.src, alt: t.alt ?? "", draggable: !1 });
        case "avatar":
            return (0, n.jsx)("img", { className: y.Sl, src: t.src, alt: t.alt ?? "", draggable: !1 });
        case "guild":
            if (null == t.src) {
                let e = (0, p.oN)(t.name);
                return (0, n.jsx)(g.E, {
                    ...(e.length <= 1
                        ? { variant: "body-xs/normal" }
                        : e.length <= 4
                          ? { variant: "footnote/normal" }
                          : 5 === e.length
                            ? { variant: "footnote/normal", style: { fontSize: 7 } }
                            : { variant: "footnote/normal", style: { fontSize: 5 } }),
                    color: "text-default",
                    tag: "span",
                    lineClamp: 1,
                    children: e,
                });
            }
            return (0, n.jsx)("img", { className: y.Sl, src: t.src, alt: t.name, draggable: !1 });
        case "image":
            return (0, n.jsx)("img", { className: s()(y.Sl, y.M2), src: t.src, alt: t.alt ?? "", draggable: !1 });
    }
}
function j(e) {
    return "object" == typeof e && null != e && "type" in e && "string" == typeof e.type;
}
var h = l(395762);
let C = {
    success: { color: i.A.colors.ICON_FEEDBACK_POSITIVE, icon: d.y },
    critical: { color: i.A.colors.ICON_FEEDBACK_CRITICAL, icon: m.E },
};
function N(e) {
    return null != e.__dangerouslyRenderContent
        ? (0, n.jsx)("div", { className: h.customContent, children: e.__dangerouslyRenderContent() })
        : (0, n.jsx)(v, { ...e });
}
function v(e) {
    let { variant: t = "default", text: l, icon: r, iconColor: o, secondaryIconColor: d } = e,
        m = (0, u.r)(i.A.modules.toast.TEXT_LINE_COUNT),
        p = a.useMemo(() => {
            let e = C[t];
            if (null == e && j(r)) return (0, n.jsx)(x, { entity: r });
            let l = e?.icon ?? (j(r) ? void 0 : r);
            if (null == l) return null;
            let a = { color: e?.color ?? o ?? i.A.colors.ICON_DEFAULT };
            return (null != d && (a.secondaryColor = d), (0, n.jsx)(l, { className: h.icon, size: "sm", ...a }));
        }, [r, o, d, t]);
    return (0, n.jsxs)("div", {
        className: s()(h.wrapper, h[t]),
        children: [
            (0, n.jsx)("div", { className: s()(h.baselayer, h[t]) }),
            (0, n.jsxs)("div", {
                className: h.content,
                children: [
                    p,
                    !c()(l) &&
                        (0, n.jsx)(g.E, { variant: "body-md/normal", color: "text-strong", lineClamp: m, children: l }),
                ],
            }),
        ],
    });
}
