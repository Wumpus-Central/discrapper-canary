n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(442837),
    u = n(481060),
    c = n(570140),
    d = n(68405),
    f = n(600164),
    _ = n(28546),
    p = n(656733),
    h = n(985375),
    m = n(653235),
    g = n(215016),
    E = n(981631),
    v = n(149203),
    y = n(388032),
    I = n(489489);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = (e) => e.stopPropagation();
class S extends r.PureComponent {
    componentDidMount() {
        d.gK(), document.addEventListener('keydown', this.backToFrontPage), '' !== this.props.query && this.search(this.props.query, E.wI2.SEARCH);
    }
    componentWillUnmount() {
        c.Z.wait(() => d.v2()), document.removeEventListener('keydown', this.backToFrontPage);
    }
    componentDidUpdate() {
        this.state.resultType !== E.wI2.SEARCH && '' !== this.props.query && this.search(this.props.query, E.wI2.SEARCH);
    }
    search(e, t, n) {
        d.yC(e, t, n), '' === e ? this.setState({ resultType: null }) : this.state.resultType !== E.wI2.SEARCH && this.setState({ resultType: E.wI2.SEARCH });
    }
    renderHeaderContent() {
        let { query: e } = this.props,
            { resultType: t } = this.state;
        switch (t) {
            case E.wI2.FAVORITES:
                return (0, i.jsx)(u.vwX, {
                    tag: 'h5',
                    className: I.searchHeader,
                    children: y.intl.string(y.t.y3LQCA)
                });
            case E.wI2.TRENDING_GIFS:
                return (0, i.jsx)(u.vwX, {
                    tag: 'h5',
                    className: I.searchHeader,
                    children: y.intl.string(y.t.H6zNFx)
                });
            default:
                return (0, i.jsx)(u.E1j, {
                    className: I.searchBar,
                    size: u.E1j.Sizes.MEDIUM,
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: y.intl.string(y.t.TnYqkZ),
                    'aria-label': y.intl.string(y.t.TnYqkZ),
                    ref: this.props.searchBarRef,
                    autoFocus: !0
                });
        }
    }
    renderHeader() {
        let { resultType: e } = this.state,
            t = null;
        return (
            null != e &&
                (t = (0, i.jsx)(u.P3F, {
                    onClick: this.handleClearQuery,
                    className: I.backButton,
                    'aria-label': y.intl.string(y.t['13/7kZ']),
                    children: (0, i.jsx)(u.whL, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })),
            (0, i.jsxs)(f.Z, {
                align: f.Z.Align.CENTER,
                children: [t, this.renderHeaderContent()]
            })
        );
    }
    renderContent() {
        let { contentClassName: e, resultItems: t, resultQuery: n, query: r, favorites: a, searchOffset: s, searchLimit: o, searchTotalResults: l, suggestions: u, hideFavorites: c } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, i.jsx)(m.Z, {
                  className: e,
                  hideFavoritesTile: c,
                  onSelectItem: this.handleSelectItem
              })
            : (0, i.jsx)(g.ZP, {
                  className: e,
                  data: d === E.wI2.FAVORITES ? a : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: n,
                  query: r,
                  searchOffset: s,
                  searchLimit: o,
                  searchTotalResults: l,
                  suggestions: u,
                  onSelectSuggestion: this.handleSelectSuggestion
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, i.jsxs)('div', {
            id: v.vO,
            role: 'tabpanel',
            'aria-labelledby': v._3,
            className: s()(I.container, e),
            onClick: b,
            ref: t,
            children: [
                (0, i.jsx)('div', {
                    className: I.header,
                    children: this.renderHeader()
                }),
                (0, i.jsx)('div', {
                    className: I.content,
                    children: this.renderContent()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', { resultType: null }),
            T(this, 'backToFrontPage', (e) => {
                let { resultType: t } = this.state;
                e.keyCode === E.yXg.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery());
            }),
            T(this, 'handleChangeQuery', (e) => {
                (0, _.ql)(e), this.search(e, E.wI2.SEARCH);
            }),
            T(this, 'handleSelectSuggestion', (e) => {
                (0, _.ql)(''), d.v2(), this.search(e, E.wI2.SEARCH_SUGGESTION, !0);
            }),
            T(this, 'handleClearQuery', () => {
                let { current: e } = this.props.searchBarRef;
                (0, _.ql)(''), d.v2(), this.setState({ resultType: null }), null != e && e.focus();
            }),
            T(this, 'handleSelectGIF', (e) => {
                let { onSelectGIF: t } = this.props;
                null != t && t(e);
            }),
            T(this, 'handleSelectItem', (e, t) => {
                let { current: n } = this.props.searchBarRef;
                switch (e) {
                    case E.wI2.TRENDING_CATEGORY:
                        d.yC(t, E.wI2.TRENDING_CATEGORY, !0), null != n && n.focus();
                        break;
                    case E.wI2.TRENDING_GIFS:
                        d.UU();
                }
                this.setState({ resultType: e });
            });
    }
}
let A = r.forwardRef((e, t) => {
    e.persistSearch || (0, _.ql)('');
    let {
            query: n,
            resultQuery: a,
            resultItems: s,
            suggestions: u
        } = (0, l.cj)([p.Z], () => ({
            query: p.Z.getQuery(),
            resultQuery: p.Z.getResultQuery(),
            resultItems: p.Z.getResultItems(),
            suggestions: p.Z.getSuggestions()
        })),
        { expressionPickerQuery: c, isSearchSuggestion: d } = (0, _.Iu)(
            (e) => ({
                expressionPickerQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            o.X
        ),
        f = null != c && '' !== c ? c : n,
        m = (0, h.HI)(),
        g = r.createRef();
    return (
        r.useLayoutEffect(() => {
            if (d) {
                var e;
                null === (e = g.current) || void 0 === e || e.focus();
            }
        }, [d, g]),
        (0, i.jsx)(S, {
            ...e,
            forwardedRef: t,
            query: f,
            resultQuery: a,
            resultItems: s,
            suggestions: u,
            favorites: m,
            searchOffset: 0,
            searchTotalResults: p.Z.getResultItems().length,
            searchLimit: null,
            searchBarRef: g
        })
    );
});
