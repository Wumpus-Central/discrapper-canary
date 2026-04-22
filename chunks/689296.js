n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(827734),
    a = n(834730),
    r = n(900797),
    o = n(847374),
    d = n(985018),
    u = n(988325);
function c(e) {
    let { children: t, lineClamp: n = 2, ...c } = e,
        [g, m] = s.useState(!1),
        [_, A] = s.useState(null),
        h =
            null != _ &&
            (0, i.jsx)("button", {
                className: u.x6,
                onClick: () => m((e) => !e),
                children: (0, i.jsxs)(a.E, {
                    className: u.B0,
                    variant: "text-sm/medium",
                    color: "text-brand",
                    children: [
                        g ? d.intl.string(d.t["JQX/Pb"]) : d.intl.string(d.t.Fbrd8J),
                        g
                            ? (0, i.jsx)(r.t, { color: l.A.colors.TEXT_BRAND, size: "xs" })
                            : (0, i.jsx)(o.a, { color: l.A.colors.TEXT_BRAND, size: "xs" }),
                    ],
                }),
            }),
        [p, x] = s.useState(null),
        E = s.useCallback(() => {
            if (null == p) return;
            let { scrollHeight: e, clientHeight: t } = p;
            e > t && A({ truncatedHeight: t, expandedHeight: e });
        }, [p]);
    s.useEffect(() => {
        requestAnimationFrame(E);
    }, [E, t, n]);
    let T = "auto";
    return (
        null != _ && (T = g ? `${_.expandedHeight}px` : `${_.truncatedHeight}px`),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(a.E, {
                    ...c,
                    className: u.Qs,
                    lineClamp: g ? void 0 : n,
                    ref: x,
                    style: { height: T },
                    children: t,
                }),
                h,
            ],
        })
    );
}
