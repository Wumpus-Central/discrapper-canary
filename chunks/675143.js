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
    _ = n(981166),
    p = n(218769),
    h = n(750996),
    m = n(473749);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let E,
        { date: b, isDisabled: y } = e,
        { errorMessageId: O, selectedDateDescription: v } = r.Lh.get(t),
        I = (0, p.q)(g(i.Z), "@react-aria/calendar"),
        T = (0, h.a)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: (0, r.tN)(b),
            timeZone: t.timeZone,
        }),
        S = t.isSelected(b),
        A = t.isCellFocused(b) && !e.isOutsideMonth;
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
                : t.value && (0, a.KC)(t.value, b));
    R && (S = !0), (b = (0, o.v)(b, a.N9));
    let P = (0, m.useMemo)(() => b.toDate(t.timeZone), [b, t.timeZone]),
        D = (0, a.zk)(b, t.timeZone),
        w = (0, m.useMemo)(() => {
            let e = "";
            return (
                "highlightedRange" in t &&
                    t.value &&
                    !t.anchorDate &&
                    ((0, a.KC)(b, t.value.start) || (0, a.KC)(b, t.value.end)) &&
                    (e = v + ", "),
                (e += T.format(P)),
                D
                    ? (e = I.format(S ? "todayDateSelected" : "todayDate", { date: e }))
                    : S && (e = I.format("dateSelected", { date: e })),
                t.minValue && (0, a.KC)(b, t.minValue)
                    ? (e += ", " + I.format("minimumDate"))
                    : t.maxValue && (0, a.KC)(b, t.maxValue) && (e += ", " + I.format("maximumDate")),
                e
            );
        }, [T, P, I, S, D, b, t, v]),
        x = "";
    "anchorDate" in t &&
        A &&
        !t.isReadOnly &&
        N &&
        (x = t.anchorDate ? I.format("finishRangeSelectionPrompt") : I.format("startRangeSelectionPrompt"));
    let L = (0, s.P)(x),
        M = (0, m.useRef)(!1),
        k = (0, m.useRef)(!1),
        j = (0, m.useRef)(void 0),
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
                    if (t.highlightedRange && !R) {
                        if ((0, a.KC)(b, t.highlightedRange.start)) {
                            t.setAnchorDate(t.highlightedRange.end),
                                t.setFocusedDate(b),
                                t.setDragging(!0),
                                (k.current = !0);
                            return;
                        } else if ((0, a.KC)(b, t.highlightedRange.end)) {
                            t.setAnchorDate(t.highlightedRange.start),
                                t.setFocusedDate(b),
                                t.setDragging(!0),
                                (k.current = !0);
                            return;
                        }
                    }
                    let n = () => {
                        t.setDragging(!0), (j.current = void 0), t.selectDate(b), t.setFocusedDate(b), (M.current = !0);
                    };
                    "touch" === e.pointerType ? (j.current = setTimeout(n, 200)) : n();
                }
            },
            onPressEnd() {
                (k.current = !1), (M.current = !1), clearTimeout(j.current), (j.current = void 0);
            },
            onPress() {
                "anchorDate" in t || t.isReadOnly || (t.selectDate(b), t.setFocusedDate(b));
            },
            onPressUp(e) {
                if (
                    !t.isReadOnly &&
                    ("anchorDate" in t && j.current && (t.selectDate(b), t.setFocusedDate(b)), "anchorDate" in t)
                )
                    if (k.current) t.setAnchorDate(b);
                    else if (t.anchorDate && !M.current) t.selectDate(b), t.setFocusedDate(b);
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
        (0, m.useEffect)(() => {
            A &&
                n.current &&
                ((0, l.A)(n.current),
                "pointer" !== (0, _.Jz)() &&
                    document.activeElement === n.current &&
                    (0, c.G)(n.current, { containingElement: (0, u.r)(n.current) }));
        }, [A, n]);
    let B = (0, h.a)({
            day: "numeric",
            timeZone: t.timeZone,
            calendar: b.calendar.identifier,
        }),
        Z = (0, m.useMemo)(() => B.formatToParts(P).find((e) => "day" === e.type).value, [B, P]);
    return {
        cellProps: {
            role: "gridcell",
            "aria-disabled": !N || void 0,
            "aria-selected": S || void 0,
            "aria-invalid": R || void 0,
        },
        buttonProps: (0, d.d)(U, {
            onFocus() {
                y || t.setFocusedDate(b);
            },
            tabIndex: E,
            role: "button",
            "aria-disabled": !N || void 0,
            "aria-label": w,
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
        isFocused: A,
        isSelected: S,
        isDisabled: y,
        isUnavailable: C,
        isOutsideVisibleRange: 0 > b.compare(t.visibleRange.start) || b.compare(t.visibleRange.end) > 0,
        isInvalid: R,
        formattedDate: Z,
    };
}
