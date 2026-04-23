a.d(t, { A: () => u });
var n = a(627968);
a(64700);
var l = a(270003),
    i = a(243721),
    s = a(669550),
    r = a(963935),
    o = a(921854),
    d = a(522958);
function c(e) {
    let { setting: t, depth: a, inheritedHighlightMode: l } = e,
        i = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case r.Z6.ROOT:
                    return "migrated-root";
                case r.Z6.SECTION:
                case r.Z6.PANEL:
                case r.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, l),
        s = "migrated" === i ? "migrated" : void 0,
        o = null;
    return (
        (0, r.nW)(t) &&
            t.layout.length > 0 &&
            (o = t.layout.map((e) => (0, n.jsx)(c, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, n.jsx)(d.n, { title: t.key, initExpanded: a <= 2, highlightMode: i, children: o })
    );
}
function u() {
    let { node: e } = (0, s.Ay)(o.D, ""),
        t = (0, s.KA)();
    return (0, n.jsxs)(l.n, {
        label: "Settings Tree",
        children: [
            (0, n.jsx)(i.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: s.jL,
            }),
            (0, n.jsx)(c, { setting: e, depth: 1 }, e.key),
        ],
    });
}
