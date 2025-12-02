n.d(t, {
    Ct: () => M,
    px: () => U,
    uz: () => j,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(423802),
    l = n(61247),
    c = n(483566),
    u = n(590154),
    d = n(448814),
    f = n(194255),
    p = n(793030),
    _ = n(692547),
    m = n(463208),
    h = n(481060),
    g = n(607070),
    E = n(199823),
    b = n(713072),
    y = n(747344),
    O = n(626921),
    v = n(415540),
    S = n(483753),
    I = n(298200),
    T = n(388032),
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
function P(e) {
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
function R(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
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
function j(e) {
    var { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5, isOpen: o, setIsOpen: l, options: c } = e,
        u = D(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]);
    let {
            selectionMode: d,
            disabled: f,
            readOnly: p,
            closeOnSelect: _,
            formatOption: m,
            onSelectionChange: h,
            value: g,
            customMatchSorter: E,
            matchSorterOptions: b,
            required: O,
        } = u,
        S = i.useId(),
        I = i.useRef(null),
        [T, A] = i.useState(null),
        [C, N] = i.useState(!1),
        [R, w] = i.useState(""),
        [x, j] = i.useState(""),
        {
            options: M,
            loading: k,
            onQueryChange: U,
        } = (0, v.U)({
            active: null == o || o,
            options: c,
            renderOption: m,
        }),
        G = i.useCallback((e, t) => {
            j(e), w(null != t ? t : e);
        }, []);
    i.useEffect(() => {
        U(R);
    }, [U, R]),
        i.useEffect(() => {
            o || A(null);
        }, [o, A]);
    let Z = i.useMemo(() => ("" === R ? M : null != E ? E(M, R) : (0, s.Lu)(M, R, null != b ? b : L)), [M, R, E, b]),
        B = i.useRef(void 0),
        F = i.useMemo(
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
            G(null != (t = null == (e = B.current) ? void 0 : e.label) ? t : "", "");
        }
    }, [o, G]);
    let V = f || p,
        H = i.useCallback(
            (e) => {
                var t, n, r, i;
                if (V || (O && 0 === e.length)) return;
                let a = Array.from(e);
                "multiple" === d && a.length < 1
                    ? h([])
                    : "multiple" === d
                      ? h(a.map((e) => e.value))
                      : h(null != (n = null == (t = a[0]) ? void 0 : t.value) ? n : null),
                    _ && o && (null == l || l(!1)),
                    "single" === d && G(null != (i = null == (r = a[0]) ? void 0 : r.label) ? i : "", ""),
                    N(!1);
            },
            [V, d, h, _, o, l, O, G],
        ),
        Y = F.length > 0;
    return (0, r.jsx)(y.Z.Provider, {
        value: P(
            {
                activeDescendantIndex: T,
                setActiveDescendantIndex: A,
                listBoxId: S,
                inputFieldRef: I,
                isInert: V,
                isCollapsible: n,
                hasValue: Y,
                value: g,
                options: M,
                filteredOptions: Z,
                selectedOptions: F,
                maxOptionsVisible: a,
                query: x,
                setQuery: G,
                loading: k,
                handleSelectionChange: H,
                isOpen: o,
                setIsOpen: l,
                isEditing: C,
                setIsEditing: N,
            },
            u,
        ),
        children: t,
    });
}
function M(e) {
    var { ref: t } = e,
        n = D(e, ["ref"]);
    let { fieldProps: a, props: o } = (0, c.X)(n),
        s = (0, h.dQu)(_.Z.modules.select.MAX_WIDTH),
        l = i.useMemo(() => ({ horizontalControlColumnWidth: "minmax(".concat(s, ", auto)") }), [s]);
    return (0, r.jsx)(
        c.g,
        w(P({}, a), {
            "data-mana-component": "combobox",
            layoutConfig: l,
            children: (0, r.jsx)(k, w(P({}, o), { ref: t })),
        }),
    );
}
function k(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a = T.intl.string(I.default["A+pfVR"]),
            hideTags: s,
            name: c,
            form: d,
            showChevronButton: f = !1,
            onQueryChange: _,
            onFocus: h,
            onBlur: g,
            onKeyDown: v,
            wrapTags: N,
            ref: R,
        } = e,
        D = i.useRef(null),
        x = i.useRef(null),
        L = i.useRef(null),
        j = i.useContext(u.z),
        {
            activeDescendantIndex: M,
            setActiveDescendantIndex: k,
            selectionMode: U,
            disabled: G,
            readOnly: Z,
            loading: B,
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
        el = null != M ? (0, S.cA)(H, M) : void 0;
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
                    null == h || h(e),
                    null == (t = x.current) ||
                        t.setSelectionRange(
                            null != (n = null == er ? void 0 : er.length) ? n : 0,
                            null != (r = null == er ? void 0 : er.length) ? r : 0,
                        );
            },
            [h, eo, er],
        ),
        ef = i.useCallback(() => {
            K || null == $ || $(!0);
        }, [$, K]),
        ep = i.useCallback(
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
    let e_ = i.useCallback(() => {
            var e;
            K || (null == $ || $(!0), null == (e = x.current) || e.focus());
        }, [$, K]),
        em = i.useCallback(() => {
            var e;
            null == (e = x.current) || e.select();
        }, []),
        eh = i.useCallback(
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
                        if ((e.preventDefault(), e.stopPropagation(), null == M || 0 === t)) return;
                        let r = en[M];
                        if (!0 === r.disabled || (V && 1 === et.length && et.includes(r))) return;
                        X("single" === U ? [r] : (0, S.cq)(U, et, r));
                        break;
                    case "Backspace":
                        if ("multiple" === U && "" === er && et.length > 0 && null != D.current) {
                            var i;
                            e.preventDefault(), e.stopPropagation(), null == (i = D.current.lastChild) || i.focus();
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
            [U, V, F, q, W, v, eu, X, et, er, $, en, M, k],
        ),
        eE = i.useCallback(
            (e) => {
                eo(!0), ei(e.target.value), null == $ || $(!0), null == _ || _(e), k(null);
            },
            [_, eo, ei, $, k],
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
                        w(P({}, e), {
                            onClick: em,
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
                        accessibilityHint: T.intl.string(I.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(p.QSK, {
                listRef: D,
                label: T.intl.string(I.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: eh,
            });
        }, [U, G, em, eh, ea, et, s]),
        ey = (0, l.Z)(Y, R);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.q, {
                ref: ey,
                disabled: G,
                readOnly: Z,
                loading: B,
                clearable: F,
                fullWidth: !0,
                showChevronButton: f,
                isOpen: !!J,
                isInert: K,
                hasValue: q,
                hasError: (null == j ? void 0 : j.errorMessageId) != null,
                handleToggle: ec,
                handleClear: eu,
                children: (0, r.jsx)("div", {
                    className: o()(A.comboBoxInputScroller, {
                        [A.hasTags]: es,
                        [A.wrapTags]: es && N,
                    }),
                    onClick: e_,
                    children: (0, r.jsxs)("div", {
                        className: A.comboBoxInputContainer,
                        children: [
                            eb,
                            (0, r.jsx)(p.tEY, {
                                ringTarget: Y,
                                children: (0, r.jsx)(m.I, {
                                    ref: x,
                                    id: t,
                                    className: o()(C.input, A.comboBoxInput, {
                                        [A.hiddenVisually]: "single" === U && q && !ea,
                                    }),
                                    autoFocus: n,
                                    placeholder: a,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: Z,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": B,
                                    "aria-controls": H,
                                    "aria-expanded": !z || J,
                                    "aria-activedescendant": el,
                                    "aria-labelledby": "".concat(null == j ? void 0 : j.labelId),
                                    "aria-describedby": "".concat(null == j ? void 0 : j.describedById),
                                    "aria-errormessage": null == j ? void 0 : j.errorMessageId,
                                    "aria-invalid": (null == j ? void 0 : j.errorMessageId) != null,
                                    value: null != er ? er : "",
                                    onChange: eE,
                                    onFocus: ed,
                                    onBlur: ep,
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
            listBoxId: _,
            required: m,
            disabled: h,
            handleSelectionChange: E,
            setIsOpen: b,
            query: O,
            loading: v,
        } = (0, y.T)(),
        { i18n: S } = i.useContext(p.KJG);
    return (0, r.jsx)(d.w, {
        id: _,
        required: m,
        disabled: h,
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
                          message: null == O || "" === O ? S.LISTBOX_EMPTY_STATE : S.LISTBOX_EMPTY_STATE_WITH_QUERY(O),
                      }),
        maxVisibleItems: a,
        loading: v,
        onFocus: () => {
            g.Z.keyboardModeEnabled && (null == b || b(!1));
        },
    });
}
