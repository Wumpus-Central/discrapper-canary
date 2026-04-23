t.d(a, { E: () => g });
var r = t(457312),
    n = t(701366),
    i = t(352404),
    l = t(7521),
    o = t(807177),
    u = t(401705),
    s = t(400606),
    d = t(150047),
    c = t(803082),
    m = t(8321),
    h = t(885714),
    y = t(47276),
    D = t(849352),
    p = t(64700);
function g(e, a, t) {
    var g;
    let v,
        { date: f, isDisabled: b } = e,
        { errorMessageId: A, selectedDateDescription: R } = r.OX.get(a),
        $ = (0, y.o)((g = n.A) && g.__esModule ? g.default : g, "@react-aria/calendar"),
        w = (0, D.i)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: (0, r.cf)(f),
            timeZone: a.timeZone,
        }),
        P = a.isSelected(f),
        C = a.isCellFocused(f) && !e.isOutsideMonth;
    b = b || a.isCellDisabled(f);
    let k = a.isCellUnavailable(f),
        x = !b && !k,
        E =
            a.isValueInvalid &&
            !!("highlightedRange" in a
                ? !a.anchorDate &&
                  a.highlightedRange &&
                  f.compare(a.highlightedRange.start) >= 0 &&
                  0 >= f.compare(a.highlightedRange.end)
                : a.value && (0, i.ro)(a.value, f));
    E && (P = !0), (f = (0, l.k)(f, i.NV));
    let S = (0, p.useMemo)(() => f.toDate(a.timeZone), [f, a.timeZone]),
        V = (0, i.cK)(f, a.timeZone),
        F = (0, p.useMemo)(() => {
            let e = "";
            return (
                "highlightedRange" in a &&
                    a.value &&
                    !a.anchorDate &&
                    ((0, i.ro)(f, a.value.start) || (0, i.ro)(f, a.value.end)) &&
                    (e = R + ", "),
                (e += w.format(S)),
                V
                    ? (e = $.format(P ? "todayDateSelected" : "todayDate", { date: e }))
                    : P && (e = $.format("dateSelected", { date: e })),
                a.minValue && (0, i.ro)(f, a.minValue)
                    ? (e += ", " + $.format("minimumDate"))
                    : a.maxValue && (0, i.ro)(f, a.maxValue) && (e += ", " + $.format("maximumDate")),
                e
            );
        }, [w, S, $, P, V, f, a, R]),
        B = "";
    "anchorDate" in a &&
        C &&
        !a.isReadOnly &&
        x &&
        (B = a.anchorDate ? $.format("finishRangeSelectionPrompt") : $.format("startRangeSelectionPrompt"));
    let M = (0, o.I)(B),
        I = (0, p.useRef)(!1),
        T = (0, p.useRef)(!1),
        O = (0, p.useRef)(void 0),
        { pressProps: N, isPressed: Z } = (0, m.d)({
            shouldCancelOnPointerExit: "anchorDate" in a && !!a.anchorDate,
            preventFocusOnPress: !0,
            isDisabled: !x || a.isReadOnly,
            onPressStart(e) {
                if (a.isReadOnly) return void a.setFocusedDate(f);
                if (
                    "highlightedRange" in a &&
                    !a.anchorDate &&
                    ("mouse" === e.pointerType || "touch" === e.pointerType)
                ) {
                    if (a.highlightedRange && !E) {
                        if ((0, i.ro)(f, a.highlightedRange.start)) {
                            a.setAnchorDate(a.highlightedRange.end),
                                a.setFocusedDate(f),
                                a.setDragging(!0),
                                (T.current = !0);
                            return;
                        } else if ((0, i.ro)(f, a.highlightedRange.end)) {
                            a.setAnchorDate(a.highlightedRange.start),
                                a.setFocusedDate(f),
                                a.setDragging(!0),
                                (T.current = !0);
                            return;
                        }
                    }
                    let t = () => {
                        a.setDragging(!0), (O.current = void 0), a.selectDate(f), a.setFocusedDate(f), (I.current = !0);
                    };
                    "touch" === e.pointerType ? (O.current = setTimeout(t, 200)) : t();
                }
            },
            onPressEnd() {
                (T.current = !1), (I.current = !1), clearTimeout(O.current), (O.current = void 0);
            },
            onPress() {
                "anchorDate" in a || a.isReadOnly || (a.selectDate(f), a.setFocusedDate(f));
            },
            onPressUp(e) {
                if (
                    !a.isReadOnly &&
                    ("anchorDate" in a && O.current && (a.selectDate(f), a.setFocusedDate(f)), "anchorDate" in a)
                )
                    if (T.current) a.setAnchorDate(f);
                    else if (a.anchorDate && !I.current) a.selectDate(f), a.setFocusedDate(f);
                    else if ("keyboard" !== e.pointerType || a.anchorDate)
                        "virtual" === e.pointerType && (a.selectDate(f), a.setFocusedDate(f));
                    else {
                        a.selectDate(f);
                        let e = f.add({ days: 1 });
                        a.isInvalid(e) && (e = f.subtract({ days: 1 })), a.isInvalid(e) || a.setFocusedDate(e);
                    }
            },
        });
    b || (v = (0, i.ro)(f, a.focusedDate) ? 0 : -1),
        (0, p.useEffect)(() => {
            C &&
                t.current &&
                ((0, u.e)(t.current),
                "pointer" !== (0, h.ME)() &&
                    document.activeElement === t.current &&
                    (0, s.o)(t.current, { containingElement: (0, d.m)(t.current) }));
        }, [C, t]);
    let z = (0, D.i)({ day: "numeric", timeZone: a.timeZone, calendar: f.calendar.identifier }),
        U = (0, p.useMemo)(() => z.formatToParts(S).find((e) => "day" === e.type).value, [z, S]);
    return {
        cellProps: {
            role: "gridcell",
            "aria-disabled": !x || void 0,
            "aria-selected": P || void 0,
            "aria-invalid": E || void 0,
        },
        buttonProps: (0, c.v)(N, {
            onFocus() {
                b || a.setFocusedDate(f);
            },
            tabIndex: v,
            role: "button",
            "aria-disabled": !x || void 0,
            "aria-label": F,
            "aria-invalid": E || void 0,
            "aria-describedby": [E ? A : void 0, M["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            onPointerEnter(e) {
                "highlightDate" in a && ("touch" !== e.pointerType || a.isDragging) && x && a.highlightDate(f);
            },
            onPointerDown(e) {
                "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu(e) {
                e.preventDefault();
            },
        }),
        isPressed: Z,
        isFocused: C,
        isSelected: P,
        isDisabled: b,
        isUnavailable: k,
        isOutsideVisibleRange: 0 > f.compare(a.visibleRange.start) || f.compare(a.visibleRange.end) > 0,
        isInvalid: E,
        formattedDate: U,
    };
}
