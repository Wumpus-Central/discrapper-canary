n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    l = n(873546),
    c = n(846519),
    u = n(215569),
    d = n(481060),
    f = n(679056),
    _ = n(70097),
    p = n(548238);
function h(e, t, n) {
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
let m = 2000,
    g = 400,
    E = 0.3;
class b extends i.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, r.jsx)(s.Z.img, {
            className: o()({ [p.imageLoading]: i }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded,
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: i, imageLoading: a } = this.state;
        return null == n || i
            ? (0, r.jsx)(s.Z.div, {
                  className: o()(p.titleContainer, e),
                  style: this.getImageStyle(),
                  children: t,
              })
            : (0, r.jsxs)(s.Z.div, {
                  className: o()(a ? p.loadingContainer : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
                          ? (0, r.jsx)(d.$jN, {
                                className: p.spinner,
                                itemClassName: p.spinnerItem,
                                type: d.$jN.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            h(this, "_animatedValue", new s.Z.Value(1)),
            h(this, "state", {
                imageLoadError: !1,
                imageLoading: !0,
            }),
            h(this, "componentWillEnter", (e) => {
                this._animatedValue.setValue(0),
                    s.Z.timing(this._animatedValue, {
                        toValue: 1,
                        duration: g,
                    }).start(e);
            }),
            h(this, "componentWillLeave", (e) => {
                s.Z.timing(this._animatedValue, {
                    toValue: 0,
                    duration: g,
                }).start(e);
            }),
            h(this, "getImageStyle", () => ({ opacity: this._animatedValue })),
            h(this, "handleImageError", () => {
                this.setState({
                    imageLoadError: !0,
                    imageLoading: !1,
                });
            }),
            h(this, "handleImageLoaded", () => {
                this.setState({ imageLoading: !1 });
            });
    }
}
class y extends i.Component {
    componentWillUnmount() {
        this.videoTimeout.stop();
    }
    componentDidUpdate(e) {
        let { playing: t } = this.props,
            n = this._video.current;
        if (null != n)
            if (t && !e.playing) {
                this.videoTimeout.stop(),
                    isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0),
                    (n.volume = E);
                let e = n.play();
                null != e &&
                    e.then(() => {
                        this.videoPlaying = !0;
                    });
            } else
                e.playing &&
                    !t &&
                    this.videoTimeout.start(g, () => {
                        this.videoPlaying && (n.pause(), (this.videoPlaying = !1));
                    });
    }
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: a } = this.props;
        return null == t
            ? (0, r.jsx)(
                  b,
                  {
                      className: o()(p.splash, a),
                      src: n,
                      title: i,
                  },
                  "image",
              )
            : (0, r.jsx)(f.Z, {
                  onInterval: this.nextItem,
                  interval: m,
                  className: p.slideshowWrapper,
                  disable: !e,
                  children: (0, r.jsx)(u.W, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: a } = this.props,
            { videoLoadError: s, videoLoaded: l } = this.state;
        return n
            ? (0, r.jsx)("div", { className: t })
            : (0, r.jsxs)("figure", {
                  className: o()(p.__invalid_tileMedia, t),
                  children: [null == e || s ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(a && l)],
              });
    }
    constructor(...e) {
        super(...e),
            h(this, "state", {
                currentIndex: 0,
                videoLoadError: !1,
                videoLoaded: !1,
            }),
            h(this, "_video", i.createRef()),
            h(this, "videoTimeout", new c.V7()),
            h(this, "videoPlaying", !1),
            h(this, "handleToggleMute", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onToggleMute: t } = this.props;
                null == t || t(e);
            }),
            h(this, "handleVideoError", () => {
                this.setState({ videoLoadError: !0 });
            }),
            h(this, "handleVideoLoaded", () => {
                this.setState({ videoLoaded: !0 });
            }),
            h(this, "renderTypeVideo", () => {
                let { videoLoaded: e } = this.state,
                    {
                        video: t,
                        image: n,
                        title: a,
                        playing: s,
                        muted: c,
                        splashClassName: f,
                        splashPlaceholderClassName: h,
                        renderMediaOverlay: m,
                    } = this.props,
                    g = c ? d.OyP : d.gj8;
                return (0, r.jsxs)(i.Fragment, {
                    children: [
                        l.tq
                            ? null
                            : (0, r.jsx)(_.Z, {
                                  className: o()(p.splash, f),
                                  muted: c,
                                  loop: !0,
                                  preload: "none",
                                  ref: this._video,
                                  onLoadedMetadata: this.handleVideoLoaded,
                                  onError: this.handleVideoError,
                                  children: (0, r.jsx)("source", {
                                      src: t,
                                      type: "video/mp4",
                                  }),
                              }),
                        (0, r.jsx)(u.W, {
                            children:
                                s && e
                                    ? null
                                    : (0, r.jsx)(
                                          b,
                                          {
                                              className: o()(p.splashPlaceholder, h),
                                              src: n,
                                              title: a,
                                          },
                                          0,
                                      ),
                        }),
                        (0, r.jsx)(d.P3F, {
                            className: o()(p.muteContainer, {
                                [p.muteContainerPlaying]: s && e,
                                [p.muteContainerMediaOverlay]: null != m,
                            }),
                            onClick: this.handleToggleMute,
                            children: s && e ? (0, r.jsx)(g, { className: p.mute }) : null,
                        }),
                    ],
                });
            }),
            h(this, "nextItem", () => {
                let { slideImages: e } = this.props;
                null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
            }),
            h(this, "renderSlideItem", (e) => {
                let { image: t, title: n, playing: i, splashClassName: a } = this.props,
                    { currentIndex: s } = this.state;
                return i
                    ? (0, r.jsx)(
                          b,
                          {
                              className: o()(p.splash, a),
                              src: e[s],
                              title: n,
                          },
                          s,
                      )
                    : (0, r.jsx)(
                          b,
                          {
                              className: o()(p.splash, a),
                              src: t,
                              title: n,
                          },
                          "image",
                      );
            });
    }
}
let O = y;
