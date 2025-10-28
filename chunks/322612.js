t.d(a, { O: () => C });
var u = t(933926),
    n = t(998163),
    r = t(640475),
    i = t(720479),
    o = t(927917),
    l = t(565963),
    s = t(470649),
    d = t(944625),
    c = t(782013),
    m = t(677061),
    D = t(864019),
    h = t(43341),
    f = t(894153),
    y = t(647438),
    p = t(594886),
    g = t(298806),
    v = t(599925),
    b = t(500376);
function C(e, a, t) {
    let C = (0, y.useRef)(""),
        { locale: x, direction: B } = (0, p.j)(),
        E = (0, n.J)(),
        { ariaLabel: F, ariaLabelledBy: w, ariaDescribedBy: $, focusManager: R } = u.Lh.get(a),
        Z = e.isPlaceholder ? "" : e.text,
        k = (0, y.useMemo)(() => a.dateFormatter.resolvedOptions(), [a.dateFormatter]),
        A = (0, g.a)({
            month: "long",
            timeZone: k.timeZone,
        }),
        P = (0, g.a)({
            hour: "numeric",
            hour12: k.hour12,
            timeZone: k.timeZone,
        });
    if ("month" !== e.type || e.isPlaceholder) "hour" !== e.type || e.isPlaceholder || (Z = P.format(a.dateValue));
    else {
        let e = A.format(a.dateValue);
        Z = e !== Z ? `${Z} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: S } = (0, b.G)({
            value: e.value,
            textValue: Z,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: a.isDisabled,
            isReadOnly: a.isReadOnly || !e.isEditable,
            isRequired: a.isRequired,
            onIncrement: () => {
                (C.current = ""), a.increment(e.type);
            },
            onDecrement: () => {
                (C.current = ""), a.decrement(e.type);
            },
            onIncrementPage: () => {
                (C.current = ""), a.incrementPage(e.type);
            },
            onDecrementPage: () => {
                (C.current = ""), a.decrementPage(e.type);
            },
            onIncrementToMax: () => {
                (C.current = ""), void 0 !== e.maxValue && a.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
                (C.current = ""), void 0 !== e.minValue && a.setSegment(e.type, e.minValue);
            },
        }),
        M = (0, y.useMemo)(() => new (0, f.d)(x, { maximumFractionDigits: 0 }), [x]),
        V = () => {
            if (
                (e.text === e.placeholder && R.focusPrevious(),
                !M.isValidPartialNumber(e.text) || a.isReadOnly || e.isPlaceholder)
            )
                "dayPeriod" === e.type && a.clearSegment(e.type);
            else {
                let t = e.text.slice(0, -1),
                    u = M.parse(t);
                0 === (t = 0 === u ? "" : t).length || 0 === u ? a.clearSegment(e.type) : a.setSegment(e.type, u),
                    (C.current = t);
            }
        },
        { startsWith: I } = (0, v.L)({ sensitivity: "base" }),
        z = (0, g.a)({
            hour: "numeric",
            hour12: !0,
        }),
        O = (0, y.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), z.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [z]),
        j = (0, y.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), z.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [z]),
        T = (0, g.a)({
            year: "numeric",
            era: "narrow",
            timeZone: "UTC",
        }),
        N = (0, y.useMemo)(() => {
            if ("era" !== e.type) return [];
            let t = (0, r.Mw)(new (0, i.aw)(1, 1, 1), a.calendar),
                u = a.calendar.getEras().map((e) => {
                    let a = t
                        .set({
                            year: 1,
                            month: 1,
                            day: 1,
                            era: e,
                        })
                        .toDate("UTC");
                    return {
                        era: e,
                        formatted: T.formatToParts(a).find((e) => "era" === e.type).value,
                    };
                }),
                n = (function (e) {
                    e.sort();
                    let a = e[0],
                        t = e[e.length - 1];
                    for (let e = 0; e < a.length; e++) if (a[e] !== t[e]) return e;
                    return 0;
                })(u.map((e) => e.formatted));
            if (n) for (let e of u) e.formatted = e.formatted.slice(n);
            return u;
        }, [T, a.calendar, e.type]),
        U = (t) => {
            if (a.isDisabled || a.isReadOnly) return;
            let u = C.current + t;
            switch (e.type) {
                case "dayPeriod":
                    if (I(O, t)) a.setSegment("dayPeriod", 0);
                    else if (I(j, t)) a.setSegment("dayPeriod", 12);
                    else break;
                    R.focusNext();
                    break;
                case "era": {
                    let e = N.find((e) => I(e.formatted, t));
                    e && (a.setSegment("era", e.era), R.focusNext());
                    break;
                }
                case "day":
                case "hour":
                case "minute":
                case "second":
                case "month":
                case "year": {
                    if (!M.isValidPartialNumber(u)) return;
                    let n = M.parse(u),
                        r = n,
                        i = 0 === e.minValue;
                    if ("hour" === e.type && a.dateFormatter.resolvedOptions().hour12) {
                        switch (a.dateFormatter.resolvedOptions().hourCycle) {
                            case "h11":
                                n > 11 && (r = M.parse(t));
                                break;
                            case "h12":
                                (i = !1), n > 12 && (r = M.parse(t));
                        }
                        void 0 !== e.value && e.value >= 12 && n > 1 && (n += 12);
                    } else void 0 !== e.maxValue && n > e.maxValue && (r = M.parse(t));
                    if (isNaN(n)) return;
                    let o = 0 !== r || i;
                    o && a.setSegment(e.type, r),
                        void 0 !== e.maxValue && (Number(n + "0") > e.maxValue || u.length >= String(e.maxValue).length)
                            ? ((C.current = ""), o && R.focusNext())
                            : (C.current = u);
                }
            }
        },
        K = (0, y.useRef)("undefined" != typeof document ? document : null);
    (0, d.z)(K, "selectionchange", () => {
        var e;
        let a = window.getSelection();
        (null == a ? void 0 : a.anchorNode) &&
            (null == (e = t.current) ? void 0 : e.contains(null == a ? void 0 : a.anchorNode)) &&
            a.collapse(t.current);
    });
    let L = (0, y.useRef)("");
    (0, d.z)(t, "beforeinput", (u) => {
        if (t.current)
            switch ((u.preventDefault(), u.inputType)) {
                case "deleteContentBackward":
                case "deleteContentForward":
                    M.isValidPartialNumber(e.text) && !a.isReadOnly && V();
                    break;
                case "insertCompositionText":
                    (L.current = t.current.textContent), (t.current.textContent = t.current.textContent);
                    break;
                default:
                    null != u.data && U(u.data);
            }
    }),
        (0, d.z)(t, "input", (e) => {
            let { inputType: a, data: u } = e;
            "insertCompositionText" === a &&
                (t.current && (t.current.textContent = L.current), null != u && (I(O, u) || I(j, u)) && U(u));
        }),
        (0, c.b)(() => {
            let e = t.current;
            return () => {
                document.activeElement === e && (R.focusPrevious() || R.focusNext());
            };
        }, [t, R]);
    let J =
        (0, o.gn)() || "timeZoneName" === e.type
            ? {
                  role: "textbox",
                  "aria-valuemax": null,
                  "aria-valuemin": null,
                  "aria-valuetext": null,
                  "aria-valuenow": null,
              }
            : {};
    e === (0, y.useMemo)(() => a.segments.find((e) => e.isEditable), [a.segments]) || a.isInvalid || ($ = void 0);
    let W = (0, m.Me)(),
        H = !a.isDisabled && !a.isReadOnly && e.isEditable,
        G = "literal" === e.type ? "" : E.of(e.type),
        Q = (0, D.b)({
            "aria-label": `${G}${F ? `, ${F}` : ""}${w ? ", " : ""}`,
            "aria-labelledby": w,
        });
    if ("literal" === e.type) return { segmentProps: { "aria-hidden": !0 } };
    let Y = { caretColor: "transparent" };
    if ("rtl" === B) {
        Y.unicodeBidi = "embed";
        let a = k[e.type];
        ("numeric" === a || "2-digit" === a) && (Y.direction = "ltr");
    }
    return {
        segmentProps: (0, h.d)(S, Q, {
            id: W,
            ...J,
            "aria-invalid": a.isInvalid ? "true" : void 0,
            "aria-describedby": $,
            "aria-readonly": a.isReadOnly || !e.isEditable ? "true" : void 0,
            "data-placeholder": e.isPlaceholder || void 0,
            contentEditable: H,
            suppressContentEditableWarning: H,
            spellCheck: H ? "false" : void 0,
            autoCorrect: H ? "off" : void 0,
            [parseInt(y.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: H ? "next" : void 0,
            inputMode: a.isDisabled || "dayPeriod" === e.type || "era" === e.type || !H ? void 0 : "numeric",
            tabIndex: a.isDisabled ? void 0 : 0,
            onKeyDown: (e) => {
                if (
                    ("a" === e.key && ((0, o.V5)() ? e.metaKey : e.ctrlKey) && e.preventDefault(),
                    !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
                )
                    switch (e.key) {
                        case "Backspace":
                        case "Delete":
                            e.preventDefault(), e.stopPropagation(), V();
                    }
            },
            onFocus: () => {
                (C.current = ""), t.current && (0, l.G)(t.current, { containingElement: (0, s.r)(t.current) });
                let e = window.getSelection();
                null == e || e.collapse(t.current);
            },
            style: Y,
            onPointerDown(e) {
                e.stopPropagation();
            },
            onMouseDown(e) {
                e.stopPropagation();
            },
        }),
    };
}
