n.d(t, { x: () => E });
var r = n(455419),
    i = n(478906),
    a = n(603748),
    o = n(873505),
    s = n(385069),
    l = n(752689),
    c = n(645537),
    u = n(983977),
    d = n(158821),
    f = n(154343),
    _ = n(852058),
    p = n(227399),
    h = n(218769),
    m = n(473749);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let { keyboardDelegate: E, isVirtualized: b, layoutDelegate: y, layout: O } = e,
        v = (0, _.X)({
            usage: "search",
            sensitivity: "base",
        }),
        { direction: I } = (0, p.j)(),
        T = t.selectionManager.disabledBehavior,
        S = (0, m.useMemo)(
            () =>
                E ||
                new (0, a.x)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: T,
                    ref: n,
                    direction: I,
                    collator: v,
                    layoutDelegate: y,
                    layout: O,
                }),
            [E, t.collection, t.disabledKeys, T, n, I, v, y, O],
        ),
        A = (0, l.Me)(e.id);
    r._e.set(t, A);
    let { gridProps: C } = (0, s.N)(
        {
            ...e,
            id: A,
            keyboardDelegate: S,
        },
        t,
        n,
    );
    b && (C["aria-rowcount"] = t.collection.size + t.collection.headerRows.length),
        (0, f.OV)() && "expandedKeys" in t && (C.role = "treegrid");
    let { column: N, direction: R } = t.sortDescriptor || {},
        P = (0, h.q)(g(i.Z), "@react-aria/table"),
        D = (0, m.useMemo)(() => {
            var e, n;
            let r =
                null != (n = null == (e = t.collection.columns.find((e) => e.key === N)) ? void 0 : e.textValue)
                    ? n
                    : "";
            return R && N ? P.format(`${R}Sort`, { columnName: r }) : void 0;
        }, [R, N, t.collection.columns]),
        w = (0, c.P)(D);
    return (
        (0, u.r)(() => {
            D && (0, o.xQ)(D, "assertive", 500);
        }, [D]),
        {
            gridProps: (0, d.d)(C, w, {
                "aria-describedby": [w["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" "),
            }),
        }
    );
}
