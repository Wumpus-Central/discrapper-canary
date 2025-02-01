n.d(t, { Z: () => R }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(377108),
    d = n(692547),
    f = n(481060),
    _ = n(68405),
    p = n(527429),
    h = n(656733),
    m = n(251625),
    g = n(985375),
    E = n(132748),
    v = n(353903),
    y = n(215016),
    I = n(981631),
    T = n(388032),
    b = n(337602);
function S(e, t, n) {
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
let A = (e, t) => (0, i.jsx)(v.G0, { columns: e }, t);
function N(e) {
    var t;
    let n = l().sample(l().values(e));
    return {
        type: I.wI2.FAVORITES,
        name: T.intl.string(T.t.y3LQCA),
        icon: f.r7p,
        src: null != n ? n.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
        format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : c.EO.IMAGE
    };
}
class C extends r.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, _.Tg)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, icon: n, type: a } = e;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)('div', { className: a === I.wI2.FAVORITES ? b.categoryFadeBlurple : b.categoryFade }),
                (0, i.jsxs)('div', {
                    className: b.categoryText,
                    children: [
                        null != n
                            ? (0, i.jsx)(n, {
                                  className: b.categoryIcon,
                                  color: 'currentColor'
                              })
                            : null,
                        (0, i.jsx)('span', {
                            className: b.categoryName,
                            children: t
                        })
                    ]
                })
            ]
        });
    }
    render() {
        return (0, i.jsx)(p.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, i.jsx)(E.Z, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent
            })
        });
    }
    constructor(...e) {
        super(...e),
            S(this, '_masonryRef', r.createRef()),
            S(this, 'state', {
                favoritesTile: N(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
                focusedId: null
            }),
            S(this, 'handleFocus', (e) => {
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
            S(this, 'handleSelect', (e) => {
                let { onSelectItem: t } = this.props,
                    n = this.getData().find((t) => t.name === e);
                null != n && null != t && t(n.type, n.name);
            }),
            S(this, 'getItemKey', (e, t) => {
                if (e > 0) return null;
                let n = this.getData()[t];
                return null != n ? n.name : null;
            }),
            S(
                this,
                'memoizedData',
                (0, m.oH)(function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? [...t] : [e, ...t];
                })
            ),
            S(this, 'renderItem', (e, t, n, r) => {
                if (e > 0) return null;
                let a = this.getData()[t];
                if (null == a) return;
                let { onSelectItem: s, imagePool: o, videoPool: l } = this.props,
                    { focusedId: u } = this.state;
                return (0, i.jsx)(
                    y.iR,
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
            S(this, 'renderContent', (e, t, n) => {
                let { className: r, trendingCategories: a } = this.props;
                return 0 === a.length
                    ? (0, i.jsx)(v.u$, {
                          columns: e,
                          width: t,
                          renderColumn: A
                      })
                    : (0, i.jsx)(f.GMG, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: s()(b.container, r),
                          itemGutter: 12,
                          getItemKey: this.getItemKey,
                          columns: e,
                          getItemHeight: () => 110,
                          renderItem: this.renderItem,
                          sections: [this.getData().length],
                          chunkSize: 50
                      });
            }),
            S(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            S(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function R(e) {
    let t = (0, u.e7)([h.Z], () => h.Z.getTrendingCategories()),
        n = (0, g.gG)(),
        r = (0, y.PY)();
    return (0, i.jsx)(C, {
        ...e,
        ...r,
        trendingCategories: t,
        favorites: n
    });
}
