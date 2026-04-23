"use strict";
n.d(t, { X2: () => M, a3: () => L, iS: () => D });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(896170),
    l = n(612324),
    u = n(452027),
    c = n(15626),
    d = n(540637),
    _ = n(992251),
    f = n(483084),
    p = n(715022),
    h = n(44482),
    E = n(601973),
    m = n(991957),
    g = n(866711),
    A = n(187322),
    I = n(460890),
    T = n(827734),
    S = n(292666),
    y = n(602853),
    N = n(154385),
    v = n(571247),
    C = n(985018),
    O = n(311109),
    R = n(930856);
let b = { keys: ["label"] };
function D(e) {
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
            readOnly: p,
            closeOnSelect: h,
            formatOption: E,
            onSelectionChange: m,
            value: g,
            customMatchSorter: A,
            matchSorterOptions: I,
            required: T,
        } = c,
        S = i.useId(),
        y = i.useRef(null),
        [v, C] = i.useState(null),
        [O, R] = i.useState(!1),
        [D, L] = i.useState(""),
        [w, M] = i.useState(""),
        { options: P, loading: x, onQueryChange: k } = (0, f.K)({ active: a ?? !0, options: u, renderOption: E }),
        U = i.useCallback((e, t) => {
            M(e), L(t ?? e);
        }, []);
    i.useEffect(() => {
        k(D);
    }, [k, D]);
    let G = i.useMemo(() => ("" === D ? P : null != A ? A(P, D) : (0, o.Ht)(P, D, I ?? b)), [P, D, A, I]),
        F = i.useRef(void 0),
        V = i.useMemo(
            () =>
                ("single" === d ? (F.current = P.find((e) => e.value === g)) : (F.current = void 0),
                null == g || (Array.isArray(g) && 0 === g.length))
                    ? []
                    : (Array.isArray(g) ? g : [g]).map((e) => P.find((t) => t.value === e)).filter((e) => null != e),
            [g, P, d],
        );
    i.useEffect(() => {
        O || ("single" === d && U(F.current?.label ?? "", ""));
    }, [U, V, d, O]),
        i.useEffect(() => {
            if (a && null != F.current) {
                let e = G.findIndex((e) => e.value === F.current?.value);
                C(-1 !== e ? e : null);
            }
        }, [a, C, G]);
    let B = _ || p,
        H = i.useCallback(
            (e) => {
                if (B || (T && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === d && t.length < 1 ? m([]) : "multiple" === d ? m(t.map((e) => e.value)) : m(t[0]?.value),
                    h && a && l?.(!1),
                    R(!1);
            },
            [B, d, m, h, a, l, T],
        ),
        j = V.length > 0;
    return (0, r.jsx)(N.C.Provider, {
        value: {
            activeDescendantIndex: v,
            setActiveDescendantIndex: C,
            listBoxId: S,
            inputFieldRef: y,
            isInert: B,
            isCollapsible: n,
            hasValue: j,
            value: g,
            options: P,
            filteredOptions: G,
            selectedOptions: V,
            maxOptionsVisible: s,
            query: w,
            setQuery: U,
            loading: x,
            handleSelectionChange: H,
            isOpen: a,
            setIsOpen: l,
            isEditing: O,
            setIsEditing: R,
            ...c,
        },
        children: t,
    });
}
function L(e) {
    let { ref: t, ...n } = e,
        { fieldProps: s, props: a } = (0, u.n)(n),
        o = (0, y.r)(T.A.modules.select.MAX_WIDTH),
        l = i.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${o}px, auto)` }), [o]);
    return (0, r.jsx)(u.D, {
        ...s,
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, r.jsx)(w, { ...a, ref: t }),
    });
}
function w(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: s = C.intl.string(v.default["A+pfVR"]),
            hideTags: o,
            name: u,
            form: d,
            showChevronButton: _ = !1,
            onQueryChange: f,
            onFocus: I,
            onBlur: T,
            onKeyDown: y,
            wrapTags: b,
            ref: D,
        } = e,
        L = i.useRef(null),
        w = i.useRef(null),
        M = i.useRef(null),
        P = i.useContext(c._),
        {
            activeDescendantIndex: x,
            setActiveDescendantIndex: k,
            selectionMode: U,
            disabled: G,
            readOnly: F,
            loading: V,
            clearable: B,
            required: H,
            listBoxId: j,
            inputFieldRef: Y,
            shouldFocusWrap: W,
            isInert: K,
            isCollapsible: $,
            hasValue: z,
            handleSelectionChange: q,
            onSelectionChange: X,
            isOpen: Q,
            setIsOpen: Z,
            options: J,
            selectedOptions: ee,
            filteredOptions: et,
            query: en,
            setQuery: er,
            isEditing: ei,
            setIsEditing: es,
        } = (0, N.h)(),
        ea = "multiple" === U && z,
        eo = null != x ? (0, p.ZN)(j, x) : void 0,
        el = i.useCallback(() => {
            K || Z?.((e) => (e || w.current?.focus(), !e));
        }, [K, Z]),
        eu = i.useCallback(() => {
            !0 === B && ("multiple" === U ? X([]) : X(null), er(""), w.current?.focus());
        }, [X, U, B, er]),
        ec = i.useCallback(
            (e) => {
                es(!0), I?.(e), w.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0);
            },
            [I, es, en],
        ),
        ed = i.useCallback(() => {
            K || Z?.(!0);
        }, [Z, K]),
        e_ = i.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${j}"]`) == null && (es(!1), Z?.(!1), T?.(e));
            },
            [T, Z, j, es],
        );
    i.useEffect(() => {
        ea &&
            !b &&
            (M.current = setTimeout(() => {
                w.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, ea, b]);
    let ef = i.useCallback(() => {
            K || (Z?.(!0), w.current?.focus());
        }, [Z, K]),
        ep = i.useCallback(() => {
            w.current?.select();
        }, []),
        eh = i.useCallback(
            (e) => {
                if (K) return;
                let t = Array.from(e)[0];
                q(ee.filter((e) => e.id !== t));
            },
            [q, ee, K],
        ),
        eE = i.useCallback(
            (e) => {
                let t = et.length,
                    n = 1;
                switch ((y?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), Z?.(!0), e.altKey || !Q))
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
                            Z?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !Q || null == x || t - 1 < x)) return;
                        let r = et[x];
                        if (null == r || !0 === r.disabled) return;
                        if (H && 1 === ee.length && ee.includes(r)) return void q(ee);
                        q("single" === U ? [r] : (0, p.qH)(U, ee, r));
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
            [U, H, B, z, W, Q, y, eu, q, ee, en, Z, et, x, k],
        ),
        em = i.useCallback(
            (e) => {
                es(!0), er(e.target.value), Z?.(!0), f?.(e), k(null);
            },
            [f, es, er, Z, k],
        ),
        eg = i.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === U) {
                if (ei) return null;
                let e = Array.from(ee)[0];
                return (0, r.jsx)("div", {
                    className: R.OS,
                    children: (0, r.jsx)(h.c, { ...e, onClick: ep, "aria-hidden": !0, inInput: !0 }),
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
                        accessibilityHint: C.intl.string(v.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(g.C, {
                listRef: L,
                label: C.intl.string(v.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: eh,
            });
        }, [U, G, ep, eh, ei, ee, o]),
        eA = (0, l.A)(Y, D);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(E.p, {
                ref: eA,
                disabled: G,
                readOnly: F,
                loading: V,
                clearable: B,
                fullWidth: !0,
                showChevronButton: _,
                isOpen: !!Q,
                isInert: K,
                hasValue: z,
                hasError: P?.errorMessageId != null,
                handleToggle: el,
                handleClear: eu,
                children: (0, r.jsx)("div", {
                    className: a()(R._U, { [R.kS]: ea, [R.kj]: ea && b }),
                    onClick: ef,
                    children: (0, r.jsxs)("div", {
                        className: R.P$,
                        children: [
                            eg,
                            (0, r.jsx)(A.vN, {
                                ringTarget: Y,
                                children: (0, r.jsx)(S.p, {
                                    ref: w,
                                    id: t,
                                    className: a()(O.input, R.kk, { [R.kK]: "single" === U && z && !ei }),
                                    autoFocus: n,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: F,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": V,
                                    "aria-controls": j,
                                    "aria-expanded": !$ || Q,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": `${P?.labelId}`,
                                    "aria-describedby": `${P?.describedById}`,
                                    "aria-errormessage": P?.errorMessageId,
                                    "aria-invalid": P?.errorMessageId != null,
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
            (0, r.jsx)(m.H, {
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
function M(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: s = 5 } = e,
        {
            filteredOptions: a,
            selectedOptions: o,
            options: l,
            activeDescendantIndex: u,
            selectionMode: c,
            listBoxId: f,
            required: p,
            disabled: h,
            handleSelectionChange: E,
            query: m,
            loading: g,
        } = (0, N.h)(),
        { i18n: A } = i.useContext(I.VO);
    return (0, r.jsx)(d.q, {
        id: f,
        required: p,
        disabled: h,
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
                (0, r.jsx)(_.o, {
                    message: null == m || "" === m ? A.LISTBOX_EMPTY_STATE : A.LISTBOX_EMPTY_STATE_WITH_QUERY(m),
                })),
        maxVisibleItems: s,
        loading: g,
    });
}
