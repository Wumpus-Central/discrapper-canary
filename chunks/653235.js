n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(377108),
    d = n(692547),
    f = n(552075),
    _ = n(481060),
    p = n(68405),
    h = n(527429),
    m = n(656733),
    g = n(251625),
    E = n(985375),
    v = n(132748),
    y = n(353903),
    I = n(215016),
    T = n(981631),
    b = n(388032),
    S = n(160869);
function A(e, t, n) {
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
let N = (e, t) => (0, i.jsx)(y.G0, { columns: e }, t);
function C(e) {
    var t;
    let n = l().sample(l().values(e));
    return {
        type: T.wI2.FAVORITES,
        name: b.intl.string(b.t.y3LQCA),
        icon: _.r7p,
        src: null != n ? n.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
        format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : c.EO.IMAGE
    };
}
class R extends r.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, p.Tg)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: n } = e;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)('div', { className: n === T.wI2.FAVORITES ? S.categoryFadeBlurple : S.categoryFade }),
                (0, i.jsxs)('div', {
                    className: S.categoryText,
                    children: [
                        n === T.wI2.TRENDING_GIFS
                            ? (0, i.jsx)(f.I, {
                                  className: S.categoryIcon,
                                  color: 'currentColor'
                              })
                            : null,
                        (0, i.jsx)('span', {
                            className: S.categoryName,
                            children: t
                        })
                    ]
                })
            ]
        });
    }
    render() {
        return (0, i.jsx)(h.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, i.jsx)(v.Z, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent
            })
        });
    }
    constructor(...e) {
        super(...e),
            A(this, '_masonryRef', r.createRef()),
            A(this, 'state', {
                favoritesTile: C(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
                focusedId: null
            }),
            A(this, 'handleFocus', (e) => {
                let { current: t } = this._masonryRef;
                if (null == t) return;
                let n = t.getCoordsMap()[e];
                null != n &&
                    (t.scrollIntoViewRect({
                        start: n.top - 10,
                        end: n.top + n.height + 10
                    }),
                    this.setState({ focusedId: e }));
            }),
            A(this, 'handleSelect', (e) => {
                let { onSelectItem: t } = this.props,
                    n = this.getData().find((t) => t.name === e);
                null != n && null != t && t(n.type, n.name);
            }),
            A(this, 'getItemKey', (e, t) => {
                if (e > 0) return null;
                let n = this.getData()[t];
                return null != n ? n.name : null;
            }),
            A(
                this,
                'memoizedData',
                (0, g.oH)(function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? [...t] : [e, ...t];
                })
            ),
            A(this, 'renderItem', (e, t, n, r) => {
                if (e > 0) return null;
                let a = this.getData()[t];
                if (null == a) return;
                let { onSelectItem: s, imagePool: o, videoPool: l } = this.props,
                    { focusedId: u } = this.state;
                return (0, i.jsx)(
                    I.iR,
                    {
                        format: a.format,
                        color: d.Z.unsafe_rawColors.PRIMARY_800.css,
                        src: a.src,
                        item: a,
                        index: t,
                        coords: n,
                        onClick: () => s(a.type, a.name),
                        renderExtras: this.renderCategoryExtras,
                        focused: a.name === u,
                        imagePool: o,
                        videoPool: l
                    },
                    r
                );
            }),
            A(this, 'renderContent', (e, t, n) => {
                let { className: r, trendingCategories: a } = this.props;
                return 0 === a.length
                    ? (0, i.jsx)(y.u$, {
                          columns: e,
                          width: t,
                          renderColumn: N
                      })
                    : (0, i.jsx)(_.GMG, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: s()(S.container, r),
                          itemGutter: 12,
                          getItemKey: this.getItemKey,
                          columns: e,
                          getItemHeight: () => 110,
                          renderItem: this.renderItem,
                          sections: [this.getData().length],
                          chunkSize: 50
                      });
            }),
            A(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            A(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function O(e) {
    let t = (0, u.e7)([m.Z], () => m.Z.getTrendingCategories()),
        n = (0, E.gG)(),
        r = (0, I.PY)();
    return (0, i.jsx)(R, {
        ...e,
        ...r,
        trendingCategories: t,
        favorites: n
    });
}
