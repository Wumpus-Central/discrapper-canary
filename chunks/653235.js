r.d(n, {
    Z: function () {
        return D;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(377108),
    p = r(692547),
    h = r(481060),
    _ = r(68405),
    m = r(527429),
    g = r(656733),
    E = r(251625),
    v = r(985375),
    y = r(132748),
    b = r(353903),
    I = r(215016),
    T = r(981631),
    S = r(388032),
    A = r(337602);
function C(e, n, r) {
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
let N = (e, n) => (0, a.jsx)(b.G0, { columns: e }, n);
function R(e) {
    var n;
    let r = c().sample(c().values(e));
    return {
        type: T.wI2.FAVORITES,
        name: S.intl.string(S.t.y3LQCA),
        icon: h.StarIcon,
        src: null != r ? r.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
        format: null !== (n = null == r ? void 0 : r.format) && void 0 !== n ? n : f.EO.IMAGE
    };
}
class O extends o.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, _.Tg)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: n, icon: r, type: i } = e;
        return (0, a.jsxs)(o.Fragment, {
            children: [
                (0, a.jsx)('div', { className: i === T.wI2.FAVORITES ? A.categoryFadeBlurple : A.categoryFade }),
                (0, a.jsxs)('div', {
                    className: A.categoryText,
                    children: [
                        null != r
                            ? (0, a.jsx)(r, {
                                  className: A.categoryIcon,
                                  color: 'currentColor'
                              })
                            : null,
                        (0, a.jsx)('span', {
                            className: A.categoryName,
                            children: n
                        })
                    ]
                })
            ]
        });
    }
    render() {
        return (0, a.jsx)(m.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, a.jsx)(y.Z, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent
            })
        });
    }
    constructor(...e) {
        super(...e),
            C(this, '_masonryRef', o.createRef()),
            C(this, 'state', {
                favoritesTile: R(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
                focusedId: null
            }),
            C(this, 'handleFocus', (e) => {
                let { current: n } = this._masonryRef;
                if (null == n) return;
                let r = n.getCoordsMap()[e];
                null != r &&
                    (n.scrollIntoViewRect({
                        start: r.top - 10,
                        end: r.top + r.height + 10
                    }),
                    this.setState({ focusedId: e }));
            }),
            C(this, 'handleSelect', (e) => {
                let { onSelectItem: n } = this.props,
                    r = this.getData().find((n) => n.name === e);
                null != r && null != n && n(r.type, r.name);
            }),
            C(this, 'getItemKey', (e, n) => {
                if (e > 0) return null;
                let r = this.getData()[n];
                return null != r ? r.name : null;
            }),
            C(
                this,
                'memoizedData',
                (0, E.oH)(function (e, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return r ? [...n] : [e, ...n];
                })
            ),
            C(this, 'renderItem', (e, n, r, i) => {
                if (e > 0) return null;
                let o = this.getData()[n];
                if (null == o) return;
                let { onSelectItem: s, imagePool: l, videoPool: u } = this.props,
                    { focusedId: c } = this.state;
                return (0, a.jsx)(
                    I.iR,
                    {
                        format: o.format,
                        color: p.Z.unsafe_rawColors.PRIMARY_800.css,
                        src: o.src,
                        item: o,
                        index: n,
                        coords: r,
                        onClick: () => s(o.type, o.name),
                        renderExtras: this.renderCategoryExtras,
                        focused: o.name === c,
                        imagePool: l,
                        videoPool: u
                    },
                    i
                );
            }),
            C(this, 'renderContent', (e, n, r) => {
                let { className: i, trendingCategories: o } = this.props;
                return 0 === o.length
                    ? (0, a.jsx)(b.u$, {
                          columns: e,
                          width: n,
                          renderColumn: N
                      })
                    : (0, a.jsx)(h.MasonryList, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: l()(A.container, i),
                          itemGutter: 12,
                          getItemKey: this.getItemKey,
                          columns: e,
                          getItemHeight: () => 110,
                          renderItem: this.renderItem,
                          sections: [this.getData().length],
                          chunkSize: 50
                      });
            }),
            C(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            C(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function D(e) {
    let n = (0, d.e7)([g.Z], () => g.Z.getTrendingCategories()),
        r = (0, v.gG)(),
        i = (0, I.PY)();
    return (0, a.jsx)(O, {
        ...e,
        ...i,
        trendingCategories: n,
        favorites: r
    });
}
