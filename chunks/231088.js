n.d(t, { Ww: () => p, ZL: () => A }), n(321073);
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
    h = n(404760);
function p(e) {
    let { value: t, onCommit: n, disabled: i = !1 } = e,
        [s, r] = l.useState("idle"),
        [o, d] = l.useState(t),
        u = "editing" === s && !i,
        g = (0, c.bG)([f.Ay], () => f.Ay.useReducedMotion),
        m = l.useRef(null),
        x = l.useRef(null),
        h = l.useRef(null),
        p = l.useRef(!1),
        I = l.useRef(!0),
        j = l.useCallback(() => {
            (I.current = !1), d(t), r("editing");
        }, [t]),
        A = l.useRef(o);
    l.useLayoutEffect(() => {
        A.current = o;
    });
    let E = l.useCallback(() => {
            I.current || ((I.current = !0), n(A.current), r("done"));
        }, [n]),
        v = l.useCallback(() => {
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
    let C = l.useCallback(
            (e) => {
                !u || (null != x.current && (0, a.vq)(e.relatedTarget) && x.current.contains(e.relatedTarget)) || E();
            },
            [u, E],
        ),
        S = l.useCallback(
            (e) => {
                u && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (p.current = !0), v());
            },
            [u, v],
        ),
        b = l.useCallback(() => {
            (p.current = !0), E();
        }, [E]),
        T = l.useCallback(() => {
            (p.current = !0), v();
        }, [v]),
        N = l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), T())
                    : (e.preventDefault(), b());
            },
            [b, T],
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
        handleInputCancel: T,
        onInputKeyDown: N,
        onBlur: C,
        onContainerKeyDown: S,
    };
}
function I(e) {
    let { tooltip: t, ...n } = e,
        l = (0, i.jsx)("div", {
            className: h.L7,
            children: (0, i.jsx)(o.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == t ? l : (0, i.jsx)(d.m, { text: t, ariaHidden: !0, children: l });
}
function j(e) {
    let { id: t, message: n, type: l } = e,
        s = "error" === l,
        r = s ? u.E : g.WarningIcon;
    return (0, i.jsxs)(m.E, {
        id: t,
        variant: "text-xs/normal",
        color: s ? "text-feedback-critical" : "text-feedback-warning",
        className: h.VP,
        children: [(0, i.jsx)(r, { size: "xs", color: "currentColor", className: s ? h.ik : h.QW }), n],
    });
}
function A(e) {
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
            previewErrorMessage: p,
            previewWarningMessage: A,
            className: E,
            wrapperRef: v,
            onBlur: C,
            onKeyDown: S,
            textVariant: b,
            textColor: T,
            disabled: N = !1,
            growWidth: k = !1,
            removeVerticalPadding: y = !1,
        } = e,
        R = l.useRef(null),
        w = l.useId(),
        L = l.useId(),
        O = null == n,
        P = null != p,
        _ = null != A && !P,
        D = P ? "error" : _ ? "warning" : null,
        G = P ? p : A,
        M = null != D && null != G,
        [U] = l.useState(t),
        [W, F] = l.useState(!1);
    W || t === U || F(!0);
    let H = [];
    O && H.push(w), M && "compact" !== g && H.push(L);
    let V = H.length > 0 ? H.join(" ") : void 0;
    function B() {
        let { activeElement: e } = R.current?.ownerDocument ?? document;
        (0, a.vq)(e, HTMLElement) && e.blur(), u();
    }
    let z = (0, i.jsxs)("div", {
        ref: R,
        className: r()(h.LL, { [h.JD]: P, [h.xe]: _, [h.r9]: N }),
        onMouseDown: N
            ? void 0
            : function (e) {
                  e.preventDefault();
              },
        onClick: N ? void 0 : B,
        children: [
            O
                ? (0, i.jsx)(m.E, {
                      id: w,
                      variant: b ?? "text-sm/normal",
                      color: T ?? "text-muted",
                      className: h.qf,
                      children: s,
                  })
                : n,
            !N &&
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
            null != f && (0, i.jsx)("div", { className: h.lD, children: (0, i.jsx)(I, { ...f }) }),
        ],
    });
    return (0, i.jsx)("div", {
        ref: v,
        className: r()(
            h.kL,
            { [h.oE]: "compact" === g, [h.c1]: "multiline" === g, [h.CP]: k, [h.WK]: y, [h.Dy]: t },
            E,
        ),
        onBlur: C,
        onKeyDown: S,
        children: (0, i.jsx)(
            "div",
            {
                className: W ? h.qG : void 0,
                children: t
                    ? o
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: h.VH, children: z }),
                              M && "compact" !== g && (0, i.jsx)(j, { id: L, message: G, type: D }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
