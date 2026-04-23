l.d(t, { default: () => W }), l(321073);
var n = l(627968),
    r = l(64700),
    a = l(989349),
    i = l.n(a),
    s = l(691885),
    o = l(189213),
    u = l(17928),
    d = l(582306),
    c = l(939249),
    h = l(241326),
    g = l(834730),
    p = l(821609),
    F = l(499373),
    T = l(783878),
    L = l(123292),
    m = l(915089),
    v = l(734057),
    f = l(309010),
    E = l(287809),
    x = l(625494),
    I = l(822382),
    _ = l(753806),
    R = l(121806),
    S = l(768570),
    y = l(652215),
    C = l(985018),
    b = l(858398);
function j(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: o, handleRemoveDateFilter: u } = e,
        g = i()(),
        p = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: b.Rr,
        children: [
            (0, n.jsx)(s.l, {
                label: C.intl.string(C.t.ArxagQ),
                hideLabel: !0,
                selectionMode: "single",
                formatOption: (e) => {
                    let { key: t, value: l, label: n, leading: r, trailing: a } = e;
                    return { id: t ?? l, value: l, label: n, leading: r, trailing: a };
                },
                options: o,
                onSelectionChange: (e) => {
                    null != e && r({ query: e, index: t });
                },
                value: l.query,
                fullWidth: !0,
            }),
            (0, n.jsx)(d.J, {
                value: l.date,
                onSelect: (e) => {
                    a({ date: e, index: t });
                },
                minDate: p,
                maxDate: g,
            }),
            (0, n.jsx)(c.D, {
                onClick: () => {
                    u(t);
                },
                className: b.tL,
                "aria-label": C.intl.formatToPlainString(C.t["2LwBlF"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(h.u, { size: "md", color: "currentColor", className: b.IT, "aria-hidden": !0 }),
            }),
        ],
    });
}
function N(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: a,
            handleAddDateFilter: i,
            handleRemoveDateFilter: s,
            validateDateFilter: o,
        } = e,
        u = l.length < 4;
    return (0, n.jsxs)("div", {
        className: b.KZ,
        children: [
            (0, n.jsxs)("div", {
                className: b._A,
                children: [
                    (0, n.jsx)(g.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: C.intl.string(C.t.oesnwm),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: C.intl.string(C.t.A2DY6J),
                    }),
                ],
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    j,
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
            u &&
                (0, n.jsx)(p.$, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: C.intl.string(C.t.iP9YpB),
                    icon: F.T,
                    onClick: () => {
                        o() && i();
                    },
                }),
        ],
    });
}
function A(e) {
    let {
            label: t,
            sublabel: l,
            textPlaceholder: a,
            value: i,
            onChange: s,
            options: o,
            filter: u,
            closeOnSelect: d,
            onFocus: c,
            onSearchChange: h,
            filterType: g,
            validateFilter: p,
            onBlur: F,
        } = e,
        L = r.useMemo(() => (u ? (e) => e : void 0), [u]);
    return (0, n.jsx)("div", {
        className: b.KZ,
        children: (0, n.jsx)(T.Z, {
            label: t,
            description: l,
            selectionMode: "multiple",
            formatOption: (e) => {
                let { key: t, value: l, label: n, leading: r, trailing: a } = e;
                return { id: t ?? l, value: l, label: n, leading: r, trailing: a };
            },
            options: o,
            placeholder: a,
            value: i,
            onSelectionChange: (e) => {
                (!(e.length > i.length) || p(g, e[e.length - 1])) && s(e);
            },
            onFocus: c,
            onQueryChange: (e) => h?.(e.target.value),
            closeOnSelect: d,
            customMatchSorter: L,
            onBlur: F,
            wrapTags: !0,
        }),
    });
}
function O(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: a,
        onChange: i,
        options: o,
        filterType: u,
        validateFilter: d,
    } = e;
    return (0, n.jsx)("div", {
        className: b.KZ,
        children: (0, n.jsx)(s.l, {
            label: t,
            description: l,
            selectionMode: "single",
            formatOption: (e) => {
                let { key: t, value: l, label: n, leading: r, trailing: a } = e;
                return { id: t ?? l, value: l, label: n, leading: r, trailing: a };
            },
            placeholder: r,
            options: o,
            onSelectionChange: (e) => {
                (null == e || d(u, e)) && i(e);
            },
            value: a,
            clearable: null != a,
            fullWidth: !0,
        }),
    });
}
function W(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, m.GV)(),
        s = (0, u.bG)([v.A, f.A], () => {
            let e = v.A.getChannel(f.A.getChannelId());
            return null != e ? (0, I.E3)(e) : "general";
        }),
        d = (0, u.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return null != e ? e.username : C.intl.string(C.t.cqpybK);
        }),
        [c, h] = r.useState(_.A.getSearchInputText(a)),
        g = r.useMemo(() => (0, I._o)(c ?? ""), [c]),
        { prefilledSearchFilters: p, eligibleFilterTokens: F } = (0, R.vj)(g, a),
        T = F.has(y.LWr.FILTER_FROM),
        j = F.has(y.LWr.FILTER_MENTIONS),
        W = F.has(y.LWr.FILTER_IN),
        M = F.has(y.LWr.FILTER_AUTHOR_TYPE),
        w = r.useMemo(() => (0, I.Pp)(g), [g]),
        {
            options: D,
            query: P,
            setQuery: Q,
            setQueryString: k,
            handleClearFilter: H,
            getApplyQueryString: B,
            handleFocusFilter: q,
            handleBlurFilter: Y,
        } = (0, R.ps)(a, y.LWr.FILTER_FROM, p[y.LWr.FILTER_FROM]),
        {
            options: U,
            query: Z,
            setQuery: J,
            setQueryString: K,
            handleClearFilter: V,
            getApplyQueryString: z,
            handleFocusFilter: $,
            handleBlurFilter: X,
        } = (0, R.ps)(a, y.LWr.FILTER_MENTIONS, p[y.LWr.FILTER_MENTIONS]),
        {
            options: G,
            query: ee,
            setQuery: et,
            handleClearFilter: el,
            getApplyQueryString: en,
            handleFocusFilter: er,
        } = (0, R.u2)(a, p[y.LWr.FILTER_HAS]),
        {
            options: ea,
            query: ei,
            setQuery: es,
            setQueryString: eo,
            handleClearFilter: eu,
            getApplyQueryString: ed,
            handleFocusFilter: ec,
            handleBlurFilter: eh,
        } = (0, R.TT)(a, p[y.LWr.FILTER_IN]),
        {
            options: eg,
            dates: ep,
            validDates: eF,
            handleDateQueryChange: eT,
            handleDateChange: eL,
            handleAddDateFilter: em,
            handleRemoveDateFilter: ev,
            handleClearDateFilter: ef,
            getDateQueryString: eE,
        } = (0, R.Ky)(p.dateFilters),
        {
            options: ex,
            query: eI,
            setQuery: e_,
            handleClearFilter: eR,
            getApplyQueryString: eS,
            handleFocusFilter: ey,
        } = (0, R.H3)(a, p[y.LWr.FILTER_AUTHOR_TYPE]),
        {
            options: eC,
            query: eb,
            setQuery: ej,
            handleClearFilter: eN,
            getApplyQueryString: eA,
        } = (0, R.CT)(a, p[y.LWr.FILTER_PINNED]),
        eO = r.useMemo(() => {
            let e = 0;
            return (
                T && P.length > 0 && (e += P.length),
                j && Z.length > 0 && (e += Z.length),
                W && ei.length > 0 && (e += ei.length),
                ee.length > 0 && (e += ee.length),
                eF.length > 0 && (e += eF.length),
                M && eI.length > 0 && (e += eI.length),
                null !== eb && (e += 1),
                e
            );
        }, [T, P, j, Z, W, ei, ee, eF, M, eI, eb]),
        eW = r.useMemo(() => {
            let e = en(y.LWr.FILTER_HAS),
                t = eE(),
                l = eA(y.LWr.FILTER_PINNED),
                n = [];
            if (T) {
                let e = B(y.LWr.FILTER_FROM);
                null != e && n.push(e);
            }
            if (j) {
                let e = z(y.LWr.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (W) {
                let e = ed(y.LWr.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), M)) {
                let e = eS(y.LWr.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [T, B, j, z, W, ed, en, eE, M, eS, eA]),
        { validateFilter: eM, validateDateFilter: ew } = (0, R.dY)({ nonFilterQueryString: w, filterQueryString: eW }),
        eD = r.useMemo(
            () =>
                !(
                    (!T || (0, R.wf)(P, p[y.LWr.FILTER_FROM])) &&
                    (!j || (0, R.wf)(Z, p[y.LWr.FILTER_MENTIONS])) &&
                    (!W || (0, R.wf)(ei, p[y.LWr.FILTER_IN])) &&
                    (0, R.wf)(ee, p[y.LWr.FILTER_HAS]) &&
                    (0, R._2)(eF, p.dateFilters) &&
                    (!M || (0, R.wf)(eI, p[y.LWr.FILTER_AUTHOR_TYPE])) &&
                    (0, R.wf)(eb, p[y.LWr.FILTER_PINNED])
                ),
            [T, P, p, j, Z, W, ei, ee, eF, M, eI, eb],
        ),
        eP = r.useCallback(() => {
            if (0 === eW.length && 0 === w.trim().length) {
                x._.dispatch(y.jej.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = `${eW} ${w}`.trim();
            _.A.dispatchSetSearchQuery({
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
                searchQuerySource: S.Q_.SEARCH_FILTERS_MODAL,
            }),
                l();
        }, [eW, w, l]),
        eQ = r.useMemo(() => {
            if (0 === eO) return C.intl.string(C.t.YfwFu1);
            let e = `(${eO})`;
            return `${C.intl.string(C.t.YfwFu1)} ${e}`;
        }, [eO]),
        ek = r.useCallback(() => {
            T && H(), j && V(), W && eu(), M && eR(), el(), ef(), eN();
        }, [T, j, el, W, ef, H, V, eu, M, eR, eN]);
    return (0, n.jsx)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: C.intl.string(C.t["F8a0W/"]),
        actions: [
            { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: l },
            { variant: "primary", text: C.intl.string(C.t.qDzapn), onClick: eP, disabled: !eD },
        ],
        actionBarInput: (0, n.jsx)(L.Q, { variant: "primary", text: eQ, onClick: ek, disabled: 0 === eO }),
        children: (0, n.jsxs)("div", {
            className: b.kL,
            children: [
                T &&
                    (0, n.jsx)(A, {
                        label: C.intl.string(C.t.Qz6eOR),
                        sublabel: C.intl.string(C.t["2JyXnO"]),
                        textPlaceholder: C.intl.formatToPlainString(C.t["V4WMj/"], { username: d }),
                        value: P,
                        onChange: Q,
                        onFocus: q,
                        onSearchChange: k,
                        options: D,
                        filter: !0,
                        filterType: y.LWr.FILTER_FROM,
                        validateFilter: eM,
                        closeOnSelect: !1,
                        onBlur: Y,
                    }),
                W &&
                    (0, n.jsx)(A, {
                        label: C.intl.string(C.t["kLrM/s"]),
                        sublabel: a.type === y.I4_.DMS ? C.intl.string(C.t["b+abYv"]) : C.intl.string(C.t.x8cC0z),
                        textPlaceholder: C.intl.formatToPlainString(C.t.K4l507, { channelName: s }),
                        value: ei,
                        onChange: es,
                        onFocus: ec,
                        onSearchChange: eo,
                        options: ea,
                        filter: !0,
                        closeOnSelect: !1,
                        filterType: y.LWr.FILTER_IN,
                        validateFilter: eM,
                        onBlur: eh,
                    }),
                (0, n.jsx)(A, {
                    label: C.intl.string(C.t["892qg1"]),
                    sublabel: C.intl.string(C.t["Oa//IE"]),
                    textPlaceholder: C.intl.string(C.t.tROvHH),
                    value: ee,
                    onChange: et,
                    onFocus: er,
                    options: G,
                    filter: !1,
                    closeOnSelect: !1,
                    filterType: y.LWr.FILTER_HAS,
                    validateFilter: eM,
                }),
                j &&
                    (0, n.jsx)(A, {
                        label: C.intl.string(C.t.HEBnRU),
                        sublabel: C.intl.string(C.t.PdfTqT),
                        textPlaceholder: C.intl.formatToPlainString(C.t.zka3aJ, { username: d }),
                        value: Z,
                        onChange: J,
                        onFocus: $,
                        onSearchChange: K,
                        options: U,
                        filter: !0,
                        filterType: y.LWr.FILTER_MENTIONS,
                        validateFilter: eM,
                        closeOnSelect: !1,
                        onBlur: X,
                    }),
                (0, n.jsx)(N, {
                    options: eg,
                    dates: ep,
                    handleDateQueryChange: eT,
                    handleDateChange: eL,
                    handleAddDateFilter: em,
                    handleRemoveDateFilter: ev,
                    validateDateFilter: ew,
                }),
                M &&
                    (0, n.jsx)(A, {
                        label: C.intl.string(C.t.Xgc1av),
                        sublabel: C.intl.string(C.t.XaOAdt),
                        textPlaceholder: C.intl.string(C.t.CAdOdf),
                        value: eI,
                        onChange: e_,
                        onFocus: ey,
                        options: ex,
                        filter: !1,
                        closeOnSelect: !1,
                        filterType: y.LWr.FILTER_AUTHOR_TYPE,
                        validateFilter: eM,
                    }),
                (0, n.jsx)(O, {
                    label: C.intl.string(C.t["6LYPWS"]),
                    sublabel: C.intl.string(C.t.L8jjfu),
                    textPlaceholder: C.intl.string(C.t.AQpFbX),
                    value: eb,
                    onChange: ej,
                    options: eC,
                    filterType: y.LWr.FILTER_PINNED,
                    validateFilter: eM,
                }),
            ],
        }),
    });
}
