"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(736653),
    u = n(573648),
    m = n(587895),
    g = n(599119),
    x = n(923121),
    h = n(539916),
    _ = n(985018),
    A = n(931136);
function p(e) {
    let { connection: t, index: l, onDragStart: p, onDragReset: f, onDragComplete: j, draggingId: N } = e,
        E = (0, c.Ay)(),
        {
            drag: b,
            drop: T,
            dragSourcePosition: C,
            setIsDraggable: I,
        } = (0, g.A)({
            type: "ONBOARDING_CONNECTION_CARD",
            index: l,
            optionId: t.id,
            onDragStart: () => p(t.id),
            onDragComplete: (e) => j(e),
            onDragReset: () => f(),
        }),
        v = s.useCallback(() => {
            (0, x.zN)(l);
        }, [l]),
        S = s.useCallback(() => {
            (0, d.mMO)(async () => {
                let { default: e } = await n.e("90194").then(n.bind(n, 566857));
                return (n) => (0, i.jsx)(e, { ...n, connection: t, index: l });
            });
        }, [t, l]),
        y = t.connection_type === h.wZ.APPLICATION,
        R = t.application_id,
        O = (0, a.bG)([m.A], () => (y && null != R ? m.A.getApplication(R) : null), [y, R]),
        G = s.useMemo(
            () =>
                (function (e, t, n) {
                    if (e.connection_type === h.wZ.APPLICATION && null != e.application_id) {
                        if (null != n) return { name: n.name, icon: n.getIconURL(128) ?? null };
                    } else if (null != e.provider_id) {
                        let n = u.A.get(e.provider_id);
                        return null != n
                            ? { name: n.name, icon: "light" === t ? n.icon?.lightPNG : n.icon?.darkPNG }
                            : { name: "Unknown Platform", icon: null };
                    }
                    return { name: _.intl.string(_.t.kFlgsx), icon: null };
                })(t, E, O),
            [t, E, O],
        );
    return (0, i.jsxs)("div", {
        className: r()(A.Nr, { [A.A]: null != C && l < C, [A.Ze]: null != C && l > C }),
        onMouseEnter: () => I(!0),
        onMouseLeave: () => I(!1),
        ref: (e) => {
            b(T(e));
        },
        children: [
            (0, i.jsx)("div", { className: A.BU, children: (0, i.jsx)(d.WP0, { size: "sm", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                className: A.hu,
                children: [
                    (0, i.jsx)("div", {
                        className: A.Kk,
                        children:
                            null != G.icon
                                ? (0, i.jsx)("img", { src: G.icon, alt: "", width: 40, height: 40 })
                                : (0, i.jsx)(d._xR, { size: "custom", width: 40, height: 40, color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: A.P_,
                        children: [
                            (0, i.jsx)(d.Text, { variant: "text-md/medium", color: "text-strong", children: G.name }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children:
                                    null != t.description && t.description.length > 0
                                        ? t.description
                                        : _.intl.string(_.t["4nNtsP"]),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: A.o1,
                children: [
                    (0, i.jsx)(o.m, {
                        text: _.intl.string(_.t.bt75uw),
                        children: (0, i.jsx)(d.DUT, {
                            className: A.r9,
                            onClick: S,
                            "aria-label": _.intl.string(_.t.bt75uw),
                            children: (0, i.jsx)(d.R2l, { size: "xs", color: "currentColor" }),
                        }),
                    }),
                    (0, i.jsx)(o.m, {
                        text: _.intl.string(_.t.N86XcP),
                        children: (0, i.jsx)(d.DUT, {
                            className: A.DT,
                            onClick: v,
                            "aria-label": _.intl.string(_.t.N86XcP),
                            children: (0, i.jsx)(d.ucK, { size: "xs", color: "currentColor" }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
