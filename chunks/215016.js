(n.d(t, {
    PY: () => V,
    ZP: () => F,
    iR: () => G
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(944611),
    u = n(377108),
    d = n(692547),
    f = n(755721),
    _ = n(481060),
    p = n(68405),
    h = n(527429),
    m = n(788911),
    g = n(40851),
    E = n(198620),
    b = n(29909),
    y = n(591759),
    O = n(132748),
    v = n(981631),
    I = n(388032),
    T = n(171341);
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            }));
    }
    return e;
}
let N = [d.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
    C = 220,
    R = 1220,
    P = Array.from({ length: 16 }).map((e, t) => ({
        id: ''.concat(t),
        height: Math.floor(100 * Math.random()) + 120
    }));
function w(e) {
    var t;
    return null != (t = e.id) ? t : e.src;
}
function D(e, t) {
    let n = P[t];
    return null == n ? 0 : n.height;
}
function L(e, t, n, i) {
    if (!(e > 0))
        return null == P[t]
            ? null
            : (0, r.jsx)(
                  'div',
                  {
                      className: T.placeholder,
                      style: A({ animationDelay: ''.concat(75 * t, 'ms') }, n)
                  },
                  i
              );
}
function x(e, t) {
    var n, r;
    return e > 0 ? '' : null != (r = null == (n = P[t]) ? void 0 : n.id) ? r : '';
}
function k(e) {
    return e === u.EO.VIDEO;
}
function M(e) {
    return ((0, E._M)(e) || (0, E.MO)(e)) && (e.pathname.toLowerCase().endsWith('.webp') || e.pathname.toLowerCase().endsWith('.avif'));
}
function j(e) {
    return ((0, E._M)(e) || (0, E.MO)(e)) && e.pathname.toLowerCase().endsWith('.gif');
}
function U(e) {
    let t = y.Z.toURLSafe(e),
        n = null != t && j(t);
    return null != t && (M(t) || n) ? (n && t.searchParams.set('format', 'webp'), t.searchParams.set('animated', 'true'), t.toString()) : e;
}
class G extends i.PureComponent {
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: n, height: r },
                videoPool: i
            },
            ref: a
        } = this;
        if (e !== u.EO.VIDEO || null == a) return;
        let o = i.getElement();
        ((o.oncanplay = this.handleCanPlay), (o.src = t), (o.width = n), (o.height = r), a.appendChild(o), (this._video = o));
    }
    componentDidUpdate(e) {
        let { width: t, height: n } = this.props.coords;
        null != this._video && (e.coords.width !== t || e.coords.height !== n) && ((this._video.width = t), (this._video.height = n));
    }
    componentWillUnmount() {
        this._mounted = !1;
        let { _image: e, _video: t } = this,
            { imagePool: n, videoPool: r } = this.props;
        (null != e && ((this._image = null), n.poolElement(e)), null != t && ((this._video = null), r.poolElement(t)));
    }
    renderGIF() {
        let {
                src: e,
                coords: { width: t, height: n }
            } = this.props,
            { loaded: i } = this.state;
        return i
            ? (0, r.jsx)('img', {
                  src: U(e),
                  width: t,
                  height: n,
                  className: T.gif,
                  alt: ''
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: i, focused: a } = this.props,
            { color: o, loaded: s } = this.state;
        return (0, r.jsxs)(_.P3F, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: T.result,
            'data-focused': a,
            onClick: this.handleClick,
            style: A({ backgroundColor: s ? void 0 : o }, i),
            children: [k(n) ? null : this.renderGIF(), null != t ? t(e) : null]
        });
    }
    constructor(e) {
        (super(e),
            S(this, 'ref', null),
            S(this, '_video', null),
            S(this, '_image', null),
            S(this, '_mounted', !0),
            S(this, 'handleCanPlay', () => {
                this._mounted && this.setState({ loaded: !0 });
            }),
            S(this, 'handleClick', () => {
                let { onClick: e, item: t, index: n } = this.props;
                null != e && e(t, n);
            }));
        let { format: t, color: n, imagePool: r } = this.props;
        ((this.state = {
            color: null == n ? l().sample(N) : n,
            loaded: !1
        }),
            k(t) || ((this._image = r.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src)));
    }
}
class B extends i.PureComponent {
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === v.wI2.FAVORITES && ((0, p.t1)(v.wI2.FAVORITES), (0, p.hM)(t, v.wI2.FAVORITES, { limit: null }));
    }
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: r, data: i, resultQuery: a } = this.props;
        (null != n && n(e),
            (0, p.R7)({
                type: r,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: i.length,
                totalResults: this.props.searchTotalResults,
                query: a,
                gifId: e.id
            }));
    }
    getSectionHeight(e) {
        return 1 === e ? C : 0;
    }
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.jsx)('div', {
            className: T.emptyHint,
            children:
                null != e
                    ? (0, r.jsxs)('div', {
                          className: T.emptyHintCard,
                          children: [
                              t
                                  ? (0, r.jsx)(_.r7p, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: T.emptyHintFavorite
                                    })
                                  : null,
                              (0, r.jsx)('div', {
                                  className: T.emptyHintText,
                                  children: e
                              })
                          ]
                      })
                    : (0, r.jsx)('div', { className: T.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(_.Ttm, {
            className: T.results,
            fade: !0,
            children: (0, r.jsxs)('div', {
                className: T.emptyHints,
                children: [this.renderEmptyFavorite(I.intl.string(I.t['3gyw4e']), !0), this.renderEmptyFavorite(I.intl.string(I.t.yThUi4)), this.renderEmptyFavorite(I.intl.string(I.t.MeP0SE)), Array.from({ length: 15 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(I.intl.string(I.t['5u99XV'])), Array.from({ length: 16 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(I.intl.string(I.t.o6CLLy))]
            })
        });
    }
    render() {
        let { data: e, resultQuery: t, query: n, resultType: i } = this.props;
        return 0 === e.length && t === n && i !== v.wI2.TRENDING_GIFS
            ? i === v.wI2.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, r.jsx)(m.Z, {
                      message: I.intl.string(I.t['5dX4UF']),
                      className: T.noResults
                  })
            : (0, r.jsx)(
                  h.Z,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, r.jsx)(O.Z, {
                          desiredItemWidth: 200,
                          maxColumns: 8,
                          children: this.renderContent
                      })
                  },
                  t
              );
    }
    constructor(...e) {
        (super(...e),
            S(this, '_masonryRef', i.createRef()),
            S(this, 'prevResultQuery', null),
            S(this, 'state', { focusedId: null }),
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
                let t,
                    { data: n } = this.props,
                    r = n.findIndex((t) => w(t) === e);
                (-1 !== r && (t = n[r]), null != t && this.selectItem(t, r));
            }),
            S(this, 'handleClickItem', (e, t) => {
                this.selectItem(e, t);
            }),
            S(this, 'handleScroll', () => {
                let { resultQuery: e } = this.props,
                    { current: t } = this._masonryRef;
                if (null == t) return;
                let { scrollTop: n, scrollHeight: r } = t.getScrollerState();
                r - n <= R && (e !== this.prevResultQuery && (0, p.mO)(e), (this.prevResultQuery = e));
            }),
            S(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let { focusedId: a } = this.state,
                    o = this.props.data[t];
                return null == o
                    ? null
                    : (0, r.jsx)(
                          G,
                          {
                              item: o,
                              index: t,
                              format: o.format,
                              src: o.src,
                              coords: n,
                              onClick: this.handleClickItem,
                              renderExtras: () => (0, r.jsx)(b.Z, A({ className: T.favButton }, o)),
                              focused: w(o) === a,
                              imagePool: this.props.imagePool,
                              videoPool: this.props.videoPool
                          },
                          i
                      );
            }),
            S(this, 'getItemHeight', (e, t, n) => {
                if (e > 0) return 0;
                let r = this.props.data[t];
                return null == r ? 0 : n * (r.height / r.width);
            }),
            S(this, 'getItemKey', (e, t) => {
                var n;
                if (e > 0) return null;
                let r = this.props.data[t];
                return null != r ? (null != (n = r.id) ? n : r.src) : null;
            }),
            S(this, 'renderSection', (e, t, n) => {
                let { onSelectSuggestion: a, suggestions: o } = this.props;
                return 1 === e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: T.endContainer,
                              style: t,
                              children:
                                  o.length > 0
                                      ? (0, r.jsxs)(i.Fragment, {
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: T.endText,
                                                    children: I.intl.string(I.t['3JGJo6'])
                                                }),
                                                (0, r.jsx)('div', {
                                                    className: T.searchSuggestions,
                                                    children: o.map((e) =>
                                                        (0, r.jsx)(
                                                            f.zx,
                                                            {
                                                                look: f.zx.Looks.OUTLINED,
                                                                color: f.zx.Colors.PRIMARY,
                                                                size: f.zx.Sizes.SMALL,
                                                                className: T.searchSuggestion,
                                                                onClick: () => {
                                                                    a(e);
                                                                },
                                                                children: e
                                                            },
                                                            e
                                                        )
                                                    )
                                                })
                                            ]
                                        })
                                      : null
                          },
                          n
                      )
                    : null;
            }),
            S(this, 'renderContent', (e, t, n) => {
                let { className: i, data: a, resultQuery: s, query: l, resultType: c } = this.props;
                return 0 === a.length && (s !== l || c === v.wI2.TRENDING_GIFS)
                    ? (0, r.jsx)(
                          _.GMG,
                          {
                              fade: !0,
                              className: o()(T.results, i),
                              sections: [P.length],
                              columns: e,
                              itemGutter: 12,
                              getItemKey: x,
                              getItemHeight: D,
                              renderItem: L,
                              chunkSize: 128
                          },
                          s
                      )
                    : (0, r.jsx)(
                          _.GMG,
                          {
                              ref: this._masonryRef,
                              fade: !0,
                              itemGutter: 12,
                              className: o()(T.results, i),
                              columns: e,
                              sections: [a.length, 0],
                              getItemKey: this.getItemKey,
                              getItemHeight: this.getItemHeight,
                              renderItem: this.renderItem,
                              getSectionHeight: this.getSectionHeight,
                              renderSection: this.renderSection,
                              onScroll: this.handleScroll,
                              chunkSize: 128
                          },
                          ''.concat(s, '-').concat(null != c ? c : '')
                      );
            }),
            S(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            S(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            }));
    }
}
function V() {
    let { renderWindow: e } = i.useContext(g.ZP),
        t = e.document,
        [n] = i.useState(
            () =>
                new c.w(
                    () => t.createElement('img'),
                    (e) => {
                        ((e.onload = null), (e.src = ''));
                    }
                )
        ),
        [r] = i.useState(
            () =>
                new c.w(
                    () => {
                        let e = t.createElement('video');
                        return ((e.className = T.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e);
                    },
                    (e) => {
                        ((e.src = ''), (e.oncanplay = null));
                        let { parentNode: t } = e;
                        null != t && t.removeChild(e);
                    }
                )
        );
    return {
        imagePool: n,
        videoPool: r
    };
}
let F = function (e) {
    let t = V();
    return (0, r.jsx)(B, A({}, e, t));
};
