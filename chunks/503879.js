n.d(t, {
    A: () => L,
    s: () => S,
}),
    n(896048);
var l,
    a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    c = n(615300),
    o = n(397927),
    d = n(456412),
    u = n(871751),
    p = n(259407),
    h = n(133296),
    m = n(848752),
    b = n(452282),
    f = n(619517),
    g = n(893598),
    x = n(652176),
    v = n(203982),
    j = n(652215),
    A = n(709992);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}

function O() {
    var e, t;
    let n =
        ((e = ["grayscale(", ")"]),
        t || (t = e.slice(0)),
        Object.freeze(
            Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t),
                },
            }),
        ));
    return (
        (O = function () {
            return n;
        }),
        n
    );
}
let S = {
        SMALL: {
            width: 640,
            height: 360,
            margin: 15,
        },
        MEDIUM: {
            width: 880,
            height: 495,
            margin: 20,
        },
    },
    C = {
        width: 1920,
        height: 1080,
    },
    E = {
        width: 1280,
        height: 720,
    },
    I = (e) => {
        var t, n;
        return (0, x.$o)(
            ((t = y({}, e)),
            (n = n =
                {
                    className: A.tN,
                    mediaPlayerClassName: A.yf,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        );
    },
    P = (e) => (0, a.jsx)(f.Ay, y({}, e)),
    N = (e) => {
        let t,
            n,
            l,
            {
                item: r,
                size: i,
                onPlay: s,
                onEnded: c,
                onClick: d,
                playable: h,
                volume: m,
                isMuted: b,
                onVolumeChange: f,
                onMute: g,
            } = e;
        if (r.type === j.geh.YOUTUBE_VIDEO)
            (t = y(
                {
                    url: (0, j.PE$)(r.youtubeVideoId),
                },
                C,
            )),
                (n = y(
                    {
                        url: ""
                            .concat((0, j.uJ2)(r.youtubeVideoId), "?")
                            .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                    },
                    E,
                )),
                (l = p.mt.YOUTUBE);
        else {
            let e = null != r.width ? r.width : 0,
                l = null != r.height ? r.height : 0;
            (t = {
                url: r.thumbnailSrc,
                width: e,
                height: l,
            }),
                (n = {
                    url: r.src,
                    proxyURL: r.src,
                    width: e,
                    height: l,
                });
        }
        let v = (0, a.jsx)(u.rr, {
            href: null,
            thumbnail: t,
            video: n,
            provider: l,
            allowFullScreen: !0,
            maxHeight: i.height,
            maxWidth: i.width,
            onPlay: s,
            onEnded: c,
            playable: h,
            className: A.Ki,
            volume: m,
            onVolumeChange: f,
            autoMute: b,
            onMute: g,
            autoPlay: h,
            renderVideoComponent: I,
            renderImageComponent: P,
            renderLinkComponent: x.bU,
        });
        return h
            ? v
            : (0, a.jsx)(o.DUT, {
                  className: A.AU,
                  onClick: d,
                  children: v,
              });
    },
    R = () =>
        (0, a.jsx)("div", {
            className: A.eM,
            children: (0, a.jsx)(g.A, {
                inactive: !0,
                className: A.J6,
                renderLinkComponent: x.bU,
            }),
        });
class T extends (l = r.PureComponent) {
    componentDidMount() {
        v._.subscribe(j.jej.CAROUSEL_PREV, this.manualPrevious), v._.subscribe(j.jej.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        v._.unsubscribe(j.jej.CAROUSEL_PREV, this.manualPrevious),
            v._.unsubscribe(j.jej.CAROUSEL_NEXT, this.manualNext);
    }
    getStyle(e, t) {
        let n = t.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
            extrapolate: c.A.Extrapolate.CLAMP,
        });
        return {
            opacity: t.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1],
                extrapolate: c.A.Extrapolate.CLAMP,
            }),
            filter: c.A.template(O(), n),
        };
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t),
            this.setState({
                hasInteracted: !0,
            });
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t
            ? this.setState({
                  hoveringPreviousItem: !0,
              })
            : e > t &&
              this.setState({
                  hoveringNextItem: !0,
              });
    }
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: n, hoveringPreviousItem: l, hoveringNextItem: r } = this.state,
            i = (0, a.jsx)(b.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: n,
                edgeItems: 2,
            });
        return e.length <= 1
            ? i
            : (0, a.jsxs)("div", {
                  className: A.HY,
                  children: [
                      i,
                      (0, a.jsx)(m.Q8, {
                          onClick: this.manualPrevious,
                          className: s()(A.UE, {
                              [A.h_]: l,
                          }),
                      }),
                      (0, a.jsx)(m.Oj, {
                          onClick: this.manualNext,
                          className: s()(A.UE, {
                              [A.h_]: r,
                          }),
                      }),
                  ],
              });
    }
    getPaginationSrc(e) {
        return e.type === j.geh.YOUTUBE_VIDEO
            ? (0, j.PE$)(e.youtubeVideoId)
            : e.type === j.geh.IMG
              ? e.src
              : e.type === j.geh.VIDEO
                ? e.thumbnailSrc
                : null;
    }
    render() {
        let { items: e, className: t, autoplayInterval: n, paused: l } = this.props,
            { currentIndex: r, playingVideo: i, hasInteracted: s } = this.state;
        return (0, a.jsxs)(h.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: i || s || l,
            children: [
                this.renderCarousel(),
                (0, a.jsx)("div", {
                    className: A.X$,
                    children: (0, a.jsx)(m.Ay, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: r,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: A.XG,
                        align: e.length < 6 ? m.Ay.Align.LEFT : m.Ay.Align.CENTER,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", {
                currentIndex: 0,
                animate: !0,
                playingVideo: !1,
                hasInteracted: !1,
                hoveringPreviousItem: !1,
                hoveringNextItem: !1,
                volume: 1,
                isMuted: !0,
            }),
            _(this, "getItemSize", () => {
                let { width: e } = this.props,
                    t = S.MEDIUM;
                return null != e && e < t.width && (t = S.SMALL), t;
            }),
            _(this, "setItem", (e, t) => {
                let {
                        props: { items: n, onIntentionalChange: l },
                        state: { currentIndex: a },
                    } = this,
                    r = (0, b.U3)(a, n.length),
                    i = (0, b.U3)(e, n.length),
                    s = 1 === Math.abs(e - r) || (e === n.length - 1 && 0 === r) || (0 === e && r === n.length - 1);
                this.setState({
                    playingVideo: !1,
                    currentIndex: i,
                    animate: s,
                    hasInteracted: t,
                }),
                    t && null != l && l(n[i], r, i);
            }),
            _(this, "autoNext", () => {
                this.setItem(this.state.currentIndex + 1, !1);
            }),
            _(this, "manualNext", () => {
                this.setItem(this.state.currentIndex + 1, !0);
            }),
            _(this, "manualPrevious", () => {
                this.setItem(this.state.currentIndex - 1, !0);
            }),
            _(this, "handlePlay", (e) =>
                this.setState({
                    playingVideo: !0,
                    hasInteracted: !e,
                }),
            ),
            _(this, "handleEnded", () => {
                this.state.hasInteracted || this.autoNext();
            }),
            _(this, "handleVolumeChange", (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0,
                });
            }),
            _(this, "handleMute", (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0,
                });
            }),
            _(this, "handleVideoClick", (e) => {
                this.setItem(e, !0);
            }),
            _(this, "handleEdgeItemMouseLeave", () => {
                this.setState({
                    hoveringPreviousItem: !1,
                    hoveringNextItem: !1,
                });
            }),
            _(this, "renderCarouselImage", (e, t, n) =>
                n
                    ? (0, a.jsx)(o.DUT, {
                          onClick: () => this.handleCurrentItemClick(e, t),
                          className: A.AU,
                          children: (0, a.jsx)("img", {
                              src: e.src,
                              alt: "",
                              className: A.NP,
                          }),
                      })
                    : (0, a.jsx)(o.DUT, {
                          onClick: () => this.setItem(t, !0),
                          className: A.AU,
                          children: (0, a.jsx)("img", {
                              alt: "",
                              className: A.tv,
                              src: e.src,
                              draggable: !1,
                          }),
                      }),
            ),
            _(this, "renderItem", (e, t, n) => {
                let { currentIndex: l, volume: r, isMuted: i } = this.state,
                    o = t === (0, b.U3)(l, this.props.items.length);
                return (0, a.jsx)(c.A.div, {
                    className: s()(A.AS, {
                        [A.Xt]: o,
                    }),
                    style: null != n ? this.getStyle(t, n) : null,
                    onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
                    onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
                    children:
                        e.type === j.geh.VIDEO || e.type === j.geh.YOUTUBE_VIDEO
                            ? (0, a.jsx)(N, {
                                  item: e,
                                  size: this.getItemSize(),
                                  onPlay: this.handlePlay,
                                  onEnded: this.handleEnded,
                                  playable: o,
                                  onClick: () => this.handleVideoClick(t),
                                  volume: r,
                                  onVolumeChange: this.handleVolumeChange,
                                  isMuted: i,
                                  onMute: this.handleMute,
                              })
                            : this.renderCarouselImage(e, t, o),
                });
            }),
            _(this, "renderPaginationItem", (e, t) => {
                let { currentIndex: n } = this.state,
                    l = n === t;
                return (0, a.jsxs)(
                    "div",
                    {
                        className: s()(A.Yw, l ? A.sM : A.N7),
                        children: [
                            (0, a.jsx)("img", {
                                alt: null == e.alt ? t : e.alt,
                                className: A.Pr,
                                src: this.getPaginationSrc(e),
                                draggable: !1,
                            }),
                            e.type === j.geh.YOUTUBE_VIDEO || e.type === j.geh.VIDEO ? (0, a.jsx)(R, {}) : null,
                            l
                                ? (0, a.jsx)("div", {
                                      className: A.SD,
                                  })
                                : null,
                        ],
                    },
                    "page-".concat(t),
                );
            });
    }
}
_(T, "defaultProps", {
    autoplayInterval: 8e3,
    paused: !1,
});
let L = (0, d.A)(T);
