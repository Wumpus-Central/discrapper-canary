l.d(t, { y: () => C });
var a = l(477900),
    r = l(582128),
    n = l(503698),
    s = l.n(n),
    c = l(249686),
    i = l.n(c),
    o = l(661531),
    u = l(603392),
    d = l(628284),
    x = l(695366),
    m = l(834730),
    p = l(23339),
    g = l(627805);
function y(e) {
    let { entity: t, className: l } = e,
        r = s()(
            g.EG,
            { [g.my]: "avatar" === t.type, [g.EB]: "guild" === t.type, [g.Hj]: "guild" === t.type && null == t.src },
            l,
        );
    return (0, a.jsx)("span", { className: r, "aria-hidden": !0, children: (0, a.jsx)(h, { entity: t }) });
}
function h(e) {
    let { entity: t } = e;
    switch (t.type) {
        case "emoji":
            if ("unicode" in t)
                return (0, a.jsx)(m.E, {
                    variant: "text-lg/normal",
                    color: "text-default",
                    tag: "span",
                    lineClamp: 1,
                    children: t.unicode,
                });
            return (0, a.jsx)("img", { className: g.Sl, src: t.src, alt: t.alt ?? "", draggable: !1 });
        case "avatar":
            return (0, a.jsx)("img", { className: g.Sl, src: t.src, alt: t.alt ?? "", draggable: !1 });
        case "guild":
            if (null == t.src) {
                let e = (0, p.oN)(t.name);
                return (0, a.jsx)(m.E, {
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
            return (0, a.jsx)("img", { className: g.Sl, src: t.src, alt: t.name, draggable: !1 });
    }
}
function j(e) {
    return "object" == typeof e && null != e && "type" in e && "string" == typeof e.type;
}
var f = l(395762);
let v = {
    success: { color: o.A.colors.ICON_FEEDBACK_POSITIVE, icon: d.y },
    critical: { color: o.A.colors.ICON_FEEDBACK_CRITICAL, icon: x.E },
};
function C(e) {
    let { variant: t = "default", text: l, icon: n, iconColor: c, secondaryIconColor: d } = e,
        x = (0, u.r)(o.A.modules.toast.TEXT_LINE_COUNT),
        p = r.useMemo(() => {
            let e = v[t];
            if (null == e && j(n)) return (0, a.jsx)(y, { entity: n });
            let l = e?.icon ?? (j(n) ? void 0 : n);
            if (null == l) return null;
            let r = { color: e?.color ?? c ?? o.A.colors.ICON_DEFAULT };
            return (null != d && (r.secondaryColor = d), (0, a.jsx)(l, { className: f.icon, size: "sm", ...r }));
        }, [n, c, d, t]);
    return (0, a.jsxs)("div", {
        className: s()(f.wrapper, f[t]),
        children: [
            (0, a.jsx)("div", { className: s()(f.baselayer, f[t]) }),
            (0, a.jsxs)("div", {
                className: f.content,
                children: [
                    p,
                    !i()(l) &&
                        (0, a.jsx)(m.E, { variant: "text-md/normal", color: "text-strong", lineClamp: x, children: l }),
                ],
            }),
        ],
    });
}
