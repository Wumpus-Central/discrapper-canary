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
    f = n(483084),
    h = n(715022),
    p = n(44482),
    E = n(601973),
    m = n(991957),
    g = n(528265),
    A = n(187322),
    I = n(460890),
    T = n(661531),
    S = n(292666),
    N = n(602853),
    y = n(652215);
function C() {
    return r.useContext(v);
}
let v = r.createContext({
    value: void 0,
    options: [],
    selectedOptions: [],
    filteredOptions: [],
    query: "",
    setQuery: y.tEg,
    activeDescendantIndex: null,
    setActiveDescendantIndex: y.tEg,
    loading: !1,
    selectionMode: "single",
    handleSelectionChange: y.tEg,
    onSelectionChange: y.tEg,
    isOpen: !1,
    setIsOpen: y.tEg,
    isEditing: !1,
    setIsEditing: y.tEg,
});
var O = n(571247),
    R = n(375708),
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
            readOnly: h,
            closeOnSelect: p,
            formatOption: E,
            onSelectionChange: m,
            value: g,
            customMatchSorter: A,
            matchSorterOptions: I,
            required: T,
        } = c,
        S = r.useId(),
        N = r.useRef(null),
        [y, C] = r.useState(null),
        [O, R] = r.useState(!1),
        [b, D] = r.useState(""),
        [w, M] = r.useState(""),
        { options: P, loading: x, onQueryChange: U } = (0, f.K)({ active: a ?? !0, options: u, renderOption: E }),
        k = r.useCallback((e, t) => {
            M(e), D(t ?? e);
        }, []);
    r.useEffect(() => {
        U(b);
    }, [U, b]);
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
        O || ("single" === d && k(F.current?.label ?? "", ""));
    }, [k, V, d, O]),
        r.useEffect(() => {
            if (a && null != F.current) {
                let e = G.findIndex((e) => e.value === F.current?.value);
                C(-1 !== e ? e : null);
            }
        }, [a, C, G]);
    let B = _ || h,
        H = r.useCallback(
            (e) => {
                if (B || (T && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === d && t.length < 1 ? m([]) : "multiple" === d ? m(t.map((e) => e.value)) : m(t[0]?.value),
                    p && a && l?.(!1),
                    R(!1);
            },
            [B, d, m, p, a, l, T],
        ),
        j = V.length > 0;
    return (0, i.jsx)(v.Provider, {
        value: {
            activeDescendantIndex: y,
            setActiveDescendantIndex: C,
            listBoxId: S,
            inputFieldRef: N,
            isInert: B,
            isCollapsible: n,
            hasValue: j,
            value: g,
            options: P,
            filteredOptions: G,
            selectedOptions: V,
            maxOptionsVisible: s,
            query: w,
            setQuery: k,
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
function M(e) {
    let { ref: t, ...n } = e,
        { fieldProps: s, props: a } = (0, u.n)(n),
        o = (0, N.r)(T.A.modules.select.MAX_WIDTH),
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
            placeholder: s = R.intl.string(O.default["A+pfVR"]),
            hideTags: o,
            name: u,
            form: d,
            showChevronButton: _ = !1,
            onQueryChange: f,
            onFocus: I,
            onBlur: T,
            onKeyDown: N,
            wrapTags: y,
            ref: v,
        } = e,
        L = r.useRef(null),
        w = r.useRef(null),
        M = r.useRef(null),
        P = r.useContext(c._),
        {
            activeDescendantIndex: x,
            setActiveDescendantIndex: U,
            selectionMode: k,
            disabled: G,
            readOnly: F,
            loading: V,
            clearable: B,
            required: H,
            listBoxId: j,
            inputFieldRef: Y,
            shouldFocusWrap: W,
            isInert: K,
            isCollapsible: z,
            hasValue: $,
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
        } = C(),
        ea = "multiple" === k && $,
        eo = null != x ? (0, h.ZN)(j, x) : void 0,
        el = r.useCallback(() => {
            K || Q?.((e) => (e || w.current?.focus(), !e));
        }, [K, Q]),
        eu = r.useCallback(() => {
            !0 === B && ("multiple" === k ? Z([]) : Z(null), ei(""), w.current?.focus());
        }, [Z, k, B, ei]),
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
                e.relatedTarget?.closest(`[data-list-id="${j}"]`) == null && (es(!1), Q?.(!1), T?.(e));
            },
            [T, Q, j, es],
        );
    r.useEffect(() => {
        ea &&
            !y &&
            (M.current = setTimeout(() => {
                w.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, ea, y]);
    let ef = r.useCallback(() => {
            K || (Q?.(!0), w.current?.focus());
        }, [Q, K]),
        eh = r.useCallback(() => {
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
                switch ((N?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), Q?.(!0), e.altKey || !X))
                        )
                            return;
                        U((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && W ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            U((e) => {
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
                        if (H && 1 === ee.length && ee.includes(i)) return void q(ee);
                        q("single" === k ? [i] : (0, h.qH)(k, ee, i));
                        break;
                    case "Backspace":
                        "multiple" === k &&
                            "" === en &&
                            ee.length > 0 &&
                            null != L.current &&
                            (e.preventDefault(), e.stopPropagation(), L.current.lastChild?.focus());
                        break;
                    case "Escape":
                        $ && B && (e.preventDefault(), e.stopPropagation(), eu());
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
            [k, H, B, $, W, X, N, eu, q, ee, en, Q, et, x, U],
        ),
        em = r.useCallback(
            (e) => {
                es(!0), ei(e.target.value), Q?.(!0), f?.(e), U(null);
            },
            [f, es, ei, Q, U],
        ),
        eg = r.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === k) {
                if (er) return null;
                let e = Array.from(ee)[0];
                return (0, i.jsx)("div", {
                    className: D.OS,
                    children: (0, i.jsx)(p.c, { ...e, onClick: eh, "aria-hidden": !0, inInput: !0 }),
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
            return (0, i.jsx)(g.C, {
                listRef: L,
                label: R.intl.string(O.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: ep,
            });
        }, [k, G, eh, ep, er, ee, o]),
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
                hasValue: $,
                hasError: P?.errorMessageId != null,
                handleToggle: el,
                handleClear: eu,
                children: (0, i.jsx)("div", {
                    className: a()(D._U, { [D.kS]: ea, [D.kj]: ea && y }),
                    onClick: ef,
                    children: (0, i.jsxs)("div", {
                        className: D.P$,
                        children: [
                            eg,
                            (0, i.jsx)(A.vN, {
                                ringTarget: Y,
                                children: (0, i.jsx)(S.p, {
                                    ref: w,
                                    id: t,
                                    className: a()(b.input, D.kk, { [D.kK]: "single" === k && $ && !er }),
                                    autoFocus: n,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: F,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": V,
                                    "aria-controls": j,
                                    "aria-expanded": !z || X,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": `${P?.labelId}`,
                                    "aria-describedby": `${P?.describedById}`,
                                    "aria-errormessage": P?.errorMessageId,
                                    "aria-invalid": P?.errorMessageId != null,
                                    "aria-required": H,
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
                selectionMode: k,
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
            listBoxId: f,
            required: h,
            disabled: p,
            handleSelectionChange: E,
            query: m,
            loading: g,
        } = C(),
        { i18n: A } = r.useContext(I.VO);
    return (0, i.jsx)(d.q, {
        id: f,
        required: h,
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
