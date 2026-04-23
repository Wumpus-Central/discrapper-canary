a.d(t, { s: () => b });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(615300),
    o = a(939249),
    c = a(456412),
    d = a(871751),
    u = a(259407),
    h = a(133296),
    m = a(848752),
    p = a(452282),
    _ = a(619517),
    g = a(893598),
    x = a(652176),
    A = a(203982),
    f = a(652215),
    C = a(795574);
let v = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${f.NzX}`,
    b = { SMALL: { width: 640, height: 360, margin: 15 }, MEDIUM: { width: 880, height: 495, margin: 20 } },
    j = { width: 1920, height: 1080 },
    I = { width: 1280, height: 720 },
    E = (e) => (0, x.$o)({ ...e, className: C.tN, mediaPlayerClassName: C.yf }),
    N = (e) => (0, n.jsx)(_.Ay, { ...e }),
    S = (e) => {
        let t,
            a,
            l,
            {
                item: i,
                size: s,
                onPlay: r,
                onEnded: c,
                onClick: h,
                playable: m,
                volume: p,
                isMuted: _,
                onVolumeChange: g,
                onMute: A,
            } = e;
        if (i.type === f.geh.YOUTUBE_VIDEO)
            (t = { url: (0, f.PE$)(i.youtubeVideoId), ...j }),
                (a = { url: `${(0, f.uJ2)(i.youtubeVideoId)}?${v}`, ...I }),
                (l = u.mt.YOUTUBE);
        else {
            let e = null != i.width ? i.width : 0,
                n = null != i.height ? i.height : 0;
            (t = { url: i.thumbnailSrc, width: e, height: n }),
                (a = { url: i.src, proxyURL: i.src, width: e, height: n });
        }
        let b = (0, n.jsx)(d.rr, {
            href: null,
            thumbnail: t,
            video: a,
            provider: l,
            allowFullScreen: !0,
            maxHeight: s.height,
            maxWidth: s.width,
            onPlay: r,
            onEnded: c,
            playable: m,
            className: C.Ki,
            volume: p,
            onVolumeChange: g,
            autoMute: _,
            onMute: A,
            autoPlay: m,
            renderVideoComponent: E,
            renderImageComponent: N,
            renderLinkComponent: x.bU,
        });
        return m ? b : (0, n.jsx)(o.D, { className: C.AU, onClick: h, children: b });
    },
    y = () =>
        (0, n.jsx)("div", {
            className: C.eM,
            children: (0, n.jsx)(g.A, { inactive: !0, className: C.J6, renderLinkComponent: x.bU }),
        });
class P extends l.PureComponent {
    static defaultProps = { autoplayInterval: 8e3, paused: !1 };
    state = {
        currentIndex: 0,
        animate: !0,
        playingVideo: !1,
        hasInteracted: !1,
        hoveringPreviousItem: !1,
        hoveringNextItem: !1,
        volume: 1,
        isMuted: !0,
    };
    componentDidMount() {
        A._.subscribe(f.jej.CAROUSEL_PREV, this.manualPrevious), A._.subscribe(f.jej.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        A._.unsubscribe(f.jej.CAROUSEL_PREV, this.manualPrevious),
            A._.unsubscribe(f.jej.CAROUSEL_NEXT, this.manualNext);
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = b.MEDIUM;
        return null != e && e < t.width && (t = b.SMALL), t;
    };
    getStyle(e, t) {
        let a = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: r.A.Extrapolate.CLAMP });
        return {
            opacity: t.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1], extrapolate: r.A.Extrapolate.CLAMP }),
            filter: r.A.template`grayscale(${a})`,
        };
    }
    setItem = (e, t) => {
        let {
                props: { items: a, onIntentionalChange: n },
                state: { currentIndex: l },
            } = this,
            i = (0, p.U3)(l, a.length),
            s = (0, p.U3)(e, a.length),
            r = 1 === Math.abs(e - i) || (e === a.length - 1 && 0 === i) || (0 === e && i === a.length - 1);
        this.setState({ playingVideo: !1, currentIndex: s, animate: r, hasInteracted: t }),
            t && null != n && n(a[s], i, s);
    };
    autoNext = () => {
        this.setItem(this.state.currentIndex + 1, !1);
    };
    manualNext = () => {
        this.setItem(this.state.currentIndex + 1, !0);
    };
    manualPrevious = () => {
        this.setItem(this.state.currentIndex - 1, !0);
    };
    handlePlay = (e) => this.setState({ playingVideo: !0, hasInteracted: !e });
    handleEnded = () => {
        this.state.hasInteracted || this.autoNext();
    };
    handleVolumeChange = (e) => {
        this.setState({ volume: e, hasInteracted: !0 });
    };
    handleMute = (e) => {
        this.setState({ isMuted: e, hasInteracted: !0 });
    };
    handleVideoClick = (e) => {
        this.setItem(e, !0);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: a } = this.props;
        null != a && a(e, t), this.setState({ hasInteracted: !0 });
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t ? this.setState({ hoveringPreviousItem: !0 }) : e > t && this.setState({ hoveringNextItem: !0 });
    }
    handleEdgeItemMouseLeave = () => {
        this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
    };
    renderCarouselImage = (e, t, a) =>
        a
            ? (0, n.jsx)(o.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: C.AU,
                  children: (0, n.jsx)("img", { src: e.src, alt: "", className: C.NP }),
              })
            : (0, n.jsx)(o.D, {
                  onClick: () => this.setItem(t, !0),
                  className: C.AU,
                  children: (0, n.jsx)("img", { alt: "", className: C.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, a) => {
        let { currentIndex: l, volume: i, isMuted: o } = this.state,
            c = t === (0, p.U3)(l, this.props.items.length);
        return (0, n.jsx)(r.A.div, {
            className: s()(C.AS, { [C.Xt]: c }),
            style: null != a ? this.getStyle(t, a) : null,
            onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === f.geh.VIDEO || e.type === f.geh.YOUTUBE_VIDEO
                    ? (0, n.jsx)(S, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: c,
                          onClick: () => this.handleVideoClick(t),
                          volume: i,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: o,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, c),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: a, hoveringPreviousItem: l, hoveringNextItem: i } = this.state,
            r = (0, n.jsx)(p.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: a,
                edgeItems: 2,
            });
        return e.length <= 1
            ? r
            : (0, n.jsxs)("div", {
                  className: C.HY,
                  children: [
                      r,
                      (0, n.jsx)(m.Q8, { onClick: this.manualPrevious, className: s()(C.UE, { [C.h_]: l }) }),
                      (0, n.jsx)(m.Oj, { onClick: this.manualNext, className: s()(C.UE, { [C.h_]: i }) }),
                  ],
              });
    }
    getPaginationSrc(e) {
        return e.type === f.geh.YOUTUBE_VIDEO
            ? (0, f.PE$)(e.youtubeVideoId)
            : e.type === f.geh.IMG
              ? e.src
              : e.type === f.geh.VIDEO
                ? e.thumbnailSrc
                : null;
    }
    renderPaginationItem = (e, t) => {
        let { currentIndex: a } = this.state,
            l = a === t;
        return (0, n.jsxs)(
            "div",
            {
                className: s()(C.Yw, l ? C.sM : C.N7),
                children: [
                    (0, n.jsx)("img", {
                        alt: null == e.alt ? t : e.alt,
                        className: C.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === f.geh.YOUTUBE_VIDEO || e.type === f.geh.VIDEO ? (0, n.jsx)(y, {}) : null,
                    l ? (0, n.jsx)("div", { className: C.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: a, paused: l } = this.props,
            { currentIndex: i, playingVideo: s, hasInteracted: r } = this.state;
        return (0, n.jsxs)(h.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: a,
            className: t,
            disable: s || r || l,
            children: [
                this.renderCarousel(),
                (0, n.jsx)("div", {
                    className: C.X$,
                    children: (0, n.jsx)(m.Ay, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: i,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: C.XG,
                        align: e.length < 6 ? m.Ay.Align.LEFT : m.Ay.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, c.A)(P);
