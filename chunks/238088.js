l.d(t, { default: () => v }), l(388685), l(539854);
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
    C = l(981631),
    b = l(388032),
    f = l(325507);
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
        u = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: f.dateFilter,
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
                className: f.dateFilterSelect,
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
                className: f.removeDateFilterButton,
                "aria-label": b.intl.formatToPlainString(b.t["2LwBlJ"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(c.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: f.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function F(e) {
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
        className: f.filterSection,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: f.label,
                children: b.intl.string(b.t.oesnws),
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: f.sublabel,
                children: b.intl.string(b.t.A2DY6O),
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
                className: f.label,
                children: t,
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: f.sublabel,
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
function v(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        S = r.useMemo(() => (0, p.s5)(a), [a]),
        v = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, p.nl)(e) : "general";
        }),
        j = (0, m.gI)(a),
        { searchFilters: T } = (0, m.hE)(j),
        E = r.useMemo(() => (0, p.nI)(j), [j]),
        I = r.useMemo(() => [...T[C.dCx.FILTER_BEFORE], ...T[C.dCx.FILTER_AFTER], ...T[C.dCx.FILTER_ON]], [T]),
        {
            options: O,
            query: R,
            setQuery: N,
            setQueryString: k,
            handleClearFilter: L,
            getApplyQueryString: P,
        } = (0, m.HJ)(a, C.dCx.FILTER_FROM, T[C.dCx.FILTER_FROM]),
        {
            options: D,
            query: Q,
            setQuery: M,
            setQueryString: q,
            handleClearFilter: A,
            getApplyQueryString: w,
        } = (0, m.HJ)(a, C.dCx.FILTER_MENTIONS, T[C.dCx.FILTER_MENTIONS]),
        B = (0, m.Zc)(S),
        H = (0, p.R6)(a),
        {
            options: Z,
            query: z,
            setQuery: J,
            handleClearFilter: W,
            getApplyQueryString: K,
        } = (0, m.Z2)(a, T[C.dCx.FILTER_HAS]),
        {
            options: Y,
            query: U,
            setQuery: V,
            setQueryString: X,
            handleClearFilter: G,
            getApplyQueryString: $,
        } = (0, m.ur)(a, T[C.dCx.FILTER_IN]),
        ee = r.useCallback((e) => {
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
            options: et,
            dates: el,
            validDates: en,
            handleDateQueryChange: er,
            handleDateChange: ea,
            handleAddDateFilter: ei,
            handleRemoveDateFilter: es,
            handleClearDateFilter: eo,
            getDateQueryString: ec,
        } = (0, m.fI)(I),
        eu = r.useMemo(() => R.length + Q.length + z.length + U.length + en.length, [R, Q, z, U, en]),
        ed = r.useCallback(() => {
            if (0 === eu && 0 === E.length) return void l();
            let e = P(C.dCx.FILTER_FROM),
                t = w(C.dCx.FILTER_MENTIONS),
                n = K(C.dCx.FILTER_HAS),
                r = $(C.dCx.FILTER_IN),
                a = ec(),
                i = [];
            null != e && i.push(e),
                null != t && i.push(t),
                null != n && i.push(n),
                null != r && i.push(r),
                null != a && i.push(a);
            let s = [...i, E].join(" ");
            g.S.dispatch(C.CkL.SET_SEARCH_QUERY, {
                query: s,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [ec, P, K, $, w, E, eu, l]),
        eh = r.useCallback(() => {
            L(), A(), W(), G(), eo();
        }, [L, A, W, G, eo]);
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
                onClick: ed,
            },
        ],
        actionBarInput: (0, n.jsx)(c.P3F, {
            onClick: eh,
            className: f.clearFilters,
            children: (0, n.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: eu > 0 ? "text-brand" : "text-tertiary",
                children: [b.intl.string(b.t.YfwFu7), " ", eu > 0 && "(".concat(eu, ")")],
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
                        value: R,
                        onChange: N,
                        onSearchChange: k,
                        options: O,
                    },
                    B,
                ),
            ),
            H &&
                (0, n.jsx)(_, {
                    label: b.intl.string(b.t["kLrM/v"]),
                    sublabel: b.intl.string(b.t.x8cC09),
                    textPlaceholder: b.intl.formatToPlainString(b.t.K4l509, { channelName: v }),
                    value: U,
                    onChange: V,
                    onSearchChange: X,
                    options: Y,
                    containerClassName: f.filterSection,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: ee,
                }),
            (0, n.jsx)(
                _,
                y(
                    {
                        label: b.intl.string(b.t.HEBnRU),
                        sublabel: b.intl.string(b.t.PdfTqa),
                        textPlaceholder: b.intl.string(b.t.zka3aG),
                        value: Q,
                        onChange: M,
                        onSearchChange: q,
                        options: D,
                        containerClassName: f.filterSection,
                    },
                    B,
                ),
            ),
            (0, n.jsx)(_, {
                label: b.intl.string(b.t["892qg4"]),
                sublabel: b.intl.string(b.t["Oa//IC"]),
                textPlaceholder: b.intl.string(b.t.tROvHB),
                value: z,
                onChange: J,
                options: Z,
                containerClassName: f.filterSection,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(F, {
                options: et,
                dates: el,
                handleDateQueryChange: er,
                handleDateChange: ea,
                handleAddDateFilter: ei,
                handleRemoveDateFilter: es,
            }),
        ],
    });
}
