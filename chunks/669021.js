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
    p = n(70097),
    _ = n(180622);
function m(e, t, n) {
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
let h = 2000,
    g = 400,
    E = 0.3;
class b extends i.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, r.jsx)(s.Z.img, {
            className: o()({ [_.imageLoading]: i }, t),
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
                  className: o()(_.titleContainer, e),
                  style: this.getImageStyle(),
                  children: t,
              })
            : (0, r.jsxs)(s.Z.div, {
                  className: o()(a ? _.loadingContainer : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
                          ? (0, r.jsx)(d.$jN, {
                                className: _.spinner,
                                itemClassName: _.spinnerItem,
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
            m(this, "_animatedValue", new s.Z.Value(1)),
            m(this, "state", {
                imageLoadError: !1,
                imageLoading: !0,
            }),
            m(this, "componentWillEnter", (e) => {
                this._animatedValue.setValue(0),
                    s.Z.timing(this._animatedValue, {
                        toValue: 1,
                        duration: g,
                    }).start(e);
            }),
            m(this, "componentWillLeave", (e) => {
                s.Z.timing(this._animatedValue, {
                    toValue: 0,
                    duration: g,
                }).start(e);
            }),
            m(this, "getImageStyle", () => ({ opacity: this._animatedValue })),
            m(this, "handleImageError", () => {
                this.setState({
                    imageLoadError: !0,
                    imageLoading: !1,
                });
            }),
            m(this, "handleImageLoaded", () => {
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
                      className: o()(_.splash, a),
                      src: n,
                      title: i,
                  },
                  "image",
              )
            : (0, r.jsx)(f.Z, {
                  onInterval: this.nextItem,
                  interval: h,
                  className: _.slideshowWrapper,
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
                  className: o()(_.__invalid_tileMedia, t),
                  children: [null == e || s ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(a && l)],
              });
    }
    constructor(...e) {
        super(...e),
            m(this, "state", {
                currentIndex: 0,
                videoLoadError: !1,
                videoLoaded: !1,
            }),
            m(this, "_video", i.createRef()),
            m(this, "videoTimeout", new c.V7()),
            m(this, "videoPlaying", !1),
            m(this, "handleToggleMute", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onToggleMute: t } = this.props;
                null == t || t(e);
            }),
            m(this, "handleVideoError", () => {
                this.setState({ videoLoadError: !0 });
            }),
            m(this, "handleVideoLoaded", () => {
                this.setState({ videoLoaded: !0 });
            }),
            m(this, "renderTypeVideo", () => {
                let { videoLoaded: e } = this.state,
                    {
                        video: t,
                        image: n,
                        title: a,
                        playing: s,
                        muted: c,
                        splashClassName: f,
                        splashPlaceholderClassName: m,
                        renderMediaOverlay: h,
                    } = this.props,
                    g = c ? d.OyP : d.gj8;
                return (0, r.jsxs)(i.Fragment, {
                    children: [
                        l.tq
                            ? null
                            : (0, r.jsx)(p.Z, {
                                  className: o()(_.splash, f),
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
                                              className: o()(_.splashPlaceholder, m),
                                              src: n,
                                              title: a,
                                          },
                                          0,
                                      ),
                        }),
                        (0, r.jsx)(d.P3F, {
                            className: o()(_.muteContainer, {
                                [_.muteContainerPlaying]: s && e,
                                [_.muteContainerMediaOverlay]: null != h,
                            }),
                            onClick: this.handleToggleMute,
                            children: s && e ? (0, r.jsx)(g, { className: _.mute }) : null,
                        }),
                    ],
                });
            }),
            m(this, "nextItem", () => {
                let { slideImages: e } = this.props;
                null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
            }),
            m(this, "renderSlideItem", (e) => {
                let { image: t, title: n, playing: i, splashClassName: a } = this.props,
                    { currentIndex: s } = this.state;
                return i
                    ? (0, r.jsx)(
                          b,
                          {
                              className: o()(_.splash, a),
                              src: e[s],
                              title: n,
                          },
                          s,
                      )
                    : (0, r.jsx)(
                          b,
                          {
                              className: o()(_.splash, a),
                              src: t,
                              title: n,
                          },
                          "image",
                      );
            });
    }
}
let O = y;
