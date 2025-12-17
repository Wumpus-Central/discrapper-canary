n.d(t, {
    Ct: () => j,
    px: () => k,
    uz: () => L,
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
    g = n(199823),
    E = n(713072),
    b = n(747344),
    y = n(626921),
    O = n(415540),
    v = n(483753),
    S = n(271860),
    I = n(388032),
    T = n(685424),
    C = n(715523);
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
function N(e) {
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
function R(e, t) {
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
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let x = { keys: ["label"] };
function L(e) {
    var { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5, isOpen: o, setIsOpen: l, options: c } = e,
        u = w(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]);
    let {
            selectionMode: d,
            disabled: f,
            readOnly: p,
            closeOnSelect: _,
            formatOption: m,
            onSelectionChange: h,
            value: g,
            customMatchSorter: E,
            matchSorterOptions: y,
            required: v,
        } = u,
        S = i.useId(),
        I = i.useRef(null),
        [T, C] = i.useState(null),
        [A, P] = i.useState(!1),
        [R, D] = i.useState(""),
        [L, j] = i.useState(""),
        {
            options: M,
            loading: k,
            onQueryChange: U,
        } = (0, O.U)({
            active: null == o || o,
            options: c,
            renderOption: m,
        }),
        G = i.useCallback((e, t) => {
            j(e), D(null != t ? t : e);
        }, []);
    i.useEffect(() => {
        U(R);
    }, [U, R]);
    let Z = i.useMemo(() => ("" === R ? M : null != E ? E(M, R) : (0, s.Lu)(M, R, null != y ? y : x)), [M, R, E, y]),
        F = i.useRef(void 0),
        B = i.useMemo(
            () =>
                ("single" === d ? (F.current = M.find((e) => e.value === g)) : (F.current = void 0),
                null == g || (Array.isArray(g) && 0 === g.length))
                    ? []
                    : (Array.isArray(g) ? g : [g]).map((e) => M.find((t) => t.value === e)).filter((e) => null != e),
            [g, M, d],
        );
    i.useEffect(() => {
        if ("single" === d) {
            var e, t;
            G(null != (t = null == (e = F.current) ? void 0 : e.label) ? t : "", "");
        }
    }, [G, B, d]),
        i.useEffect(() => {
            if (o && null != F.current) {
                let e = Z.findIndex((e) => {
                    var t;
                    return e.value === (null == (t = F.current) ? void 0 : t.value);
                });
                C(-1 !== e ? e : null);
            }
        }, [o, C, Z]);
    let V = f || p,
        H = i.useCallback(
            (e) => {
                if (V || (v && 0 === e.length)) return;
                let t = Array.from(e);
                if ("multiple" === d && t.length < 1) h([]);
                else if ("multiple" === d) h(t.map((e) => e.value));
                else {
                    var n, r;
                    h(null != (r = null == (n = t[0]) ? void 0 : n.value) ? r : null);
                }
                _ && o && (null == l || l(!1)), P(!1);
            },
            [V, d, h, _, o, l, v],
        ),
        Y = B.length > 0;
    return (0, r.jsx)(b.Z.Provider, {
        value: N(
            {
                activeDescendantIndex: T,
                setActiveDescendantIndex: C,
                listBoxId: S,
                inputFieldRef: I,
                isInert: V,
                isCollapsible: n,
                hasValue: Y,
                value: g,
                options: M,
                filteredOptions: Z,
                selectedOptions: B,
                maxOptionsVisible: a,
                query: L,
                setQuery: G,
                loading: k,
                handleSelectionChange: H,
                isOpen: o,
                setIsOpen: l,
                isEditing: A,
                setIsEditing: P,
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
        s = (0, h.dQu)(_.Z.modules.select.MAX_WIDTH),
        l = i.useMemo(() => ({ horizontalControlColumnWidth: "minmax(".concat(s, ", auto)") }), [s]);
    return (0, r.jsx)(
        c.g,
        R(N({}, a), {
            "data-mana-component": "combobox",
            layoutConfig: l,
            children: (0, r.jsx)(M, R(N({}, o), { ref: t })),
        }),
    );
}
function M(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a = I.intl.string(S.default["A+pfVR"]),
            hideTags: s,
            name: c,
            form: d,
            showChevronButton: f = !1,
            onQueryChange: _,
            onFocus: h,
            onBlur: O,
            onKeyDown: A,
            wrapTags: P,
            ref: w,
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
            loading: F,
            clearable: B,
            required: V,
            listBoxId: H,
            inputFieldRef: Y,
            shouldFocusWrap: W,
            isInert: K,
            isCollapsible: z,
            hasValue: q,
            handleSelectionChange: Q,
            onSelectionChange: X,
            isOpen: J,
            setIsOpen: $,
            options: ee,
            selectedOptions: et,
            filteredOptions: en,
            query: er,
            setQuery: ei,
            isEditing: ea,
            setIsEditing: eo,
        } = (0, b.T)(),
        es = "multiple" === U && q,
        el = null != M ? (0, v.cA)(H, M) : void 0,
        ec = i.useCallback(() => {
            K || null == $ || $(!J);
        }, [K, J, $]),
        eu = i.useCallback(() => {
            var e;
            "multiple" === U ? X([]) : X(null), ei(""), null == (e = x.current) || e.focus();
        }, [X, U, ei]),
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
                    (eo(!1), null == $ || $(!1), null == O || O(e));
            },
            [O, $, H, eo],
        );
    i.useEffect(() => {
        es &&
            !P &&
            (L.current = setTimeout(() => {
                var e;
                null == (e = x.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            }, 10));
    }, [et, es, P]);
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
                Q(et.filter((e) => e.id !== t));
            },
            [Q, et, K],
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
                            0 === t || (e.preventDefault(), null == $ || $(!0), e.altKey || !J))
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
                        if ((e.preventDefault(), e.stopPropagation(), !J || null == M || t - 1 < M)) return;
                        let r = en[M];
                        if (null == r || !0 === r.disabled) return;
                        if (V && 1 === et.length && et.includes(r)) return void Q(et);
                        Q("single" === U ? [r] : (0, v.cq)(U, et, r));
                        break;
                    case "Backspace":
                        if ("multiple" === U && "" === er && et.length > 0 && null != D.current) {
                            var i;
                            e.preventDefault(), e.stopPropagation(), null == (i = D.current.lastChild) || i.focus();
                        }
                        break;
                    case "Escape":
                        q && B && (e.preventDefault(), e.stopPropagation(), eu());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        k(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        k(t - 1);
                }
                null == A || A(e);
            },
            [U, V, B, q, W, J, A, eu, Q, et, er, $, en, M, k],
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
                    className: T.singleSelectOption,
                    children: (0, r.jsx)(
                        E.W,
                        R(N({}, e), {
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
                        accessibilityHint: I.intl.string(S.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(p.QSK, {
                listRef: D,
                label: I.intl.string(S.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: eh,
            });
        }, [U, G, em, eh, ea, et, s]),
        ey = (0, l.Z)(Y, w);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.q, {
                ref: ey,
                disabled: G,
                readOnly: Z,
                loading: F,
                clearable: B,
                fullWidth: !0,
                showChevronButton: f,
                isOpen: !!J,
                isInert: K,
                hasValue: q,
                hasError: (null == j ? void 0 : j.errorMessageId) != null,
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
                            eb,
                            (0, r.jsx)(p.tEY, {
                                ringTarget: Y,
                                children: (0, r.jsx)(m.I, {
                                    ref: x,
                                    id: t,
                                    className: o()(C.input, T.comboBoxInput, {
                                        [T.hiddenVisually]: "single" === U && q && !ea,
                                    }),
                                    autoFocus: n,
                                    placeholder: a,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: Z,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": F,
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
            (0, r.jsx)(g.M, {
                name: c,
                form: d,
                disabled: K,
                selectionMode: U,
                selectedItems: et,
                onSelectionChange: Q,
                listItems: ee,
            }),
        ],
    });
}
function k(e) {
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
            handleSelectionChange: g,
            query: E,
            loading: y,
        } = (0, b.T)(),
        { i18n: O } = i.useContext(p.KJG);
    return (0, r.jsx)(d.w, {
        id: _,
        required: m,
        disabled: h,
        items: null != o ? o : l,
        tabIndex: -1,
        selectionMode: u,
        selectedItems: s,
        onSelectionChange: g,
        activeDescendantIndex: c,
        renderListItem: t,
        renderEmptyState:
            null != n
                ? n
                : () =>
                      (0, r.jsx)(f.z, {
                          message: null == E || "" === E ? O.LISTBOX_EMPTY_STATE : O.LISTBOX_EMPTY_STATE_WITH_QUERY(E),
                      }),
        maxVisibleItems: a,
        loading: y,
    });
}
