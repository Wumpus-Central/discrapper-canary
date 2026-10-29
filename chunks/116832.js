r.d(t, { x: () => v });
var n = r(862615),
    i = r(518206),
    o = r(291513),
    a = r(519837),
    s = r(994965),
    l = r(470194),
    u = r(867085),
    c = r(499798),
    f = r(514912),
    d = r(379880),
    p = r(363948),
    h = r(594946),
    m = r(582128);
function v(e, t) {
    let {
            index: r = 0,
            isRequired: v,
            validationState: y,
            isInvalid: g,
            trackRef: b,
            inputRef: w,
            orientation: _ = t.orientation,
            name: S,
            form: E,
        } = e,
        x = e.isDisabled || t.isDisabled,
        C = "vertical" === _,
        { direction: k } = (0, d.Y)(),
        { addGlobalListener: T, removeGlobalListener: M } = (0, u.A)(),
        P = o.S.get(t),
        { labelProps: A, fieldProps: I } = (0, f.M)({
            ...e,
            id: (0, o.h)(t, r),
            "aria-labelledby": `${P.id} ${e["aria-labelledby"] ?? ""}`.trim(),
        }),
        O = t.values[r],
        R = (0, m.useCallback)(() => {
            w.current && (0, n.e)(w.current);
        }, [w]),
        D = t.focusedThumb === r;
    (0, m.useEffect)(() => {
        D && R();
    }, [D, R]);
    let L = "rtl" === k,
        F = (0, m.useRef)(null),
        N = (e) => {
            (t.setThumbDragging(r, !0), e(), t.setThumbDragging(r, !1));
        },
        { keyboardProps: j } = (0, c.d)({
            shortcuts: {
                PageUp: () =>
                    N(() => {
                        t.incrementThumb(r, t.pageSize);
                    }),
                PageDown: () =>
                    N(() => {
                        t.decrementThumb(r, t.pageSize);
                    }),
                Home: () =>
                    N(() => {
                        t.setThumbValue(r, t.getThumbMinValue(r));
                    }),
                End: () =>
                    N(() => {
                        t.setThumbValue(r, t.getThumbMaxValue(r));
                    }),
            },
            allowRepeats: !0,
        }),
        { moveProps: B } = (0, p.f)({
            onMoveStart() {
                ((F.current = null), t.setThumbDragging(r, !0));
            },
            onMove(e) {
                let { deltaX: n, deltaY: i, pointerType: o, shiftKey: a } = e,
                    {
                        getThumbPercent: s,
                        setThumbPercent: l,
                        decrementThumb: u,
                        incrementThumb: c,
                        step: f,
                        pageSize: d,
                    } = t;
                if (!b.current) return;
                let { width: p, height: m } = b.current.getBoundingClientRect(),
                    v = C ? m : p;
                if ((null == F.current && (F.current = s(r) * v), "keyboard" === o))
                    (n > 0 && L) || (n < 0 && !L) || i > 0 ? u(r, a ? d : f) : c(r, a ? d : f);
                else {
                    let e = C ? i : n;
                    ((C || L) && (e = -e), (F.current += e), l(r, (0, h.qE)(F.current / v, 0, 1)));
                }
            },
            onMoveEnd() {
                t.setThumbDragging(r, !1);
            },
        });
    t.setThumbEditable(r, !x);
    let { focusableProps: K } = (0, s.Wc)(
            (0, a.v)(e, { onFocus: () => t.setFocusedThumb(r), onBlur: () => t.setFocusedThumb(void 0) }),
            w,
        ),
        V = (0, m.useRef)(void 0),
        U = (e) => {
            (R(),
                (V.current = e),
                t.setThumbDragging(r, !0),
                T(window, "mouseup", $, !1),
                T(window, "touchend", $, !1),
                T(window, "pointerup", $, !1));
        },
        $ = (e) => {
            (e.pointerId ?? e.changedTouches?.[0].identifier) === V.current &&
                (R(),
                t.setThumbDragging(r, !1),
                M(window, "mouseup", $, !1),
                M(window, "touchend", $, !1),
                M(window, "pointerup", $, !1));
        },
        H = t.getThumbPercent(r);
    (C || "rtl" === k) && (H = 1 - H);
    let z = x
        ? {}
        : (0, a.v)(j, B, {
              onMouseDown: (e) => {
                  0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || U();
              },
              onPointerDown: (e) => {
                  0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || U(e.pointerId);
              },
              onTouchStart: (e) => {
                  U(e.changedTouches[0].identifier);
              },
          });
    return (
        (0, l.F)(w, t.defaultValues[r], (e) => {
            t.setThumbValue(r, e);
        }),
        {
            inputProps: (0, a.v)(K, I, {
                type: "range",
                tabIndex: x ? void 0 : 0,
                min: t.getThumbMinValue(r),
                max: t.getThumbMaxValue(r),
                step: t.step,
                value: O,
                name: S,
                form: E,
                disabled: x,
                "aria-orientation": _,
                "aria-valuetext": t.getThumbValueLabel(r),
                "aria-required": v || void 0,
                "aria-invalid": g || "invalid" === y || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-describedby": [P["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
                "aria-details": [P["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
                onChange: (e) => {
                    t.setThumbValue(r, parseFloat((0, i.wt)(e).value));
                },
            }),
            thumbProps: {
                ...z,
                style: {
                    position: "absolute",
                    [C ? "top" : "left"]: `${100 * H}%`,
                    transform: "translate(-50%, -50%)",
                    touchAction: "none",
                },
            },
            labelProps: A,
            isDragging: t.isThumbDragging(r),
            isDisabled: x,
            isFocused: D,
        }
    );
}
