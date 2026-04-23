"use strict";
n.d(t, { iS: () => w, a3: () => P, X2: () => M });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(896170),
    l = n(612324),
    d = n(452027),
    _ = n(15626),
    u = n(649998),
    c = n(992251),
    E = n(483084),
    h = n(715022),
    m = n(44482),
    f = n(601973),
    g = n(991957),
    p = n(340351),
    A = n(187322),
    I = n(460890),
    T = n(661531),
    S = n(292666),
    N = n(602853),
    C = n(652215);
function R() {
    return r.useContext(O);
}
let O = r.createContext({
    value: void 0,
    options: [],
    selectedOptions: [],
    filteredOptions: [],
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
var y = n(571247),
    v = n(985018),
    D = n(311109),
    L = n(930856);
let b = { keys: ["label"] };
function w(e) {
    let {
            children: t,
            isCollapsible: n = !1,
            maxOptionsVisible: s = 5,
            isOpen: a = !0,
            setIsOpen: l,
            options: d,
            ..._
        } = e,
        {
            selectionMode: u,
            disabled: c,
            readOnly: h,
            closeOnSelect: m,
            formatOption: f,
            onSelectionChange: g,
            value: p,
            customMatchSorter: A,
            matchSorterOptions: I,
            required: T,
        } = _,
        S = r.useId(),
        N = r.useRef(null),
        [C, R] = r.useState(null),
        [y, v] = r.useState(!1),
        [D, L] = r.useState(""),
        [w, P] = r.useState(""),
        { options: k, loading: M, onQueryChange: U } = (0, E.K)({ active: a ?? !0, options: d, renderOption: f }),
        x = r.useCallback((e, t) => {
            P(e), L(t ?? e);
        }, []);
    r.useEffect(() => {
        U(D);
    }, [U, D]);
    let G = r.useMemo(() => ("" === D ? k : null != A ? A(k, D) : (0, o.Ht)(k, D, I ?? b)), [k, D, A, I]),
        V = r.useRef(void 0),
        F = r.useMemo(
            () =>
                ("single" === u ? (V.current = k.find((e) => e.value === p)) : (V.current = void 0),
                null == p || (Array.isArray(p) && 0 === p.length))
                    ? []
                    : (Array.isArray(p) ? p : [p]).map((e) => k.find((t) => t.value === e)).filter((e) => null != e),
            [p, k, u],
        );
    r.useEffect(() => {
        y || ("single" === u && x(V.current?.label ?? "", ""));
    }, [x, F, u, y]),
        r.useEffect(() => {
            if (a && null != V.current) {
                let e = G.findIndex((e) => e.value === V.current?.value);
                R(-1 !== e ? e : null);
            }
        }, [a, R, G]);
    let B = c || h,
        H = r.useCallback(
            (e) => {
                if (B || (T && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === u && t.length < 1 ? g([]) : "multiple" === u ? g(t.map((e) => e.value)) : g(t[0]?.value),
                    m && a && l?.(!1),
                    v(!1);
            },
            [B, u, g, m, a, l, T],
        ),
        j = F.length > 0;
    return (0, i.jsx)(O.Provider, {
        value: {
            activeDescendantIndex: C,
            setActiveDescendantIndex: R,
            listBoxId: S,
            inputFieldRef: N,
            isInert: B,
            isCollapsible: n,
            hasValue: j,
            value: p,
            options: k,
            filteredOptions: G,
            selectedOptions: F,
            maxOptionsVisible: s,
            query: w,
            setQuery: x,
            loading: M,
            handleSelectionChange: H,
            isOpen: a,
            setIsOpen: l,
            isEditing: y,
            setIsEditing: v,
            ..._,
        },
        children: t,
    });
}
function P(e) {
    let { ref: t, ...n } = e,
        { fieldProps: s, props: a } = (0, d.n)(n),
        o = (0, N.r)(T.A.modules.select.MAX_WIDTH),
        l = r.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${o}px, auto)` }), [o]);
    return (0, i.jsx)(d.D, {
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
            placeholder: s = v.intl.string(y.default["A+pfVR"]),
            hideTags: o,
            name: d,
            form: u,
            showChevronButton: c = !1,
            onQueryChange: E,
            onFocus: I,
            onBlur: T,
            onKeyDown: N,
            wrapTags: C,
            ref: O,
        } = e,
        b = r.useRef(null),
        w = r.useRef(null),
        P = r.useRef(null),
        k = r.useContext(_._),
        {
            activeDescendantIndex: M,
            setActiveDescendantIndex: U,
            selectionMode: x,
            disabled: G,
            readOnly: V,
            loading: F,
            clearable: B,
            required: H,
            listBoxId: j,
            inputFieldRef: W,
            shouldFocusWrap: Y,
            isInert: K,
            isCollapsible: z,
            hasValue: $,
            handleSelectionChange: q,
            onSelectionChange: X,
            isOpen: Z,
            setIsOpen: Q,
            options: J,
            selectedOptions: ee,
            filteredOptions: et,
            query: en,
            setQuery: ei,
            isEditing: er,
            setIsEditing: es,
        } = R(),
        ea = "multiple" === x && $,
        eo = null != M ? (0, h.ZN)(j, M) : void 0,
        el = r.useCallback(() => {
            K || Q?.((e) => (e || w.current?.focus(), !e));
        }, [K, Q]),
        ed = r.useCallback(() => {
            !0 === B && ("multiple" === x ? X([]) : X(null), ei(""), w.current?.focus());
        }, [X, x, B, ei]),
        e_ = r.useCallback(
            (e) => {
                es(!0), I?.(e), w.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0);
            },
            [I, es, en],
        ),
        eu = r.useCallback(() => {
            K || Q?.(!0);
        }, [Q, K]),
        ec = r.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${j}"]`) == null && (es(!1), Q?.(!1), T?.(e));
            },
            [T, Q, j, es],
        );
    r.useEffect(() => {
        ea &&
            !C &&
            (P.current = setTimeout(() => {
                w.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, ea, C]);
    let eE = r.useCallback(() => {
            K || (Q?.(!0), w.current?.focus());
        }, [Q, K]),
        eh = r.useCallback(() => {
            w.current?.select();
        }, []),
        em = r.useCallback(
            (e) => {
                if (K) return;
                let t = Array.from(e)[0];
                q(ee.filter((e) => e.id !== t));
            },
            [q, ee, K],
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
                            0 === t || (e.preventDefault(), Q?.(!0), e.altKey || !Z))
                        )
                            return;
                        U((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && Y ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            U((e) => {
                                if (null === e) return 0;
                                let i = e - n;
                                return i < 0 && Y ? t - 1 : Math.max(i, 0);
                            }),
                            Q?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !Z || null == M || t - 1 < M)) return;
                        let i = et[M];
                        if (null == i || !0 === i.disabled) return;
                        if (H && 1 === ee.length && ee.includes(i)) return void q(ee);
                        q("single" === x ? [i] : (0, h.qH)(x, ee, i));
                        break;
                    case "Backspace":
                        "multiple" === x &&
                            "" === en &&
                            ee.length > 0 &&
                            null != b.current &&
                            (e.preventDefault(), e.stopPropagation(), b.current.lastChild?.focus());
                        break;
                    case "Escape":
                        $ && B && (e.preventDefault(), e.stopPropagation(), ed());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        U(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        U(t - 1);
                }
            },
            [x, H, B, $, Y, Z, N, ed, q, ee, en, Q, et, M, U],
        ),
        eg = r.useCallback(
            (e) => {
                es(!0), ei(e.target.value), Q?.(!0), E?.(e), U(null);
            },
            [E, es, ei, Q, U],
        ),
        ep = r.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === x) {
                if (er) return null;
                let e = Array.from(ee)[0];
                return (0, i.jsx)("div", {
                    className: L.OS,
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
                        isDisabled: G || e.disabled,
                        accessibilityHint: v.intl.string(y.default["/Y7vRd"]),
                    }
                );
            });
            return (0, i.jsx)(p.C, {
                listRef: b,
                label: v.intl.string(y.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: em,
            });
        }, [x, G, eh, em, er, ee, o]),
        eA = (0, l.A)(W, O);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.p, {
                ref: eA,
                disabled: G,
                readOnly: V,
                loading: F,
                clearable: B,
                fullWidth: !0,
                showChevronButton: c,
                isOpen: !!Z,
                isInert: K,
                hasValue: $,
                hasError: k?.errorMessageId != null,
                handleToggle: el,
                handleClear: ed,
                children: (0, i.jsx)("div", {
                    className: a()(L._U, { [L.kS]: ea, [L.kj]: ea && C }),
                    onClick: eE,
                    children: (0, i.jsxs)("div", {
                        className: L.P$,
                        children: [
                            ep,
                            (0, i.jsx)(A.vN, {
                                ringTarget: W,
                                children: (0, i.jsx)(S.p, {
                                    ref: w,
                                    id: t,
                                    className: a()(D.input, L.kk, { [L.kK]: "single" === x && $ && !er }),
                                    autoFocus: n,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: V,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": F,
                                    "aria-controls": j,
                                    "aria-expanded": !z || Z,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": `${k?.labelId}`,
                                    "aria-describedby": `${k?.describedById}`,
                                    "aria-errormessage": k?.errorMessageId,
                                    "aria-invalid": k?.errorMessageId != null,
                                    value: en ?? "",
                                    onChange: eg,
                                    onFocus: e_,
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
                name: d,
                form: u,
                disabled: K,
                selectionMode: x,
                selectedItems: ee,
                onSelectionChange: q,
                listItems: J,
            }),
        ],
    });
}
function M(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: s = 5 } = e,
        {
            filteredOptions: a,
            selectedOptions: o,
            options: l,
            activeDescendantIndex: d,
            selectionMode: _,
            listBoxId: E,
            required: h,
            disabled: m,
            handleSelectionChange: f,
            query: g,
            loading: p,
        } = R(),
        { i18n: A } = r.useContext(I.VO);
    return (0, i.jsx)(u.q, {
        id: E,
        required: h,
        disabled: m,
        items: a ?? l,
        tabIndex: -1,
        selectionMode: _,
        selectedItems: o,
        onSelectionChange: f,
        activeDescendantIndex: d,
        renderListItem: t,
        renderEmptyState:
            n ??
            (() =>
                (0, i.jsx)(c.o, {
                    message: null == g || "" === g ? A.LISTBOX_EMPTY_STATE : A.LISTBOX_EMPTY_STATE_WITH_QUERY(g),
                })),
        maxVisibleItems: s,
        loading: p,
    });
}
