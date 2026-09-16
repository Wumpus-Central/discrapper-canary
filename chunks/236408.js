t.d(a, { A: () => f });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    i = t.n(r),
    u = t(612324),
    s = t(281595),
    d = t(452027),
    o = t(259678),
    c = t(866665),
    m = t(408278),
    h = t(650583),
    p = t(523600),
    v = t(969490),
    b = t(736541);
function f(e) {
    let {
            inputRef: a,
            id: t,
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
            onKeyDown: q,
            paddingBlock: A = "sm",
            paddingInline: E = "md",
            preview: P,
            readOnly: Y = !1,
            required: Z,
            size: $,
            textVariant: z = "text-sm/normal",
            trailing: B,
            value: F,
            ...H
        } = e,
        { maxLength: J, placeholder: K } = H,
        L = (0, u.A)(a),
        O = n.useRef(null),
        [V, X] = n.useState(F),
        [_, G] = n.useState(!1),
        [I, Q] = n.useState(F),
        U = n.useRef(""),
        W = n.useRef(!1),
        ee = n.useRef(!1),
        {
            hasError: ea,
            errorMessage: et,
            setShouldValidate: el,
        } = (0, s.Y)({ defaultDirty: r, error: x, maxLength: J, minLength: M, validateOn: "change", value: V });
    F !== I && (Q(F), X(F));
    let en = "function" == typeof P ? P((_ ? V : F) ?? "", { focused: _ }) : _ ? null : P,
        er = null != en,
        ei = i()(p.hF, { [p.c1]: C }),
        eu = {
            ...H,
            ref: L,
            className: i()(ei, p.ZZ, { [v.qD]: C }),
            disabled: g,
            minLength: M,
            onBlur: function (e) {
                (G(!1),
                    (ee.current = !1),
                    Y ||
                        (W.current ||
                        !(function (e, a, t) {
                            let { length: l } = e ?? "";
                            return (null == a || l >= a) && (null == t || l <= t);
                        })(V, M, J)
                            ? ((W.current = !1), X(U.current), el(r), R?.(U.current))
                            : T?.(V ?? "")),
                    N?.(e));
            },
            onChange: function (e) {
                (X(e.currentTarget.value), el(!0), R?.(e.currentTarget.value));
            },
            onFocus: function (e) {
                let a = e.currentTarget;
                ((U.current = a.value),
                    G(!0),
                    ee.current || a.setSelectionRange(a.value.length, a.value.length),
                    D?.(e));
            },
            onKeyDown: function (e) {
                (q?.(e),
                    e.defaultPrevented ||
                        Y ||
                        (C || e.key !== h.dh.ENTER
                            ? e.key === h.dh.ESCAPE && (e.stopPropagation(), (W.current = !0), e.currentTarget.blur())
                            : e.currentTarget.blur()));
            },
            onMouseDown: function () {
                ee.current = !0;
            },
            readOnly: Y,
            required: Z,
            value: V ?? "",
        },
        es = null == V || "" === V,
        ed = (es ? K : V) ?? "",
        eo = er ? en : `${ed}\u200b`,
        ec = g || Y || B?.disabled,
        em = (0, l.jsx)(d.D, {
            id: t,
            description: f,
            disabled: g,
            errorMessage: ea ? et : void 0,
            helperText: ea ? void 0 : j,
            hideLabel: y,
            label: S,
            required: Z,
            children: (e) => {
                let { controlId: a, describedById: t, errorMessageId: n } = e,
                    r = { ...eu, id: a, "aria-describedby": t, "aria-errormessage": n, "aria-invalid": ea };
                return (0, l.jsxs)("div", {
                    ref: O,
                    className: i()(p.kL, "inherit" !== z && b[z], {
                        [p.V4]: er,
                        [p.JD]: ea,
                        [p.j9]: null != w,
                        [p.tY]: null != $,
                        [p.$7]: "sm" === $,
                        [p.pH]: null != B,
                    }),
                    "data-disabled": g,
                    "data-padding-block": A,
                    "data-padding-inline": E,
                    "data-read-only": Y,
                    children: [
                        (0, l.jsx)(o.vN, {
                            ringTarget: O,
                            children: C
                                ? (0, l.jsx)("textarea", { ...r, rows: 1 })
                                : (0, l.jsx)("input", { ...r, type: "text" }),
                        }),
                        (0, l.jsx)("div", {
                            "aria-hidden": "true",
                            className: i()(ei, p.St, { [p.tb]: !er && es, [p.gO]: null != w }),
                            style: null != w ? { "--custom-editable-text-max-rows": w } : void 0,
                            children: eo,
                        }),
                        null != B &&
                            (0, l.jsx)("div", {
                                className: p.ZY,
                                children: (0, l.jsx)(c.m, {
                                    asContainer: !0,
                                    ariaHidden: !0,
                                    shouldShow: !ec,
                                    text: B.tooltip ?? B["aria-label"],
                                    children: (0, l.jsx)(m.K, {
                                        buttonRef: B.buttonRef,
                                        "aria-haspopup": B["aria-haspopup"],
                                        "aria-label": B["aria-label"],
                                        disabled: ec,
                                        icon: B.icon,
                                        onClick: B.onClick,
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
    return (0, l.jsx)("div", { className: i()(p.zr, { [p.N8]: !k }), children: em });
}
