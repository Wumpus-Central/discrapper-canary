n.d(t, { A: () => _ });
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(669550),
    r = n(963935),
    o = n(921854),
    d = n(522958),
    c = n(983078),
    u = n(159452);
function m(e) {
    return (
        !!(
            (e.type === r.Z6.PANEL && null != e.StronglyDiscouragedCustomComponent) ||
            ((0, r.nW)(e) &&
                e.type === r.Z6.SIDEBAR_ITEM &&
                e.layout.some((e) => e?.StronglyDiscouragedCustomComponent != null)) ||
            ((0, r.nW)(e) && 0 === e.layout.length && null != e.parent?.parent?.getLegacySearchKey?.())
        ) || !1
    );
}
function h(e) {
    return !!m(e) || (!!(0, r.nW)(e) && e.layout.some((e) => h(e)));
}
function x(e) {
    let { setting: t, depth: n, highlightMode: i } = e,
        l = s.useContext(g)?.get(t),
        r = null;
    return (
        null != l &&
            l.length > 0 &&
            (r = l
                .sort((e, t) => e.localeCompare(t))
                .map((e) => (0, a.jsx)(x, { setting: e, depth: n + 1, highlightMode: i }, e))),
        (0, a.jsx)(d.n, { title: t, initExpanded: n <= 2, highlightMode: i, children: r })
    );
}
function p(e) {
    let { setting: t, depth: n, inheritedHighlightMode: s } = e,
        i = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case r.Z6.ROOT:
                    return h(e) ? "root" : "migrated-root";
                case r.Z6.SECTION:
                    return h(e) ? "none" : "migrated";
                case r.Z6.PANEL:
                case r.Z6.SIDEBAR_ITEM:
                    return m(e) ? "legacy" : "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, s),
        l = "migrated" === i ? "migrated" : void 0,
        o = null;
    if ((0, r.nW)(t)) {
        let e = t.parent?.parent?.getLegacySearchKey?.();
        0 === t.layout.length && null != e
            ? (o = (0, a.jsx)(x, { setting: e, depth: n + 1, highlightMode: l ?? "legacy" }))
            : t.layout.length > 0 &&
              (o = t.layout.map((e) => (0, a.jsx)(p, { setting: e, depth: n + 1, inheritedHighlightMode: l }, e.key)));
    }
    return (0, a.jsx)(d.n, { title: t.key, initExpanded: n <= 2, highlightMode: i, children: o });
}
let g = s.createContext(null);
function _() {
    let [e, t] = s.useState(!1),
        { legacySettingDirectory: n } = (0, c.B)(),
        { node: r } = (0, l.Ay)(o.D, ""),
        d = (0, l.KA)();
    return (0, a.jsxs)(i.nVY, {
        label: "Settings Tree",
        children: [
            (0, a.jsx)(i.dOG, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: d,
                onChange: l.jL,
            }),
            (0, a.jsx)(i.dOG, { checked: e, onChange: (e) => t(e), label: "Show Legacy Settings Tree" }),
            (0, a.jsx)(g.Provider, {
                value: n,
                children: (0, a.jsxs)("div", {
                    className: u.B2,
                    children: [
                        e && (0, a.jsx)(x, { setting: "root", depth: 1 }, "root"),
                        !e && (0, a.jsx)(p, { setting: r, depth: 1 }, r.key),
                    ],
                }),
            }),
        ],
    });
}
