n.d(t, { x: () => f });
var r = n(346711),
    i = n(256062),
    l = n(351225),
    a = n(184093),
    o = n(957397),
    s = n(560754),
    u = n(635597),
    c = n(668310),
    d = n(66464),
    h = n(366632),
    b = n(747884),
    p = n(753154),
    g = n(582128);
function f(e, t) {
    let {
            index: n = 0,
            isRequired: f,
            validationState: m,
            isInvalid: y,
            trackRef: v,
            inputRef: K,
            orientation: P = t.orientation,
            name: T,
            form: w,
        } = e,
        D = e.isDisabled || t.isDisabled,
        S = "vertical" === P,
        { direction: M } = (0, h.Y)(),
        { addGlobalListener: C, removeGlobalListener: x } = (0, u.A)(),
        E = l.S.get(t),
        { labelProps: k, fieldProps: R } = (0, d.M)({
            ...e,
            id: (0, l.h)(t, n),
            "aria-labelledby": `${E.id} ${e["aria-labelledby"] ?? ""}`.trim(),
        }),
        F = t.values[n],
        V = (0, g.useCallback)(() => {
            K.current && (0, r.e)(K.current);
        }, [K]),
        I = t.focusedThumb === n;
    (0, g.useEffect)(() => {
        I && V();
    }, [I, V]);
    let A = "rtl" === M,
        L = (0, g.useRef)(null),
        B = (e) => {
            (t.setThumbDragging(n, !0), e(), t.setThumbDragging(n, !1));
        },
        { keyboardProps: U } = (0, c.d)({
            shortcuts: {
                PageUp: () =>
                    B(() => {
                        t.incrementThumb(n, t.pageSize);
                    }),
                PageDown: () =>
                    B(() => {
                        t.decrementThumb(n, t.pageSize);
                    }),
                Home: () =>
                    B(() => {
                        t.setThumbValue(n, t.getThumbMinValue(n));
                    }),
                End: () =>
                    B(() => {
                        t.setThumbValue(n, t.getThumbMaxValue(n));
                    }),
            },
            allowRepeats: !0,
        }),
        { moveProps: z } = (0, b.f)({
            onMoveStart() {
                ((L.current = null), t.setThumbDragging(n, !0));
            },
            onMove({ deltaX: e, deltaY: r, pointerType: i, shiftKey: l }) {
                let {
                    getThumbPercent: a,
                    setThumbPercent: o,
                    decrementThumb: s,
                    incrementThumb: u,
                    step: c,
                    pageSize: d,
                } = t;
                if (!v.current) return;
                let { width: h, height: b } = v.current.getBoundingClientRect(),
                    g = S ? b : h;
                if ((null == L.current && (L.current = a(n) * g), "keyboard" === i))
                    (e > 0 && A) || (e < 0 && !A) || r > 0 ? s(n, l ? d : c) : u(n, l ? d : c);
                else {
                    let t = S ? r : e;
                    ((S || A) && (t = -t), (L.current += t), o(n, (0, p.qE)(L.current / g, 0, 1)));
                }
            },
            onMoveEnd() {
                t.setThumbDragging(n, !1);
            },
        });
    t.setThumbEditable(n, !D);
    let { focusableProps: Y } = (0, o.Wc)(
            (0, a.v)(e, { onFocus: () => t.setFocusedThumb(n), onBlur: () => t.setFocusedThumb(void 0) }),
            K,
        ),
        N = (0, g.useRef)(void 0),
        $ = (e) => {
            (V(),
                (N.current = e),
                t.setThumbDragging(n, !0),
                C(window, "mouseup", X, !1),
                C(window, "touchend", X, !1),
                C(window, "pointerup", X, !1));
        },
        X = (e) => {
            (e.pointerId ?? e.changedTouches?.[0].identifier) === N.current &&
                (V(),
                t.setThumbDragging(n, !1),
                x(window, "mouseup", X, !1),
                x(window, "touchend", X, !1),
                x(window, "pointerup", X, !1));
        },
        H = t.getThumbPercent(n);
    (S || "rtl" === M) && (H = 1 - H);
    let O = D
        ? {}
        : (0, a.v)(U, z, {
              onMouseDown: (e) => {
                  0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || $();
              },
              onPointerDown: (e) => {
                  0 !== e.button || e.altKey || e.ctrlKey || e.metaKey || $(e.pointerId);
              },
              onTouchStart: (e) => {
                  $(e.changedTouches[0].identifier);
              },
          });
    return (
        (0, s.F)(K, t.defaultValues[n], (e) => {
            t.setThumbValue(n, e);
        }),
        {
            inputProps: (0, a.v)(Y, R, {
                type: "range",
                tabIndex: D ? void 0 : 0,
                min: t.getThumbMinValue(n),
                max: t.getThumbMaxValue(n),
                step: t.step,
                value: F,
                name: T,
                form: w,
                disabled: D,
                "aria-orientation": P,
                "aria-valuetext": t.getThumbValueLabel(n),
                "aria-required": f || void 0,
                "aria-invalid": y || "invalid" === m || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-describedby": [E["aria-describedby"], e["aria-describedby"]].filter(Boolean).join(" "),
                "aria-details": [E["aria-details"], e["aria-details"]].filter(Boolean).join(" "),
                onChange: (e) => {
                    t.setThumbValue(n, parseFloat((0, i.wt)(e).value));
                },
            }),
            thumbProps: {
                ...O,
                style: {
                    position: "absolute",
                    [S ? "top" : "left"]: `${100 * H}%`,
                    transform: "translate(-50%, -50%)",
                    touchAction: "none",
                },
            },
            labelProps: k,
            isDragging: t.isThumbDragging(n),
            isDisabled: D,
            isFocused: I,
        }
    );
}
