s.d(t, { A: () => Q });
var r = s(477900),
    n = s(582128),
    l = s(503698),
    i = s.n(l),
    a = s(855986),
    o = s(534514),
    h = s(683438),
    u = s(939249),
    d = s(477155),
    c = s(497685),
    m = s(235986),
    p = s(151271),
    g = s(821102),
    f = s(996566),
    R = s(336807),
    y = s(435558),
    I = s.n(y),
    C = s(803805),
    x = s(646514),
    E = s(27232),
    _ = s(555704),
    v = s(297778),
    A = s(25277),
    S = s(583613),
    w = s(327143),
    N = (s(615300), s(664668));
(x.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, x.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css);
function F(e) {
    let { columns: t } = e;
    return (0, r.jsx)("div", {
        className: N.fi,
        style: { width: `${100 / t}%` },
        children: [, , , ,].fill(null).map((e, t) => (0, r.jsx)("div", { className: N.c8 }, t)),
    });
}
(n.PureComponent, n.Component);
class D extends n.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, r.jsx)("div", {
            className: N.kL,
            children: Array(e)
                .fill(null)
                .map((s, r) => t(e, r)),
        });
    }
}
var T = s(884037),
    j = s(652215),
    G = s(792996),
    P = s(682863);
function M(e, t) {
    return (0, r.jsx)(F, { columns: e }, t);
}
class k extends n.PureComponent {
    _masonryRef = n.createRef();
    state = {
        favoritesTile: (function (e) {
            let t = I().sample(I().values(e));
            return {
                type: j.dD.FAVORITES,
                name: G.intl.string(G.t.y3LQCG),
                icon: E.StarIcon,
                src: null != t ? t.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                format: t?.format ?? C.TL.IMAGE,
            };
        })(this.props.favorites),
        selectedIndex: { column: 0, row: 0 },
        focusedId: null,
    };
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, c.k8)();
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let s = t.getCoordsMap()[e];
        null != s &&
            (t.scrollIntoViewRect({ start: s.top - 10, end: s.top + s.height + 10 }), this.setState({ focusedId: e }));
    };
    handleSelect = (e) => {
        let { onSelectItem: t } = this.props,
            s = this.getData().find((t) => t.name === e);
        null != s && null != t && t(s.type, s.name);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let s = this.getData()[t];
        return null != s ? s.name : null;
    };
    memoizedData = (0, S.L_)(function (e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return s ? [...t] : [e, ...t];
    });
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: s } = e;
        return (0, r.jsxs)(n.Fragment, {
            children: [
                (0, r.jsx)("div", { className: s === j.dD.FAVORITES ? P.H7 : P.FP }),
                (0, r.jsxs)("div", {
                    className: P.O1,
                    children: [
                        s === j.dD.TRENDING_GIFS
                            ? (0, r.jsx)(_.AnalyticsIcon, { className: P.Yl, color: "currentColor" })
                            : null,
                        (0, r.jsx)("span", { className: P.yb, children: t }),
                    ],
                }),
            ],
        });
    }
    renderItem = (e, t, s, n) => {
        if (e > 0) return null;
        let l = this.getData()[t];
        if (null == l) return;
        let { onSelectItem: i, imagePool: a, videoPool: o } = this.props,
            { focusedId: h } = this.state;
        return (0, r.jsx)(
            T.uG,
            {
                format: l.format,
                color: x.A.unsafe_rawColors.PRIMARY_800.css,
                src: l.src,
                item: l,
                index: t,
                coords: s,
                onClick: () => i(l.type, l.name),
                renderExtras: this.renderCategoryExtras,
                focused: l.name === h,
                imagePool: a,
                videoPool: o,
                "aria-label": l.name,
            },
            n,
        );
    };
    renderContent = (e, t, s) => {
        let { className: n, trendingCategories: l } = this.props;
        return 0 === l.length
            ? (0, r.jsx)(D, { columns: e, width: t, renderColumn: M })
            : (0, r.jsx)(v.f, {
                  ref: this._masonryRef,
                  fade: !0,
                  className: i()(P.kL, n),
                  itemGutter: 12,
                  getItemKey: this.getItemKey,
                  columns: e,
                  getItemHeight: () => 110,
                  renderItem: this.renderItem,
                  sections: [this.getData().length],
                  chunkSize: 50,
              });
    };
    getItemGrid = () => {
        let { current: e } = this._masonryRef;
        return null != e ? e.getItemGrid() : [];
    };
    getCoordsMap = () => {
        let { current: e } = this._masonryRef;
        return null != e ? e.getCoordsMap() : {};
    };
    render() {
        return (0, r.jsx)(A.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, r.jsx)(w.A, { desiredItemWidth: 200, maxColumns: 6, children: this.renderContent }),
        });
    }
}
function L(e) {
    let t = (0, a.bG)([g.A], () => g.A.getTrendingCategories()),
        s = (0, f.rM)(),
        n = (0, T.d5)();
    return (0, r.jsx)(k, { ...e, ...n, trendingCategories: t, favorites: s });
}
var O = s(732139),
    b = s(650583),
    H = s(986531);
