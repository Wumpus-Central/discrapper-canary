i.d(t, { Ww: () => p, ZL: () => A }), i(321073);
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
function A(e) {
    let {
            isEditing: t,
            preview: i,
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
        R = null == i,
        O = null != p,
        L = null != A && !O,
        _ = O ? "error" : L ? "warning" : null,
        P = O ? p : A,
        D = null != _ && null != P,
        [G] = l.useState(t),
        [M, U] = l.useState(!1);
    M || t === G || U(!0);
    let F = [];
    R && F.push(k), D && "compact" !== g && F.push(w);
    let W = F.length > 0 ? F.join(" ") : void 0;
    function H() {
        let { activeElement: e } = y.current?.ownerDocument ?? document;
        (0, a.vq)(e, HTMLElement) && e.blur(), u();
    }
    let V = (0, n.jsxs)("div", {
        ref: y,
        className: r()(h.LL, { [h.JD]: O, [h.xe]: L, [h.r9]: b }),
        onMouseDown: b
            ? void 0
            : function (e) {
                  e.preventDefault();
              },
        onClick: b ? void 0 : H,
        children: [
            R
                ? (0, n.jsx)(m.E, {
                      id: k,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: h.qf,
                      children: s,
                  })
                : i,
            !b &&
                (0, n.jsx)(x.D, {
                    innerRef: d,
                    "aria-label": c,
                    "aria-describedby": W,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), H();
                    },
                    focusProps: { ringTarget: y },
                }),
            null != f && (0, n.jsx)("div", { className: h.lD, children: (0, n.jsx)(I, { ...f }) }),
        ],
    });
    return (0, n.jsx)("div", {
        ref: E,
        className: r()(
            h.kL,
            { [h.oE]: "compact" === g, [h.c1]: "multiline" === g, [h.CP]: T, [h.WK]: N, [h.Dy]: t },
            v,
        ),
        onBlur: S,
        onKeyDown: C,
        children: (0, n.jsx)(
            "div",
            {
                className: M ? h.qG : void 0,
                children: t
                    ? o
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", { className: h.VH, children: V }),
                              D && "compact" !== g && (0, n.jsx)(j, { id: w, message: P, type: _ }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
