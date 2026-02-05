"use strict";
n.d(t, { X2: () => N, a3: () => C, iS: () => v });
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
    p = n(158954),
    h = n(827734),
    m = n(292666),
    g = n(397927),
    E = n(154385),
    A = n(763600),
    I = n(985018),
    T = n(100624),
    y = n(594597);
let S = { keys: ["label"] };
function v(e) {
    let { children: t, isCollapsible: n = !1, maxOptionsVisible: a = 5, isOpen: s, setIsOpen: l, options: u, ...c } = e,
        {
            selectionMode: d,
            disabled: _,
            readOnly: p,
            closeOnSelect: h,
            formatOption: m,
            onSelectionChange: g,
            value: A,
            customMatchSorter: I,
            matchSorterOptions: T,
            required: y,
        } = c,
        v = i.useId(),
        C = i.useRef(null),
        [b, N] = i.useState(null),
        [R, O] = i.useState(!1),
        [D, L] = i.useState(""),
        [w, x] = i.useState(""),
        { options: P, loading: M, onQueryChange: k } = (0, f.KH)({ active: s ?? !0, options: u, renderOption: m }),
        U = i.useCallback((e, t) => {
            x(e), L(t ?? e);
        }, []);
    i.useEffect(() => {
        k(D);
    }, [k, D]);
    let G = i.useMemo(() => ("" === D ? P : null != I ? I(P, D) : (0, o.Ht)(P, D, T ?? S)), [P, D, I, T]),
        V = i.useRef(void 0),
        F = i.useMemo(
            () =>
                ("single" === d ? (V.current = P.find((e) => e.value === A)) : (V.current = void 0),
                null == A || (Array.isArray(A) && 0 === A.length))
                    ? []
                    : (Array.isArray(A) ? A : [A]).map((e) => P.find((t) => t.value === e)).filter((e) => null != e),
            [A, P, d],
        );
    i.useEffect(() => {
        R || ("single" === d && U(V.current?.label ?? "", ""));
    }, [U, F, d, R]),
        i.useEffect(() => {
            if (s && null != V.current) {
                let e = G.findIndex((e) => e.value === V.current?.value);
                N(-1 !== e ? e : null);
            }
        }, [s, N, G]);
    let B = _ || p,
        j = i.useCallback(
            (e) => {
                if (B || (y && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === d && t.length < 1 ? g([]) : "multiple" === d ? g(t.map((e) => e.value)) : g(t[0]?.value),
                    h && s && l?.(!1),
                    O(!1);
            },
            [B, d, g, h, s, l, y],
        ),
        H = F.length > 0;
    return (0, r.jsx)(E.C.Provider, {
        value: {
            activeDescendantIndex: b,
            setActiveDescendantIndex: N,
            listBoxId: v,
            inputFieldRef: C,
            isInert: B,
            isCollapsible: n,
            hasValue: H,
            value: A,
            options: P,
            filteredOptions: G,
            selectedOptions: F,
            maxOptionsVisible: a,
            query: w,
            setQuery: U,
            loading: M,
            handleSelectionChange: j,
            isOpen: s,
            setIsOpen: l,
            isEditing: R,
            setIsEditing: O,
            ...c,
        },
        children: t,
    });
}
function C(e) {
    let { ref: t, ...n } = e,
        { fieldProps: a, props: s } = (0, u.n)(n),
        o = (0, g.rdh)(h.A.modules.select.MAX_WIDTH),
        l = i.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${o}px, auto)` }), [o]);
    return (0, r.jsx)(u.D, {
        ...a,
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, r.jsx)(b, { ...s, ref: t }),
    });
}
function b(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a = I.intl.string(A.default["A+pfVR"]),
            hideTags: o,
            name: u,
            form: d,
            showChevronButton: _ = !1,
            onQueryChange: h,
            onFocus: g,
            onBlur: S,
            onKeyDown: v,
            wrapTags: C,
            ref: b,
        } = e,
        N = i.useRef(null),
        R = i.useRef(null),
        O = i.useRef(null),
        D = i.useContext(c._),
        {
            activeDescendantIndex: L,
            setActiveDescendantIndex: w,
            selectionMode: x,
            disabled: P,
            readOnly: M,
            loading: k,
            clearable: U,
            required: G,
            listBoxId: V,
            inputFieldRef: F,
            shouldFocusWrap: B,
            isInert: j,
            isCollapsible: H,
            hasValue: Y,
            handleSelectionChange: W,
            onSelectionChange: K,
            isOpen: z,
            setIsOpen: $,
            options: q,
            selectedOptions: Z,
            filteredOptions: Q,
            query: X,
            setQuery: J,
            isEditing: ee,
            setIsEditing: et,
        } = (0, E.h)(),
        en = "multiple" === x && Y,
        er = null != L ? (0, f.ZN)(V, L) : void 0,
        ei = i.useCallback(() => {
            j || $?.(!z);
        }, [j, z, $]),
        ea = i.useCallback(() => {
            !0 === U && ("multiple" === x ? K([]) : K(null), J(""), R.current?.focus());
        }, [K, x, U, J]),
        es = i.useCallback(
            (e) => {
                et(!0), g?.(e), R.current?.setSelectionRange(X?.length ?? 0, X?.length ?? 0);
            },
            [g, et, X],
        ),
        eo = i.useCallback(() => {
            j || $?.(!0);
        }, [$, j]),
        el = i.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${V}"]`) == null && (et(!1), $?.(!1), S?.(e));
            },
            [S, $, V, et],
        );
    i.useEffect(() => {
        en &&
            !C &&
            (O.current = setTimeout(() => {
                R.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [Z, en, C]);
    let eu = i.useCallback(() => {
            j || ($?.(!0), R.current?.focus());
        }, [$, j]),
        ec = i.useCallback(() => {
            R.current?.select();
        }, []),
        ed = i.useCallback(
            (e) => {
                if (j) return;
                let t = Array.from(e)[0];
                W(Z.filter((e) => e.id !== t));
            },
            [W, Z, j],
        ),
        e_ = i.useCallback(
            (e) => {
                let t = Q.length,
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
                        let r = Q[L];
                        if (null == r || !0 === r.disabled) return;
                        if (G && 1 === Z.length && Z.includes(r)) return void W(Z);
                        W("single" === x ? [r] : (0, f.qH)(x, Z, r));
                        break;
                    case "Backspace":
                        "multiple" === x &&
                            "" === X &&
                            Z.length > 0 &&
                            null != N.current &&
                            (e.preventDefault(), e.stopPropagation(), N.current.lastChild?.focus());
                        break;
                    case "Escape":
                        Y && U && (e.preventDefault(), e.stopPropagation(), ea());
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
            [x, G, U, Y, B, z, v, ea, W, Z, X, $, Q, L, w],
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
                    className: y.OS,
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
                        isDisabled: P || e.disabled,
                        accessibilityHint: I.intl.string(A.default["/Y7vRd"]),
                    }
                );
            });
            return (0, r.jsx)(p.CR_, {
                listRef: N,
                label: I.intl.string(A.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: ed,
            });
        }, [x, P, ec, ed, ee, Z, o]),
        eh = (0, l.A)(F, b);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.pK, {
                ref: eh,
                disabled: P,
                readOnly: M,
                loading: k,
                clearable: U,
                fullWidth: !0,
                showChevronButton: _,
                isOpen: !!z,
                isInert: j,
                hasValue: Y,
                hasError: D?.errorMessageId != null,
                handleToggle: ei,
                handleClear: ea,
                children: (0, r.jsx)("div", {
                    className: s()(y._U, { [y.kS]: en, [y.kj]: en && C }),
                    onClick: eu,
                    children: (0, r.jsxs)("div", {
                        className: y.P$,
                        children: [
                            ep,
                            (0, r.jsx)(p.vN3, {
                                ringTarget: F,
                                children: (0, r.jsx)(m.p, {
                                    ref: R,
                                    id: t,
                                    className: s()(T.input, y.kk, { [y.kK]: "single" === x && Y && !ee }),
                                    autoFocus: n,
                                    placeholder: a,
                                    role: "combobox",
                                    disabled: P,
                                    readOnly: M,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": k,
                                    "aria-controls": V,
                                    "aria-expanded": !H || z,
                                    "aria-activedescendant": er,
                                    "aria-labelledby": `${D?.labelId}`,
                                    "aria-describedby": `${D?.describedById}`,
                                    "aria-errormessage": D?.errorMessageId,
                                    "aria-invalid": D?.errorMessageId != null,
                                    value: X ?? "",
                                    onChange: ef,
                                    onFocus: es,
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
                disabled: j,
                selectionMode: x,
                selectedItems: Z,
                onSelectionChange: W,
                listItems: q,
            }),
        ],
    });
}
function N(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: a = 5 } = e,
        {
            filteredOptions: s,
            selectedOptions: o,
            options: l,
            activeDescendantIndex: u,
            selectionMode: c,
            listBoxId: f,
            required: h,
            disabled: m,
            handleSelectionChange: g,
            query: A,
            loading: I,
        } = (0, E.h)(),
        { i18n: T } = i.useContext(p.VOr);
    return (0, r.jsx)(d.q, {
        id: f,
        required: h,
        disabled: m,
        items: s ?? l,
        tabIndex: -1,
        selectionMode: c,
        selectedItems: o,
        onSelectionChange: g,
        activeDescendantIndex: u,
        renderListItem: t,
        renderEmptyState:
            n ??
            (() =>
                (0, r.jsx)(_.o, {
                    message: null == A || "" === A ? T.LISTBOX_EMPTY_STATE : T.LISTBOX_EMPTY_STATE_WITH_QUERY(A),
                })),
        maxVisibleItems: a,
        loading: I,
    });
}
