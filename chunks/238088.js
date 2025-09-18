l.d(t, { default: () => E }), l(388685), l(539854);
var n = l(951288),
    r = l(647438),
    a = l(913527),
    i = l.n(a),
    s = l(442837),
    o = l(82659),
    c = l(481060),
    u = l(471445),
    d = l(313201),
    h = l(592125),
    x = l(944486),
    g = l(585483),
    F = l(607802),
    p = l(465524),
    m = l(611004),
    C = l(981631),
    b = l(388032),
    S = l(540432);
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
function y(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: s, handleRemoveDateFilter: o } = e,
        u = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: S.dateFilter,
        children: [
            (0, n.jsx)(c.q4e, {
                options: s,
                value: l.query,
                onChange: (e) => {
                    r({
                        query: e,
                        index: t,
                    });
                },
                className: S.dateFilterSelect,
            }),
            (0, n.jsx)(c.Wrb, {
                value: l.date,
                onSelect: (e) => {
                    a({
                        date: e,
                        index: t,
                    });
                },
                minDate: d,
                maxDate: u,
            }),
            (0, n.jsx)(c.P3F, {
                onClick: () => {
                    o(t);
                },
                className: S.removeDateFilterButton,
                "aria-label": b.intl.formatToPlainString(b.t["2LwBlJ"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(c.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: S.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function _(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: a,
            handleAddDateFilter: i,
            handleRemoveDateFilter: s,
        } = e,
        o = l.length < 4;
    return (0, n.jsxs)("div", {
        className: S.filterSection,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: S.label,
                children: b.intl.string(b.t.oesnws),
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: S.sublabel,
                children: b.intl.string(b.t.A2DY6O),
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
            o &&
                (0, n.jsx)(c.zxk, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: b.intl.string(b.t.iP9YpK),
                    icon: c.BRu,
                    onClick: i,
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
        closeOnSelect: u,
        onFocus: d,
        onSearchChange: h,
        renderOptionPrefix: x,
        renderOptionSuffix: g,
    } = e;
    return (0, n.jsxs)("div", {
        className: S.filterSection,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: S.label,
                children: t,
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: S.sublabel,
                children: l,
            }),
            (0, n.jsx)(c.VcW, {
                multi: !0,
                options: s,
                placeholder: r,
                value: a,
                onChange: i,
                onFocus: d,
                onSearchChange: h,
                closeOnSelect: u,
                filter: o,
                renderOptionPrefix: x,
                renderOptionSuffix: g,
            }),
        ],
    });
}
function E(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        y = r.useMemo(() => (0, F.s5)(a), [a]),
        E = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, F.nl)(e) : "general";
        }),
        [T, v] = r.useState(m.Z.getSearchInputText(a)),
        j = r.useMemo(() => (0, F.kG)(null != T ? T : ""), [T]),
        { prefilledSearchFilters: R, eligibleFilterTokens: O } = (0, p.p4)(j, a),
        N = O.has(C.dCx.FILTER_FROM),
        k = O.has(C.dCx.FILTER_MENTIONS),
        L = O.has(C.dCx.FILTER_IN),
        M = r.useMemo(() => (0, F.nI)(j), [j]),
        {
            options: P,
            query: D,
            setQuery: Q,
            setQueryString: q,
            handleClearFilter: A,
            getApplyQueryString: w,
            handleFocusFilter: H,
        } = (0, p.HJ)(a, C.dCx.FILTER_FROM, R[C.dCx.FILTER_FROM]),
        {
            options: B,
            query: Z,
            setQuery: z,
            setQueryString: J,
            handleClearFilter: W,
            getApplyQueryString: K,
            handleFocusFilter: Y,
        } = (0, p.HJ)(a, C.dCx.FILTER_MENTIONS, R[C.dCx.FILTER_MENTIONS]),
        G = (0, p.Zc)(y),
        {
            options: U,
            query: V,
            setQuery: X,
            handleClearFilter: $,
            getApplyQueryString: ee,
            handleFocusFilter: et,
        } = (0, p.Z2)(a, R[C.dCx.FILTER_HAS]),
        {
            options: el,
            query: en,
            setQuery: er,
            setQueryString: ea,
            handleClearFilter: ei,
            getApplyQueryString: es,
            handleFocusFilter: eo,
        } = (0, p.ur)(a, R[C.dCx.FILTER_IN]),
        ec = r.useCallback((e) => {
            if (null == e) return;
            let t = h.Z.getChannel(e.value);
            if (null == t) return;
            let l = (0, u.KS)(t);
            return null != l
                ? (0, n.jsx)(l, {
                      size: "xs",
                      color: "currentColor",
                  })
                : null;
        }, []),
        {
            options: eu,
            dates: ed,
            validDates: eh,
            handleDateQueryChange: ex,
            handleDateChange: eg,
            handleAddDateFilter: eF,
            handleRemoveDateFilter: ep,
            handleClearDateFilter: em,
            getDateQueryString: eC,
        } = (0, p.fI)(R.dateFilters),
        eb = r.useMemo(() => {
            let e = 0;
            return (
                N && D.length > 0 && (e += D.length),
                k && Z.length > 0 && (e += Z.length),
                L && en.length > 0 && (e += en.length),
                V.length > 0 && (e += V.length),
                eh.length > 0 && (e += eh.length),
                e
            );
        }, [N, D, k, Z, L, en, V, eh]),
        eS = r.useMemo(
            () =>
                !(
                    (!N || (0, p.Ek)(D, R[C.dCx.FILTER_FROM])) &&
                    (!k || (0, p.Ek)(Z, R[C.dCx.FILTER_MENTIONS])) &&
                    (!L || (0, p.Ek)(en, R[C.dCx.FILTER_IN])) &&
                    (0, p.Ek)(V, R[C.dCx.FILTER_HAS]) &&
                    (0, p.LE)(eh, R.dateFilters)
                ),
            [N, D, R, k, Z, L, en, V, eh],
        ),
        ef = r.useCallback(() => {
            let e = ee(C.dCx.FILTER_HAS),
                t = eC(),
                n = [];
            if (N) {
                let e = w(C.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (k) {
                let e = K(C.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (L) {
                let e = es(C.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            null != e && n.push(e), null != t && n.push(t);
            let r = [...n, M].join(" ");
            g.S.dispatch(C.CkL.SET_SEARCH_QUERY, {
                query: r,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [N, L, k, eC, w, ee, es, K, M, l]),
        ey = r.useCallback(() => {
            N && A(), k && W(), L && ei(), $(), em();
        }, [N, k, $, L, em, A, W, ei]);
    return (0, n.jsxs)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: b.intl.string(b.t.F8a0W1),
        actions: [
            {
                variant: "secondary",
                text: b.intl.string(b.t["ETE/oK"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: b.intl.string(b.t.qDzapq),
                onClick: ef,
                disabled: !eS,
            },
        ],
        actionBarInput: (0, n.jsx)(c.P3F, {
            onClick: ey,
            className: S.clearFilters,
            children: (0, n.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: eb > 0 ? "text-brand" : "text-tertiary",
                children: [b.intl.string(b.t.YfwFu7), " ", eb > 0 && "(".concat(eb, ")")],
            }),
        }),
        children: [
            N &&
                (0, n.jsx)(
                    I,
                    f(
                        {
                            label: b.intl.string(b.t.Qz6eOT),
                            sublabel: b.intl.string(b.t["2JyXnJ"]),
                            textPlaceholder: b.intl.string(b.t.V4WMj4),
                            value: D,
                            onChange: Q,
                            onFocus: H,
                            onSearchChange: q,
                            options: P,
                        },
                        G,
                    ),
                ),
            L &&
                (0, n.jsx)(I, {
                    label: b.intl.string(b.t["kLrM/v"]),
                    sublabel: b.intl.string(b.t.x8cC09),
                    textPlaceholder: b.intl.formatToPlainString(b.t.K4l509, { channelName: E }),
                    value: en,
                    onChange: er,
                    onFocus: eo,
                    onSearchChange: ea,
                    options: el,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: ec,
                }),
            k &&
                (0, n.jsx)(
                    I,
                    f(
                        {
                            label: b.intl.string(b.t.HEBnRU),
                            sublabel: b.intl.string(b.t.PdfTqa),
                            textPlaceholder: b.intl.string(b.t.zka3aG),
                            value: Z,
                            onChange: z,
                            onFocus: Y,
                            onSearchChange: J,
                            options: B,
                        },
                        G,
                    ),
                ),
            (0, n.jsx)(I, {
                label: b.intl.string(b.t["892qg4"]),
                sublabel: b.intl.string(b.t["Oa//IC"]),
                textPlaceholder: b.intl.string(b.t.tROvHB),
                value: V,
                onChange: X,
                onFocus: et,
                options: U,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(_, {
                options: eu,
                dates: ed,
                handleDateQueryChange: ex,
                handleDateChange: eg,
                handleAddDateFilter: eF,
                handleRemoveDateFilter: ep,
            }),
        ],
    });
}
