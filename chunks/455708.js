n.d(t, { Z: () => N }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(68405),
    d = n(600164),
    f = n(28546),
    p = n(656733),
    _ = n(985375),
    m = n(653235),
    h = n(215016),
    g = n(981631),
    E = n(149203),
    b = n(295907),
    y = n(388032),
    O = n(277170);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => e.stopPropagation();
class A extends i.PureComponent {
    componentDidMount() {
        u.gK(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, g.wI2.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, g.wI2.SEARCH);
    }
    componentWillUnmount() {
        c.Z.wait(() => u.v2()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, n) {
        u.yC(e, t, n),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== g.wI2.SEARCH && this.setState({ resultType: g.wI2.SEARCH });
    }
    renderHeaderContent() {
        let { query: e, headingColor: t } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case g.wI2.FAVORITES:
                return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: O.searchHeader,
                    children: y.intl.string(y.t.y3LQCG),
                });
            case g.wI2.TRENDING_GIFS:
                return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: O.searchHeader,
                    children: y.intl.string(y.t.H6zNFz),
                });
            default:
                return (0, r.jsx)(l.E1j, {
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: y.intl.string(y.t.TnYqke),
                    "aria-label": y.intl.string(y.t.TnYqke),
                    ref: this.props.searchBarRef,
                    autoFocus: !0,
                });
        }
    }
    renderHeader() {
        let { resultType: e } = this.state,
            t = null;
        return (
            null != e &&
                (t = (0, r.jsx)(l.P3F, {
                    onClick: this.handleClearQuery,
                    className: O.backButton,
                    "aria-label": y.intl.string(y.t["13/7kX"]),
                    children: (0, r.jsx)(l.whL, {
                        size: "md",
                        color: "currentColor",
                    }),
                })),
            (0, r.jsxs)(d.Z, {
                align: d.Z.Align.CENTER,
                children: [t, this.renderHeaderContent()],
            })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: n,
                query: i,
                favorites: a,
                searchOffset: o,
                searchLimit: s,
                searchTotalResults: l,
                suggestions: c,
                hideFavorites: u,
            } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, r.jsx)(m.Z, {
                  className: e,
                  hideFavoritesTile: u,
                  onSelectItem: this.handleSelectItem,
              })
            : (0, r.jsx)(h.ZP, {
                  className: e,
                  data: d === g.wI2.FAVORITES ? a : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: n,
                  query: i,
                  searchOffset: o,
                  searchLimit: s,
                  searchTotalResults: l,
                  suggestions: c,
                  onSelectSuggestion: this.handleSelectSuggestion,
                  selectedGIF: this.props.selectedGIF,
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, r.jsxs)("div", {
            id: E.vO,
            role: "tabpanel",
            "aria-labelledby": E._3,
            className: o()(O.container, e),
            onClick: C,
            ref: t,
            children: [
                (0, r.jsx)("div", {
                    className: O.header,
                    children: this.renderHeader(),
                }),
                (0, r.jsx)("div", {
                    className: O.content,
                    children: this.renderContent(),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            v(this, "state", { resultType: null }),
            v(this, "backToFrontPage", (e) => {
                let { resultType: t } = this.state;
                e.key === b.vn.ESCAPE &&
                    null != t &&
                    (e.stopPropagation(), e.preventDefault(), this.handleClearQuery());
            }),
            v(this, "handleChangeQuery", (e) => {
                (0, f.ql)(e), this.search(e, g.wI2.SEARCH);
            }),
            v(this, "handleSelectSuggestion", (e) => {
                (0, f.ql)(""), u.v2(), this.search(e, g.wI2.SEARCH_SUGGESTION, !0);
            }),
            v(this, "handleClearQuery", () => {
                let { current: e } = this.props.searchBarRef;
                (0, f.ql)(""), u.v2(), this.setState({ resultType: null }), null != e && e.focus();
            }),
            v(this, "handleSelectGIF", (e) => {
                let { onSelectGIF: t } = this.props;
                null != t && t(e);
            }),
            v(this, "handleSelectItem", (e, t) => {
                let { current: n } = this.props.searchBarRef;
                switch (e) {
                    case g.wI2.TRENDING_CATEGORY:
                        u.yC(t, g.wI2.TRENDING_CATEGORY, !0), null != n && n.focus();
                        break;
                    case g.wI2.TRENDING_GIFS:
                        u.UU();
                }
                this.setState({ resultType: e });
            });
    }
}
let N = i.forwardRef((e, t) => {
    i.useEffect(() => {
        if (!e.persistSearch) {
            var t;
            (0, f.ql)(null != (t = e.initialQuery) ? t : "");
        }
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: n,
            resultQuery: a,
            resultItems: o,
            suggestions: l,
        } = (0, s.cj)([p.Z], () => ({
            query: p.Z.getQuery(),
            resultQuery: p.Z.getResultQuery(),
            resultItems: p.Z.getResultItems(),
            suggestions: p.Z.getSuggestions(),
        })),
        c = (0, f.Iu)((e) => e.searchQuery),
        u = null != n && "" !== n ? n : c,
        d = (0, _.HI)(),
        m = i.useRef(null);
    return (0, r.jsx)(
        A,
        T(S({}, e), {
            forwardedRef: t,
            query: u,
            resultQuery: a,
            resultItems: o,
            suggestions: l,
            favorites: d,
            searchOffset: 0,
            searchTotalResults: p.Z.getResultItems().length,
            searchLimit: null,
            searchBarRef: m,
            selectedGIF: e.selectedGIF,
        }),
    );
});
