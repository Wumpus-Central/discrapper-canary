i.d(t, { Ww: () => p, ZL: () => A }), i(321073);
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(621466),
    o = i(219869),
    d = i(17928),
    u = i(866665),
    c = i(695366),
    g = i(738188),
    m = i(834730),
    x = i(939249),
    f = i(775602),
    h = i(321027);
function p(e) {
    let { value: t, onCommit: i, disabled: n = !1 } = e,
        [s, r] = l.useState("idle"),
        [o, u] = l.useState(t),
        c = "editing" === s && !n,
        g = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        m = l.useRef(null),
        x = l.useRef(null),
        h = l.useRef(null),
        p = l.useRef(!1),
        I = l.useRef(!0),
        j = l.useCallback(() => {
            (I.current = !1), u(t), r("editing");
        }, [t]),
        A = l.useRef(o);
    l.useLayoutEffect(() => {
        A.current = o;
    });
    let v = l.useCallback(() => {
            I.current || ((I.current = !0), i(A.current), r("done"));
        }, [i]),
        E = l.useCallback(() => {
            I.current || ((I.current = !0), r("done"));
        }, []);
    l.useEffect(() => {
        "done" === s && (p.current && m.current?.focus({ preventScroll: !0 }), (p.current = !1));
    }, [s]),
        l.useEffect(() => {
            c &&
                (x.current?.scrollIntoView({ block: "nearest", behavior: g ? "auto" : "smooth" }),
                h.current?.focus({ preventScroll: !0 }));
        }, [c, g]);
    let S = l.useCallback(
            (e) => {
                !c || (null != x.current && (0, a.vq)(e.relatedTarget) && x.current.contains(e.relatedTarget)) || v();
            },
            [c, v],
        ),
        C = l.useCallback(
            (e) => {
                c && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (p.current = !0), E());
            },
            [c, E],
        ),
        b = l.useCallback(() => {
            (p.current = !0), v();
        }, [v]),
        N = l.useCallback(() => {
            (p.current = !0), E();
        }, [E]),
        T = l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), N())
                    : (e.preventDefault(), b());
            },
            [b, N],
        );
    return {
        isEditing: c,
        committedValue: t,
        editedValue: o,
        setEditedValue: u,
        editButtonRef: m,
        wrapperRef: x,
        inputRef: h,
        handleStartEditing: j,
        handleCommit: v,
        handleCancel: E,
        handleInputCommit: b,
        handleInputCancel: N,
        onInputKeyDown: T,
        onBlur: S,
        onContainerKeyDown: C,
    };
}
function I(e) {
    let { tooltip: t, ...i } = e,
        l = (0, n.jsx)("div", {
            className: h.L7,
            children: (0, n.jsx)(o.T, { ...i, size: "sm", variant: "input-accessory" }),
        });
    return null == t ? l : (0, n.jsx)(u.m, { text: t, ariaHidden: !0, children: l });
}
function j(e) {
    let { id: t, message: i, type: l } = e,
        s = "error" === l,
        r = s ? c.E : g.i;
    return (0, n.jsxs)(m.E, {
        id: t,
        variant: "text-xs/normal",
        color: s ? "text-feedback-critical" : "text-feedback-warning",
        className: h.VP,
        children: [(0, n.jsx)(r, { size: "xs", color: "currentColor", className: s ? h.ik : h.QW }), i],
    });
}
function A(e) {
    let {
            isEditing: t,
            preview: i,
            placeholder: s,
            input: a,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: u,
            variant: c = "default",
            trailing: g,
            previewErrorMessage: f,
            previewWarningMessage: p,
            className: A,
            wrapperRef: v,
            onBlur: E,
            onKeyDown: S,
            disabled: C = !1,
            growWidth: b = !1,
            removeVerticalPadding: N = !1,
        } = e,
        T = l.useRef(null),
        w = l.useId(),
        k = l.useId(),
        y = null == i,
        R = null != f,
        O = null != p && !R,
        _ = R ? "error" : O ? "warning" : null,
        L = R ? f : p,
        P = null != _ && null != L,
        [D] = l.useState(t),
        [G, M] = l.useState(!1);
    G || t === D || M(!0);
    let U = [];
    y && U.push(w), P && "compact" !== c && U.push(k);
    let F = U.length > 0 ? U.join(" ") : void 0,
        W = (0, n.jsxs)("div", {
            ref: T,
            className: r()(h.LL, { [h.JD]: R, [h.xe]: O, [h.r9]: C }),
            onClick: C ? void 0 : u,
            children: [
                y
                    ? (0, n.jsx)(m.E, {
                          id: w,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: h.qf,
                          children: s,
                      })
                    : i,
                !C &&
                    (0, n.jsx)(x.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": F,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: T },
                    }),
                null != g && (0, n.jsx)("div", { className: h.lD, children: (0, n.jsx)(I, { ...g }) }),
            ],
        });
    return (0, n.jsx)("div", {
        ref: v,
        className: r()(h.kL, { [h.oE]: "compact" === c, [h.c1]: "multiline" === c, [h.CP]: b, [h.WK]: N }, A),
        onBlur: E,
        onKeyDown: S,
        children: (0, n.jsx)(
            "div",
            {
                className: G ? h.qG : void 0,
                children: t
                    ? a
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", { className: h.VH, children: W }),
                              P && "compact" !== c && (0, n.jsx)(j, { id: k, message: L, type: _ }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
