n.d(t, {
    Ct: () => w,
    px: () => L,
    uz: () => P,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(423802),
    c = n(753187),
    u = n(993517),
    d = n(793030),
    f = n(463208),
    _ = n(35916),
    p = n(199823),
    h = n(713072),
    m = n(747344),
    g = n(626921),
    E = n(483753),
    b = n(490340),
    y = n(388032),
    O = n(680765),
    v = n(430490);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = { keys: ["label"] };
function P(e) {
    var { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5 } = e,
        o = C(e, ["children", "isCollapsible", "maxOptionsVisible"]);
    let {
            selectionMode: l,
            disabled: c,
            readOnly: u,
            loading: d,
            closeOnSelect: f,
            options: _,
            renderOption: p,
            onSelectionChange: h,
            value: g,
            defaultValue: b,
        } = o,
        y = void 0 !== g,
        O = i.useId(),
        v = i.useRef(null),
        [I, S] = i.useState({
            isInitialized: !1,
            isOpen: !n,
            activeDescendantIndex: null,
            listItems: [],
            filteredItems: [],
            selectedItems: new Set(),
            longestLabelCharCount: 5,
            width: "200px",
        }),
        N = I.selectedItems.size > 0,
        R = I.filteredItems.length > a,
        P = !I.isInitialized || !0 === c || !0 === u || !0 === d,
        w = i.useCallback((e) => (null != p ? p(e) : e), [p]);
    i.useLayoutEffect(() => {
        let e = new Set(),
            t = 6,
            n = _.map((n) => {
                let r = w(n);
                return (
                    (t = Math.max(t, r.label.length)),
                    !I.isInitialized && (null != g || null != b) && (0, E.tw)(r.value, null != g ? g : b) && e.add(r),
                    r
                );
            });
        S((r) =>
            A(T({}, r), {
                listItems: n,
                filteredItems: n,
                isInitialized: !0,
                longestLabelCharCount: t,
                selectedItems: r.isInitialized ? r.selectedItems : e,
            }),
        );
    }, [_, w]),
        i.useEffect(() => {
            !P &&
                y &&
                (null == g
                    ? S((e) => A(T({}, e), { selectedItems: new Set() }))
                    : S((e) =>
                          A(T({}, e), { selectedItems: new Set(e.listItems.filter((e) => (0, E.tw)(e.value, g))) }),
                      ));
        }, [g, P, y]),
        i.useLayoutEffect(() => {
            if (null == v.current) return;
            let e = new ResizeObserver(
                (0, s.throttle)(() => {
                    var e, t, n;
                    let r = null == (e = v.current) ? void 0 : e.getBoundingClientRect(),
                        i = "".concat(null != (t = null == r ? void 0 : r.width) ? t : 200, "px"),
                        o = "auto";
                    R && (o = (null != (n = null == r ? void 0 : r.height) ? n : 40) * a),
                        S((e) =>
                            A(T({}, e), {
                                width: i,
                                dropDownHeight: o,
                            }),
                        );
                }, 50),
            );
            return e.observe(v.current), () => e.disconnect();
        }, [l, a, R, I.longestLabelCharCount]);
    let D = i.useCallback(
        (e) => {
            var t, n, r;
            if (P) return;
            let i = Array.from(e);
            "multiple" === l && i.length < 1
                ? h(null)
                : "multiple" === l
                  ? h(new Set(i.map((e) => e.value)))
                  : h(null != (r = null == (n = i[0]) ? void 0 : n.value) ? r : null);
            let a = "single" === l && i.length > 0 ? (null == (t = i[0]) ? void 0 : t.label) : "";
            S((t) =>
                A(T({}, t), {
                    selectedItems: e,
                    query: a,
                    isOpen: !f && t.isOpen,
                    isEditing: !1,
                    filteredItems: t.listItems,
                    activeDescendantIndex: null,
                }),
            );
        },
        [P, l, h, S, f],
    );
    return (0, r.jsx)(m.Z.Provider, {
        value: T(
            {
                state: I,
                setState: S,
                listBoxId: O,
                inputFieldRef: v,
                isInert: P,
                isCollapsible: n,
                hasValue: N,
                handleSelectionChange: D,
            },
            o,
        ),
        children: t,
    });
}
function w(e) {
    var { hideLabel: t, description: n, helperText: i, errorMessage: a, successMessage: o } = e,
        s = C(e, ["hideLabel", "description", "helperText", "errorMessage", "successMessage"]);
    let { id: l, required: u, label: d } = s;
    return (0, r.jsx)(c.N, {
        id: l,
        required: u,
        label: d,
        hideLabel: t,
        description: n,
        helperText: i,
        errorMessage: a,
        successMessage: o,
        children: (0, r.jsx)(D, T({}, s)),
    });
}
function D(e) {
    var t;
    let {
            id: n,
            autoFocus: a,
            placeholder: s = y.intl.string(b.default["A+pfVV"]),
            name: c,
            form: _,
            showChevronButton: I = !1,
            onQueryChange: S,
            onFocus: C,
            onBlur: N,
            onKeyDown: P,
            wrapTags: w,
        } = e,
        D = i.useRef(null),
        L = i.useRef(null),
        x = i.useRef(null),
        j = i.useRef(null),
        M = i.useContext(u.U),
        {
            state: k,
            setState: U,
            selectionMode: G,
            disabled: B,
            readOnly: Z,
            loading: F,
            clearable: V,
            required: H,
            listBoxId: Y,
            inputFieldRef: W,
            shouldFocusWrap: K,
            matchSorterOptions: z,
            customMatchSorter: q,
            isInert: X,
            isCollapsible: Q,
            hasValue: J,
            handleSelectionChange: $,
            onSelectionChange: ee,
        } = (0, m.T)(),
        et = "multiple" === G && k.selectedItems.size > 0,
        en = null != k.activeDescendantIndex ? (0, E.cA)(Y, k.activeDescendantIndex) : void 0;
    i.useEffect(() => {
        var e;
        null != en &&
            (null == (e = document.getElementById(en)) ||
                e.scrollIntoView({
                    behavior: "instant",
                    block: "nearest",
                }));
    }, [en]);
    let er = i.useCallback(() => {
            X || U((e) => A(T({}, e), { isOpen: !e.isOpen }));
        }, [X, U]),
        ei = i.useCallback(() => {
            var e;
            U((e) =>
                A(T({}, e), {
                    query: "",
                    selectedItems: new Set(),
                    filteredItems: e.listItems,
                }),
            ),
                ee(null),
                null == (e = L.current) || e.focus();
        }, [ee, U]),
        ea = i.useCallback(
            (e) => {
                U((e) =>
                    A(T({}, e), {
                        isOpen: !0,
                        isEditing: !0,
                    }),
                ),
                    null == C || C(e);
            },
            [C, U],
        ),
        eo = i.useCallback(
            (e) => {
                clearTimeout(x.current),
                    (x.current = setTimeout(() => {
                        U((e) =>
                            A(T({}, e), {
                                isOpen: !1,
                                isEditing: !1,
                            }),
                        ),
                            null == N || N(e);
                    }, 500));
            },
            [N, U],
        );
    i.useEffect(() => {
        clearTimeout(x.current),
            clearTimeout(j.current),
            et &&
                !w &&
                (j.current = setTimeout(() => {
                    var e;
                    null == (e = L.current) ||
                        e.scrollIntoView({
                            behavior: "smooth",
                            inline: "end",
                            block: "end",
                        });
                }, 10));
    }, [k.selectedItems, et, w]);
    let es = i.useCallback(() => {
            var e;
            null == (e = L.current) || e.focus();
        }, []),
        el = i.useCallback(() => {
            var e;
            null == (e = L.current) || e.select();
        }, []),
        ec = i.useCallback(
            (e) => {
                if (X) return;
                let t = Array.from(e)[0];
                $(new Set([...k.selectedItems].filter((e) => e.id !== t)));
            },
            [$, k.selectedItems, X],
        ),
        eu = i.useCallback(
            (e) => {
                let t = k.filteredItems.length;
                switch (e.key) {
                    case "ArrowDown":
                        if (0 === t) return;
                        e.preventDefault(),
                            U((e) => {
                                let n = 0;
                                return (
                                    null !== e.activeDescendantIndex &&
                                        (n = e.activeDescendantIndex + 1) >= t &&
                                        (n = K ? 0 : e.activeDescendantIndex),
                                    A(T({}, e), {
                                        isOpen: !0,
                                        activeDescendantIndex: n,
                                    })
                                );
                            });
                        break;
                    case "ArrowUp":
                        if (0 === t) return;
                        e.preventDefault(),
                            U((e) => {
                                let n = 0;
                                return (
                                    null !== e.activeDescendantIndex &&
                                        (n = e.activeDescendantIndex - 1) < 0 &&
                                        (n = K ? t - 1 : 0),
                                    A(T({}, e), {
                                        isOpen: !0,
                                        activeDescendantIndex: n,
                                    })
                                );
                            });
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), null === k.activeDescendantIndex || 0 === t))
                            return;
                        let n = k.filteredItems[k.activeDescendantIndex];
                        if (!0 === n.disabled || (!0 === H && 1 === k.selectedItems.size && k.selectedItems.has(n)))
                            return;
                        $((0, E.xj)(G, k.selectedItems, n));
                        break;
                    case "Backspace":
                        if ("multiple" === G && "" === k.query && k.selectedItems.size > 0 && null != D.current) {
                            var r;
                            e.preventDefault(), e.stopPropagation(), null == (r = D.current.lastChild) || r.focus();
                        }
                        break;
                    case "Escape":
                        J && V && (e.preventDefault(), e.stopPropagation(), ei());
                }
                null == P || P(e);
            },
            [U, G, H, V, J, K, P, ei, $, k.activeDescendantIndex, k.selectedItems, k.filteredItems, k.query],
        ),
        ed = i.useCallback(
            (e) => {
                let t = e.target.value;
                U((e) => {
                    let n = e.listItems;
                    return (
                        "" !== t && (n = null != q ? q(n, t) : (0, l.Lu)(n, t, null != z ? z : R)),
                        A(T({}, e), {
                            query: t,
                            isOpen: !0,
                            isEditing: !0,
                            activeDescendantIndex: null,
                            filteredItems: n,
                        })
                    );
                }),
                    null == S || S(e);
            },
            [S, U, q, z],
        ),
        ef = i.useMemo(() => {
            if (0 === k.selectedItems.size) return null;
            if ("single" === G) {
                if (k.isEditing) return null;
                let e = Array.from(k.selectedItems)[0];
                return (0, r.jsx)("div", {
                    className: O.singleSelectOption,
                    children: (0, r.jsx)(
                        h.W,
                        A(T({}, e), {
                            onClick: el,
                            "aria-hidden": !0,
                        }),
                    ),
                });
            }
            let e = Array.from(k.selectedItems).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: B || e.disabled,
                        accessibilityHint: y.intl.string(b.default["/Y7vRU"]),
                    }
                );
            });
            return (0, r.jsx)(d.QSK, {
                listRef: D,
                label: y.intl.string(b.default.VMNfsb),
                items: e,
                layout: "inline",
                onRemove: ec,
            });
        }, [G, B, el, ec, k.isEditing, k.selectedItems]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.q, {
                ref: W,
                disabled: B,
                readOnly: Z,
                loading: F,
                clearable: V,
                fullWidth: !0,
                showChevronButton: I,
                isOpen: k.isOpen,
                isInert: X,
                hasValue: J,
                width: k.width,
                handleToggle: er,
                handleClear: ei,
                children: (0, r.jsx)("div", {
                    className: o()(O.comboBoxInputScroller, {
                        [O.hasTags]: et,
                        [O.wrapTags]: et && w,
                    }),
                    onClick: es,
                    children: (0, r.jsxs)("div", {
                        className: O.comboBoxInputContainer,
                        children: [
                            ef,
                            (0, r.jsx)(d.tEY, {
                                ringTarget: W,
                                children: (0, r.jsx)(f.I, {
                                    ref: L,
                                    id: n,
                                    className: o()(v.input, O.comboBoxInput, {
                                        [O.hiddenVisually]: "single" === G && J && !k.isEditing,
                                    }),
                                    autoFocus: a,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: B,
                                    readOnly: Z,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": F,
                                    "aria-controls": Y,
                                    "aria-expanded": !Q || k.isOpen,
                                    "aria-activedescendant": en,
                                    "aria-labelledby": "".concat(null == M ? void 0 : M.labelId),
                                    "aria-describedby": "".concat(null == M ? void 0 : M.describedById),
                                    "aria-errormessage": null == M ? void 0 : M.errorMessageId,
                                    "aria-invalid": (null == M ? void 0 : M.errorMessageId) != null,
                                    value: null != (t = k.query) ? t : "",
                                    onChange: ed,
                                    onFocus: ea,
                                    onBlur: eo,
                                    onKeyDown: eu,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(p.M, {
                name: c,
                form: _,
                disabled: X,
                selectionMode: G,
                selectedItems: k.selectedItems,
                onSelectionChange: $,
                listItems: k.listItems,
            }),
        ],
    });
}
function L(e) {
    var t;
    let { renderListItem: n, renderEmptyState: i } = e,
        { state: a, selectionMode: o, listBoxId: s, required: l, disabled: c, handleSelectionChange: u } = (0, m.T)();
    return (0, r.jsx)(_.w, {
        id: s,
        required: l,
        disabled: c,
        items: null != (t = a.filteredItems) ? t : a.listItems,
        selectionMode: o,
        selectedItems: a.selectedItems,
        onSelectionChange: u,
        activeDescendantIndex: a.activeDescendantIndex,
        renderListItem: n,
        renderEmptyState: i,
    });
}
