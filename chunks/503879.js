a.d(t, { s: () => v });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(615300),
    o = a(397927),
    c = a(456412),
    d = a(871751),
    u = a(259407),
    m = a(133296),
    h = a(848752),
    p = a(452282),
    _ = a(619517),
    g = a(893598),
    x = a(652176),
    A = a(203982),
    f = a(652215),
    b = a(709992);
let C = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${f.NzX}`,
    v = { SMALL: { width: 640, height: 360, margin: 15 }, MEDIUM: { width: 880, height: 495, margin: 20 } },
    j = { width: 1920, height: 1080 },
    I = { width: 1280, height: 720 },
    S = (e) => (0, x.$o)({ ...e, className: b.tN, mediaPlayerClassName: b.yf }),
    E = (e) => (0, n.jsx)(_.Ay, { ...e }),
    N = (e) => {
        let t,
            a,
            i,
            {
                item: l,
                size: s,
                onPlay: r,
                onEnded: c,
                onClick: m,
                playable: h,
                volume: p,
                isMuted: _,
                onVolumeChange: g,
                onMute: A,
            } = e;
        if (l.type === f.geh.YOUTUBE_VIDEO)
            (t = { url: (0, f.PE$)(l.youtubeVideoId), ...j }),
                (a = { url: `${(0, f.uJ2)(l.youtubeVideoId)}?${C}`, ...I }),
                (i = u.mt.YOUTUBE);
        else {
            let e = null != l.width ? l.width : 0,
                n = null != l.height ? l.height : 0;
            (t = { url: l.thumbnailSrc, width: e, height: n }),
                (a = { url: l.src, proxyURL: l.src, width: e, height: n });
        }
        let v = (0, n.jsx)(d.rr, {
            href: null,
            thumbnail: t,
            video: a,
            provider: i,
            allowFullScreen: !0,
            maxHeight: s.height,
            maxWidth: s.width,
            onPlay: r,
            onEnded: c,
            playable: h,
            className: b.Ki,
            volume: p,
            onVolumeChange: g,
            autoMute: _,
            onMute: A,
            autoPlay: h,
            renderVideoComponent: S,
            renderImageComponent: E,
            renderLinkComponent: x.bU,
        });
        return h ? v : (0, n.jsx)(o.DUT, { className: b.AU, onClick: m, children: v });
    },
    y = () =>
        (0, n.jsx)("div", {
            className: b.eM,
            children: (0, n.jsx)(g.A, { inactive: !0, className: b.J6, renderLinkComponent: x.bU }),
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
        A._.subscribe(f.jej.CAROUSEL_PREV, this.manualPrevious), A._.subscribe(f.jej.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        A._.unsubscribe(f.jej.CAROUSEL_PREV, this.manualPrevious),
            A._.unsubscribe(f.jej.CAROUSEL_NEXT, this.manualNext);
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = v.MEDIUM;
        return null != e && e < t.width && (t = v.SMALL), t;
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
            l = (0, p.U3)(i, a.length),
            s = (0, p.U3)(e, a.length),
            r = 1 === Math.abs(e - l) || (e === a.length - 1 && 0 === l) || (0 === e && l === a.length - 1);
        this.setState({ playingVideo: !1, currentIndex: s, animate: r, hasInteracted: t }),
            t && null != n && n(a[s], l, s);
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
                  className: b.AU,
                  children: (0, n.jsx)("img", { src: e.src, alt: "", className: b.NP }),
              })
            : (0, n.jsx)(o.DUT, {
                  onClick: () => this.setItem(t, !0),
                  className: b.AU,
                  children: (0, n.jsx)("img", { alt: "", className: b.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, a) => {
        let { currentIndex: i, volume: l, isMuted: o } = this.state,
            c = t === (0, p.U3)(i, this.props.items.length);
        return (0, n.jsx)(r.A.div, {
            className: s()(b.AS, { [b.Xt]: c }),
            style: null != a ? this.getStyle(t, a) : null,
            onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === f.geh.VIDEO || e.type === f.geh.YOUTUBE_VIDEO
                    ? (0, n.jsx)(N, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: c,
                          onClick: () => this.handleVideoClick(t),
                          volume: l,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: o,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, c),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: a, hoveringPreviousItem: i, hoveringNextItem: l } = this.state,
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
                  className: b.HY,
                  children: [
                      r,
                      (0, n.jsx)(h.Q8, { onClick: this.manualPrevious, className: s()(b.UE, { [b.h_]: i }) }),
                      (0, n.jsx)(h.Oj, { onClick: this.manualNext, className: s()(b.UE, { [b.h_]: l }) }),
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
            i = a === t;
        return (0, n.jsxs)(
            "div",
            {
                className: s()(b.Yw, i ? b.sM : b.N7),
                children: [
                    (0, n.jsx)("img", {
                        alt: null == e.alt ? t : e.alt,
                        className: b.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === f.geh.YOUTUBE_VIDEO || e.type === f.geh.VIDEO ? (0, n.jsx)(y, {}) : null,
                    i ? (0, n.jsx)("div", { className: b.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: a, paused: i } = this.props,
            { currentIndex: l, playingVideo: s, hasInteracted: r } = this.state;
        return (0, n.jsxs)(m.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: a,
            className: t,
            disable: s || r || i,
            children: [
                this.renderCarousel(),
                (0, n.jsx)("div", {
                    className: b.X$,
                    children: (0, n.jsx)(h.Ay, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: l,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: b.XG,
                        align: e.length < 6 ? h.Ay.Align.LEFT : h.Ay.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, c.A)(T);
