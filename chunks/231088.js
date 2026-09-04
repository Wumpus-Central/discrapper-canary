n.d(t, { Ww: () => p, ZL: () => v, n4: () => j }), n(321073);
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(621466),
    o = n(219869),
    c = n(17928),
    d = n(866665),
    u = n(695366),
    g = n(738188),
    m = n(834730),
    x = n(939249),
    f = n(775602),
    h = n(375708),
    I = n(404760);
function p(e) {
    let { value: t, onCommit: n, disabled: i = !1 } = e,
        [s, r] = l.useState("idle"),
        [o, d] = l.useState(t),
        u = "editing" === s && !i,
        g = (0, c.bG)([f.Ay], () => f.Ay.useReducedMotion),
        m = l.useRef(null),
        x = l.useRef(null),
        h = l.useRef(null),
        I = l.useRef(!1),
        p = l.useRef(!0),
        j = l.useCallback(() => {
            (p.current = !1), d(t), r("editing");
        }, [t]),
        A = l.useRef(o);
    l.useLayoutEffect(() => {
        A.current = o;
    });
    let E = l.useCallback(() => {
            p.current || ((p.current = !0), n(A.current), r("done"));
        }, [n]),
        v = l.useCallback(() => {
            p.current || ((p.current = !0), r("done"));
        }, []);
    l.useEffect(() => {
        "done" === s && (I.current && m.current?.focus({ preventScroll: !0 }), (I.current = !1));
    }, [s]),
        l.useEffect(() => {
            u &&
                (x.current?.scrollIntoView({ block: "nearest", behavior: g ? "auto" : "smooth" }),
                h.current?.focus({ preventScroll: !0 }));
        }, [u, g]);
    let S = l.useCallback(
            (e) => {
                !u || (null != x.current && (0, a.vq)(e.relatedTarget) && x.current.contains(e.relatedTarget)) || E();
            },
            [u, E],
        ),
        C = l.useCallback(
            (e) => {
                u && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (I.current = !0), v());
            },
            [u, v],
        ),
        b = l.useCallback(() => {
            (I.current = !0), E();
        }, [E]),
        k = l.useCallback(() => {
            (I.current = !0), v();
        }, [v]),
        T = l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), k())
                    : (e.preventDefault(), b());
            },
            [b, k],
        );
    return {
        isEditing: u,
        committedValue: t,
        editedValue: o,
        setEditedValue: d,
        editButtonRef: m,
        wrapperRef: x,
        inputRef: h,
        handleStartEditing: j,
        handleCommit: E,
        handleCancel: v,
        handleInputCommit: b,
        handleInputCancel: k,
        onInputKeyDown: T,
        onBlur: S,
        onContainerKeyDown: C,
    };
}
function j(e, t) {
    return null != t && e.length > t ? h.intl.formatToPlainString(h.t.ICT5S6, { maxLength: t }) : void 0;
}
function A(e) {
    let { tooltip: t, ...n } = e,
        l = (0, i.jsx)("div", {
            className: I.L7,
            children: (0, i.jsx)(o.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == t ? l : (0, i.jsx)(d.m, { text: t, ariaHidden: !0, children: l });
}
function E(e) {
    let { id: t, message: n, type: l } = e,
        s = "error" === l,
        r = s ? u.E : g.WarningIcon;
    return (0, i.jsxs)(m.E, {
        id: t,
        variant: "text-xs/normal",
        color: s ? "text-feedback-critical" : "text-feedback-warning",
        className: I.VP,
        children: [(0, i.jsx)(r, { size: "xs", color: "currentColor", className: s ? I.ik : I.QW }), n],
    });
}
function v(e) {
    let {
            isEditing: t,
            preview: n,
            placeholder: s,
            input: o,
            editButtonRef: c,
            editButtonAriaLabel: d,
            onStartEditing: u,
            variant: g = "default",
            trailing: f,
            previewErrorMessage: h,
            previewWarningMessage: p,
            className: j,
            wrapperRef: v,
            onBlur: S,
            onKeyDown: C,
            textVariant: b,
            textColor: k,
            disabled: T = !1,
            growWidth: y = !1,
            removeVerticalPadding: N = !1,
        } = e,
        R = l.useRef(null),
        w = l.useId(),
        _ = l.useId(),
        L = null == n,
        O = null != h,
        P = null != p && !O,
        D = O ? "error" : P ? "warning" : null,
        M = O ? h : p,
        G = null != D && null != M,
        [U] = l.useState(t),
        [F, W] = l.useState(!1);
    F || t === U || W(!0);
    let H = [];
    L && H.push(w), G && "compact" !== g && H.push(_);
    let V = H.length > 0 ? H.join(" ") : void 0;
    function B() {
        let { activeElement: e } = R.current?.ownerDocument ?? document;
        (0, a.vq)(e, HTMLElement) && e.blur(), u();
    }
    let z = (0, i.jsxs)("div", {
        ref: R,
        className: r()(I.LL, { [I.JD]: O, [I.xe]: P, [I.r9]: T }),
        onMouseDown: T
            ? void 0
            : function (e) {
                  e.preventDefault();
              },
        onClick: T ? void 0 : B,
        children: [
            L
                ? (0, i.jsx)(m.E, {
                      id: w,
                      variant: b ?? "text-sm/normal",
                      color: k ?? "text-muted",
                      className: I.qf,
                      children: s,
                  })
                : n,
            !T &&
                (0, i.jsx)(x.D, {
                    innerRef: c,
                    "aria-label": d,
                    "aria-describedby": V,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), B();
                    },
                    focusProps: { ringTarget: R },
                }),
            null != f && (0, i.jsx)("div", { className: I.lD, children: (0, i.jsx)(A, { ...f }) }),
        ],
    });
    return (0, i.jsx)("div", {
        ref: v,
        className: r()(
            I.kL,
            { [I.oE]: "compact" === g, [I.c1]: "multiline" === g, [I.CP]: y, [I.WK]: N, [I.Dy]: t },
            j,
        ),
        onBlur: S,
        onKeyDown: C,
        children: (0, i.jsx)(
            "div",
            {
                className: F ? I.qG : void 0,
                children: t
                    ? o
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: I.VH, children: z }),
                              G && "compact" !== g && (0, i.jsx)(E, { id: _, message: M, type: D }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
