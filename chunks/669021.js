n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(748780),
    s = n(873546),
    c = n(846519),
    u = n(215569),
    d = n(481060),
    p = n(679056),
    m = n(70097),
    f = n(548238);
function g(e, t, n) {
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
class _ extends i.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, r.jsx)(a.Z.img, {
            className: o()({ [f.imageLoading]: i }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded,
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: i, imageLoading: l } = this.state;
        return null == n || i
            ? (0, r.jsx)(a.Z.div, {
                  className: o()(f.titleContainer, e),
                  style: this.getImageStyle(),
                  children: t,
              })
            : (0, r.jsxs)(a.Z.div, {
                  className: o()(l ? f.loadingContainer : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, r.jsx)(d.$jN, {
                                className: f.spinner,
                                itemClassName: f.spinnerItem,
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
            g(this, "_animatedValue", new a.Z.Value(1)),
            g(this, "state", {
                imageLoadError: !1,
                imageLoading: !0,
            }),
            g(this, "componentWillEnter", (e) => {
                this._animatedValue.setValue(0),
                    a.Z.timing(this._animatedValue, {
                        toValue: 1,
                        duration: 400,
                    }).start(e);
            }),
            g(this, "componentWillLeave", (e) => {
                a.Z.timing(this._animatedValue, {
                    toValue: 0,
                    duration: 400,
                }).start(e);
            }),
            g(this, "getImageStyle", () => ({ opacity: this._animatedValue })),
            g(this, "handleImageError", () => {
                this.setState({
                    imageLoadError: !0,
                    imageLoading: !1,
                });
            }),
            g(this, "handleImageLoaded", () => {
                this.setState({ imageLoading: !1 });
            });
    }
}
class h extends i.Component {
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
                    (n.volume = 0.3);
                let e = n.play();
                null != e &&
                    e.then(() => {
                        this.videoPlaying = !0;
                    });
            } else
                e.playing &&
                    !t &&
                    this.videoTimeout.start(400, () => {
                        this.videoPlaying && (n.pause(), (this.videoPlaying = !1));
                    });
    }
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: l } = this.props;
        return null == t
            ? (0, r.jsx)(
                  _,
                  {
                      className: o()(f.splash, l),
                      src: n,
                      title: i,
                  },
                  "image",
              )
            : (0, r.jsx)(p.Z, {
                  onInterval: this.nextItem,
                  interval: 2000,
                  className: f.slideshowWrapper,
                  disable: !e,
                  children: (0, r.jsx)(u.W, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: a, videoLoaded: s } = this.state;
        return n
            ? (0, r.jsx)("div", { className: t })
            : (0, r.jsxs)("figure", {
                  className: o()(f.__invalid_tileMedia, t),
                  children: [null == e || a ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && s)],
              });
    }
    constructor(...e) {
        super(...e),
            g(this, "state", {
                currentIndex: 0,
                videoLoadError: !1,
                videoLoaded: !1,
            }),
            g(this, "_video", i.createRef()),
            g(this, "videoTimeout", new c.V7()),
            g(this, "videoPlaying", !1),
            g(this, "handleToggleMute", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onToggleMute: t } = this.props;
                null == t || t(e);
            }),
            g(this, "handleVideoError", () => {
                this.setState({ videoLoadError: !0 });
            }),
            g(this, "handleVideoLoaded", () => {
                this.setState({ videoLoaded: !0 });
            }),
            g(this, "renderTypeVideo", () => {
                let { videoLoaded: e } = this.state,
                    {
                        video: t,
                        image: n,
                        title: l,
                        playing: a,
                        muted: c,
                        splashClassName: p,
                        splashPlaceholderClassName: g,
                        renderMediaOverlay: h,
                    } = this.props,
                    b = c ? d.OyP : d.gj8;
                return (0, r.jsxs)(i.Fragment, {
                    children: [
                        s.tq
                            ? null
                            : (0, r.jsx)(m.Z, {
                                  className: o()(f.splash, p),
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
                                a && e
                                    ? null
                                    : (0, r.jsx)(
                                          _,
                                          {
                                              className: o()(f.splashPlaceholder, g),
                                              src: n,
                                              title: l,
                                          },
                                          0,
                                      ),
                        }),
                        (0, r.jsx)(d.P3F, {
                            className: o()(f.muteContainer, {
                                [f.muteContainerPlaying]: a && e,
                                [f.muteContainerMediaOverlay]: null != h,
                            }),
                            onClick: this.handleToggleMute,
                            children: a && e ? (0, r.jsx)(b, { className: f.mute }) : null,
                        }),
                    ],
                });
            }),
            g(this, "nextItem", () => {
                let { slideImages: e } = this.props;
                null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
            }),
            g(this, "renderSlideItem", (e) => {
                let { image: t, title: n, playing: i, splashClassName: l } = this.props,
                    { currentIndex: a } = this.state;
                return i
                    ? (0, r.jsx)(
                          _,
                          {
                              className: o()(f.splash, l),
                              src: e[a],
                              title: n,
                          },
                          a,
                      )
                    : (0, r.jsx)(
                          _,
                          {
                              className: o()(f.splash, l),
                              src: t,
                              title: n,
                          },
                          "image",
                      );
            });
    }
}
let b = h;
