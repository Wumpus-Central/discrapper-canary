"use strict";
n.d(t, { A: () => q });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(534514),
    d = n(892547),
    _ = n(939249),
    u = n(477155),
    c = n(228366),
    E = n(497685),
    h = n(235986),
    m = n(151271),
    f = n(821102),
    g = n(996566),
    p = n(291147),
    A = n(703244),
    I = n(735438),
    T = n.n(I),
    S = n(803805),
    N = n(661531),
    C = n(27232),
    R = n(555704),
    O = n(92008),
    y = n(25277),
    v = n(583613),
    D = n(327143),
    L = n(615300),
    b = n(404605);
let w = [N.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, N.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class P extends r.PureComponent {
    state = { backgroundColor: T().sample(w) };
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t },
        } = this;
        return (0, i.jsx)("div", { style: { height: e, backgroundColor: t }, className: b.nX });
    }
}
class k extends r.Component {
    static defaultProps = { direction: -1 };
    constructor(e) {
        super(e);
        const t = Array(10)
            .fill(null)
            .map(() => T().random(40, 150));
        this.state = { blocks: t, height: 2 * t.reduce((e, t) => e + t + 12, 12), translateY: new L.A.Value(0) };
    }
    componentDidMount() {
        this.animateSlide();
    }
    animateSlide = () => {
        let {
            props: { direction: e },
            state: { translateY: t, height: n },
        } = this;
        t.setValue(e > 0 ? 0 : -n / 2 + 12),
            L.A.timing(t, { toValue: e > 0 ? -n / 2 + 12 : 0, duration: 800, easing: L.A.Easing.linear }).start(
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
        return (0, i.jsxs)(L.A.div, {
            className: b.fi,
            style: this.getAnimatedStyle(),
            children: [
                e.map((e, t) => (0, i.jsx)(P, { height: e }, t)),
                e.map((e, t) => (0, i.jsx)(P, { height: e }, `alt${t}`)),
            ],
        });
    }
}
let M = (e) => {
    let { columns: t } = e;
    return (0, i.jsx)("div", {
        className: b.fi,
        style: { width: `${100 / t}%` },
        children: [, , , ,].fill(null).map((e, t) => (0, i.jsx)("div", { className: b.c8 }, t)),
    });
};
class U extends r.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, i.jsx)("div", {
            className: b.kL,
            children: Array(e)
                .fill(null)
                .map((n, i) => t(e, i)),
        });
    }
}
var x = n(285961),
    G = n(652215),
    V = n(985018),
    F = n(736212);
let B = (e, t) => (0, i.jsx)(M, { columns: e }, t);
class H extends r.PureComponent {
    _masonryRef = r.createRef();
    state = {
        favoritesTile: (function (e) {
            let t = T().sample(T().values(e));
            return {
                type: G.dD.FAVORITES,
                name: V.intl.string(V.t.y3LQCG),
                icon: C.G,
                src: null != t ? t.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                format: t?.format ?? S.TL.IMAGE,
            };
        })(this.props.favorites),
        selectedIndex: { column: 0, row: 0 },
        focusedId: null,
    };
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, E.k8)();
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let n = t.getCoordsMap()[e];
        null != n &&
            (t.scrollIntoViewRect({ start: n.top - 10, end: n.top + n.height + 10 }), this.setState({ focusedId: e }));
    };
    handleSelect = (e) => {
        let { onSelectItem: t } = this.props,
            n = this.getData().find((t) => t.name === e);
        null != n && null != t && t(n.type, n.name);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let n = this.getData()[t];
        return null != n ? n.name : null;
    };
    memoizedData = (0, v.L_)(function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return n ? [...t] : [e, ...t];
    });
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: n } = e;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)("div", { className: n === G.dD.FAVORITES ? F.H7 : F.FP }),
                (0, i.jsxs)("div", {
                    className: F.O1,
                    children: [
                        n === G.dD.TRENDING_GIFS ? (0, i.jsx)(R.U, { className: F.Yl, color: "currentColor" }) : null,
                        (0, i.jsx)("span", { className: F.yb, children: t }),
                    ],
                }),
            ],
        });
    }
    renderItem = (e, t, n, r) => {
        if (e > 0) return null;
        let s = this.getData()[t];
        if (null == s) return;
        let { onSelectItem: a, imagePool: o, videoPool: l } = this.props,
            { focusedId: d } = this.state;
        return (0, i.jsx)(
            x.uG,
            {
                format: s.format,
                color: N.A.unsafe_rawColors.PRIMARY_800.css,
                src: s.src,
                item: s,
                index: t,
                coords: n,
                onClick: () => a(s.type, s.name),
                renderExtras: this.renderCategoryExtras,
                focused: s.name === d,
                imagePool: o,
                videoPool: l,
            },
            r,
        );
    };
    renderContent = (e, t, n) => {
        let { className: r, trendingCategories: s } = this.props;
        return 0 === s.length
            ? (0, i.jsx)(U, { columns: e, width: t, renderColumn: B })
            : (0, i.jsx)(O.f, {
                  ref: this._masonryRef,
                  fade: !0,
                  className: a()(F.kL, r),
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
        return (0, i.jsx)(y.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, i.jsx)(D.A, { desiredItemWidth: 200, maxColumns: 6, children: this.renderContent }),
        });
    }
}
function j(e) {
    let t = (0, o.bG)([f.A], () => f.A.getTrendingCategories()),
        n = (0, g.rM)(),
        r = (0, x.d5)();
    return (0, i.jsx)(H, { ...e, ...r, trendingCategories: t, favorites: n });
}
var W = n(732139),
    Y = n(650583),
    K = n(874926);
