n.d(t, { Ww: () => p, ZL: () => A }), n(321073);
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(621466),
    o = n(219869),
    d = n(17928),
    c = n(866665),
    u = n(695366),
    g = n(738188),
    m = n(834730),
    x = n(939249),
    f = n(775602),
    h = n(404760);
function p(e) {
    let { value: t, onCommit: n, disabled: i = !1 } = e,
        [s, r] = l.useState("idle"),
        [o, c] = l.useState(t),
        u = "editing" === s && !i,
        g = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        m = l.useRef(null),
        x = l.useRef(null),
        h = l.useRef(null),
        p = l.useRef(!1),
        I = l.useRef(!0),
        j = l.useCallback(() => {
            (I.current = !1), c(t), r("editing");
        }, [t]),
        A = l.useRef(o);
    l.useLayoutEffect(() => {
        A.current = o;
    });
    let v = l.useCallback(() => {
            I.current || ((I.current = !0), n(A.current), r("done"));
        }, [n]),
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
                !u || (null != x.current && (0, a.vq)(e.relatedTarget) && x.current.contains(e.relatedTarget)) || v();
            },
            [u, v],
        ),
        C = l.useCallback(
            (e) => {
                u && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (p.current = !0), E());
            },
            [u, E],
        ),
        b = l.useCallback(() => {
            (p.current = !0), v();
        }, [v]),
        T = l.useCallback(() => {
            (p.current = !0), E();
        }, [E]),
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
        setEditedValue: c,
        editButtonRef: m,
        wrapperRef: x,
        inputRef: h,
        handleStartEditing: j,
        handleCommit: v,
        handleCancel: E,
        handleInputCommit: b,
        handleInputCancel: T,
        onInputKeyDown: N,
        onBlur: S,
        onContainerKeyDown: C,
    };
}
function I(e) {
    let { tooltip: t, ...n } = e,
        l = (0, i.jsx)("div", {
            className: h.L7,
            children: (0, i.jsx)(o.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == t ? l : (0, i.jsx)(c.m, { text: t, ariaHidden: !0, children: l });
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
            editButtonRef: d,
            editButtonAriaLabel: c,
            onStartEditing: u,
            variant: g = "default",
            trailing: f,
            previewErrorMessage: p,
            previewWarningMessage: A,
            className: v,
            wrapperRef: E,
            onBlur: S,
            onKeyDown: C,
            disabled: b = !1,
            growWidth: T = !1,
            removeVerticalPadding: N = !1,
        } = e,
        y = l.useRef(null),
        k = l.useId(),
        w = l.useId(),
        R = null == n,
        L = null != p,
        O = null != A && !L,
        P = L ? "error" : O ? "warning" : null,
        _ = L ? p : A,
        D = null != P && null != _,
        [G] = l.useState(t),
        [M, U] = l.useState(!1);
    M || t === G || U(!0);
    let W = [];
    R && W.push(k), D && "compact" !== g && W.push(w);
    let F = W.length > 0 ? W.join(" ") : void 0;
    function H() {
        let { activeElement: e } = y.current?.ownerDocument ?? document;
        (0, a.vq)(e, HTMLElement) && e.blur(), u();
    }
    let V = (0, i.jsxs)("div", {
        ref: y,
        className: r()(h.LL, { [h.JD]: L, [h.xe]: O, [h.r9]: b }),
        onMouseDown: b
            ? void 0
            : function (e) {
                  e.preventDefault();
              },
        onClick: b ? void 0 : H,
        children: [
            R
                ? (0, i.jsx)(m.E, {
                      id: k,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: h.qf,
                      children: s,
                  })
                : n,
            !b &&
                (0, i.jsx)(x.D, {
                    innerRef: d,
                    "aria-label": c,
                    "aria-describedby": F,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), H();
                    },
                    focusProps: { ringTarget: y },
                }),
            null != f && (0, i.jsx)("div", { className: h.lD, children: (0, i.jsx)(I, { ...f }) }),
        ],
    });
    return (0, i.jsx)("div", {
        ref: E,
        className: r()(
            h.kL,
            { [h.oE]: "compact" === g, [h.c1]: "multiline" === g, [h.CP]: T, [h.WK]: N, [h.Dy]: t },
            v,
        ),
        onBlur: S,
        onKeyDown: C,
        children: (0, i.jsx)(
            "div",
            {
                className: M ? h.qG : void 0,
                children: t
                    ? o
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: h.VH, children: V }),
                              D && "compact" !== g && (0, i.jsx)(j, { id: w, message: _, type: P }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
