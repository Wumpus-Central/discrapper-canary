n.d(t, { j: () => N });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(501907),
    o = n(810400),
    d = n(766048),
    c = n(184093),
    u = n(467324),
    _ = n(366632),
    E = n(399513),
    A = n(633058),
    h = n(717421),
    f = n(844222),
    I = n(559106),
    p = n(452027),
    T = n(866665),
    m = n(77232);
let g = new Set(["ArrowUp", "ArrowDown"]);
function S(e, t) {
    let n = 0;
    for (let i = 1; i < e.length; i++) Math.abs(e[i] - t) < Math.abs(e[n] - t) && (n = i);
    return n;
}
function N(e) {
    let { fieldProps: t, props: n } = (0, p.n)(e);
    return (0, i.jsx)(p.D, {
        ...t,
        children: (e) =>
            (0, i.jsx)(C, {
                ...n,
                id: e.controlId,
                disabled: t.disabled ?? !1,
                labelledBy: n["aria-labelledby"] ?? e.labelId,
                describedBy: e.describedById,
                errorMessageId: e.errorMessageId,
            }),
    });
}
function C(e) {
    var t;
    let {
            id: n,
            disabled: a,
            labelledBy: p,
            describedBy: N,
            errorMessageId: C,
            value: O,
            defaultValue: R,
            minValue: L = 0,
            maxValue: y = 100,
            step: D = 1,
            onChange: v,
            onChangeEnd: b,
            formatValue: M,
            marks: P,
            snapToMarks: U = !1,
            defaultMark: w,
            "aria-label": G,
            passThroughVerticalArrowKeys: x = !1,
            inputRef: k,
            tabIndex: F,
        } = e,
        B = r.useRef(null),
        V = r.useRef(null),
        H = r.useRef(null),
        j = r.useRef(null),
        W = k ?? j,
        [Y, K] = r.useState(!1),
        { keyboardModeEnabled: $ } = r.useContext(f.C),
        z = r.useMemo(
            () =>
                (P ?? [])
                    .map((e) =>
                        "number" == typeof e
                            ? { value: e, label: void 0, usesFormatValue: !0 }
                            : { value: e.value, label: e.label, usesFormatValue: !1 },
                    )
                    .sort((e, t) => e.value - t.value),
            [P],
        ),
        X = r.useMemo(() => z.map((e) => e.value), [z]),
        q = U && X.length > 1;
    function Z(e) {
        return null != e && q ? S(X, e) : e;
    }
    function Q(e) {
        return Math.min(Math.max(((e - L) / (y - L)) * 100, 0), 100);
    }
    let J = (0, l.J)();
    function ee(e) {
        return null != M ? M(e) : J.format(e);
    }
    let et = (0, A.S)({
            value: Z(O),
            defaultValue: Z(R),
            minValue: q ? 0 : L,
            maxValue: q ? X.length - 1 : y,
            step: q ? 1 : D,
            isDisabled: a,
            numberFormatter: J,
            onChange: (e) => v?.(q ? X[e] : e),
            onChangeEnd: (e) => b?.(q ? X[e] : e),
        }),
        { groupProps: en, trackProps: ei } = (0, o.P)({ "aria-label": G, "aria-labelledby": p, isDisabled: a }, et, V),
        {
            thumbProps: er,
            inputProps: ea,
            isDragging: es,
            isFocused: el,
        } = (0, d.x)({ index: 0, trackRef: V, inputRef: W, isDisabled: a, "aria-label": G }, et),
        eo = (function (e) {
            let { state: t, trackRef: n, inputRef: i, sortedMarks: r, minValue: a, maxValue: s, disabled: l } = e,
                { direction: o } = (0, _.Y)();
            function d(e) {
                let i = n.current;
                if (null == i) return;
                let { left: l, width: d } = i.getBoundingClientRect();
                if (d <= 0) return;
                let c = Math.min(Math.max((e - l) / d, 0), 1);
                ("rtl" === o && (c = 1 - c), t.setThumbValue(0, S(r, a + c * (s - a))));
            }
            return {
                onPointerDown(e) {
                    l ||
                        0 !== e.button ||
                        (e.preventDefault(),
                        e.currentTarget.setPointerCapture?.(e.pointerId),
                        i.current?.focus({ preventScroll: !0 }),
                        t.setThumbDragging(0, !0),
                        d(e.clientX));
                },
                onPointerMove(e) {
                    t.isThumbDragging(0) && d(e.clientX);
                },
                onPointerUp(e) {
                    t.isThumbDragging(0) &&
                        (e.currentTarget.releasePointerCapture?.(e.pointerId), t.setThumbDragging(0, !1));
                },
                onPointerCancel() {
                    t.isThumbDragging(0) && t.setThumbDragging(0, !1);
                },
            };
        })({ state: et, trackRef: V, inputRef: W, sortedMarks: X, minValue: L, maxValue: y, disabled: a }),
        ed = ((t = et.getThumbValue(0)), q ? X[t] : t),
        ec = ee(ed),
        eu = `${Q(ed)}%`,
        e_ = el && $,
        eE = !a && (e_ || es || Y);
    function eA(e) {
        return (t) => {
            x && g.has(t.key) ? t.preventDefault() : e?.(t);
        };
    }
    let eh = (0, c.v)(en, q ? eo : ei),
        ef = (0, h.z)({
            "--grabber-size": eE ? "20px" : "16px",
            "--bar-size": eE ? "6px" : "4px",
            config: { ...E.config.stiff, duration: 100 },
        });
    return (0, i.jsx)(I.vN, {
        focusTarget: W,
        ringTarget: H,
        children: (0, i.jsxs)(E.animated.div, {
            ...eh,
            onKeyDown: eA(eh.onKeyDown),
            ref: B,
            className: s()(m.aw, { [m.ZF]: X.length > 0, [m.r9]: a }),
            style: { ...ef, touchAction: "none" },
            onMouseEnter: () => K(!0),
            onMouseLeave: () => K(!1),
            children: [
                (0, i.jsx)("div", {
                    className: m.u4,
                    children: z.map((e) => {
                        let t = e.usesFormatValue ? ee(e.value) : e.label;
                        return (0, i.jsxs)(
                            "div",
                            {
                                "aria-hidden": !0,
                                className: s()(m.Gy, m.zt, { [m.Jh]: e.value === w }),
                                style: { insetInlineStart: `${Q(e.value)}%` },
                                children: [
                                    (0, i.jsx)("div", { className: m.nj, children: t }),
                                    null != t ? (0, i.jsx)("div", { className: m.gf }) : null,
                                ],
                            },
                            e.value,
                        );
                    }),
                }),
                (0, i.jsx)("div", {
                    className: m.M0,
                    children: (0, i.jsx)("div", { className: m.pP, style: { width: eu } }),
                }),
                (0, i.jsx)("div", {
                    className: m.u4,
                    ref: V,
                    children: (0, i.jsx)(T.m, {
                        text: q ? null : ec,
                        forceOpen: es || e_,
                        positionKey: eu,
                        ariaHidden: !0,
                        children: (0, i.jsx)("div", {
                            ...er,
                            ...(q ? { onPointerDown: void 0, onMouseDown: void 0, onTouchStart: void 0 } : null),
                            onKeyDown: eA(er.onKeyDown),
                            ref: H,
                            className: m.Ub,
                            style: { insetInlineStart: eu, touchAction: "none" },
                            children: (0, i.jsx)(u.s, {
                                children: (0, i.jsx)("input", {
                                    ref: W,
                                    ...ea,
                                    tabIndex: F ?? ea.tabIndex,
                                    id: n,
                                    "aria-labelledby": p,
                                    "aria-describedby": N,
                                    "aria-errormessage": C,
                                    "aria-invalid": null != C,
                                    "aria-valuetext": ec,
                                    "aria-valuemin": q ? X[0] : L,
                                    "aria-valuemax": q ? X[X.length - 1] : y,
                                    "aria-valuenow": ed,
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
}
