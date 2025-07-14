(n.d(t, {
    PY: () => F,
    ZP: () => Z,
    iR: () => B
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
    O = n(868814),
    v = n(132748),
    I = n(981631),
    T = n(388032),
    S = n(171341);
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
function N(e) {
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
                A(e, t, n[t]);
            }));
    }
    return e;
}
let C = [d.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
    R = 220,
    P = 1220,
    w = Array.from({ length: 16 }).map((e, t) => ({
        id: ''.concat(t),
        height: Math.floor(100 * Math.random()) + 120
    }));
function D(e) {
    var t;
    return null != (t = e.id) ? t : e.src;
}
function L(e, t) {
    let n = w[t];
    return null == n ? 0 : n.height;
}
function x(e, t, n, i) {
    if (!(e > 0))
        return null == w[t]
            ? null
            : (0, r.jsx)(
                  'div',
                  {
                      className: S.placeholder,
                      style: N({ animationDelay: ''.concat(75 * t, 'ms') }, n)
                  },
                  i
              );
}
function k(e, t) {
    var n, r;
    return e > 0 ? '' : null != (r = null == (n = w[t]) ? void 0 : n.id) ? r : '';
}
function M(e) {
    return e === u.EO.VIDEO;
}
function j(e) {
    return ((0, E._M)(e) || (0, E.MO)(e)) && (e.pathname.toLowerCase().endsWith('.webp') || e.pathname.toLowerCase().endsWith('.avif'));
}
function U(e) {
    return ((0, E._M)(e) || (0, E.MO)(e)) && e.pathname.toLowerCase().endsWith('.gif');
}
function G(e) {
    let { optimizationsEnabled: t, sendParam: n } = O.Z.getCurrentConfig({ location: 'GIFPickerSearchResults' }, { autoTrackExposure: !0 }),
        r = y.Z.toURLSafe(e),
        i = null != r && U(r),
        a = t && i,
        o = n && i;
    return null != r && (j(r) || a || o) ? (o && r.searchParams.set('gif_treatment', String(+t)), a && r.searchParams.set('format', 'webp'), (j(r) || a) && r.searchParams.set('animated', 'true'), r.toString()) : e;
}
class B extends i.PureComponent {
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
                  src: G(e),
                  width: t,
                  height: n,
                  className: S.gif,
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
            className: S.result,
            'data-focused': a,
            onClick: this.handleClick,
            style: N({ backgroundColor: s ? void 0 : o }, i),
            children: [M(n) ? null : this.renderGIF(), null != t ? t(e) : null]
        });
    }
    constructor(e) {
        (super(e),
            A(this, 'ref', null),
            A(this, '_video', null),
            A(this, '_image', null),
            A(this, '_mounted', !0),
            A(this, 'handleCanPlay', () => {
                this._mounted && this.setState({ loaded: !0 });
            }),
            A(this, 'handleClick', () => {
                let { onClick: e, item: t, index: n } = this.props;
                null != e && e(t, n);
            }));
        let { format: t, color: n, imagePool: r } = this.props;
        ((this.state = {
            color: null == n ? l().sample(C) : n,
            loaded: !1
        }),
            M(t) || ((this._image = r.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src)));
    }
}
class V extends i.PureComponent {
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === I.wI2.FAVORITES && ((0, p.t1)(I.wI2.FAVORITES), (0, p.hM)(t, I.wI2.FAVORITES, { limit: null }));
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
        return 1 === e ? R : 0;
    }
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.jsx)('div', {
            className: S.emptyHint,
            children:
                null != e
                    ? (0, r.jsxs)('div', {
                          className: S.emptyHintCard,
                          children: [
                              t
                                  ? (0, r.jsx)(_.r7p, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: S.emptyHintFavorite
                                    })
                                  : null,
                              (0, r.jsx)('div', {
                                  className: S.emptyHintText,
                                  children: e
                              })
                          ]
                      })
                    : (0, r.jsx)('div', { className: S.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(_.Ttm, {
            className: S.results,
            fade: !0,
            children: (0, r.jsxs)('div', {
                className: S.emptyHints,
                children: [this.renderEmptyFavorite(T.intl.string(T.t['3gyw4e']), !0), this.renderEmptyFavorite(T.intl.string(T.t.yThUi4)), this.renderEmptyFavorite(T.intl.string(T.t.MeP0SE)), Array.from({ length: 15 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(T.intl.string(T.t['5u99XV'])), Array.from({ length: 16 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(T.intl.string(T.t.o6CLLy))]
            })
        });
    }
    render() {
        let { data: e, resultQuery: t, query: n, resultType: i } = this.props;
        return 0 === e.length && t === n && i !== I.wI2.TRENDING_GIFS
            ? i === I.wI2.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, r.jsx)(m.Z, {
                      message: T.intl.string(T.t['5dX4UF']),
                      className: S.noResults
                  })
            : (0, r.jsx)(
                  h.Z,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, r.jsx)(v.Z, {
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
            A(this, '_masonryRef', i.createRef()),
            A(this, 'prevResultQuery', null),
            A(this, 'state', { focusedId: null }),
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
                let t,
                    { data: n } = this.props,
                    r = n.findIndex((t) => D(t) === e);
                (-1 !== r && (t = n[r]), null != t && this.selectItem(t, r));
            }),
            A(this, 'handleClickItem', (e, t) => {
                this.selectItem(e, t);
            }),
            A(this, 'handleScroll', () => {
                let { resultQuery: e } = this.props,
                    { current: t } = this._masonryRef;
                if (null == t) return;
                let { scrollTop: n, scrollHeight: r } = t.getScrollerState();
                r - n <= P && (e !== this.prevResultQuery && (0, p.mO)(e), (this.prevResultQuery = e));
            }),
            A(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let { focusedId: a } = this.state,
                    o = this.props.data[t];
                return null == o
                    ? null
                    : (0, r.jsx)(
                          B,
                          {
                              item: o,
                              index: t,
                              format: o.format,
                              src: o.src,
                              coords: n,
                              onClick: this.handleClickItem,
                              renderExtras: () => (0, r.jsx)(b.Z, N({ className: S.favButton }, o)),
                              focused: D(o) === a,
                              imagePool: this.props.imagePool,
                              videoPool: this.props.videoPool
                          },
                          i
                      );
            }),
            A(this, 'getItemHeight', (e, t, n) => {
                if (e > 0) return 0;
                let r = this.props.data[t];
                return null == r ? 0 : n * (r.height / r.width);
            }),
            A(this, 'getItemKey', (e, t) => {
                var n;
                if (e > 0) return null;
                let r = this.props.data[t];
                return null != r ? (null != (n = r.id) ? n : r.src) : null;
            }),
            A(this, 'renderSection', (e, t, n) => {
                let { onSelectSuggestion: a, suggestions: o } = this.props;
                return 1 === e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: S.endContainer,
                              style: t,
                              children:
                                  o.length > 0
                                      ? (0, r.jsxs)(i.Fragment, {
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: S.endText,
                                                    children: T.intl.string(T.t['3JGJo6'])
                                                }),
                                                (0, r.jsx)('div', {
                                                    className: S.searchSuggestions,
                                                    children: o.map((e) =>
                                                        (0, r.jsx)(
                                                            f.zx,
                                                            {
                                                                look: f.zx.Looks.OUTLINED,
                                                                color: f.zx.Colors.PRIMARY,
                                                                size: f.zx.Sizes.SMALL,
                                                                className: S.searchSuggestion,
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
            A(this, 'renderContent', (e, t, n) => {
                let { className: i, data: a, resultQuery: s, query: l, resultType: c } = this.props;
                return 0 === a.length && (s !== l || c === I.wI2.TRENDING_GIFS)
                    ? (0, r.jsx)(
                          _.GMG,
                          {
                              fade: !0,
                              className: o()(S.results, i),
                              sections: [w.length],
                              columns: e,
                              itemGutter: 12,
                              getItemKey: k,
                              getItemHeight: L,
                              renderItem: x,
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
                              className: o()(S.results, i),
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
            A(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            A(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            }));
    }
}
function F() {
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
                        return ((e.className = S.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e);
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
let Z = function (e) {
    let t = F();
    return (0, r.jsx)(V, N({}, e, t));
};
