"use strict";
n.d(t, { A: () => q });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(534514),
    u = n(892547),
    c = n(939249),
    d = n(477155),
    _ = n(228366),
    f = n(497685),
    h = n(235986),
    p = n(151271),
    E = n(821102),
    m = n(996566),
    g = n(291147),
    A = n(703244),
    I = n(735438),
    T = n.n(I),
    S = n(803805),
    N = n(661531),
    y = n(27232),
    C = n(555704),
    v = n(92008),
    O = n(25277),
    R = n(583613),
    b = n(327143),
    D = n(615300),
    L = n(404605);
let w = [N.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, N.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class M extends r.PureComponent {
    state = { backgroundColor: T().sample(w) };
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t },
        } = this;
        return (0, i.jsx)("div", { style: { height: e, backgroundColor: t }, className: L.nX });
    }
}
class P extends r.Component {
    static defaultProps = { direction: -1 };
    constructor(e) {
        super(e);
        const t = Array(10)
            .fill(null)
            .map(() => T().random(40, 150));
        this.state = { blocks: t, height: 2 * t.reduce((e, t) => e + t + 12, 12), translateY: new D.A.Value(0) };
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
            D.A.timing(t, { toValue: e > 0 ? -n / 2 + 12 : 0, duration: 800, easing: D.A.Easing.linear }).start(
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
        return (0, i.jsxs)(D.A.div, {
            className: L.fi,
            style: this.getAnimatedStyle(),
            children: [
                e.map((e, t) => (0, i.jsx)(M, { height: e }, t)),
                e.map((e, t) => (0, i.jsx)(M, { height: e }, `alt${t}`)),
            ],
        });
    }
}
let x = (e) => {
    let { columns: t } = e;
    return (0, i.jsx)("div", {
        className: L.fi,
        style: { width: `${100 / t}%` },
        children: [, , , ,].fill(null).map((e, t) => (0, i.jsx)("div", { className: L.c8 }, t)),
    });
};
class U extends r.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, i.jsx)("div", {
            className: L.kL,
            children: Array(e)
                .fill(null)
                .map((n, i) => t(e, i)),
        });
    }
}
var k = n(285961),
    G = n(652215),
    F = n(375708),
    V = n(736212);
let B = (e, t) => (0, i.jsx)(x, { columns: e }, t);
class H extends r.PureComponent {
    _masonryRef = r.createRef();
    state = {
        favoritesTile: (function (e) {
            let t = T().sample(T().values(e));
            return {
                type: G.dD.FAVORITES,
                name: F.intl.string(F.t.y3LQCG),
                icon: y.G,
                src: null != t ? t.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                format: t?.format ?? S.TL.IMAGE,
            };
        })(this.props.favorites),
        selectedIndex: { column: 0, row: 0 },
        focusedId: null,
    };
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, f.k8)();
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
    memoizedData = (0, R.L_)(function (e, t) {
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
                (0, i.jsx)("div", { className: n === G.dD.FAVORITES ? V.H7 : V.FP }),
                (0, i.jsxs)("div", {
                    className: V.O1,
                    children: [
                        n === G.dD.TRENDING_GIFS ? (0, i.jsx)(C.U, { className: V.Yl, color: "currentColor" }) : null,
                        (0, i.jsx)("span", { className: V.yb, children: t }),
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
            { focusedId: u } = this.state;
        return (0, i.jsx)(
            k.uG,
            {
                format: s.format,
                color: N.A.unsafe_rawColors.PRIMARY_800.css,
                src: s.src,
                item: s,
                index: t,
                coords: n,
                onClick: () => a(s.type, s.name),
                renderExtras: this.renderCategoryExtras,
                focused: s.name === u,
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
            : (0, i.jsx)(v.f, {
                  ref: this._masonryRef,
                  fade: !0,
                  className: a()(V.kL, r),
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
        return (0, i.jsx)(O.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, i.jsx)(b.A, { desiredItemWidth: 200, maxColumns: 6, children: this.renderContent }),
        });
    }
}
function j(e) {
    let t = (0, o.bG)([E.A], () => E.A.getTrendingCategories()),
        n = (0, m.rM)(),
        r = (0, k.d5)();
    return (0, i.jsx)(H, { ...e, ...r, trendingCategories: t, favorites: n });
}
var Y = n(732139),
    W = n(650583),
    K = n(874926);
let z = (e) => e.stopPropagation();
class $ extends r.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        f.V$(),
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
        _.h.wait(() => f.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, n) {
        f.$P(e, t, n),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== G.dD.SEARCH && this.setState({ resultType: G.dD.SEARCH });
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== W.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        (0, p.Ri)(e), this.search(e, G.dD.SEARCH);
    };
    handleSelectSuggestion = (e) => {
        (0, p.Ri)(""), f.Se(), this.search(e, G.dD.SEARCH_SUGGESTION, !0);
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        (0, p.Ri)(""), f.Se(), this.setState({ resultType: null }), null != e && e.focus();
    };
    handleSelectGIF = (e) => {
        let { onSelectGIF: t } = this.props;
        null != t && t(e);
    };
    handleSelectItem = (e, t) => {
        switch (e) {
            case G.dD.TRENDING_CATEGORY:
                f.$P(t, G.dD.TRENDING_CATEGORY, !0);
                break;
            case G.dD.TRENDING_GIFS:
                f.Z4();
        }
        this.setState({ resultType: e }, () => {
            if (e === G.dD.TRENDING_CATEGORY) {
                let { current: e } = this.props.searchBarRef;
                null != e && e.focus();
            }
        });
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
                    children: F.intl.string(F.t.y3LQCG),
                });
            case G.dD.TRENDING_GIFS:
                return (0, i.jsx)(l.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: K.wL,
                    children: F.intl.string(F.t.H6zNFz),
                });
            default: {
                let t = (0, A.cf)(),
                    n = (0, g.w)(t);
                return (0, i.jsx)(u.I, {
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
                    children: (0, i.jsx)(d.r, { size: "md", color: "currentColor" }),
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
                suggestions: u,
                hideFavorites: c,
            } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, i.jsx)(j, { className: e, hideFavoritesTile: c, onSelectItem: this.handleSelectItem })
            : (0, i.jsx)(k.Ay, {
                  className: e,
                  data: d === G.dD.FAVORITES ? s : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: n,
                  query: r,
                  searchOffset: a,
                  searchLimit: o,
                  searchTotalResults: l,
                  suggestions: u,
                  onSelectSuggestion: this.handleSelectSuggestion,
                  selectedGIF: this.props.selectedGIF,
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, i.jsxs)("div", {
            id: Y.ni,
            role: "tabpanel",
            "aria-labelledby": Y.g9,
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
        e.persistSearch || ((0, p.Ri)(e.initialQuery ?? ""), f.$P(e.initialQuery ?? "", G.dD.SEARCH));
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: n,
            resultQuery: s,
            resultItems: a,
            suggestions: l,
        } = (0, o.cf)([E.A], () => ({
            query: E.A.getQuery(),
            resultQuery: E.A.getResultQuery(),
            resultItems: E.A.getResultItems(),
            suggestions: E.A.getSuggestions(),
        })),
        u = (0, p.RQ)((e) => e.searchQuery),
        c = (0, m.IE)(),
        d = r.useRef(null);
    return (0, i.jsx)($, {
        ...e,
        forwardedRef: t,
        query: null != n && "" !== n ? n : u,
        resultQuery: s,
        resultItems: a,
        suggestions: l,
        favorites: c,
        searchOffset: 0,
        searchTotalResults: E.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: d,
        selectedGIF: e.selectedGIF,
    });
});
