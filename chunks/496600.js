n.d(t, {
    Ct: () => j,
    px: () => U,
    uz: () => M,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(423802),
    l = n(61247),
    c = n(483566),
    u = n(590154),
    d = n(448814),
    f = n(194255),
    _ = n(793030),
    p = n(692547),
    h = n(463208),
    m = n(481060),
    g = n(607070),
    E = n(199823),
    b = n(713072),
    y = n(747344),
    O = n(626921),
    v = n(415540),
    I = n(483753),
    T = n(681287),
    S = n(388032),
    A = n(680765),
    C = n(430490);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = { keys: ["label"] };
function M(e) {
    var { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5, isOpen: o, setIsOpen: l, options: c } = e,
        u = w(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]);
    let {
            selectionMode: d,
            disabled: f,
            readOnly: _,
            closeOnSelect: p,
            formatOption: h,
            onSelectionChange: m,
            value: g,
            matchSorterOptions: E,
            required: b,
        } = u,
        O = i.useId(),
        I = i.useRef(null),
        [T, S] = i.useState(null),
        [A, C] = i.useState(!1),
        [N, P] = i.useState(""),
        [D, x] = i.useState(""),
        {
            options: M,
            loading: j,
            onQueryChange: k,
        } = (0, v.U)({
            active: null == o || o,
            options: c,
            renderOption: h,
        }),
        U = i.useCallback((e, t) => {
            x(e), P(null != t ? t : e);
        }, []);
    i.useEffect(() => {
        k(N);
    }, [k, N]),
        i.useEffect(() => {
            o || S(null);
        }, [o, S]);
    let G = i.useMemo(() => ("" === N ? M : (0, s.Lu)(M, N, null != E ? E : L)), [M, N, E]),
        B = i.useRef(void 0),
        Z = i.useMemo(
            () =>
                ("single" === d && (B.current = M.find((e) => e.value === g)),
                null == g || (Array.isArray(g) && 0 === g.length))
                    ? []
                    : (Array.isArray(g) ? g : [g]).map((e) => M.find((t) => t.value === e)).filter((e) => null != e),
            [g, M, d],
        );
    i.useEffect(() => {
        if (o) {
            var e, t;
            U(null != (t = null == (e = B.current) ? void 0 : e.label) ? t : "", "");
        }
    }, [o, U]);
    let F = f || _,
        V = i.useCallback(
            (e) => {
                var t, n, r, i;
                if (F || (b && 0 === e.length)) return;
                let a = Array.from(e);
                "multiple" === d && a.length < 1
                    ? m([])
                    : "multiple" === d
                      ? m(a.map((e) => e.value))
                      : m(null != (n = null == (t = a[0]) ? void 0 : t.value) ? n : null),
                    p && o && (null == l || l(!1)),
                    "single" === d && U(null != (i = null == (r = a[0]) ? void 0 : r.label) ? i : "", ""),
                    C(!1);
            },
            [F, d, m, p, o, l, b, U],
        ),
        H = Z.length > 0;
    return (0, r.jsx)(y.Z.Provider, {
        value: R(
            {
                activeDescendantIndex: T,
                setActiveDescendantIndex: S,
                listBoxId: O,
                inputFieldRef: I,
                isInert: F,
                isCollapsible: n,
                hasValue: H,
                value: g,
                options: M,
                filteredOptions: G,
                selectedOptions: Z,
                maxOptionsVisible: a,
                query: D,
                setQuery: U,
                loading: j,
                handleSelectionChange: V,
                isOpen: o,
                setIsOpen: l,
                isEditing: A,
                setIsEditing: C,
            },
            u,
        ),
        children: t,
    });
}
function j(e) {
    var { ref: t } = e,
        n = w(e, ["ref"]);
    let { fieldProps: a, props: o } = (0, c.X)(n),
        s = (0, m.dQu)(p.Z.modules.select.MAX_WIDTH),
        l = i.useMemo(() => ({ horizontalControlColumnWidth: "minmax(".concat(s, ", auto)") }), [s]);
    return (0, r.jsx)(
        c.g,
        D(R({}, a), {
            "data-mana-component": "combobox",
            layoutConfig: l,
            children: (0, r.jsx)(k, D(R({}, o), { ref: t })),
        }),
    );
}
function k(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a = S.intl.string(T.default["A+pfVR"]),
            hideTags: s,
            name: c,
            form: d,
            showChevronButton: f = !1,
            onQueryChange: p,
            onFocus: m,
            onBlur: g,
            onKeyDown: v,
            wrapTags: N,
            ref: P,
        } = e,
        w = i.useRef(null),
        x = i.useRef(null),
        L = i.useRef(null),
        M = i.useContext(u.z),
        {
            activeDescendantIndex: j,
            setActiveDescendantIndex: k,
            selectionMode: U,
            disabled: G,
            readOnly: B,
            loading: Z,
            clearable: F,
            required: V,
            listBoxId: H,
            inputFieldRef: Y,
            shouldFocusWrap: W,
            isInert: K,
            isCollapsible: z,
            hasValue: q,
            handleSelectionChange: X,
            onSelectionChange: Q,
            isOpen: J,
            setIsOpen: $,
            options: ee,
            selectedOptions: et,
            filteredOptions: en,
            query: er,
            setQuery: ei,
            isEditing: ea,
            setIsEditing: eo,
        } = (0, y.T)(),
        es = "multiple" === U && q,
        el = null != j ? (0, I.cA)(H, j) : void 0;
    i.useEffect(() => {
        var e;
        null != el &&
            (null == (e = document.getElementById(el)) ||
                e.scrollIntoView({
                    behavior: "instant",
                    block: "nearest",
                }));
    }, [el]);
    let ec = i.useCallback(() => {
            K || null == $ || $(!J);
        }, [K, J, $]),
        eu = i.useCallback(() => {
            var e;
            "multiple" === U ? Q([]) : Q(null), ei(""), null == (e = x.current) || e.focus();
        }, [Q, U, ei]),
        ed = i.useCallback(
            (e) => {
                var t, n, r;
                eo(!0),
                    null == m || m(e),
                    null == (t = x.current) ||
                        t.setSelectionRange(
                            null != (n = null == er ? void 0 : er.length) ? n : 0,
                            null != (r = null == er ? void 0 : er.length) ? r : 0,
                        );
            },
            [m, eo, er],
        ),
        ef = i.useCallback(() => {
            K || null == $ || $(!0);
        }, [$, K]),
        e_ = i.useCallback(
            (e) => {
                var t;
                (null == (t = e.relatedTarget) ? void 0 : t.closest('[data-list-id="'.concat(H, '"]'))) == null &&
                    (eo(!1), null == $ || $(!1), null == g || g(e));
            },
            [g, $, H, eo],
        );
    i.useEffect(() => {
        es &&
            !N &&
            (L.current = setTimeout(() => {
                var e;
                null == (e = x.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            }, 10));
    }, [et, es, N]);
    let ep = i.useCallback(() => {
            var e;
            K || (null == $ || $(!0), null == (e = x.current) || e.focus());
        }, [$, K]),
        eh = i.useCallback(() => {
            var e;
            null == (e = x.current) || e.select();
        }, []),
        em = i.useCallback(
            (e) => {
                if (K) return;
                let t = Array.from(e)[0];
                X(et.filter((e) => e.id !== t));
            },
            [X, et, K],
        ),
        eg = i.useCallback(
            (e) => {
                let t = en.length,
                    n = 1;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), null == $ || $(!0), e.altKey))
                        )
                            return;
                        k((e) => {
                            if (null === e) return 0;
                            let r = e + n;
                            return r >= t && W ? 0 : Math.min(r, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            k((e) => {
                                if (null === e) return 0;
                                let r = e - n;
                                return r < 0 && W ? t - 1 : Math.max(r, 0);
                            }),
                            null == $ || $(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), null == j || 0 === t)) return;
                        let r = en[j];
                        if (!0 === r.disabled || (V && 1 === et.length && et.includes(r))) return;
                        X("single" === U ? [r] : (0, I.cq)(U, et, r));
                        break;
                    case "Backspace":
                        if ("multiple" === U && "" === er && et.length > 0 && null != w.current) {
                            var i;
                            e.preventDefault(), e.stopPropagation(), null == (i = w.current.lastChild) || i.focus();
                        }
                        break;
                    case "Escape":
                        q && F && (e.preventDefault(), e.stopPropagation(), eu());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        k(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        k(t - 1);
                }
                null == v || v(e);
            },
            [U, V, F, q, W, v, eu, X, et, er, $, en, j, k],
        ),
        eE = i.useCallback(
            (e) => {
                eo(!0), ei(e.target.value), null == $ || $(!0), null == p || p(e), k(null);
            },
            [p, eo, ei, $, k],
        ),
        eb = i.useMemo(() => {
            if (0 === et.length) return null;
            if ("single" === U) {
                if (ea) return null;
                let e = Array.from(et)[0];
                return (0, r.jsx)("div", {
                    className: A.singleSelectOption,
                    children: (0, r.jsx)(
                        b.W,
                        D(R({}, e), {
                            onClick: eh,
                            "aria-hidden": !0,
                            inInput: !0,
                        }),
                    ),
                });
            }
            if (s) return null;
            let e = Array.from(et).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: G || e.disabled,
                        accessibilityHint: S.intl.string(T.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(_.QSK, {
                listRef: w,
                label: S.intl.string(T.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: em,
            });
        }, [U, G, eh, em, ea, et, s]),
        ey = (0, l.Z)(Y, P);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.q, {
                ref: ey,
                disabled: G,
                readOnly: B,
                loading: Z,
                clearable: F,
                fullWidth: !0,
                showChevronButton: f,
                isOpen: !!J,
                isInert: K,
                hasValue: q,
                hasError: (null == M ? void 0 : M.errorMessageId) != null,
                handleToggle: ec,
                handleClear: eu,
                children: (0, r.jsx)("div", {
                    className: o()(A.comboBoxInputScroller, {
                        [A.hasTags]: es,
                        [A.wrapTags]: es && N,
                    }),
                    onClick: ep,
                    children: (0, r.jsxs)("div", {
                        className: A.comboBoxInputContainer,
                        children: [
                            eb,
                            (0, r.jsx)(_.tEY, {
                                ringTarget: Y,
                                children: (0, r.jsx)(h.I, {
                                    ref: x,
                                    id: t,
                                    className: o()(C.input, A.comboBoxInput, {
                                        [A.hiddenVisually]: "single" === U && q && !ea,
                                    }),
                                    autoFocus: n,
                                    placeholder: a,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: B,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": Z,
                                    "aria-controls": H,
                                    "aria-expanded": !z || J,
                                    "aria-activedescendant": el,
                                    "aria-labelledby": "".concat(null == M ? void 0 : M.labelId),
                                    "aria-describedby": "".concat(null == M ? void 0 : M.describedById),
                                    "aria-errormessage": null == M ? void 0 : M.errorMessageId,
                                    "aria-invalid": (null == M ? void 0 : M.errorMessageId) != null,
                                    value: null != er ? er : "",
                                    onChange: eE,
                                    onFocus: ed,
                                    onBlur: e_,
                                    onKeyDown: eg,
                                    onClick: ef,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(E.M, {
                name: c,
                form: d,
                disabled: K,
                selectionMode: U,
                selectedItems: et,
                onSelectionChange: X,
                listItems: ee,
            }),
        ],
    });
}
function U(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: a = 5 } = e,
        {
            filteredOptions: o,
            selectedOptions: s,
            options: l,
            activeDescendantIndex: c,
            selectionMode: u,
            listBoxId: p,
            required: h,
            disabled: m,
            handleSelectionChange: E,
            setIsOpen: b,
            query: O,
            loading: v,
        } = (0, y.T)(),
        { i18n: I } = i.useContext(_.KJG);
    return (0, r.jsx)(d.w, {
        id: p,
        required: h,
        disabled: m,
        items: null != o ? o : l,
        selectionMode: u,
        selectedItems: s,
        onSelectionChange: E,
        activeDescendantIndex: c,
        renderListItem: t,
        renderEmptyState:
            null != n
                ? n
                : () =>
                      (0, r.jsx)(f.z, {
                          message: null == O || "" === O ? I.LISTBOX_EMPTY_STATE : I.LISTBOX_EMPTY_STATE_WITH_QUERY(O),
                      }),
        maxVisibleItems: a,
        loading: v,
        onFocus: () => {
            g.Z.keyboardModeEnabled && (null == b || b(!1));
        },
    });
}
