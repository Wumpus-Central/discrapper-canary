n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(615300),
    o = n(607399),
    c = n(451988),
    u = n(73939),
    d = n(397927),
    p = n(133296),
    m = n(607470),
    f = n(112266);

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
class h extends i.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, r.jsx)(s.A.img, {
            className: a()(
                {
                    [f.YC]: i,
                },
                t,
            ),
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
            ? (0, r.jsx)(s.A.div, {
                  className: a()(f.gn, e),
                  style: this.getImageStyle(),
                  children: t,
              })
            : (0, r.jsxs)(s.A.div, {
                  className: a()(l ? f.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, r.jsx)(d.y$y, {
                                className: f.u1,
                                itemClassName: f.$N,
                                type: d.y$y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            g(this, "_animatedValue", new s.A.Value(1)),
            g(this, "state", {
                imageLoadError: !1,
                imageLoading: !0,
            }),
            g(this, "componentWillEnter", (e) => {
                this._animatedValue.setValue(0),
                    s.A.timing(this._animatedValue, {
                        toValue: 1,
                        duration: 400,
                    }).start(e);
            }),
            g(this, "componentWillLeave", (e) => {
                s.A.timing(this._animatedValue, {
                    toValue: 0,
                    duration: 400,
                }).start(e);
            }),
            g(this, "getImageStyle", () => ({
                opacity: this._animatedValue,
            })),
            g(this, "handleImageError", () => {
                this.setState({
                    imageLoadError: !0,
                    imageLoading: !1,
                });
            }),
            g(this, "handleImageLoaded", () => {
                this.setState({
                    imageLoading: !1,
                });
            });
    }
}
class _ extends i.Component {
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
                  h,
                  {
                      className: a()(f.Yi, l),
                      src: n,
                      title: i,
                  },
                  "image",
              )
            : (0, r.jsx)(p.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: f.mZ,
                  disable: !e,
                  children: (0, r.jsx)(u.F, {
                      children: this.renderSlideItem(t),
                  }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: l } = this.props,
            { videoLoadError: s, videoLoaded: o } = this.state;
        return n
            ? (0, r.jsx)("div", {
                  className: t,
              })
            : (0, r.jsxs)("figure", {
                  className: a()(f.__invalid_tileMedia, t),
                  children: [null == e || s ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && o)],
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
            g(this, "videoTimeout", new c.Ep()),
            g(this, "videoPlaying", !1),
            g(this, "handleToggleMute", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onToggleMute: t } = this.props;
                null == t || t(e);
            }),
            g(this, "handleVideoError", () => {
                this.setState({
                    videoLoadError: !0,
                });
            }),
            g(this, "handleVideoLoaded", () => {
                this.setState({
                    videoLoaded: !0,
                });
            }),
            g(this, "renderTypeVideo", () => {
                let { videoLoaded: e } = this.state,
                    {
                        video: t,
                        image: n,
                        title: l,
                        playing: s,
                        muted: c,
                        splashClassName: p,
                        splashPlaceholderClassName: g,
                        renderMediaOverlay: _,
                    } = this.props,
                    b = c ? d._RO : d.HKD;
                return (0, r.jsxs)(i.Fragment, {
                    children: [
                        o.Fr
                            ? null
                            : (0, r.jsx)(m.A, {
                                  className: a()(f.Yi, p),
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
                        (0, r.jsx)(u.F, {
                            children:
                                s && e
                                    ? null
                                    : (0, r.jsx)(
                                          h,
                                          {
                                              className: a()(f.NB, g),
                                              src: n,
                                              title: l,
                                          },
                                          0,
                                      ),
                        }),
                        (0, r.jsx)(d.DUT, {
                            className: a()(f.b4, {
                                [f.HY]: s && e,
                                [f.Hy]: null != _,
                            }),
                            onClick: this.handleToggleMute,
                            children:
                                s && e
                                    ? (0, r.jsx)(b, {
                                          className: f.i2,
                                      })
                                    : null,
                        }),
                    ],
                });
            }),
            g(this, "nextItem", () => {
                let { slideImages: e } = this.props;
                null != e &&
                    this.setState({
                        currentIndex: (this.state.currentIndex + 1) % e.length,
                    });
            }),
            g(this, "renderSlideItem", (e) => {
                let { image: t, title: n, playing: i, splashClassName: l } = this.props,
                    { currentIndex: s } = this.state;
                return i
                    ? (0, r.jsx)(
                          h,
                          {
                              className: a()(f.Yi, l),
                              src: e[s],
                              title: n,
                          },
                          s,
                      )
                    : (0, r.jsx)(
                          h,
                          {
                              className: a()(f.Yi, l),
                              src: t,
                              title: n,
                          },
                          "image",
                      );
            });
    }
}
let b = _;
