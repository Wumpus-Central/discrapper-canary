l.d(t, { default: () => v }), l(388685), l(539854), l(781311);
var n = l(951288),
    r = l(647438),
    a = l(913527),
    i = l.n(a),
    s = l(442837),
    o = l(82659),
    u = l(481060),
    c = l(471445),
    d = l(313201),
    h = l(592125),
    x = l(944486),
    g = l(594174),
    F = l(585483),
    p = l(607802),
    C = l(465524),
    m = l(611004),
    T = l(981631),
    E = l(388032),
    y = l(407868);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function S(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: s, handleRemoveDateFilter: o } = e,
        c = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: y.dateFilter,
        children: [
            (0, n.jsx)(u.q4e, {
                options: s,
                value: l.query,
                onChange: (e) => {
                    r({
                        query: e,
                        index: t,
                    });
                },
                className: y.dateFilterSelect,
            }),
            (0, n.jsx)(u.Wrb, {
                value: l.date,
                onSelect: (e) => {
                    a({
                        date: e,
                        index: t,
                    });
                },
                minDate: d,
                maxDate: c,
            }),
            (0, n.jsx)(u.P3F, {
                onClick: () => {
                    o(t);
                },
                className: y.removeDateFilterButton,
                "aria-label": E.intl.formatToPlainString(E.t["2LwBlJ"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(u.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: y.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function b(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: a,
            handleAddDateFilter: i,
            handleRemoveDateFilter: s,
            validateDateFilter: o,
        } = e,
        c = l.length < 4;
    return (0, n.jsxs)("div", {
        className: y.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: E.intl.string(E.t.oesnws),
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: E.intl.string(E.t.A2DY6O),
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    S,
                    {
                        options: t,
                        index: l,
                        query: e,
                        handleQuerySelect: r,
                        handleDateSelect: a,
                        handleRemoveDateFilter: s,
                    },
                    e.id,
                ),
            ),
            c &&
                (0, n.jsx)(u.zxk, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: E.intl.string(E.t.iP9YpK),
                    icon: u.BRu,
                    onClick: () => {
                        o() && i();
                    },
                }),
        ],
    });
}
function I(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: a,
        onChange: i,
        options: s,
        filter: o,
        closeOnSelect: c,
        onFocus: d,
        onSearchChange: h,
        renderOptionPrefix: x,
        renderOptionSuffix: g,
        filterType: F,
        validateFilter: p,
    } = e;
    return (0, n.jsxs)("div", {
        className: y.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: l,
            }),
            (0, n.jsx)(u.VcW, {
                multi: !0,
                options: s,
                placeholder: r,
                value: a,
                onChange: (e) => {
                    (!(e.length > a.length) || p(F, e[e.length - 1])) && i(e);
                },
                onFocus: d,
                onSearchChange: h,
                closeOnSelect: c,
                filter: o,
                renderOptionPrefix: x,
                renderOptionSuffix: g,
            }),
        ],
    });
}
function R(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: a,
        onChange: i,
        options: s,
        filterType: o,
        validateFilter: c,
    } = e;
    return (0, n.jsxs)("div", {
        className: y.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: l,
            }),
            (0, n.jsx)(u.q4e, {
                placeholder: r,
                options: s,
                onChange: (e) => {
                    (null == e || c(o, e)) && i(e);
                },
                value: a,
                clearable: null != a,
            }),
        ],
    });
}
function v(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        S = r.useMemo(() => (0, p.s5)(a), [a]),
        v = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, p.nl)(e) : "general";
        }),
        L = (0, s.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return null != e ? e.username : E.intl.string(E.t.cqpybG);
        }),
        [N, _] = r.useState(m.Z.getSearchInputText(a)),
        O = r.useMemo(() => (0, p.kG)(null != N ? N : ""), [N]),
        { prefilledSearchFilters: j, eligibleFilterTokens: P } = (0, C.p4)(O, a),
        k = P.has(T.dCx.FILTER_FROM),
        A = P.has(T.dCx.FILTER_MENTIONS),
        M = P.has(T.dCx.FILTER_IN),
        Q = P.has(T.dCx.FILTER_AUTHOR_TYPE),
        D = r.useMemo(() => (0, p.nI)(O), [O]),
        {
            options: q,
            query: H,
            setQuery: Y,
            setQueryString: w,
            handleClearFilter: U,
            getApplyQueryString: Z,
            handleFocusFilter: z,
        } = (0, C.HJ)(a, T.dCx.FILTER_FROM, j[T.dCx.FILTER_FROM]),
        {
            options: J,
            query: W,
            setQuery: B,
            setQueryString: X,
            handleClearFilter: K,
            getApplyQueryString: G,
            handleFocusFilter: V,
        } = (0, C.HJ)(a, T.dCx.FILTER_MENTIONS, j[T.dCx.FILTER_MENTIONS]),
        $ = (0, C.Zc)(S),
        {
            options: ee,
            query: et,
            setQuery: el,
            handleClearFilter: en,
            getApplyQueryString: er,
            handleFocusFilter: ea,
        } = (0, C.Z2)(a, j[T.dCx.FILTER_HAS]),
        {
            options: ei,
            query: es,
            setQuery: eo,
            setQueryString: eu,
            handleClearFilter: ec,
            getApplyQueryString: ed,
            handleFocusFilter: eh,
        } = (0, C.ur)(a, j[T.dCx.FILTER_IN]),
        ex = r.useCallback((e) => {
            if (null == e) return;
            let t = h.Z.getChannel(e.value);
            if (null == t) return;
            let l = (0, c.KS)(t);
            return null != l
                ? (0, n.jsx)(l, {
                      size: "xs",
                      color: "currentColor",
                  })
                : null;
        }, []),
        {
            options: eg,
            dates: eF,
            validDates: ep,
            handleDateQueryChange: eC,
            handleDateChange: em,
            handleAddDateFilter: eT,
            handleRemoveDateFilter: eE,
            handleClearDateFilter: ey,
            getDateQueryString: ef,
        } = (0, C.fI)(j.dateFilters),
        {
            options: eS,
            query: eb,
            setQuery: eI,
            handleClearFilter: eR,
            getApplyQueryString: ev,
            handleFocusFilter: eL,
        } = (0, C.fJ)(a, j[T.dCx.FILTER_AUTHOR_TYPE]),
        {
            options: eN,
            query: e_,
            setQuery: eO,
            handleClearFilter: ej,
            getApplyQueryString: eP,
        } = (0, C.zL)(a, j[T.dCx.FILTER_PINNED]),
        ek = r.useMemo(() => {
            let e = 0;
            return (
                k && H.length > 0 && (e += H.length),
                A && W.length > 0 && (e += W.length),
                M && es.length > 0 && (e += es.length),
                et.length > 0 && (e += et.length),
                ep.length > 0 && (e += ep.length),
                Q && eb.length > 0 && (e += eb.length),
                null !== e_ && (e += 1),
                e
            );
        }, [k, H, A, W, M, es, et, ep, Q, eb, e_]),
        eA = r.useMemo(() => {
            let e = er(T.dCx.FILTER_HAS),
                t = ef(),
                l = eP(T.dCx.FILTER_PINNED),
                n = [];
            if (k) {
                let e = Z(T.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (A) {
                let e = G(T.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (M) {
                let e = ed(T.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), Q)) {
                let e = ev(T.dCx.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [k, Z, A, G, M, ed, er, ef, Q, ev, eP]),
        { validateFilter: eM, validateDateFilter: eQ } = (0, C.YL)({
            nonFilterQueryString: D,
            filterQueryString: eA,
        }),
        eD = r.useMemo(
            () =>
                !(
                    (!k || (0, C.Ek)(H, j[T.dCx.FILTER_FROM])) &&
                    (!A || (0, C.Ek)(W, j[T.dCx.FILTER_MENTIONS])) &&
                    (!M || (0, C.Ek)(es, j[T.dCx.FILTER_IN])) &&
                    (0, C.Ek)(et, j[T.dCx.FILTER_HAS]) &&
                    (0, C.LE)(ep, j.dateFilters) &&
                    (!Q || (0, C.Ek)(eb, j[T.dCx.FILTER_AUTHOR_TYPE])) &&
                    (0, C.Ek)(e_, j[T.dCx.FILTER_PINNED])
                ),
            [k, H, j, A, W, M, es, et, ep, Q, eb, e_],
        ),
        eq = r.useCallback(() => {
            if (0 === eA.length && 0 === D.trim().length) {
                F.S.dispatch(T.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(eA, " ").concat(D).trim();
            F.S.dispatch(T.CkL.SET_SEARCH_QUERY, {
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [eA, D, l]),
        eH = r.useCallback(() => {
            k && U(), A && K(), M && ec(), Q && eR(), en(), ey(), ej();
        }, [k, A, en, M, ey, U, K, ec, Q, eR, ej]);
    return (0, n.jsxs)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: E.intl.string(E.t.F8a0W1),
        actions: [
            {
                variant: "secondary",
                text: E.intl.string(E.t["ETE/oK"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: E.intl.string(E.t.qDzapq),
                onClick: eq,
                disabled: !eD,
            },
        ],
        actionBarInput: (0, n.jsx)(u.P3F, {
            onClick: eH,
            className: y.clearFilters,
            children: (0, n.jsxs)(u.Text, {
                variant: "text-sm/medium",
                color: ek > 0 ? "text-brand" : "text-tertiary",
                children: [E.intl.string(E.t.YfwFu7), " ", ek > 0 && "(".concat(ek, ")")],
            }),
        }),
        children: [
            k &&
                (0, n.jsx)(
                    I,
                    f(
                        {
                            label: E.intl.string(E.t.Qz6eOT),
                            sublabel: E.intl.string(E.t["2JyXnJ"]),
                            textPlaceholder: E.intl.formatToPlainString(E.t.V4WMj4, { username: L }),
                            value: H,
                            onChange: Y,
                            onFocus: z,
                            onSearchChange: w,
                            options: q,
                            filterType: T.dCx.FILTER_FROM,
                            validateFilter: eM,
                        },
                        $,
                    ),
                ),
            M &&
                (0, n.jsx)(I, {
                    label: E.intl.string(E.t["kLrM/v"]),
                    sublabel: E.intl.string(E.t.x8cC09),
                    textPlaceholder: E.intl.formatToPlainString(E.t.K4l509, { channelName: v }),
                    value: es,
                    onChange: eo,
                    onFocus: eh,
                    onSearchChange: eu,
                    options: ei,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: ex,
                    filterType: T.dCx.FILTER_IN,
                    validateFilter: eM,
                }),
            A &&
                (0, n.jsx)(
                    I,
                    f(
                        {
                            label: E.intl.string(E.t.HEBnRU),
                            sublabel: E.intl.string(E.t.PdfTqa),
                            textPlaceholder: E.intl.formatToPlainString(E.t.zka3aG, { username: L }),
                            value: W,
                            onChange: B,
                            onFocus: V,
                            onSearchChange: X,
                            options: J,
                            filterType: T.dCx.FILTER_MENTIONS,
                            validateFilter: eM,
                        },
                        $,
                    ),
                ),
            (0, n.jsx)(I, {
                label: E.intl.string(E.t["892qg4"]),
                sublabel: E.intl.string(E.t["Oa//IC"]),
                textPlaceholder: E.intl.string(E.t.tROvHB),
                value: et,
                onChange: el,
                onFocus: ea,
                options: ee,
                filter: !0,
                closeOnSelect: !1,
                filterType: T.dCx.FILTER_HAS,
                validateFilter: eM,
            }),
            (0, n.jsx)(b, {
                options: eg,
                dates: eF,
                handleDateQueryChange: eC,
                handleDateChange: em,
                handleAddDateFilter: eT,
                handleRemoveDateFilter: eE,
                validateDateFilter: eQ,
            }),
            Q &&
                (0, n.jsx)(I, {
                    label: E.intl.string(E.t.Xgc1am),
                    sublabel: E.intl.string(E.t.XaOAdn),
                    textPlaceholder: E.intl.string(E.t.CAdOdX),
                    value: eb,
                    onChange: eI,
                    onFocus: eL,
                    options: eS,
                    filter: !0,
                    closeOnSelect: !1,
                    filterType: T.dCx.FILTER_AUTHOR_TYPE,
                    validateFilter: eM,
                }),
            (0, n.jsx)(R, {
                label: E.intl.string(E.t["6LYPWV"]),
                sublabel: E.intl.string(E.t.L8jjfn),
                textPlaceholder: E.intl.string(E.t.AQpFbW),
                value: e_,
                onChange: eO,
                options: eN,
                filterType: T.dCx.FILTER_PINNED,
                validateFilter: eM,
            }),
        ],
    });
}
