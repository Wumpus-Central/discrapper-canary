n.d(t, { Z: () => D }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(377108),
    d = n(692547),
    f = n(552075),
    _ = n(481060),
    p = n(68405),
    h = n(527429),
    m = n(656733),
    g = n(251625),
    E = n(985375),
    b = n(132748),
    y = n(353903),
    v = n(215016),
    O = n(981631),
    I = n(388032),
    S = n(49633);
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
function N(e) {
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
                T(e, t, n[t]);
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
function C(e, t) {
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
let R = (e, t) => (0, r.jsx)(y.G0, { columns: e }, t);
function P(e) {
    var t;
    let n = l().sample(l().values(e));
    return {
        type: O.wI2.FAVORITES,
        name: I.NW.string(I.t.y3LQCA),
        icon: _.r7p,
        src: null != n ? n.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
        format: null != (t = null == n ? void 0 : n.format) ? t : u.EO.IMAGE
    };
}
class w extends i.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, p.Tg)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: n } = e;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)('div', { className: n === O.wI2.FAVORITES ? S.categoryFadeBlurple : S.categoryFade }),
                (0, r.jsxs)('div', {
                    className: S.categoryText,
                    children: [
                        n === O.wI2.TRENDING_GIFS
                            ? (0, r.jsx)(f.I, {
                                  className: S.categoryIcon,
                                  color: 'currentColor'
                              })
                            : null,
                        (0, r.jsx)('span', {
                            className: S.categoryName,
                            children: t
                        })
                    ]
                })
            ]
        });
    }
    render() {
        return (0, r.jsx)(h.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, r.jsx)(b.Z, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent
            })
        });
    }
    constructor(...e) {
        super(...e),
            T(this, '_masonryRef', i.createRef()),
            T(this, 'state', {
                favoritesTile: P(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
                focusedId: null
            }),
            T(this, 'handleFocus', (e) => {
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
            T(this, 'handleSelect', (e) => {
                let { onSelectItem: t } = this.props,
                    n = this.getData().find((t) => t.name === e);
                null != n && null != t && t(n.type, n.name);
            }),
            T(this, 'getItemKey', (e, t) => {
                if (e > 0) return null;
                let n = this.getData()[t];
                return null != n ? n.name : null;
            }),
            T(
                this,
                'memoizedData',
                (0, g.oH)(function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? [...t] : [e, ...t];
                })
            ),
            T(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let o = this.getData()[t];
                if (null == o) return;
                let { onSelectItem: a, imagePool: s, videoPool: l } = this.props,
                    { focusedId: c } = this.state;
                return (0, r.jsx)(
                    v.iR,
                    {
                        format: o.format,
                        color: d.Z.unsafe_rawColors.PRIMARY_800.css,
                        src: o.src,
                        item: o,
                        index: t,
                        coords: n,
                        onClick: () => a(o.type, o.name),
                        renderExtras: this.renderCategoryExtras,
                        focused: o.name === c,
                        imagePool: s,
                        videoPool: l
                    },
                    i
                );
            }),
            T(this, 'renderContent', (e, t, n) => {
                let { className: i, trendingCategories: o } = this.props;
                return 0 === o.length
                    ? (0, r.jsx)(y.u$, {
                          columns: e,
                          width: t,
                          renderColumn: R
                      })
                    : (0, r.jsx)(_.GMG, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: a()(S.container, i),
                          itemGutter: 12,
                          getItemKey: this.getItemKey,
                          columns: e,
                          getItemHeight: () => 110,
                          renderItem: this.renderItem,
                          sections: [this.getData().length],
                          chunkSize: 50
                      });
            }),
            T(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            T(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function D(e) {
    let t = (0, c.e7)([m.Z], () => m.Z.getTrendingCategories()),
        n = (0, E.gG)(),
        i = (0, v.PY)();
    return (0, r.jsx)(
        w,
        C(N({}, e, i), {
            trendingCategories: t,
            favorites: n
        })
    );
}
