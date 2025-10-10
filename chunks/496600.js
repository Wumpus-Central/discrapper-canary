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
            renderOption: h,
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
                if ("multiple" === d && t.length < 1) m(null);
                else if ("multiple" === d) m(t.map((e) => e.value));
                else {
                    var n, r;
                    m(null != (r = null == (n = t[0]) ? void 0 : n.value) ? r : null);
                }
                p && o && (null == l || l(!1)), A(!1);
            },
            [k, d, m, p, o, l],
        ),
        G = Array.isArray(g) ? g.length > 0 : null != g;
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
            name: s,
            form: c,
            showChevronButton: d = !1,
            onQueryChange: f,
            onFocus: h,
            onBlur: y,
            onKeyDown: A,
            wrapTags: N,
            ref: P,
        } = e,
        w = i.useRef(null),
        D = i.useRef(null),
        L = i.useRef(null),
        x = i.useContext(u.z),
        {
            activeDescendantIndex: M,
            setActiveDescendantIndex: j,
            selectionMode: k,
            disabled: U,
            readOnly: G,
            loading: B,
            clearable: Z,
            required: F,
            listBoxId: V,
            inputFieldRef: H,
            shouldFocusWrap: Y,
            isInert: W,
            isCollapsible: K,
            hasValue: z,
            handleSelectionChange: q,
            onSelectionChange: X,
            isOpen: Q,
            setIsOpen: J,
            options: $,
            selectedOptions: ee,
            filteredOptions: et,
            query: en,
            setQuery: er,
            isEditing: ei,
            setIsEditing: ea,
        } = (0, E.T)(),
        eo = "multiple" === k && z,
        es = null != M ? (0, O.cA)(V, M) : void 0;
    i.useEffect(() => {
        var e;
        null != es &&
            (null == (e = document.getElementById(es)) ||
                e.scrollIntoView({
                    behavior: "instant",
                    block: "nearest",
                }));
    }, [es]);
    let el = i.useCallback(() => {
            W || null == J || J(!Q);
        }, [W, Q, J]),
        ec = i.useCallback(() => {
            var e;
            X(null), null == (e = D.current) || e.focus();
        }, [X]),
        eu = i.useCallback(
            (e) => {
                ea(!0), null == J || J(!0), null == h || h(e);
            },
            [h, J, ea],
        ),
        ed = i.useCallback(
            (e) => {
                var t;
                (null == (t = e.relatedTarget) ? void 0 : t.closest('[data-list-id="'.concat(V, '"]'))) == null &&
                    (ea(!1), null == J || J(!1), null == y || y(e));
            },
            [y, J, V, ea],
        );
    i.useEffect(() => {
        eo &&
            !N &&
            (L.current = setTimeout(() => {
                var e;
                null == (e = D.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            }, 10));
    }, [ee, eo, N]);
    let ef = i.useCallback(() => {
            var e;
            null == (e = D.current) || e.focus();
        }, []),
        e_ = i.useCallback(() => {
            var e;
            null == (e = D.current) || e.select();
        }, []),
        ep = i.useCallback(
            (e) => {
                if (W) return;
                let t = Array.from(e)[0];
                q(ee.filter((e) => e.id !== t));
            },
            [q, ee, W],
        ),
        eh = i.useCallback(
            (e) => {
                let t = et.length;
                switch (e.key) {
                    case "ArrowDown":
                        if (0 === t) return;
                        e.preventDefault(),
                            j((e) => {
                                if (null === e) return 0;
                                let n = e + 1;
                                return n >= t && (n = Y ? 0 : e), n;
                            }),
                            null == J || J(!0);
                        break;
                    case "ArrowUp":
                        if (0 === t) return;
                        e.preventDefault(),
                            j((e) => {
                                if (null === e) return 0;
                                let n = e - 1;
                                return n < 0 && (n = Y ? t - 1 : 0), n;
                            }),
                            null == J || J(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), null == M || 0 === t)) return;
                        let n = et[M];
                        if (!0 === n.disabled || (F && 1 === ee.length && ee.includes(n))) return;
                        q((0, O.cq)(k, ee, n));
                        break;
                    case "Backspace":
                        if ("multiple" === k && "" === en && ee.length > 0 && null != w.current) {
                            var r;
                            e.preventDefault(), e.stopPropagation(), null == (r = w.current.lastChild) || r.focus();
                        }
                        break;
                    case "Escape":
                        z && Z && (e.preventDefault(), e.stopPropagation(), ec());
                }
                null == A || A(e);
            },
            [k, F, Z, z, Y, A, ec, q, ee, en, J, et, M, j],
        ),
        em = i.useCallback(
            (e) => {
                ea(!0), er(e.target.value), null == J || J(!0), null == f || f(e), j(null);
            },
            [f, ea, er, J, j],
        ),
        eg = i.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === k) {
                if (ei) return null;
                let e = Array.from(ee)[0];
                return (0, r.jsx)("div", {
                    className: T.singleSelectOption,
                    children: (0, r.jsx)(
                        g.W,
                        R(C({}, e), {
                            onClick: e_,
                            "aria-hidden": !0,
                        }),
                    ),
                });
            }
            let e = Array.from(ee).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: U || e.disabled,
                        accessibilityHint: I.intl.string(v.default["/Y7vRU"]),
                    }
                );
            });
            return (0, r.jsx)(_.QSK, {
                listRef: w,
                label: I.intl.string(v.default.VMNfsb),
                items: e,
                layout: "inline",
                onRemove: ep,
            });
        }, [k, U, e_, ep, ei, ee]),
        eE = (0, l.Z)(H, P);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.q, {
                ref: eE,
                disabled: U,
                readOnly: G,
                loading: B,
                clearable: Z,
                fullWidth: !0,
                showChevronButton: d,
                isOpen: !!Q,
                isInert: W,
                hasValue: z,
                handleToggle: el,
                handleClear: ec,
                children: (0, r.jsx)("div", {
                    className: o()(T.comboBoxInputScroller, {
                        [T.hasTags]: eo,
                        [T.wrapTags]: eo && N,
                    }),
                    onClick: ef,
                    children: (0, r.jsxs)("div", {
                        className: T.comboBoxInputContainer,
                        children: [
                            eg,
                            (0, r.jsx)(_.tEY, {
                                ringTarget: H,
                                children: (0, r.jsx)(p.I, {
                                    ref: D,
                                    id: t,
                                    className: o()(S.input, T.comboBoxInput, {
                                        [T.hiddenVisually]: "single" === k && z && !ei,
                                    }),
                                    autoFocus: n,
                                    placeholder: a,
                                    role: "combobox",
                                    disabled: U,
                                    readOnly: G,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": B,
                                    "aria-controls": V,
                                    "aria-expanded": !K || Q,
                                    "aria-activedescendant": es,
                                    "aria-labelledby": "".concat(null == x ? void 0 : x.labelId),
                                    "aria-describedby": "".concat(null == x ? void 0 : x.describedById),
                                    "aria-errormessage": null == x ? void 0 : x.errorMessageId,
                                    "aria-invalid": (null == x ? void 0 : x.errorMessageId) != null,
                                    value: null != en ? en : "",
                                    onChange: em,
                                    onFocus: eu,
                                    onBlur: ed,
                                    onKeyDown: eh,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(m.M, {
                name: s,
                form: c,
                disabled: W,
                selectionMode: k,
                selectedItems: ee,
                onSelectionChange: q,
                listItems: $,
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
        renderEmptyState: null != n ? n : () => (0, r.jsx)(f.z, { message: I.LISTBOX_EMPTY_STATE_WITH_QUERY(O) }),
        maxVisibleItems: a,
        loading: v,
        onFocus: () => {
            h.Z.keyboardModeEnabled && (null == y || y(!1));
        },
    });
}
