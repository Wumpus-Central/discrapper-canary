t.d(a, { E: () => g });
var r = t(457312),
    n = t(701366),
    i = t(352404),
    o = t(7521),
    u = t(807177),
    l = t(401705),
    s = t(400606),
    d = t(150047),
    c = t(803082),
    m = t(8321),
    h = t(885714),
    D = t(47276),
    y = t(849352),
    p = t(64700);
function g(e, a, t) {
    var g;
    let f,
        { date: v, isDisabled: b } = e,
        { errorMessageId: A, selectedDateDescription: $ } = r.OX.get(a),
        w = (0, D.o)((g = n.A) && g.__esModule ? g.default : g, "@react-aria/calendar"),
        R = (0, y.i)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: (0, r.cf)(v),
            timeZone: a.timeZone,
        }),
        P = a.isSelected(v),
        k = a.isCellFocused(v) && !e.isOutsideMonth;
    b = b || a.isCellDisabled(v);
    let x = a.isCellUnavailable(v),
        C = !b && !x,
        E =
            a.isValueInvalid &&
            !!("highlightedRange" in a
                ? !a.anchorDate &&
                  a.highlightedRange &&
                  v.compare(a.highlightedRange.start) >= 0 &&
                  0 >= v.compare(a.highlightedRange.end)
                : a.value && (0, i.ro)(a.value, v));
    E && (P = !0), (v = (0, o.k)(v, i.NV));
    let S = (0, p.useMemo)(() => v.toDate(a.timeZone), [v, a.timeZone]),
        F = (0, i.cK)(v, a.timeZone),
        B = (0, p.useMemo)(() => {
            let e = "";
            return (
                "highlightedRange" in a &&
                    a.value &&
                    !a.anchorDate &&
                    ((0, i.ro)(v, a.value.start) || (0, i.ro)(v, a.value.end)) &&
                    (e = $ + ", "),
                (e += R.format(S)),
                F
                    ? (e = w.format(P ? "todayDateSelected" : "todayDate", { date: e }))
                    : P && (e = w.format("dateSelected", { date: e })),
                a.minValue && (0, i.ro)(v, a.minValue)
                    ? (e += ", " + w.format("minimumDate"))
                    : a.maxValue && (0, i.ro)(v, a.maxValue) && (e += ", " + w.format("maximumDate")),
                e
            );
        }, [R, S, w, P, F, v, a, $]),
        V = "";
    "anchorDate" in a &&
        k &&
        !a.isReadOnly &&
        C &&
        (V = a.anchorDate ? w.format("finishRangeSelectionPrompt") : w.format("startRangeSelectionPrompt"));
    let M = (0, u.I)(V),
        I = (0, p.useRef)(!1),
        T = (0, p.useRef)(!1),
        O = (0, p.useRef)(void 0),
        { pressProps: N, isPressed: z } = (0, m.d)({
            shouldCancelOnPointerExit: "anchorDate" in a && !!a.anchorDate,
            preventFocusOnPress: !0,
            isDisabled: !C || a.isReadOnly,
            onPressStart(e) {
                if (a.isReadOnly) return void a.setFocusedDate(v);
                if (
                    "highlightedRange" in a &&
                    !a.anchorDate &&
                    ("mouse" === e.pointerType || "touch" === e.pointerType)
                ) {
                    if (a.highlightedRange && !E) {
                        if ((0, i.ro)(v, a.highlightedRange.start)) {
                            a.setAnchorDate(a.highlightedRange.end),
                                a.setFocusedDate(v),
                                a.setDragging(!0),
                                (T.current = !0);
                            return;
                        } else if ((0, i.ro)(v, a.highlightedRange.end)) {
                            a.setAnchorDate(a.highlightedRange.start),
                                a.setFocusedDate(v),
                                a.setDragging(!0),
                                (T.current = !0);
                            return;
                        }
                    }
                    let t = () => {
                        a.setDragging(!0), (O.current = void 0), a.selectDate(v), a.setFocusedDate(v), (I.current = !0);
                    };
                    "touch" === e.pointerType ? (O.current = setTimeout(t, 200)) : t();
                }
            },
            onPressEnd() {
                (T.current = !1), (I.current = !1), clearTimeout(O.current), (O.current = void 0);
            },
            onPress() {
                "anchorDate" in a || a.isReadOnly || (a.selectDate(v), a.setFocusedDate(v));
            },
            onPressUp(e) {
                if (
                    !a.isReadOnly &&
                    ("anchorDate" in a && O.current && (a.selectDate(v), a.setFocusedDate(v)), "anchorDate" in a)
                )
                    if (T.current) a.setAnchorDate(v);
                    else if (a.anchorDate && !I.current) a.selectDate(v), a.setFocusedDate(v);
                    else if ("keyboard" !== e.pointerType || a.anchorDate)
                        "virtual" === e.pointerType && (a.selectDate(v), a.setFocusedDate(v));
                    else {
                        a.selectDate(v);
                        let e = v.add({ days: 1 });
                        a.isInvalid(e) && (e = v.subtract({ days: 1 })), a.isInvalid(e) || a.setFocusedDate(e);
                    }
            },
        });
    b || (f = (0, i.ro)(v, a.focusedDate) ? 0 : -1),
        (0, p.useEffect)(() => {
            k &&
                t.current &&
                ((0, l.e)(t.current),
                "pointer" !== (0, h.ME)() &&
                    document.activeElement === t.current &&
                    (0, s.o)(t.current, { containingElement: (0, d.m)(t.current) }));
        }, [k, t]);
    let j = (0, y.i)({ day: "numeric", timeZone: a.timeZone, calendar: v.calendar.identifier }),
        Z = (0, p.useMemo)(() => j.formatToParts(S).find((e) => "day" === e.type).value, [j, S]);
    return {
        cellProps: {
            role: "gridcell",
            "aria-disabled": !C || void 0,
            "aria-selected": P || void 0,
            "aria-invalid": E || void 0,
        },
        buttonProps: (0, c.v)(N, {
            onFocus() {
                b || a.setFocusedDate(v);
            },
            tabIndex: f,
            role: "button",
            "aria-disabled": !C || void 0,
            "aria-label": B,
            "aria-invalid": E || void 0,
            "aria-describedby": [E ? A : void 0, M["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            onPointerEnter(e) {
                "highlightDate" in a && ("touch" !== e.pointerType || a.isDragging) && C && a.highlightDate(v);
            },
            onPointerDown(e) {
                "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu(e) {
                e.preventDefault();
            },
        }),
        isPressed: z,
        isFocused: k,
        isSelected: P,
        isDisabled: b,
        isUnavailable: x,
        isOutsideVisibleRange: 0 > v.compare(a.visibleRange.start) || v.compare(a.visibleRange.end) > 0,
        isInvalid: E,
        formattedDate: Z,
    };
}
