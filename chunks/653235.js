n.d(t, { Z: () => w }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(377108),
    d = n(692547),
    f = n(481060),
    _ = n(68405),
    p = n(527429),
    h = n(656733),
    m = n(251625),
    g = n(985375),
    E = n(132748),
    b = n(353903),
    y = n(215016),
    O = n(981631),
    v = n(388032),
    I = n(49633);
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
function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e, t) => (0, r.jsx)(b.G0, { columns: e }, t);
function R(e) {
    var t;
    let n = l().sample(l().values(e));
    return {
        type: O.wI2.FAVORITES,
        name: v.intl.string(v.t.y3LQCA),
        icon: f.r7p,
        src: null != n ? n.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
        format: null != (t = null == n ? void 0 : n.format) ? t : u.EO.IMAGE
    };
}
class P extends i.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, _.Tg)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: n } = e;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)('div', { className: n === O.wI2.FAVORITES ? I.categoryFadeBlurple : I.categoryFade }),
                (0, r.jsxs)('div', {
                    className: I.categoryText,
                    children: [
                        n === O.wI2.TRENDING_GIFS
                            ? (0, r.jsx)(f.IeX, {
                                  className: I.categoryIcon,
                                  color: 'currentColor'
                              })
                            : null,
                        (0, r.jsx)('span', {
                            className: I.categoryName,
                            children: t
                        })
                    ]
                })
            ]
        });
    }
    render() {
        return (0, r.jsx)(p.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, r.jsx)(E.Z, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent
            })
        });
    }
    constructor(...e) {
        super(...e),
            S(this, '_masonryRef', i.createRef()),
            S(this, 'state', {
                favoritesTile: R(this.props.favorites),
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
            S(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let a = this.getData()[t];
                if (null == a) return;
                let { onSelectItem: o, imagePool: s, videoPool: l } = this.props,
                    { focusedId: c } = this.state;
                return (0, r.jsx)(
                    y.iR,
                    {
                        format: a.format,
                        color: d.Z.unsafe_rawColors.PRIMARY_800.css,
                        src: a.src,
                        item: a,
                        index: t,
                        coords: n,
                        onClick: () => o(a.type, a.name),
                        renderExtras: this.renderCategoryExtras,
                        focused: a.name === c,
                        imagePool: s,
                        videoPool: l
                    },
                    i
                );
            }),
            S(this, 'renderContent', (e, t, n) => {
                let { className: i, trendingCategories: a } = this.props;
                return 0 === a.length
                    ? (0, r.jsx)(b.u$, {
                          columns: e,
                          width: t,
                          renderColumn: C
                      })
                    : (0, r.jsx)(f.GMG, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: o()(I.container, i),
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
function w(e) {
    let t = (0, c.e7)([h.Z], () => h.Z.getTrendingCategories()),
        n = (0, g.gG)(),
        i = (0, y.PY)();
    return (0, r.jsx)(
        P,
        N(T({}, e, i), {
            trendingCategories: t,
            favorites: n
        })
    );
}
