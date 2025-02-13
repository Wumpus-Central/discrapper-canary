n.d(t, {
    Z: () => R,
    r: () => S
}),
    n(47120);
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(748780),
    c = n(481060),
    d = n(112724),
    u = n(446411),
    m = n(468846),
    h = n(679056),
    p = n(44488),
    g = n(519160),
    _ = n(124347),
    x = n(283756),
    C = n(524444),
    v = n(585483),
    f = n(981631),
    I = n(385779);
function b(e, t, n) {
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
function j() {
    var e, t;
    let n = ((e = ['grayscale(', ')']), t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (j = function () {
            return n;
        }),
        n
    );
}
let S = {
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
    N = {
        width: 1920,
        height: 1080
    },
    E = {
        width: 1280,
        height: 720
    },
    y = (e) =>
        (0, C.lV)({
            ...e,
            className: I.videoWrapper,
            mediaPlayerClassName: I.mediaPlayer
        }),
    P = (e) => (0, a.jsx)(_.ZP, { ...e }),
    A = (e) => {
        let t,
            n,
            i,
            { item: r, size: l, onPlay: s, onEnded: o, onClick: d, playable: h, volume: p, isMuted: g, onVolumeChange: _, onMute: x } = e;
        if (r.type === f.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, f.n8r)(r.youtubeVideoId),
                ...N
            }),
                (n = {
                    url: ''.concat((0, f.ivE)(r.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...E
                }),
                (i = m.pn.YOUTUBE);
        else {
            let e = null != r.width ? r.width : 0,
                i = null != r.height ? r.height : 0;
            (t = {
                url: r.thumbnailSrc,
                width: e,
                height: i
            }),
                (n = {
                    url: r.src,
                    proxyURL: r.src,
                    width: e,
                    height: i
                });
        }
        let v = (0, a.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: i,
            allowFullScreen: !0,
            maxHeight: l.height,
            maxWidth: l.width,
            onPlay: s,
            onEnded: o,
            playable: h,
            className: I.video,
            volume: p,
            onVolumeChange: _,
            autoMute: g,
            onMute: x,
            autoPlay: h,
            renderVideoComponent: y,
            renderImageComponent: P,
            renderLinkComponent: C.iT
        });
        return h
            ? v
            : (0, a.jsx)(c.P3F, {
                  className: I.itemImageWrapper,
                  onClick: d,
                  children: v
              });
    },
    T = () =>
        (0, a.jsx)('div', {
            className: I.paginationVideoOverlay,
            children: (0, a.jsx)(x.Z, {
                inactive: !0,
                className: I.paginationVideoPlayPill,
                renderLinkComponent: C.iT
            })
        });
class L extends (i = r.PureComponent) {
    componentDidMount() {
        v.S.subscribe(f.CkL.CAROUSEL_PREV, this.manualPrevious), v.S.subscribe(f.CkL.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        v.S.unsubscribe(f.CkL.CAROUSEL_PREV, this.manualPrevious), v.S.unsubscribe(f.CkL.CAROUSEL_NEXT, this.manualNext);
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
            filter: o.Z.template(j(), n)
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
            { currentIndex: t, animate: n, hoveringPreviousItem: i, hoveringNextItem: r } = this.state,
            l = (0, a.jsx)(g.ZP, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: n,
                edgeItems: 2
            });
        return e.length <= 1
            ? l
            : (0, a.jsxs)('div', {
                  className: I.carouselButtonsContainer,
                  children: [
                      l,
                      (0, a.jsx)(p.am, {
                          onClick: this.manualPrevious,
                          className: s()(I.arrow, { [I.arrowHovered]: i })
                      }),
                      (0, a.jsx)(p.Pz, {
                          onClick: this.manualNext,
                          className: s()(I.arrow, { [I.arrowHovered]: r })
                      })
                  ]
              });
    }
    getPaginationSrc(e) {
        return e.type === f.s9s.YOUTUBE_VIDEO ? (0, f.n8r)(e.youtubeVideoId) : e.type === f.s9s.IMG ? e.src : e.type === f.s9s.VIDEO ? e.thumbnailSrc : null;
    }
    render() {
        let { items: e, className: t, autoplayInterval: n, paused: i } = this.props,
            { currentIndex: r, playingVideo: l, hasInteracted: s } = this.state;
        return (0, a.jsxs)(h.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: l || s || i,
            children: [
                this.renderCarousel(),
                (0, a.jsx)('div', {
                    className: I.pagination,
                    children: (0, a.jsx)(p.ZP, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: r,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: I.scroller,
                        align: e.length < 6 ? p.ZP.Align.LEFT : p.ZP.Align.CENTER
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                currentIndex: 0,
                animate: !0,
                playingVideo: !1,
                hasInteracted: !1,
                hoveringPreviousItem: !1,
                hoveringNextItem: !1,
                volume: 1,
                isMuted: !0
            }),
            b(this, 'getItemSize', () => {
                let { width: e } = this.props,
                    t = S.MEDIUM;
                return null != e && e < t.width && (t = S.SMALL), t;
            }),
            b(this, 'setItem', (e, t) => {
                let {
                        props: { items: n, onIntentionalChange: i },
                        state: { currentIndex: a }
                    } = this,
                    r = (0, g.gN)(a, n.length),
                    l = (0, g.gN)(e, n.length),
                    s = 1 === Math.abs(e - r) || (e === n.length - 1 && 0 === r) || (0 === e && r === n.length - 1);
                this.setState({
                    playingVideo: !1,
                    currentIndex: l,
                    animate: s,
                    hasInteracted: t
                }),
                    t && null != i && i(n[l], r, l);
            }),
            b(this, 'autoNext', () => {
                this.setItem(this.state.currentIndex + 1, !1);
            }),
            b(this, 'manualNext', () => {
                this.setItem(this.state.currentIndex + 1, !0);
            }),
            b(this, 'manualPrevious', () => {
                this.setItem(this.state.currentIndex - 1, !0);
            }),
            b(this, 'handlePlay', (e) =>
                this.setState({
                    playingVideo: !0,
                    hasInteracted: !e
                })
            ),
            b(this, 'handleEnded', () => {
                this.state.hasInteracted || this.autoNext();
            }),
            b(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            b(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            b(this, 'handleVideoClick', (e) => {
                this.setItem(e, !0);
            }),
            b(this, 'handleEdgeItemMouseLeave', () => {
                this.setState({
                    hoveringPreviousItem: !1,
                    hoveringNextItem: !1
                });
            }),
            b(this, 'renderCarouselImage', (e, t, n) =>
                n
                    ? (0, a.jsx)(c.P3F, {
                          onClick: () => this.handleCurrentItemClick(e, t),
                          className: I.itemImageWrapper,
                          children: (0, a.jsx)('img', {
                              src: e.src,
                              alt: '',
                              className: I.currentImage
                          })
                      })
                    : (0, a.jsx)(c.P3F, {
                          onClick: () => this.setItem(t, !0),
                          className: I.itemImageWrapper,
                          children: (0, a.jsx)('img', {
                              alt: '',
                              className: I.itemImage,
                              src: e.src,
                              draggable: !1
                          })
                      })
            ),
            b(this, 'renderItem', (e, t, n) => {
                let { currentIndex: i, volume: r, isMuted: l } = this.state,
                    c = t === (0, g.gN)(i, this.props.items.length);
                return (0, a.jsx)(o.Z.div, {
                    className: s()(I.item, { [I.currentItem]: c }),
                    style: null != n ? this.getStyle(t, n) : null,
                    onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === f.s9s.VIDEO || e.type === f.s9s.YOUTUBE_VIDEO
                            ? (0, a.jsx)(A, {
                                  item: e,
                                  size: this.getItemSize(),
                                  onPlay: this.handlePlay,
                                  onEnded: this.handleEnded,
                                  playable: c,
                                  onClick: () => this.handleVideoClick(t),
                                  volume: r,
                                  onVolumeChange: this.handleVolumeChange,
                                  isMuted: l,
                                  onMute: this.handleMute
                              })
                            : this.renderCarouselImage(e, t, c)
                });
            }),
            b(this, 'renderPaginationItem', (e, t) => {
                let { currentIndex: n } = this.state,
                    i = n === t;
                return (0, a.jsxs)(
                    'div',
                    {
                        className: s()(I.paginationItem, i ? I.selectedStorePaginationItem : I.unselectedStorePaginationItem),
                        children: [
                            (0, a.jsx)('img', {
                                alt: null == e.alt ? t : e.alt,
                                className: I.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }),
                            e.type === f.s9s.YOUTUBE_VIDEO || e.type === f.s9s.VIDEO ? (0, a.jsx)(T, {}) : null,
                            i ? (0, a.jsx)('div', { className: I.overlappingBorder }) : null
                        ]
                    },
                    'page-'.concat(t)
                );
            });
    }
}
b(L, 'defaultProps', {
    autoplayInterval: 8000,
    paused: !1
});
let R = (0, d.Z)(L);
