"use strict";
n.d(t, { iS: () => M, a3: () => P, X2: () => w }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(896170),
    o = n(612324),
    d = n(452027),
    c = n(15626),
    u = n(540637),
    _ = n(992251),
    E = n(483084),
    A = n(715022),
    h = n(44482),
    I = n(601973),
    f = n(991957),
    p = n(95477),
    T = n(340351),
    m = n(259678),
    g = n(460890),
    S = n(661531),
    N = n(602853),
    C = n(652215);
function O() {
    return r.useContext(R);
}
let R = r.createContext({
    value: void 0,
    options: [],
    selectedOptions: [],
    filteredOptions: [],
    groups: [],
    query: "",
    setQuery: C.tEg,
    activeDescendantIndex: null,
    setActiveDescendantIndex: C.tEg,
    loading: !1,
    selectionMode: "single",
    handleSelectionChange: C.tEg,
    onSelectionChange: C.tEg,
    isOpen: !1,
    setIsOpen: C.tEg,
    isEditing: !1,
    setIsEditing: C.tEg,
});
var L = n(528399),
    y = n(375708),
    D = n(470791),
    v = n(358983);
let b = { keys: ["label"] };
function M(e) {
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
            readOnly: A,
            closeOnSelect: h,
            formatOption: I,
            onSelectionChange: f,
            value: p,
            customMatchSorter: T,
            matchSorterOptions: m,
            required: g,
        } = c,
        S = r.useId(),
        N = r.useRef(null),
        [C, O] = r.useState(null),
        [L, y] = r.useState(!1),
        [D, v] = r.useState(""),
        [M, P] = r.useState(""),
        {
            options: U,
            groups: w,
            loading: G,
            onQueryChange: x,
        } = (0, E.K)({ active: s ?? !0, options: d, renderOption: I }),
        k = r.useCallback((e, t) => {
            P(e), v(t ?? e);
        }, []);
    r.useEffect(() => {
        x(D);
    }, [x, D]);
    let F = r.useCallback((e) => (null != T ? T(e, D) : (0, l.Ht)(e, D, m ?? b)), [D, T, m]),
        { flatOptions: V, groups: B } = r.useMemo(() => {
            if ("" === D) return { flatOptions: U, groups: w };
            if (0 === w.length) return { flatOptions: F(U), groups: [] };
            let e = [],
                t = [],
                n = 0;
            for (let i of w) {
                let r = F(U.slice(n, n + i.count));
                (n += i.count), 0 !== r.length && (e.push(...r), t.push({ label: i.label, count: r.length }));
            }
            return { flatOptions: e, groups: t };
        }, [U, w, D, F]),
        H = r.useRef(void 0),
        j = r.useMemo(
            () =>
                ("single" === u ? (H.current = U.find((e) => e.value === p)) : (H.current = void 0),
                null == p || (Array.isArray(p) && 0 === p.length))
                    ? []
                    : (Array.isArray(p) ? p : [p]).map((e) => U.find((t) => t.value === e)).filter((e) => null != e),
            [p, U, u],
        );
    r.useEffect(() => {
        L || ("single" === u && k(H.current?.label ?? "", ""));
    }, [k, j, u, L]),
        r.useEffect(() => {
            if (s && null != H.current) {
                let e = V.findIndex((e) => e.value === H.current?.value);
                O(-1 !== e ? e : null);
            }
        }, [s, O, V]);
    let W = _ || A,
        Y = r.useCallback(
            (e) => {
                if (W || (g && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === u && t.length < 1 ? f([]) : "multiple" === u ? f(t.map((e) => e.value)) : f(t[0]?.value),
                    h && s && o?.(!1),
                    y(!1);
            },
            [W, u, f, h, s, o, g],
        ),
        K = j.length > 0;
    return (0, i.jsx)(R.Provider, {
        value: {
            activeDescendantIndex: C,
            setActiveDescendantIndex: O,
            listBoxId: S,
            inputFieldRef: N,
            isInert: W,
            isCollapsible: n,
            hasValue: K,
            value: p,
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
function P(e) {
    let { ref: t, ...n } = e,
        { fieldProps: a, props: s } = (0, d.n)(n),
        l = (0, N.r)(S.A.modules.select.MAX_WIDTH),
        o = r.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${l}px, auto)` }), [l]);
    return (0, i.jsx)(d.D, {
        ...a,
        "data-mana-component": "combobox",
        layoutConfig: o,
        children: (0, i.jsx)(U, { ...s, ref: t }),
    });
}
function U(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a = y.intl.string(L.default["A+pfVR"]),
            hideTags: l,
            name: d,
            form: u,
            showChevronButton: _ = !1,
            onQueryChange: E,
            onFocus: g,
            onBlur: S,
            onKeyDown: N,
            wrapTags: C,
            ref: R,
        } = e,
        b = r.useRef(null),
        M = r.useRef(null),
        P = r.useRef(null),
        U = r.useContext(c._),
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
        } = O(),
        es = "multiple" === x && z,
        el = null != w ? (0, A.ZN)(j, w) : void 0,
        eo = r.useCallback(() => {
            K || Q?.((e) => (e || M.current?.focus(), !e));
        }, [K, Q]),
        ed = r.useCallback(() => {
            !0 === B && ("multiple" === x ? q([]) : q(null), ei(""), M.current?.focus());
        }, [q, x, B, ei]),
        ec = r.useCallback(
            (e) => {
                ea(!0), g?.(e), M.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0);
            },
            [g, ea, en],
        ),
        eu = r.useCallback(() => {
            K || Q?.(!0);
        }, [Q, K]),
        e_ = r.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${j}"]`) == null && (ea(!1), Q?.(!1), S?.(e));
            },
            [S, Q, j, ea],
        );
    r.useEffect(() => {
        es &&
            !C &&
            (P.current = setTimeout(() => {
                M.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, es, C]);
    let eE = r.useCallback(() => {
            K || (Q?.(!0), M.current?.focus());
        }, [Q, K]),
        eA = r.useCallback(() => {
            M.current?.select();
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
                        Z("single" === x ? [i] : (0, A.qH)(x, ee, i));
                        break;
                    case "Backspace":
                        "multiple" === x &&
                            "" === en &&
                            ee.length > 0 &&
                            null != b.current &&
                            (e.preventDefault(), e.stopPropagation(), b.current.lastChild?.focus());
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
                ea(!0), ei(e.target.value), Q?.(!0), E?.(e), G(null);
            },
            [E, ea, ei, Q, G],
        ),
        ep = r.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === x) {
                if (er) return null;
                let e = Array.from(ee)[0];
                return (0, i.jsx)("div", {
                    className: D.OS,
                    children: (0, i.jsx)(h.c, { ...e, onClick: eA, "aria-hidden": !0, inInput: !0 }),
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
                        accessibilityHint: y.intl.string(L.default["/Y7vRd"]),
                    }
                );
            });
            return (0, i.jsx)(T.C, {
                listRef: b,
                label: y.intl.string(L.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: eh,
            });
        }, [x, k, eA, eh, er, ee, l]),
        eT = (0, o.A)(W, R);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.p, {
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
                hasError: U?.errorMessageId != null,
                handleToggle: eo,
                handleClear: ed,
                children: (0, i.jsx)("div", {
                    className: s()(D._U, { [D.kS]: es, [D.kj]: es && C }),
                    onClick: eE,
                    children: (0, i.jsxs)("div", {
                        className: D.P$,
                        children: [
                            ep,
                            (0, i.jsx)(m.vN, {
                                ringTarget: W,
                                children: (0, i.jsx)(p.p, {
                                    ref: M,
                                    id: t,
                                    className: s()(v.input, D.kk, { [D.kK]: "single" === x && z && !er }),
                                    autoFocus: n,
                                    placeholder: a,
                                    role: "combobox",
                                    disabled: k,
                                    readOnly: F,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": V,
                                    "aria-controls": j,
                                    "aria-expanded": !$ || X,
                                    "aria-activedescendant": el,
                                    "aria-labelledby": U?.labelId,
                                    "aria-describedby": U?.describedById,
                                    "aria-errormessage": U?.errorMessageId,
                                    "aria-invalid": U?.errorMessageId != null,
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
            (0, i.jsx)(f.H, {
                name: d,
                form: u,
                disabled: K,
                selectionMode: x,
                selectedItems: ee,
                onSelectionChange: Z,
                listItems: J,
            }),
        ],
    });
}
function w(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: a = 5 } = e,
        {
            filteredOptions: s,
            selectedOptions: l,
            options: o,
            groups: d,
            activeDescendantIndex: c,
            selectionMode: E,
            listBoxId: A,
            required: h,
            disabled: I,
            handleSelectionChange: f,
            query: p,
            loading: T,
        } = O(),
        { i18n: m } = r.useContext(g.VO);
    return (0, i.jsx)(u.q, {
        id: A,
        required: h,
        disabled: I,
        items: s ?? o,
        groups: d,
        tabIndex: -1,
        selectionMode: E,
        selectedItems: l,
        onSelectionChange: f,
        activeDescendantIndex: c,
        renderListItem: t,
        renderEmptyState:
            n ??
            (() =>
                (0, i.jsx)(_.o, {
                    message: null == p || "" === p ? m.LISTBOX_EMPTY_STATE : m.LISTBOX_EMPTY_STATE_WITH_QUERY(p),
                })),
        maxVisibleItems: a,
        loading: T,
    });
}