function W(e) {
    return e.stopPropagation();
}
class U extends n.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        (c.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, j.dD.SEARCH));
    }
    componentDidUpdate(e) {
        ("" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, j.dD.SEARCH),
            "" !== e.query &&
                "" === this.props.query &&
                this.state.resultType === j.dD.SEARCH &&
                this.setState({ resultType: null }));
    }
    componentWillUnmount() {
        (c.Se(), document.removeEventListener("keydown", this.backToFrontPage));
    }
    search(e, t, s) {
        (c.$P(e, t, s),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== j.dD.SEARCH && this.setState({ resultType: j.dD.SEARCH }));
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== b.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        ((0, p.Ri)(e), this.search(e, j.dD.SEARCH));
    };
    handleSelectSuggestion = (e) => {
        ((0, p.Ri)(""), c.Se(), this.search(e, j.dD.SEARCH_SUGGESTION, !0));
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        ((0, p.Ri)(""), c.Se(), this.setState({ resultType: null }), null != e && e.focus());
    };
    handleSelectGIF = (e, t) => {
        let { onSelectGIF: s } = this.props;
        null != s && s(e, t);
    };
    handleSelectItem = (e, t) => {
        switch (e) {
            case j.dD.TRENDING_CATEGORY:
                c.$P(t, j.dD.TRENDING_CATEGORY, !0);
                break;
            case j.dD.TRENDING_GIFS:
                c.Z4();
        }
        this.setState({ resultType: e }, () => {
            if (e === j.dD.TRENDING_CATEGORY) {
                let { current: e } = this.props.searchBarRef;
                null != e && e.focus();
            }
        });
    };
    renderHeaderContent() {
        let { query: e, favorites: t, headingColor: s } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case j.dD.FAVORITES:
                return (0, r.jsxs)("div", {
                    className: H.XK,
                    children: [
                        (0, r.jsx)(o.D, {
                            variant: "heading-sm/semibold",
                            color: s,
                            className: H.wL,
                            children: G.intl.string(G.t.y3LQCG),
                        }),
                        t.length > 0 &&
                            (0, r.jsx)(h.I, {
                                query: e,
                                onChange: p.Ri,
                                onClear: () => (0, p.Ri)(""),
                                placeholder: G.intl.string(G.t["+Kakw+"]),
                                "aria-label": G.intl.string(G.t["+Kakw+"]),
                                ref: this.props.searchBarRef,
                                autoFocus: !0,
                            }),
                    ],
                });
            case j.dD.TRENDING_GIFS:
                return (0, r.jsx)(o.D, {
                    variant: "heading-sm/semibold",
                    color: s,
                    className: H.wL,
                    children: G.intl.string(G.t.H6zNFz),
                });
            default: {
                let t = (0, R.w)();
                return (0, r.jsx)(h.I, {
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: t,
                    "aria-label": t,
                    ref: this.props.searchBarRef,
                    autoFocus: !0,
                });
            }
        }
    }
    renderHeader() {
        let { resultType: e } = this.state,
            t = null;
        return (
            null != e &&
                (t = (0, r.jsx)(u.D, {
                    onClick: this.handleClearQuery,
                    className: H.Gv,
                    "aria-label": G.intl.string(G.t["13/7kX"]),
                    children: (0, r.jsx)(d.ArrowSmallLeftIcon, { size: "md", color: "currentColor" }),
                })),
            (0, r.jsxs)(m.A, { align: m.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: s,
                query: n,
                favorites: l,
                searchOffset: i,
                searchLimit: a,
                searchTotalResults: o,
                suggestions: h,
                hideFavorites: u,
            } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, r.jsx)(L, { className: e, hideFavoritesTile: u, onSelectItem: this.handleSelectItem })
            : (0, r.jsx)(T.Ay, {
                  className: e,
                  data:
                      d === j.dD.FAVORITES
                          ? (function (e, t) {
                                if ("" === t) return e;
                                let s = t.toLowerCase().replace(/[-_ ]/g, "");
                                return e.filter((e) => {
                                    let { url: t } = e;
                                    return t.toLowerCase().replace(/[-_]/g, "").includes(s);
                                });
                            })(l, n)
                          : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: s,
                  query: n,
                  searchOffset: i,
                  searchLimit: a,
                  searchTotalResults: o,
                  suggestions: h,
                  onSelectSuggestion: this.handleSelectSuggestion,
                  selectedGIF: this.props.selectedGIF,
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, r.jsxs)("div", {
            id: O.ni,
            role: "tabpanel",
            "aria-labelledby": O.g9,
            className: i()(H.kL, e),
            onClick: W,
            ref: t,
            children: [
                (0, r.jsx)("div", { className: i()(H.wx, this.props.headerClassName), children: this.renderHeader() }),
                (0, r.jsx)("div", { className: H.Qs, children: this.renderContent() }),
            ],
        });
    }
}
function Q(e) {
    let { ref: t, ...s } = e;
    n.useEffect(
        () => (
            s.persistSearch || ((0, p.Ri)(s.initialQuery ?? ""), c.$P(s.initialQuery ?? "", j.dD.SEARCH)),
            () => {
                s.persistSearch || (0, p.Ri)("");
            }
        ),
        [s.persistSearch, s.initialQuery],
    );
    let {
            query: l,
            resultQuery: i,
            resultItems: o,
            suggestions: h,
        } = (0, a.cf)([g.A], () => ({
            query: g.A.getQuery(),
            resultQuery: g.A.getResultQuery(),
            resultItems: g.A.getResultItems(),
            suggestions: g.A.getSuggestions(),
        })),
        u = (0, p.RQ)((e) => e.searchQuery),
        d = (0, f.IE)(),
        m = n.useRef(null);
    return (0, r.jsx)(U, {
        ...s,
        forwardedRef: t,
        query: null != l && "" !== l ? l : u,
        resultQuery: i,
        resultItems: o,
        suggestions: h,
        favorites: d,
        searchOffset: 0,
        searchTotalResults: g.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: m,
        selectedGIF: s.selectedGIF,
    });
}
