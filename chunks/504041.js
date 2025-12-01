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
    p = n(852058),
    _ = n(227399),
    m = n(218769),
    h = n(473749);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let { keyboardDelegate: E, isVirtualized: b, layoutDelegate: y, layout: O } = e,
        v = (0, p.X)({
            usage: "search",
            sensitivity: "base",
        }),
        { direction: S } = (0, _.j)(),
        I = t.selectionManager.disabledBehavior,
        T = (0, h.useMemo)(
            () =>
                E ||
                new (0, a.x)({
                    collection: t.collection,
                    disabledKeys: t.disabledKeys,
                    disabledBehavior: I,
                    ref: n,
                    direction: S,
                    collator: v,
                    layoutDelegate: y,
                    layout: O,
                }),
            [E, t.collection, t.disabledKeys, I, n, S, v, y, O],
        ),
        A = (0, l.Me)(e.id);
    r._e.set(t, A);
    let { gridProps: C } = (0, s.N)(
        {
            ...e,
            id: A,
            keyboardDelegate: T,
        },
        t,
        n,
    );
    b && (C["aria-rowcount"] = t.collection.size + t.collection.headerRows.length),
        (0, f.OV)() && "expandedKeys" in t && (C.role = "treegrid");
    let { column: N, direction: P } = t.sortDescriptor || {},
        R = (0, m.q)(g(i.Z), "@react-aria/table"),
        w = (0, h.useMemo)(() => {
            var e, n;
            let r =
                null != (n = null == (e = t.collection.columns.find((e) => e.key === N)) ? void 0 : e.textValue)
                    ? n
                    : "";
            return P && N ? R.format(`${P}Sort`, { columnName: r }) : void 0;
        }, [P, N, t.collection.columns]),
        D = (0, c.P)(w);
    return (
        (0, u.r)(() => {
            w && (0, o.xQ)(w, "assertive", 500);
        }, [w]),
        {
            gridProps: (0, d.d)(C, D, {
                "aria-describedby": [D["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" "),
            }),
        }
    );
}
