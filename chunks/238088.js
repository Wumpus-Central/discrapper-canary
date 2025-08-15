l.d(t, { default: () => I }), l(388685), l(539854);
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
    F = l(833103),
    m = l(607802),
    C = l(770092),
    p = l(981631),
    b = l(388032),
    S = l(540432);
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
function f(e) {
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
function E(e) {
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
                    f,
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
function _(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: a,
        onChange: i,
        options: s,
        filter: o,
        closeOnSelect: u,
        containerClassName: d,
        onFocus: h,
        onSearchChange: x,
        renderOptionPrefix: g,
        renderOptionSuffix: F,
    } = e;
    return (0, n.jsxs)("div", {
        className: d,
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
                onFocus: h,
                onSearchChange: x,
                closeOnSelect: u,
                filter: o,
                renderOptionPrefix: g,
                renderOptionSuffix: F,
            }),
        ],
    });
}
function I(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        f = r.useMemo(() => (0, m.s5)(a), [a]),
        I = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, m.nl)(e) : "general";
        }),
        T = (0, C.I)(a),
        { searchFilters: v } = (0, F.hE)(T),
        R = r.useMemo(() => (0, m.nI)(T), [T]),
        j = r.useMemo(() => [...v[p.dCx.FILTER_BEFORE], ...v[p.dCx.FILTER_AFTER], ...v[p.dCx.FILTER_ON]], [v]),
        {
            options: N,
            query: O,
            setQuery: k,
            setQueryString: L,
            handleClearFilter: M,
            getApplyQueryString: P,
            handleFocusFilter: D,
        } = (0, F.HJ)(a, p.dCx.FILTER_FROM, v[p.dCx.FILTER_FROM]),
        {
            options: Q,
            query: q,
            setQuery: A,
            setQueryString: w,
            handleClearFilter: B,
            getApplyQueryString: H,
            handleFocusFilter: Z,
        } = (0, F.HJ)(a, p.dCx.FILTER_MENTIONS, v[p.dCx.FILTER_MENTIONS]),
        z = (0, F.Zc)(f),
        J = (0, m.R6)(a),
        {
            options: W,
            query: K,
            setQuery: Y,
            handleClearFilter: U,
            getApplyQueryString: V,
            handleFocusFilter: X,
        } = (0, F.Z2)(a, v[p.dCx.FILTER_HAS]),
        {
            options: G,
            query: $,
            setQuery: ee,
            setQueryString: et,
            handleClearFilter: el,
            getApplyQueryString: en,
            handleFocusFilter: er,
        } = (0, F.ur)(a, v[p.dCx.FILTER_IN]),
        ea = r.useCallback((e) => {
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
            options: ei,
            dates: es,
            validDates: eo,
            handleDateQueryChange: ec,
            handleDateChange: eu,
            handleAddDateFilter: ed,
            handleRemoveDateFilter: eh,
            handleClearDateFilter: ex,
            getDateQueryString: eg,
        } = (0, F.fI)(j),
        eF = r.useMemo(() => O.length + q.length + K.length + $.length + eo.length, [O, q, K, $, eo]),
        em = r.useMemo(
            () =>
                !(0, F.Ek)(O, v[p.dCx.FILTER_FROM]) ||
                !(0, F.Ek)(q, v[p.dCx.FILTER_MENTIONS]) ||
                !(0, F.Ek)($, v[p.dCx.FILTER_IN]) ||
                !(0, F.Ek)(K, v[p.dCx.FILTER_HAS]) ||
                !(0, F.LE)(eo, j),
            [O, v, q, K, $, eo, j],
        ),
        eC = r.useCallback(() => {
            let e = P(p.dCx.FILTER_FROM),
                t = H(p.dCx.FILTER_MENTIONS),
                n = V(p.dCx.FILTER_HAS),
                r = en(p.dCx.FILTER_IN),
                a = eg(),
                i = [];
            null != e && i.push(e),
                null != t && i.push(t),
                null != n && i.push(n),
                null != r && i.push(r),
                null != a && i.push(a);
            let s = [...i, R].join(" ");
            g.S.dispatch(p.CkL.SET_SEARCH_QUERY, {
                query: s,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [eg, P, V, en, H, R, l]),
        ep = r.useCallback(() => {
            M(), B(), U(), el(), ex();
        }, [M, B, U, el, ex]);
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
                onClick: eC,
                disabled: !em,
            },
        ],
        actionBarInput: (0, n.jsx)(c.P3F, {
            onClick: ep,
            className: S.clearFilters,
            children: (0, n.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: eF > 0 ? "text-brand" : "text-tertiary",
                children: [b.intl.string(b.t.YfwFu7), " ", eF > 0 && "(".concat(eF, ")")],
            }),
        }),
        children: [
            (0, n.jsx)(
                _,
                y(
                    {
                        label: b.intl.string(b.t.Qz6eOT),
                        sublabel: b.intl.string(b.t["2JyXnJ"]),
                        textPlaceholder: b.intl.string(b.t.V4WMj4),
                        value: O,
                        onChange: k,
                        onFocus: D,
                        onSearchChange: L,
                        options: N,
                    },
                    z,
                ),
            ),
            J &&
                (0, n.jsx)(_, {
                    label: b.intl.string(b.t["kLrM/v"]),
                    sublabel: b.intl.string(b.t.x8cC09),
                    textPlaceholder: b.intl.formatToPlainString(b.t.K4l509, { channelName: I }),
                    value: $,
                    onChange: ee,
                    onFocus: er,
                    onSearchChange: et,
                    options: G,
                    containerClassName: S.filterSection,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: ea,
                }),
            (0, n.jsx)(
                _,
                y(
                    {
                        label: b.intl.string(b.t.HEBnRU),
                        sublabel: b.intl.string(b.t.PdfTqa),
                        textPlaceholder: b.intl.string(b.t.zka3aG),
                        value: q,
                        onChange: A,
                        onFocus: Z,
                        onSearchChange: w,
                        options: Q,
                        containerClassName: S.filterSection,
                    },
                    z,
                ),
            ),
            (0, n.jsx)(_, {
                label: b.intl.string(b.t["892qg4"]),
                sublabel: b.intl.string(b.t["Oa//IC"]),
                textPlaceholder: b.intl.string(b.t.tROvHB),
                value: K,
                onChange: Y,
                onFocus: X,
                options: W,
                containerClassName: S.filterSection,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(E, {
                options: ei,
                dates: es,
                handleDateQueryChange: ec,
                handleDateChange: eu,
                handleAddDateFilter: ed,
                handleRemoveDateFilter: eh,
            }),
        ],
    });
}
