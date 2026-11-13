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
    T = n(77232);
let g = new Set(["ArrowUp", "ArrowDown"]);
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
            hideTooltip: G = !1,
            "aria-label": x,
            passThroughVerticalArrowKeys: k = !1,
            inputRef: F,
            tabIndex: B,
        } = e,
        V = r.useRef(null),
        H = r.useRef(null),
        j = r.useRef(null),
        W = r.useRef(null),
        Y = F ?? W,
        [K, $] = r.useState(!1),
        { keyboardModeEnabled: X } = r.useContext(h.C),
        z = r.useMemo(
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
        q = r.useMemo(() => z.map((e) => e.value), [z]),
        Q = U && q.length > 1;
    function J(e) {
        return null != e && Q ? S(q, e) : e;
    }
    function Z(e) {
        return Math.min(Math.max(((e - L) / (y - L)) * 100, 0), 100);
    }
    let ee = (0, l.J)();
    function et(e) {
        return null != P ? P(e) : ee.format(e);
    }
    let en = (0, A.S)({
            value: J(O),
            defaultValue: J(R),
            minValue: Q ? 0 : L,
            maxValue: Q ? q.length - 1 : y,
            step: Q ? 1 : D,
            isDisabled: a,
            numberFormatter: ee,
            onChange: (e) => b?.(Q ? q[e] : e),
            onChangeEnd: (e) => v?.(Q ? q[e] : e),
        }),
        { groupProps: ei, trackProps: er } = (0, o.P)({ "aria-label": x, "aria-labelledby": p, isDisabled: a }, en, H),
        {
            thumbProps: ea,
            inputProps: es,
            isDragging: el,
            isFocused: eo,
        } = (0, d.x)({ index: 0, trackRef: H, inputRef: Y, isDisabled: a, "aria-label": x }, en),
        ed = (function (e) {
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
        })({ state: en, trackRef: H, inputRef: Y, sortedMarks: q, minValue: L, maxValue: y, disabled: a }),
        ec = ((t = en.getThumbValue(0)), Q ? q[t] : t),
        eu = et(ec),
        e_ = `${Z(ec)}%`,
        eE = eo && X,
        eA = !a && (eE || el || K);
    function ef(e) {
        return (t) => {
            k && g.has(t.key) ? t.preventDefault() : e?.(t);
        };
    }
    let eh = (0, c.v)(ei, Q ? ed : er),
        eI = (0, f.z)({
            "--grabber-size": eA ? "20px" : "16px",
            "--bar-size": eA ? "6px" : "4px",
            config: { ...E.config.stiff, duration: 100 },
        });
    return (0, i.jsx)(I.vN, {
        focusTarget: Y,
        ringTarget: j,
        children: (0, i.jsxs)(E.animated.div, {
            ...eh,
            onKeyDown: ef(eh.onKeyDown),
            ref: V,
            className: s()(T.aw, { [T.ZF]: q.length > 0, [T.r9]: a }),
            style: { ...eI, touchAction: "none" },
            onMouseEnter: () => $(!0),
            onMouseLeave: () => $(!1),
            children: [
                (0, i.jsx)("div", {
                    className: T.u4,
                    children: z.map((e) => {
                        let t = e.usesFormatValue ? et(e.value) : e.label;
                        return (0, i.jsxs)(
                            "div",
                            {
                                "aria-hidden": !0,
                                className: s()(T.Gy, T.zt, { [T.Jh]: e.value === w }),
                                style: { insetInlineStart: `${Z(e.value)}%` },
                                children: [
                                    (0, i.jsx)("div", { className: T.nj, children: t }),
                                    null != t ? (0, i.jsx)("div", { className: T.gf }) : null,
                                ],
                            },
                            e.value,
                        );
                    }),
                }),
                (0, i.jsx)("div", {
                    className: T.M0,
                    children: (0, i.jsx)("div", { className: T.pP, style: { width: e_ } }),
                }),
                (0, i.jsx)("div", {
                    className: T.u4,
                    ref: H,
                    children: (0, i.jsx)(m.m, {
                        text: Q || G ? null : eu,
                        forceOpen: el || eE,
                        positionKey: e_,
                        ariaHidden: !0,
                        children: (0, i.jsx)("div", {
                            ...ea,
                            ...(Q ? { onPointerDown: void 0, onMouseDown: void 0, onTouchStart: void 0 } : null),
                            onKeyDown: ef(ea.onKeyDown),
                            ref: j,
                            className: T.Ub,
                            style: { insetInlineStart: e_, touchAction: "none" },
                            children: (0, i.jsx)(u.s, {
                                children: (0, i.jsx)("input", {
                                    ref: Y,
                                    ...es,
                                    tabIndex: B ?? es.tabIndex,
                                    id: n,
                                    "aria-labelledby": p,
                                    "aria-describedby": N,
                                    "aria-errormessage": C,
                                    "aria-invalid": null != C,
                                    "aria-valuetext": eu,
                                    "aria-valuemin": Q ? q[0] : L,
                                    "aria-valuemax": Q ? q[q.length - 1] : y,
                                    "aria-valuenow": ec,
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
