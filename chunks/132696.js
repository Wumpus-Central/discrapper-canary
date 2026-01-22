n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    l = n(607399),
    c = n(451988),
    u = n(73939),
    d = n(397927),
    f = n(133296),
    p = n(607470),
    _ = n(112266);

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
let m = 2e3,
    g = 400,
    E = 0.3;
class b extends i.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, r.jsx)(o.A.img, {
            className: s()(
                {
                    [_.YC]: i,
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
            { imageLoadError: i, imageLoading: a } = this.state;
        return null == n || i
            ? (0, r.jsx)(o.A.div, {
                  className: s()(_.gn, e),
                  style: this.getImageStyle(),
                  children: t,
              })
            : (0, r.jsxs)(o.A.div, {
                  className: s()(a ? _.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
                          ? (0, r.jsx)(d.y$y, {
                                className: _.u1,
                                itemClassName: _.$N,
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
            h(this, "_animatedValue", new o.A.Value(1)),
            h(this, "state", {
                imageLoadError: !1,
                imageLoading: !0,
            }),
            h(this, "componentWillEnter", (e) => {
                this._animatedValue.setValue(0),
                    o.A.timing(this._animatedValue, {
                        toValue: 1,
                        duration: g,
                    }).start(e);
            }),
            h(this, "componentWillLeave", (e) => {
                o.A.timing(this._animatedValue, {
                    toValue: 0,
                    duration: g,
                }).start(e);
            }),
            h(this, "getImageStyle", () => ({
                opacity: this._animatedValue,
            })),
            h(this, "handleImageError", () => {
                this.setState({
                    imageLoadError: !0,
                    imageLoading: !1,
                });
            }),
            h(this, "handleImageLoaded", () => {
                this.setState({
                    imageLoading: !1,
                });
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
                      className: s()(_.Yi, a),
                      src: n,
                      title: i,
                  },
                  "image",
              )
            : (0, r.jsx)(f.A, {
                  onInterval: this.nextItem,
                  interval: m,
                  className: _.mZ,
                  disable: !e,
                  children: (0, r.jsx)(u.F, {
                      children: this.renderSlideItem(t),
                  }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: a } = this.props,
            { videoLoadError: o, videoLoaded: l } = this.state;
        return n
            ? (0, r.jsx)("div", {
                  className: t,
              })
            : (0, r.jsxs)("figure", {
                  className: s()(_.__invalid_tileMedia, t),
                  children: [null == e || o ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(a && l)],
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
            h(this, "videoTimeout", new c.Ep()),
            h(this, "videoPlaying", !1),
            h(this, "handleToggleMute", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onToggleMute: t } = this.props;
                null == t || t(e);
            }),
            h(this, "handleVideoError", () => {
                this.setState({
                    videoLoadError: !0,
                });
            }),
            h(this, "handleVideoLoaded", () => {
                this.setState({
                    videoLoaded: !0,
                });
            }),
            h(this, "renderTypeVideo", () => {
                let { videoLoaded: e } = this.state,
                    {
                        video: t,
                        image: n,
                        title: a,
                        playing: o,
                        muted: c,
                        splashClassName: f,
                        splashPlaceholderClassName: h,
                        renderMediaOverlay: m,
                    } = this.props,
                    g = c ? d._RO : d.HKD;
                return (0, r.jsxs)(i.Fragment, {
                    children: [
                        l.Fr
                            ? null
                            : (0, r.jsx)(p.A, {
                                  className: s()(_.Yi, f),
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
                                o && e
                                    ? null
                                    : (0, r.jsx)(
                                          b,
                                          {
                                              className: s()(_.NB, h),
                                              src: n,
                                              title: a,
                                          },
                                          0,
                                      ),
                        }),
                        (0, r.jsx)(d.DUT, {
                            className: s()(_.b4, {
                                [_.HY]: o && e,
                                [_.Hy]: null != m,
                            }),
                            onClick: this.handleToggleMute,
                            children:
                                o && e
                                    ? (0, r.jsx)(g, {
                                          className: _.i2,
                                      })
                                    : null,
                        }),
                    ],
                });
            }),
            h(this, "nextItem", () => {
                let { slideImages: e } = this.props;
                null != e &&
                    this.setState({
                        currentIndex: (this.state.currentIndex + 1) % e.length,
                    });
            }),
            h(this, "renderSlideItem", (e) => {
                let { image: t, title: n, playing: i, splashClassName: a } = this.props,
                    { currentIndex: o } = this.state;
                return i
                    ? (0, r.jsx)(
                          b,
                          {
                              className: s()(_.Yi, a),
                              src: e[o],
                              title: n,
                          },
                          o,
                      )
                    : (0, r.jsx)(
                          b,
                          {
                              className: s()(_.Yi, a),
                              src: t,
                              title: n,
                          },
                          "image",
                      );
            });
    }
}
let O = y;
