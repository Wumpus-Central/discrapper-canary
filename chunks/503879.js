a.d(t, { A: () => R, s: () => f });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(615300),
    o = a(397927),
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
    C = a(652215),
    v = a(6361);
let b = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${C.NzX}`,
    f = { SMALL: { width: 640, height: 360, margin: 15 }, MEDIUM: { width: 880, height: 495, margin: 20 } },
    j = { width: 1920, height: 1080 },
    I = { width: 1280, height: 720 },
    E = (e) => (0, x.$o)({ ...e, className: v.tN, mediaPlayerClassName: v.yf }),
    S = (e) => (0, n.jsx)(_.Ay, { ...e }),
    N = (e) => {
        let t,
            a,
            i,
            {
                item: s,
                size: l,
                onPlay: r,
                onEnded: c,
                onClick: h,
                playable: m,
                volume: p,
                isMuted: _,
                onVolumeChange: g,
                onMute: A,
            } = e;
        if (s.type === C.geh.YOUTUBE_VIDEO)
            (t = { url: (0, C.PE$)(s.youtubeVideoId), ...j }),
                (a = { url: `${(0, C.uJ2)(s.youtubeVideoId)}?${b}`, ...I }),
                (i = u.mt.YOUTUBE);
        else {
            let e = null != s.width ? s.width : 0,
                n = null != s.height ? s.height : 0;
            (t = { url: s.thumbnailSrc, width: e, height: n }),
                (a = { url: s.src, proxyURL: s.src, width: e, height: n });
        }
        let f = (0, n.jsx)(d.rr, {
            href: null,
            thumbnail: t,
            video: a,
            provider: i,
            allowFullScreen: !0,
            maxHeight: l.height,
            maxWidth: l.width,
            onPlay: r,
            onEnded: c,
            playable: m,
            className: v.Ki,
            volume: p,
            onVolumeChange: g,
            autoMute: _,
            onMute: A,
            autoPlay: m,
            renderVideoComponent: E,
            renderImageComponent: S,
            renderLinkComponent: x.bU,
        });
        return m ? f : (0, n.jsx)(o.DUT, { className: v.AU, onClick: h, children: f });
    },
    y = () =>
        (0, n.jsx)("div", {
            className: v.eM,
            children: (0, n.jsx)(g.A, { inactive: !0, className: v.J6, renderLinkComponent: x.bU }),
        });
class T extends i.PureComponent {
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
        A._.subscribe(C.jej.CAROUSEL_PREV, this.manualPrevious), A._.subscribe(C.jej.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        A._.unsubscribe(C.jej.CAROUSEL_PREV, this.manualPrevious),
            A._.unsubscribe(C.jej.CAROUSEL_NEXT, this.manualNext);
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = f.MEDIUM;
        return null != e && e < t.width && (t = f.SMALL), t;
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
                state: { currentIndex: i },
            } = this,
            s = (0, p.U3)(i, a.length),
            l = (0, p.U3)(e, a.length),
            r = 1 === Math.abs(e - s) || (e === a.length - 1 && 0 === s) || (0 === e && s === a.length - 1);
        this.setState({ playingVideo: !1, currentIndex: l, animate: r, hasInteracted: t }),
            t && null != n && n(a[l], s, l);
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
            ? (0, n.jsx)(o.DUT, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: v.AU,
                  children: (0, n.jsx)("img", { src: e.src, alt: "", className: v.NP }),
              })
            : (0, n.jsx)(o.DUT, {
                  onClick: () => this.setItem(t, !0),
                  className: v.AU,
                  children: (0, n.jsx)("img", { alt: "", className: v.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, a) => {
        let { currentIndex: i, volume: s, isMuted: o } = this.state,
            c = t === (0, p.U3)(i, this.props.items.length);
        return (0, n.jsx)(r.A.div, {
            className: l()(v.AS, { [v.Xt]: c }),
            style: null != a ? this.getStyle(t, a) : null,
            onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === C.geh.VIDEO || e.type === C.geh.YOUTUBE_VIDEO
                    ? (0, n.jsx)(N, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: c,
                          onClick: () => this.handleVideoClick(t),
                          volume: s,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: o,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, c),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: a, hoveringPreviousItem: i, hoveringNextItem: s } = this.state,
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
                  className: v.HY,
                  children: [
                      r,
                      (0, n.jsx)(m.Q8, { onClick: this.manualPrevious, className: l()(v.UE, { [v.h_]: i }) }),
                      (0, n.jsx)(m.Oj, { onClick: this.manualNext, className: l()(v.UE, { [v.h_]: s }) }),
                  ],
              });
    }
    getPaginationSrc(e) {
        return e.type === C.geh.YOUTUBE_VIDEO
            ? (0, C.PE$)(e.youtubeVideoId)
            : e.type === C.geh.IMG
              ? e.src
              : e.type === C.geh.VIDEO
                ? e.thumbnailSrc
                : null;
    }
    renderPaginationItem = (e, t) => {
        let { currentIndex: a } = this.state,
            i = a === t;
        return (0, n.jsxs)(
            "div",
            {
                className: l()(v.Yw, i ? v.sM : v.N7),
                children: [
                    (0, n.jsx)("img", {
                        alt: null == e.alt ? t : e.alt,
                        className: v.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === C.geh.YOUTUBE_VIDEO || e.type === C.geh.VIDEO ? (0, n.jsx)(y, {}) : null,
                    i ? (0, n.jsx)("div", { className: v.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: a, paused: i } = this.props,
            { currentIndex: s, playingVideo: l, hasInteracted: r } = this.state;
        return (0, n.jsxs)(h.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: a,
            className: t,
            disable: l || r || i,
            children: [
                this.renderCarousel(),
                (0, n.jsx)("div", {
                    className: v.X$,
                    children: (0, n.jsx)(m.Ay, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: s,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: v.XG,
                        align: e.length < 6 ? m.Ay.Align.LEFT : m.Ay.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
let R = (0, c.A)(T);
