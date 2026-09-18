a.d(t, { A: () => g });
var n = a(477900),
    l = a(582128),
    r = a(503698),
    i = a.n(r),
    u = a(612324),
    s = a(844222),
    o = a(281595),
    d = a(452027),
    c = a(259678),
    v = a(866665),
    m = a(408278),
    p = a(650583),
    h = a(523600),
    f = a(969490),
    b = a(736541);
function g(e) {
    let {
            inputRef: t,
            id: a,
            defaultDirty: r = !1,
            description: g,
            disabled: x = !1,
            error: k,
            fullWidth: j = !0,
            helperText: y,
            hideLabel: C = !1,
            label: S,
            maxRows: w,
            minLength: M,
            multiline: N = !1,
            onBlur: R,
            onChange: D,
            onCommit: E,
            onFocus: T,
            onKeyDown: q,
            paddingBlock: A = "sm",
            paddingInline: P = "md",
            preview: V,
            readOnly: Y = !1,
            required: Z,
            scrollIntoViewOnFocus: $ = !1,
            size: z,
            textVariant: B = "text-sm/normal",
            trailing: F,
            value: H,
            ...J
        } = e,
        { maxLength: K, placeholder: L } = J,
        O = (0, u.A)(t),
        X = l.useRef(null),
        _ = l.useRef(null),
        [I, G] = l.useState(H),
        [Q, U] = l.useState(!1),
        [W, ee] = l.useState(H),
        [et, ea] = l.useState(H ?? ""),
        en = l.useRef(!1),
        el = l.useRef(!1),
        { reducedMotion: er } = l.useContext(s.C),
        {
            hasError: ei,
            errorMessage: eu,
            setShouldValidate: es,
        } = (0, o.Y)({
            defaultDirty: r,
            error: Q && !x && I !== et ? void 0 : k,
            maxLength: K,
            minLength: M,
            validateOn: "change",
            value: I,
        });
    function eo() {
        ((en.current = !1), G(et), es(r), D?.(et));
    }
    function ed() {
        en.current &&
            ((function (e, t, a) {
                let { length: n } = e ?? "";
                return (null == t || n >= t) && (null == a || n <= a);
            })(I, M, K)
                ? ((en.current = !1), ea(I ?? ""), E?.(I ?? ""))
                : eo());
    }
    (l.useEffect(() => {
        Q && !x && $ && X.current?.scrollIntoView({ block: "nearest", behavior: er.enabled ? "auto" : "smooth" });
    }, [Q, x, $, er.enabled]),
        H !== W && (ee(H), G(H), (I ?? "") === et && ea(H ?? "")));
    let ec = "function" == typeof V ? V((Q ? I : H) ?? "", { focused: Q }) : Q ? null : V,
        ev = null != ec,
        em = i()(h.hF, { [h.c1]: N }),
        ep = {
            ...J,
            ref: O,
            className: i()(em, h.ZZ, { [f.qD]: N }),
            disabled: x,
            minLength: M,
            onBlur: function (e) {
                (U(!1), (el.current = !1), Y || ed(), R?.(e));
            },
            onChange: function (e) {
                ((en.current = !0), G(e.currentTarget.value), es(!0), D?.(e.currentTarget.value));
            },
            onFocus: function (e) {
                let t = e.currentTarget;
                (ea(t.value),
                    (en.current = !0),
                    U(!0),
                    el.current || t.setSelectionRange(t.value.length, t.value.length),
                    T?.(e));
            },
            onKeyDown: function (e) {
                (q?.(e),
                    e.defaultPrevented ||
                        Y ||
                        e.nativeEvent.isComposing ||
                        (N || e.key !== p.dh.ENTER
                            ? e.key === p.dh.ESCAPE && (e.preventDefault(), e.stopPropagation(), eo())
                            : (e.preventDefault(), ed())));
            },
            onMouseDown: function () {
                el.current = !0;
            },
            readOnly: Y,
            required: Z,
            value: I ?? "",
        },
        eh = null == I || "" === I,
        ef = (eh ? L : I) ?? "",
        eb = ev ? ec : `${ef}\u200b`,
        eg = x || Y || F?.disabled,
        ex = (0, n.jsx)(d.D, {
            id: a,
            description: g,
            disabled: x,
            errorMessage: ei ? eu : void 0,
            helperText: ei ? void 0 : y,
            hideLabel: C,
            label: S,
            required: Z,
            children: (e) => {
                let { controlId: t, describedById: a, errorMessageId: l } = e,
                    r = { ...ep, id: t, "aria-describedby": a, "aria-errormessage": l, "aria-invalid": ei };
                return (0, n.jsxs)("div", {
                    ref: _,
                    className: i()(h.kL, "inherit" !== B && b[B], {
                        [h.V4]: ev,
                        [h.JD]: ei,
                        [h.j9]: null != w,
                        [h.tY]: null != z,
                        [h.$7]: "sm" === z,
                        [h.pH]: null != F,
                    }),
                    "data-disabled": x,
                    "data-padding-block": A,
                    "data-padding-inline": P,
                    "data-read-only": Y,
                    children: [
                        (0, n.jsx)(c.vN, {
                            ringTarget: _,
                            children: N
                                ? (0, n.jsx)("textarea", { ...r, rows: 1 })
                                : (0, n.jsx)("input", { ...r, type: "text" }),
                        }),
                        (0, n.jsx)("div", {
                            "aria-hidden": "true",
                            className: i()(em, h.St, { [h.tb]: !ev && eh, [h.gO]: null != w }),
                            style: null != w ? { "--custom-editable-text-max-rows": w } : void 0,
                            children: eb,
                        }),
                        null != F &&
                            (0, n.jsx)("div", {
                                className: h.ZY,
                                children: (0, n.jsx)(v.m, {
                                    asContainer: !0,
                                    ariaHidden: !0,
                                    shouldShow: !eg,
                                    text: F.tooltip ?? F["aria-label"],
                                    children: (0, n.jsx)(m.K, {
                                        buttonRef: F.buttonRef,
                                        "aria-haspopup": F["aria-haspopup"],
                                        "aria-label": F["aria-label"],
                                        disabled: eg,
                                        icon: F.icon,
                                        onClick: F.onClick,
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
    return (0, n.jsx)("div", { ref: X, className: i()(h.zr, { [h.N8]: !j }), children: ex });
}
