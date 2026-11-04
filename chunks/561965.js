l(321073);
var n = l(477900),
    r = l(582128),
    i = l(536637),
    a = l.n(i),
    s = l(855986),
    o = l(189213),
    u = l(691885),
    c = l(582306),
    h = l(939249),
    d = l(241326),
    g = l(834730),
    F = l(821609),
    p = l(499373),
    L = l(890497),
    T = l(123292),
    E = l(915089),
    f = l(734057),
    y = l(309010),
    S = l(287809),
    I = l(188567),
    R = l(822382),
    _ = l(753806),
    m = l(121806),
    b = l(768570),
    x = l(652215),
    C = l(792996),
    v = l(754911);
function W(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: i, options: s, handleRemoveDateFilter: o } = e,
        g = a()(),
        F = a()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: v.Rr,
        children: [
            (0, n.jsx)(u.l, {
                label: C.intl.string(C.t.ArxagQ),
                hideLabel: !0,
                selectionMode: "single",
                formatOption: (e) => {
                    let { key: t, value: l, label: n, leading: r, trailing: i } = e;
                    return { id: t ?? l, value: l, label: n, leading: r, trailing: i };
                },
                options: s,
                onSelectionChange: function (e) {
                    null != e && r({ query: e, index: t });
                },
                value: l.query,
                fullWidth: !0,
            }),
            (0, n.jsx)(c.J, {
                value: l.date,
                onSelect: function (e) {
                    i({ date: e, index: t });
                },
                minDate: F,
                maxDate: g,
            }),
            (0, n.jsx)(h.D, {
                onClick: function () {
                    o(t);
                },
                className: v.tL,
                "aria-label": C.intl.formatToPlainString(C.t["2LwBlF"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(d.TrashIcon, {
                    size: "md",
                    color: "currentColor",
                    className: v.IT,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function N(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: i,
            handleAddDateFilter: a,
            handleRemoveDateFilter: s,
            validateDateFilter: o,
        } = e,
        u = l.length < 4;
    return (0, n.jsxs)("div", {
        className: v.KZ,
        children: [
            (0, n.jsxs)("div", {
                className: v._A,
                children: [
                    (0, n.jsx)(g.E, {
                        variant: "body-md/medium",
                        color: "text-strong",
                        children: C.intl.string(C.t.oesnwm),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: C.intl.string(C.t.A2DY6J),
                    }),
                ],
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    W,
                    {
                        options: t,
                        index: l,
                        query: e,
                        handleQuerySelect: r,
                        handleDateSelect: i,
                        handleRemoveDateFilter: s,
                    },
                    e.id,
                ),
            ),
            u &&
                (0, n.jsx)(F.$, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: C.intl.string(C.t.iP9YpB),
                    icon: p.T,
                    onClick: function () {
                        o() && a();
                    },
                }),
        ],
    });
}
function O(e) {
    let {
            label: t,
            sublabel: l,
            textPlaceholder: i,
            value: a,
            onChange: s,
            options: o,
            filter: u,
            closeOnSelect: c,
            onFocus: h,
            onSearchChange: d,
            filterType: g,
            validateFilter: F,
            onBlur: p,
        } = e,
        T = r.useMemo(() => (u ? (e) => e : void 0), [u]);
    return (0, n.jsx)("div", {
        className: v.KZ,
        children: (0, n.jsx)(L.Z, {
            label: t,
            description: l,
            selectionMode: "multiple",
            formatOption: (e) => {
                let { key: t, value: l, label: n, leading: r, trailing: i } = e;
                return { id: t ?? l, value: l, label: n, leading: r, trailing: i };
            },
            options: o,
            placeholder: i,
            value: a,
            onSelectionChange: function (e) {
                (!(e.length > a.length) || F(g, e[e.length - 1])) && s(e);
            },
            onFocus: h,
            onQueryChange: (e) => d?.(e.target.value),
            closeOnSelect: c,
            customMatchSorter: T,
            onBlur: p,
            wrapTags: !0,
        }),
    });
}
function j(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: i,
        onChange: a,
        options: s,
        filterType: o,
        validateFilter: c,
    } = e;
    return (0, n.jsx)("div", {
        className: v.KZ,
        children: (0, n.jsx)(u.l, {
            label: t,
            description: l,
            selectionMode: "single",
            formatOption: (e) => {
                let { key: t, value: l, label: n, leading: r, trailing: i } = e;
                return { id: t ?? l, value: l, label: n, leading: r, trailing: i };
            },
            placeholder: r,
            options: s,
            onSelectionChange: function (e) {
                (null == e || c(o, e)) && a(e);
            },
            value: i,
            clearable: null != i,
            fullWidth: !0,
        }),
    });
}
l.d(
    t,
    {},
    {
        default: function (e) {
            let { transitionState: t, onClose: l, searchContext: i } = e,
                a = (0, E.GV)(),
                u = (0, s.bG)([f.A, y.Ay], () => {
                    let e = f.A.getChannel(y.Ay.getChannelId());
                    return null != e ? (0, R.E3)(e) : "general";
                }),
                c = (0, s.bG)([S.default], () => {
                    let e = S.default.getCurrentUser();
                    return null != e ? e.username : C.intl.string(C.t.cqpybK);
                }),
                [h, d] = r.useState(_.A.getSearchInputText(i)),
                g = r.useMemo(() => (0, R._o)(h ?? ""), [h]),
                { prefilledSearchFilters: F, eligibleFilterTokens: p } = (0, m.vj)(g, i),
                L = p.has(x.LWr.FILTER_FROM),
                W = p.has(x.LWr.FILTER_MENTIONS),
                A = p.has(x.LWr.FILTER_IN),
                M = p.has(x.LWr.FILTER_AUTHOR_TYPE),
                Q = r.useMemo(() => (0, R.Pp)(g), [g]),
                {
                    options: P,
                    query: D,
                    setQuery: H,
                    setQueryString: k,
                    handleClearFilter: q,
                    getApplyQueryString: w,
                    handleFocusFilter: Y,
                    handleBlurFilter: B,
                } = (0, m.ps)(i, x.LWr.FILTER_FROM, F[x.LWr.FILTER_FROM]),
                {
                    options: U,
                    query: K,
                    setQuery: $,
                    setQueryString: z,
                    handleClearFilter: J,
                    getApplyQueryString: X,
                    handleFocusFilter: Z,
                    handleBlurFilter: G,
                } = (0, m.ps)(i, x.LWr.FILTER_MENTIONS, F[x.LWr.FILTER_MENTIONS]),
                {
                    options: V,
                    query: ee,
                    setQuery: et,
                    handleClearFilter: el,
                    getApplyQueryString: en,
                    handleFocusFilter: er,
                } = (0, m.u2)(i, F[x.LWr.FILTER_HAS]),
                {
                    options: ei,
                    query: ea,
                    setQuery: es,
                    setQueryString: eo,
                    handleClearFilter: eu,
                    getApplyQueryString: ec,
                    handleFocusFilter: eh,
                    handleBlurFilter: ed,
                } = (0, m.TT)(i, F[x.LWr.FILTER_IN]),
                {
                    options: eg,
                    dates: eF,
                    validDates: ep,
                    handleDateQueryChange: eL,
                    handleDateChange: eT,
                    handleAddDateFilter: eE,
                    handleRemoveDateFilter: ef,
                    handleClearDateFilter: ey,
                    getDateQueryString: eS,
                } = (0, m.Ky)(F.dateFilters),
                {
                    options: eI,
                    query: eR,
                    setQuery: e_,
                    handleClearFilter: em,
                    getApplyQueryString: eb,
                    handleFocusFilter: ex,
                } = (0, m.H3)(i, F[x.LWr.FILTER_AUTHOR_TYPE]),
                {
                    options: eC,
                    query: ev,
                    setQuery: eW,
                    handleClearFilter: eN,
                    getApplyQueryString: eO,
                } = (0, m.CT)(i, F[x.LWr.FILTER_PINNED]),
                ej = r.useMemo(() => {
                    let e = 0;
                    return (
                        L && D.length > 0 && (e += D.length),
                        W && K.length > 0 && (e += K.length),
                        A && ea.length > 0 && (e += ea.length),
                        ee.length > 0 && (e += ee.length),
                        ep.length > 0 && (e += ep.length),
                        M && eR.length > 0 && (e += eR.length),
                        null !== ev && (e += 1),
                        e
                    );
                }, [L, D, W, K, A, ea, ee, ep, M, eR, ev]),
                eA = r.useMemo(() => {
                    let e = en(x.LWr.FILTER_HAS),
                        t = eS(),
                        l = eO(x.LWr.FILTER_PINNED),
                        n = [];
                    if (L) {
                        let e = w(x.LWr.FILTER_FROM);
                        null != e && n.push(e);
                    }
                    if (W) {
                        let e = X(x.LWr.FILTER_MENTIONS);
                        null != e && n.push(e);
                    }
                    if (A) {
                        let e = ec(x.LWr.FILTER_IN);
                        null != e && n.push(e);
                    }
                    if ((null != e && n.push(e), null != t && n.push(t), M)) {
                        let e = eb(x.LWr.FILTER_AUTHOR_TYPE);
                        null != e && n.push(e);
                    }
                    return (null != l && n.push(l), [...n].join(" "));
                }, [L, w, W, X, A, ec, en, eS, M, eb, eO]),
                { validateFilter: eM, validateDateFilter: eQ } = (0, m.dY)({
                    nonFilterQueryString: Q,
                    filterQueryString: eA,
                }),
                eP = r.useMemo(
                    () =>
                        !(
                            (!L || (0, m.wf)(D, F[x.LWr.FILTER_FROM])) &&
                            (!W || (0, m.wf)(K, F[x.LWr.FILTER_MENTIONS])) &&
                            (!A || (0, m.wf)(ea, F[x.LWr.FILTER_IN])) &&
                            (0, m.wf)(ee, F[x.LWr.FILTER_HAS]) &&
                            (0, m._2)(ep, F.dateFilters) &&
                            (!M || (0, m.wf)(eR, F[x.LWr.FILTER_AUTHOR_TYPE])) &&
                            (0, m.wf)(ev, F[x.LWr.FILTER_PINNED])
                        ),
                    [L, D, F, W, K, A, ea, ee, ep, M, eR, ev],
                ),
                eD = r.useCallback(() => {
                    if (0 === eA.length && 0 === Q.trim().length) {
                        (I._.dispatch(x.jej.SEARCH_RESULTS_CLOSE), l());
                        return;
                    }
                    let e = `${eA} ${Q}`.trim();
                    (_.A.dispatchSetSearchQuery({
                        query: e,
                        anchor: 0,
                        focus: 0,
                        performSearch: !0,
                        replace: !0,
                        searchQuerySource: b.Q_.SEARCH_FILTERS_MODAL,
                    }),
                        l());
                }, [eA, Q, l]),
                eH = r.useMemo(() => {
                    if (0 === ej) return C.intl.string(C.t.YfwFu1);
                    let e = `(${ej})`;
                    return `${C.intl.string(C.t.YfwFu1)} ${e}`;
                }, [ej]),
                ek = r.useCallback(() => {
                    (L && q(), W && J(), A && eu(), M && em(), el(), ey(), eN());
                }, [L, W, el, A, ey, q, J, eu, M, em, eN]);
            return (0, n.jsx)(o.a, {
                transitionState: t,
                onClose: l,
                "aria-labelledby": a,
                title: C.intl.string(C.t["F8a0W/"]),
                actions: [
                    { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: l },
                    { variant: "primary", text: C.intl.string(C.t.qDzapn), onClick: eD, disabled: !eP },
                ],
                actionBarInput: (0, n.jsx)(T.Q, { variant: "primary", text: eH, onClick: ek, disabled: 0 === ej }),
                children: (0, n.jsxs)("div", {
                    className: v.kL,
                    children: [
                        L &&
                            (0, n.jsx)(O, {
                                label: C.intl.string(C.t.Qz6eOR),
                                sublabel: C.intl.string(C.t["2JyXnO"]),
                                textPlaceholder: C.intl.formatToPlainString(C.t["V4WMj/"], { username: c }),
                                value: D,
                                onChange: H,
                                onFocus: Y,
                                onSearchChange: k,
                                options: P,
                                filter: !0,
                                filterType: x.LWr.FILTER_FROM,
                                validateFilter: eM,
                                closeOnSelect: !1,
                                onBlur: B,
                            }),
                        A &&
                            (0, n.jsx)(O, {
                                label: C.intl.string(C.t["kLrM/s"]),
                                sublabel:
                                    i.type === x.I4_.DMS ? C.intl.string(C.t["b+abYv"]) : C.intl.string(C.t.x8cC0z),
                                textPlaceholder: C.intl.formatToPlainString(C.t.K4l507, { channelName: u }),
                                value: ea,
                                onChange: es,
                                onFocus: eh,
                                onSearchChange: eo,
                                options: ei,
                                filter: !0,
                                closeOnSelect: !1,
                                filterType: x.LWr.FILTER_IN,
                                validateFilter: eM,
                                onBlur: ed,
                            }),
                        (0, n.jsx)(O, {
                            label: C.intl.string(C.t["892qg1"]),
                            sublabel: C.intl.string(C.t["Oa//IE"]),
                            textPlaceholder: C.intl.string(C.t.tROvHH),
                            value: ee,
                            onChange: et,
                            onFocus: er,
                            options: V,
                            filter: !1,
                            closeOnSelect: !1,
                            filterType: x.LWr.FILTER_HAS,
                            validateFilter: eM,
                        }),
                        W &&
                            (0, n.jsx)(O, {
                                label: C.intl.string(C.t.HEBnRU),
                                sublabel: C.intl.string(C.t.PdfTqT),
                                textPlaceholder: C.intl.formatToPlainString(C.t.zka3aJ, { username: c }),
                                value: K,
                                onChange: $,
                                onFocus: Z,
                                onSearchChange: z,
                                options: U,
                                filter: !0,
                                filterType: x.LWr.FILTER_MENTIONS,
                                validateFilter: eM,
                                closeOnSelect: !1,
                                onBlur: G,
                            }),
                        (0, n.jsx)(N, {
                            options: eg,
                            dates: eF,
                            handleDateQueryChange: eL,
                            handleDateChange: eT,
                            handleAddDateFilter: eE,
                            handleRemoveDateFilter: ef,
                            validateDateFilter: eQ,
                        }),
                        M &&
                            (0, n.jsx)(O, {
                                label: C.intl.string(C.t.Xgc1av),
                                sublabel: C.intl.string(C.t.XaOAdt),
                                textPlaceholder: C.intl.string(C.t.CAdOdf),
                                value: eR,
                                onChange: e_,
                                onFocus: ex,
                                options: eI,
                                filter: !1,
                                closeOnSelect: !1,
                                filterType: x.LWr.FILTER_AUTHOR_TYPE,
                                validateFilter: eM,
                            }),
                        (0, n.jsx)(j, {
                            label: C.intl.string(C.t["6LYPWS"]),
                            sublabel: C.intl.string(C.t.L8jjfu),
                            textPlaceholder: C.intl.string(C.t.AQpFbX),
                            value: ev,
                            onChange: eW,
                            options: eC,
                            filterType: x.LWr.FILTER_PINNED,
                            validateFilter: eM,
                        }),
                    ],
                }),
            });
        },
    },
);
