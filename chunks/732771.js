"use strict";
n.d(t, { iS: () => P, a3: () => b, X2: () => U });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(896170),
    l = n(612324),
    _ = n(452027),
    d = n(15626),
    u = n(649998),
    c = n(992251),
    E = n(483084),
    h = n(715022),
    m = n(44482),
    f = n(601973),
    g = n(991957),
    I = n(340351),
    A = n(187322),
    p = n(460890),
    T = n(661531),
    S = n(292666),
    N = n(602853),
    O = n(652215);
function R() {
    return r.useContext(C);
}
let C = r.createContext({
    value: void 0,
    options: [],
    selectedOptions: [],
    filteredOptions: [],
    query: "",
    setQuery: O.tEg,
    activeDescendantIndex: null,
    setActiveDescendantIndex: O.tEg,
    loading: !1,
    selectionMode: "single",
    handleSelectionChange: O.tEg,
    onSelectionChange: O.tEg,
    isOpen: !1,
    setIsOpen: O.tEg,
    isEditing: !1,
    setIsEditing: O.tEg,
});
var y = n(571247),
    D = n(985018),
    L = n(311109),
    v = n(930856);
let w = { keys: ["label"] };
function P(e) {
    let {
            children: t,
            isCollapsible: n = !1,
            maxOptionsVisible: s = 5,
            isOpen: a = !0,
            setIsOpen: l,
            options: _,
            ...d
        } = e,
        {
            selectionMode: u,
            disabled: c,
            readOnly: h,
            closeOnSelect: m,
            formatOption: f,
            onSelectionChange: g,
            value: I,
            customMatchSorter: A,
            matchSorterOptions: p,
            required: T,
        } = d,
        S = r.useId(),
        N = r.useRef(null),
        [O, R] = r.useState(null),
        [y, D] = r.useState(!1),
        [L, v] = r.useState(""),
        [P, b] = r.useState(""),
        { options: k, loading: U, onQueryChange: M } = (0, E.K)({ active: a ?? !0, options: _, renderOption: f }),
        G = r.useCallback((e, t) => {
            b(e), v(t ?? e);
        }, []);
    r.useEffect(() => {
        M(L);
    }, [M, L]);
    let x = r.useMemo(() => ("" === L ? k : null != A ? A(k, L) : (0, o.Ht)(k, L, p ?? w)), [k, L, A, p]),
        V = r.useRef(void 0),
        F = r.useMemo(
            () =>
                ("single" === u ? (V.current = k.find((e) => e.value === I)) : (V.current = void 0),
                null == I || (Array.isArray(I) && 0 === I.length))
                    ? []
                    : (Array.isArray(I) ? I : [I]).map((e) => k.find((t) => t.value === e)).filter((e) => null != e),
            [I, k, u],
        );
    r.useEffect(() => {
        y || ("single" === u && G(V.current?.label ?? "", ""));
    }, [G, F, u, y]),
        r.useEffect(() => {
            if (a && null != V.current) {
                let e = x.findIndex((e) => e.value === V.current?.value);
                R(-1 !== e ? e : null);
            }
        }, [a, R, x]);
    let B = c || h,
        H = r.useCallback(
            (e) => {
                if (B || (T && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === u && t.length < 1 ? g([]) : "multiple" === u ? g(t.map((e) => e.value)) : g(t[0]?.value),
                    m && a && l?.(!1),
                    D(!1);
            },
            [B, u, g, m, a, l, T],
        ),
        Y = F.length > 0;
    return (0, i.jsx)(C.Provider, {
        value: {
            activeDescendantIndex: O,
            setActiveDescendantIndex: R,
            listBoxId: S,
            inputFieldRef: N,
            isInert: B,
            isCollapsible: n,
            hasValue: Y,
            value: I,
            options: k,
            filteredOptions: x,
            selectedOptions: F,
            maxOptionsVisible: s,
            query: P,
            setQuery: G,
            loading: U,
            handleSelectionChange: H,
            isOpen: a,
            setIsOpen: l,
            isEditing: y,
            setIsEditing: D,
            ...d,
        },
        children: t,
    });
}
function b(e) {
    let { ref: t, ...n } = e,
        { fieldProps: s, props: a } = (0, _.n)(n),
        o = (0, N.r)(T.A.modules.select.MAX_WIDTH),
        l = r.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${o}px, auto)` }), [o]);
    return (0, i.jsx)(_.D, {
        ...s,
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, i.jsx)(k, { ...a, ref: t }),
    });
}
function k(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: s = D.intl.string(y.default["A+pfVR"]),
            hideTags: o,
            name: _,
            form: u,
            showChevronButton: c = !1,
            onQueryChange: E,
            onFocus: p,
            onBlur: T,
            onKeyDown: N,
            wrapTags: O,
            ref: C,
        } = e,
        w = r.useRef(null),
        P = r.useRef(null),
        b = r.useRef(null),
        k = r.useContext(d._),
        {
            activeDescendantIndex: U,
            setActiveDescendantIndex: M,
            selectionMode: G,
            disabled: x,
            readOnly: V,
            loading: F,
            clearable: B,
            required: H,
            listBoxId: Y,
            inputFieldRef: W,
            shouldFocusWrap: K,
            isInert: j,
            isCollapsible: $,
            hasValue: z,
            handleSelectionChange: q,
            onSelectionChange: X,
            isOpen: Q,
            setIsOpen: J,
            options: Z,
            selectedOptions: ee,
            filteredOptions: et,
            query: en,
            setQuery: ei,
            isEditing: er,
            setIsEditing: es,
        } = R(),
        ea = "multiple" === G && z,
        eo = null != U ? (0, h.ZN)(Y, U) : void 0,
        el = r.useCallback(() => {
            j || J?.((e) => (e || P.current?.focus(), !e));
        }, [j, J]),
        e_ = r.useCallback(() => {
            !0 === B && ("multiple" === G ? X([]) : X(null), ei(""), P.current?.focus());
        }, [X, G, B, ei]),
        ed = r.useCallback(
            (e) => {
                es(!0), p?.(e), P.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0);
            },
            [p, es, en],
        ),
        eu = r.useCallback(() => {
            j || J?.(!0);
        }, [J, j]),
        ec = r.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${Y}"]`) == null && (es(!1), J?.(!1), T?.(e));
            },
            [T, J, Y, es],
        );
    r.useEffect(() => {
        ea &&
            !O &&
            (b.current = setTimeout(() => {
                P.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, ea, O]);
    let eE = r.useCallback(() => {
            j || (J?.(!0), P.current?.focus());
        }, [J, j]),
        eh = r.useCallback(() => {
            P.current?.select();
        }, []),
        em = r.useCallback(
            (e) => {
                if (j) return;
                let t = Array.from(e)[0];
                q(ee.filter((e) => e.id !== t));
            },
            [q, ee, j],
        ),
        ef = r.useCallback(
            (e) => {
                let t = et.length,
                    n = 1;
                switch ((N?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), J?.(!0), e.altKey || !Q))
                        )
                            return;
                        M((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && K ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            M((e) => {
                                if (null === e) return 0;
                                let i = e - n;
                                return i < 0 && K ? t - 1 : Math.max(i, 0);
                            }),
                            J?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !Q || null == U || t - 1 < U)) return;
                        let i = et[U];
                        if (null == i || !0 === i.disabled) return;
                        if (H && 1 === ee.length && ee.includes(i)) return void q(ee);
                        q("single" === G ? [i] : (0, h.qH)(G, ee, i));
                        break;
                    case "Backspace":
                        "multiple" === G &&
                            "" === en &&
                            ee.length > 0 &&
                            null != w.current &&
                            (e.preventDefault(), e.stopPropagation(), w.current.lastChild?.focus());
                        break;
                    case "Escape":
                        z && B && (e.preventDefault(), e.stopPropagation(), e_());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        M(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        M(t - 1);
                }
            },
            [G, H, B, z, K, Q, N, e_, q, ee, en, J, et, U, M],
        ),
        eg = r.useCallback(
            (e) => {
                es(!0), ei(e.target.value), J?.(!0), E?.(e), M(null);
            },
            [E, es, ei, J, M],
        ),
        eI = r.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === G) {
                if (er) return null;
                let e = Array.from(ee)[0];
                return (0, i.jsx)("div", {
                    className: v.OS,
                    children: (0, i.jsx)(m.c, { ...e, onClick: eh, "aria-hidden": !0, inInput: !0 }),
                });
            }
            if (o) return null;
            let e = Array.from(ee).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: x || e.disabled,
                        accessibilityHint: D.intl.string(y.default["/Y7vRd"]),
                    }
                );
            });
            return (0, i.jsx)(I.C, {
                listRef: w,
                label: D.intl.string(y.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: em,
            });
        }, [G, x, eh, em, er, ee, o]),
        eA = (0, l.A)(W, C);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.p, {
                ref: eA,
                disabled: x,
                readOnly: V,
                loading: F,
                clearable: B,
                fullWidth: !0,
                showChevronButton: c,
                isOpen: !!Q,
                isInert: j,
                hasValue: z,
                hasError: k?.errorMessageId != null,
                handleToggle: el,
                handleClear: e_,
                children: (0, i.jsx)("div", {
                    className: a()(v._U, { [v.kS]: ea, [v.kj]: ea && O }),
                    onClick: eE,
                    children: (0, i.jsxs)("div", {
                        className: v.P$,
                        children: [
                            eI,
                            (0, i.jsx)(A.vN, {
                                ringTarget: W,
                                children: (0, i.jsx)(S.p, {
                                    ref: P,
                                    id: t,
                                    className: a()(L.input, v.kk, { [v.kK]: "single" === G && z && !er }),
                                    autoFocus: n,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: x,
                                    readOnly: V,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": F,
                                    "aria-controls": Y,
                                    "aria-expanded": !$ || Q,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": `${k?.labelId}`,
                                    "aria-describedby": `${k?.describedById}`,
                                    "aria-errormessage": k?.errorMessageId,
                                    "aria-invalid": k?.errorMessageId != null,
                                    "aria-required": H,
                                    value: en ?? "",
                                    onChange: eg,
                                    onFocus: ed,
                                    onBlur: ec,
                                    onKeyDown: ef,
                                    onClick: eu,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(g.H, {
                name: _,
                form: u,
                disabled: j,
                selectionMode: G,
                selectedItems: ee,
                onSelectionChange: q,
                listItems: Z,
            }),
        ],
    });
}
function U(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: s = 5 } = e,
        {
            filteredOptions: a,
            selectedOptions: o,
            options: l,
            activeDescendantIndex: _,
            selectionMode: d,
            listBoxId: E,
            required: h,
            disabled: m,
            handleSelectionChange: f,
            query: g,
            loading: I,
        } = R(),
        { i18n: A } = r.useContext(p.VO);
    return (0, i.jsx)(u.q, {
        id: E,
        required: h,
        disabled: m,
        items: a ?? l,
        tabIndex: -1,
        selectionMode: d,
        selectedItems: o,
        onSelectionChange: f,
        activeDescendantIndex: _,
        renderListItem: t,
        renderEmptyState:
            n ??
            (() =>
                (0, i.jsx)(c.o, {
                    message: null == g || "" === g ? A.LISTBOX_EMPTY_STATE : A.LISTBOX_EMPTY_STATE_WITH_QUERY(g),
                })),
        maxVisibleItems: s,
        loading: I,
    });
}
