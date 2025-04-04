n.d(t, { Z: () => C }), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(788347),
    l = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(68405),
    f = n(600164),
    _ = n(28546),
    p = n(656733),
    h = n(985375),
    m = n(653235),
    g = n(215016),
    E = n(981631),
    b = n(149203),
    y = n(388032),
    v = n(386683);
function O(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = (e) => e.stopPropagation();
class A extends i.PureComponent {
    componentDidMount() {
        d.gK(), document.addEventListener('keydown', this.backToFrontPage), '' !== this.props.query && this.search(this.props.query, E.wI2.SEARCH);
    }
    componentWillUnmount() {
        u.Z.wait(() => d.v2()), document.removeEventListener('keydown', this.backToFrontPage);
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
                return (0, r.jsx)(c.vwX, {
                    tag: 'h5',
                    className: v.searchHeader,
                    children: y.NW.string(y.t.y3LQCA)
                });
            case E.wI2.TRENDING_GIFS:
                return (0, r.jsx)(c.vwX, {
                    tag: 'h5',
                    className: v.searchHeader,
                    children: y.NW.string(y.t.H6zNFx)
                });
            default:
                return (0, r.jsx)(c.E1j, {
                    className: v.searchBar,
                    size: c.E1j.Sizes.MEDIUM,
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: y.NW.string(y.t.TnYqkZ),
                    'aria-label': y.NW.string(y.t.TnYqkZ),
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
                (t = (0, r.jsx)(c.P3F, {
                    onClick: this.handleClearQuery,
                    className: v.backButton,
                    'aria-label': y.NW.string(y.t['13/7kZ']),
                    children: (0, r.jsx)(c.whL, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })),
            (0, r.jsxs)(f.Z, {
                align: f.Z.Align.CENTER,
                children: [t, this.renderHeaderContent()]
            })
        );
    }
    renderContent() {
        let { contentClassName: e, resultItems: t, resultQuery: n, query: i, favorites: o, searchOffset: a, searchLimit: s, searchTotalResults: l, suggestions: c, hideFavorites: u } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, r.jsx)(m.Z, {
                  className: e,
                  hideFavoritesTile: u,
                  onSelectItem: this.handleSelectItem
              })
            : (0, r.jsx)(g.ZP, {
                  className: e,
                  data: d === E.wI2.FAVORITES ? o : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: n,
                  query: i,
                  searchOffset: a,
                  searchLimit: s,
                  searchTotalResults: l,
                  suggestions: c,
                  onSelectSuggestion: this.handleSelectSuggestion
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, r.jsxs)('div', {
            id: b.vO,
            role: 'tabpanel',
            'aria-labelledby': b._3,
            className: a()(v.container, e),
            onClick: N,
            ref: t,
            children: [
                (0, r.jsx)('div', {
                    className: v.header,
                    children: this.renderHeader()
                }),
                (0, r.jsx)('div', {
                    className: v.content,
                    children: this.renderContent()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            O(this, 'state', { resultType: null }),
            O(this, 'backToFrontPage', (e) => {
                let { resultType: t } = this.state;
                e.keyCode === E.yXg.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery());
            }),
            O(this, 'handleChangeQuery', (e) => {
                (0, _.ql)(e), this.search(e, E.wI2.SEARCH);
            }),
            O(this, 'handleSelectSuggestion', (e) => {
                (0, _.ql)(''), d.v2(), this.search(e, E.wI2.SEARCH_SUGGESTION, !0);
            }),
            O(this, 'handleClearQuery', () => {
                let { current: e } = this.props.searchBarRef;
                (0, _.ql)(''), d.v2(), this.setState({ resultType: null }), null != e && e.focus();
            }),
            O(this, 'handleSelectGIF', (e) => {
                let { onSelectGIF: t } = this.props;
                null != t && t(e);
            }),
            O(this, 'handleSelectItem', (e, t) => {
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
let C = i.forwardRef((e, t) => {
    e.persistSearch || (0, _.ql)('');
    let {
            query: n,
            resultQuery: o,
            resultItems: a,
            suggestions: c
        } = (0, l.cj)([p.Z], () => ({
            query: p.Z.getQuery(),
            resultQuery: p.Z.getResultQuery(),
            resultItems: p.Z.getResultItems(),
            suggestions: p.Z.getSuggestions()
        })),
        { expressionPickerQuery: u, isSearchSuggestion: d } = (0, _.Iu)(
            (e) => ({
                expressionPickerQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            s.X
        ),
        f = null != u && '' !== u ? u : n,
        m = (0, h.HI)(),
        g = i.createRef();
    return (
        i.useLayoutEffect(() => {
            if (d) {
                var e;
                null == (e = g.current) || e.focus();
            }
        }, [d, g]),
        (0, r.jsx)(
            A,
            T(I({}, e), {
                forwardedRef: t,
                query: f,
                resultQuery: o,
                resultItems: a,
                suggestions: c,
                favorites: m,
                searchOffset: 0,
                searchTotalResults: p.Z.getResultItems().length,
                searchLimit: null,
                searchBarRef: g
            })
        )
    );
});
