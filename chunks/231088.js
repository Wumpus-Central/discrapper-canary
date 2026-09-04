n.d(t, { Ww: () => p, ZL: () => v, n4: () => A }), n(321073);
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(621466),
    o = n(219869),
    d = n(17928),
    u = n(866665),
    c = n(695366),
    g = n(738188),
    m = n(834730),
    f = n(939249),
    x = n(775602),
    h = n(375708),
    I = n(404760);
function p(e) {
    let { value: t, onCommit: n, disabled: i = !1 } = e,
        [s, r] = l.useState("idle"),
        [o, u] = l.useState(t),
        c = "editing" === s && !i,
        g = (0, d.bG)([x.Ay], () => x.Ay.useReducedMotion),
        m = l.useRef(null),
        f = l.useRef(null),
        h = l.useRef(null),
        I = l.useRef(!1),
        p = l.useRef(!0),
        A = l.useCallback(() => {
            (p.current = !1), u(t), r("editing");
        }, [t]),
        j = l.useRef(o);
    l.useLayoutEffect(() => {
        j.current = o;
    });
    let E = l.useCallback(() => {
            p.current || ((p.current = !0), n(j.current), r("done"));
        }, [n]),
        v = l.useCallback(() => {
            p.current || ((p.current = !0), r("done"));
        }, []);
    l.useEffect(() => {
        "done" === s && (I.current && m.current?.focus({ preventScroll: !0 }), (I.current = !1));
    }, [s]),
        l.useEffect(() => {
            c &&
                (f.current?.scrollIntoView({ block: "nearest", behavior: g ? "auto" : "smooth" }),
                h.current?.focus({ preventScroll: !0 }));
        }, [c, g]);
    let S = l.useCallback(
            (e) => {
                !c || (null != f.current && (0, a.vq)(e.relatedTarget) && f.current.contains(e.relatedTarget)) || E();
            },
            [c, E],
        ),
        C = l.useCallback(
            (e) => {
                c && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (I.current = !0), v());
            },
            [c, v],
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
        isEditing: c,
        committedValue: t,
        editedValue: o,
        setEditedValue: u,
        editButtonRef: m,
        wrapperRef: f,
        inputRef: h,
        handleStartEditing: A,
        handleCommit: E,
        handleCancel: v,
        handleInputCommit: b,
        handleInputCancel: k,
        onInputKeyDown: T,
        onBlur: S,
        onContainerKeyDown: C,
    };
}
function A(e, t) {
    return null != t && e.length > t ? h.intl.formatToPlainString(h.t.ICT5S6, { maxLength: t }) : void 0;
}
function j(e) {
    let { tooltip: t, ...n } = e,
        l = (0, i.jsx)("div", {
            className: I.L7,
            children: (0, i.jsx)(o.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == t ? l : (0, i.jsx)(u.m, { text: t, ariaHidden: !0, children: l });
}
function E(e) {
    let { id: t, message: n, type: l } = e,
        s = "error" === l,
        r = s ? c.E : g.WarningIcon;
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
            editButtonRef: d,
            editButtonAriaLabel: u,
            onStartEditing: c,
            variant: g = "default",
            trailing: x,
            previewErrorMessage: h,
            previewWarningMessage: p,
            className: A,
            wrapperRef: v,
            onBlur: S,
            onKeyDown: C,
            textVariant: b,
            textColor: k,
            disabled: T = !1,
            growWidth: N = !1,
            removeVerticalPadding: y = !1,
        } = e,
        w = l.useRef(null),
        R = l.useId(),
        _ = l.useId(),
        L = null == n,
        O = null != h,
        P = null != p && !O,
        D = O ? "error" : P ? "warning" : null,
        M = O ? h : p,
        G = null != D && null != M,
        [U] = l.useState(t),
        [W, F] = l.useState(!1);
    W || t === U || F(!0);
    let H = [];
    L && H.push(R), G && "compact" !== g && H.push(_);
    let B = H.length > 0 ? H.join(" ") : void 0;
    function V() {
        let { activeElement: e } = w.current?.ownerDocument ?? document;
        (0, a.vq)(e, HTMLElement) && e.blur(), c();
    }
    let z = (0, i.jsxs)("div", {
        ref: w,
        className: r()(I.LL, { [I.JD]: O, [I.xe]: P, [I.r9]: T }),
        onMouseDown: T
            ? void 0
            : function (e) {
                  e.preventDefault();
              },
        onClick: T ? void 0 : V,
        children: [
            L
                ? (0, i.jsx)(m.E, {
                      id: R,
                      variant: b ?? "text-sm/normal",
                      color: k ?? "text-muted",
                      className: I.qf,
                      children: s,
                  })
                : n,
            !T &&
                (0, i.jsx)(f.D, {
                    innerRef: d,
                    "aria-label": u,
                    "aria-describedby": B,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), V();
                    },
                    focusProps: { ringTarget: w },
                }),
            null != x && (0, i.jsx)("div", { className: I.lD, children: (0, i.jsx)(j, { ...x }) }),
        ],
    });
    return (0, i.jsx)("div", {
        ref: v,
        className: r()(
            I.kL,
            { [I.oE]: "compact" === g, [I.c1]: "multiline" === g, [I.CP]: N, [I.WK]: y, [I.Dy]: t },
            A,
        ),
        onBlur: S,
        onKeyDown: C,
        children: (0, i.jsx)(
            "div",
            {
                className: W ? I.qG : void 0,
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
