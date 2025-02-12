n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(748780),
    o = n(873546),
    c = n(846519),
    d = n(215569),
    u = n(481060),
    m = n(679056),
    _ = n(70097),
    h = n(135397);
function p(e, t, n) {
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
class g extends l.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: l } = this.state;
        return (0, i.jsx)(s.Z.img, {
            className: r()({ [h.imageLoading]: l }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: l, imageLoading: a } = this.state;
        return null == n || l
            ? (0, i.jsx)(s.Z.div, {
                  className: r()(h.titleContainer, e),
                  style: this.getImageStyle(),
                  children: t
              })
            : (0, i.jsxs)(s.Z.div, {
                  className: r()(a ? h.loadingContainer : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
                          ? (0, i.jsx)(u.$jN, {
                                className: h.spinner,
                                itemClassName: h.spinnerItem,
                                type: u.$jN.Type.PULSING_ELLIPSIS,
                                animated: !0
                            })
                          : null,
                      this.renderMedia()
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            p(this, '_animatedValue', new s.Z.Value(1)),
            p(this, 'state', {
                imageLoadError: !1,
                imageLoading: !0
            }),
            p(this, 'componentWillEnter', (e) => {
                this._animatedValue.setValue(0),
                    s.Z.timing(this._animatedValue, {
                        toValue: 1,
                        duration: 400
                    }).start(e);
            }),
            p(this, 'componentWillLeave', (e) => {
                s.Z.timing(this._animatedValue, {
                    toValue: 0,
                    duration: 400
                }).start(e);
            }),
            p(this, 'getImageStyle', () => ({ opacity: this._animatedValue })),
            p(this, 'handleImageError', () => {
                this.setState({
                    imageLoadError: !0,
                    imageLoading: !1
                });
            }),
            p(this, 'handleImageLoaded', () => {
                this.setState({ imageLoading: !1 });
            });
    }
}
class f extends l.Component {
    componentWillUnmount() {
        this.videoTimeout.stop();
    }
    componentDidUpdate(e) {
        let { playing: t } = this.props,
            n = this._video.current;
        if (null != n) {
            if (t && !e.playing) {
                this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), (n.volume = 0.3);
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
    }
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: l, splashClassName: a } = this.props;
        return null == t
            ? (0, i.jsx)(
                  g,
                  {
                      className: r()(h.splash, a),
                      src: n,
                      title: l
                  },
                  'image'
              )
            : (0, i.jsx)(m.Z, {
                  onInterval: this.nextItem,
                  interval: 2000,
                  className: h.slideshowWrapper,
                  disable: !e,
                  children: (0, i.jsx)(d.W, { children: this.renderSlideItem(t) })
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: l, playing: a } = this.props,
            { videoLoadError: s, videoLoaded: o } = this.state;
        return n
            ? (0, i.jsx)('div', { className: t })
            : (0, i.jsxs)('figure', {
                  className: r()(h.__invalid_tileMedia, t),
                  children: [null == e || s ? this.renderTypeImage() : this.renderTypeVideo(), null != l && l(a && o)]
              });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', {
                currentIndex: 0,
                videoLoadError: !1,
                videoLoaded: !1
            }),
            p(this, '_video', l.createRef()),
            p(this, 'videoTimeout', new c.V7()),
            p(this, 'videoPlaying', !1),
            p(this, 'handleToggleMute', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onToggleMute: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'handleVideoError', () => {
                this.setState({ videoLoadError: !0 });
            }),
            p(this, 'handleVideoLoaded', () => {
                this.setState({ videoLoaded: !0 });
            }),
            p(this, 'renderTypeVideo', () => {
                let { videoLoaded: e } = this.state,
                    { video: t, image: n, title: a, playing: s, muted: c, splashClassName: m, splashPlaceholderClassName: p, renderMediaOverlay: f } = this.props,
                    x = c ? u.OyP : u.gj8;
                return (0, i.jsxs)(l.Fragment, {
                    children: [
                        o.tq
                            ? null
                            : (0, i.jsx)(_.Z, {
                                  className: r()(h.splash, m),
                                  muted: c,
                                  loop: !0,
                                  preload: 'none',
                                  ref: this._video,
                                  onLoadedMetadata: this.handleVideoLoaded,
                                  onError: this.handleVideoError,
                                  children: (0, i.jsx)('source', {
                                      src: t,
                                      type: 'video/mp4'
                                  })
                              }),
                        (0, i.jsx)(d.W, {
                            children:
                                s && e
                                    ? null
                                    : (0, i.jsx)(
                                          g,
                                          {
                                              className: r()(h.splashPlaceholder, p),
                                              src: n,
                                              title: a
                                          },
                                          0
                                      )
                        }),
                        (0, i.jsx)(u.P3F, {
                            className: r()(h.muteContainer, {
                                [h.muteContainerPlaying]: s && e,
                                [h.muteContainerMediaOverlay]: null != f
                            }),
                            onClick: this.handleToggleMute,
                            children: s && e ? (0, i.jsx)(x, { className: h.mute }) : null
                        })
                    ]
                });
            }),
            p(this, 'nextItem', () => {
                let { slideImages: e } = this.props;
                null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
            }),
            p(this, 'renderSlideItem', (e) => {
                let { image: t, title: n, playing: l, splashClassName: a } = this.props,
                    { currentIndex: s } = this.state;
                return l
                    ? (0, i.jsx)(
                          g,
                          {
                              className: r()(h.splash, a),
                              src: e[s],
                              title: n
                          },
                          s
                      )
                    : (0, i.jsx)(
                          g,
                          {
                              className: r()(h.splash, a),
                              src: t,
                              title: n
                          },
                          'image'
                      );
            });
    }
}
let x = f;
