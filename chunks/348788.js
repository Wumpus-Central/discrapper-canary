"use strict";
n.d(t, { E: () => E });
var r = n(457312),
    i = n(701366),
    a = n(352404),
    s = n(7521),
    o = n(807177),
    l = n(401705),
    u = n(400606),
    c = n(150047),
    d = n(803082),
    _ = n(8321),
    f = n(885714),
    p = n(47276),
    h = n(849352),
    m = n(64700);
function g(e) {
    return e && e.__esModule ? e.default : e;
}
function E(e, t, n) {
    let E,
        { date: A, isDisabled: I } = e,
        { errorMessageId: T, selectedDateDescription: y } = r.OX.get(t),
        S = (0, p.o)(g(i.A), "@react-aria/calendar"),
        v = (0, h.i)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: (0, r.cf)(A),
            timeZone: t.timeZone,
        }),
        C = t.isSelected(A),
        b = t.isCellFocused(A) && !e.isOutsideMonth;
    I = I || t.isCellDisabled(A);
    let N = t.isCellUnavailable(A),
        R = !I && !N,
        O =
            t.isValueInvalid &&
            !!("highlightedRange" in t
                ? !t.anchorDate &&
                  t.highlightedRange &&
                  A.compare(t.highlightedRange.start) >= 0 &&
                  0 >= A.compare(t.highlightedRange.end)
                : t.value && (0, a.ro)(t.value, A));
    O && (C = !0), (A = (0, s.k)(A, a.NV));
    let D = (0, m.useMemo)(() => A.toDate(t.timeZone), [A, t.timeZone]),
        L = (0, a.cK)(A, t.timeZone),
        w = (0, m.useMemo)(() => {
            let e = "";
            return (
                "highlightedRange" in t &&
                    t.value &&
                    !t.anchorDate &&
                    ((0, a.ro)(A, t.value.start) || (0, a.ro)(A, t.value.end)) &&
                    (e = y + ", "),
                (e += v.format(D)),
                L
                    ? (e = S.format(C ? "todayDateSelected" : "todayDate", { date: e }))
                    : C && (e = S.format("dateSelected", { date: e })),
                t.minValue && (0, a.ro)(A, t.minValue)
                    ? (e += ", " + S.format("minimumDate"))
                    : t.maxValue && (0, a.ro)(A, t.maxValue) && (e += ", " + S.format("maximumDate")),
                e
            );
        }, [v, D, S, C, L, A, t, y]),
        x = "";
    "anchorDate" in t &&
        b &&
        !t.isReadOnly &&
        R &&
        (x = t.anchorDate ? S.format("finishRangeSelectionPrompt") : S.format("startRangeSelectionPrompt"));
    let P = (0, o.I)(x),
        M = (0, m.useRef)(!1),
        k = (0, m.useRef)(!1),
        U = (0, m.useRef)(void 0),
        { pressProps: G, isPressed: V } = (0, _.d)({
            shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
            preventFocusOnPress: !0,
            isDisabled: !R || t.isReadOnly,
            onPressStart(e) {
                if (t.isReadOnly) return void t.setFocusedDate(A);
                if (
                    "highlightedRange" in t &&
                    !t.anchorDate &&
                    ("mouse" === e.pointerType || "touch" === e.pointerType)
                ) {
                    if (t.highlightedRange && !O) {
                        if ((0, a.ro)(A, t.highlightedRange.start)) {
                            t.setAnchorDate(t.highlightedRange.end),
                                t.setFocusedDate(A),
                                t.setDragging(!0),
                                (k.current = !0);
                            return;
                        } else if ((0, a.ro)(A, t.highlightedRange.end)) {
                            t.setAnchorDate(t.highlightedRange.start),
                                t.setFocusedDate(A),
                                t.setDragging(!0),
                                (k.current = !0);
                            return;
                        }
                    }
                    let n = () => {
                        t.setDragging(!0), (U.current = void 0), t.selectDate(A), t.setFocusedDate(A), (M.current = !0);
                    };
                    "touch" === e.pointerType ? (U.current = setTimeout(n, 200)) : n();
                }
            },
            onPressEnd() {
                (k.current = !1), (M.current = !1), clearTimeout(U.current), (U.current = void 0);
            },
            onPress() {
                "anchorDate" in t || t.isReadOnly || (t.selectDate(A), t.setFocusedDate(A));
            },
            onPressUp(e) {
                if (
                    !t.isReadOnly &&
                    ("anchorDate" in t && U.current && (t.selectDate(A), t.setFocusedDate(A)), "anchorDate" in t)
                )
                    if (k.current) t.setAnchorDate(A);
                    else if (t.anchorDate && !M.current) t.selectDate(A), t.setFocusedDate(A);
                    else if ("keyboard" !== e.pointerType || t.anchorDate)
                        "virtual" === e.pointerType && (t.selectDate(A), t.setFocusedDate(A));
                    else {
                        t.selectDate(A);
                        let e = A.add({ days: 1 });
                        t.isInvalid(e) && (e = A.subtract({ days: 1 })), t.isInvalid(e) || t.setFocusedDate(e);
                    }
            },
        });
    I || (E = (0, a.ro)(A, t.focusedDate) ? 0 : -1),
        (0, m.useEffect)(() => {
            b &&
                n.current &&
                ((0, l.e)(n.current),
                "pointer" !== (0, f.ME)() &&
                    document.activeElement === n.current &&
                    (0, u.o)(n.current, { containingElement: (0, c.m)(n.current) }));
        }, [b, n]);
    let F = (0, h.i)({ day: "numeric", timeZone: t.timeZone, calendar: A.calendar.identifier }),
        B = (0, m.useMemo)(() => F.formatToParts(D).find((e) => "day" === e.type).value, [F, D]);
    return {
        cellProps: {
            role: "gridcell",
            "aria-disabled": !R || void 0,
            "aria-selected": C || void 0,
            "aria-invalid": O || void 0,
        },
        buttonProps: (0, d.v)(G, {
            onFocus() {
                I || t.setFocusedDate(A);
            },
            tabIndex: E,
            role: "button",
            "aria-disabled": !R || void 0,
            "aria-label": w,
            "aria-invalid": O || void 0,
            "aria-describedby": [O ? T : void 0, P["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            onPointerEnter(e) {
                "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && R && t.highlightDate(A);
            },
            onPointerDown(e) {
                "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId);
            },
            onContextMenu(e) {
                e.preventDefault();
            },
        }),
        isPressed: V,
        isFocused: b,
        isSelected: C,
        isDisabled: I,
        isUnavailable: N,
        isOutsideVisibleRange: 0 > A.compare(t.visibleRange.start) || A.compare(t.visibleRange.end) > 0,
        isInvalid: O,
        formattedDate: B,
    };
}
