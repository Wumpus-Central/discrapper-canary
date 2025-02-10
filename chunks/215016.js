n.d(t, {
    PY: () => B,
    ZP: () => Z,
    iR: () => U
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(944611),
    c = n(377108),
    d = n(692547),
    f = n(481060),
    _ = n(68405),
    p = n(527429),
    h = n(788911),
    m = n(40851),
    g = n(849727),
    E = n(198620),
    v = n(29909),
    y = n(591759),
    I = n(132748),
    T = n(981631),
    b = n(388032),
    S = n(920909);
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
let N = [d.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
    C = 220,
    R = 1220,
    O = Array.from({ length: 16 }).map((e, t) => ({
        id: ''.concat(t),
        height: Math.floor(100 * Math.random()) + 120
    }));
function D(e) {
    var t;
    return null !== (t = e.id) && void 0 !== t ? t : e.src;
}
function L(e, t) {
    let n = O[t];
    return null == n ? 0 : n.height;
}
function x(e, t, n, r) {
    if (!(e > 0))
        return null == O[t]
            ? null
            : (0, i.jsx)(
                  'div',
                  {
                      className: S.placeholder,
                      style: {
                          animationDelay: ''.concat(75 * t, 'ms'),
                          ...n
                      }
                  },
                  r
              );
}
function w(e, t) {
    var n, i;
    return e > 0 ? '' : null !== (i = null === (n = O[t]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : '';
}
function P(e) {
    return e === c.EO.VIDEO;
}
function M(e) {
    return ((0, E._M)(e) || (0, E.MO)(e)) && (e.pathname.toLowerCase().endsWith('.webp') || e.pathname.toLowerCase().endsWith('.avif'));
}
function k(e) {
    if (!g.Z.getCurrentConfig({ location: 'gif_picker' }).enabled) return e;
    let t = y.Z.toURLSafe(e);
    return null != t && M(t) ? (t.searchParams.set('animated', 'true'), t.toString()) : e;
}
class U extends r.PureComponent {
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: n, height: i },
                videoPool: r
            },
            ref: a
        } = this;
        if (e !== c.EO.VIDEO || null == a) return;
        let s = r.getElement();
        (s.oncanplay = this.handleCanPlay), (s.src = t), (s.width = n), (s.height = i), a.appendChild(s), (this._video = s);
    }
    componentDidUpdate(e) {
        let { width: t, height: n } = this.props.coords;
        null != this._video && (e.coords.width !== t || e.coords.height !== n) && ((this._video.width = t), (this._video.height = n));
    }
    componentWillUnmount() {
        this._mounted = !1;
        let { _image: e, _video: t } = this,
            { imagePool: n, videoPool: i } = this.props;
        null != e && ((this._image = null), n.poolElement(e)), null != t && ((this._video = null), i.poolElement(t));
    }
    renderGIF() {
        let {
                src: e,
                coords: { width: t, height: n }
            } = this.props,
            { loaded: r } = this.state;
        return r
            ? (0, i.jsx)('img', {
                  src: k(e),
                  width: t,
                  height: n,
                  className: S.gif,
                  alt: ''
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: r, focused: a } = this.props,
            { color: s, loaded: o } = this.state;
        return (0, i.jsxs)(f.P3F, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: S.result,
            'data-focused': a,
            onClick: this.handleClick,
            style: {
                backgroundColor: o ? void 0 : s,
                ...r
            },
            children: [P(n) ? null : this.renderGIF(), null != t ? t(e) : null]
        });
    }
    constructor(e) {
        super(e),
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
            });
        let { format: t, color: n, imagePool: i } = this.props;
        (this.state = {
            color: null == n ? l().sample(N) : n,
            loaded: !1
        }),
            P(t) || ((this._image = i.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src));
    }
}
class G extends r.PureComponent {
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === T.wI2.FAVORITES && ((0, _.t1)(T.wI2.FAVORITES), (0, _.hM)(t, T.wI2.FAVORITES, { limit: null }));
    }
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: i, data: r, resultQuery: a } = this.props;
        null != n && n(e),
            (0, _.R7)({
                type: i,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: r.length,
                totalResults: this.props.searchTotalResults,
                query: a,
                gifId: e.id
            });
    }
    getSectionHeight(e) {
        return 1 === e ? C : 0;
    }
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.jsx)('div', {
            className: S.emptyHint,
            children:
                null != e
                    ? (0, i.jsxs)('div', {
                          className: S.emptyHintCard,
                          children: [
                              t
                                  ? (0, i.jsx)(f.r7p, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: S.emptyHintFavorite
                                    })
                                  : null,
                              (0, i.jsx)('div', {
                                  className: S.emptyHintText,
                                  children: e
                              })
                          ]
                      })
                    : (0, i.jsx)('div', { className: S.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, i.jsx)(f.Ttm, {
            className: S.results,
            fade: !0,
            children: (0, i.jsxs)('div', {
                className: S.emptyHints,
                children: [this.renderEmptyFavorite(b.intl.string(b.t['3gyw4e']), !0), this.renderEmptyFavorite(b.intl.string(b.t.yThUi4)), this.renderEmptyFavorite(b.intl.string(b.t.MeP0SE)), Array.from({ length: 15 }).map((e, t) => (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(b.intl.string(b.t['5u99XV'])), Array.from({ length: 16 }).map((e, t) => (0, i.jsx)(r.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(b.intl.string(b.t.o6CLLy))]
            })
        });
    }
    render() {
        let { data: e, resultQuery: t, query: n, resultType: r } = this.props;
        return 0 === e.length && t === n && r !== T.wI2.TRENDING_GIFS
            ? r === T.wI2.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, i.jsx)(h.Z, {
                      message: b.intl.string(b.t['5dX4UF']),
                      className: S.noResults
                  })
            : (0, i.jsx)(
                  p.Z,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, i.jsx)(I.Z, {
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
            A(this, '_masonryRef', r.createRef()),
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
                let t;
                let { data: n } = this.props,
                    i = n.findIndex((t) => D(t) === e);
                -1 !== i && (t = n[i]), null != t && this.selectItem(t, i);
            }),
            A(this, 'handleClickItem', (e, t) => {
                this.selectItem(e, t);
            }),
            A(this, 'handleScroll', () => {
                let { resultQuery: e } = this.props,
                    { current: t } = this._masonryRef;
                if (null == t) return;
                let { scrollTop: n, scrollHeight: i } = t.getScrollerState();
                i - n <= R && (e !== this.prevResultQuery && (0, _.mO)(e), (this.prevResultQuery = e));
            }),
            A(this, 'renderItem', (e, t, n, r) => {
                if (e > 0) return null;
                let { focusedId: a } = this.state,
                    s = this.props.data[t];
                return null == s
                    ? null
                    : (0, i.jsx)(
                          U,
                          {
                              item: s,
                              index: t,
                              format: s.format,
                              src: s.src,
                              coords: n,
                              onClick: this.handleClickItem,
                              renderExtras: () =>
                                  (0, i.jsx)(v.Z, {
                                      className: S.favButton,
                                      ...s
                                  }),
                              focused: D(s) === a,
                              imagePool: this.props.imagePool,
                              videoPool: this.props.videoPool
                          },
                          r
                      );
            }),
            A(this, 'getItemHeight', (e, t, n) => {
                if (e > 0) return 0;
                let i = this.props.data[t];
                return null == i ? 0 : n * (i.height / i.width);
            }),
            A(this, 'getItemKey', (e, t) => {
                var n;
                if (e > 0) return null;
                let i = this.props.data[t];
                return null != i ? (null !== (n = i.id) && void 0 !== n ? n : i.src) : null;
            }),
            A(this, 'renderSection', (e, t, n) => {
                let { onSelectSuggestion: a, suggestions: s } = this.props;
                return 1 === e
                    ? (0, i.jsx)(
                          'div',
                          {
                              className: S.endContainer,
                              style: t,
                              children:
                                  s.length > 0
                                      ? (0, i.jsxs)(r.Fragment, {
                                            children: [
                                                (0, i.jsx)('div', {
                                                    className: S.endText,
                                                    children: b.intl.string(b.t['3JGJo6'])
                                                }),
                                                (0, i.jsx)('div', {
                                                    className: S.searchSuggestions,
                                                    children: s.map((e) =>
                                                        (0, i.jsx)(
                                                            f.zxk,
                                                            {
                                                                look: f.zxk.Looks.OUTLINED,
                                                                color: f.zxk.Colors.PRIMARY,
                                                                size: f.zxk.Sizes.SMALL,
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
                let { className: r, data: a, resultQuery: o, query: l, resultType: u } = this.props;
                return 0 === a.length && (o !== l || u === T.wI2.TRENDING_GIFS)
                    ? (0, i.jsx)(
                          f.GMG,
                          {
                              fade: !0,
                              className: s()(S.results, r),
                              sections: [O.length],
                              columns: e,
                              itemGutter: 12,
                              getItemKey: w,
                              getItemHeight: L,
                              renderItem: x,
                              chunkSize: 128
                          },
                          o
                      )
                    : (0, i.jsx)(
                          f.GMG,
                          {
                              ref: this._masonryRef,
                              fade: !0,
                              itemGutter: 12,
                              className: s()(S.results, r),
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
                          ''.concat(o, '-').concat(null != u ? u : '')
                      );
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
function B() {
    let { renderWindow: e } = r.useContext(m.ZP),
        t = e.document,
        [n] = r.useState(
            () =>
                new u.w(
                    () => t.createElement('img'),
                    (e) => {
                        (e.onload = null), (e.src = '');
                    }
                )
        ),
        [i] = r.useState(
            () =>
                new u.w(
                    () => {
                        let e = t.createElement('video');
                        return (e.className = S.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e;
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
        videoPool: i
    };
}
let Z = function (e) {
    let t = B();
    return (0, i.jsx)(G, {
        ...e,
        ...t
    });
};
