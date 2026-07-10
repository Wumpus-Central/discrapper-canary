"use strict";
n.d(t, { A: () => q });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(534514),
    d = n(892547),
    c = n(939249),
    u = n(477155),
    _ = n(228366),
    E = n(497685),
    A = n(235986),
    h = n(151271),
    I = n(821102),
    f = n(996566),
    p = n(291147),
    T = n(703244),
    m = n(735438),
    g = n.n(m),
    S = n(803805),
    N = n(661531),
    C = n(27232),
    R = n(555704),
    O = n(92008),
    L = n(25277),
    D = n(583613),
    y = n(327143),
    v = n(615300),
    b = n(404605);
let M = [N.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, N.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class P extends r.PureComponent {
    state = { backgroundColor: g().sample(M) };
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t },
        } = this;
        return (0, i.jsx)("div", { style: { height: e, backgroundColor: t }, className: b.nX });
    }
}
class U extends r.Component {
    static defaultProps = { direction: -1 };
    constructor(e) {
        super(e);
        const t = Array(10)
            .fill(null)
            .map(() => g().random(40, 150));
        this.state = { blocks: t, height: 2 * t.reduce((e, t) => e + t + 12, 12), translateY: new v.A.Value(0) };
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
            v.A.timing(t, { toValue: e > 0 ? -n / 2 + 12 : 0, duration: 800, easing: v.A.Easing.linear }).start(
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
        return (0, i.jsxs)(v.A.div, {
            className: b.fi,
            style: this.getAnimatedStyle(),
            children: [
                e.map((e, t) => (0, i.jsx)(P, { height: e }, t)),
                e.map((e, t) => (0, i.jsx)(P, { height: e }, `alt${t}`)),
            ],
        });
    }
}
function w(e) {
    let { columns: t } = e;
    return (0, i.jsx)("div", {
        className: b.fi,
        style: { width: `${100 / t}%` },
        children: [, , , ,].fill(null).map((e, t) => (0, i.jsx)("div", { className: b.c8 }, t)),
    });
}
class G extends r.PureComponent {
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
    k = n(652215),
    F = n(375708),
    V = n(736212);
function B(e, t) {
    return (0, i.jsx)(w, { columns: e }, t);
}
class H extends r.PureComponent {
    _masonryRef = r.createRef();
    state = {
        favoritesTile: (function (e) {
            let t = g().sample(g().values(e));
            return {
                type: k.dD.FAVORITES,
                name: F.intl.string(F.t.y3LQCG),
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
    memoizedData = (0, D.L_)(function (e, t) {
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
                (0, i.jsx)("div", { className: n === k.dD.FAVORITES ? V.H7 : V.FP }),
                (0, i.jsxs)("div", {
                    className: V.O1,
                    children: [
                        n === k.dD.TRENDING_GIFS ? (0, i.jsx)(R.U, { className: V.Yl, color: "currentColor" }) : null,
                        (0, i.jsx)("span", { className: V.yb, children: t }),
                    ],
                }),
            ],
        });
    }
    renderItem = (e, t, n, r) => {
        if (e > 0) return null;
        let a = this.getData()[t];
        if (null == a) return;
        let { onSelectItem: s, imagePool: l, videoPool: o } = this.props,
            { focusedId: d } = this.state;
        return (0, i.jsx)(
            x.uG,
            {
                format: a.format,
                color: N.A.unsafe_rawColors.PRIMARY_800.css,
                src: a.src,
                item: a,
                index: t,
                coords: n,
                onClick: () => s(a.type, a.name),
                renderExtras: this.renderCategoryExtras,
                focused: a.name === d,
                imagePool: l,
                videoPool: o,
                "aria-label": a.name,
            },
            r,
        );
    };
    renderContent = (e, t, n) => {
        let { className: r, trendingCategories: a } = this.props;
        return 0 === a.length
            ? (0, i.jsx)(G, { columns: e, width: t, renderColumn: B })
            : (0, i.jsx)(O.f, {
                  ref: this._masonryRef,
                  fade: !0,
                  className: s()(V.kL, r),
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
        return (0, i.jsx)(L.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, i.jsx)(y.A, { desiredItemWidth: 200, maxColumns: 6, children: this.renderContent }),
        });
    }
}
function j(e) {
    let t = (0, l.bG)([I.A], () => I.A.getTrendingCategories()),
        n = (0, f.rM)(),
        r = (0, x.d5)();
    return (0, i.jsx)(H, { ...e, ...r, trendingCategories: t, favorites: n });
}
var W = n(732139),
    Y = n(650583),
    K = n(874926);
function $(e) {
    return e.stopPropagation();
}
class z extends r.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        E.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, k.dD.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, k.dD.SEARCH);
    }
    componentWillUnmount() {
        _.h.wait(() => E.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, n) {
        E.$P(e, t, n),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== k.dD.SEARCH && this.setState({ resultType: k.dD.SEARCH });
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== Y.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        (0, h.Ri)(e), this.search(e, k.dD.SEARCH);
    };
    handleSelectSuggestion = (e) => {
        (0, h.Ri)(""), E.Se(), this.search(e, k.dD.SEARCH_SUGGESTION, !0);
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        (0, h.Ri)(""), E.Se(), this.setState({ resultType: null }), null != e && e.focus();
    };
    handleSelectGIF = (e) => {
        let { onSelectGIF: t } = this.props;
        null != t && t(e);
    };
    handleSelectItem = (e, t) => {
        switch (e) {
            case k.dD.TRENDING_CATEGORY:
                E.$P(t, k.dD.TRENDING_CATEGORY, !0);
                break;
            case k.dD.TRENDING_GIFS:
                E.Z4();
        }
        this.setState({ resultType: e }, () => {
            if (e === k.dD.TRENDING_CATEGORY) {
                let { current: e } = this.props.searchBarRef;
                null != e && e.focus();
            }
        });
    };
    renderHeaderContent() {
        let { query: e, headingColor: t } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case k.dD.FAVORITES:
                return (0, i.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: K.wL,
                    children: F.intl.string(F.t.y3LQCG),
                });
            case k.dD.TRENDING_GIFS:
                return (0, i.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: K.wL,
                    children: F.intl.string(F.t.H6zNFz),
                });
            default: {
                let t = (0, T.cf)(),
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
                (t = (0, i.jsx)(c.D, {
                    onClick: this.handleClearQuery,
                    className: K.Gv,
                    "aria-label": F.intl.string(F.t["13/7kX"]),
                    children: (0, i.jsx)(u.r, { size: "md", color: "currentColor" }),
                })),
            (0, i.jsxs)(A.A, { align: A.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: n,
                query: r,
                favorites: a,
                searchOffset: s,
                searchLimit: l,
                searchTotalResults: o,
                suggestions: d,
                hideFavorites: c,
            } = this.props,
            { resultType: u } = this.state;
        return null == u
            ? (0, i.jsx)(j, { className: e, hideFavoritesTile: c, onSelectItem: this.handleSelectItem })
            : (0, i.jsx)(x.Ay, {
                  className: e,
                  data: u === k.dD.FAVORITES ? a : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: u,
                  resultQuery: n,
                  query: r,
                  searchOffset: s,
                  searchLimit: l,
                  searchTotalResults: o,
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
            className: s()(K.kL, e),
            onClick: $,
            ref: t,
            children: [
                (0, i.jsx)("div", { className: s()(K.wx, this.props.headerClassName), children: this.renderHeader() }),
                (0, i.jsx)("div", { className: K.Qs, children: this.renderContent() }),
            ],
        });
    }
}
let q = r.forwardRef((e, t) => {
    r.useEffect(() => {
        e.persistSearch || ((0, h.Ri)(e.initialQuery ?? ""), E.$P(e.initialQuery ?? "", k.dD.SEARCH));
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: n,
            resultQuery: a,
            resultItems: s,
            suggestions: o,
        } = (0, l.cf)([I.A], () => ({
            query: I.A.getQuery(),
            resultQuery: I.A.getResultQuery(),
            resultItems: I.A.getResultItems(),
            suggestions: I.A.getSuggestions(),
        })),
        d = (0, h.RQ)((e) => e.searchQuery),
        c = (0, f.IE)(),
        u = r.useRef(null);
    return (0, i.jsx)(z, {
        ...e,
        forwardedRef: t,
        query: null != n && "" !== n ? n : d,
        resultQuery: a,
        resultItems: s,
        suggestions: o,
        favorites: c,
        searchOffset: 0,
        searchTotalResults: I.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: u,
        selectedGIF: e.selectedGIF,
    });
});
