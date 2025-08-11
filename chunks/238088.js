l.d(t, { default: () => j }), l(388685), l(539854);
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
    p = l(607802),
    C = l(770092),
    b = l(981631),
    f = l(388032),
    y = l(325507);
function S(e) {
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
function F(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: s, handleRemoveDateFilter: o } = e,
        u = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: y.dateFilter,
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
                className: y.dateFilterSelect,
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
                className: y.removeDateFilterButton,
                "aria-label": f.intl.formatToPlainString(f.t["2LwBlJ"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(c.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: y.trashIcon,
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
        className: y.filterSection,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: f.intl.string(f.t.oesnws),
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: f.intl.string(f.t.A2DY6O),
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    F,
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
                    text: f.intl.string(f.t.iP9YpK),
                    icon: c.BRu,
                    onClick: i,
                }),
        ],
    });
}
function v(e) {
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
                className: y.label,
                children: t,
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
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
function j(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        F = r.useMemo(() => (0, p.s5)(a), [a]),
        j = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, p.nl)(e) : "general";
        }),
        T = (0, C.I)(a),
        { searchFilters: E } = (0, m.hE)(T),
        I = r.useMemo(() => (0, p.nI)(T), [T]),
        O = r.useMemo(() => [...E[b.dCx.FILTER_BEFORE], ...E[b.dCx.FILTER_AFTER], ...E[b.dCx.FILTER_ON]], [E]),
        {
            options: R,
            query: N,
            setQuery: k,
            setQueryString: L,
            handleClearFilter: P,
            getApplyQueryString: D,
        } = (0, m.HJ)(a, b.dCx.FILTER_FROM, E[b.dCx.FILTER_FROM]),
        {
            options: Q,
            query: M,
            setQuery: q,
            setQueryString: A,
            handleClearFilter: w,
            getApplyQueryString: B,
        } = (0, m.HJ)(a, b.dCx.FILTER_MENTIONS, E[b.dCx.FILTER_MENTIONS]),
        H = (0, m.Zc)(F),
        Z = (0, p.R6)(a),
        {
            options: z,
            query: J,
            setQuery: W,
            handleClearFilter: K,
            getApplyQueryString: Y,
        } = (0, m.Z2)(a, E[b.dCx.FILTER_HAS]),
        {
            options: U,
            query: V,
            setQuery: X,
            setQueryString: G,
            handleClearFilter: $,
            getApplyQueryString: ee,
        } = (0, m.ur)(a, E[b.dCx.FILTER_IN]),
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
        } = (0, m.fI)(O),
        ed = r.useMemo(() => N.length + M.length + J.length + V.length + er.length, [N, M, J, V, er]),
        eh = r.useCallback(() => {
            if (0 === ed && 0 === I.length) return void l();
            let e = D(b.dCx.FILTER_FROM),
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
            let s = [...i, I].join(" ");
            g.S.dispatch(b.CkL.SET_SEARCH_QUERY, {
                query: s,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [eu, D, Y, ee, B, I, ed, l]),
        ex = r.useCallback(() => {
            P(), w(), K(), $(), ec();
        }, [P, w, K, $, ec]);
    return (0, n.jsxs)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: f.intl.string(f.t.F8a0W1),
        actions: [
            {
                variant: "secondary",
                text: f.intl.string(f.t["ETE/oK"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: f.intl.string(f.t.qDzapq),
                onClick: eh,
            },
        ],
        actionBarInput: (0, n.jsx)(c.P3F, {
            onClick: ex,
            className: y.clearFilters,
            children: (0, n.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: ed > 0 ? "text-brand" : "text-tertiary",
                children: [f.intl.string(f.t.YfwFu7), " ", ed > 0 && "(".concat(ed, ")")],
            }),
        }),
        children: [
            (0, n.jsx)(
                v,
                S(
                    {
                        label: f.intl.string(f.t.Qz6eOT),
                        sublabel: f.intl.string(f.t["2JyXnJ"]),
                        textPlaceholder: f.intl.string(f.t.V4WMj4),
                        value: N,
                        onChange: k,
                        onSearchChange: L,
                        options: R,
                    },
                    H,
                ),
            ),
            Z &&
                (0, n.jsx)(v, {
                    label: f.intl.string(f.t["kLrM/v"]),
                    sublabel: f.intl.string(f.t.x8cC09),
                    textPlaceholder: f.intl.formatToPlainString(f.t.K4l509, { channelName: j }),
                    value: V,
                    onChange: X,
                    onSearchChange: G,
                    options: U,
                    containerClassName: y.filterSection,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: et,
                }),
            (0, n.jsx)(
                v,
                S(
                    {
                        label: f.intl.string(f.t.HEBnRU),
                        sublabel: f.intl.string(f.t.PdfTqa),
                        textPlaceholder: f.intl.string(f.t.zka3aG),
                        value: M,
                        onChange: q,
                        onSearchChange: A,
                        options: Q,
                        containerClassName: y.filterSection,
                    },
                    H,
                ),
            ),
            (0, n.jsx)(v, {
                label: f.intl.string(f.t["892qg4"]),
                sublabel: f.intl.string(f.t["Oa//IC"]),
                textPlaceholder: f.intl.string(f.t.tROvHB),
                value: J,
                onChange: W,
                options: z,
                containerClassName: y.filterSection,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(_, {
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
