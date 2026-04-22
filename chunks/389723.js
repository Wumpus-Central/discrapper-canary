"use strict";
n.d(t, { X2: () => M, a3: () => L, iS: () => D });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(896170),
    l = n(612324),
    u = n(452027),
    d = n(15626),
    c = n(540637),
    _ = n(992251),
    f = n(483084),
    E = n(715022),
    h = n(44482),
    p = n(601973),
    m = n(991957),
    g = n(866711),
    A = n(187322),
    I = n(460890),
    T = n(827734),
    S = n(292666),
    y = n(602853),
    N = n(154385),
    O = n(571247),
    R = n(985018),
    v = n(311109),
    C = n(930856);
let b = { keys: ["label"] };
function D(e) {
    let {
            children: t,
            isCollapsible: n = !1,
            maxOptionsVisible: s = 5,
            isOpen: a = !0,
            setIsOpen: l,
            options: u,
            ...d
        } = e,
        {
            selectionMode: c,
            disabled: _,
            readOnly: E,
            closeOnSelect: h,
            formatOption: p,
            onSelectionChange: m,
            value: g,
            customMatchSorter: A,
            matchSorterOptions: I,
            required: T,
        } = d,
        S = i.useId(),
        y = i.useRef(null),
        [O, R] = i.useState(null),
        [v, C] = i.useState(!1),
        [D, L] = i.useState(""),
        [w, M] = i.useState(""),
        { options: P, loading: U, onQueryChange: k } = (0, f.K)({ active: a ?? !0, options: u, renderOption: p }),
        x = i.useCallback((e, t) => {
            M(e), L(t ?? e);
        }, []);
    i.useEffect(() => {
        k(D);
    }, [k, D]);
    let G = i.useMemo(() => ("" === D ? P : null != A ? A(P, D) : (0, o.Ht)(P, D, I ?? b)), [P, D, A, I]),
        V = i.useRef(void 0),
        F = i.useMemo(
            () =>
                ("single" === c ? (V.current = P.find((e) => e.value === g)) : (V.current = void 0),
                null == g || (Array.isArray(g) && 0 === g.length))
                    ? []
                    : (Array.isArray(g) ? g : [g]).map((e) => P.find((t) => t.value === e)).filter((e) => null != e),
            [g, P, c],
        );
    i.useEffect(() => {
        v || ("single" === c && x(V.current?.label ?? "", ""));
    }, [x, F, c, v]),
        i.useEffect(() => {
            if (a && null != V.current) {
                let e = G.findIndex((e) => e.value === V.current?.value);
                R(-1 !== e ? e : null);
            }
        }, [a, R, G]);
    let B = _ || E,
        H = i.useCallback(
            (e) => {
                if (B || (T && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === c && t.length < 1 ? m([]) : "multiple" === c ? m(t.map((e) => e.value)) : m(t[0]?.value),
                    h && a && l?.(!1),
                    C(!1);
            },
            [B, c, m, h, a, l, T],
        ),
        Y = F.length > 0;
    return (0, r.jsx)(N.C.Provider, {
        value: {
            activeDescendantIndex: O,
            setActiveDescendantIndex: R,
            listBoxId: S,
            inputFieldRef: y,
            isInert: B,
            isCollapsible: n,
            hasValue: Y,
            value: g,
            options: P,
            filteredOptions: G,
            selectedOptions: F,
            maxOptionsVisible: s,
            query: w,
            setQuery: x,
            loading: U,
            handleSelectionChange: H,
            isOpen: a,
            setIsOpen: l,
            isEditing: v,
            setIsEditing: C,
            ...d,
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
            placeholder: s = R.intl.string(O.default["A+pfVR"]),
            hideTags: o,
            name: u,
            form: c,
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
        P = i.useContext(d._),
        {
            activeDescendantIndex: U,
            setActiveDescendantIndex: k,
            selectionMode: x,
            disabled: G,
            readOnly: V,
            loading: F,
            clearable: B,
            required: H,
            listBoxId: Y,
            inputFieldRef: W,
            shouldFocusWrap: j,
            isInert: K,
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
            setQuery: er,
            isEditing: ei,
            setIsEditing: es,
        } = (0, N.h)(),
        ea = "multiple" === x && z,
        eo = null != U ? (0, E.ZN)(Y, U) : void 0,
        el = i.useCallback(() => {
            K || J?.((e) => (e || w.current?.focus(), !e));
        }, [K, J]),
        eu = i.useCallback(() => {
            !0 === B && ("multiple" === x ? X([]) : X(null), er(""), w.current?.focus());
        }, [X, x, B, er]),
        ed = i.useCallback(
            (e) => {
                es(!0), I?.(e), w.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0);
            },
            [I, es, en],
        ),
        ec = i.useCallback(() => {
            K || J?.(!0);
        }, [J, K]),
        e_ = i.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${Y}"]`) == null && (es(!1), J?.(!1), T?.(e));
            },
            [T, J, Y, es],
        );
    i.useEffect(() => {
        ea &&
            !b &&
            (M.current = setTimeout(() => {
                w.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, ea, b]);
    let ef = i.useCallback(() => {
            K || (J?.(!0), w.current?.focus());
        }, [J, K]),
        eE = i.useCallback(() => {
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
        ep = i.useCallback(
            (e) => {
                let t = et.length,
                    n = 1;
                switch ((y?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), J?.(!0), e.altKey || !Q))
                        )
                            return;
                        k((e) => {
                            if (null === e) return 0;
                            let r = e + n;
                            return r >= t && j ? 0 : Math.min(r, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            k((e) => {
                                if (null === e) return 0;
                                let r = e - n;
                                return r < 0 && j ? t - 1 : Math.max(r, 0);
                            }),
                            J?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !Q || null == U || t - 1 < U)) return;
                        let r = et[U];
                        if (null == r || !0 === r.disabled) return;
                        if (H && 1 === ee.length && ee.includes(r)) return void q(ee);
                        q("single" === x ? [r] : (0, E.qH)(x, ee, r));
                        break;
                    case "Backspace":
                        "multiple" === x &&
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
            [x, H, B, z, j, Q, y, eu, q, ee, en, J, et, U, k],
        ),
        em = i.useCallback(
            (e) => {
                es(!0), er(e.target.value), J?.(!0), f?.(e), k(null);
            },
            [f, es, er, J, k],
        ),
        eg = i.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === x) {
                if (ei) return null;
                let e = Array.from(ee)[0];
                return (0, r.jsx)("div", {
                    className: C.OS,
                    children: (0, r.jsx)(h.c, { ...e, onClick: eE, "aria-hidden": !0, inInput: !0 }),
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
                        accessibilityHint: R.intl.string(O.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(g.C, {
                listRef: L,
                label: R.intl.string(O.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: eh,
            });
        }, [x, G, eE, eh, ei, ee, o]),
        eA = (0, l.A)(W, D);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.p, {
                ref: eA,
                disabled: G,
                readOnly: V,
                loading: F,
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
                    className: a()(C._U, { [C.kS]: ea, [C.kj]: ea && b }),
                    onClick: ef,
                    children: (0, r.jsxs)("div", {
                        className: C.P$,
                        children: [
                            eg,
                            (0, r.jsx)(A.vN, {
                                ringTarget: W,
                                children: (0, r.jsx)(S.p, {
                                    ref: w,
                                    id: t,
                                    className: a()(v.input, C.kk, { [C.kK]: "single" === x && z && !ei }),
                                    autoFocus: n,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: V,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": F,
                                    "aria-controls": Y,
                                    "aria-expanded": !$ || Q,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": `${P?.labelId}`,
                                    "aria-describedby": `${P?.describedById}`,
                                    "aria-errormessage": P?.errorMessageId,
                                    "aria-invalid": P?.errorMessageId != null,
                                    value: en ?? "",
                                    onChange: em,
                                    onFocus: ed,
                                    onBlur: e_,
                                    onKeyDown: ep,
                                    onClick: ec,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(m.H, {
                name: u,
                form: c,
                disabled: K,
                selectionMode: x,
                selectedItems: ee,
                onSelectionChange: q,
                listItems: Z,
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
            selectionMode: d,
            listBoxId: f,
            required: E,
            disabled: h,
            handleSelectionChange: p,
            query: m,
            loading: g,
        } = (0, N.h)(),
        { i18n: A } = i.useContext(I.VO);
    return (0, r.jsx)(c.q, {
        id: f,
        required: E,
        disabled: h,
        items: a ?? l,
        tabIndex: -1,
        selectionMode: d,
        selectedItems: o,
        onSelectionChange: p,
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
