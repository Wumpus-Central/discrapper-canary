n.d(t, {
    X2: () => L,
    a3: () => P,
    iS: () => R,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(896170),
    l = n(612324),
    c = n(452027),
    u = n(15626),
    d = n(540637),
    f = n(992251),
    p = n(978617),
    _ = n(158954),
    h = n(827734),
    m = n(292666),
    g = n(397927),
    E = n(154385),
    y = n(763600),
    b = n(985018),
    O = n(100624),
    v = n(594597);

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

function I(e) {
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

function T(e, t) {
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = N(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = {
    keys: ["label"],
};

function R(e) {
    let { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5, isOpen: o, setIsOpen: l, options: c } = e,
        u = C(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]),
        {
            selectionMode: d,
            disabled: f,
            readOnly: _,
            closeOnSelect: h,
            formatOption: m,
            onSelectionChange: g,
            value: y,
            customMatchSorter: b,
            matchSorterOptions: O,
            required: v,
        } = u,
        A = i.useId(),
        S = i.useRef(null),
        [T, N] = i.useState(null),
        [R, P] = i.useState(!1),
        [D, L] = i.useState(""),
        [x, M] = i.useState(""),
        {
            options: j,
            loading: k,
            onQueryChange: U,
        } = (0, p.KH)({
            active: null == o || o,
            options: c,
            renderOption: m,
        }),
        G = i.useCallback((e, t) => {
            M(e), L(null != t ? t : e);
        }, []);
    i.useEffect(() => {
        U(D);
    }, [U, D]);
    let F = i.useMemo(() => ("" === D ? j : null != b ? b(j, D) : (0, s.Ht)(j, D, null != O ? O : w)), [j, D, b, O]),
        V = i.useRef(void 0),
        B = i.useMemo(
            () =>
                ("single" === d ? (V.current = j.find((e) => e.value === y)) : (V.current = void 0),
                null == y || (Array.isArray(y) && 0 === y.length))
                    ? []
                    : (Array.isArray(y) ? y : [y]).map((e) => j.find((t) => t.value === e)).filter((e) => null != e),
            [y, j, d],
        );
    i.useEffect(() => {
        if (!R && "single" === d) {
            var e, t;
            G(null != (e = null == (t = V.current) ? void 0 : t.label) ? e : "", "");
        }
    }, [G, B, d, R]),
        i.useEffect(() => {
            if (o && null != V.current) {
                let e = F.findIndex((e) => {
                    var t;
                    return e.value === (null == (t = V.current) ? void 0 : t.value);
                });
                N(-1 !== e ? e : null);
            }
        }, [o, N, F]);
    let H = f || _,
        Y = i.useCallback(
            (e) => {
                if (H || (v && 0 === e.length)) return;
                let t = Array.from(e);
                if ("multiple" === d && t.length < 1) g([]);
                else if ("multiple" === d) g(t.map((e) => e.value));
                else {
                    var n;
                    g(null == (n = t[0]) ? void 0 : n.value);
                }
                h && o && (null == l || l(!1)), P(!1);
            },
            [H, d, g, h, o, l, v],
        ),
        W = B.length > 0;
    return (0, r.jsx)(E.C.Provider, {
        value: I(
            {
                activeDescendantIndex: T,
                setActiveDescendantIndex: N,
                listBoxId: A,
                inputFieldRef: S,
                isInert: H,
                isCollapsible: n,
                hasValue: W,
                value: y,
                options: j,
                filteredOptions: F,
                selectedOptions: B,
                maxOptionsVisible: a,
                query: x,
                setQuery: G,
                loading: k,
                handleSelectionChange: Y,
                isOpen: o,
                setIsOpen: l,
                isEditing: R,
                setIsEditing: P,
            },
            u,
        ),
        children: t,
    });
}

function P(e) {
    let { ref: t } = e,
        n = C(e, ["ref"]),
        { fieldProps: a, props: o } = (0, c.n)(n),
        s = (0, g.rdh)(h.A.modules.select.MAX_WIDTH),
        l = i.useMemo(
            () => ({
                horizontalControlColumnWidth: "minmax(".concat(s, "px, auto)"),
            }),
            [s],
        );
    return (0, r.jsx)(
        c.D,
        T(I({}, a), {
            "data-mana-component": "combobox",
            layoutConfig: l,
            children: (0, r.jsx)(
                D,
                T(I({}, o), {
                    ref: t,
                }),
            ),
        }),
    );
}

function D(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a = b.intl.string(y.default["A+pfVR"]),
            hideTags: s,
            name: c,
            form: d,
            showChevronButton: f = !1,
            onQueryChange: h,
            onFocus: g,
            onBlur: A,
            onKeyDown: S,
            wrapTags: C,
            ref: N,
        } = e,
        w = i.useRef(null),
        R = i.useRef(null),
        P = i.useRef(null),
        D = i.useContext(u._),
        {
            activeDescendantIndex: L,
            setActiveDescendantIndex: x,
            selectionMode: M,
            disabled: j,
            readOnly: k,
            loading: U,
            clearable: G,
            required: F,
            listBoxId: V,
            inputFieldRef: B,
            shouldFocusWrap: H,
            isInert: Y,
            isCollapsible: W,
            hasValue: K,
            handleSelectionChange: z,
            onSelectionChange: q,
            isOpen: Z,
            setIsOpen: Q,
            options: X,
            selectedOptions: J,
            filteredOptions: $,
            query: ee,
            setQuery: et,
            isEditing: en,
            setIsEditing: er,
        } = (0, E.h)(),
        ei = "multiple" === M && K,
        ea = null != L ? (0, p.ZN)(V, L) : void 0,
        eo = i.useCallback(() => {
            Y || null == Q || Q(!Z);
        }, [Y, Z, Q]),
        es = i.useCallback(() => {
            var e;
            !0 === G && ("multiple" === M ? q([]) : q(null), et(""), null == (e = R.current) || e.focus());
        }, [q, M, G, et]),
        el = i.useCallback(
            (e) => {
                var t, n, r;
                er(!0),
                    null == g || g(e),
                    null == (r = R.current) ||
                        r.setSelectionRange(
                            null != (t = null == ee ? void 0 : ee.length) ? t : 0,
                            null != (n = null == ee ? void 0 : ee.length) ? n : 0,
                        );
            },
            [g, er, ee],
        ),
        ec = i.useCallback(() => {
            Y || null == Q || Q(!0);
        }, [Q, Y]),
        eu = i.useCallback(
            (e) => {
                var t;
                (null == (t = e.relatedTarget) ? void 0 : t.closest('[data-list-id="'.concat(V, '"]'))) == null &&
                    (er(!1), null == Q || Q(!1), null == A || A(e));
            },
            [A, Q, V, er],
        );
    i.useEffect(() => {
        ei &&
            !C &&
            (P.current = setTimeout(() => {
                var e;
                null == (e = R.current) ||
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                    });
            }, 10));
    }, [J, ei, C]);
    let ed = i.useCallback(() => {
            var e;
            Y || (null == Q || Q(!0), null == (e = R.current) || e.focus());
        }, [Q, Y]),
        ef = i.useCallback(() => {
            var e;
            null == (e = R.current) || e.select();
        }, []),
        ep = i.useCallback(
            (e) => {
                if (Y) return;
                let t = Array.from(e)[0];
                z(J.filter((e) => e.id !== t));
            },
            [z, J, Y],
        ),
        e_ = i.useCallback(
            (e) => {
                let t = $.length,
                    n = 1;
                switch ((null == S || S(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), null == Q || Q(!0), e.altKey || !Z))
                        )
                            return;
                        x((e) => {
                            if (null === e) return 0;
                            let r = e + n;
                            return r >= t && H ? 0 : Math.min(r, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            x((e) => {
                                if (null === e) return 0;
                                let r = e - n;
                                return r < 0 && H ? t - 1 : Math.max(r, 0);
                            }),
                            null == Q || Q(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !Z || null == L || t - 1 < L)) return;
                        let r = $[L];
                        if (null == r || !0 === r.disabled) return;
                        if (F && 1 === J.length && J.includes(r)) return void z(J);
                        z("single" === M ? [r] : (0, p.qH)(M, J, r));
                        break;
                    case "Backspace":
                        if ("multiple" === M && "" === ee && J.length > 0 && null != w.current) {
                            var i;
                            e.preventDefault(), e.stopPropagation(), null == (i = w.current.lastChild) || i.focus();
                        }
                        break;
                    case "Escape":
                        K && G && (e.preventDefault(), e.stopPropagation(), es());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        x(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        x(t - 1);
                }
            },
            [M, F, G, K, H, Z, S, es, z, J, ee, Q, $, L, x],
        ),
        eh = i.useCallback(
            (e) => {
                er(!0), et(e.target.value), null == Q || Q(!0), null == h || h(e), x(null);
            },
            [h, er, et, Q, x],
        ),
        em = i.useMemo(() => {
            if (0 === J.length) return null;
            if ("single" === M) {
                if (en) return null;
                let e = Array.from(J)[0];
                return (0, r.jsx)("div", {
                    className: v.OS,
                    children: (0, r.jsx)(
                        p.c$,
                        T(I({}, e), {
                            onClick: ef,
                            "aria-hidden": !0,
                            inInput: !0,
                        }),
                    ),
                });
            }
            if (s) return null;
            let e = Array.from(J).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: j || e.disabled,
                        accessibilityHint: b.intl.string(y.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(_.CR_, {
                listRef: w,
                label: b.intl.string(y.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: ep,
            });
        }, [M, j, ef, ep, en, J, s]),
        eg = (0, l.A)(B, N);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.pK, {
                ref: eg,
                disabled: j,
                readOnly: k,
                loading: U,
                clearable: G,
                fullWidth: !0,
                showChevronButton: f,
                isOpen: !!Z,
                isInert: Y,
                hasValue: K,
                hasError: (null == D ? void 0 : D.errorMessageId) != null,
                handleToggle: eo,
                handleClear: es,
                children: (0, r.jsx)("div", {
                    className: o()(v._U, {
                        [v.kS]: ei,
                        [v.kj]: ei && C,
                    }),
                    onClick: ed,
                    children: (0, r.jsxs)("div", {
                        className: v.P$,
                        children: [
                            em,
                            (0, r.jsx)(_.vN3, {
                                ringTarget: B,
                                children: (0, r.jsx)(m.p, {
                                    ref: R,
                                    id: t,
                                    className: o()(O.input, v.kk, {
                                        [v.kK]: "single" === M && K && !en,
                                    }),
                                    autoFocus: n,
                                    placeholder: a,
                                    role: "combobox",
                                    disabled: j,
                                    readOnly: k,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": U,
                                    "aria-controls": V,
                                    "aria-expanded": !W || Z,
                                    "aria-activedescendant": ea,
                                    "aria-labelledby": "".concat(null == D ? void 0 : D.labelId),
                                    "aria-describedby": "".concat(null == D ? void 0 : D.describedById),
                                    "aria-errormessage": null == D ? void 0 : D.errorMessageId,
                                    "aria-invalid": (null == D ? void 0 : D.errorMessageId) != null,
                                    value: null != ee ? ee : "",
                                    onChange: eh,
                                    onFocus: el,
                                    onBlur: eu,
                                    onKeyDown: e_,
                                    onClick: ec,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(p.HJ, {
                name: c,
                form: d,
                disabled: Y,
                selectionMode: M,
                selectedItems: J,
                onSelectionChange: z,
                listItems: X,
            }),
        ],
    });
}

function L(e) {
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
            handleSelectionChange: g,
            query: y,
            loading: b,
        } = (0, E.h)(),
        { i18n: O } = i.useContext(_.VOr);
    return (0, r.jsx)(d.q, {
        id: p,
        required: h,
        disabled: m,
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
                      (0, r.jsx)(f.o, {
                          message: null == y || "" === y ? O.LISTBOX_EMPTY_STATE : O.LISTBOX_EMPTY_STATE_WITH_QUERY(y),
                      }),
        maxVisibleItems: a,
        loading: b,
    });
}
