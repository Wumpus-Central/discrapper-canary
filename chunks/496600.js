n.d(t, {
    Ct: () => D,
    px: () => x,
    uz: () => w,
}),
    n(388685),
    n(539854),
    n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(423802),
    c = n(61247),
    u = n(483566),
    d = n(590154),
    f = n(448814),
    _ = n(793030),
    p = n(463208),
    h = n(199823),
    m = n(713072),
    g = n(747344),
    E = n(626921),
    b = n(483753),
    y = n(490340),
    O = n(388032),
    v = n(680765),
    I = n(430490);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = { keys: ["label"] };
function w(e) {
    var { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5, isOpen: o, setIsOpen: l } = e,
        c = N(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen"]);
    let {
            selectionMode: u,
            disabled: d,
            readOnly: f,
            loading: _,
            closeOnSelect: p,
            options: h,
            renderOption: m,
            onSelectionChange: E,
            value: y,
            defaultValue: O,
        } = c,
        v = void 0 !== y,
        I = i.useId(),
        T = i.useRef(null),
        [A, R] = i.useState({
            isInitialized: !1,
            activeDescendantIndex: null,
            listItems: [],
            filteredItems: [],
            selectedItems: [],
            longestLabelCharCount: 5,
            width: "200px",
        }),
        P = A.selectedItems.length > 0,
        w = A.filteredItems.length > a,
        D = !A.isInitialized || !0 === d || !0 === f || !0 === _,
        L = i.useCallback((e) => (null != m ? m(e) : e), [m]);
    i.useLayoutEffect(() => {
        let e = [],
            t = 6,
            n = h.map((n) => {
                let r = L(n);
                return (
                    (t = Math.max(t, r.label.length)),
                    !A.isInitialized && (null != y || null != O) && (0, b._s)(r.value, null != y ? y : O) && e.push(r),
                    r
                );
            });
        R((r) =>
            C(S({}, r), {
                listItems: n,
                filteredItems: n,
                isInitialized: !0,
                longestLabelCharCount: t,
                selectedItems: r.isInitialized ? r.selectedItems : e,
            }),
        );
    }, [h, L]),
        i.useEffect(() => {
            !D &&
                v &&
                (null == y
                    ? R((e) => C(S({}, e), { selectedItems: [] }))
                    : R((e) => C(S({}, e), { selectedItems: e.listItems.filter((e) => (0, b._s)(e.value, y)) })));
        }, [y, D, v]),
        i.useLayoutEffect(() => {
            if (null == T.current) return;
            let e = new ResizeObserver(
                (0, s.throttle)(() => {
                    var e, t, n;
                    let r = null == (e = T.current) ? void 0 : e.getBoundingClientRect(),
                        i = "".concat(null != (t = null == r ? void 0 : r.width) ? t : 200, "px"),
                        o = "auto";
                    w && (o = (null != (n = null == r ? void 0 : r.height) ? n : 40) * a),
                        R((e) =>
                            C(S({}, e), {
                                width: i,
                                dropDownHeight: o,
                            }),
                        );
                }, 50),
            );
            return e.observe(T.current), () => e.disconnect();
        }, [u, a, w, A.longestLabelCharCount]);
    let x = i.useCallback(
        (e) => {
            var t, n, r;
            if (D) return;
            let i = Array.from(e);
            "multiple" === u && i.length < 1
                ? E(null)
                : "multiple" === u
                  ? E(i.map((e) => e.value))
                  : E(null != (r = null == (n = i[0]) ? void 0 : n.value) ? r : null);
            let a = "single" === u && i.length > 0 ? (null == (t = i[0]) ? void 0 : t.label) : "";
            R((t) =>
                C(S({}, t), {
                    selectedItems: e,
                    query: a,
                    isEditing: !1,
                    filteredItems: t.listItems,
                    activeDescendantIndex: null,
                }),
            ),
                p && o && (null == l || l(!1));
        },
        [D, u, E, R, p, o, l],
    );
    return (0, r.jsx)(g.Z.Provider, {
        value: S(
            {
                state: A,
                setState: R,
                listBoxId: I,
                inputFieldRef: T,
                isInert: D,
                isCollapsible: n,
                hasValue: P,
                handleSelectionChange: x,
                isOpen: o,
                setIsOpen: l,
            },
            c,
        ),
        children: t,
    });
}
function D(e) {
    var { hideLabel: t, description: n, helperText: i, errorMessage: a, successMessage: o, ref: s } = e,
        l = N(e, ["hideLabel", "description", "helperText", "errorMessage", "successMessage", "ref"]);
    let { id: c, required: d, label: f } = l;
    return (0, r.jsx)(u.g, {
        id: c,
        required: d,
        label: f,
        hideLabel: t,
        description: n,
        helperText: i,
        errorMessage: a,
        successMessage: o,
        "data-mana-component": "combobox",
        children: (0, r.jsx)(L, C(S({}, l), { ref: s })),
    });
}
function L(e) {
    var t;
    let {
            id: n,
            autoFocus: a,
            placeholder: s = O.intl.string(y.default["A+pfVV"]),
            name: u,
            form: f,
            showChevronButton: T = !1,
            onQueryChange: A,
            onFocus: N,
            onBlur: R,
            onKeyDown: w,
            wrapTags: D,
            ref: L,
        } = e,
        x = i.useRef(null),
        M = i.useRef(null),
        j = i.useRef(null),
        k = i.useRef(null),
        U = i.useContext(d.z),
        {
            state: G,
            setState: B,
            selectionMode: Z,
            disabled: F,
            readOnly: V,
            loading: H,
            clearable: Y,
            required: W,
            listBoxId: K,
            inputFieldRef: z,
            shouldFocusWrap: q,
            matchSorterOptions: X,
            customMatchSorter: Q,
            isInert: J,
            isCollapsible: $,
            hasValue: ee,
            handleSelectionChange: et,
            onSelectionChange: en,
            isOpen: er,
            setIsOpen: ei,
        } = (0, g.T)(),
        ea = "multiple" === Z && G.selectedItems.length > 0,
        eo = null != G.activeDescendantIndex ? (0, b.cA)(K, G.activeDescendantIndex) : void 0;
    i.useEffect(() => {
        var e;
        null != eo &&
            (null == (e = document.getElementById(eo)) ||
                e.scrollIntoView({
                    behavior: "instant",
                    block: "nearest",
                }));
    }, [eo]);
    let es = i.useCallback(() => {
            J || null == ei || ei(!er);
        }, [J, er, ei]),
        el = i.useCallback(() => {
            var e;
            B((e) =>
                C(S({}, e), {
                    query: "",
                    selectedItems: [],
                    filteredItems: e.listItems,
                }),
            ),
                en(null),
                null == (e = M.current) || e.focus();
        }, [en, B]),
        ec = i.useCallback(
            (e) => {
                clearTimeout(j.current),
                    (j.current = null),
                    B((e) => C(S({}, e), { isEditing: !0 })),
                    null == ei || ei(!0),
                    null == N || N(e);
            },
            [N, B, ei],
        ),
        eu = i.useCallback(
            (e) => {
                clearTimeout(j.current),
                    (j.current = setTimeout(() => {
                        B((e) => C(S({}, e), { isEditing: !1 })), null == ei || ei(!1), null == R || R(e);
                    }, 500));
            },
            [R, B, ei],
        );
    i.useEffect(() => {
        clearTimeout(j.current),
            clearTimeout(k.current),
            ea &&
                !D &&
                (k.current = setTimeout(() => {
                    var e;
                    null == (e = M.current) ||
                        e.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                        });
                }, 10));
    }, [G.selectedItems, ea, D]);
    let ed = i.useCallback(() => {
            var e;
            null == (e = M.current) || e.focus();
        }, []),
        ef = i.useCallback(() => {
            var e;
            null == (e = M.current) || e.select();
        }, []),
        e_ = i.useCallback(
            (e) => {
                if (J) return;
                let t = Array.from(e)[0];
                et(G.selectedItems.filter((e) => e.id !== t));
            },
            [et, G.selectedItems, J],
        ),
        ep = i.useCallback(
            (e) => {
                let t = G.filteredItems.length;
                switch (e.key) {
                    case "ArrowDown":
                        if (0 === t) return;
                        e.preventDefault(),
                            B((e) => {
                                let n = 0;
                                return (
                                    null !== e.activeDescendantIndex &&
                                        (n = e.activeDescendantIndex + 1) >= t &&
                                        (n = q ? 0 : e.activeDescendantIndex),
                                    null == ei || ei(!0),
                                    C(S({}, e), { activeDescendantIndex: n })
                                );
                            });
                        break;
                    case "ArrowUp":
                        if (0 === t) return;
                        e.preventDefault(),
                            B((e) => {
                                let n = 0;
                                return (
                                    null !== e.activeDescendantIndex &&
                                        (n = e.activeDescendantIndex - 1) < 0 &&
                                        (n = q ? t - 1 : 0),
                                    null == ei || ei(!0),
                                    C(S({}, e), { activeDescendantIndex: n })
                                );
                            });
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), null === G.activeDescendantIndex || 0 === t))
                            return;
                        let n = G.filteredItems[G.activeDescendantIndex];
                        if (
                            !0 === n.disabled ||
                            (!0 === W && 1 === G.selectedItems.length && G.selectedItems.includes(n))
                        )
                            return;
                        et((0, b.cq)(Z, G.selectedItems, n));
                        break;
                    case "Backspace":
                        if ("multiple" === Z && "" === G.query && G.selectedItems.length > 0 && null != x.current) {
                            var r;
                            e.preventDefault(), e.stopPropagation(), null == (r = x.current.lastChild) || r.focus();
                        }
                        break;
                    case "Escape":
                        ee && Y && (e.preventDefault(), e.stopPropagation(), el());
                }
                null == w || w(e);
            },
            [B, Z, W, Y, ee, q, w, el, et, G.activeDescendantIndex, G.selectedItems, G.filteredItems, G.query, ei],
        ),
        eh = i.useCallback(
            (e) => {
                let t = e.target.value;
                B((e) => {
                    let n = e.listItems;
                    return (
                        "" !== t && (n = null != Q ? Q(n, t) : (0, l.Lu)(n, t, null != X ? X : P)),
                        null == ei || ei(!0),
                        C(S({}, e), {
                            query: t,
                            isEditing: !0,
                            activeDescendantIndex: null,
                            filteredItems: n,
                        })
                    );
                }),
                    null == A || A(e);
            },
            [A, B, Q, X, ei],
        ),
        em = i.useMemo(() => {
            if (0 === G.selectedItems.length) return null;
            if ("single" === Z) {
                if (G.isEditing) return null;
                let e = Array.from(G.selectedItems)[0];
                return (0, r.jsx)("div", {
                    className: v.singleSelectOption,
                    children: (0, r.jsx)(
                        m.W,
                        C(S({}, e), {
                            onClick: ef,
                            "aria-hidden": !0,
                        }),
                    ),
                });
            }
            let e = Array.from(G.selectedItems).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: F || e.disabled,
                        accessibilityHint: O.intl.string(y.default["/Y7vRU"]),
                    }
                );
            });
            return (0, r.jsx)(_.QSK, {
                listRef: x,
                label: O.intl.string(y.default.VMNfsb),
                items: e,
                layout: "inline",
                onRemove: e_,
            });
        }, [Z, F, ef, e_, G.isEditing, G.selectedItems]),
        eg = (0, c.Z)(z, L);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(E.q, {
                ref: eg,
                disabled: F,
                readOnly: V,
                loading: H,
                clearable: Y,
                fullWidth: !0,
                showChevronButton: T,
                isOpen: !!er,
                isInert: J,
                hasValue: ee,
                width: G.width,
                handleToggle: es,
                handleClear: el,
                children: (0, r.jsx)("div", {
                    className: o()(v.comboBoxInputScroller, {
                        [v.hasTags]: ea,
                        [v.wrapTags]: ea && D,
                    }),
                    onClick: ed,
                    children: (0, r.jsxs)("div", {
                        className: v.comboBoxInputContainer,
                        children: [
                            em,
                            (0, r.jsx)(_.tEY, {
                                ringTarget: z,
                                children: (0, r.jsx)(p.I, {
                                    ref: M,
                                    id: n,
                                    className: o()(I.input, v.comboBoxInput, {
                                        [v.hiddenVisually]: "single" === Z && ee && !G.isEditing,
                                    }),
                                    autoFocus: a,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: F,
                                    readOnly: V,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": H,
                                    "aria-controls": K,
                                    "aria-expanded": !$ || er,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": "".concat(null == U ? void 0 : U.labelId),
                                    "aria-describedby": "".concat(null == U ? void 0 : U.describedById),
                                    "aria-errormessage": null == U ? void 0 : U.errorMessageId,
                                    "aria-invalid": (null == U ? void 0 : U.errorMessageId) != null,
                                    value: null != (t = G.query) ? t : "",
                                    onChange: eh,
                                    onFocus: ec,
                                    onBlur: eu,
                                    onKeyDown: ep,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(h.M, {
                name: u,
                form: f,
                disabled: J,
                selectionMode: Z,
                selectedItems: G.selectedItems,
                onSelectionChange: et,
                listItems: G.listItems,
            }),
        ],
    });
}
function x(e) {
    var t;
    let { renderListItem: n, renderEmptyState: i, maxVisibleItems: a = 5 } = e,
        { state: o, selectionMode: s, listBoxId: l, required: c, disabled: u, handleSelectionChange: d } = (0, g.T)();
    return (0, r.jsx)(f.w, {
        id: l,
        required: c,
        disabled: u,
        items: null != (t = o.filteredItems) ? t : o.listItems,
        selectionMode: s,
        selectedItems: o.selectedItems,
        onSelectionChange: d,
        activeDescendantIndex: o.activeDescendantIndex,
        renderListItem: n,
        renderEmptyState: i,
        maxVisibleItems: a,
    });
}
