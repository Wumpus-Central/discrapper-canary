n.d(t, {
    PY: () => G,
    ZP: () => B,
    iR: () => j
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(944611),
    u = n(377108),
    d = n(692547),
    f = n(481060),
    _ = n(68405),
    p = n(527429),
    h = n(788911),
    m = n(40851),
    g = n(198620),
    E = n(29909),
    b = n(591759),
    y = n(132748),
    v = n(981631),
    O = n(388032),
    I = n(171341);
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
let N = [d.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
    A = 220,
    C = 1220,
    R = Array.from({ length: 16 }).map((e, t) => ({
        id: ''.concat(t),
        height: Math.floor(100 * Math.random()) + 120
    }));
function P(e) {
    var t;
    return null != (t = e.id) ? t : e.src;
}
function w(e, t) {
    let n = R[t];
    return null == n ? 0 : n.height;
}
function D(e, t, n, i) {
    if (!(e > 0))
        return null == R[t]
            ? null
            : (0, r.jsx)(
                  'div',
                  {
                      className: I.placeholder,
                      style: T({ animationDelay: ''.concat(75 * t, 'ms') }, n)
                  },
                  i
              );
}
function L(e, t) {
    var n, r;
    return e > 0 ? '' : null != (r = null == (n = R[t]) ? void 0 : n.id) ? r : '';
}
function x(e) {
    return e === u.EO.VIDEO;
}
function M(e) {
    return ((0, g._M)(e) || (0, g.MO)(e)) && (e.pathname.toLowerCase().endsWith('.webp') || e.pathname.toLowerCase().endsWith('.avif'));
}
function k(e) {
    let t = b.Z.toURLSafe(e);
    return null != t && M(t) ? (t.searchParams.set('animated', 'true'), t.toString()) : e;
}
class j extends i.PureComponent {
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: n, height: r },
                videoPool: i
            },
            ref: o
        } = this;
        if (e !== u.EO.VIDEO || null == o) return;
        let a = i.getElement();
        (a.oncanplay = this.handleCanPlay), (a.src = t), (a.width = n), (a.height = r), o.appendChild(a), (this._video = a);
    }
    componentDidUpdate(e) {
        let { width: t, height: n } = this.props.coords;
        null != this._video && (e.coords.width !== t || e.coords.height !== n) && ((this._video.width = t), (this._video.height = n));
    }
    componentWillUnmount() {
        this._mounted = !1;
        let { _image: e, _video: t } = this,
            { imagePool: n, videoPool: r } = this.props;
        null != e && ((this._image = null), n.poolElement(e)), null != t && ((this._video = null), r.poolElement(t));
    }
    renderGIF() {
        let {
                src: e,
                coords: { width: t, height: n }
            } = this.props,
            { loaded: i } = this.state;
        return i
            ? (0, r.jsx)('img', {
                  src: k(e),
                  width: t,
                  height: n,
                  className: I.gif,
                  alt: ''
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: i, focused: o } = this.props,
            { color: a, loaded: s } = this.state;
        return (0, r.jsxs)(f.P3F, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: I.result,
            'data-focused': o,
            onClick: this.handleClick,
            style: T({ backgroundColor: s ? void 0 : a }, i),
            children: [x(n) ? null : this.renderGIF(), null != t ? t(e) : null]
        });
    }
    constructor(e) {
        super(e),
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
            });
        let { format: t, color: n, imagePool: r } = this.props;
        (this.state = {
            color: null == n ? l().sample(N) : n,
            loaded: !1
        }),
            x(t) || ((this._image = r.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src));
    }
}
class U extends i.PureComponent {
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === v.wI2.FAVORITES && ((0, _.t1)(v.wI2.FAVORITES), (0, _.hM)(t, v.wI2.FAVORITES, { limit: null }));
    }
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: r, data: i, resultQuery: o } = this.props;
        null != n && n(e),
            (0, _.R7)({
                type: r,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: i.length,
                totalResults: this.props.searchTotalResults,
                query: o,
                gifId: e.id
            });
    }
    getSectionHeight(e) {
        return 1 === e ? A : 0;
    }
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.jsx)('div', {
            className: I.emptyHint,
            children:
                null != e
                    ? (0, r.jsxs)('div', {
                          className: I.emptyHintCard,
                          children: [
                              t
                                  ? (0, r.jsx)(f.r7p, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: I.emptyHintFavorite
                                    })
                                  : null,
                              (0, r.jsx)('div', {
                                  className: I.emptyHintText,
                                  children: e
                              })
                          ]
                      })
                    : (0, r.jsx)('div', { className: I.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(f.Ttm, {
            className: I.results,
            fade: !0,
            children: (0, r.jsxs)('div', {
                className: I.emptyHints,
                children: [this.renderEmptyFavorite(O.NW.string(O.t['3gyw4e']), !0), this.renderEmptyFavorite(O.NW.string(O.t.yThUi4)), this.renderEmptyFavorite(O.NW.string(O.t.MeP0SE)), Array.from({ length: 15 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(O.NW.string(O.t['5u99XV'])), Array.from({ length: 16 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(O.NW.string(O.t.o6CLLy))]
            })
        });
    }
    render() {
        let { data: e, resultQuery: t, query: n, resultType: i } = this.props;
        return 0 === e.length && t === n && i !== v.wI2.TRENDING_GIFS
            ? i === v.wI2.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, r.jsx)(h.Z, {
                      message: O.NW.string(O.t['5dX4UF']),
                      className: I.noResults
                  })
            : (0, r.jsx)(
                  p.Z,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, r.jsx)(y.Z, {
                          desiredItemWidth: 200,
                          maxColumns: 8,
                          children: this.renderContent
                      })
                  },
                  t
              );
    }
    constructor(...e) {
        super(...e),
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
                    r = n.findIndex((t) => P(t) === e);
                -1 !== r && (t = n[r]), null != t && this.selectItem(t, r);
            }),
            S(this, 'handleClickItem', (e, t) => {
                this.selectItem(e, t);
            }),
            S(this, 'handleScroll', () => {
                let { resultQuery: e } = this.props,
                    { current: t } = this._masonryRef;
                if (null == t) return;
                let { scrollTop: n, scrollHeight: r } = t.getScrollerState();
                r - n <= C && (e !== this.prevResultQuery && (0, _.mO)(e), (this.prevResultQuery = e));
            }),
            S(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let { focusedId: o } = this.state,
                    a = this.props.data[t];
                return null == a
                    ? null
                    : (0, r.jsx)(
                          j,
                          {
                              item: a,
                              index: t,
                              format: a.format,
                              src: a.src,
                              coords: n,
                              onClick: this.handleClickItem,
                              renderExtras: () => (0, r.jsx)(E.Z, T({ className: I.favButton }, a)),
                              focused: P(a) === o,
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
                let { onSelectSuggestion: o, suggestions: a } = this.props;
                return 1 === e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: I.endContainer,
                              style: t,
                              children:
                                  a.length > 0
                                      ? (0, r.jsxs)(i.Fragment, {
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: I.endText,
                                                    children: O.NW.string(O.t['3JGJo6'])
                                                }),
                                                (0, r.jsx)('div', {
                                                    className: I.searchSuggestions,
                                                    children: a.map((e) =>
                                                        (0, r.jsx)(
                                                            f.zxk,
                                                            {
                                                                look: f.zxk.Looks.OUTLINED,
                                                                color: f.zxk.Colors.PRIMARY,
                                                                size: f.zxk.Sizes.SMALL,
                                                                className: I.searchSuggestion,
                                                                onClick: () => {
                                                                    o(e);
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
                let { className: i, data: o, resultQuery: s, query: l, resultType: c } = this.props;
                return 0 === o.length && (s !== l || c === v.wI2.TRENDING_GIFS)
                    ? (0, r.jsx)(
                          f.GMG,
                          {
                              fade: !0,
                              className: a()(I.results, i),
                              sections: [R.length],
                              columns: e,
                              itemGutter: 12,
                              getItemKey: L,
                              getItemHeight: w,
                              renderItem: D,
                              chunkSize: 128
                          },
                          s
                      )
                    : (0, r.jsx)(
                          f.GMG,
                          {
                              ref: this._masonryRef,
                              fade: !0,
                              itemGutter: 12,
                              className: a()(I.results, i),
                              columns: e,
                              sections: [o.length, 0],
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
            });
    }
}
function G() {
    let { renderWindow: e } = i.useContext(m.ZP),
        t = e.document,
        [n] = i.useState(
            () =>
                new c.w(
                    () => t.createElement('img'),
                    (e) => {
                        (e.onload = null), (e.src = '');
                    }
                )
        ),
        [r] = i.useState(
            () =>
                new c.w(
                    () => {
                        let e = t.createElement('video');
                        return (e.className = I.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e;
                    },
                    (e) => {
                        (e.src = ''), (e.oncanplay = null);
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
let B = function (e) {
    let t = G();
    return (0, r.jsx)(U, T({}, e, t));
};
