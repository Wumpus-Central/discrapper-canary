"use strict";
n.d(t, { X2: () => R, a3: () => b, iS: () => C });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(896170),
    l = n(612324),
    u = n(452027),
    c = n(15626),
    d = n(540637),
    _ = n(992251),
    f = n(978617),
    h = n(158954),
    p = n(827734),
    g = n(292666),
    E = n(397927),
    A = n(154385),
    I = n(763600),
    T = n(985018),
    y = n(100624),
    S = n(594597);
let v = { keys: ["label"] };
function C(e) {
    let { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5, isOpen: s, setIsOpen: l, options: u, ...c } = e,
        {
            selectionMode: d,
            disabled: _,
            readOnly: h,
            closeOnSelect: p,
            formatOption: g,
            onSelectionChange: E,
            value: I,
            customMatchSorter: T,
            matchSorterOptions: y,
            required: S,
        } = c,
        C = i.useId(),
        b = i.useRef(null),
        [N, R] = i.useState(null),
        [O, D] = i.useState(!1),
        [L, w] = i.useState(""),
        [x, P] = i.useState(""),
        { options: M, loading: k, onQueryChange: U } = (0, f.KH)({ active: s ?? !0, options: u, renderOption: g }),
        G = i.useCallback((e, t) => {
            P(e), w(t ?? e);
        }, []);
    i.useEffect(() => {
        U(L);
    }, [U, L]);
    let F = i.useMemo(() => ("" === L ? M : null != T ? T(M, L) : (0, o.Ht)(M, L, y ?? v)), [M, L, T, y]),
        V = i.useRef(void 0),
        B = i.useMemo(
            () =>
                ("single" === d ? (V.current = M.find((e) => e.value === I)) : (V.current = void 0),
                null == I || (Array.isArray(I) && 0 === I.length))
                    ? []
                    : (Array.isArray(I) ? I : [I]).map((e) => M.find((t) => t.value === e)).filter((e) => null != e),
            [I, M, d],
        );
    i.useEffect(() => {
        O || ("single" === d && G(V.current?.label ?? "", ""));
    }, [G, B, d, O]),
        i.useEffect(() => {
            if (s && null != V.current) {
                let e = F.findIndex((e) => e.value === V.current?.value);
                R(-1 !== e ? e : null);
            }
        }, [s, R, F]);
    let j = _ || h,
        H = i.useCallback(
            (e) => {
                if (j || (S && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === d && t.length < 1 ? E([]) : "multiple" === d ? E(t.map((e) => e.value)) : E(t[0]?.value),
                    p && s && l?.(!1),
                    D(!1);
            },
            [j, d, E, p, s, l, S],
        ),
        Y = B.length > 0;
    return (0, r.jsx)(A.C.Provider, {
        value: {
            activeDescendantIndex: N,
            setActiveDescendantIndex: R,
            listBoxId: C,
            inputFieldRef: b,
            isInert: j,
            isCollapsible: n,
            hasValue: Y,
            value: I,
            options: M,
            filteredOptions: F,
            selectedOptions: B,
            maxOptionsVisible: a,
            query: x,
            setQuery: G,
            loading: k,
            handleSelectionChange: H,
            isOpen: s,
            setIsOpen: l,
            isEditing: O,
            setIsEditing: D,
            ...c,
        },
        children: t,
    });
}
function b(e) {
    let { ref: t, ...n } = e,
        { fieldProps: a, props: s } = (0, u.n)(n),
        o = (0, E.rdh)(p.A.modules.select.MAX_WIDTH),
        l = i.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${o}px, auto)` }), [o]);
    return (0, r.jsx)(u.D, {
        ...a,
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, r.jsx)(N, { ...s, ref: t }),
    });
}
function N(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a = T.intl.string(I.default["A+pfVR"]),
            hideTags: o,
            name: u,
            form: d,
            showChevronButton: _ = !1,
            onQueryChange: p,
            onFocus: E,
            onBlur: v,
            onKeyDown: C,
            wrapTags: b,
            ref: N,
        } = e,
        R = i.useRef(null),
        O = i.useRef(null),
        D = i.useRef(null),
        L = i.useContext(c._),
        {
            activeDescendantIndex: w,
            setActiveDescendantIndex: x,
            selectionMode: P,
            disabled: M,
            readOnly: k,
            loading: U,
            clearable: G,
            required: F,
            listBoxId: V,
            inputFieldRef: B,
            shouldFocusWrap: j,
            isInert: H,
            isCollapsible: Y,
            hasValue: W,
            handleSelectionChange: K,
            onSelectionChange: $,
            isOpen: z,
            setIsOpen: q,
            options: X,
            selectedOptions: Z,
            filteredOptions: Q,
            query: J,
            setQuery: ee,
            isEditing: et,
            setIsEditing: en,
        } = (0, A.h)(),
        er = "multiple" === P && W,
        ei = null != w ? (0, f.ZN)(V, w) : void 0,
        ea = i.useCallback(() => {
            H || q?.(!z);
        }, [H, z, q]),
        es = i.useCallback(() => {
            !0 === G && ("multiple" === P ? $([]) : $(null), ee(""), O.current?.focus());
        }, [$, P, G, ee]),
        eo = i.useCallback(
            (e) => {
                en(!0), E?.(e), O.current?.setSelectionRange(J?.length ?? 0, J?.length ?? 0);
            },
            [E, en, J],
        ),
        el = i.useCallback(() => {
            H || q?.(!0);
        }, [q, H]),
        eu = i.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${V}"]`) == null && (en(!1), q?.(!1), v?.(e));
            },
            [v, q, V, en],
        );
    i.useEffect(() => {
        er &&
            !b &&
            (D.current = setTimeout(() => {
                O.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [Z, er, b]);
    let ec = i.useCallback(() => {
            H || (q?.(!0), O.current?.focus());
        }, [q, H]),
        ed = i.useCallback(() => {
            O.current?.select();
        }, []),
        e_ = i.useCallback(
            (e) => {
                if (H) return;
                let t = Array.from(e)[0];
                K(Z.filter((e) => e.id !== t));
            },
            [K, Z, H],
        ),
        ef = i.useCallback(
            (e) => {
                let t = Q.length,
                    n = 1;
                switch ((C?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), q?.(!0), e.altKey || !z))
                        )
                            return;
                        x((e) => {
                            if (null === e) return 0;
                            let r = e + n;
                            return r >= t && j ? 0 : Math.min(r, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            x((e) => {
                                if (null === e) return 0;
                                let r = e - n;
                                return r < 0 && j ? t - 1 : Math.max(r, 0);
                            }),
                            q?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !z || null == w || t - 1 < w)) return;
                        let r = Q[w];
                        if (null == r || !0 === r.disabled) return;
                        if (F && 1 === Z.length && Z.includes(r)) return void K(Z);
                        K("single" === P ? [r] : (0, f.qH)(P, Z, r));
                        break;
                    case "Backspace":
                        "multiple" === P &&
                            "" === J &&
                            Z.length > 0 &&
                            null != R.current &&
                            (e.preventDefault(), e.stopPropagation(), R.current.lastChild?.focus());
                        break;
                    case "Escape":
                        W && G && (e.preventDefault(), e.stopPropagation(), es());
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
            [P, F, G, W, j, z, C, es, K, Z, J, q, Q, w, x],
        ),
        eh = i.useCallback(
            (e) => {
                en(!0), ee(e.target.value), q?.(!0), p?.(e), x(null);
            },
            [p, en, ee, q, x],
        ),
        ep = i.useMemo(() => {
            if (0 === Z.length) return null;
            if ("single" === P) {
                if (et) return null;
                let e = Array.from(Z)[0];
                return (0, r.jsx)("div", {
                    className: S.OS,
                    children: (0, r.jsx)(f.c$, { ...e, onClick: ed, "aria-hidden": !0, inInput: !0 }),
                });
            }
            if (o) return null;
            let e = Array.from(Z).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: M || e.disabled,
                        accessibilityHint: T.intl.string(I.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(h.CR_, {
                listRef: R,
                label: T.intl.string(I.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: e_,
            });
        }, [P, M, ed, e_, et, Z, o]),
        em = (0, l.A)(B, N);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.pK, {
                ref: em,
                disabled: M,
                readOnly: k,
                loading: U,
                clearable: G,
                fullWidth: !0,
                showChevronButton: _,
                isOpen: !!z,
                isInert: H,
                hasValue: W,
                hasError: L?.errorMessageId != null,
                handleToggle: ea,
                handleClear: es,
                children: (0, r.jsx)("div", {
                    className: s()(S._U, { [S.kS]: er, [S.kj]: er && b }),
                    onClick: ec,
                    children: (0, r.jsxs)("div", {
                        className: S.P$,
                        children: [
                            ep,
                            (0, r.jsx)(h.vN3, {
                                ringTarget: B,
                                children: (0, r.jsx)(g.p, {
                                    ref: O,
                                    id: t,
                                    className: s()(y.input, S.kk, { [S.kK]: "single" === P && W && !et }),
                                    autoFocus: n,
                                    placeholder: a,
                                    role: "combobox",
                                    disabled: M,
                                    readOnly: k,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": U,
                                    "aria-controls": V,
                                    "aria-expanded": !Y || z,
                                    "aria-activedescendant": ei,
                                    "aria-labelledby": `${L?.labelId}`,
                                    "aria-describedby": `${L?.describedById}`,
                                    "aria-errormessage": L?.errorMessageId,
                                    "aria-invalid": L?.errorMessageId != null,
                                    value: J ?? "",
                                    onChange: eh,
                                    onFocus: eo,
                                    onBlur: eu,
                                    onKeyDown: ef,
                                    onClick: el,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, r.jsx)(f.HJ, {
                name: u,
                form: d,
                disabled: H,
                selectionMode: P,
                selectedItems: Z,
                onSelectionChange: K,
                listItems: X,
            }),
        ],
    });
}
function R(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: a = 5 } = e,
        {
            filteredOptions: s,
            selectedOptions: o,
            options: l,
            activeDescendantIndex: u,
            selectionMode: c,
            listBoxId: f,
            required: p,
            disabled: g,
            handleSelectionChange: E,
            query: I,
            loading: T,
        } = (0, A.h)(),
        { i18n: y } = i.useContext(h.VOr);
    return (0, r.jsx)(d.q, {
        id: f,
        required: p,
        disabled: g,
        items: s ?? l,
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
                    message: null == I || "" === I ? y.LISTBOX_EMPTY_STATE : y.LISTBOX_EMPTY_STATE_WITH_QUERY(I),
                })),
        maxVisibleItems: a,
        loading: T,
    });
}
