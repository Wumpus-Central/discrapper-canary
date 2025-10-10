n.d(t, {
    Ct: () => x,
    px: () => j,
    uz: () => L,
}),
    n(388685),
    n(953529);
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
    p = n(463208),
    h = n(607070),
    m = n(199823),
    g = n(713072),
    E = n(747344),
    b = n(626921),
    y = n(415540),
    O = n(483753),
    v = n(490340),
    I = n(388032),
    T = n(680765),
    S = n(430490);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let D = { keys: ["label"] };
function L(e) {
    var { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5, isOpen: o, setIsOpen: l, options: c } = e,
        u = P(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]);
    let {
            selectionMode: d,
            disabled: f,
            readOnly: _,
            closeOnSelect: p,
            formatOption: h,
            onSelectionChange: m,
            value: g,
            matchSorterOptions: b,
        } = u,
        O = i.useId(),
        v = i.useRef(null),
        [I, T] = i.useState(null),
        [S, A] = i.useState(!1),
        [N, R] = i.useState(""),
        {
            options: w,
            loading: L,
            onQueryChange: x,
        } = (0, y.U)({
            active: null == o || o,
            options: c,
            renderOption: h,
        });
    i.useEffect(() => {
        x(N);
    }, [x, N]),
        i.useEffect(() => {
            o || T(null);
        }, [o, T]);
    let M = i.useMemo(() => ("" === N ? w : (0, s.Lu)(w, N, null != b ? b : D)), [w, N, b]),
        j = i.useMemo(
            () =>
                null == g || (Array.isArray(g) && 0 === g.length)
                    ? []
                    : (Array.isArray(g) ? g : [g]).map((e) => w.find((t) => t.value === e)).filter((e) => null != e),
            [g, w],
        ),
        k = f || _,
        U = i.useCallback(
            (e) => {
                if (k) return;
                let t = Array.from(e);
                if ("multiple" === d && t.length < 1) m([]);
                else if ("multiple" === d) m(t.map((e) => e.value));
                else {
                    var n, r;
                    m(null != (r = null == (n = t[0]) ? void 0 : n.value) ? r : null);
                }
                p && o && (null == l || l(!1)), A(!1);
            },
            [k, d, m, p, o, l],
        ),
        G = j.length > 0;
    return (0, r.jsx)(E.Z.Provider, {
        value: C(
            {
                activeDescendantIndex: I,
                setActiveDescendantIndex: T,
                listBoxId: O,
                inputFieldRef: v,
                isInert: k,
                isCollapsible: n,
                hasValue: G,
                value: g,
                options: w,
                filteredOptions: M,
                selectedOptions: j,
                maxOptionsVisible: a,
                query: N,
                setQuery: R,
                loading: L,
                handleSelectionChange: U,
                isOpen: o,
                setIsOpen: l,
                isEditing: S,
                setIsEditing: A,
            },
            u,
        ),
        children: t,
    });
}
function x(e) {
    var { hideLabel: t, description: n, helperText: i, errorMessage: a, successMessage: o, ref: s } = e,
        l = P(e, ["hideLabel", "description", "helperText", "errorMessage", "successMessage", "ref"]);
    let { id: u, required: d, label: f } = l;
    return (0, r.jsx)(c.g, {
        id: u,
        required: d,
        label: f,
        hideLabel: t,
        description: n,
        helperText: i,
        errorMessage: a,
        successMessage: o,
        "data-mana-component": "combobox",
        children: (0, r.jsx)(M, R(C({}, l), { ref: s })),
    });
}
function M(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a = I.intl.string(v.default["A+pfVV"]),
            hideTags: s,
            name: c,
            form: d,
            showChevronButton: f = !1,
            onQueryChange: h,
            onFocus: y,
            onBlur: A,
            onKeyDown: N,
            wrapTags: P,
            ref: w,
        } = e,
        D = i.useRef(null),
        L = i.useRef(null),
        x = i.useRef(null),
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
        } = (0, E.T)(),
        es = "multiple" === U && q,
        el = null != j ? (0, O.cA)(H, j) : void 0;
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
            "multiple" === U ? Q([]) : Q(null), null == (e = L.current) || e.focus();
        }, [Q, U]),
        ed = i.useCallback(
            (e) => {
                eo(!0), null == $ || $(!0), null == y || y(e);
            },
            [y, $, eo],
        ),
        ef = i.useCallback(
            (e) => {
                var t;
                (null == (t = e.relatedTarget) ? void 0 : t.closest('[data-list-id="'.concat(H, '"]'))) == null &&
                    (eo(!1), null == $ || $(!1), null == A || A(e));
            },
            [A, $, H, eo],
        );
    i.useEffect(() => {
        es &&
            !P &&
            (x.current = setTimeout(() => {
                var e;
                null == (e = L.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            }, 10));
    }, [et, es, P]);
    let e_ = i.useCallback(() => {
            var e;
            null == (e = L.current) || e.focus();
        }, []),
        ep = i.useCallback(() => {
            var e;
            null == (e = L.current) || e.select();
        }, []),
        eh = i.useCallback(
            (e) => {
                if (K) return;
                let t = Array.from(e)[0];
                X(et.filter((e) => e.id !== t));
            },
            [X, et, K],
        ),
        em = i.useCallback(
            (e) => {
                let t = en.length;
                switch (e.key) {
                    case "ArrowDown":
                        if (0 === t) return;
                        e.preventDefault(),
                            k((e) => {
                                if (null === e) return 0;
                                let n = e + 1;
                                return n >= t && (n = W ? 0 : e), n;
                            }),
                            null == $ || $(!0);
                        break;
                    case "ArrowUp":
                        if (0 === t) return;
                        e.preventDefault(),
                            k((e) => {
                                if (null === e) return 0;
                                let n = e - 1;
                                return n < 0 && (n = W ? t - 1 : 0), n;
                            }),
                            null == $ || $(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), null == j || 0 === t)) return;
                        let n = en[j];
                        if (!0 === n.disabled || (V && 1 === et.length && et.includes(n))) return;
                        X((0, O.cq)(U, et, n));
                        break;
                    case "Backspace":
                        if ("multiple" === U && "" === er && et.length > 0 && null != D.current) {
                            var r;
                            e.preventDefault(), e.stopPropagation(), null == (r = D.current.lastChild) || r.focus();
                        }
                        break;
                    case "Escape":
                        q && F && (e.preventDefault(), e.stopPropagation(), eu());
                }
                null == N || N(e);
            },
            [U, V, F, q, W, N, eu, X, et, er, $, en, j, k],
        ),
        eg = i.useCallback(
            (e) => {
                eo(!0), ei(e.target.value), null == $ || $(!0), null == h || h(e), k(null);
            },
            [h, eo, ei, $, k],
        ),
        eE = i.useMemo(() => {
            if (0 === et.length) return null;
            if ("single" === U) {
                if (ea) return null;
                let e = Array.from(et)[0];
                return (0, r.jsx)("div", {
                    className: T.singleSelectOption,
                    children: (0, r.jsx)(
                        g.W,
                        R(C({}, e), {
                            onClick: ep,
                            "aria-hidden": !0,
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
                        accessibilityHint: I.intl.string(v.default["/Y7vRU"]),
                    }
                );
            });
            return (0, r.jsx)(_.QSK, {
                listRef: D,
                label: I.intl.string(v.default.VMNfsb),
                items: e,
                layout: "inline",
                onRemove: eh,
            });
        }, [U, G, ep, eh, ea, et, s]),
        eb = (0, l.Z)(Y, w);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.q, {
                ref: eb,
                disabled: G,
                readOnly: B,
                loading: Z,
                clearable: F,
                fullWidth: !0,
                showChevronButton: f,
                isOpen: !!J,
                isInert: K,
                hasValue: q,
                handleToggle: ec,
                handleClear: eu,
                children: (0, r.jsx)("div", {
                    className: o()(T.comboBoxInputScroller, {
                        [T.hasTags]: es,
                        [T.wrapTags]: es && P,
                    }),
                    onClick: e_,
                    children: (0, r.jsxs)("div", {
                        className: T.comboBoxInputContainer,
                        children: [
                            eE,
                            (0, r.jsx)(_.tEY, {
                                ringTarget: Y,
                                children: (0, r.jsx)(p.I, {
                                    ref: L,
                                    id: t,
                                    className: o()(S.input, T.comboBoxInput, {
                                        [T.hiddenVisually]: "single" === U && q && !ea,
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
                                    onChange: eg,
                                    onFocus: ed,
                                    onBlur: ef,
                                    onKeyDown: em,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(m.M, {
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
function j(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: a = 5 } = e,
        {
            filteredOptions: o,
            selectedOptions: s,
            options: l,
            activeDescendantIndex: c,
            selectionMode: u,
            listBoxId: p,
            required: m,
            disabled: g,
            handleSelectionChange: b,
            setIsOpen: y,
            query: O,
            loading: v,
        } = (0, E.T)(),
        { i18n: I } = i.useContext(_.KJG);
    return (0, r.jsx)(d.w, {
        id: p,
        required: m,
        disabled: g,
        items: null != o ? o : l,
        selectionMode: u,
        selectedItems: s,
        onSelectionChange: b,
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
            h.Z.keyboardModeEnabled && (null == y || y(!1));
        },
    });
}
