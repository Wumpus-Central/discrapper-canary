l.d(t, { default: () => v }), l(388685), l(539854), l(781311);
var n = l(54381),
    r = l(473749),
    a = l(913527),
    i = l.n(a),
    s = l(793030),
    o = l(442837),
    u = l(481060),
    c = l(471445),
    d = l(313201),
    h = l(592125),
    x = l(944486),
    g = l(594174),
    F = l(585483),
    p = l(607802),
    C = l(28964),
    m = l(465524),
    T = l(611004),
    f = l(981631),
    E = l(388032),
    b = l(407868);
function y(e) {
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
        className: b.dateFilter,
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
                className: b.removeDateFilterButton,
                "aria-label": E.intl.formatToPlainString(E.t["2LwBlF"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(u.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: b.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function I(e) {
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
        className: b.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: b.label,
                children: E.intl.string(E.t.oesnwm),
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: b.sublabel,
                children: E.intl.string(E.t.A2DY6J),
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
                (0, n.jsx)(u.Button, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: E.intl.string(E.t.iP9YpB),
                    icon: u.BRu,
                    onClick: () => {
                        o() && i();
                    },
                }),
        ],
    });
}
function _(e) {
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
        className: b.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: b.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: b.sublabel,
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
        className: b.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: b.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: b.sublabel,
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
        b = r.useMemo(() => (0, p.s5)(a), [a]),
        S = (0, o.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, p.nl)(e) : "general";
        }),
        v = (0, o.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return null != e ? e.username : E.intl.string(E.t.cqpybK);
        }),
        [L, O] = r.useState(T.Z.getSearchInputText(a)),
        N = r.useMemo(() => (0, p.kG)(null != L ? L : ""), [L]),
        { prefilledSearchFilters: j, eligibleFilterTokens: P } = (0, m.p4)(N, a),
        k = P.has(f.dCx.FILTER_FROM),
        A = P.has(f.dCx.FILTER_MENTIONS),
        M = P.has(f.dCx.FILTER_IN),
        D = P.has(f.dCx.FILTER_AUTHOR_TYPE),
        Q = r.useMemo(() => (0, p.nI)(N), [N]),
        H = (0, C.g_)({ location: "SearchFiltersModal" }),
        {
            options: q,
            query: Y,
            setQuery: w,
            setQueryString: B,
            handleClearFilter: U,
            getApplyQueryString: Z,
            handleFocusFilter: z,
        } = (0, m.HJ)(a, f.dCx.FILTER_FROM, j[f.dCx.FILTER_FROM]),
        {
            options: J,
            query: W,
            setQuery: X,
            setQueryString: K,
            handleClearFilter: V,
            getApplyQueryString: G,
            handleFocusFilter: $,
        } = (0, m.HJ)(a, f.dCx.FILTER_MENTIONS, j[f.dCx.FILTER_MENTIONS]),
        ee = (0, m.Zc)(b),
        {
            options: et,
            query: el,
            setQuery: en,
            handleClearFilter: er,
            getApplyQueryString: ea,
            handleFocusFilter: ei,
        } = (0, m.Z2)(a, j[f.dCx.FILTER_HAS]),
        {
            options: es,
            query: eo,
            setQuery: eu,
            setQueryString: ec,
            handleClearFilter: ed,
            getApplyQueryString: eh,
            handleFocusFilter: ex,
        } = (0, m.ur)(a, j[f.dCx.FILTER_IN]),
        eg = r.useCallback((e) => {
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
            options: eF,
            dates: ep,
            validDates: eC,
            handleDateQueryChange: em,
            handleDateChange: eT,
            handleAddDateFilter: ef,
            handleRemoveDateFilter: eE,
            handleClearDateFilter: eb,
            getDateQueryString: ey,
        } = (0, m.fI)(j.dateFilters),
        {
            options: eS,
            query: eI,
            setQuery: e_,
            handleClearFilter: eR,
            getApplyQueryString: ev,
            handleFocusFilter: eL,
        } = (0, m.fJ)(a, j[f.dCx.FILTER_AUTHOR_TYPE]),
        {
            options: eO,
            query: eN,
            setQuery: ej,
            handleClearFilter: eP,
            getApplyQueryString: ek,
        } = (0, m.zL)(a, j[f.dCx.FILTER_PINNED]),
        eA = r.useMemo(() => {
            let e = 0;
            return (
                k && Y.length > 0 && (e += Y.length),
                A && W.length > 0 && (e += W.length),
                M && eo.length > 0 && (e += eo.length),
                el.length > 0 && (e += el.length),
                eC.length > 0 && (e += eC.length),
                D && eI.length > 0 && (e += eI.length),
                null !== eN && (e += 1),
                e
            );
        }, [k, Y, A, W, M, eo, el, eC, D, eI, eN]),
        eM = r.useMemo(() => {
            let e = ea(f.dCx.FILTER_HAS),
                t = ey(),
                l = ek(f.dCx.FILTER_PINNED),
                n = [];
            if (k) {
                let e = Z(f.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (A) {
                let e = G(f.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (M) {
                let e = eh(f.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), D)) {
                let e = ev(f.dCx.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [k, Z, A, G, M, eh, ea, ey, D, ev, ek]),
        { validateFilter: eD, validateDateFilter: eQ } = (0, m.YL)({
            nonFilterQueryString: Q,
            filterQueryString: eM,
        }),
        eH = r.useMemo(
            () =>
                !(
                    (!k || (0, m.Ek)(Y, j[f.dCx.FILTER_FROM])) &&
                    (!A || (0, m.Ek)(W, j[f.dCx.FILTER_MENTIONS])) &&
                    (!M || (0, m.Ek)(eo, j[f.dCx.FILTER_IN])) &&
                    (0, m.Ek)(el, j[f.dCx.FILTER_HAS]) &&
                    (0, m.LE)(eC, j.dateFilters) &&
                    (!D || (0, m.Ek)(eI, j[f.dCx.FILTER_AUTHOR_TYPE])) &&
                    (0, m.Ek)(eN, j[f.dCx.FILTER_PINNED])
                ),
            [k, Y, j, A, W, M, eo, el, eC, D, eI, eN],
        ),
        eq = r.useCallback(() => {
            if (0 === eM.length && 0 === Q.trim().length) {
                F.S.dispatch(f.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(eM, " ").concat(Q).trim();
            F.S.dispatch(f.CkL.SET_SEARCH_QUERY, {
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [eM, Q, l]),
        eY = r.useMemo(() => {
            if (0 === eA) return E.intl.string(E.t.YfwFu1);
            let e = "(".concat(eA, ")");
            return "".concat(E.intl.string(E.t.YfwFu1), " ").concat(e);
        }, [eA]),
        ew = r.useCallback(() => {
            k && U(), A && V(), M && ed(), D && eR(), er(), eb(), eP();
        }, [k, A, er, M, eb, U, V, ed, D, eR, eP]),
        eB =
            A &&
            (0, n.jsx)(
                _,
                y(
                    {
                        label: E.intl.string(E.t.HEBnRU),
                        sublabel: E.intl.string(E.t.PdfTqT),
                        textPlaceholder: E.intl.formatToPlainString(E.t.zka3aJ, { username: v }),
                        value: W,
                        onChange: X,
                        onFocus: $,
                        onSearchChange: K,
                        options: J,
                        filterType: f.dCx.FILTER_MENTIONS,
                        validateFilter: eD,
                    },
                    ee,
                ),
            ),
        eU = (0, n.jsx)(_, {
            label: E.intl.string(E.t["892qg1"]),
            sublabel: E.intl.string(E.t["Oa//IE"]),
            textPlaceholder: E.intl.string(E.t.tROvHH),
            value: el,
            onChange: en,
            onFocus: ei,
            options: et,
            filter: !0,
            closeOnSelect: !1,
            filterType: f.dCx.FILTER_HAS,
            validateFilter: eD,
            renderOptionPrefix: H ? m.Tt : void 0,
        });
    return (0, n.jsxs)(s.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: E.intl.string(E.t["F8a0W/"]),
        actions: [
            {
                variant: "secondary",
                text: E.intl.string(E.t["ETE/oC"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: E.intl.string(E.t.qDzapn),
                onClick: eq,
                disabled: !eH,
            },
        ],
        actionBarInput: (0, n.jsx)(u.Avr, {
            variant: "primary",
            text: eY,
            onClick: ew,
            disabled: 0 === eA,
        }),
        children: [
            k &&
                (0, n.jsx)(
                    _,
                    y(
                        {
                            label: E.intl.string(E.t.Qz6eOR),
                            sublabel: E.intl.string(E.t["2JyXnO"]),
                            textPlaceholder: E.intl.formatToPlainString(E.t["V4WMj/"], { username: v }),
                            value: Y,
                            onChange: w,
                            onFocus: z,
                            onSearchChange: B,
                            options: q,
                            filterType: f.dCx.FILTER_FROM,
                            validateFilter: eD,
                        },
                        ee,
                    ),
                ),
            M &&
                (0, n.jsx)(_, {
                    label: E.intl.string(E.t["kLrM/s"]),
                    sublabel: E.intl.string(E.t.x8cC0z),
                    textPlaceholder: E.intl.formatToPlainString(E.t.K4l507, { channelName: S }),
                    value: eo,
                    onChange: eu,
                    onFocus: ex,
                    onSearchChange: ec,
                    options: es,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: eg,
                    filterType: f.dCx.FILTER_IN,
                    validateFilter: eD,
                }),
            H ? eU : eB,
            H ? eB : eU,
            (0, n.jsx)(I, {
                options: eF,
                dates: ep,
                handleDateQueryChange: em,
                handleDateChange: eT,
                handleAddDateFilter: ef,
                handleRemoveDateFilter: eE,
                validateDateFilter: eQ,
            }),
            D &&
                (0, n.jsx)(_, {
                    label: E.intl.string(E.t.Xgc1av),
                    sublabel: E.intl.string(E.t.XaOAdt),
                    textPlaceholder: E.intl.string(E.t.CAdOdf),
                    value: eI,
                    onChange: e_,
                    onFocus: eL,
                    options: eS,
                    filter: !0,
                    closeOnSelect: !1,
                    filterType: f.dCx.FILTER_AUTHOR_TYPE,
                    validateFilter: eD,
                    renderOptionPrefix: H ? m.t : void 0,
                }),
            (0, n.jsx)(R, {
                label: E.intl.string(E.t["6LYPWS"]),
                sublabel: E.intl.string(E.t.L8jjfu),
                textPlaceholder: E.intl.string(E.t.AQpFbX),
                value: eN,
                onChange: ej,
                options: eO,
                filterType: f.dCx.FILTER_PINNED,
                validateFilter: eD,
            }),
        ],
    });
}
