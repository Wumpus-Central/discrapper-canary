r.d(t, { A: () => z });
var s = r(627968),
    n = r(64700),
    l = r(503698),
    i = r.n(l),
    a = r(17928),
    o = r(534514),
    u = r(892547),
    d = r(939249),
    c = r(477155),
    h = r(228366),
    m = r(497685),
    p = r(235986),
    f = r(151271),
    g = r(821102),
    I = r(996566),
    E = r(291147),
    R = r(703244),
    _ = r(735438),
    y = r.n(_),
    S = r(803805),
    C = r(661531),
    A = r(27232),
    v = r(555704),
    F = r(92008),
    w = r(25277),
    x = r(583613),
    G = r(327143),
    N = r(615300),
    T = r(404605);
let D = [C.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, C.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class P extends n.PureComponent {
    state = { backgroundColor: y().sample(D) };
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t },
        } = this;
        return (0, s.jsx)("div", { style: { height: e, backgroundColor: t }, className: T.nX });
    }
}
class j extends n.Component {
    static defaultProps = { direction: -1 };
    constructor(e) {
        super(e);
        const t = Array(10)
            .fill(null)
            .map(() => y().random(40, 150));
        this.state = { blocks: t, height: 2 * t.reduce((e, t) => e + t + 12, 12), translateY: new N.A.Value(0) };
    }
    componentDidMount() {
        this.animateSlide();
    }
    animateSlide = () => {
        let {
            props: { direction: e },
            state: { translateY: t, height: r },
        } = this;
        t.setValue(e > 0 ? 0 : -r / 2 + 12),
            N.A.timing(t, { toValue: e > 0 ? -r / 2 + 12 : 0, duration: 800, easing: N.A.Easing.linear }).start(
                this.animateSlide,
            );
    };
    getAnimatedStyle() {
        let {
            props: { columns: e },
            state: { translateY: t },
        } = this;
        return {
            width: `${100 / e}%`,
            transform: [{ translateY: t.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] }) }],
        };
    }
    render() {
        let { blocks: e } = this.state;
        return (0, s.jsxs)(N.A.div, {
            className: T.fi,
            style: this.getAnimatedStyle(),
            children: [
                e.map((e, t) => (0, s.jsx)(P, { height: e }, t)),
                e.map((e, t) => (0, s.jsx)(P, { height: e }, `alt${t}`)),
            ],
        });
    }
}
let k = (e) => {
    let { columns: t } = e;
    return (0, s.jsx)("div", {
        className: T.fi,
        style: { width: `${100 / t}%` },
        children: [, , , ,].fill(null).map((e, t) => (0, s.jsx)("div", { className: T.c8 }, t)),
    });
};
class L extends n.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, s.jsx)("div", {
            className: T.kL,
            children: Array(e)
                .fill(null)
                .map((r, s) => t(e, s)),
        });
    }
}
var b = r(285961),
    U = r(652215),
    M = r(985018),
    W = r(736212);
let O = (e, t) => (0, s.jsx)(k, { columns: e }, t);
class H extends n.PureComponent {
    _masonryRef = n.createRef();
    state = {
        favoritesTile: (function (e) {
            let t = y().sample(y().values(e));
            return {
                type: U.dD.FAVORITES,
                name: M.intl.string(M.t.y3LQCG),
                icon: A.G,
                src: null != t ? t.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                format: t?.format ?? S.TL.IMAGE,
            };
        })(this.props.favorites),
        selectedIndex: { column: 0, row: 0 },
        focusedId: null,
    };
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, m.k8)();
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let r = t.getCoordsMap()[e];
        null != r &&
            (t.scrollIntoViewRect({ start: r.top - 10, end: r.top + r.height + 10 }), this.setState({ focusedId: e }));
    };
    handleSelect = (e) => {
        let { onSelectItem: t } = this.props,
            r = this.getData().find((t) => t.name === e);
        null != r && null != t && t(r.type, r.name);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let r = this.getData()[t];
        return null != r ? r.name : null;
    };
    memoizedData = (0, x.L_)(function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r ? [...t] : [e, ...t];
    });
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: r } = e;
        return (0, s.jsxs)(n.Fragment, {
            children: [
                (0, s.jsx)("div", { className: r === U.dD.FAVORITES ? W.H7 : W.FP }),
                (0, s.jsxs)("div", {
                    className: W.O1,
                    children: [
                        r === U.dD.TRENDING_GIFS ? (0, s.jsx)(v.U, { className: W.Yl, color: "currentColor" }) : null,
                        (0, s.jsx)("span", { className: W.yb, children: t }),
                    ],
                }),
            ],
        });
    }
    renderItem = (e, t, r, n) => {
        if (e > 0) return null;
        let l = this.getData()[t];
        if (null == l) return;
        let { onSelectItem: i, imagePool: a, videoPool: o } = this.props,
            { focusedId: u } = this.state;
        return (0, s.jsx)(
            b.uG,
            {
                format: l.format,
                color: C.A.unsafe_rawColors.PRIMARY_800.css,
                src: l.src,
                item: l,
                index: t,
                coords: r,
                onClick: () => i(l.type, l.name),
                renderExtras: this.renderCategoryExtras,
                focused: l.name === u,
                imagePool: a,
                videoPool: o,
            },
            n,
        );
    };
    renderContent = (e, t, r) => {
        let { className: n, trendingCategories: l } = this.props;
        return 0 === l.length
            ? (0, s.jsx)(L, { columns: e, width: t, renderColumn: O })
            : (0, s.jsx)(F.f, {
                  ref: this._masonryRef,
                  fade: !0,
                  className: i()(W.kL, n),
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
        return (0, s.jsx)(w.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, s.jsx)(G.A, { desiredItemWidth: 200, maxColumns: 6, children: this.renderContent }),
        });
    }
}
function Q(e) {
    let t = (0, a.bG)([g.A], () => g.A.getTrendingCategories()),
        r = (0, I.rM)(),
        n = (0, b.d5)();
    return (0, s.jsx)(H, { ...e, ...n, trendingCategories: t, favorites: r });
}
var K = r(732139),
    V = r(650583),
    q = r(874926);
