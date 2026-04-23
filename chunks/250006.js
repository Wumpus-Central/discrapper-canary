n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    d = n(192308),
    c = n(772838),
    u = n(687966),
    m = n(834730),
    g = n(939249),
    h = n(22231),
    x = n(241326),
    _ = n(736653),
    p = n(573648),
    A = n(587895),
    E = n(599119),
    f = n(923121),
    j = n(539916),
    N = n(985018),
    I = n(415293);
function C(e) {
    let { connection: t, index: s, onDragStart: C, onDragReset: b, onDragComplete: v, draggingId: S } = e,
        T = (0, _.Ay)(),
        {
            drag: y,
            drop: R,
            dragSourcePosition: L,
            setIsDraggable: D,
        } = (0, E.A)({
            type: "ONBOARDING_CONNECTION_CARD",
            index: s,
            optionId: t.id,
            onDragStart: () => C(t.id),
            onDragComplete: (e) => v(e),
            onDragReset: () => b(),
        }),
        O = l.useCallback(() => {
            (0, f.zN)(s);
        }, [s]),
        G = l.useCallback(() => {
            (0, d.openModalLazy)(async () => {
                let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                return (n) => (0, i.jsx)(e, { ...n, connection: t, index: s });
            });
        }, [t, s]),
        M = t.connection_type === j.wZ.APPLICATION,
        k = t.application_id,
        U = (0, a.bG)([A.A], () => (M && null != k ? A.A.getApplication(k) : null), [M, k]),
        w = l.useMemo(
            () =>
                (function (e, t, n) {
                    if (e.connection_type === j.wZ.APPLICATION && null != e.application_id) {
                        if (null != n) return { name: n.name, icon: n.getIconURL(128) ?? null };
                    } else if (null != e.provider_id) {
                        let n = p.A.get(e.provider_id);
                        return null != n
                            ? { name: n.name, icon: "light" === t ? n.icon?.lightPNG : n.icon?.darkPNG }
                            : { name: "Unknown Platform", icon: null };
                    }
                    return { name: N.intl.string(N.t.kFlgsx), icon: null };
                })(t, T, U),
            [t, T, U],
        );
    return (0, i.jsxs)("div", {
        className: r()(I.Nr, { [I.A]: null != L && s < L, [I.Ze]: null != L && s > L }),
        onMouseEnter: () => D(!0),
        onMouseLeave: () => D(!1),
        ref: (e) => {
            y(R(e));
        },
        children: [
            (0, i.jsx)("div", { className: I.BU, children: (0, i.jsx)(c.W, { size: "sm", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                className: I.hu,
                children: [
                    (0, i.jsx)("div", {
                        className: I.Kk,
                        children:
                            null != w.icon
                                ? (0, i.jsx)("img", { src: w.icon, alt: "", width: 40, height: 40 })
                                : (0, i.jsx)(u._, { size: "custom", width: 40, height: 40, color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: I.P_,
                        children: [
                            (0, i.jsx)(m.E, { variant: "text-md/medium", color: "text-strong", children: w.name }),
                            (0, i.jsx)(m.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    null != t.description && t.description.length > 0
                                        ? t.description
                                        : N.intl.string(N.t["4nNtsP"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: I.o1,
                children: [
                    (0, i.jsx)(o.m, {
                        text: N.intl.string(N.t.bt75uw),
                        children: (0, i.jsx)(g.D, {
                            className: I.r9,
                            onClick: G,
                            "aria-label": N.intl.string(N.t.bt75uw),
                            children: (0, i.jsx)(h.R, { size: "xs", color: "currentColor" }),
                        }),
                    }),
                    (0, i.jsx)(o.m, {
                        text: N.intl.string(N.t.N86XcP),
                        children: (0, i.jsx)(g.D, {
                            className: I.DT,
                            onClick: O,
                            "aria-label": N.intl.string(N.t.N86XcP),
                            children: (0, i.jsx)(x.u, { size: "xs", color: "currentColor" }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
