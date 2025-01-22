r.d(n, {
    PY: function () {
        return Z;
    },
    iR: function () {
        return G;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(944611),
    f = r(377108),
    _ = r(692547),
    h = r(481060),
    p = r(68405),
    m = r(527429),
    g = r(788911),
    E = r(40851),
    v = r(849727),
    I = r(198620),
    T = r(29909),
    b = r(591759),
    y = r(132748),
    S = r(981631),
    A = r(388032),
    N = r(561644);
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
let R = [_.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, _.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
    O = 220,
    D = 1220,
    L = Array.from({ length: 16 }).map((e, n) => ({
        id: ''.concat(n),
        height: Math.floor(100 * Math.random()) + 120
    }));
function x(e) {
    var n;
    return null !== (n = e.id) && void 0 !== n ? n : e.src;
}
function w(e, n) {
    let r = L[n];
    return null == r ? 0 : r.height;
}
function P(e, n, r, i) {
    if (!(e > 0))
        return null == L[n]
            ? null
            : (0, a.jsx)(
                  'div',
                  {
                      className: N.placeholder,
                      style: {
                          animationDelay: ''.concat(75 * n, 'ms'),
                          ...r
                      }
                  },
                  i
              );
}
function M(e, n) {
    var r, i;
    return e > 0 ? '' : null !== (i = null === (r = L[n]) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : '';
}
function k(e) {
    return e === f.EO.VIDEO;
}
function U(e) {
    return ((0, I._M)(e) || (0, I.MO)(e)) && (e.pathname.toLowerCase().endsWith('.webp') || e.pathname.toLowerCase().endsWith('.avif'));
}
function B(e) {
    if (!v.Z.getCurrentConfig({ location: 'gif_picker' }).enabled) return e;
    let n = b.Z.toURLSafe(e);
    return null != n && U(n) ? (n.searchParams.set('animated', 'true'), n.toString()) : e;
}
class G extends s.PureComponent {
    componentDidMount() {
        let {
            props: {
                format: e,
                src: n,
                coords: { width: r, height: i },
                videoPool: a
            },
            ref: s
        } = this;
        if (e !== f.EO.VIDEO || null == s) return;
        let o = a.getElement();
        (o.oncanplay = this.handleCanPlay), (o.src = n), (o.width = r), (o.height = i), s.appendChild(o), (this._video = o);
    }
    componentDidUpdate(e) {
        let { width: n, height: r } = this.props.coords;
        null != this._video && (e.coords.width !== n || e.coords.height !== r) && ((this._video.width = n), (this._video.height = r));
    }
    componentWillUnmount() {
        this._mounted = !1;
        let { _image: e, _video: n } = this,
            { imagePool: r, videoPool: i } = this.props;
        null != e && ((this._image = null), r.poolElement(e)), null != n && ((this._video = null), i.poolElement(n));
    }
    renderGIF() {
        let {
                src: e,
                coords: { width: n, height: r }
            } = this.props,
            { loaded: i } = this.state;
        return i
            ? (0, a.jsx)('img', {
                  src: B(e),
                  width: n,
                  height: r,
                  className: N.gif,
                  alt: ''
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: n, format: r, coords: i, focused: s } = this.props,
            { color: o, loaded: l } = this.state;
        return (0, a.jsxs)(h.Clickable, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: N.result,
            'data-focused': s,
            onClick: this.handleClick,
            style: {
                backgroundColor: l ? void 0 : o,
                ...i
            },
            children: [k(r) ? null : this.renderGIF(), null != n ? n(e) : null]
        });
    }
    constructor(e) {
        super(e),
            C(this, 'ref', null),
            C(this, '_video', null),
            C(this, '_image', null),
            C(this, '_mounted', !0),
            C(this, 'handleCanPlay', () => {
                this._mounted && this.setState({ loaded: !0 });
            }),
            C(this, 'handleClick', () => {
                let { onClick: e, item: n, index: r } = this.props;
                null != e && e(n, r);
            });
        let { format: n, color: r, imagePool: i } = this.props;
        (this.state = {
            color: null == r ? c().sample(R) : r,
            loaded: !1
        }),
            !k(n) && ((this._image = i.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src));
    }
}
class F extends s.PureComponent {
    componentDidMount() {
        let { resultType: e, data: n } = this.props;
        e === S.wI2.FAVORITES && ((0, p.t1)(S.wI2.FAVORITES), (0, p.hM)(n, S.wI2.FAVORITES, { limit: null }));
    }
    selectItem(e, n) {
        let { onSelectGIF: r, resultType: i, data: a, resultQuery: s } = this.props;
        null != r && r(e),
            (0, p.R7)({
                type: i,
                index: n,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: a.length,
                totalResults: this.props.searchTotalResults,
                query: s,
                gifId: e.id
            });
    }
    getSectionHeight(e) {
        return 1 === e ? O : 0;
    }
    renderEmptyFavorite(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, a.jsx)('div', {
            className: N.emptyHint,
            children:
                null != e
                    ? (0, a.jsxs)('div', {
                          className: N.emptyHintCard,
                          children: [
                              n
                                  ? (0, a.jsx)(h.StarIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: N.emptyHintFavorite
                                    })
                                  : null,
                              (0, a.jsx)('div', {
                                  className: N.emptyHintText,
                                  children: e
                              })
                          ]
                      })
                    : (0, a.jsx)('div', { className: N.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, a.jsx)(h.Scroller, {
            className: N.results,
            fade: !0,
            children: (0, a.jsxs)('div', {
                className: N.emptyHints,
                children: [this.renderEmptyFavorite(A.intl.string(A.t['3gyw4e']), !0), this.renderEmptyFavorite(A.intl.string(A.t.yThUi4)), this.renderEmptyFavorite(A.intl.string(A.t.MeP0SE)), Array.from({ length: 15 }).map((e, n) => (0, a.jsx)(s.Fragment, { children: this.renderEmptyFavorite() }, n)), this.renderEmptyFavorite(A.intl.string(A.t['5u99XV'])), Array.from({ length: 16 }).map((e, n) => (0, a.jsx)(s.Fragment, { children: this.renderEmptyFavorite() }, n)), this.renderEmptyFavorite(A.intl.string(A.t.o6CLLy))]
            })
        });
    }
    render() {
        let { data: e, resultQuery: n, query: r, resultType: i } = this.props;
        return 0 === e.length && n === r && i !== S.wI2.TRENDING_GIFS
            ? i === S.wI2.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, a.jsx)(g.Z, {
                      message: A.intl.string(A.t['5dX4UF']),
                      className: N.noResults
                  })
            : (0, a.jsx)(
                  m.Z,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, a.jsx)(y.Z, {
                          desiredItemWidth: 200,
                          maxColumns: 8,
                          children: this.renderContent
                      })
                  },
                  n
              );
    }
    constructor(...e) {
        super(...e),
            C(this, '_masonryRef', s.createRef()),
            C(this, 'prevResultQuery', null),
            C(this, 'state', { focusedId: null }),
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
                let n;
                let { data: r } = this.props,
                    i = r.findIndex((n) => x(n) === e);
                -1 !== i && (n = r[i]), null != n && this.selectItem(n, i);
            }),
            C(this, 'handleClickItem', (e, n) => {
                this.selectItem(e, n);
            }),
            C(this, 'handleScroll', () => {
                let { resultQuery: e } = this.props,
                    { current: n } = this._masonryRef;
                if (null == n) return;
                let { scrollTop: r, scrollHeight: i } = n.getScrollerState();
                i - r <= D && (e !== this.prevResultQuery && (0, p.mO)(e), (this.prevResultQuery = e));
            }),
            C(this, 'renderItem', (e, n, r, i) => {
                if (e > 0) return null;
                let { focusedId: s } = this.state,
                    o = this.props.data[n];
                return null == o
                    ? null
                    : (0, a.jsx)(
                          G,
                          {
                              item: o,
                              index: n,
                              format: o.format,
                              src: o.src,
                              coords: r,
                              onClick: this.handleClickItem,
                              renderExtras: () =>
                                  (0, a.jsx)(T.Z, {
                                      className: N.favButton,
                                      ...o
                                  }),
                              focused: x(o) === s,
                              imagePool: this.props.imagePool,
                              videoPool: this.props.videoPool
                          },
                          i
                      );
            }),
            C(this, 'getItemHeight', (e, n, r) => {
                if (e > 0) return 0;
                let i = this.props.data[n];
                return null == i ? 0 : r * (i.height / i.width);
            }),
            C(this, 'getItemKey', (e, n) => {
                var r;
                if (e > 0) return null;
                let i = this.props.data[n];
                return null != i ? (null !== (r = i.id) && void 0 !== r ? r : i.src) : null;
            }),
            C(this, 'renderSection', (e, n, r) => {
                let { onSelectSuggestion: i, suggestions: o } = this.props;
                return 1 === e
                    ? (0, a.jsx)(
                          'div',
                          {
                              className: N.endContainer,
                              style: n,
                              children:
                                  o.length > 0
                                      ? (0, a.jsxs)(s.Fragment, {
                                            children: [
                                                (0, a.jsx)('div', {
                                                    className: N.endText,
                                                    children: A.intl.string(A.t['3JGJo6'])
                                                }),
                                                (0, a.jsx)('div', {
                                                    className: N.searchSuggestions,
                                                    children: o.map((e) =>
                                                        (0, a.jsx)(
                                                            h.Button,
                                                            {
                                                                look: h.Button.Looks.OUTLINED,
                                                                color: h.Button.Colors.PRIMARY,
                                                                size: h.Button.Sizes.SMALL,
                                                                className: N.searchSuggestion,
                                                                onClick: () => {
                                                                    i(e);
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
                          r
                      )
                    : null;
            }),
            C(this, 'renderContent', (e, n, r) => {
                let { className: i, data: s, resultQuery: o, query: u, resultType: c } = this.props;
                return 0 === s.length && (o !== u || c === S.wI2.TRENDING_GIFS)
                    ? (0, a.jsx)(
                          h.MasonryList,
                          {
                              fade: !0,
                              className: l()(N.results, i),
                              sections: [L.length],
                              columns: e,
                              itemGutter: 12,
                              getItemKey: M,
                              getItemHeight: w,
                              renderItem: P,
                              chunkSize: 128
                          },
                          o
                      )
                    : (0, a.jsx)(
                          h.MasonryList,
                          {
                              ref: this._masonryRef,
                              fade: !0,
                              itemGutter: 12,
                              className: l()(N.results, i),
                              columns: e,
                              sections: [s.length, 0],
                              getItemKey: this.getItemKey,
                              getItemHeight: this.getItemHeight,
                              renderItem: this.renderItem,
                              getSectionHeight: this.getSectionHeight,
                              renderSection: this.renderSection,
                              onScroll: this.handleScroll,
                              chunkSize: 128
                          },
                          ''.concat(o, '-').concat(null != c ? c : '')
                      );
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
function Z() {
    let { renderWindow: e } = s.useContext(E.ZP),
        n = e.document,
        [r] = s.useState(
            () =>
                new d.w(
                    () => n.createElement('img'),
                    (e) => {
                        (e.onload = null), (e.src = '');
                    }
                )
        ),
        [i] = s.useState(
            () =>
                new d.w(
                    () => {
                        let e = n.createElement('video');
                        return (e.className = N.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e;
                    },
                    (e) => {
                        (e.src = ''), (e.oncanplay = null);
                        let { parentNode: n } = e;
                        null != n && n.removeChild(e);
                    }
                )
        );
    return {
        imagePool: r,
        videoPool: i
    };
}
let V = function (e) {
    let n = Z();
    return (0, a.jsx)(F, {
        ...e,
        ...n
    });
};
n.ZP = V;