let B = (e) => e.stopPropagation();
class Y extends n.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        m.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, U.dD.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, U.dD.SEARCH);
    }
    componentWillUnmount() {
        h.h.wait(() => m.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, r) {
        m.$P(e, t, r),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== U.dD.SEARCH && this.setState({ resultType: U.dD.SEARCH });
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== V.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        (0, f.Ri)(e), this.search(e, U.dD.SEARCH);
    };
    handleSelectSuggestion = (e) => {
        (0, f.Ri)(""), m.Se(), this.search(e, U.dD.SEARCH_SUGGESTION, !0);
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        (0, f.Ri)(""), m.Se(), this.setState({ resultType: null }), null != e && e.focus();
    };
    handleSelectGIF = (e) => {
        let { onSelectGIF: t } = this.props;
        null != t && t(e);
    };
    handleSelectItem = (e, t) => {
        let { current: r } = this.props.searchBarRef;
        switch (e) {
            case U.dD.TRENDING_CATEGORY:
                m.$P(t, U.dD.TRENDING_CATEGORY, !0), null != r && r.focus();
                break;
            case U.dD.TRENDING_GIFS:
                m.Z4();
        }
        this.setState({ resultType: e });
    };
    renderHeaderContent() {
        let { query: e, headingColor: t } = this.props,
            { resultType: r } = this.state;
        switch (r) {
            case U.dD.FAVORITES:
                return (0, s.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: q.wL,
                    children: M.intl.string(M.t.y3LQCG),
                });
            case U.dD.TRENDING_GIFS:
                return (0, s.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: q.wL,
                    children: M.intl.string(M.t.H6zNFz),
                });
            default: {
                let t = (0, R.cf)(),
                    r = (0, E.w)(t);
                return (0, s.jsx)(u.I, {
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: r,
                    "aria-label": r,
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
                (t = (0, s.jsx)(d.D, {
                    onClick: this.handleClearQuery,
                    className: q.Gv,
                    "aria-label": M.intl.string(M.t["13/7kX"]),
                    children: (0, s.jsx)(c.r, { size: "md", color: "currentColor" }),
                })),
            (0, s.jsxs)(p.A, { align: p.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: r,
                query: n,
                favorites: l,
                searchOffset: i,
                searchLimit: a,
                searchTotalResults: o,
                suggestions: u,
                hideFavorites: d,
            } = this.props,
            { resultType: c } = this.state;
        return null == c
            ? (0, s.jsx)(Q, { className: e, hideFavoritesTile: d, onSelectItem: this.handleSelectItem })
            : (0, s.jsx)(b.Ay, {
                  className: e,
                  data: c === U.dD.FAVORITES ? l : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: c,
                  resultQuery: r,
                  query: n,
                  searchOffset: i,
                  searchLimit: a,
                  searchTotalResults: o,
                  suggestions: u,
                  onSelectSuggestion: this.handleSelectSuggestion,
                  selectedGIF: this.props.selectedGIF,
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, s.jsxs)("div", {
            id: K.ni,
            role: "tabpanel",
            "aria-labelledby": K.g9,
            className: i()(q.kL, e),
            onClick: B,
            ref: t,
            children: [
                (0, s.jsx)("div", { className: i()(q.wx, this.props.headerClassName), children: this.renderHeader() }),
                (0, s.jsx)("div", { className: q.Qs, children: this.renderContent() }),
            ],
        });
    }
}
let z = n.forwardRef((e, t) => {
    n.useEffect(() => {
        e.persistSearch || ((0, f.Ri)(e.initialQuery ?? ""), m.$P(e.initialQuery ?? "", U.dD.SEARCH));
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: r,
            resultQuery: l,
            resultItems: i,
            suggestions: o,
        } = (0, a.cf)([g.A], () => ({
            query: g.A.getQuery(),
            resultQuery: g.A.getResultQuery(),
            resultItems: g.A.getResultItems(),
            suggestions: g.A.getSuggestions(),
        })),
        u = (0, f.RQ)((e) => e.searchQuery),
        d = (0, I.IE)(),
        c = n.useRef(null);
    return (0, s.jsx)(Y, {
        ...e,
        forwardedRef: t,
        query: null != r && "" !== r ? r : u,
        resultQuery: l,
        resultItems: i,
        suggestions: o,
        favorites: d,
        searchOffset: 0,
        searchTotalResults: g.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: c,
        selectedGIF: e.selectedGIF,
    });
});
