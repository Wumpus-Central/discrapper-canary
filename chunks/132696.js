n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(615300),
    o = n(607399),
    d = n(451988),
    c = n(73939),
    u = n(397927),
    m = n(133296),
    _ = n(607470),
    h = n(112266);
class p extends l.Component {
    _animatedValue = new s.A.Value(1);
    state = { imageLoadError: !1, imageLoading: !0 };
    componentWillEnter = (e) => {
        this._animatedValue.setValue(0), s.A.timing(this._animatedValue, { toValue: 1, duration: 400 }).start(e);
    };
    componentWillLeave = (e) => {
        s.A.timing(this._animatedValue, { toValue: 0, duration: 400 }).start(e);
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
        return (0, i.jsx)(s.A.img, {
            className: r()({ [h.YC]: l }, t),
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
            ? (0, i.jsx)(s.A.div, { className: r()(h.gn, e), style: this.getImageStyle(), children: t })
            : (0, i.jsxs)(s.A.div, {
                  className: r()(a ? h.g4 : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
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
class g extends l.Component {
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
                playing: s,
                muted: d,
                splashClassName: m,
                splashPlaceholderClassName: g,
                renderMediaOverlay: A,
            } = this.props,
            f = d ? u._RO : u.HKD;
        return (0, i.jsxs)(l.Fragment, {
            children: [
                o.Fr
                    ? null
                    : (0, i.jsx)(_.A, {
                          className: r()(h.Yi, m),
                          muted: d,
                          loop: !0,
                          preload: "none",
                          ref: this._video,
                          onLoadedMetadata: this.handleVideoLoaded,
                          onError: this.handleVideoError,
                          children: (0, i.jsx)("source", { src: t, type: "video/mp4" }),
                      }),
                (0, i.jsx)(c.F, {
                    children: s && e ? null : (0, i.jsx)(p, { className: r()(h.NB, g), src: n, title: a }, 0),
                }),
                (0, i.jsx)(u.DUT, {
                    className: r()(h.b4, { [h.HY]: s && e, [h.Hy]: null != A }),
                    onClick: this.handleToggleMute,
                    children: s && e ? (0, i.jsx)(f, { className: h.i2 }) : null,
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
            { currentIndex: s } = this.state;
        return l
            ? (0, i.jsx)(p, { className: r()(h.Yi, a), src: e[s], title: n }, s)
            : (0, i.jsx)(p, { className: r()(h.Yi, a), src: t, title: n }, "image");
    };
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: l, splashClassName: a } = this.props;
        return null == t
            ? (0, i.jsx)(p, { className: r()(h.Yi, a), src: n, title: l }, "image")
            : (0, i.jsx)(m.A, {
                  onInterval: this.nextItem,
                  interval: 2e3,
                  className: h.mZ,
                  disable: !e,
                  children: (0, i.jsx)(c.F, { children: this.renderSlideItem(t) }),
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: l, playing: a } = this.props,
            { videoLoadError: s, videoLoaded: o } = this.state;
        return n
            ? (0, i.jsx)("div", { className: t })
            : (0, i.jsxs)("figure", {
                  className: r()(h.__invalid_tileMedia, t),
                  children: [null == e || s ? this.renderTypeImage() : this.renderTypeVideo(), null != l && l(a && o)],
              });
    }
}
let A = g;
