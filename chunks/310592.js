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
    E = n(941143),
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
        z = r.useMemo(() => (null != P ? [...P].sort((e, t) => e - t) : []), [P]),
        X = U && z.length > 1;
    function q(e) {
        return null != e && X ? S(z, e) : e;
    }
    function Z(e) {
        return Math.min(Math.max(((e - L) / (y - L)) * 100, 0), 100);
    }
    let Q = (0, l.J)();
    function J(e) {
        return null != M ? M(e) : Q.format(e);
    }
    let ee = (0, A.S)({
            value: q(O),
            defaultValue: q(R),
            minValue: X ? 0 : L,
            maxValue: X ? z.length - 1 : y,
            step: X ? 1 : D,
            isDisabled: a,
            numberFormatter: Q,
            onChange: (e) => v?.(X ? z[e] : e),
            onChangeEnd: (e) => b?.(X ? z[e] : e),
        }),
        { groupProps: et, trackProps: en } = (0, o.P)({ "aria-label": G, "aria-labelledby": p, isDisabled: a }, ee, V),
        {
            thumbProps: ei,
            inputProps: er,
            isDragging: ea,
            isFocused: es,
        } = (0, d.x)({ index: 0, trackRef: V, inputRef: W, isDisabled: a, "aria-label": G }, ee),
        el = (function (e) {
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
        })({ state: ee, trackRef: V, inputRef: W, sortedMarks: z, minValue: L, maxValue: y, disabled: a }),
        eo = ((t = ee.getThumbValue(0)), X ? z[t] : t),
        ed = J(eo),
        ec = `${Z(eo)}%`,
        eu = es && $,
        e_ = !a && (eu || ea || Y);
    function eE(e) {
        return (t) => {
            x && g.has(t.key) ? t.preventDefault() : e?.(t);
        };
    }
    let eA = (0, c.v)(et, X ? el : en),
        eh = (0, h.z)({
            "--grabber-size": e_ ? "20px" : "16px",
            "--bar-size": e_ ? "6px" : "4px",
            config: { ...E.config.stiff, duration: 100 },
        });
    return (0, i.jsx)(I.vN, {
        focusTarget: W,
        ringTarget: H,
        children: (0, i.jsxs)(E.animated.div, {
            ...eA,
            onKeyDown: eE(eA.onKeyDown),
            ref: B,
            className: s()(m.aw, { [m.ZF]: z.length > 0, [m.r9]: a }),
            style: { ...eh, touchAction: "none" },
            onMouseEnter: () => K(!0),
            onMouseLeave: () => K(!1),
            children: [
                (0, i.jsx)("div", {
                    className: m.u4,
                    children: z.map((e) =>
                        (0, i.jsxs)(
                            "div",
                            {
                                "aria-hidden": !0,
                                className: s()(m.Gy, m.zt, { [m.Jh]: e === w }),
                                style: { insetInlineStart: `${Z(e)}%` },
                                children: [
                                    (0, i.jsx)("div", { className: m.nj, children: J(e) }),
                                    (0, i.jsx)("div", { className: m.gf }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
                (0, i.jsx)("div", {
                    className: m.M0,
                    children: (0, i.jsx)("div", { className: m.pP, style: { width: ec } }),
                }),
                (0, i.jsx)("div", {
                    className: m.u4,
                    ref: V,
                    children: (0, i.jsx)(T.m, {
                        text: X ? null : ed,
                        forceOpen: ea || eu,
                        positionKey: ec,
                        ariaHidden: !0,
                        children: (0, i.jsx)("div", {
                            ...ei,
                            ...(X ? { onPointerDown: void 0, onMouseDown: void 0, onTouchStart: void 0 } : null),
                            onKeyDown: eE(ei.onKeyDown),
                            ref: H,
                            className: m.Ub,
                            style: { insetInlineStart: ec, touchAction: "none" },
                            children: (0, i.jsx)(u.s, {
                                children: (0, i.jsx)("input", {
                                    ref: W,
                                    ...er,
                                    tabIndex: F ?? er.tabIndex,
                                    id: n,
                                    "aria-labelledby": p,
                                    "aria-describedby": N,
                                    "aria-errormessage": C,
                                    "aria-invalid": null != C,
                                    "aria-valuetext": ed,
                                    "aria-valuemin": X ? z[0] : L,
                                    "aria-valuemax": X ? z[z.length - 1] : y,
                                    "aria-valuenow": eo,
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
}
