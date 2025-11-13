l.d(t, { default: () => R }), l(388685), l(539854), l(781311);
var n = l(951288),
    r = l(647438),
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
    C = l(465524),
    m = l(611004),
    T = l(981631),
    E = l(388032),
    f = l(540432);
function b(e) {
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
function y(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: s, handleRemoveDateFilter: o } = e,
        c = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: f.dateFilter,
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
                className: f.removeDateFilterButton,
                "aria-label": E.intl.formatToPlainString(E.t["2LwBlF"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(u.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: f.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function S(e) {
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
        className: f.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: f.label,
                children: E.intl.string(E.t.oesnwm),
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: f.sublabel,
                children: E.intl.string(E.t.A2DY6J),
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    y,
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
        className: f.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: f.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: f.sublabel,
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
function _(e) {
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
        className: f.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: f.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: f.sublabel,
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
function R(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        f = r.useMemo(() => (0, p.s5)(a), [a]),
        y = (0, o.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, p.nl)(e) : "general";
        }),
        R = (0, o.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return null != e ? e.username : E.intl.string(E.t.cqpybK);
        }),
        [v, L] = r.useState(m.Z.getSearchInputText(a)),
        N = r.useMemo(() => (0, p.kG)(null != v ? v : ""), [v]),
        { prefilledSearchFilters: O, eligibleFilterTokens: j } = (0, C.p4)(N, a),
        P = j.has(T.dCx.FILTER_FROM),
        k = j.has(T.dCx.FILTER_MENTIONS),
        A = j.has(T.dCx.FILTER_IN),
        M = j.has(T.dCx.FILTER_AUTHOR_TYPE),
        D = r.useMemo(() => (0, p.nI)(N), [N]),
        {
            options: Q,
            query: H,
            setQuery: q,
            setQueryString: Y,
            handleClearFilter: w,
            getApplyQueryString: B,
            handleFocusFilter: U,
        } = (0, C.HJ)(a, T.dCx.FILTER_FROM, O[T.dCx.FILTER_FROM]),
        {
            options: Z,
            query: z,
            setQuery: J,
            setQueryString: W,
            handleClearFilter: X,
            getApplyQueryString: K,
            handleFocusFilter: V,
        } = (0, C.HJ)(a, T.dCx.FILTER_MENTIONS, O[T.dCx.FILTER_MENTIONS]),
        G = (0, C.Zc)(f),
        {
            options: $,
            query: ee,
            setQuery: et,
            handleClearFilter: el,
            getApplyQueryString: en,
            handleFocusFilter: er,
        } = (0, C.Z2)(a, O[T.dCx.FILTER_HAS]),
        {
            options: ea,
            query: ei,
            setQuery: es,
            setQueryString: eo,
            handleClearFilter: eu,
            getApplyQueryString: ec,
            handleFocusFilter: ed,
        } = (0, C.ur)(a, O[T.dCx.FILTER_IN]),
        eh = r.useCallback((e) => {
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
            options: ex,
            dates: eg,
            validDates: eF,
            handleDateQueryChange: ep,
            handleDateChange: eC,
            handleAddDateFilter: em,
            handleRemoveDateFilter: eT,
            handleClearDateFilter: eE,
            getDateQueryString: ef,
        } = (0, C.fI)(O.dateFilters),
        {
            options: eb,
            query: ey,
            setQuery: eS,
            handleClearFilter: eI,
            getApplyQueryString: e_,
            handleFocusFilter: eR,
        } = (0, C.fJ)(a, O[T.dCx.FILTER_AUTHOR_TYPE]),
        {
            options: ev,
            query: eL,
            setQuery: eN,
            handleClearFilter: eO,
            getApplyQueryString: ej,
        } = (0, C.zL)(a, O[T.dCx.FILTER_PINNED]),
        eP = r.useMemo(() => {
            let e = 0;
            return (
                P && H.length > 0 && (e += H.length),
                k && z.length > 0 && (e += z.length),
                A && ei.length > 0 && (e += ei.length),
                ee.length > 0 && (e += ee.length),
                eF.length > 0 && (e += eF.length),
                M && ey.length > 0 && (e += ey.length),
                null !== eL && (e += 1),
                e
            );
        }, [P, H, k, z, A, ei, ee, eF, M, ey, eL]),
        ek = r.useMemo(() => {
            let e = en(T.dCx.FILTER_HAS),
                t = ef(),
                l = ej(T.dCx.FILTER_PINNED),
                n = [];
            if (P) {
                let e = B(T.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (k) {
                let e = K(T.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (A) {
                let e = ec(T.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), M)) {
                let e = e_(T.dCx.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [P, B, k, K, A, ec, en, ef, M, e_, ej]),
        { validateFilter: eA, validateDateFilter: eM } = (0, C.YL)({
            nonFilterQueryString: D,
            filterQueryString: ek,
        }),
        eD = r.useMemo(
            () =>
                !(
                    (!P || (0, C.Ek)(H, O[T.dCx.FILTER_FROM])) &&
                    (!k || (0, C.Ek)(z, O[T.dCx.FILTER_MENTIONS])) &&
                    (!A || (0, C.Ek)(ei, O[T.dCx.FILTER_IN])) &&
                    (0, C.Ek)(ee, O[T.dCx.FILTER_HAS]) &&
                    (0, C.LE)(eF, O.dateFilters) &&
                    (!M || (0, C.Ek)(ey, O[T.dCx.FILTER_AUTHOR_TYPE])) &&
                    (0, C.Ek)(eL, O[T.dCx.FILTER_PINNED])
                ),
            [P, H, O, k, z, A, ei, ee, eF, M, ey, eL],
        ),
        eQ = r.useCallback(() => {
            if (0 === ek.length && 0 === D.trim().length) {
                F.S.dispatch(T.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(ek, " ").concat(D).trim();
            F.S.dispatch(T.CkL.SET_SEARCH_QUERY, {
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [ek, D, l]),
        eH = r.useMemo(() => {
            if (0 === eP) return E.intl.string(E.t.YfwFu1);
            let e = "(".concat(eP, ")");
            return "".concat(E.intl.string(E.t.YfwFu1), " ").concat(e);
        }, [eP]),
        eq = r.useCallback(() => {
            P && w(), k && X(), A && eu(), M && eI(), el(), eE(), eO();
        }, [P, k, el, A, eE, w, X, eu, M, eI, eO]);
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
                onClick: eQ,
                disabled: !eD,
            },
        ],
        actionBarInput: (0, n.jsx)(u.Avr, {
            variant: "primary",
            text: eH,
            onClick: eq,
            disabled: 0 === eP,
        }),
        children: [
            P &&
                (0, n.jsx)(
                    I,
                    b(
                        {
                            label: E.intl.string(E.t.Qz6eOR),
                            sublabel: E.intl.string(E.t["2JyXnO"]),
                            textPlaceholder: E.intl.formatToPlainString(E.t["V4WMj/"], { username: R }),
                            value: H,
                            onChange: q,
                            onFocus: U,
                            onSearchChange: Y,
                            options: Q,
                            filterType: T.dCx.FILTER_FROM,
                            validateFilter: eA,
                        },
                        G,
                    ),
                ),
            A &&
                (0, n.jsx)(I, {
                    label: E.intl.string(E.t["kLrM/s"]),
                    sublabel: E.intl.string(E.t.x8cC0z),
                    textPlaceholder: E.intl.formatToPlainString(E.t.K4l507, { channelName: y }),
                    value: ei,
                    onChange: es,
                    onFocus: ed,
                    onSearchChange: eo,
                    options: ea,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: eh,
                    filterType: T.dCx.FILTER_IN,
                    validateFilter: eA,
                }),
            k &&
                (0, n.jsx)(
                    I,
                    b(
                        {
                            label: E.intl.string(E.t.HEBnRU),
                            sublabel: E.intl.string(E.t.PdfTqT),
                            textPlaceholder: E.intl.formatToPlainString(E.t.zka3aJ, { username: R }),
                            value: z,
                            onChange: J,
                            onFocus: V,
                            onSearchChange: W,
                            options: Z,
                            filterType: T.dCx.FILTER_MENTIONS,
                            validateFilter: eA,
                        },
                        G,
                    ),
                ),
            (0, n.jsx)(I, {
                label: E.intl.string(E.t["892qg1"]),
                sublabel: E.intl.string(E.t["Oa//IE"]),
                textPlaceholder: E.intl.string(E.t.tROvHH),
                value: ee,
                onChange: et,
                onFocus: er,
                options: $,
                filter: !0,
                closeOnSelect: !1,
                filterType: T.dCx.FILTER_HAS,
                validateFilter: eA,
            }),
            (0, n.jsx)(S, {
                options: ex,
                dates: eg,
                handleDateQueryChange: ep,
                handleDateChange: eC,
                handleAddDateFilter: em,
                handleRemoveDateFilter: eT,
                validateDateFilter: eM,
            }),
            M &&
                (0, n.jsx)(I, {
                    label: E.intl.string(E.t.Xgc1av),
                    sublabel: E.intl.string(E.t.XaOAdt),
                    textPlaceholder: E.intl.string(E.t.CAdOdf),
                    value: ey,
                    onChange: eS,
                    onFocus: eR,
                    options: eb,
                    filter: !0,
                    closeOnSelect: !1,
                    filterType: T.dCx.FILTER_AUTHOR_TYPE,
                    validateFilter: eA,
                }),
            (0, n.jsx)(_, {
                label: E.intl.string(E.t["6LYPWS"]),
                sublabel: E.intl.string(E.t.L8jjfu),
                textPlaceholder: E.intl.string(E.t.AQpFbX),
                value: eL,
                onChange: eN,
                options: ev,
                filterType: T.dCx.FILTER_PINNED,
                validateFilter: eA,
            }),
        ],
    });
}
