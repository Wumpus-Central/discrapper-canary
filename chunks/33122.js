n.d(t, {
    Z: () => R,
    r: () => O
}),
    n(388685);
var r,
    i = n(200651),
    a = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(748780),
    c = n(481060),
    d = n(112724),
    u = n(446411),
    p = n(468846),
    m = n(679056),
    h = n(44488),
    g = n(519160),
    _ = n(124347),
    f = n(283756),
    b = n(524444),
    x = n(585483),
    v = n(981631),
    C = n(361183);
function j(e, t, n) {
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
function y(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function I() {
    var e, t;
    let n = ((e = ['grayscale(', ')']), t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (I = function () {
            return n;
        }),
        n
    );
}
let O = {
        SMALL: {
            width: 640,
            height: 360,
            margin: 15
        },
        MEDIUM: {
            width: 880,
            height: 495,
            margin: 20
        }
    },
    P = {
        width: 1920,
        height: 1080
    },
    S = {
        width: 1280,
        height: 720
    },
    E = (e) => {
        var t, n;
        return (0, b.lV)(
            ((t = y({}, e)),
            (n = n =
                {
                    className: C.videoWrapper,
                    mediaPlayerClassName: C.mediaPlayer
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t)
        );
    },
    N = (e) => (0, i.jsx)(_.ZP, y({}, e)),
    T = (e) => {
        let t,
            n,
            r,
            { item: a, size: l, onPlay: s, onEnded: o, onClick: d, playable: m, volume: h, isMuted: g, onVolumeChange: _, onMute: f } = e;
        if (a.type === v.s9s.YOUTUBE_VIDEO) (t = y({ url: (0, v.n8r)(a.youtubeVideoId) }, P)), (n = y({ url: ''.concat((0, v.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1') }, S)), (r = p.pn.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                r = null != a.height ? a.height : 0;
            (t = {
                url: a.thumbnailSrc,
                width: e,
                height: r
            }),
                (n = {
                    url: a.src,
                    proxyURL: a.src,
                    width: e,
                    height: r
                });
        }
        let x = (0, i.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: r,
            allowFullScreen: !0,
            maxHeight: l.height,
            maxWidth: l.width,
            onPlay: s,
            onEnded: o,
            playable: m,
            className: C.video,
            volume: h,
            onVolumeChange: _,
            autoMute: g,
            onMute: f,
            autoPlay: m,
            renderVideoComponent: E,
            renderImageComponent: N,
            renderLinkComponent: b.iT
        });
        return m
            ? x
            : (0, i.jsx)(c.P3F, {
                  className: C.itemImageWrapper,
                  onClick: d,
                  children: x
              });
    },
    A = () =>
        (0, i.jsx)('div', {
            className: C.paginationVideoOverlay,
            children: (0, i.jsx)(f.Z, {
                inactive: !0,
                className: C.paginationVideoPlayPill,
                renderLinkComponent: b.iT
            })
        });
class L extends (r = a.PureComponent) {
    componentDidMount() {
        x.S.subscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious), x.S.subscribe(v.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        x.S.unsubscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious), x.S.unsubscribe(v.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    getStyle(e, t) {
        let n = t.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: o.Z.Extrapolate.CLAMP
        });
        return {
            opacity: t.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1],
                extrapolate: o.Z.Extrapolate.CLAMP
            }),
            filter: o.Z.template(I(), n)
        };
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t ? this.setState({ hoveringPreviousItem: !0 }) : e > t && this.setState({ hoveringNextItem: !0 });
    }
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: n, hoveringPreviousItem: r, hoveringNextItem: a } = this.state,
            l = (0, i.jsx)(g.ZP, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: n,
                edgeItems: 2
            });
        return e.length <= 1
            ? l
            : (0, i.jsxs)('div', {
                  className: C.carouselButtonsContainer,
                  children: [
                      l,
                      (0, i.jsx)(h.am, {
                          onClick: this.manualPrevious,
                          className: s()(C.arrow, { [C.arrowHovered]: r })
                      }),
                      (0, i.jsx)(h.Pz, {
                          onClick: this.manualNext,
                          className: s()(C.arrow, { [C.arrowHovered]: a })
                      })
                  ]
              });
    }
    getPaginationSrc(e) {
        return e.type === v.s9s.YOUTUBE_VIDEO ? (0, v.n8r)(e.youtubeVideoId) : e.type === v.s9s.IMG ? e.src : e.type === v.s9s.VIDEO ? e.thumbnailSrc : null;
    }
    render() {
        let { items: e, className: t, autoplayInterval: n, paused: r } = this.props,
            { currentIndex: a, playingVideo: l, hasInteracted: s } = this.state;
        return (0, i.jsxs)(m.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: l || s || r,
            children: [
                this.renderCarousel(),
                (0, i.jsx)('div', {
                    className: C.pagination,
                    children: (0, i.jsx)(h.ZP, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: a,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: C.scroller,
                        align: e.length < 6 ? h.ZP.Align.LEFT : h.ZP.Align.CENTER
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            j(this, 'state', {
                currentIndex: 0,
                animate: !0,
                playingVideo: !1,
                hasInteracted: !1,
                hoveringPreviousItem: !1,
                hoveringNextItem: !1,
                volume: 1,
                isMuted: !0
            }),
            j(this, 'getItemSize', () => {
                let { width: e } = this.props,
                    t = O.MEDIUM;
                return null != e && e < t.width && (t = O.SMALL), t;
            }),
            j(this, 'setItem', (e, t) => {
                let {
                        props: { items: n, onIntentionalChange: r },
                        state: { currentIndex: i }
                    } = this,
                    a = (0, g.gN)(i, n.length),
                    l = (0, g.gN)(e, n.length),
                    s = 1 === Math.abs(e - a) || (e === n.length - 1 && 0 === a) || (0 === e && a === n.length - 1);
                this.setState({
                    playingVideo: !1,
                    currentIndex: l,
                    animate: s,
                    hasInteracted: t
                }),
                    t && null != r && r(n[l], a, l);
            }),
            j(this, 'autoNext', () => {
                this.setItem(this.state.currentIndex + 1, !1);
            }),
            j(this, 'manualNext', () => {
                this.setItem(this.state.currentIndex + 1, !0);
            }),
            j(this, 'manualPrevious', () => {
                this.setItem(this.state.currentIndex - 1, !0);
            }),
            j(this, 'handlePlay', (e) =>
                this.setState({
                    playingVideo: !0,
                    hasInteracted: !e
                })
            ),
            j(this, 'handleEnded', () => {
                this.state.hasInteracted || this.autoNext();
            }),
            j(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            j(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            j(this, 'handleVideoClick', (e) => {
                this.setItem(e, !0);
            }),
            j(this, 'handleEdgeItemMouseLeave', () => {
                this.setState({
                    hoveringPreviousItem: !1,
                    hoveringNextItem: !1
                });
            }),
            j(this, 'renderCarouselImage', (e, t, n) =>
                n
                    ? (0, i.jsx)(c.P3F, {
                          onClick: () => this.handleCurrentItemClick(e, t),
                          className: C.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              src: e.src,
                              alt: '',
                              className: C.currentImage
                          })
                      })
                    : (0, i.jsx)(c.P3F, {
                          onClick: () => this.setItem(t, !0),
                          className: C.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              alt: '',
                              className: C.itemImage,
                              src: e.src,
                              draggable: !1
                          })
                      })
            ),
            j(this, 'renderItem', (e, t, n) => {
                let { currentIndex: r, volume: a, isMuted: l } = this.state,
                    c = t === (0, g.gN)(r, this.props.items.length);
                return (0, i.jsx)(o.Z.div, {
                    className: s()(C.item, { [C.currentItem]: c }),
                    style: null != n ? this.getStyle(t, n) : null,
                    onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === v.s9s.VIDEO || e.type === v.s9s.YOUTUBE_VIDEO
                            ? (0, i.jsx)(T, {
                                  item: e,
                                  size: this.getItemSize(),
                                  onPlay: this.handlePlay,
                                  onEnded: this.handleEnded,
                                  playable: c,
                                  onClick: () => this.handleVideoClick(t),
                                  volume: a,
                                  onVolumeChange: this.handleVolumeChange,
                                  isMuted: l,
                                  onMute: this.handleMute
                              })
                            : this.renderCarouselImage(e, t, c)
                });
            }),
            j(this, 'renderPaginationItem', (e, t) => {
                let { currentIndex: n } = this.state,
                    r = n === t;
                return (0, i.jsxs)(
                    'div',
                    {
                        className: s()(C.paginationItem, r ? C.selectedStorePaginationItem : C.unselectedStorePaginationItem),
                        children: [
                            (0, i.jsx)('img', {
                                alt: null == e.alt ? t : e.alt,
                                className: C.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }),
                            e.type === v.s9s.YOUTUBE_VIDEO || e.type === v.s9s.VIDEO ? (0, i.jsx)(A, {}) : null,
                            r ? (0, i.jsx)('div', { className: C.overlappingBorder }) : null
                        ]
                    },
                    'page-'.concat(t)
                );
            });
    }
}
j(L, 'defaultProps', {
    autoplayInterval: 8000,
    paused: !1
});
let R = (0, d.Z)(L);
