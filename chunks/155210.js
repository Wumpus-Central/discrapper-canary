n.d(t, { O: () => O });
var r = n(194784),
    i = n(647423),
    a = n(640475),
    o = n(720479),
    s = n(21814),
    l = n(776608),
    c = n(348672),
    u = n(447770),
    d = n(159447),
    f = n(752689),
    p = n(951726),
    _ = n(158821),
    m = n(894153),
    h = n(473749),
    g = n(227399),
    E = n(750996),
    b = n(999245),
    y = n(494569);
function O(e, t, n) {
    let O = (0, h.useRef)(""),
        { locale: S, direction: I } = (0, g.j)(),
        T = (0, i.J)(),
        { ariaLabel: A, ariaLabelledBy: C, ariaDescribedBy: N, focusManager: P } = r.Lh.get(t),
        R = e.isPlaceholder ? "" : e.text,
        D = (0, h.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
        w = (0, E.a)({
            month: "long",
            timeZone: D.timeZone,
        }),
        x = (0, E.a)({
            hour: "numeric",
            hour12: D.hour12,
            timeZone: D.timeZone,
        });
    if ("month" !== e.type || e.isPlaceholder) "hour" !== e.type || e.isPlaceholder || (R = x.format(t.dateValue));
    else {
        let e = w.format(t.dateValue);
        R = e !== R ? `${R} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: L } = (0, y.G)({
            value: e.value,
            textValue: R,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: t.isDisabled,
            isReadOnly: t.isReadOnly || !e.isEditable,
            isRequired: t.isRequired,
            onIncrement: () => {
                (O.current = ""), t.increment(e.type);
            },
            onDecrement: () => {
                (O.current = ""), t.decrement(e.type);
            },
            onIncrementPage: () => {
                (O.current = ""), t.incrementPage(e.type);
            },
            onDecrementPage: () => {
                (O.current = ""), t.decrementPage(e.type);
            },
            onIncrementToMax: () => {
                (O.current = ""), void 0 !== e.maxValue && t.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
                (O.current = ""), void 0 !== e.minValue && t.setSegment(e.type, e.minValue);
            },
        }),
        j = (0, h.useMemo)(() => new (0, m.d)(S, { maximumFractionDigits: 0 }), [S]),
        M = () => {
            if (
                (e.text === e.placeholder && P.focusPrevious(),
                !j.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder)
            )
                "dayPeriod" === e.type && t.clearSegment(e.type);
            else {
                let n = e.text.slice(0, -1),
                    r = j.parse(n);
                0 === (n = 0 === r ? "" : n).length || 0 === r ? t.clearSegment(e.type) : t.setSegment(e.type, r),
                    (O.current = n);
            }
        },
        k = (e) => {
            if (
                ("a" === e.key && ((0, s.V5)() ? e.metaKey : e.ctrlKey) && e.preventDefault(),
                !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
            )
                switch (e.key) {
                    case "Backspace":
                    case "Delete":
                        e.preventDefault(), e.stopPropagation(), M();
                }
        },
        { startsWith: U } = (0, b.L)({ sensitivity: "base" }),
        G = (0, E.a)({
            hour: "numeric",
            hour12: !0,
        }),
        Z = (0, h.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), G.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [G]),
        B = (0, h.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), G.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [G]),
        F = (0, E.a)({
            year: "numeric",
            era: "narrow",
            timeZone: "UTC",
        }),
        V = (0, h.useMemo)(() => {
            if ("era" !== e.type) return [];
            let n = (0, a.Mw)(new (0, o.aw)(1, 1, 1), t.calendar),
                r = t.calendar.getEras().map((e) => {
                    let t = n
                        .set({
                            year: 1,
                            month: 1,
                            day: 1,
                            era: e,
                        })
                        .toDate("UTC");
                    return {
                        era: e,
                        formatted: F.formatToParts(t).find((e) => "era" === e.type).value,
                    };
                }),
                i = v(r.map((e) => e.formatted));
            if (i) for (let e of r) e.formatted = e.formatted.slice(i);
            return r;
        }, [F, t.calendar, e.type]),
        H = (n) => {
            if (t.isDisabled || t.isReadOnly) return;
            let r = O.current + n;
            switch (e.type) {
                case "dayPeriod":
                    if (U(Z, n)) t.setSegment("dayPeriod", 0);
                    else if (U(B, n)) t.setSegment("dayPeriod", 12);
                    else break;
                    P.focusNext();
                    break;
                case "era": {
                    let e = V.find((e) => U(e.formatted, n));
                    e && (t.setSegment("era", e.era), P.focusNext());
                    break;
                }
                case "day":
                case "hour":
                case "minute":
                case "second":
                case "month":
                case "year": {
                    if (!j.isValidPartialNumber(r)) return;
                    let i = j.parse(r),
                        a = i,
                        o = 0 === e.minValue;
                    if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
                        switch (t.dateFormatter.resolvedOptions().hourCycle) {
                            case "h11":
                                i > 11 && (a = j.parse(n));
                                break;
                            case "h12":
                                (o = !1), i > 12 && (a = j.parse(n));
                        }
                        void 0 !== e.value && e.value >= 12 && i > 1 && (i += 12);
                    } else void 0 !== e.maxValue && i > e.maxValue && (a = j.parse(n));
                    if (isNaN(i)) return;
                    let s = 0 !== a || o;
                    s && t.setSegment(e.type, a),
                        void 0 !== e.maxValue && (Number(i + "0") > e.maxValue || r.length >= String(e.maxValue).length)
                            ? ((O.current = ""), s && P.focusNext())
                            : (O.current = r);
                }
            }
        },
        Y = () => {
            (O.current = ""), n.current && (0, l.G)(n.current, { containingElement: (0, c.r)(n.current) });
            let e = window.getSelection();
            null == e || e.collapse(n.current);
        },
        W = (0, h.useRef)("undefined" != typeof document ? document : null);
    (0, u.z)(W, "selectionchange", () => {
        var e;
        let t = window.getSelection();
        (null == t ? void 0 : t.anchorNode) &&
            (null == (e = n.current) ? void 0 : e.contains(null == t ? void 0 : t.anchorNode)) &&
            t.collapse(n.current);
    });
    let K = (0, h.useRef)("");
    (0, u.z)(n, "beforeinput", (r) => {
        if (n.current)
            switch ((r.preventDefault(), r.inputType)) {
                case "deleteContentBackward":
                case "deleteContentForward":
                    j.isValidPartialNumber(e.text) && !t.isReadOnly && M();
                    break;
                case "insertCompositionText":
                    (K.current = n.current.textContent), (n.current.textContent = n.current.textContent);
                    break;
                default:
                    null != r.data && H(r.data);
            }
    }),
        (0, u.z)(n, "input", (e) => {
            let { inputType: t, data: r } = e;
            "insertCompositionText" === t &&
                (n.current && (n.current.textContent = K.current), null != r && (U(Z, r) || U(B, r)) && H(r));
        }),
        (0, d.b)(() => {
            let e = n.current;
            return () => {
                document.activeElement === e && (P.focusPrevious() || P.focusNext());
            };
        }, [n, P]);
    let z =
        (0, s.gn)() || "timeZoneName" === e.type
            ? {
                  role: "textbox",
                  "aria-valuemax": null,
                  "aria-valuemin": null,
                  "aria-valuetext": null,
                  "aria-valuenow": null,
              }
            : {};
    e === (0, h.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) || t.isInvalid || (N = void 0);
    let q = (0, f.Me)(),
        Q = !t.isDisabled && !t.isReadOnly && e.isEditable,
        X = "literal" === e.type ? "" : T.of(e.type),
        J = (0, p.b)({
            "aria-label": `${X}${A ? `, ${A}` : ""}${C ? ", " : ""}`,
            "aria-labelledby": C,
        });
    if ("literal" === e.type) return { segmentProps: { "aria-hidden": !0 } };
    let $ = { caretColor: "transparent" };
    if ("rtl" === I) {
        $.unicodeBidi = "embed";
        let t = D[e.type];
        ("numeric" === t || "2-digit" === t) && ($.direction = "ltr");
    }
    return {
        segmentProps: (0, _.d)(L, J, {
            id: q,
            ...z,
            "aria-invalid": t.isInvalid ? "true" : void 0,
            "aria-describedby": N,
            "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
            "data-placeholder": e.isPlaceholder || void 0,
            contentEditable: Q,
            suppressContentEditableWarning: Q,
            spellCheck: Q ? "false" : void 0,
            autoCorrect: Q ? "off" : void 0,
            [parseInt(h.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: Q ? "next" : void 0,
            inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !Q ? void 0 : "numeric",
            tabIndex: t.isDisabled ? void 0 : 0,
            onKeyDown: k,
            onFocus: Y,
            style: $,
            onPointerDown(e) {
                e.stopPropagation();
            },
            onMouseDown(e) {
                e.stopPropagation();
            },
        }),
    };
}
function v(e) {
    e.sort();
    let t = e[0],
        n = e[e.length - 1];
    for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
    return 0;
}
