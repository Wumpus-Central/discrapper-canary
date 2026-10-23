r.d(t, { x: () => v });
var n = r(346711),
    i = r(256062),
    o = r(351225),
    a = r(184093),
    s = r(957397),
    l = r(560754),
    u = r(635597),
    c = r(668310),
    f = r(66464),
    p = r(366632),
    d = r(747884),
    h = r(753154),
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
        { direction: k } = (0, p.Y)(),
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
        { moveProps: B } = (0, d.f)({
            onMoveStart() {
                ((F.current = null), t.setThumbDragging(r, !0));
            },
            onMove({ deltaX: e, deltaY: n, pointerType: i, shiftKey: o }) {
                let {
                    getThumbPercent: a,
                    setThumbPercent: s,
                    decrementThumb: l,
                    incrementThumb: u,
                    step: c,
                    pageSize: f,
                } = t;
                if (!b.current) return;
                let { width: p, height: d } = b.current.getBoundingClientRect(),
                    m = C ? d : p;
                if ((null == F.current && (F.current = a(r) * m), "keyboard" === i))
                    (e > 0 && L) || (e < 0 && !L) || n > 0 ? l(r, o ? f : c) : u(r, o ? f : c);
                else {
                    let t = C ? n : e;
                    ((C || L) && (t = -t), (F.current += t), s(r, (0, h.qE)(F.current / m, 0, 1)));
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
