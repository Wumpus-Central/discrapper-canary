n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    s = n(873546),
    c = n(846519),
    d = n(215569),
    u = n(481060),
    m = n(679056),
    h = n(70097),
    f = n(273581);
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
class _ extends r.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: r } = this.state;
        return (0, i.jsx)(o.Z.img, {
            className: a()({ [f.imageLoading]: r }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: r, imageLoading: l } = this.state;
        return null == n || r
            ? (0, i.jsx)(o.Z.div, {
                  className: a()(f.titleContainer, e),
                  style: this.getImageStyle(),
                  children: t
              })
            : (0, i.jsxs)(o.Z.div, {
                  className: a()(l ? f.loadingContainer : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, i.jsx)(u.Spinner, {
                                className: f.spinner,
                                itemClassName: f.spinnerItem,
                                type: u.Spinner.Type.PULSING_ELLIPSIS,
                                animated: !0
                            })
                          : null,
                      this.renderMedia()
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            p(this, '_animatedValue', new o.Z.Value(1)),
            p(this, 'state', {
                imageLoadError: !1,
                imageLoading: !0
            }),
            p(this, 'componentWillEnter', (e) => {
                this._animatedValue.setValue(0),
                    o.Z.timing(this._animatedValue, {
                        toValue: 1,
                        duration: 400
                    }).start(e);
            }),
            p(this, 'componentWillLeave', (e) => {
                o.Z.timing(this._animatedValue, {
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
class g extends r.Component {
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
        let { playing: e, slideImages: t, image: n, title: r, splashClassName: l } = this.props;
        return null == t
            ? (0, i.jsx)(
                  _,
                  {
                      className: a()(f.splash, l),
                      src: n,
                      title: r
                  },
                  'image'
              )
            : (0, i.jsx)(m.Z, {
                  onInterval: this.nextItem,
                  interval: 2000,
                  className: f.slideshowWrapper,
                  disable: !e,
                  children: (0, i.jsx)(d.W, { children: this.renderSlideItem(t) })
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: r, playing: l } = this.props,
            { videoLoadError: o, videoLoaded: s } = this.state;
        return n
            ? (0, i.jsx)('div', { className: t })
            : (0, i.jsxs)('figure', {
                  className: a()(f.__invalid_tileMedia, t),
                  children: [null == e || o ? this.renderTypeImage() : this.renderTypeVideo(), null != r && r(l && s)]
              });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', {
                currentIndex: 0,
                videoLoadError: !1,
                videoLoaded: !1
            }),
            p(this, '_video', r.createRef()),
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
                    { video: t, image: n, title: l, playing: o, muted: c, splashClassName: m, splashPlaceholderClassName: p, renderMediaOverlay: g } = this.props,
                    E = c ? u.VoiceXIcon : u.VoiceNormalIcon;
                return (0, i.jsxs)(r.Fragment, {
                    children: [
                        s.tq
                            ? null
                            : (0, i.jsx)(h.Z, {
                                  className: a()(f.splash, m),
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
                                o && e
                                    ? null
                                    : (0, i.jsx)(
                                          _,
                                          {
                                              className: a()(f.splashPlaceholder, p),
                                              src: n,
                                              title: l
                                          },
                                          0
                                      )
                        }),
                        (0, i.jsx)(u.Clickable, {
                            className: a()(f.muteContainer, {
                                [f.muteContainerPlaying]: o && e,
                                [f.muteContainerMediaOverlay]: null != g
                            }),
                            onClick: this.handleToggleMute,
                            children: o && e ? (0, i.jsx)(E, { className: f.mute }) : null
                        })
                    ]
                });
            }),
            p(this, 'nextItem', () => {
                let { slideImages: e } = this.props;
                null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
            }),
            p(this, 'renderSlideItem', (e) => {
                let { image: t, title: n, playing: r, splashClassName: l } = this.props,
                    { currentIndex: o } = this.state;
                return r
                    ? (0, i.jsx)(
                          _,
                          {
                              className: a()(f.splash, l),
                              src: e[o],
                              title: n
                          },
                          o
                      )
                    : (0, i.jsx)(
                          _,
                          {
                              className: a()(f.splash, l),
                              src: t,
                              title: n
                          },
                          'image'
                      );
            });
    }
}
t.Z = g;
