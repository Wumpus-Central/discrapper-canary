t.d(a, { E: () => d });
var r = t(955048),
    n = t(857175),
    i = t(376472),
    l = t(352404),
    o = t(142922),
    u = t(492313),
    s = t(64700);
function d(e) {
    let {
            value: a,
            defaultValue: t,
            onChange: o,
            createCalendar: d,
            locale: y,
            visibleDuration: D = { months: 1 },
            minValue: p,
            maxValue: g,
            ...v
        } = e,
        [f, b] = (0, u.P)(a, t || null, o),
        [A, R] = (0, s.useState)(null),
        $ = "center";
    if (f && f.start && f.end) {
        let e = (0, r.Hu)((0, i.gw)(f.start), D, y, p, g)
            .add(D)
            .subtract({ days: 1 });
        f.end.compare(e) > 0 && ($ = "start");
    }
    let w = (0, s.useRef)(null),
        [P, C] = (0, s.useState)(null),
        k = (0, s.useMemo)(() => (0, l.ZI)(p, null == P ? void 0 : P.start), [p, P]),
        x = (0, s.useMemo)(() => (0, l.Py)(g, null == P ? void 0 : P.end), [g, P]),
        E = (0, n.T)({
            ...v,
            value: f && f.start,
            createCalendar: d,
            locale: y,
            visibleDuration: D,
            minValue: k,
            maxValue: x,
            selectionAlignment: e.selectionAlignment || $,
        }),
        S = (a) => {
            a && e.isDateUnavailable && !e.allowsNonContiguousRanges
                ? ((w.current = { start: h(a, E, -1), end: h(a, E, 1) }), C(w.current))
                : ((w.current = null), C(null));
        },
        [V, F] = (0, s.useState)(E.visibleRange);
    ((0, l.NV)(E.visibleRange.start, V.start) && (0, l.NV)(E.visibleRange.end, V.end)) || (S(A), F(E.visibleRange));
    let B = (e) => {
            e ? (R(e), S(e)) : (R(null), S(null));
        },
        M = A ? c(A, E.focusedDate) : f && c(f.start, f.end),
        I = (a) => {
            if (e.isReadOnly) return;
            let t = (0, r.X8)(a, k, x),
                n = (0, r.Nf)(t, E.visibleRange.start, e.isDateUnavailable);
            if (n)
                if (A) {
                    let e = c(A, n);
                    e &&
                        b({
                            start: m(e.start, null == f ? void 0 : f.start),
                            end: m(e.end, null == f ? void 0 : f.end),
                        }),
                        B(null);
                } else B(n);
        },
        [T, O] = (0, s.useState)(!1),
        { isDateUnavailable: N } = e,
        Z = (0, s.useMemo)(
            () =>
                !!f && !A && (!!(N && (N(f.start) || N(f.end))) || (0, r.If)(f.start, p, g) || (0, r.If)(f.end, p, g)),
            [N, f, A, p, g],
        ),
        z = e.isInvalid || "invalid" === e.validationState || Z;
    return {
        ...E,
        value: f,
        setValue: b,
        anchorDate: A,
        setAnchorDate: B,
        highlightedRange: M,
        validationState: z ? "invalid" : null,
        isValueInvalid: z,
        selectFocusedDate() {
            I(E.focusedDate);
        },
        selectDate: I,
        highlightDate(e) {
            A && E.setFocusedDate(e);
        },
        isSelected: (e) =>
            !!(
                M &&
                e.compare(M.start) >= 0 &&
                0 >= e.compare(M.end) &&
                !E.isCellDisabled(e) &&
                !E.isCellUnavailable(e)
            ),
        isInvalid(e) {
            var a, t;
            return (
                E.isInvalid(e) ||
                (0, r.If)(e, null == (a = w.current) ? void 0 : a.start, null == (t = w.current) ? void 0 : t.end)
            );
        },
        isDragging: T,
        setDragging: O,
    };
}
function c(e, a) {
    return e && a ? (0 > a.compare(e) && ([e, a] = [a, e]), { start: (0, i.gw)(e), end: (0, i.gw)(a) }) : null;
}
function m(e, a) {
    return ((e = (0, i.yP)(e, (null == a ? void 0 : a.calendar) || new (0, o.FG)())), a && "hour" in a) ? a.set(e) : e;
}
function h(e, a, t) {
    let r = e.add({ days: t });
    for (
        ;
        (t < 0 ? r.compare(a.visibleRange.start) >= 0 : 0 >= r.compare(a.visibleRange.end)) && !a.isCellUnavailable(r);
    )
        r = r.add({ days: t });
    if (a.isCellUnavailable(r)) return r.add({ days: -t });
}
