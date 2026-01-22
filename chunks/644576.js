n.d(t, {
    A: () => N,
}),
    n(896048),
    n(65821);
var l,
    a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    c = n(397927),
    o = n(503879),
    d = n(871751),
    u = n(259407),
    p = n(323933),
    h = n(619517),
    m = n(248643),
    b = n(652176),
    f = n(590858),
    g = n(652215),
    x = n(985018),
    v = n(60370);

function j(e, t, n) {
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

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e, t) {
    if (null == e) return {};
    var n,
        l,
        a,
        r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++)
            (l = n[a]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
        return r;
    }
    if (
        ((r = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                a = {},
                r = Object.getOwnPropertyNames(e);
            for (l = 0; l < r.length; l++)
                (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
            (l = n[a]), !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
    return r;
}
let O = (e) => {
        let { className: t } = e,
            n = y(e, ["className"]);
        return (0, a.jsx)(
            m.A,
            _(A({}, n), {
                className: s()(v.Zy, t),
                mediaPlayerClassName: v.Zy,
                renderLinkComponent: b.bU,
            }),
        );
    },
    S = (e) => {
        let { containerClassName: t, className: n } = e,
            l = y(e, ["containerClassName", "className"]);
        return (0, a.jsx)(
            h.Ay,
            _(A({}, l), {
                className: s()(n, t),
            }),
        );
    },
    C = {
        width: 1280,
        height: 720,
    },
    E = {
        width: 640,
        height: 360,
    },
    I = (e) => {
        let t,
            n,
            l,
            { item: r, onPlay: i, volume: s, onVolumeChange: c, onMute: p, isMuted: h, autoPlay: m } = e;
        if (r.type === g.geh.YOUTUBE_VIDEO)
            (t = A(
                {
                    url: (0, g.PE$)(r.youtubeVideoId),
                },
                C,
            )),
                (n = A(
                    {
                        url: ""
                            .concat((0, g.uJ2)(r.youtubeVideoId), "?")
                            .concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
                    },
                    E,
                )),
                (l = u.mt.YOUTUBE);
        else {
            let e = null != r.width ? r.width : 0,
                l = null != r.height ? r.height : 0;
            (t = {
                url: r.thumbnailSrc,
                width: e,
                height: l,
            }),
                (n = {
                    url: r.src,
                    proxyURL: r.src,
                    width: e,
                    height: l,
                });
        }
        return (0, a.jsx)("div", {
            className: v.x,
            children: (0, a.jsx)(d.rr, {
                className: v.Zy,
                iframeWrapperClassName: v.Zy,
                href: null,
                thumbnail: t,
                video: n,
                provider: l,
                maxHeight: o.s.SMALL.height,
                maxWidth: f.q.SMALL,
                onPlay: i,
                playable: !0,
                volume: s,
                onVolumeChange: c,
                autoMute: h,
                onMute: p,
                autoPlay: m,
                renderImageComponent: S,
                renderVideoComponent: O,
                renderLinkComponent: b.bU,
            }),
        });
    };
class P extends (l = r.PureComponent) {
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 &&
            e[0].type === g.geh.IMG &&
            this.setState({
                imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()),
            });
    }
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t),
            this.setState({
                hasInteracted: !0,
            });
    }
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: l, themedPagination: r } = this.props,
            { hasInteracted: i } = this.state;
        return (0, a.jsx)(p.A, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: l || i,
            renderItem: this.renderItem,
            className: s()(v.Gt, n),
            themedPagination: r,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
    constructor(...e) {
        super(...e),
            j(this, "state", {
                hasInteracted: !1,
                isVideoPlaying: !1,
                isMuted: !0,
                volume: 1,
                status: new Map(),
                imageLoadingStartTime: new Map(),
            }),
            j(this, "handlePlay", (e) => {
                this.setState({
                    isVideoPlaying: !0,
                    hasInteracted: !e,
                });
            }),
            j(this, "handleVolumeChange", (e) => {
                this.setState({
                    volume: e,
                    hasInteracted: !0,
                });
            }),
            j(this, "handleMute", (e) => {
                this.setState({
                    isMuted: e,
                    hasInteracted: !0,
                });
            }),
            j(this, "handleChangeItem", (e) => {
                this.setState({
                    isVideoPlaying: !1,
                }),
                    e.type === g.geh.IMG &&
                        this.setState({
                            imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                        });
            }),
            j(this, "handleIntentionalChange", (e, t, n, l) => {
                this.setState({
                    hasInteracted: !0,
                });
                let { onIntentionalChange: a } = this.props;
                null != a && a(e, t, n, l);
            }),
            j(this, "handleOnErrorImg", (e) => {
                this.setState({
                    status: new Map(this.state.status).set(e.target.src, "errored"),
                });
            }),
            j(this, "handleOnLoadImg", (e) => {
                let { onImageLoad: t } = this.props;
                this.setState({
                    status: new Map(this.state.status).set(e.target.src, "loaded"),
                });
                let n = this.state.imageLoadingStartTime.get(e.target.src),
                    l = null != n ? Date.now() - n : void 0;
                null == t ||
                    t({
                        src: e.target.src,
                        loadTimeMs: l,
                    });
            }),
            j(this, "renderItem", (e, t) => {
                let n,
                    { isMuted: l, volume: r } = this.state,
                    { videoAutoPlay: i } = this.props;
                switch (e.type) {
                    case g.geh.YOUTUBE_VIDEO:
                    case g.geh.VIDEO:
                        n = (0, a.jsx)(I, {
                            item: e,
                            onPlay: this.handlePlay,
                            isMuted: l,
                            volume: r,
                            onVolumeChange: this.handleVolumeChange,
                            onMute: this.handleMute,
                            autoPlay: i,
                        });
                        break;
                    case g.geh.IMG:
                        if ("errored" === this.state.status.get(e.src)) {
                            let e = (0, a.jsx)(c.Heading, {
                                variant: "heading-xl/semibold",
                                children: x.intl.string(x.t.UvDfMz),
                            });
                            return (0, a.jsx)("div", {
                                className: v.Un,
                                children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                            });
                        }
                        {
                            var o;
                            let t = null != (o = e.alt) ? o : x.intl.string(x.t.X4IxWL);
                            n = (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(c.y$y, {
                                        className: s()(v.u1, {
                                            [v.R]: void 0 !== this.state.status.get(e.src),
                                        }),
                                        type: c.y$y.Type.SPINNING_CIRCLE,
                                    }),
                                    (0, a.jsx)("img", {
                                        onError: this.handleOnErrorImg,
                                        onLoad: this.handleOnLoadImg,
                                        className: s()(v.JD, {
                                            [v.R]: "loaded" !== this.state.status.get(e.src),
                                        }),
                                        src: e.src,
                                        alt: t,
                                    }),
                                ],
                            });
                        }
                        break;
                    default:
                        throw Error("Unexpected MediaType");
                }
                return (0, a.jsx)(c.DUT, {
                    className: v.Pj,
                    onClick: () => this.handleCurrentItemClick(e, t),
                    children: n,
                });
            });
    }
}
j(P, "defaultProps", {
    paused: !1,
    videoAutoPlay: !0,
});
let N = P;
