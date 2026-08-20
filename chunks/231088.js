i.d(t, { Ww: () => p, ZL: () => v }), i(321073);
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(621466),
    o = i(219869),
    d = i(17928),
    c = i(866665),
    u = i(695366),
    g = i(738188),
    m = i(834730),
    x = i(939249),
    f = i(775602),
    h = i(404760);
function p(e) {
    let { value: t, onCommit: i, disabled: n = !1 } = e,
        [s, r] = l.useState("idle"),
        [o, c] = l.useState(t),
        u = "editing" === s && !n,
        g = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        m = l.useRef(null),
        x = l.useRef(null),
        h = l.useRef(null),
        p = l.useRef(!1),
        I = l.useRef(!0),
        j = l.useCallback(() => {
            (I.current = !1), c(t), r("editing");
        }, [t]),
        v = l.useRef(o);
    l.useLayoutEffect(() => {
        v.current = o;
    });
    let A = l.useCallback(() => {
            I.current || ((I.current = !0), i(v.current), r("done"));
        }, [i]),
        E = l.useCallback(() => {
            I.current || ((I.current = !0), r("done"));
        }, []);
    l.useEffect(() => {
        "done" === s && (p.current && m.current?.focus({ preventScroll: !0 }), (p.current = !1));
    }, [s]),
        l.useEffect(() => {
            u &&
                (x.current?.scrollIntoView({ block: "nearest", behavior: g ? "auto" : "smooth" }),
                h.current?.focus({ preventScroll: !0 }));
        }, [u, g]);
    let S = l.useCallback(
            (e) => {
                !u || (null != x.current && (0, a.vq)(e.relatedTarget) && x.current.contains(e.relatedTarget)) || A();
            },
            [u, A],
        ),
        C = l.useCallback(
            (e) => {
                u && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (p.current = !0), E());
            },
            [u, E],
        ),
        b = l.useCallback(() => {
            (p.current = !0), A();
        }, [A]),
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
        isEditing: u,
        committedValue: t,
        editedValue: o,
        setEditedValue: c,
        editButtonRef: m,
        wrapperRef: x,
        inputRef: h,
        handleStartEditing: j,
        handleCommit: A,
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
    return null == t ? l : (0, n.jsx)(c.m, { text: t, ariaHidden: !0, children: l });
}
function j(e) {
    let { id: t, message: i, type: l } = e,
        s = "error" === l,
        r = s ? u.E : g.WarningIcon;
    return (0, n.jsxs)(m.E, {
        id: t,
        variant: "text-xs/normal",
        color: s ? "text-feedback-critical" : "text-feedback-warning",
        className: h.VP,
        children: [(0, n.jsx)(r, { size: "xs", color: "currentColor", className: s ? h.ik : h.QW }), i],
    });
}
function v(e) {
    let {
            isEditing: t,
            preview: i,
            placeholder: s,
            input: a,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: c,
            variant: u = "default",
            trailing: g,
            previewErrorMessage: f,
            previewWarningMessage: p,
            className: v,
            wrapperRef: A,
            onBlur: E,
            onKeyDown: S,
            disabled: C = !1,
            growWidth: b = !1,
            removeVerticalPadding: N = !1,
        } = e,
        T = l.useRef(null),
        w = l.useId(),
        y = l.useId(),
        k = null == i,
        R = null != f,
        O = null != p && !R,
        L = R ? "error" : O ? "warning" : null,
        _ = R ? f : p,
        P = null != L && null != _,
        [D] = l.useState(t),
        [G, M] = l.useState(!1);
    G || t === D || M(!0);
    let U = [];
    k && U.push(w), P && "compact" !== u && U.push(y);
    let W = U.length > 0 ? U.join(" ") : void 0,
        F = (0, n.jsxs)("div", {
            ref: T,
            className: r()(h.LL, { [h.JD]: R, [h.xe]: O, [h.r9]: C }),
            onClick: C ? void 0 : c,
            children: [
                k
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
                        "aria-describedby": W,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), c();
                        },
                        focusProps: { ringTarget: T },
                    }),
                null != g && (0, n.jsx)("div", { className: h.lD, children: (0, n.jsx)(I, { ...g }) }),
            ],
        });
    return (0, n.jsx)("div", {
        ref: A,
        className: r()(h.kL, { [h.oE]: "compact" === u, [h.c1]: "multiline" === u, [h.CP]: b, [h.WK]: N }, v),
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
                              (0, n.jsx)("div", { className: h.VH, children: F }),
                              P && "compact" !== u && (0, n.jsx)(j, { id: y, message: _, type: L }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
