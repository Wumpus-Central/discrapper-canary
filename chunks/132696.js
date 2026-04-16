n.d(t, { A: () => A });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(615300),
    o = n(607399),
    d = n(451988),
    c = n(73939),
    u = n(397927),
    _ = n(133296),
    m = n(607470),
    h = n(61251);
class p extends a.Component {
    _animatedValue = new r.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), r.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        r.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
    };
    getImageStyle = () => ({ opacity: this._animatedValue });
    handleImageError = () => {
        this.setState({ imageLoadError: !0, imageLoading: !1 });
    };
    handleImageLoaded = () => {
        this.setState({ imageLoading: !1 });
    };
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: a } = this.state;
        return (0, i.jsx)(r.A.img, {
            className: s()({ [h.YC]: a }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded,
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: a, imageLoading: l } = this.state;
        return null == n || a
            ? (0, i.jsx)(r.A.div, { className: s()(h.gn, e), style: this.getImageStyle(), children: t })
            : (0, i.jsxs)(r.A.div, {
                  className: s()(l ? h.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      l
                          ? (0, i.jsx)(u.y$y, {
                                className: h.u1,
                                itemClassName: h.$N,
                                type: u.y$y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class g extends a.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = a.createRef();
    videoTimeout = new d.Ep();
    videoPlaying = !1;
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
    handleToggleMute = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onToggleMute: t } = this.props;
        t?.(e);
    };
    handleVideoError = () => {
        this.setState({ videoLoadError: !0 });
    };
    handleVideoLoaded = () => {
        this.setState({ videoLoaded: !0 });
    };
    renderTypeVideo = () => {
        let { videoLoaded: e } = this.state,
            {
                video: t,
                image: n,
                title: l,
                playing: r,
                muted: d,
                splashClassName: _,
                splashPlaceholderClassName: g,
                renderMediaOverlay: A,
            } = this.props,
            x = d ? u._RO : u.HKD;
        return (0, i.jsxs)(a.Fragment, {
            children: [
                o.Fr
                    ? null
                    : (0, i.jsx)(m.A, {
                          className: s()(h.Yi, _),
                          muted: d,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, i.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, i.jsx)(c.F, {
                    children: r && e ? null : (0, i.jsx)(p, { className: s()(h.NB, g), src: n, title: l }, 0),
                }),
                (0, i.jsx)(u.DUT, {
                    className: s()(h.b4, { [h.HY]: r && e, [h.Hy]: null != A }),
                    onClick: this.handleToggleMute,
                    children: r && e ? (0, i.jsx)(x, { className: h.i2 }) : null,
                }),
            ],
        });
    };
    nextItem = () => {
        let { slideImages: e } = this.props;
        null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
    };
    renderSlideItem = (e) => {
        let { image: t, title: n, playing: a, splashClassName: l } = this.props,
            { currentIndex: r } = this.state;
        return a
            ? (0, i.jsx)(p, { className: s()(h.Yi, l), src: e[r], title: n }, r)
            : (0, i.jsx)(p, { className: s()(h.Yi, l), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: a, splashClassName: l } = this.props;
        return null == t
            ? (0, i.jsx)(p, { className: s()(h.Yi, l), src: n, title: a }, "image")
            : (0, i.jsx)(_.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: h.mZ,
                  disable: !e,
                  children: (0, i.jsx)(c.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: a, playing: l } = this.props,
            { videoLoadError: r, videoLoaded: o } = this.state;
        return n
            ? (0, i.jsx)("div", { className: t })
            : (0, i.jsxs)("figure", {
                  className: s()(h.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != a && a(l && o)],
              });
    }
}
let A = g;
