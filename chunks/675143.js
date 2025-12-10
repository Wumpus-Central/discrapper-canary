n.d(t, { J: () => E });
var r = n(948932),
    i = n(177783),
    a = n(533426),
    o = n(122136),
    s = n(645537),
    l = n(928276),
    c = n(776608),
    u = n(348672),
    d = n(158821),
    f = n(226098),
    p = n(981166),
    _ = n(218769),
    m = n(750996),
    h = n(473749);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let E,
        { date: b, isDisabled: y } = e,
        { errorMessageId: O, selectedDateDescription: v } = r.Lh.get(t),
        S = (0, _.q)(g(i.Z), "@react-aria/calendar"),
        I = (0, m.a)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: (0, r.tN)(b),
            timeZone: t.timeZone,
        }),
        T = t.isSelected(b),
        C = t.isCellFocused(b) && !e.isOutsideMonth;
    y = y || t.isCellDisabled(b);
    let A = t.isCellUnavailable(b),
        N = !y && !A,
        P =
            t.isValueInvalid &&
            !!("highlightedRange" in t
                ? !t.anchorDate &&
                  t.highlightedRange &&
                  b.compare(t.highlightedRange.start) >= 0 &&
                  0 >= b.compare(t.highlightedRange.end)
                : t.value && (0, a.KC)(t.value, b));
    P && (T = !0), (b = (0, o.v)(b, a.N9));
    let R = (0, h.useMemo)(() => b.toDate(t.timeZone), [b, t.timeZone]),
        D = (0, a.zk)(b, t.timeZone),
        w = (0, h.useMemo)(() => {
            let e = "";
            return (
                "highlightedRange" in t &&
                    t.value &&
                    !t.anchorDate &&
                    ((0, a.KC)(b, t.value.start) || (0, a.KC)(b, t.value.end)) &&
                    (e = v + ", "),
                (e += I.format(R)),
                D
                    ? (e = S.format(T ? "todayDateSelected" : "todayDate", { date: e }))
                    : T && (e = S.format("dateSelected", { date: e })),
                t.minValue && (0, a.KC)(b, t.minValue)
                    ? (e += ", " + S.format("minimumDate"))
                    : t.maxValue && (0, a.KC)(b, t.maxValue) && (e += ", " + S.format("maximumDate")),
                e
            );
        }, [I, R, S, T, D, b, t, v]),
        x = "";
    "anchorDate" in t &&
        C &&
        !t.isReadOnly &&
        N &&
        (x = t.anchorDate ? S.format("finishRangeSelectionPrompt") : S.format("startRangeSelectionPrompt"));
    let L = (0, s.P)(x),
        j = (0, h.useRef)(!1),
        M = (0, h.useRef)(!1),
        k = (0, h.useRef)(void 0),
        { pressProps: U, isPressed: G } = (0, f.r)({
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
                    if (t.highlightedRange && !P) {
                        if ((0, a.KC)(b, t.highlightedRange.start)) {
                            t.setAnchorDate(t.highlightedRange.end),
                                t.setFocusedDate(b),
                                t.setDragging(!0),
                                (M.current = !0);
                            return;
                        } else if ((0, a.KC)(b, t.highlightedRange.end)) {
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
                        let e = b.add({ days: 1 });
                        t.isInvalid(e) && (e = b.subtract({ days: 1 })), t.isInvalid(e) || t.setFocusedDate(e);
                    }
            },
        });
    y || (E = (0, a.KC)(b, t.focusedDate) ? 0 : -1),
        (0, h.useEffect)(() => {
            C &&
                n.current &&
                ((0, l.A)(n.current),
                "pointer" !== (0, p.Jz)() &&
                    document.activeElement === n.current &&
                    (0, c.G)(n.current, { containingElement: (0, u.r)(n.current) }));
        }, [C, n]);
    let Z = (0, m.a)({
            day: "numeric",
            timeZone: t.timeZone,
            calendar: b.calendar.identifier,
        }),
        B = (0, h.useMemo)(() => Z.formatToParts(R).find((e) => "day" === e.type).value, [Z, R]);
    return {
        cellProps: {
            role: "gridcell",
            "aria-disabled": !N || void 0,
            "aria-selected": T || void 0,
            "aria-invalid": P || void 0,
        },
        buttonProps: (0, d.d)(U, {
            onFocus() {
                y || t.setFocusedDate(b);
            },
            tabIndex: E,
            role: "button",
            "aria-disabled": !N || void 0,
            "aria-label": w,
            "aria-invalid": P || void 0,
            "aria-describedby": [P ? O : void 0, L["aria-describedby"]].filter(Boolean).join(" ") || void 0,
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
        isFocused: C,
        isSelected: T,
        isDisabled: y,
        isUnavailable: A,
        isOutsideVisibleRange: 0 > b.compare(t.visibleRange.start) || b.compare(t.visibleRange.end) > 0,
        isInvalid: P,
        formattedDate: B,
    };
}
