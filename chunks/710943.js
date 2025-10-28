t.d(a, { J: () => p });
var u = t(49603),
    n = t(580560),
    r = t(533426),
    i = t(872),
    o = t(682308),
    l = t(328106),
    s = t(565963),
    d = t(470649),
    c = t(43341),
    m = t(647199),
    D = t(521707),
    h = t(970185),
    f = t(298806),
    y = t(647438);
function p(e, a, t) {
    var p;
    let g,
        { date: v, isDisabled: b } = e,
        { errorMessageId: C, selectedDateDescription: x } = u.Lh.get(a),
        B = (0, h.q)((p = n.Z) && p.__esModule ? p.default : p, "@react-aria/calendar"),
        E = (0, f.a)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: (0, u.tN)(v),
            timeZone: a.timeZone,
        }),
        F = a.isSelected(v),
        w = a.isCellFocused(v) && !e.isOutsideMonth;
    b = b || a.isCellDisabled(v);
    let $ = a.isCellUnavailable(v),
        R = !b && !$,
        Z =
            a.isValueInvalid &&
            !!("highlightedRange" in a
                ? !a.anchorDate &&
                  a.highlightedRange &&
                  v.compare(a.highlightedRange.start) >= 0 &&
                  0 >= v.compare(a.highlightedRange.end)
                : a.value && (0, r.KC)(a.value, v));
    Z && (F = !0), (v = (0, i.v)(v, r.N9));
    let k = (0, y.useMemo)(() => v.toDate(a.timeZone), [v, a.timeZone]),
        A = (0, r.zk)(v, a.timeZone),
        P = (0, y.useMemo)(() => {
            let e = "";
            return (
                "highlightedRange" in a &&
                    a.value &&
                    !a.anchorDate &&
                    ((0, r.KC)(v, a.value.start) || (0, r.KC)(v, a.value.end)) &&
                    (e = x + ", "),
                (e += E.format(k)),
                A
                    ? (e = B.format(F ? "todayDateSelected" : "todayDate", { date: e }))
                    : F && (e = B.format("dateSelected", { date: e })),
                a.minValue && (0, r.KC)(v, a.minValue)
                    ? (e += ", " + B.format("minimumDate"))
                    : a.maxValue && (0, r.KC)(v, a.maxValue) && (e += ", " + B.format("maximumDate")),
                e
            );
        }, [E, k, B, F, A, v, a, x]),
        S = "";
    "anchorDate" in a &&
        w &&
        !a.isReadOnly &&
        R &&
        (S = a.anchorDate ? B.format("finishRangeSelectionPrompt") : B.format("startRangeSelectionPrompt"));
    let M = (0, o.P)(S),
        V = (0, y.useRef)(!1),
        I = (0, y.useRef)(!1),
        z = (0, y.useRef)(void 0),
        { pressProps: O, isPressed: j } = (0, m.r)({
            shouldCancelOnPointerExit: "anchorDate" in a && !!a.anchorDate,
            preventFocusOnPress: !0,
            isDisabled: !R || a.isReadOnly,
            onPressStart(e) {
                if (a.isReadOnly) return void a.setFocusedDate(v);
                if (
                    "highlightedRange" in a &&
                    !a.anchorDate &&
                    ("mouse" === e.pointerType || "touch" === e.pointerType)
                ) {
                    if (a.highlightedRange && !Z) {
                        if ((0, r.KC)(v, a.highlightedRange.start)) {
                            a.setAnchorDate(a.highlightedRange.end),
                                a.setFocusedDate(v),
                                a.setDragging(!0),
                                (I.current = !0);
                            return;
                        } else if ((0, r.KC)(v, a.highlightedRange.end)) {
                            a.setAnchorDate(a.highlightedRange.start),
                                a.setFocusedDate(v),
                                a.setDragging(!0),
                                (I.current = !0);
                            return;
                        }
                    }
                    let t = () => {
                        a.setDragging(!0), (z.current = void 0), a.selectDate(v), a.setFocusedDate(v), (V.current = !0);
                    };
                    "touch" === e.pointerType ? (z.current = setTimeout(t, 200)) : t();
                }
            },
            onPressEnd() {
                (I.current = !1), (V.current = !1), clearTimeout(z.current), (z.current = void 0);
            },
            onPress() {
                "anchorDate" in a || a.isReadOnly || (a.selectDate(v), a.setFocusedDate(v));
            },
            onPressUp(e) {
                if (
                    !a.isReadOnly &&
                    ("anchorDate" in a && z.current && (a.selectDate(v), a.setFocusedDate(v)), "anchorDate" in a)
                )
                    if (I.current) a.setAnchorDate(v);
                    else if (a.anchorDate && !V.current) a.selectDate(v), a.setFocusedDate(v);
                    else if ("keyboard" !== e.pointerType || a.anchorDate)
                        "virtual" === e.pointerType && (a.selectDate(v), a.setFocusedDate(v));
                    else {
                        a.selectDate(v);
                        let e = v.add({ days: 1 });
                        a.isInvalid(e) && (e = v.subtract({ days: 1 })), a.isInvalid(e) || a.setFocusedDate(e);
                    }
            },
        });
    b || (g = (0, r.KC)(v, a.focusedDate) ? 0 : -1),
        (0, y.useEffect)(() => {
            w &&
                t.current &&
                ((0, l.A)(t.current),
                "pointer" !== (0, D.Jz)() &&
                    document.activeElement === t.current &&
                    (0, s.G)(t.current, { containingElement: (0, d.r)(t.current) }));
        }, [w, t]);
    let T = (0, f.a)({
            day: "numeric",
            timeZone: a.timeZone,
            calendar: v.calendar.identifier,
        }),
        N = (0, y.useMemo)(() => T.formatToParts(k).find((e) => "day" === e.type).value, [T, k]);
    return {
        cellProps: {
            role: "gridcell",
            "aria-disabled": !R || void 0,
            "aria-selected": F || void 0,
            "aria-invalid": Z || void 0,
        },
        buttonProps: (0, c.d)(O, {
            onFocus() {
                b || a.setFocusedDate(v);
            },
            tabIndex: g,
            role: "button",
            "aria-disabled": !R || void 0,
            "aria-label": P,
            "aria-invalid": Z || void 0,
            "aria-describedby": [Z ? C : void 0, M["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            onPointerEnter(e) {
                "highlightDate" in a && ("touch" !== e.pointerType || a.isDragging) && R && a.highlightDate(v);
            },
            onPointerDown(e) {
                "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu(e) {
                e.preventDefault();
            },
        }),
        isPressed: j,
        isFocused: w,
        isSelected: F,
        isDisabled: b,
        isUnavailable: $,
        isOutsideVisibleRange: 0 > v.compare(a.visibleRange.start) || v.compare(a.visibleRange.end) > 0,
        isInvalid: Z,
        formattedDate: N,
    };
}
