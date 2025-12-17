n.d(t, {
    M: () => b,
    Z: () => O,
}),
    n(415506),
    n(781311),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(607802),
    u = n(579612),
    d = n(388032),
    f = n(129420);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
    let { query: t, searchFavorites: n, showDMQueryText: r } = e,
        {
            filterCount: o,
            queryContent: s,
            isQueryEmpty: u,
        } = a.useMemo(() => {
            var e, n, r;
            let i = (0, c.kG)(t),
                a = (0, c.$G)(i),
                o = null != (n = (0, c.UP)(a)) ? n : "";
            return {
                filterCount: null != (r = null == (e = a.channel_id) ? void 0 : e.length) ? r : 0,
                isQueryEmpty: 0 === o.length,
                queryContent: o,
            };
        }, [t]);
    return n
        ? (0, i.jsx)("div", {
              className: f.queryText,
              children: d.intl.string(d.t["6RVtLA"]),
          })
        : r
          ? o > 0
              ? (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: f.searchDMQueryText,
                    children: u
                        ? d.intl.format(d.t.iV2fth, { filterCount: o })
                        : d.intl.format(d.t["5CTmUk"], {
                              filterCount: o,
                              value: s,
                          }),
                })
              : (0, i.jsx)(l.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    className: f.searchDMQueryText,
                    children: u ? d.intl.string(d.t.w39VdC) : d.intl.format(d.t["9gKPvw"], { value: s }),
                })
          : (0, i.jsx)("div", {
                className: f.queryText,
                children: d.intl.format(d.t.ub226W, { value: t }),
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
class y extends (r = a.PureComponent) {
    renderQuery(e) {
        let {
            query: t,
            navId: n,
            focusedIndex: r,
            onSelectQuery: a,
            onSelectSearchEverywhere: o,
            onHighlightQuery: c,
            hideQuery: u,
            searchFavorites: p,
            showDMQueryText: m,
        } = this.props;
        if (e || u) return null;
        let E = -1 === r;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(
                    l.P3F,
                    h(_({ className: s()(f.queryContainer, { [f.focused]: E }) }, b(n, -1, E)), {
                        onMouseEnter: c,
                        onClick: a,
                        children: [
                            (0, i.jsx)(g, {
                                query: t,
                                searchFavorites: p,
                                showDMQueryText: m,
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
                p &&
                    (0, i.jsxs)(
                        l.P3F,
                        h(_({ className: s()(f.queryContainer, { [f.focused]: E }) }, b(n, -1, E)), {
                            onMouseEnter: c,
                            onClick: o,
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
            renderCustomResults: a,
        } = this.props;
        if (e) return r();
        if (0 === t) return n();
        if (null != i) return Array.from({ length: t }).map((e, t) => i(t));
        if (null != a) return a();
        throw Error("SearchResultsPopout.renderResults: Flow should never allow this...");
    }
    render() {
        let { query: e, focusedIndex: t, navId: n } = this.props,
            r = "" === e.trim();
        return (0, i.jsxs)(l.u2D, {
            className: f.container,
            onMouseDown: E,
            role: "listbox",
            id: n,
            tabIndex: -1,
            "aria-activedescendant": "".concat(n, "-").concat(t),
            children: [this.renderQuery(r), this.renderSearchInSelectedChannelAutocomplete(), this.renderResults(r)],
        });
    }
    constructor(...e) {
        super(...e),
            p(this, "renderSearchInSelectedChannelAutocomplete", () => {
                let {
                    navId: e,
                    channel: t,
                    showSearchInSelectedChannel: n,
                    focusedIndex: r,
                    onSelectSearchInSelectedChannel: a,
                } = this.props;
                if (!n || null == t) return null;
                let o = -1 === r,
                    s = (0, c.X3)(t),
                    p = (0, i.jsx)(u.ZP, {
                        channel: t,
                        text: d.intl.formatToPlainString(d.t.LDpotA, { guildName: s }),
                        channelContainerClassName: f.channelContainer,
                        textContainerClassName: f.searchResultNameContainer,
                    });
                return (0, i.jsx)(
                    l.P3F,
                    h(_({}, b(e, -1, o)), {
                        className: f.inChannelOptionContainer,
                        onClick: a,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "interactive-text-default",
                            className: f.inChannelOption,
                            children: d.intl.format(d.t.LDpotA, { guildName: p }),
                        }),
                    }),
                );
            });
    }
}
p(y, "defaultProps", {
    renderInitialState: () => null,
    hideQuery: !1,
});
let O = y;
