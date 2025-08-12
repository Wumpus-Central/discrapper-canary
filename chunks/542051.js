n.d(t, {
    M: () => b,
    Z: () => O,
}),
    n(415506),
    n(781311),
    n(388685);
var r,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(607802),
    u = n(579612),
    d = n(388032),
    f = n(333146);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
    let { query: t, searchFavorites: n, showDMQueryText: r } = e,
        {
            filterCount: a,
            queryContent: s,
            isQueryEmpty: u,
        } = o.useMemo(() => {
            var e, n, r;
            let i = (0, c.kG)(t),
                o = (0, c.$G)(i),
                a = null != (n = (0, c.UP)(o)) ? n : "";
            return {
                filterCount: null != (r = null == (e = o.channel_id) ? void 0 : e.length) ? r : 0,
                isQueryEmpty: 0 === a.length,
                queryContent: a,
            };
        }, [t]);
    return n
        ? (0, i.jsx)("div", {
              className: f.queryText,
              children: d.intl.string(d.t["6RVtLC"]),
          })
        : r
          ? a > 0
              ? (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    className: f.searchDMQueryText,
                    children: u
                        ? d.intl.format(d.t.iV2ftr, { filterCount: a })
                        : d.intl.format(d.t["5CTmUl"], {
                              filterCount: a,
                              value: s,
                          }),
                })
              : (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    className: f.searchDMQueryText,
                    children: u ? d.intl.string(d.t.w39VdH) : d.intl.format(d.t["9gKPv7"], { value: s }),
                })
          : (0, i.jsx)("div", {
                className: f.queryText,
                children: d.intl.format(d.t.ub226e, { value: t }),
            });
};
function E(e) {
    e.stopPropagation(), e.preventDefault();
}
function b(e, t, n) {
    return {
        id: "".concat(e, "-").concat(t),
        role: "option",
        tabIndex: -1,
        "aria-selected": n,
    };
}
class y extends (r = o.PureComponent) {
    renderQuery(e) {
        let {
            query: t,
            navId: n,
            focusedIndex: r,
            onSelectQuery: o,
            onSelectSearchEverywhere: a,
            onHighlightQuery: c,
            hideQuery: u,
            searchFavorites: _,
            showDMQueryText: h,
        } = this.props;
        if (e || u) return null;
        let E = -1 === r;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(
                    l.P3F,
                    m(p({ className: s()(f.queryContainer, { [f.focused]: E }) }, b(n, -1, E)), {
                        onMouseEnter: c,
                        onClick: o,
                        children: [
                            (0, i.jsx)(g, {
                                query: t,
                                searchFavorites: _,
                                showDMQueryText: h,
                            }),
                            (0, i.jsx)("div", {
                                className: f.queryShortcut,
                                "aria-hidden": !0,
                                children: (0, i.jsx)(l.M2$, {
                                    shortcut: "return",
                                    dim: !0,
                                    className: f.keyCombo,
                                }),
                            }),
                        ],
                    }),
                ),
                _ &&
                    (0, i.jsxs)(
                        l.P3F,
                        m(p({ className: s()(f.queryContainer, { [f.focused]: E }) }, b(n, -1, E)), {
                            onMouseEnter: c,
                            onClick: a,
                            children: [
                                (0, i.jsx)("div", {
                                    className: f.queryText,
                                    children: d.intl.string(d.t.FtSUxc),
                                }),
                                (0, i.jsx)("div", {
                                    className: f.queryShortcut,
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(l.M2$, {
                                        shortcut: "shift+return",
                                        dim: !0,
                                        className: f.keyCombo,
                                    }),
                                }),
                            ],
                        }),
                    ),
            ],
        });
    }
    renderResults(e) {
        let {
            numResults: t,
            renderNoResults: n,
            renderInitialState: r,
            renderResult: i,
            renderCustomResults: o,
        } = this.props;
        if (e) return r();
        if (0 === t) return n();
        if (null != i) return Array.from({ length: t }).map((e, t) => i(t));
        if (null != o) return o();
        throw Error("SearchResultsPopout.renderResults: Flow should never allow this...");
    }
    render() {
        let { query: e, focusedIndex: t, navId: n, className: r } = this.props,
            o = "" === e.trim();
        return (0, i.jsxs)("div", {
            className: s()(f.container, r),
            onMouseDown: E,
            role: "listbox",
            id: n,
            tabIndex: -1,
            "aria-activedescendant": "".concat(n, "-").concat(t),
            children: [this.renderQuery(o), this.renderSearchInSelectedChannelAutocomplete(), this.renderResults(o)],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "renderSearchInSelectedChannelAutocomplete", () => {
                let {
                    navId: e,
                    channel: t,
                    showSearchInSelectedChannel: n,
                    focusedIndex: r,
                    onSelectSearchInSelectedChannel: o,
                } = this.props;
                if (!n || null == t) return null;
                let a = -1 === r,
                    s = (0, c.X3)(t),
                    _ = (0, i.jsx)(u.ZP, {
                        channel: t,
                        text: d.intl.formatToPlainString(d.t.LDpotL, { guildName: s }),
                        channelContainerClassName: f.channelContainer,
                        textContainerClassName: f.searchResultNameContainer,
                    });
                return (0, i.jsx)(
                    l.P3F,
                    m(p({}, b(e, -1, a)), {
                        className: f.inChannelOptionContainer,
                        onClick: o,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "interactive-normal",
                            className: f.inChannelOption,
                            children: d.intl.format(d.t.LDpotL, { guildName: _ }),
                        }),
                    }),
                );
            });
    }
}
_(y, "defaultProps", {
    renderInitialState: () => null,
    hideQuery: !1,
});
let O = y;
