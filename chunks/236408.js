a.d(t, { A: () => f });
var l = a(477900),
    n = a(582128),
    r = a(503698),
    i = a.n(r),
    u = a(612324),
    s = a(281595),
    o = a(452027),
    d = a(259678),
    c = a(866665),
    m = a(408278),
    h = a(650583),
    p = a(523600),
    v = a(969490),
    b = a(736541);
function f(e) {
    let {
            inputRef: t,
            id: a,
            defaultDirty: r = !1,
            description: f,
            disabled: g = !1,
            error: x,
            fullWidth: k = !0,
            helperText: j,
            hideLabel: y = !1,
            label: S,
            maxRows: w,
            minLength: M,
            multiline: C = !1,
            onBlur: N,
            onChange: R,
            onCommit: T,
            onFocus: D,
            paddingBlock: q = "sm",
            paddingInline: A = "md",
            preview: E,
            readOnly: P = !1,
            required: Y,
            size: Z,
            textVariant: $ = "text-sm/normal",
            trailing: z,
            value: B,
            ...F
        } = e,
        { maxLength: H, placeholder: J } = F,
        K = (0, u.A)(t),
        L = n.useRef(null),
        [O, V] = n.useState(B),
        [X, _] = n.useState(!1),
        [G, I] = n.useState(B),
        Q = n.useRef(""),
        U = n.useRef(!1),
        W = n.useRef(!1),
        {
            hasError: ee,
            errorMessage: et,
            setShouldValidate: ea,
        } = (0, s.Y)({ defaultDirty: r, error: x, maxLength: H, minLength: M, validateOn: "change", value: O });
    B !== G && (I(B), V(B));
    let el = "function" == typeof E ? E((X ? O : B) ?? "", { focused: X }) : X ? null : E,
        en = null != el,
        er = i()(p.hF, { [p.c1]: C }),
        ei = {
            ...F,
            ref: K,
            className: i()(er, p.ZZ, { [v.qD]: C }),
            disabled: g,
            minLength: M,
            onBlur: function (e) {
                (_(!1),
                    (W.current = !1),
                    P ||
                        (U.current ||
                        !(function (e, t, a) {
                            let { length: l } = e ?? "";
                            return (null == t || l >= t) && (null == a || l <= a);
                        })(O, M, H)
                            ? ((U.current = !1), V(Q.current), ea(r), R?.(Q.current))
                            : T?.(O ?? "")),
                    N?.(e));
            },
            onChange: function (e) {
                (V(e.currentTarget.value), ea(!0), R?.(e.currentTarget.value));
            },
            onFocus: function (e) {
                let t = e.currentTarget;
                ((Q.current = t.value),
                    _(!0),
                    W.current || t.setSelectionRange(t.value.length, t.value.length),
                    D?.(e));
            },
            onKeyDown: function (e) {
                P ||
                    (C || e.key !== h.dh.ENTER
                        ? e.key === h.dh.ESCAPE && (e.stopPropagation(), (U.current = !0), e.currentTarget.blur())
                        : e.currentTarget.blur());
            },
            onMouseDown: function () {
                W.current = !0;
            },
            readOnly: P,
            required: Y,
            value: O ?? "",
        },
        eu = null == O || "" === O,
        es = (eu ? J : O) ?? "",
        eo = en ? el : `${es}\u200b`,
        ed = g || P || z?.disabled,
        ec = (0, l.jsx)(o.D, {
            id: a,
            description: f,
            disabled: g,
            errorMessage: ee ? et : void 0,
            helperText: ee ? void 0 : j,
            hideLabel: y,
            label: S,
            required: Y,
            children: (e) => {
                let { controlId: t, describedById: a, errorMessageId: n } = e,
                    r = { ...ei, id: t, "aria-describedby": a, "aria-errormessage": n, "aria-invalid": ee };
                return (0, l.jsxs)("div", {
                    ref: L,
                    className: i()(p.kL, "inherit" !== $ && b[$], {
                        [p.V4]: en,
                        [p.JD]: ee,
                        [p.j9]: null != w,
                        [p.tY]: null != Z,
                        [p.$7]: "sm" === Z,
                        [p.pH]: null != z,
                    }),
                    "data-disabled": g,
                    "data-padding-block": q,
                    "data-padding-inline": A,
                    "data-read-only": P,
                    children: [
                        (0, l.jsx)(d.vN, {
                            ringTarget: L,
                            children: C
                                ? (0, l.jsx)("textarea", { ...r, rows: 1 })
                                : (0, l.jsx)("input", { ...r, type: "text" }),
                        }),
                        (0, l.jsx)("div", {
                            "aria-hidden": "true",
                            className: i()(er, p.St, { [p.tb]: !en && eu, [p.gO]: null != w }),
                            style: null != w ? { "--custom-editable-text-max-rows": w } : void 0,
                            children: eo,
                        }),
                        null != z &&
                            (0, l.jsx)("div", {
                                className: p.ZY,
                                children: (0, l.jsx)(c.m, {
                                    asContainer: !0,
                                    ariaHidden: !0,
                                    shouldShow: !ed,
                                    text: z.tooltip ?? z.label,
                                    children: (0, l.jsx)(m.K, {
                                        buttonRef: z.buttonRef,
                                        "aria-haspopup": z.hasPopup,
                                        "aria-label": z.label,
                                        disabled: ed,
                                        icon: z.icon,
                                        onClick: z.onClick,
                                        size: "sm",
                                        type: "button",
                                        variant: "icon-only",
                                    }),
                                }),
                            }),
                    ],
                });
            },
        });
    return (0, l.jsx)("div", { className: i()(p.zr, { [p.N8]: !k }), children: ec });
}
