var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(703443),
    o = n(838624),
    d = n(116832),
    c = n(652664),
    u = n(77692),
    _ = n(677654),
    E = n(120692),
    A = n(399522),
    f = n(717421),
    h = n(844222),
    I = n(559106),
    p = n(452027),
    m = n(866665),
    g = n(77232);
let T = new Set(["ArrowUp", "ArrowDown"]);
function S(e, t) {
    let n = 0;
    for (let i = 1; i < e.length; i++) Math.abs(e[i] - t) < Math.abs(e[n] - t) && (n = i);
    return n;
}
function N(e) {
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
            onChange: b,
            onChangeEnd: v,
            formatValue: P,
            marks: M,
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
        { keyboardModeEnabled: $ } = r.useContext(h.C),
        X = r.useMemo(
            () =>
                (M ?? [])
                    .map((e) =>
                        "number" == typeof e
                            ? { value: e, label: void 0, usesFormatValue: !0 }
                            : { value: e.value, label: e.label, usesFormatValue: !1 },
                    )
                    .sort((e, t) => e.value - t.value),
            [M],
        ),
        z = r.useMemo(() => X.map((e) => e.value), [X]),
        q = U && z.length > 1;
    function Q(e) {
        return null != e && q ? S(z, e) : e;
    }
    function J(e) {
        return Math.min(Math.max(((e - L) / (y - L)) * 100, 0), 100);
    }
    let Z = (0, l.J)();
    function ee(e) {
        return null != P ? P(e) : Z.format(e);
    }
    let et = (0, A.S)({
            value: Q(O),
            defaultValue: Q(R),
            minValue: q ? 0 : L,
            maxValue: q ? z.length - 1 : y,
            step: q ? 1 : D,
            isDisabled: a,
            numberFormatter: Z,
            onChange: (e) => b?.(q ? z[e] : e),
            onChangeEnd: (e) => v?.(q ? z[e] : e),
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
        })({ state: et, trackRef: V, inputRef: W, sortedMarks: z, minValue: L, maxValue: y, disabled: a }),
        ed = ((t = et.getThumbValue(0)), q ? z[t] : t),
        ec = ee(ed),
        eu = `${J(ed)}%`,
        e_ = el && $,
        eE = !a && (e_ || es || Y);
    function eA(e) {
        return (t) => {
            x && T.has(t.key) ? t.preventDefault() : e?.(t);
        };
    }
    let ef = (0, c.v)(en, q ? eo : ei),
        eh = (0, f.z)({
            "--grabber-size": eE ? "20px" : "16px",
            "--bar-size": eE ? "6px" : "4px",
            config: { ...E.config.stiff, duration: 100 },
        });
    return (0, i.jsx)(I.vN, {
        focusTarget: W,
        ringTarget: H,
        children: (0, i.jsxs)(E.animated.div, {
            ...ef,
            onKeyDown: eA(ef.onKeyDown),
            ref: B,
            className: s()(g.aw, { [g.ZF]: z.length > 0, [g.r9]: a }),
            style: { ...eh, touchAction: "none" },
            onMouseEnter: () => K(!0),
            onMouseLeave: () => K(!1),
            children: [
                (0, i.jsx)("div", {
                    className: g.u4,
                    children: X.map((e) => {
                        let t = e.usesFormatValue ? ee(e.value) : e.label;
                        return (0, i.jsxs)(
                            "div",
                            {
                                "aria-hidden": !0,
                                className: s()(g.Gy, g.zt, { [g.Jh]: e.value === w }),
                                style: { insetInlineStart: `${J(e.value)}%` },
                                children: [
                                    (0, i.jsx)("div", { className: g.nj, children: t }),
                                    null != t ? (0, i.jsx)("div", { className: g.gf }) : null,
                                ],
                            },
                            e.value,
                        );
                    }),
                }),
                (0, i.jsx)("div", {
                    className: g.M0,
                    children: (0, i.jsx)("div", { className: g.pP, style: { width: eu } }),
                }),
                (0, i.jsx)("div", {
                    className: g.u4,
                    ref: V,
                    children: (0, i.jsx)(m.m, {
                        text: q ? null : ec,
                        forceOpen: es || e_,
                        positionKey: eu,
                        ariaHidden: !0,
                        children: (0, i.jsx)("div", {
                            ...er,
                            ...(q ? { onPointerDown: void 0, onMouseDown: void 0, onTouchStart: void 0 } : null),
                            onKeyDown: eA(er.onKeyDown),
                            ref: H,
                            className: g.Ub,
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
                                    "aria-valuemin": q ? z[0] : L,
                                    "aria-valuemax": q ? z[z.length - 1] : y,
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
n.d(
    t,
    {},
    {
        j: function (e) {
            let { fieldProps: t, props: n } = (0, p.n)(e);
            return (0, i.jsx)(p.D, {
                ...t,
                children: (e) =>
                    (0, i.jsx)(N, {
                        ...n,
                        id: e.controlId,
                        disabled: t.disabled ?? !1,
                        labelledBy: n["aria-labelledby"] ?? e.labelId,
                        describedBy: e.describedById,
                        errorMessageId: e.errorMessageId,
                    }),
            });
        },
    },
);
