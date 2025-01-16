n.d(t, {
    r: function () {
        return P;
    }
}),
    n(47120);
var s,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(748780),
    d = n(481060),
    h = n(112724),
    u = n(446411),
    c = n(468846),
    m = n(679056),
    p = n(44488),
    g = n(519160),
    C = n(124347),
    I = n(283756),
    x = n(524444),
    v = n(585483),
    f = n(981631),
    E = n(396587);
function N(e, t, n) {
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
function b() {
    var e, t;
    let n = ((e = ['grayscale(', ')']), !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (b = function () {
            return n;
        }),
        n
    );
}
let P = {
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
    S = {
        width: 1920,
        height: 1080
    },
    L = {
        width: 1280,
        height: 720
    },
    y = (e) =>
        (0, x.lV)({
            ...e,
            className: E.videoWrapper,
            mediaPlayerClassName: E.mediaPlayer
        }),
    M = (e) => (0, i.jsx)(C.ZP, { ...e }),
    j = (e) => {
        let t,
            n,
            s,
            { item: a, size: r, onPlay: l, onEnded: o, onClick: h, playable: m, volume: p, isMuted: g, onVolumeChange: C, onMute: I } = e;
        if (a.type === f.s9s.YOUTUBE_VIDEO)
            (t = {
                url: (0, f.n8r)(a.youtubeVideoId),
                ...S
            }),
                (n = {
                    url: ''.concat((0, f.ivE)(a.youtubeVideoId), '?').concat('rel=0&iv_load_policy=3&showinfo=0&modestbranding=1'),
                    ...L
                }),
                (s = c.pn.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                s = null != a.height ? a.height : 0;
            (t = {
                url: a.thumbnailSrc,
                width: e,
                height: s
            }),
                (n = {
                    url: a.src,
                    proxyURL: a.src,
                    width: e,
                    height: s
                });
        }
        let v = (0, i.jsx)(u.BC, {
            href: null,
            thumbnail: t,
            video: n,
            provider: s,
            allowFullScreen: !0,
            maxHeight: r.height,
            maxWidth: r.width,
            onPlay: l,
            onEnded: o,
            playable: m,
            className: E.video,
            volume: p,
            onVolumeChange: C,
            autoMute: g,
            onMute: I,
            autoPlay: m,
            renderVideoComponent: y,
            renderImageComponent: M,
            renderLinkComponent: x.iT
        });
        return m
            ? v
            : (0, i.jsx)(d.Clickable, {
                  className: E.itemImageWrapper,
                  onClick: h,
                  children: v
              });
    },
    _ = () =>
        (0, i.jsx)('div', {
            className: E.paginationVideoOverlay,
            children: (0, i.jsx)(I.Z, {
                inactive: !0,
                className: E.paginationVideoPlayPill,
                renderLinkComponent: x.iT
            })
        });
class A extends (s = a.PureComponent) {
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
            filter: o.Z.template(b(), n)
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
            { currentIndex: t, animate: n, hoveringPreviousItem: s, hoveringNextItem: a } = this.state,
            r = (0, i.jsx)(g.ZP, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: n,
                edgeItems: 2
            });
        return e.length <= 1
            ? r
            : (0, i.jsxs)('div', {
                  className: E.carouselButtonsContainer,
                  children: [
                      r,
                      (0, i.jsx)(p.am, {
                          onClick: this.manualPrevious,
                          className: l()(E.arrow, { [E.arrowHovered]: s })
                      }),
                      (0, i.jsx)(p.Pz, {
                          onClick: this.manualNext,
                          className: l()(E.arrow, { [E.arrowHovered]: a })
                      })
                  ]
              });
    }
    getPaginationSrc(e) {
        return e.type === f.s9s.YOUTUBE_VIDEO ? (0, f.n8r)(e.youtubeVideoId) : e.type === f.s9s.IMG ? e.src : e.type === f.s9s.VIDEO ? e.thumbnailSrc : null;
    }
    render() {
        let { items: e, className: t, autoplayInterval: n, paused: s } = this.props,
            { currentIndex: a, playingVideo: r, hasInteracted: l } = this.state;
        return (0, i.jsxs)(m.Z, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: r || l || s,
            children: [
                this.renderCarousel(),
                (0, i.jsx)('div', {
                    className: E.pagination,
                    children: (0, i.jsx)(p.ZP, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: a,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: E.scroller,
                        align: e.length < 6 ? p.ZP.Align.LEFT : p.ZP.Align.CENTER
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                currentIndex: 0,
                animate: !0,
                playingVideo: !1,
                hasInteracted: !1,
                hoveringPreviousItem: !1,
                hoveringNextItem: !1,
                volume: 1,
                isMuted: !0
            }),
            N(this, 'getItemSize', () => {
                let { width: e } = this.props,
                    t = P.MEDIUM;
                return null != e && e < t.width && (t = P.SMALL), t;
            }),
            N(this, 'setItem', (e, t) => {
                let {
                        props: { items: n, onIntentionalChange: s },
                        state: { currentIndex: i }
                    } = this,
                    a = (0, g.gN)(i, n.length),
                    r = (0, g.gN)(e, n.length),
                    l = 1 === Math.abs(e - a) || (e === n.length - 1 && 0 === a) || (0 === e && a === n.length - 1);
                this.setState({
                    playingVideo: !1,
                    currentIndex: r,
                    animate: l,
                    hasInteracted: t
                }),
                    t && null != s && s(n[r], a, r);
            }),
            N(this, 'autoNext', () => {
                this.setItem(this.state.currentIndex + 1, !1);
            }),
            N(this, 'manualNext', () => {
                this.setItem(this.state.currentIndex + 1, !0);
            }),
            N(this, 'manualPrevious', () => {
                this.setItem(this.state.currentIndex - 1, !0);
            }),
            N(this, 'handlePlay', (e) =>
                this.setState({
                    playingVideo: !0,
                    hasInteracted: !e
                })
            ),
            N(this, 'handleEnded', () => {
                !this.state.hasInteracted && this.autoNext();
            }),
            N(this, 'handleVolumeChange', (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0
                });
            }),
            N(this, 'handleMute', (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0
                });
            }),
            N(this, 'handleVideoClick', (e) => {
                this.setItem(e, !0);
            }),
            N(this, 'handleEdgeItemMouseLeave', () => {
                this.setState({
                    hoveringPreviousItem: !1,
                    hoveringNextItem: !1
                });
            }),
            N(this, 'renderCarouselImage', (e, t, n) =>
                n
                    ? (0, i.jsx)(d.Clickable, {
                          onClick: () => this.handleCurrentItemClick(e, t),
                          className: E.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              src: e.src,
                              alt: '',
                              className: E.currentImage
                          })
                      })
                    : (0, i.jsx)(d.Clickable, {
                          onClick: () => this.setItem(t, !0),
                          className: E.itemImageWrapper,
                          children: (0, i.jsx)('img', {
                              alt: '',
                              className: E.itemImage,
                              src: e.src,
                              draggable: !1
                          })
                      })
            ),
            N(this, 'renderItem', (e, t, n) => {
                let { currentIndex: s, volume: a, isMuted: r } = this.state,
                    d = t === (0, g.gN)(s, this.props.items.length);
                return (0, i.jsx)(o.Z.div, {
                    className: l()(E.item, { [E.currentItem]: d }),
                    style: null != n ? this.getStyle(t, n) : null,
                    onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === f.s9s.VIDEO || e.type === f.s9s.YOUTUBE_VIDEO
                            ? (0, i.jsx)(j, {
                                  item: e,
                                  size: this.getItemSize(),
                                  onPlay: this.handlePlay,
                                  onEnded: this.handleEnded,
                                  playable: d,
                                  onClick: () => this.handleVideoClick(t),
                                  volume: a,
                                  onVolumeChange: this.handleVolumeChange,
                                  isMuted: r,
                                  onMute: this.handleMute
                              })
                            : this.renderCarouselImage(e, t, d)
                });
            }),
            N(this, 'renderPaginationItem', (e, t) => {
                let { currentIndex: n } = this.state,
                    s = n === t;
                return (0, i.jsxs)(
                    'div',
                    {
                        className: l()(E.paginationItem, s ? E.selectedStorePaginationItem : E.unselectedStorePaginationItem),
                        children: [
                            (0, i.jsx)('img', {
                                alt: null == e.alt ? t : e.alt,
                                className: E.storePaginationImg,
                                src: this.getPaginationSrc(e),
                                draggable: !1
                            }),
                            e.type === f.s9s.YOUTUBE_VIDEO || e.type === f.s9s.VIDEO ? (0, i.jsx)(_, {}) : null,
                            s ? (0, i.jsx)('div', { className: E.overlappingBorder }) : null
                        ]
                    },
                    'page-'.concat(t)
                );
            });
    }
}
N(A, 'defaultProps', {
    autoplayInterval: 8000,
    paused: !1
}),
    (t.Z = (0, h.Z)(A));
