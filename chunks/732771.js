"use strict";
n.d(t, { iS: () => w, a3: () => M, X2: () => x });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(896170),
    l = n(612324),
    u = n(452027),
    c = n(15626),
    d = n(540637),
    _ = n(992251),
    h = n(483084),
    f = n(715022),
    p = n(44482),
    E = n(601973),
    m = n(991957),
    g = n(528265),
    A = n(187322),
    I = n(460890),
    T = n(661531),
    S = n(292666),
    y = n(602853),
    C = n(652215);
function N() {
    return r.useContext(v);
}
let v = r.createContext({
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
var R = n(571247),
    O = n(375708),
    b = n(311109),
    D = n(930856);
let L = { keys: ["label"] };
function w(e) {
    let {
            children: t,
            isCollapsible: n = !1,
            maxOptionsVisible: s = 5,
            isOpen: a = !0,
            setIsOpen: l,
            options: u,
            ...c
        } = e,
        {
            selectionMode: d,
            disabled: _,
            readOnly: f,
            closeOnSelect: p,
            formatOption: E,
            onSelectionChange: m,
            value: g,
            customMatchSorter: A,
            matchSorterOptions: I,
            required: T,
        } = c,
        S = r.useId(),
        y = r.useRef(null),
        [C, N] = r.useState(null),
        [R, O] = r.useState(!1),
        [b, D] = r.useState(""),
        [w, M] = r.useState(""),
        { options: P, loading: x, onQueryChange: k } = (0, h.K)({ active: a ?? !0, options: u, renderOption: E }),
        U = r.useCallback((e, t) => {
            M(e), D(t ?? e);
        }, []);
    r.useEffect(() => {
        k(b);
    }, [k, b]);
    let G = r.useMemo(() => ("" === b ? P : null != A ? A(P, b) : (0, o.Ht)(P, b, I ?? L)), [P, b, A, I]),
        F = r.useRef(void 0),
        V = r.useMemo(
            () =>
                ("single" === d ? (F.current = P.find((e) => e.value === g)) : (F.current = void 0),
                null == g || (Array.isArray(g) && 0 === g.length))
                    ? []
                    : (Array.isArray(g) ? g : [g]).map((e) => P.find((t) => t.value === e)).filter((e) => null != e),
            [g, P, d],
        );
    r.useEffect(() => {
        R || ("single" === d && U(F.current?.label ?? "", ""));
    }, [U, V, d, R]),
        r.useEffect(() => {
            if (a && null != F.current) {
                let e = G.findIndex((e) => e.value === F.current?.value);
                N(-1 !== e ? e : null);
            }
        }, [a, N, G]);
    let B = _ || f,
        j = r.useCallback(
            (e) => {
                if (B || (T && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === d && t.length < 1 ? m([]) : "multiple" === d ? m(t.map((e) => e.value)) : m(t[0]?.value),
                    p && a && l?.(!1),
                    O(!1);
            },
            [B, d, m, p, a, l, T],
        ),
        H = V.length > 0;
    return (0, i.jsx)(v.Provider, {
        value: {
            activeDescendantIndex: C,
            setActiveDescendantIndex: N,
            listBoxId: S,
            inputFieldRef: y,
            isInert: B,
            isCollapsible: n,
            hasValue: H,
            value: g,
            options: P,
            filteredOptions: G,
            selectedOptions: V,
            maxOptionsVisible: s,
            query: w,
            setQuery: U,
            loading: x,
            handleSelectionChange: j,
            isOpen: a,
            setIsOpen: l,
            isEditing: R,
            setIsEditing: O,
            ...c,
        },
        children: t,
    });
}
function M(e) {
    let { ref: t, ...n } = e,
        { fieldProps: s, props: a } = (0, u.n)(n),
        o = (0, y.r)(T.A.modules.select.MAX_WIDTH),
        l = r.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${o}px, auto)` }), [o]);
    return (0, i.jsx)(u.D, {
        ...s,
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, i.jsx)(P, { ...a, ref: t }),
    });
}
function P(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: s = O.intl.string(R.default["A+pfVR"]),
            hideTags: o,
            name: u,
            form: d,
            showChevronButton: _ = !1,
            onQueryChange: h,
            onFocus: I,
            onBlur: T,
            onKeyDown: y,
            wrapTags: C,
            ref: v,
        } = e,
        L = r.useRef(null),
        w = r.useRef(null),
        M = r.useRef(null),
        P = r.useContext(c._),
        {
            activeDescendantIndex: x,
            setActiveDescendantIndex: k,
            selectionMode: U,
            disabled: G,
            readOnly: F,
            loading: V,
            clearable: B,
            required: j,
            listBoxId: H,
            inputFieldRef: Y,
            shouldFocusWrap: W,
            isInert: K,
            isCollapsible: $,
            hasValue: z,
            handleSelectionChange: q,
            onSelectionChange: Z,
            isOpen: X,
            setIsOpen: Q,
            options: J,
            selectedOptions: ee,
            filteredOptions: et,
            query: en,
            setQuery: ei,
            isEditing: er,
            setIsEditing: es,
        } = N(),
        ea = "multiple" === U && z,
        eo = null != x ? (0, f.ZN)(H, x) : void 0,
        el = r.useCallback(() => {
            K || Q?.((e) => (e || w.current?.focus(), !e));
        }, [K, Q]),
        eu = r.useCallback(() => {
            !0 === B && ("multiple" === U ? Z([]) : Z(null), ei(""), w.current?.focus());
        }, [Z, U, B, ei]),
        ec = r.useCallback(
            (e) => {
                es(!0), I?.(e), w.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0);
            },
            [I, es, en],
        ),
        ed = r.useCallback(() => {
            K || Q?.(!0);
        }, [Q, K]),
        e_ = r.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${H}"]`) == null && (es(!1), Q?.(!1), T?.(e));
            },
            [T, Q, H, es],
        );
    r.useEffect(() => {
        ea &&
            !C &&
            (M.current = setTimeout(() => {
                w.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, ea, C]);
    let eh = r.useCallback(() => {
            K || (Q?.(!0), w.current?.focus());
        }, [Q, K]),
        ef = r.useCallback(() => {
            w.current?.select();
        }, []),
        ep = r.useCallback(
            (e) => {
                if (K) return;
                let t = Array.from(e)[0];
                q(ee.filter((e) => e.id !== t));
            },
            [q, ee, K],
        ),
        eE = r.useCallback(
            (e) => {
                let t = et.length,
                    n = 1;
                switch ((y?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), Q?.(!0), e.altKey || !X))
                        )
                            return;
                        k((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && W ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            k((e) => {
                                if (null === e) return 0;
                                let i = e - n;
                                return i < 0 && W ? t - 1 : Math.max(i, 0);
                            }),
                            Q?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !X)) {
                            if (0 === t) return;
                            Q?.(!0);
                            return;
                        }
                        if (null == x || t - 1 < x) return;
                        let i = et[x];
                        if (null == i || !0 === i.disabled) return;
                        if (j && 1 === ee.length && ee.includes(i)) return void q(ee);
                        q("single" === U ? [i] : (0, f.qH)(U, ee, i));
                        break;
                    case "Backspace":
                        "multiple" === U &&
                            "" === en &&
                            ee.length > 0 &&
                            null != L.current &&
                            (e.preventDefault(), e.stopPropagation(), L.current.lastChild?.focus());
                        break;
                    case "Escape":
                        z && B && (e.preventDefault(), e.stopPropagation(), eu());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        k(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        k(t - 1);
                }
            },
            [U, j, B, z, W, X, y, eu, q, ee, en, Q, et, x, k],
        ),
        em = r.useCallback(
            (e) => {
                es(!0), ei(e.target.value), Q?.(!0), h?.(e), k(null);
            },
            [h, es, ei, Q, k],
        ),
        eg = r.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === U) {
                if (er) return null;
                let e = Array.from(ee)[0];
                return (0, i.jsx)("div", {
                    className: D.OS,
                    children: (0, i.jsx)(p.c, { ...e, onClick: ef, "aria-hidden": !0, inInput: !0 }),
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
                        accessibilityHint: O.intl.string(R.default["/Y7vRd"]),
                    }
                );
            });
            return (0, i.jsx)(g.C, {
                listRef: L,
                label: O.intl.string(R.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: ep,
            });
        }, [U, G, ef, ep, er, ee, o]),
        eA = (0, l.A)(Y, v);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.p, {
                ref: eA,
                disabled: G,
                readOnly: F,
                loading: V,
                clearable: B,
                fullWidth: !0,
                showChevronButton: _,
                isOpen: !!X,
                isInert: K,
                hasValue: z,
                hasError: P?.errorMessageId != null,
                handleToggle: el,
                handleClear: eu,
                children: (0, i.jsx)("div", {
                    className: a()(D._U, { [D.kS]: ea, [D.kj]: ea && C }),
                    onClick: eh,
                    children: (0, i.jsxs)("div", {
                        className: D.P$,
                        children: [
                            eg,
                            (0, i.jsx)(A.vN, {
                                ringTarget: Y,
                                children: (0, i.jsx)(S.p, {
                                    ref: w,
                                    id: t,
                                    className: a()(b.input, D.kk, { [D.kK]: "single" === U && z && !er }),
                                    autoFocus: n,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: F,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": V,
                                    "aria-controls": H,
                                    "aria-expanded": !$ || X,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": `${P?.labelId}`,
                                    "aria-describedby": `${P?.describedById}`,
                                    "aria-errormessage": P?.errorMessageId,
                                    "aria-invalid": P?.errorMessageId != null,
                                    "aria-required": j,
                                    value: en ?? "",
                                    onChange: em,
                                    onFocus: ec,
                                    onBlur: e_,
                                    onKeyDown: eE,
                                    onClick: ed,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(m.H, {
                name: u,
                form: d,
                disabled: K,
                selectionMode: U,
                selectedItems: ee,
                onSelectionChange: q,
                listItems: J,
            }),
        ],
    });
}
function x(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: s = 5 } = e,
        {
            filteredOptions: a,
            selectedOptions: o,
            options: l,
            activeDescendantIndex: u,
            selectionMode: c,
            listBoxId: h,
            required: f,
            disabled: p,
            handleSelectionChange: E,
            query: m,
            loading: g,
        } = N(),
        { i18n: A } = r.useContext(I.VO);
    return (0, i.jsx)(d.q, {
        id: h,
        required: f,
        disabled: p,
        items: a ?? l,
        tabIndex: -1,
        selectionMode: c,
        selectedItems: o,
        onSelectionChange: E,
        activeDescendantIndex: u,
        renderListItem: t,
        renderEmptyState:
            n ??
            (() =>
                (0, i.jsx)(_.o, {
                    message: null == m || "" === m ? A.LISTBOX_EMPTY_STATE : A.LISTBOX_EMPTY_STATE_WITH_QUERY(m),
                })),
        maxVisibleItems: s,
        loading: g,
    });
}
