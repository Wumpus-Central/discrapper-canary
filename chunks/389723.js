"use strict";
n.d(t, { X2: () => b, a3: () => N, iS: () => v });
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
    f = n(978617),
    p = n(158954),
    h = n(827734),
    m = n(292666),
    E = n(397927),
    g = n(154385),
    A = n(763600),
    I = n(985018),
    T = n(100624),
    S = n(594597);
let y = { keys: ["label"] };
function v(e) {
    let { children: t, isCollapsible: n = !1, maxOptionsVisible: s = 5, isOpen: a, setIsOpen: l, options: u, ...c } = e,
        {
            selectionMode: d,
            disabled: _,
            readOnly: p,
            closeOnSelect: h,
            formatOption: m,
            onSelectionChange: E,
            value: A,
            customMatchSorter: I,
            matchSorterOptions: T,
            required: S,
        } = c,
        v = i.useId(),
        N = i.useRef(null),
        [C, b] = i.useState(null),
        [R, O] = i.useState(!1),
        [D, L] = i.useState(""),
        [w, x] = i.useState(""),
        { options: M, loading: P, onQueryChange: k } = (0, f.KH)({ active: a ?? !0, options: u, renderOption: m }),
        U = i.useCallback((e, t) => {
            x(e), L(t ?? e);
        }, []);
    i.useEffect(() => {
        k(D);
    }, [k, D]);
    let G = i.useMemo(() => ("" === D ? M : null != I ? I(M, D) : (0, o.Ht)(M, D, T ?? y)), [M, D, I, T]),
        F = i.useRef(void 0),
        V = i.useMemo(
            () =>
                ("single" === d ? (F.current = M.find((e) => e.value === A)) : (F.current = void 0),
                null == A || (Array.isArray(A) && 0 === A.length))
                    ? []
                    : (Array.isArray(A) ? A : [A]).map((e) => M.find((t) => t.value === e)).filter((e) => null != e),
            [A, M, d],
        );
    i.useEffect(() => {
        R || ("single" === d && U(F.current?.label ?? "", ""));
    }, [U, V, d, R]),
        i.useEffect(() => {
            if (a && null != F.current) {
                let e = G.findIndex((e) => e.value === F.current?.value);
                b(-1 !== e ? e : null);
            }
        }, [a, b, G]);
    let B = _ || p,
        H = i.useCallback(
            (e) => {
                if (B || (S && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === d && t.length < 1 ? E([]) : "multiple" === d ? E(t.map((e) => e.value)) : E(t[0]?.value),
                    h && a && l?.(!1),
                    O(!1);
            },
            [B, d, E, h, a, l, S],
        ),
        j = V.length > 0;
    return (0, r.jsx)(g.C.Provider, {
        value: {
            activeDescendantIndex: C,
            setActiveDescendantIndex: b,
            listBoxId: v,
            inputFieldRef: N,
            isInert: B,
            isCollapsible: n,
            hasValue: j,
            value: A,
            options: M,
            filteredOptions: G,
            selectedOptions: V,
            maxOptionsVisible: s,
            query: w,
            setQuery: U,
            loading: P,
            handleSelectionChange: H,
            isOpen: a,
            setIsOpen: l,
            isEditing: R,
            setIsEditing: O,
            ...c,
        },
        children: t,
    });
}
function N(e) {
    let { ref: t, ...n } = e,
        { fieldProps: s, props: a } = (0, u.n)(n),
        o = (0, E.rdh)(h.A.modules.select.MAX_WIDTH),
        l = i.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${o}px, auto)` }), [o]);
    return (0, r.jsx)(u.D, {
        ...s,
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, r.jsx)(C, { ...a, ref: t }),
    });
}
function C(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: s = I.intl.string(A.default["A+pfVR"]),
            hideTags: o,
            name: u,
            form: d,
            showChevronButton: _ = !1,
            onQueryChange: h,
            onFocus: E,
            onBlur: y,
            onKeyDown: v,
            wrapTags: N,
            ref: C,
        } = e,
        b = i.useRef(null),
        R = i.useRef(null),
        O = i.useRef(null),
        D = i.useContext(c._),
        {
            activeDescendantIndex: L,
            setActiveDescendantIndex: w,
            selectionMode: x,
            disabled: M,
            readOnly: P,
            loading: k,
            clearable: U,
            required: G,
            listBoxId: F,
            inputFieldRef: V,
            shouldFocusWrap: B,
            isInert: H,
            isCollapsible: j,
            hasValue: Y,
            handleSelectionChange: W,
            onSelectionChange: K,
            isOpen: z,
            setIsOpen: $,
            options: q,
            selectedOptions: Z,
            filteredOptions: X,
            query: Q,
            setQuery: J,
            isEditing: ee,
            setIsEditing: et,
        } = (0, g.h)(),
        en = "multiple" === x && Y,
        er = null != L ? (0, f.ZN)(F, L) : void 0,
        ei = i.useCallback(() => {
            H || $?.(!z);
        }, [H, z, $]),
        es = i.useCallback(() => {
            !0 === U && ("multiple" === x ? K([]) : K(null), J(""), R.current?.focus());
        }, [K, x, U, J]),
        ea = i.useCallback(
            (e) => {
                et(!0), E?.(e), R.current?.setSelectionRange(Q?.length ?? 0, Q?.length ?? 0);
            },
            [E, et, Q],
        ),
        eo = i.useCallback(() => {
            H || $?.(!0);
        }, [$, H]),
        el = i.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${F}"]`) == null && (et(!1), $?.(!1), y?.(e));
            },
            [y, $, F, et],
        );
    i.useEffect(() => {
        en &&
            !N &&
            (O.current = setTimeout(() => {
                R.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [Z, en, N]);
    let eu = i.useCallback(() => {
            H || ($?.(!0), R.current?.focus());
        }, [$, H]),
        ec = i.useCallback(() => {
            R.current?.select();
        }, []),
        ed = i.useCallback(
            (e) => {
                if (H) return;
                let t = Array.from(e)[0];
                W(Z.filter((e) => e.id !== t));
            },
            [W, Z, H],
        ),
        e_ = i.useCallback(
            (e) => {
                let t = X.length,
                    n = 1;
                switch ((v?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), $?.(!0), e.altKey || !z))
                        )
                            return;
                        w((e) => {
                            if (null === e) return 0;
                            let r = e + n;
                            return r >= t && B ? 0 : Math.min(r, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            w((e) => {
                                if (null === e) return 0;
                                let r = e - n;
                                return r < 0 && B ? t - 1 : Math.max(r, 0);
                            }),
                            $?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !z || null == L || t - 1 < L)) return;
                        let r = X[L];
                        if (null == r || !0 === r.disabled) return;
                        if (G && 1 === Z.length && Z.includes(r)) return void W(Z);
                        W("single" === x ? [r] : (0, f.qH)(x, Z, r));
                        break;
                    case "Backspace":
                        "multiple" === x &&
                            "" === Q &&
                            Z.length > 0 &&
                            null != b.current &&
                            (e.preventDefault(), e.stopPropagation(), b.current.lastChild?.focus());
                        break;
                    case "Escape":
                        Y && U && (e.preventDefault(), e.stopPropagation(), es());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        w(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        w(t - 1);
                }
            },
            [x, G, U, Y, B, z, v, es, W, Z, Q, $, X, L, w],
        ),
        ef = i.useCallback(
            (e) => {
                et(!0), J(e.target.value), $?.(!0), h?.(e), w(null);
            },
            [h, et, J, $, w],
        ),
        ep = i.useMemo(() => {
            if (0 === Z.length) return null;
            if ("single" === x) {
                if (ee) return null;
                let e = Array.from(Z)[0];
                return (0, r.jsx)("div", {
                    className: S.OS,
                    children: (0, r.jsx)(f.c$, { ...e, onClick: ec, "aria-hidden": !0, inInput: !0 }),
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
                        accessibilityHint: I.intl.string(A.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(p.CR_, {
                listRef: b,
                label: I.intl.string(A.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: ed,
            });
        }, [x, M, ec, ed, ee, Z, o]),
        eh = (0, l.A)(V, C);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.pK, {
                ref: eh,
                disabled: M,
                readOnly: P,
                loading: k,
                clearable: U,
                fullWidth: !0,
                showChevronButton: _,
                isOpen: !!z,
                isInert: H,
                hasValue: Y,
                hasError: D?.errorMessageId != null,
                handleToggle: ei,
                handleClear: es,
                children: (0, r.jsx)("div", {
                    className: a()(S._U, { [S.kS]: en, [S.kj]: en && N }),
                    onClick: eu,
                    children: (0, r.jsxs)("div", {
                        className: S.P$,
                        children: [
                            ep,
                            (0, r.jsx)(p.vN3, {
                                ringTarget: V,
                                children: (0, r.jsx)(m.p, {
                                    ref: R,
                                    id: t,
                                    className: a()(T.input, S.kk, { [S.kK]: "single" === x && Y && !ee }),
                                    autoFocus: n,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: M,
                                    readOnly: P,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": k,
                                    "aria-controls": F,
                                    "aria-expanded": !j || z,
                                    "aria-activedescendant": er,
                                    "aria-labelledby": `${D?.labelId}`,
                                    "aria-describedby": `${D?.describedById}`,
                                    "aria-errormessage": D?.errorMessageId,
                                    "aria-invalid": D?.errorMessageId != null,
                                    value: Q ?? "",
                                    onChange: ef,
                                    onFocus: ea,
                                    onBlur: el,
                                    onKeyDown: e_,
                                    onClick: eo,
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
                selectionMode: x,
                selectedItems: Z,
                onSelectionChange: W,
                listItems: q,
            }),
        ],
    });
}
function b(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: s = 5 } = e,
        {
            filteredOptions: a,
            selectedOptions: o,
            options: l,
            activeDescendantIndex: u,
            selectionMode: c,
            listBoxId: f,
            required: h,
            disabled: m,
            handleSelectionChange: E,
            query: A,
            loading: I,
        } = (0, g.h)(),
        { i18n: T } = i.useContext(p.VOr);
    return (0, r.jsx)(d.q, {
        id: f,
        required: h,
        disabled: m,
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
                    message: null == A || "" === A ? T.LISTBOX_EMPTY_STATE : T.LISTBOX_EMPTY_STATE_WITH_QUERY(A),
                })),
        maxVisibleItems: s,
        loading: I,
    });
}
