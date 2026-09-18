(n.d(t, { Ww: () => h, ZL: () => j, n4: () => p }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(621466),
    o = n(17928),
    d = n(695366),
    c = n(738188),
    u = n(834730),
    g = n(939249),
    m = n(775602),
    x = n(375708),
    f = n(404760);
function h(e) {
    let { value: t, onCommit: n, disabled: i = !1 } = e,
        [s, r] = l.useState("idle"),
        [a, d] = l.useState(t),
        c = "editing" === s && !i,
        u = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion),
        g = l.useRef(null),
        x = l.useRef(null),
        f = l.useRef(null),
        h = l.useRef(!1),
        p = l.useRef(!0),
        I = l.useRef(!1),
        j = l.useCallback(() => {
            ((p.current = !1), d(t), r("editing"));
        }, [t]),
        E = l.useRef(a);
    l.useLayoutEffect(() => {
        E.current = a;
    });
    let A = l.useCallback(() => {
            p.current || ((p.current = !0), n(E.current), r("done"));
        }, [n]),
        v = l.useCallback(() => {
            p.current || ((p.current = !0), r("done"));
        }, []);
    (l.useEffect(() => {
        "done" === s && (h.current && g.current?.focus({ preventScroll: !0 }), (h.current = !1));
    }, [s]),
        l.useEffect(() => {
            let e = I.current;
            ((I.current = !1),
                c &&
                    (x.current?.scrollIntoView({ block: "nearest", behavior: u ? "auto" : "smooth" }),
                    e || f.current?.focus({ preventScroll: !0 })));
        }, [c, u]));
    let C = l.useCallback(
            (e) => {
                c && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (h.current = !0), v());
            },
            [c, v],
        ),
        S = l.useCallback(() => {
            ((h.current = !0), A(), f.current?.blur());
        }, [A]),
        b = l.useCallback(() => {
            ((h.current = !0), v(), f.current?.blur());
        }, [v]),
        k = l.useCallback(() => {
            c || ((I.current = !0), j());
        }, [c, j]);
    return {
        isEditing: c,
        committedValue: t,
        editedValue: a,
        setEditedValue: d,
        onCommit: n,
        editButtonRef: g,
        wrapperRef: x,
        inputRef: f,
        handleStartEditing: j,
        handleCommit: A,
        handleCancel: v,
        onInputFocus: k,
        onInputKeyDown: l.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), b())
                    : (e.preventDefault(), S());
            },
            [S, b],
        ),
        onContainerKeyDown: C,
    };
}
function p(e, t) {
    return null != t && e.length > t ? x.intl.formatToPlainString(x.t.ICT5S6, { maxLength: t }) : void 0;
}
function I(e) {
    let { id: t, message: n, type: l } = e,
        s = "error" === l,
        r = s ? d.E : c.WarningIcon;
    return (0, i.jsxs)(u.E, {
        id: t,
        role: s ? "alert" : void 0,
        variant: "text-xs/normal",
        color: s ? "text-feedback-critical" : "text-feedback-warning",
        className: f.VP,
        children: [(0, i.jsx)(r, { size: "xs", color: "currentColor", className: s ? f.ik : f.QW }), n],
    });
}
function j(e) {
    let {
            isEditing: t,
            preview: n,
            placeholder: s,
            input: o,
            editButtonRef: d,
            editButtonAriaLabel: c,
            onStartEditing: m,
            previewErrorMessage: x,
            previewWarningMessage: h,
            className: p,
            wrapperRef: j,
            onBlur: E,
            onKeyDown: A,
        } = e,
        v = l.useRef(null),
        C = l.useId(),
        S = l.useId(),
        b = null == n,
        k = null != x,
        y = null != h && !k,
        T = k ? "error" : y ? "warning" : null,
        N = k ? x : h,
        R = null != T && null != N,
        w = [];
    (b && w.push(C), R && w.push(S));
    let L = w.length > 0 ? w.join(" ") : void 0;
    function P() {
        let { activeElement: e } = v.current?.ownerDocument ?? document;
        ((0, a.vq)(e, HTMLElement) && e.blur(), m());
    }
    let _ = (0, i.jsxs)("div", {
        ref: v,
        className: r()(f.LL, { [f.JD]: k, [f.xe]: y }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: P,
        children: [
            b
                ? (0, i.jsx)(u.E, {
                      id: C,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: f.qf,
                      children: s,
                  })
                : n,
            (0, i.jsx)(g.D, {
                innerRef: d,
                "aria-label": c,
                "aria-describedby": L,
                "aria-expanded": !1,
                onClick: (e) => {
                    (e.stopPropagation(), P());
                },
                focusProps: { ringTarget: v },
            }),
        ],
    });
    return (0, i.jsx)("div", {
        ref: j,
        className: r()(f.kL, p),
        onBlur: E,
        onKeyDown: A,
        children: (0, i.jsx)(
            "div",
            {
                children: t
                    ? o
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: f.VH, children: _ }),
                              R && (0, i.jsx)(I, { id: S, message: N, type: T }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
