n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(615300),
    o = n(607399),
    d = n(451988),
    c = n(73939),
    u = n(289873),
    m = n(358618),
    _ = n(983851),
    h = n(939249),
    p = n(133296),
    g = n(607470),
    A = n(61251);
class f extends l.Component {
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
            { imageLoading: l } = this.state;
        return (0, i.jsx)(r.A.img, {
            className: s()({ [A.YC]: l }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded,
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: l, imageLoading: a } = this.state;
        return null == n || l
            ? (0, i.jsx)(r.A.div, { className: s()(A.gn, e), style: this.getImageStyle(), children: t })
            : (0, i.jsxs)(r.A.div, {
                  className: s()(a ? A.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
                          ? (0, i.jsx)(u.y, {
                                className: A.u1,
                                itemClassName: A.$N,
                                type: u.y.Type.PULSING_ELLIPSIS,
                                animated: !0,
                            })
                          : null,
                      this.renderMedia(),
                  ],
              });
    }
}
class x extends l.Component {
    state = { currentIndex: 0, videoLoadError: !1, videoLoaded: !1 };
    _video = l.createRef();
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
                title: a,
                playing: r,
                muted: d,
                splashClassName: u,
                splashPlaceholderClassName: p,
                renderMediaOverlay: x,
            } = this.props,
            C = d ? m._ : _.H;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                o.Fr
                    ? null
                    : (0, i.jsx)(g.A, {
                          className: s()(A.Yi, u),
                          muted: d,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, i.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, i.jsx)(c.F, {
                    children: r && e ? null : (0, i.jsx)(f, { className: s()(A.NB, p), src: n, title: a }, 0),
                }),
                (0, i.jsx)(h.D, {
                    className: s()(A.b4, { [A.HY]: r && e, [A.Hy]: null != x }),
                    onClick: this.handleToggleMute,
                    children: r && e ? (0, i.jsx)(C, { className: A.i2 }) : null,
                }),
            ],
        });
    };
    nextItem = () => {
        let { slideImages: e } = this.props;
        null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
    };
    renderSlideItem = (e) => {
        let { image: t, title: n, playing: l, splashClassName: a } = this.props,
            { currentIndex: r } = this.state;
        return l
            ? (0, i.jsx)(f, { className: s()(A.Yi, a), src: e[r], title: n }, r)
            : (0, i.jsx)(f, { className: s()(A.Yi, a), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: l, splashClassName: a } = this.props;
        return null == t
            ? (0, i.jsx)(f, { className: s()(A.Yi, a), src: n, title: l }, "image")
            : (0, i.jsx)(p.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: A.mZ,
                  disable: !e,
                  children: (0, i.jsx)(c.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: l, playing: a } = this.props,
            { videoLoadError: r, videoLoaded: o } = this.state;
        return n
            ? (0, i.jsx)("div", { className: t })
            : (0, i.jsxs)("figure", {
                  className: s()(A.__invalid_tileMedia, t),
                  children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != l && l(a && o)],
              });
    }
}
let C = x;
