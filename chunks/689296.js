n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(827734),
    a = n(397927),
    r = n(985018),
    o = n(346069);
function d(e) {
    let { children: t, lineClamp: n = 2, ...d } = e,
        [c, u] = s.useState(!1),
        [m, _] = s.useState(null),
        g =
            null != m &&
            (0, i.jsx)("button", {
                className: o.x6,
                onClick: () => u((e) => !e),
                children: (0, i.jsxs)(a.Text, {
                    className: o.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        c ? r.intl.string(r.t["JQX/Pb"]) : r.intl.string(r.t.Fbrd8J),
                        c
                            ? (0, i.jsx)(a.tN5, { color: l.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, i.jsx)(a.abt, { color: l.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [x, A] = s.useState(null),
        h = s.useCallback(() => {
            if (null == x) return;
            let { scrollHeight: e, clientHeight: t } = x;
            e > t && _({ truncatedHeight: t, expandedHeight: e });
        }, [x]);
    s.useEffect(() => {
        requestAnimationFrame(h);
    }, [h, t, n]);
    let p = "auto";
    return (
        null != m && (p = c ? `${m.expandedHeight}px` : `${m.truncatedHeight}px`),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(a.Text, {
                    ...d,
                    className: o.Qs,
                    lineClamp: c ? void 0 : n,
                    ref: A,
                    style: { height: p },
                    children: t,
                }),
                g,
            ],
        })
    );
}
