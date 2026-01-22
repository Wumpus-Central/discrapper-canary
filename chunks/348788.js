n.d(t, {
    E: () => E,
});
var r = n(457312),
    i = n(701366),
    a = n(352404),
    s = n(7521),
    o = n(807177),
    l = n(401705),
    c = n(400606),
    u = n(150047),
    d = n(803082),
    f = n(8321),
    p = n(885714),
    _ = n(47276),
    h = n(849352),
    m = n(64700);

function g(e) {
    return e && e.__esModule ? e.default : e;
}

function E(e, t, n) {
    let E,
        { date: b, isDisabled: y } = e,
        { errorMessageId: O, selectedDateDescription: A } = r.OX.get(t),
        v = (0, _.o)(g(i.A), "@react-aria/calendar"),
        S = (0, h.i)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: (0, r.cf)(b),
            timeZone: t.timeZone,
        }),
        I = t.isSelected(b),
        T = t.isCellFocused(b) && !e.isOutsideMonth;
    y = y || t.isCellDisabled(b);
    let C = t.isCellUnavailable(b),
        N = !y && !C,
        R =
            t.isValueInvalid &&
            !!("highlightedRange" in t
                ? !t.anchorDate &&
                  t.highlightedRange &&
                  b.compare(t.highlightedRange.start) >= 0 &&
                  0 >= b.compare(t.highlightedRange.end)
                : t.value && (0, a.ro)(t.value, b));
    R && (I = !0), (b = (0, s.k)(b, a.NV));
    let w = (0, m.useMemo)(() => b.toDate(t.timeZone), [b, t.timeZone]),
        P = (0, a.cK)(b, t.timeZone),
        D = (0, m.useMemo)(() => {
            let e = "";
            return (
                "highlightedRange" in t &&
                    t.value &&
                    !t.anchorDate &&
                    ((0, a.ro)(b, t.value.start) || (0, a.ro)(b, t.value.end)) &&
                    (e = A + ", "),
                (e += S.format(w)),
                P
                    ? (e = v.format(I ? "todayDateSelected" : "todayDate", {
                          date: e,
                      }))
                    : I &&
                      (e = v.format("dateSelected", {
                          date: e,
                      })),
                t.minValue && (0, a.ro)(b, t.minValue)
                    ? (e += ", " + v.format("minimumDate"))
                    : t.maxValue && (0, a.ro)(b, t.maxValue) && (e += ", " + v.format("maximumDate")),
                e
            );
        }, [S, w, v, I, P, b, t, A]),
        x = "";
    "anchorDate" in t &&
        T &&
        !t.isReadOnly &&
        N &&
        (x = t.anchorDate ? v.format("finishRangeSelectionPrompt") : v.format("startRangeSelectionPrompt"));
    let L = (0, o.I)(x),
        j = (0, m.useRef)(!1),
        M = (0, m.useRef)(!1),
        k = (0, m.useRef)(void 0),
        { pressProps: U, isPressed: G } = (0, f.d)({
            shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
            preventFocusOnPress: !0,
            isDisabled: !N || t.isReadOnly,
            onPressStart(e) {
                if (t.isReadOnly) return void t.setFocusedDate(b);
                if (
                    "highlightedRange" in t &&
                    !t.anchorDate &&
                    ("mouse" === e.pointerType || "touch" === e.pointerType)
                ) {
                    if (t.highlightedRange && !R) {
                        if ((0, a.ro)(b, t.highlightedRange.start)) {
                            t.setAnchorDate(t.highlightedRange.end),
                                t.setFocusedDate(b),
                                t.setDragging(!0),
                                (M.current = !0);
                            return;
                        } else if ((0, a.ro)(b, t.highlightedRange.end)) {
                            t.setAnchorDate(t.highlightedRange.start),
                                t.setFocusedDate(b),
                                t.setDragging(!0),
                                (M.current = !0);
                            return;
                        }
                    }
                    let n = () => {
                        t.setDragging(!0), (k.current = void 0), t.selectDate(b), t.setFocusedDate(b), (j.current = !0);
                    };
                    "touch" === e.pointerType ? (k.current = setTimeout(n, 200)) : n();
                }
            },
            onPressEnd() {
                (M.current = !1), (j.current = !1), clearTimeout(k.current), (k.current = void 0);
            },
            onPress() {
                "anchorDate" in t || t.isReadOnly || (t.selectDate(b), t.setFocusedDate(b));
            },
            onPressUp(e) {
                if (
                    !t.isReadOnly &&
                    ("anchorDate" in t && k.current && (t.selectDate(b), t.setFocusedDate(b)), "anchorDate" in t)
                )
                    if (M.current) t.setAnchorDate(b);
                    else if (t.anchorDate && !j.current) t.selectDate(b), t.setFocusedDate(b);
                    else if ("keyboard" !== e.pointerType || t.anchorDate)
                        "virtual" === e.pointerType && (t.selectDate(b), t.setFocusedDate(b));
                    else {
                        t.selectDate(b);
                        let e = b.add({
                            days: 1,
                        });
                        t.isInvalid(e) &&
                            (e = b.subtract({
                                days: 1,
                            })),
                            t.isInvalid(e) || t.setFocusedDate(e);
                    }
            },
        });
    y || (E = (0, a.ro)(b, t.focusedDate) ? 0 : -1),
        (0, m.useEffect)(() => {
            T &&
                n.current &&
                ((0, l.e)(n.current),
                "pointer" !== (0, p.ME)() &&
                    document.activeElement === n.current &&
                    (0, c.o)(n.current, {
                        containingElement: (0, u.m)(n.current),
                    }));
        }, [T, n]);
    let V = (0, h.i)({
            day: "numeric",
            timeZone: t.timeZone,
            calendar: b.calendar.identifier,
        }),
        F = (0, m.useMemo)(() => V.formatToParts(w).find((e) => "day" === e.type).value, [V, w]);
    return {
        cellProps: {
            role: "gridcell",
            "aria-disabled": !N || void 0,
            "aria-selected": I || void 0,
            "aria-invalid": R || void 0,
        },
        buttonProps: (0, d.v)(U, {
            onFocus() {
                y || t.setFocusedDate(b);
            },
            tabIndex: E,
            role: "button",
            "aria-disabled": !N || void 0,
            "aria-label": D,
            "aria-invalid": R || void 0,
            "aria-describedby": [R ? O : void 0, L["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            onPointerEnter(e) {
                "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && N && t.highlightDate(b);
            },
            onPointerDown(e) {
                "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu(e) {
                e.preventDefault();
            },
        }),
        isPressed: G,
        isFocused: T,
        isSelected: I,
        isDisabled: y,
        isUnavailable: C,
        isOutsideVisibleRange: 0 > b.compare(t.visibleRange.start) || b.compare(t.visibleRange.end) > 0,
        isInvalid: R,
        formattedDate: F,
    };
}