let z = (e) => e.stopPropagation();
class $ extends r.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        E.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, G.dD.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, G.dD.SEARCH);
    }
    componentWillUnmount() {
        c.h.wait(() => E.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, n) {
        E.$P(e, t, n),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== G.dD.SEARCH && this.setState({ resultType: G.dD.SEARCH });
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== Y.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        (0, m.Ri)(e), this.search(e, G.dD.SEARCH);
    };
    handleSelectSuggestion = (e) => {
        (0, m.Ri)(""), E.Se(), this.search(e, G.dD.SEARCH_SUGGESTION, !0);
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        (0, m.Ri)(""), E.Se(), this.setState({ resultType: null }), null != e && e.focus();
    };
    handleSelectGIF = (e) => {
        let { onSelectGIF: t } = this.props;
        null != t && t(e);
    };
    handleSelectItem = (e, t) => {
        let { current: n } = this.props.searchBarRef;
        switch (e) {
            case G.dD.TRENDING_CATEGORY:
                E.$P(t, G.dD.TRENDING_CATEGORY, !0), null != n && n.focus();
                break;
            case G.dD.TRENDING_GIFS:
                E.Z4();
        }
        this.setState({ resultType: e });
    };
    renderHeaderContent() {
        let { query: e, headingColor: t } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case G.dD.FAVORITES:
                return (0, i.jsx)(l.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: K.wL,
                    children: V.intl.string(V.t.y3LQCG),
                });
            case G.dD.TRENDING_GIFS:
                return (0, i.jsx)(l.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: K.wL,
                    children: V.intl.string(V.t.H6zNFz),
                });
            default: {
                let t = (0, A.cf)(),
                    n = (0, p.w)(t);
                return (0, i.jsx)(d.I, {
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: n,
                    "aria-label": n,
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
                (t = (0, i.jsx)(_.D, {
                    onClick: this.handleClearQuery,
                    className: K.Gv,
                    "aria-label": V.intl.string(V.t["13/7kX"]),
                    children: (0, i.jsx)(u.r, { size: "md", color: "currentColor" }),
                })),
            (0, i.jsxs)(h.A, { align: h.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: n,
                query: r,
                favorites: s,
                searchOffset: a,
                searchLimit: o,
                searchTotalResults: l,
                suggestions: d,
                hideFavorites: _,
            } = this.props,
            { resultType: u } = this.state;
        return null == u
            ? (0, i.jsx)(j, { className: e, hideFavoritesTile: _, onSelectItem: this.handleSelectItem })
            : (0, i.jsx)(x.Ay, {
                  className: e,
                  data: u === G.dD.FAVORITES ? s : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: u,
                  resultQuery: n,
                  query: r,
                  searchOffset: a,
                  searchLimit: o,
                  searchTotalResults: l,
                  suggestions: d,
                  onSelectSuggestion: this.handleSelectSuggestion,
                  selectedGIF: this.props.selectedGIF,
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, i.jsxs)("div", {
            id: W.ni,
            role: "tabpanel",
            "aria-labelledby": W.g9,
            className: a()(K.kL, e),
            onClick: z,
            ref: t,
            children: [
                (0, i.jsx)("div", { className: a()(K.wx, this.props.headerClassName), children: this.renderHeader() }),
                (0, i.jsx)("div", { className: K.Qs, children: this.renderContent() }),
            ],
        });
    }
}
let q = r.forwardRef((e, t) => {
    r.useEffect(() => {
        e.persistSearch || ((0, m.Ri)(e.initialQuery ?? ""), E.$P(e.initialQuery ?? "", G.dD.SEARCH));
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: n,
            resultQuery: s,
            resultItems: a,
            suggestions: l,
        } = (0, o.cf)([f.A], () => ({
            query: f.A.getQuery(),
            resultQuery: f.A.getResultQuery(),
            resultItems: f.A.getResultItems(),
            suggestions: f.A.getSuggestions(),
        })),
        d = (0, m.RQ)((e) => e.searchQuery),
        _ = (0, g.IE)(),
        u = r.useRef(null);
    return (0, i.jsx)($, {
        ...e,
        forwardedRef: t,
        query: null != n && "" !== n ? n : d,
        resultQuery: s,
        resultItems: a,
        suggestions: l,
        favorites: _,
        searchOffset: 0,
        searchTotalResults: f.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: u,
        selectedGIF: e.selectedGIF,
    });
});
