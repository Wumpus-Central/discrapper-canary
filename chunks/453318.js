"use strict";
n.d(t, { iS: () => v, a3: () => b, X2: () => P }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(896170),
    o = n(612324),
    d = n(661531),
    c = n(603392),
    u = n(259678),
    _ = n(452027),
    E = n(15626),
    A = n(540637),
    h = n(992251),
    I = n(460890),
    f = n(866711),
    p = n(95477),
    T = n(991957),
    m = n(44482);
function g() {}
function S() {
    return r.useContext(N);
}
let N = r.createContext({
    value: void 0,
    options: [],
    selectedOptions: [],
    filteredOptions: [],
    groups: [],
    query: "",
    setQuery: g,
    activeDescendantIndex: null,
    setActiveDescendantIndex: g,
    loading: !1,
    selectionMode: "single",
    handleSelectionChange: g,
    onSelectionChange: g,
    isOpen: !1,
    setIsOpen: g,
    isEditing: !1,
    setIsEditing: g,
});
var C = n(601973),
    O = n(483084),
    R = n(715022),
    L = n(358983),
    y = n(470791);
let D = { keys: ["label"] };
function v(e) {
    let {
            children: t,
            isCollapsible: n = !1,
            maxOptionsVisible: a = 5,
            isOpen: s = !0,
            setIsOpen: o,
            options: d,
            ...c
        } = e,
        {
            selectionMode: u,
            disabled: _,
            readOnly: E,
            closeOnSelect: A,
            formatOption: h,
            onSelectionChange: I,
            value: f,
            customMatchSorter: p,
            matchSorterOptions: T,
            required: m,
        } = c,
        g = r.useId(),
        S = r.useRef(null),
        [C, R] = r.useState(null),
        [L, y] = r.useState(!1),
        [v, b] = r.useState(""),
        [M, P] = r.useState(""),
        {
            options: U,
            groups: w,
            loading: G,
            onQueryChange: x,
        } = (0, O.K)({ active: s ?? !0, options: d, renderOption: h }),
        k = r.useCallback((e, t) => {
            P(e), b(t ?? e);
        }, []);
    r.useEffect(() => {
        x(v);
    }, [x, v]);
    let F = r.useCallback((e) => (null != p ? p(e, v) : (0, l.Ht)(e, v, T ?? D)), [v, p, T]),
        { flatOptions: V, groups: B } = r.useMemo(() => {
            if ("" === v) return { flatOptions: U, groups: w };
            if (0 === w.length) return { flatOptions: F(U), groups: [] };
            let e = [],
                t = [],
                n = 0;
            for (let i of w) {
                let r = F(U.slice(n, n + i.count));
                (n += i.count), 0 !== r.length && (e.push(...r), t.push({ label: i.label, count: r.length }));
            }
            return { flatOptions: e, groups: t };
        }, [U, w, v, F]),
        H = r.useRef(void 0),
        j = r.useMemo(
            () =>
                ("single" === u ? (H.current = U.find((e) => e.value === f)) : (H.current = void 0),
                null == f || (Array.isArray(f) && 0 === f.length))
                    ? []
                    : (Array.isArray(f) ? f : [f]).map((e) => U.find((t) => t.value === e)).filter((e) => null != e),
            [f, U, u],
        );
    r.useEffect(() => {
        L || ("single" === u && k(H.current?.label ?? "", ""));
    }, [k, j, u, L]),
        r.useEffect(() => {
            if (s && null != H.current) {
                let e = V.findIndex((e) => e.value === H.current?.value);
                R(-1 !== e ? e : null);
            }
        }, [s, R, V]);
    let W = _ || E,
        Y = r.useCallback(
            (e) => {
                if (W || (m && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === u && t.length < 1 ? I([]) : "multiple" === u ? I(t.map((e) => e.value)) : I(t[0]?.value),
                    A && s && o?.(!1),
                    y(!1);
            },
            [W, u, I, A, s, o, m],
        ),
        K = j.length > 0;
    return (0, i.jsx)(N.Provider, {
        value: {
            activeDescendantIndex: C,
            setActiveDescendantIndex: R,
            listBoxId: g,
            inputFieldRef: S,
            isInert: W,
            isCollapsible: n,
            hasValue: K,
            value: f,
            options: U,
            filteredOptions: V,
            groups: B,
            selectedOptions: j,
            maxOptionsVisible: a,
            query: M,
            setQuery: k,
            loading: G,
            handleSelectionChange: Y,
            isOpen: s,
            setIsOpen: o,
            isEditing: L,
            setIsEditing: y,
            ...c,
        },
        children: t,
    });
}
function b(e) {
    let { ref: t, ...n } = e,
        { fieldProps: a, props: s } = (0, _.n)(n),
        l = (0, c.r)(d.A.modules.select.MAX_WIDTH),
        o = r.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${l}px, auto)` }), [l]);
    return (0, i.jsx)(_.D, {
        ...a,
        "data-mana-component": "combobox",
        layoutConfig: o,
        children: (0, i.jsx)(M, { ...s, ref: t }),
    });
}
function M(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a,
            hideTags: l,
            name: d,
            form: c,
            showChevronButton: _ = !1,
            onQueryChange: A,
            onFocus: h,
            onBlur: g,
            onKeyDown: N,
            wrapTags: O,
            ref: D,
        } = e,
        v = r.useRef(null),
        b = r.useRef(null),
        M = r.useRef(null),
        P = r.useContext(E._),
        { i18n: U } = r.useContext(I.VO),
        {
            activeDescendantIndex: w,
            setActiveDescendantIndex: G,
            selectionMode: x,
            disabled: k,
            readOnly: F,
            loading: V,
            clearable: B,
            required: H,
            listBoxId: j,
            inputFieldRef: W,
            shouldFocusWrap: Y,
            isInert: K,
            isCollapsible: $,
            hasValue: z,
            handleSelectionChange: Z,
            onSelectionChange: q,
            isOpen: X,
            setIsOpen: Q,
            options: J,
            selectedOptions: ee,
            filteredOptions: et,
            query: en,
            setQuery: ei,
            isEditing: er,
            setIsEditing: ea,
        } = S(),
        es = "multiple" === x && z,
        el = null != w ? (0, R.ZN)(j, w) : void 0,
        eo = r.useCallback(() => {
            K || Q?.((e) => (e || b.current?.focus(), !e));
        }, [K, Q]),
        ed = r.useCallback(() => {
            !0 === B && ("multiple" === x ? q([]) : q(null), ei(""), b.current?.focus());
        }, [q, x, B, ei]),
        ec = r.useCallback(
            (e) => {
                ea(!0), h?.(e), b.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0);
            },
            [h, ea, en],
        ),
        eu = r.useCallback(() => {
            K || Q?.(!0);
        }, [Q, K]),
        e_ = r.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${j}"]`) == null && (ea(!1), Q?.(!1), g?.(e));
            },
            [g, Q, j, ea],
        );
    r.useEffect(() => {
        es &&
            !O &&
            (M.current = setTimeout(() => {
                b.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, es, O]);
    let eE = r.useCallback(() => {
            K || (Q?.(!0), b.current?.focus());
        }, [Q, K]),
        eA = r.useCallback(() => {
            b.current?.select();
        }, []),
        eh = r.useCallback(
            (e) => {
                if (K) return;
                let t = Array.from(e)[0];
                Z(ee.filter((e) => e.id !== t));
            },
            [Z, ee, K],
        ),
        eI = r.useCallback(
            (e) => {
                let t = et.length,
                    n = 1;
                switch ((N?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), Q?.(!0), e.altKey || !X))
                        )
                            return;
                        G((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && Y ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            G((e) => {
                                if (null === e) return 0;
                                let i = e - n;
                                return i < 0 && Y ? t - 1 : Math.max(i, 0);
                            }),
                            Q?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !X)) {
                            if (0 === t) return;
                            Q?.(!0);
                            return;
                        }
                        if (null == w || t - 1 < w) return;
                        let i = et[w];
                        if (null == i || !0 === i.disabled) return;
                        if (H && 1 === ee.length && ee.includes(i)) return void Z(ee);
                        Z("single" === x ? [i] : (0, R.qH)(x, ee, i));
                        break;
                    case "Backspace":
                        "multiple" === x &&
                            "" === en &&
                            ee.length > 0 &&
                            null != v.current &&
                            (e.preventDefault(), e.stopPropagation(), v.current.lastChild?.focus());
                        break;
                    case "Escape":
                        z && B && (e.preventDefault(), e.stopPropagation(), ed());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        G(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        G(t - 1);
                }
            },
            [x, H, B, z, Y, X, N, ed, Z, ee, en, Q, et, w, G],
        ),
        ef = r.useCallback(
            (e) => {
                ea(!0), ei(e.target.value), Q?.(!0), A?.(e), G(null);
            },
            [A, ea, ei, Q, G],
        ),
        ep = r.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === x) {
                if (er) return null;
                let e = Array.from(ee)[0];
                return (0, i.jsx)("div", {
                    className: y.OS,
                    children: (0, i.jsx)(m.c, { ...e, onClick: eA, "aria-hidden": !0, inInput: !0 }),
                });
            }
            if (l) return null;
            let e = Array.from(ee).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: k || e.disabled,
                        accessibilityHint: U.PRESS_DELETE_TO_REMOVE_TAG,
                    }
                );
            });
            return (0, i.jsx)(f.C, {
                listRef: v,
                label: U.SELECTED_TAGS_HEADING,
                items: e,
                layout: "inline",
                onRemove: eh,
            });
        }, [x, k, eA, eh, er, ee, l, U]),
        eT = (0, o.A)(W, D);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.p, {
                ref: eT,
                disabled: k,
                readOnly: F,
                loading: V,
                clearable: B,
                fullWidth: !0,
                showChevronButton: _,
                isOpen: !!X,
                isInert: K,
                hasValue: z,
                hasError: P?.errorMessageId != null,
                handleToggle: eo,
                handleClear: ed,
                children: (0, i.jsx)("div", {
                    className: s()(y._U, { [y.kS]: es, [y.kj]: es && O }),
                    onClick: eE,
                    children: (0, i.jsxs)("div", {
                        className: y.P$,
                        children: [
                            ep,
                            (0, i.jsx)(u.vN, {
                                ringTarget: W,
                                children: (0, i.jsx)(p.p, {
                                    ref: b,
                                    id: t,
                                    className: s()(L.input, y.kk, { [y.kK]: "single" === x && z && !er }),
                                    autoFocus: n,
                                    placeholder: a ?? U.SELECT_PLACEHOLDER,
                                    role: "combobox",
                                    disabled: k,
                                    readOnly: F,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": V,
                                    "aria-controls": j,
                                    "aria-expanded": !$ || X,
                                    "aria-activedescendant": el,
                                    "aria-labelledby": P?.labelId,
                                    "aria-describedby": P?.describedById,
                                    "aria-errormessage": P?.errorMessageId,
                                    "aria-invalid": P?.errorMessageId != null,
                                    "aria-required": H,
                                    value: en ?? "",
                                    onChange: ef,
                                    onFocus: ec,
                                    onBlur: e_,
                                    onKeyDown: eI,
                                    onClick: eu,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(T.H, {
                name: d,
                form: c,
                disabled: K,
                selectionMode: x,
                selectedItems: ee,
                onSelectionChange: Z,
                listItems: J,
            }),
        ],
    });
}
function P(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: a = 5 } = e,
        {
            filteredOptions: s,
            selectedOptions: l,
            options: o,
            groups: d,
            activeDescendantIndex: c,
            selectionMode: u,
            listBoxId: _,
            required: E,
            disabled: f,
            handleSelectionChange: p,
            query: T,
            loading: m,
        } = S(),
        { i18n: g } = r.useContext(I.VO);
    return (0, i.jsx)(A.q, {
        id: _,
        required: E,
        disabled: f,
        items: s ?? o,
        groups: d,
        tabIndex: -1,
        selectionMode: u,
        selectedItems: l,
        onSelectionChange: p,
        activeDescendantIndex: c,
        renderListItem: t,
        renderEmptyState:
            n ??
            (() =>
                (0, i.jsx)(h.o, {
                    message: null == T || "" === T ? g.LISTBOX_EMPTY_STATE : g.LISTBOX_EMPTY_STATE_WITH_QUERY(T),
                })),
        maxVisibleItems: a,
        loading: m,
    });
}
