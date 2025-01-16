var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(232713),
    c = r(442837),
    d = r(481060),
    f = r(570140),
    _ = r(68405),
    h = r(600164),
    p = r(28546),
    m = r(656733),
    g = r(985375),
    E = r(653235),
    v = r(215016),
    I = r(981631),
    T = r(149203),
    b = r(388032),
    y = r(489489);
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
class N extends s.PureComponent {
    componentDidMount() {
        _.gK(), document.addEventListener('keydown', this.backToFrontPage), '' !== this.props.query && this.search(this.props.query, I.wI2.SEARCH);
    }
    componentWillUnmount() {
        f.Z.wait(() => _.v2()), document.removeEventListener('keydown', this.backToFrontPage);
    }
    componentDidUpdate() {
        this.state.resultType !== I.wI2.SEARCH && '' !== this.props.query && this.search(this.props.query, I.wI2.SEARCH);
    }
    search(e, n, r) {
        _.yC(e, n, r), '' === e ? this.setState({ resultType: null }) : this.state.resultType !== I.wI2.SEARCH && this.setState({ resultType: I.wI2.SEARCH });
    }
    renderHeaderContent() {
        let { query: e } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case I.wI2.FAVORITES:
                return (0, a.jsx)(d.FormTitle, {
                    tag: 'h5',
                    className: y.searchHeader,
                    children: b.intl.string(b.t.y3LQCA)
                });
            case I.wI2.TRENDING_GIFS:
                return (0, a.jsx)(d.FormTitle, {
                    tag: 'h5',
                    className: y.searchHeader,
                    children: b.intl.string(b.t.H6zNFx)
                });
            default:
                return (0, a.jsx)(d.SearchBar, {
                    className: y.searchBar,
                    size: d.SearchBar.Sizes.MEDIUM,
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: b.intl.string(b.t.TnYqkZ),
                    'aria-label': b.intl.string(b.t.TnYqkZ),
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
                    className: y.backButton,
                    'aria-label': b.intl.string(b.t['13/7kZ']),
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
        let { contentClassName: e, resultItems: n, resultQuery: r, query: i, favorites: s, searchOffset: o, searchLimit: l, searchTotalResults: u, suggestions: c, hideFavorites: d } = this.props,
            { resultType: f } = this.state;
        return null == f
            ? (0, a.jsx)(E.Z, {
                  className: e,
                  hideFavoritesTile: d,
                  onSelectItem: this.handleSelectItem
              })
            : (0, a.jsx)(v.ZP, {
                  className: e,
                  data: f === I.wI2.FAVORITES ? s : n,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: f,
                  resultQuery: r,
                  query: i,
                  searchOffset: o,
                  searchLimit: l,
                  searchTotalResults: u,
                  suggestions: c,
                  onSelectSuggestion: this.handleSelectSuggestion
              });
    }
    render() {
        let { className: e, forwardedRef: n } = this.props;
        return (0, a.jsxs)('div', {
            id: T.vO,
            role: 'tabpanel',
            'aria-labelledby': T._3,
            className: l()(y.container, e),
            onClick: A,
            ref: n,
            children: [
                (0, a.jsx)('div', {
                    className: y.header,
                    children: this.renderHeader()
                }),
                (0, a.jsx)('div', {
                    className: y.content,
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
                e.keyCode === I.yXg.ESCAPE && null != n && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery());
            }),
            S(this, 'handleChangeQuery', (e) => {
                (0, p.ql)(e), this.search(e, I.wI2.SEARCH);
            }),
            S(this, 'handleSelectSuggestion', (e) => {
                (0, p.ql)(''), _.v2(), this.search(e, I.wI2.SEARCH_SUGGESTION, !0);
            }),
            S(this, 'handleClearQuery', () => {
                let { current: e } = this.props.searchBarRef;
                (0, p.ql)(''), _.v2(), this.setState({ resultType: null }), null != e && e.focus();
            }),
            S(this, 'handleSelectGIF', (e) => {
                let { onSelectGIF: n } = this.props;
                null != n && n(e);
            }),
            S(this, 'handleSelectItem', (e, n) => {
                let { current: r } = this.props.searchBarRef;
                switch (e) {
                    case I.wI2.TRENDING_CATEGORY:
                        _.yC(n, I.wI2.TRENDING_CATEGORY, !0), null != r && r.focus();
                        break;
                    case I.wI2.TRENDING_GIFS:
                        _.UU();
                }
                this.setState({ resultType: e });
            });
    }
}
n.Z = s.forwardRef((e, n) => {
    !e.persistSearch && (0, p.ql)('');
    let {
            query: r,
            resultQuery: i,
            resultItems: o,
            suggestions: l
        } = (0, c.cj)([m.Z], () => ({
            query: m.Z.getQuery(),
            resultQuery: m.Z.getResultQuery(),
            resultItems: m.Z.getResultItems(),
            suggestions: m.Z.getSuggestions()
        })),
        { expressionPickerQuery: d, isSearchSuggestion: f } = (0, p.Iu)(
            (e) => ({
                expressionPickerQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            u.X
        ),
        _ = null != d && '' !== d ? d : r,
        h = (0, g.HI)(),
        E = s.createRef();
    return (
        s.useLayoutEffect(() => {
            if (f) {
                var e;
                null === (e = E.current) || void 0 === e || e.focus();
            }
        }, [f, E]),
        (0, a.jsx)(N, {
            ...e,
            forwardedRef: n,
            query: _,
            resultQuery: i,
            resultItems: o,
            suggestions: l,
            favorites: h,
            searchOffset: 0,
            searchTotalResults: m.Z.getResultItems().length,
            searchLimit: null,
            searchBarRef: E
        })
    );
});
