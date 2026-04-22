n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(109112),
    o = n(939249),
    d = n(658675),
    c = n(834730),
    u = n(311907),
    m = n(454908),
    g = n(760751),
    h = n(998218),
    x = n(461565);
function _(e) {
    let { applicationId: t, selected: n, onClick: s, disabled: _ } = e,
        { data: p, isLoading: A } = (0, m.I)(t),
        E = l.useMemo(() => {
            let e = p?.getCoverURL();
            if (null == e) return;
            let t = h.A.toURLSafe(e);
            return null == t ? e : (t.searchParams.set("size", "256"), t.toString());
        }, [p]),
        f = (0, u.bG)([g.A], () => g.A.getDetectableGame(t)?.name ?? ""),
        j = l.useCallback(() => {
            s?.(t);
        }, [t, s]),
        N = l.useMemo(
            () =>
                A
                    ? null
                    : null == E
                      ? (0, i.jsx)("div", { className: x.gP, children: (0, i.jsx)(a._, { size: "lg" }) })
                      : (0, i.jsx)("img", { className: x.Su, alt: f, src: E }),
            [E, A, f],
        );
    return (0, i.jsxs)("div", {
        className: r()(x.id, { [x.rX]: !n, [x.r9]: _ }),
        children: [
            (0, i.jsxs)(o.D, {
                "aria-disabled": _,
                tabIndex: _ ? -1 : 0,
                onClick: _ ? void 0 : j,
                className: r()(x.a8, { [x.AL]: A, [x.r9]: _ }),
                children: [n && (0, i.jsx)("div", { className: x.jK, children: (0, i.jsx)(d.P, { checked: n }) }), N],
            }),
            (0, i.jsx)(c.E, { className: x.mO, variant: "text-xs/medium", color: "text-strong", children: f }),
        ],
    });
}
