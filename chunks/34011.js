t.d(n, { w: () => m });
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
    b = t(634701),
    f = t(969490),
    g = t(736541);
function m(e) {
    let {
            inputRef: n,
            id: t,
            defaultDirty: l = !1,
            description: m,
            disabled: x = !1,
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
            textVariant: L = "body-sm/normal",
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
            error: U && !x && G !== en ? void 0 : j,
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
        U && !x && H && I.current?.scrollIntoView({ block: "nearest", behavior: el.enabled ? "auto" : "smooth" });
    }, [U, x, H, el.enabled]),
        O !== X && (ee(O), Q(O), (G ?? "") === en && et(O ?? "")));
    let ec = "function" == typeof z ? z((U ? G : O) ?? "", { focused: U }) : U ? null : z,
        eh = null != ec,
        ep = i()(b.hF, { [b.c1]: S }),
        ev = {
            ...V,
            ref: B,
            className: i()(ep, b.ZZ, { [f.qD]: S }),
            disabled: x,
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
        eb = null == G || "" === G,
        ef = (eb ? _ : G) ?? "",
        eg = eh ? ec : `${ef}\u200b`,
        em = x || A || M?.disabled,
        ex = (0, a.jsx)(c.D, {
            id: t,
            description: m,
            disabled: x,
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
                    className: i()(b.kL, "inherit" !== L && g[L], {
                        [b.V4]: eh,
                        [b.JD]: ei,
                        [b.j9]: null != N,
                        [b.tY]: null != K,
                        [b.$7]: "sm" === K,
                        [b.pH]: null != M,
                    }),
                    "data-disabled": x,
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
                            className: i()(ep, b.St, { [b.tb]: !eh && eb, [b.gO]: null != N }),
                            style: null != N ? { "--custom-editable-text-max-rows": N } : void 0,
                            children: eg,
                        }),
                        null != M &&
                            (0, a.jsx)("div", {
                                className: b.ZY,
                                children: (0, a.jsx)(p.m, {
                                    asContainer: !0,
                                    ariaHidden: !0,
                                    shouldShow: !em,
                                    text: M.tooltip ?? M["aria-label"],
                                    children: (0, a.jsx)(o.K, {
                                        buttonRef: M.buttonRef,
                                        "aria-haspopup": M["aria-haspopup"],
                                        "aria-label": M["aria-label"],
                                        disabled: em,
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
    return (0, a.jsx)("div", { ref: I, className: i()(b.zr, { [b.N8]: !k }), children: ex });
}
