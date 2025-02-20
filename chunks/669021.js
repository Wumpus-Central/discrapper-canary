n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(748780),
    s = n(873546),
    c = n(846519),
    d = n(215569),
    u = n(481060),
    p = n(679056),
    m = n(70097),
    f = n(793217);
function h(e, t, n) {
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
class g extends i.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: i } = this.state;
        return (0, r.jsx)(l.Z.img, {
            className: o()({ [f.imageLoading]: i }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: i, imageLoading: a } = this.state;
        return null == n || i
            ? (0, r.jsx)(l.Z.div, {
                  className: o()(f.titleContainer, e),
                  style: this.getImageStyle(),
                  children: t
              })
            : (0, r.jsxs)(l.Z.div, {
                  className: o()(a ? f.loadingContainer : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
                          ? (0, r.jsx)(u.$jN, {
                                className: f.spinner,
                                itemClassName: f.spinnerItem,
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
            h(this, '_animatedValue', new l.Z.Value(1)),
            h(this, 'state', {
                imageLoadError: !1,
                imageLoading: !0
            }),
            h(this, 'componentWillEnter', (e) => {
                this._animatedValue.setValue(0),
                    l.Z.timing(this._animatedValue, {
                        toValue: 1,
                        duration: 400
                    }).start(e);
            }),
            h(this, 'componentWillLeave', (e) => {
                l.Z.timing(this._animatedValue, {
                    toValue: 0,
                    duration: 400
                }).start(e);
            }),
            h(this, 'getImageStyle', () => ({ opacity: this._animatedValue })),
            h(this, 'handleImageError', () => {
                this.setState({
                    imageLoadError: !0,
                    imageLoading: !1
                });
            }),
            h(this, 'handleImageLoaded', () => {
                this.setState({ imageLoading: !1 });
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
        let { playing: e, slideImages: t, image: n, title: i, splashClassName: a } = this.props;
        return null == t
            ? (0, r.jsx)(
                  g,
                  {
                      className: o()(f.splash, a),
                      src: n,
                      title: i
                  },
                  'image'
              )
            : (0, r.jsx)(p.Z, {
                  onInterval: this.nextItem,
                  interval: 2000,
                  className: f.slideshowWrapper,
                  disable: !e,
                  children: (0, r.jsx)(d.W, { children: this.renderSlideItem(t) })
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: i, playing: a } = this.props,
            { videoLoadError: l, videoLoaded: s } = this.state;
        return n
            ? (0, r.jsx)('div', { className: t })
            : (0, r.jsxs)('figure', {
                  className: o()(f.__invalid_tileMedia, t),
                  children: [null == e || l ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(a && s)]
              });
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', {
                currentIndex: 0,
                videoLoadError: !1,
                videoLoaded: !1
            }),
            h(this, '_video', i.createRef()),
            h(this, 'videoTimeout', new c.V7()),
            h(this, 'videoPlaying', !1),
            h(this, 'handleToggleMute', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onToggleMute: t } = this.props;
                null == t || t(e);
            }),
            h(this, 'handleVideoError', () => {
                this.setState({ videoLoadError: !0 });
            }),
            h(this, 'handleVideoLoaded', () => {
                this.setState({ videoLoaded: !0 });
            }),
            h(this, 'renderTypeVideo', () => {
                let { videoLoaded: e } = this.state,
                    { video: t, image: n, title: a, playing: l, muted: c, splashClassName: p, splashPlaceholderClassName: h, renderMediaOverlay: _ } = this.props,
                    b = c ? u.OyP : u.gj8;
                return (0, r.jsxs)(i.Fragment, {
                    children: [
                        s.tq
                            ? null
                            : (0, r.jsx)(m.Z, {
                                  className: o()(f.splash, p),
                                  muted: c,
                                  loop: !0,
                                  preload: 'none',
                                  ref: this._video,
                                  onLoadedMetadata: this.handleVideoLoaded,
                                  onError: this.handleVideoError,
                                  children: (0, r.jsx)('source', {
                                      src: t,
                                      type: 'video/mp4'
                                  })
                              }),
                        (0, r.jsx)(d.W, {
                            children:
                                l && e
                                    ? null
                                    : (0, r.jsx)(
                                          g,
                                          {
                                              className: o()(f.splashPlaceholder, h),
                                              src: n,
                                              title: a
                                          },
                                          0
                                      )
                        }),
                        (0, r.jsx)(u.P3F, {
                            className: o()(f.muteContainer, {
                                [f.muteContainerPlaying]: l && e,
                                [f.muteContainerMediaOverlay]: null != _
                            }),
                            onClick: this.handleToggleMute,
                            children: l && e ? (0, r.jsx)(b, { className: f.mute }) : null
                        })
                    ]
                });
            }),
            h(this, 'nextItem', () => {
                let { slideImages: e } = this.props;
                null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
            }),
            h(this, 'renderSlideItem', (e) => {
                let { image: t, title: n, playing: i, splashClassName: a } = this.props,
                    { currentIndex: l } = this.state;
                return i
                    ? (0, r.jsx)(
                          g,
                          {
                              className: o()(f.splash, a),
                              src: e[l],
                              title: n
                          },
                          l
                      )
                    : (0, r.jsx)(
                          g,
                          {
                              className: o()(f.splash, a),
                              src: t,
                              title: n
                          },
                          'image'
                      );
            });
    }
}
let b = _;
