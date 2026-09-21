t.d(n, { w: () => g });
var a = t(477900),
    r = t(582128),
    l = t(503698),
    i = t.n(l),
    u = t(612324),
    s = t(844222),
    o = t(408278),
    d = t(559106),
    c = t(452027),
    h = t(281595),
    p = t(866665),
    v = t(650583),
    f = t(634701),
    b = t(969490),
    x = t(736541);
function g(e) {
    let {
            inputRef: n,
            id: t,
            defaultDirty: l = !1,
            description: g,
            disabled: m = !1,
            error: j,
            fullWidth: k = !0,
            helperText: y,
            hideLabel: C = !1,
            label: w,
            maxRows: N,
            minLength: R,
            multiline: S = !1,
            onBlur: D,
            onChange: E,
            onCommit: T,
            onFocus: P,
            onKeyDown: Y,
            paddingBlock: Z = "sm",
            paddingInline: q = "md",
            preview: z,
            readOnly: A = !1,
            required: F,
            scrollIntoViewOnFocus: H = !1,
            size: K,
            textVariant: L = "text-sm/normal",
            trailing: M,
            value: O,
            ...V
        } = e,
        { maxLength: $, placeholder: _ } = V,
        B = (0, u.A)(n),
        I = r.useRef(null),
        J = r.useRef(null),
        [G, Q] = r.useState(O),
        [U, W] = r.useState(!1),
        [X, ee] = r.useState(O),
        [en, et] = r.useState(O ?? ""),
        ea = r.useRef(!1),
        er = r.useRef(!1),
        { reducedMotion: el } = r.useContext(s.C),
        {
            hasError: ei,
            errorMessage: eu,
            setShouldValidate: es,
        } = (0, h.Y)({
            defaultDirty: l,
            error: U && !m && G !== en ? void 0 : j,
            maxLength: $,
            minLength: R,
            validateOn: "change",
            value: G,
        });
    function eo() {
        ((ea.current = !1), Q(en), es(l), E?.(en));
    }
    function ed() {
        ea.current &&
            ((function (e, n, t) {
                let { length: a } = e ?? "";
                return (null == n || a >= n) && (null == t || a <= t);
            })(G, R, $)
                ? ((ea.current = !1), et(G ?? ""), T?.(G ?? ""))
                : eo());
    }
    (r.useEffect(() => {
        U && !m && H && I.current?.scrollIntoView({ block: "nearest", behavior: el.enabled ? "auto" : "smooth" });
    }, [U, m, H, el.enabled]),
        O !== X && (ee(O), Q(O), (G ?? "") === en && et(O ?? "")));
    let ec = "function" == typeof z ? z((U ? G : O) ?? "", { focused: U }) : U ? null : z,
        eh = null != ec,
        ep = i()(f.hF, { [f.c1]: S }),
        ev = {
            ...V,
            ref: B,
            className: i()(ep, f.ZZ, { [b.qD]: S }),
            disabled: m,
            minLength: R,
            onBlur: function (e) {
                (W(!1), (er.current = !1), A || ed(), D?.(e));
            },
            onChange: function (e) {
                ((ea.current = !0), Q(e.currentTarget.value), es(!0), E?.(e.currentTarget.value));
            },
            onFocus: function (e) {
                let n = e.currentTarget;
                (et(n.value),
                    (ea.current = !0),
                    W(!0),
                    er.current || n.setSelectionRange(n.value.length, n.value.length),
                    P?.(e));
            },
            onKeyDown: function (e) {
                (Y?.(e),
                    e.defaultPrevented ||
                        A ||
                        e.nativeEvent.isComposing ||
                        (S || e.key !== v.dh.ENTER
                            ? e.key === v.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), eo())
                            : (e.preventDefault(), ed())));
            },
            onMouseDown: function () {
                er.current = !0;
            },
            readOnly: A,
            required: F,
            value: G ?? "",
        },
        ef = null == G || "" === G,
        eb = (ef ? _ : G) ?? "",
        ex = eh ? ec : `${eb}\u200b`,
        eg = m || A || M?.disabled,
        em = (0, a.jsx)(c.D, {
            id: t,
            description: g,
            disabled: m,
            errorMessage: ei ? eu : void 0,
            helperText: ei ? void 0 : y,
            hideLabel: C,
            label: w,
            required: F,
            children: (e) => {
                let { controlId: n, describedById: t, errorMessageId: r } = e,
                    l = { ...ev, id: n, "aria-describedby": t, "aria-errormessage": r, "aria-invalid": ei };
                return (0, a.jsxs)("div", {
                    ref: J,
                    className: i()(f.kL, "inherit" !== L && x[L], {
                        [f.V4]: eh,
                        [f.JD]: ei,
                        [f.j9]: null != N,
                        [f.tY]: null != K,
                        [f.$7]: "sm" === K,
                        [f.pH]: null != M,
                    }),
                    "data-disabled": m,
                    "data-padding-block": Z,
                    "data-padding-inline": q,
                    "data-read-only": A,
                    children: [
                        (0, a.jsx)(d.vN, {
                            ringTarget: J,
                            children: S
                                ? (0, a.jsx)("textarea", { ...l, rows: 1 })
                                : (0, a.jsx)("input", { ...l, type: "text" }),
                        }),
                        (0, a.jsx)("div", {
                            "aria-hidden": "true",
                            className: i()(ep, f.St, { [f.tb]: !eh && ef, [f.gO]: null != N }),
                            style: null != N ? { "--custom-editable-text-max-rows": N } : void 0,
                            children: ex,
                        }),
                        null != M &&
                            (0, a.jsx)("div", {
                                className: f.ZY,
                                children: (0, a.jsx)(p.m, {
                                    asContainer: !0,
                                    ariaHidden: !0,
                                    shouldShow: !eg,
                                    text: M.tooltip ?? M["aria-label"],
                                    children: (0, a.jsx)(o.K, {
                                        buttonRef: M.buttonRef,
                                        "aria-haspopup": M["aria-haspopup"],
                                        "aria-label": M["aria-label"],
                                        disabled: eg,
                                        icon: M.icon,
                                        onClick: M.onClick,
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
    return (0, a.jsx)("div", { ref: I, className: i()(f.zr, { [f.N8]: !k }), children: em });
}
