var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(232713),
    c = r(442837),
    d = r(481060),
    f = r(570140),
    p = r(68405),
    h = r(600164),
    _ = r(28546),
    m = r(656733),
    g = r(985375),
    E = r(653235),
    v = r(215016),
    y = r(981631),
    b = r(149203),
    I = r(388032),
    T = r(489489);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let A = (e) => e.stopPropagation();
class C extends o.PureComponent {
    componentDidMount() {
        p.gK(), document.addEventListener('keydown', this.backToFrontPage), '' !== this.props.query && this.search(this.props.query, y.wI2.SEARCH);
    }
    componentWillUnmount() {
        f.Z.wait(() => p.v2()), document.removeEventListener('keydown', this.backToFrontPage);
    }
    componentDidUpdate() {
        this.state.resultType !== y.wI2.SEARCH && '' !== this.props.query && this.search(this.props.query, y.wI2.SEARCH);
    }
    search(e, n, r) {
        p.yC(e, n, r), '' === e ? this.setState({ resultType: null }) : this.state.resultType !== y.wI2.SEARCH && this.setState({ resultType: y.wI2.SEARCH });
    }
    renderHeaderContent() {
        let { query: e } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case y.wI2.FAVORITES:
                return (0, a.jsx)(d.FormTitle, {
                    tag: 'h5',
                    className: T.searchHeader,
                    children: I.intl.string(I.t.y3LQCA)
                });
            case y.wI2.TRENDING_GIFS:
                return (0, a.jsx)(d.FormTitle, {
                    tag: 'h5',
                    className: T.searchHeader,
                    children: I.intl.string(I.t.H6zNFx)
                });
            default:
                return (0, a.jsx)(d.SearchBar, {
                    className: T.searchBar,
                    size: d.SearchBar.Sizes.MEDIUM,
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: I.intl.string(I.t.TnYqkZ),
                    'aria-label': I.intl.string(I.t.TnYqkZ),
                    ref: this.props.searchBarRef,
                    autoFocus: !0
                });
        }
    }
    renderHeader() {
        let { resultType: e } = this.state,
            n = null;
        return (
            null != e &&
                (n = (0, a.jsx)(d.Clickable, {
                    onClick: this.handleClearQuery,
                    className: T.backButton,
                    'aria-label': I.intl.string(I.t['13/7kZ']),
                    children: (0, a.jsx)(d.ArrowSmallLeftIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })),
            (0, a.jsxs)(h.Z, {
                align: h.Z.Align.CENTER,
                children: [n, this.renderHeaderContent()]
            })
        );
    }
    renderContent() {
        let { contentClassName: e, resultItems: n, resultQuery: r, query: i, favorites: o, searchOffset: s, searchLimit: l, searchTotalResults: u, suggestions: c, hideFavorites: d } = this.props,
            { resultType: f } = this.state;
        return null == f
            ? (0, a.jsx)(E.Z, {
                  className: e,
                  hideFavoritesTile: d,
                  onSelectItem: this.handleSelectItem
              })
            : (0, a.jsx)(v.ZP, {
                  className: e,
                  data: f === y.wI2.FAVORITES ? o : n,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: f,
                  resultQuery: r,
                  query: i,
                  searchOffset: s,
                  searchLimit: l,
                  searchTotalResults: u,
                  suggestions: c,
                  onSelectSuggestion: this.handleSelectSuggestion
              });
    }
    render() {
        let { className: e, forwardedRef: n } = this.props;
        return (0, a.jsxs)('div', {
            id: b.vO,
            role: 'tabpanel',
            'aria-labelledby': b._3,
            className: l()(T.container, e),
            onClick: A,
            ref: n,
            children: [
                (0, a.jsx)('div', {
                    className: T.header,
                    children: this.renderHeader()
                }),
                (0, a.jsx)('div', {
                    className: T.content,
                    children: this.renderContent()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', { resultType: null }),
            S(this, 'backToFrontPage', (e) => {
                let { resultType: n } = this.state;
                e.keyCode === y.yXg.ESCAPE && null != n && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery());
            }),
            S(this, 'handleChangeQuery', (e) => {
                (0, _.ql)(e), this.search(e, y.wI2.SEARCH);
            }),
            S(this, 'handleSelectSuggestion', (e) => {
                (0, _.ql)(''), p.v2(), this.search(e, y.wI2.SEARCH_SUGGESTION, !0);
            }),
            S(this, 'handleClearQuery', () => {
                let { current: e } = this.props.searchBarRef;
                (0, _.ql)(''), p.v2(), this.setState({ resultType: null }), null != e && e.focus();
            }),
            S(this, 'handleSelectGIF', (e) => {
                let { onSelectGIF: n } = this.props;
                null != n && n(e);
            }),
            S(this, 'handleSelectItem', (e, n) => {
                let { current: r } = this.props.searchBarRef;
                switch (e) {
                    case y.wI2.TRENDING_CATEGORY:
                        p.yC(n, y.wI2.TRENDING_CATEGORY, !0), null != r && r.focus();
                        break;
                    case y.wI2.TRENDING_GIFS:
                        p.UU();
                }
                this.setState({ resultType: e });
            });
    }
}
n.Z = o.forwardRef((e, n) => {
    !e.persistSearch && (0, _.ql)('');
    let {
            query: r,
            resultQuery: i,
            resultItems: s,
            suggestions: l
        } = (0, c.cj)([m.Z], () => ({
            query: m.Z.getQuery(),
            resultQuery: m.Z.getResultQuery(),
            resultItems: m.Z.getResultItems(),
            suggestions: m.Z.getSuggestions()
        })),
        { expressionPickerQuery: d, isSearchSuggestion: f } = (0, _.Iu)(
            (e) => ({
                expressionPickerQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            u.X
        ),
        p = null != d && '' !== d ? d : r,
        h = (0, g.HI)(),
        E = o.createRef();
    return (
        o.useLayoutEffect(() => {
            if (f) {
                var e;
                null === (e = E.current) || void 0 === e || e.focus();
            }
        }, [f, E]),
        (0, a.jsx)(C, {
            ...e,
            forwardedRef: n,
            query: p,
            resultQuery: i,
            resultItems: s,
            suggestions: l,
            favorites: h,
            searchOffset: 0,
            searchTotalResults: m.Z.getResultItems().length,
            searchLimit: null,
            searchBarRef: E
        })
    );
});
