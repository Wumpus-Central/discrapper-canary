l.d(t, { default: () => I }), l(388685), l(539854);
var n = l(255367),
    r = l(73800),
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
    m = l(833103),
    C = l(607802),
    p = l(770092),
    b = l(981631),
    F = l(388032),
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
                "aria-label": F.intl.formatToPlainString(F.t["2LwBlJ"], { filterNumber: t + 1 }),
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
                children: F.intl.string(F.t.oesnws),
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: S.sublabel,
                children: F.intl.string(F.t.A2DY6O),
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
                    text: F.intl.string(F.t.iP9YpK),
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
        onSearchChange: h,
        renderOptionPrefix: x,
        renderOptionSuffix: g,
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
                onSearchChange: h,
                closeOnSelect: u,
                filter: o,
                renderOptionPrefix: x,
                renderOptionSuffix: g,
            }),
        ],
    });
}
function I(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        f = r.useMemo(() => (0, C.s5)(a), [a]),
        I = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, C.nl)(e) : "general";
        }),
        T = (0, p.I)(a),
        { searchFilters: v } = (0, m.hE)(T),
        R = r.useMemo(() => (0, C.nI)(T), [T]),
        j = r.useMemo(() => [...v[b.dCx.FILTER_BEFORE], ...v[b.dCx.FILTER_AFTER], ...v[b.dCx.FILTER_ON]], [v]),
        {
            options: N,
            query: O,
            setQuery: k,
            setQueryString: L,
            handleClearFilter: M,
            getApplyQueryString: P,
        } = (0, m.HJ)(a, b.dCx.FILTER_FROM, v[b.dCx.FILTER_FROM]),
        {
            options: D,
            query: Q,
            setQuery: q,
            setQueryString: A,
            handleClearFilter: w,
            getApplyQueryString: B,
        } = (0, m.HJ)(a, b.dCx.FILTER_MENTIONS, v[b.dCx.FILTER_MENTIONS]),
        H = (0, m.Zc)(f),
        Z = (0, C.R6)(a),
        {
            options: z,
            query: J,
            setQuery: W,
            handleClearFilter: K,
            getApplyQueryString: Y,
        } = (0, m.Z2)(a, v[b.dCx.FILTER_HAS]),
        {
            options: U,
            query: V,
            setQuery: X,
            setQueryString: G,
            handleClearFilter: $,
            getApplyQueryString: ee,
        } = (0, m.ur)(a, v[b.dCx.FILTER_IN]),
        et = r.useCallback((e) => {
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
            options: el,
            dates: en,
            validDates: er,
            handleDateQueryChange: ea,
            handleDateChange: ei,
            handleAddDateFilter: es,
            handleRemoveDateFilter: eo,
            handleClearDateFilter: ec,
            getDateQueryString: eu,
        } = (0, m.fI)(j),
        ed = r.useMemo(() => O.length + Q.length + J.length + V.length + er.length, [O, Q, J, V, er]),
        eh = r.useMemo(
            () =>
                !(0, m.Ek)(O, v[b.dCx.FILTER_FROM]) ||
                !(0, m.Ek)(Q, v[b.dCx.FILTER_MENTIONS]) ||
                !(0, m.Ek)(V, v[b.dCx.FILTER_IN]) ||
                !(0, m.Ek)(J, v[b.dCx.FILTER_HAS]) ||
                !(0, m.LE)(er, j),
            [O, v, Q, J, V, er, j],
        ),
        ex = r.useCallback(() => {
            let e = P(b.dCx.FILTER_FROM),
                t = B(b.dCx.FILTER_MENTIONS),
                n = Y(b.dCx.FILTER_HAS),
                r = ee(b.dCx.FILTER_IN),
                a = eu(),
                i = [];
            null != e && i.push(e),
                null != t && i.push(t),
                null != n && i.push(n),
                null != r && i.push(r),
                null != a && i.push(a);
            let s = [...i, R].join(" ");
            g.S.dispatch(b.CkL.SET_SEARCH_QUERY, {
                query: s,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [eu, P, Y, ee, B, R, l]),
        eg = r.useCallback(() => {
            M(), w(), K(), $(), ec();
        }, [M, w, K, $, ec]);
    return (0, n.jsxs)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: F.intl.string(F.t.F8a0W1),
        actions: [
            {
                variant: "secondary",
                text: F.intl.string(F.t["ETE/oK"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: F.intl.string(F.t.qDzapq),
                onClick: ex,
                disabled: !eh,
            },
        ],
        actionBarInput: (0, n.jsx)(c.P3F, {
            onClick: eg,
            className: S.clearFilters,
            children: (0, n.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: ed > 0 ? "text-brand" : "text-tertiary",
                children: [F.intl.string(F.t.YfwFu7), " ", ed > 0 && "(".concat(ed, ")")],
            }),
        }),
        children: [
            (0, n.jsx)(
                _,
                y(
                    {
                        label: F.intl.string(F.t.Qz6eOT),
                        sublabel: F.intl.string(F.t["2JyXnJ"]),
                        textPlaceholder: F.intl.string(F.t.V4WMj4),
                        value: O,
                        onChange: k,
                        onSearchChange: L,
                        options: N,
                    },
                    H,
                ),
            ),
            Z &&
                (0, n.jsx)(_, {
                    label: F.intl.string(F.t["kLrM/v"]),
                    sublabel: F.intl.string(F.t.x8cC09),
                    textPlaceholder: F.intl.formatToPlainString(F.t.K4l509, { channelName: I }),
                    value: V,
                    onChange: X,
                    onSearchChange: G,
                    options: U,
                    containerClassName: S.filterSection,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: et,
                }),
            (0, n.jsx)(
                _,
                y(
                    {
                        label: F.intl.string(F.t.HEBnRU),
                        sublabel: F.intl.string(F.t.PdfTqa),
                        textPlaceholder: F.intl.string(F.t.zka3aG),
                        value: Q,
                        onChange: q,
                        onSearchChange: A,
                        options: D,
                        containerClassName: S.filterSection,
                    },
                    H,
                ),
            ),
            (0, n.jsx)(_, {
                label: F.intl.string(F.t["892qg4"]),
                sublabel: F.intl.string(F.t["Oa//IC"]),
                textPlaceholder: F.intl.string(F.t.tROvHB),
                value: J,
                onChange: W,
                options: z,
                containerClassName: S.filterSection,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(E, {
                options: el,
                dates: en,
                handleDateQueryChange: ea,
                handleDateChange: ei,
                handleAddDateFilter: es,
                handleRemoveDateFilter: eo,
            }),
        ],
    });
}
