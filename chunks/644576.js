a.d(t, { A: () => S });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(397927),
    o = a(503879),
    c = a(871751),
    d = a(259407),
    u = a(323933),
    h = a(619517),
    m = a(248643),
    p = a(652176),
    _ = a(590858),
    g = a(652215),
    x = a(985018),
    A = a(60370);
let C = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)(m.A, {
            ...a,
            className: l()(A.Zy, t),
            mediaPlayerClassName: A.Zy,
            renderLinkComponent: p.bU,
        });
    },
    b = (e) => {
        let { containerClassName: t, className: a, ...i } = e;
        return (0, n.jsx)(h.Ay, { ...i, className: l()(a, t) });
    },
    v = { width: 1280, height: 720 },
    f = { width: 640, height: 360 },
    j = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${g.NzX}`,
    I = (e) => {
        let t,
            a,
            i,
            { item: s, onPlay: l, volume: r, onVolumeChange: u, onMute: h, isMuted: m, autoPlay: x } = e;
        if (s.type === g.geh.YOUTUBE_VIDEO)
            (t = { url: (0, g.PE$)(s.youtubeVideoId), ...v }),
                (a = { url: `${(0, g.uJ2)(s.youtubeVideoId)}?${j}`, ...f }),
                (i = d.mt.YOUTUBE);
        else {
            let e = null != s.width ? s.width : 0,
                n = null != s.height ? s.height : 0;
            (t = { url: s.thumbnailSrc, width: e, height: n }),
                (a = { url: s.src, proxyURL: s.src, width: e, height: n });
        }
        return (0, n.jsx)("div", {
            className: A.x,
            children: (0, n.jsx)(c.rr, {
                className: A.Zy,
                iframeWrapperClassName: A.Zy,
                href: null,
                thumbnail: t,
                video: a,
                provider: i,
                maxHeight: o.s.SMALL.height,
                maxWidth: _.q.SMALL,
                onPlay: l,
                playable: !0,
                volume: r,
                onVolumeChange: u,
                autoMute: m,
                onMute: h,
                autoPlay: x,
                renderImageComponent: b,
                renderVideoComponent: C,
                renderLinkComponent: p.bU,
            }),
        });
    };
class E extends i.PureComponent {
    static defaultProps = { paused: !1, videoAutoPlay: !0 };
    state = {
        hasInteracted: !1,
        isVideoPlaying: !1,
        isMuted: !0,
        volume: 1,
        status: new Map(),
        imageLoadingStartTime: new Map(),
    };
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 &&
            e[0].type === g.geh.IMG &&
            this.setState({
                imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()),
            });
    }
    handlePlay = (e) => {
        this.setState({ isVideoPlaying: !0, hasInteracted: !e });
    };
    handleVolumeChange = (e) => {
        this.setState({ volume: e, hasInteracted: !0 });
    };
    handleMute = (e) => {
        this.setState({ isMuted: e, hasInteracted: !0 });
    };
    handleChangeItem = (e) => {
        this.setState({ isVideoPlaying: !1 }),
            e.type === g.geh.IMG &&
                this.setState({
                    imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                });
    };
    handleIntentionalChange = (e, t, a, n) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: i } = this.props;
        null != i && i(e, t, a, n);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: a } = this.props;
        null != a && a(e, t), this.setState({ hasInteracted: !0 });
    }
    handleOnErrorImg = (e) => {
        this.setState({ status: new Map(this.state.status).set(e.target.src, "errored") });
    };
    handleOnLoadImg = (e) => {
        let { onImageLoad: t } = this.props;
        this.setState({ status: new Map(this.state.status).set(e.target.src, "loaded") });
        let a = this.state.imageLoadingStartTime.get(e.target.src),
            n = null != a ? Date.now() - a : void 0;
        t?.({ src: e.target.src, loadTimeMs: n });
    };
    renderItem = (e, t) => {
        let a,
            { isMuted: i, volume: s } = this.state,
            { videoAutoPlay: o } = this.props;
        switch (e.type) {
            case g.geh.YOUTUBE_VIDEO:
            case g.geh.VIDEO:
                a = (0, n.jsx)(I, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: i,
                    volume: s,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: o,
                });
                break;
            case g.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, n.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t.UvDfMz),
                    });
                    return (0, n.jsx)("div", {
                        className: A.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? x.intl.string(x.t.X4IxWL);
                    a = (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(r.y$y, {
                                className: l()(A.u1, { [A.R]: void 0 !== this.state.status.get(e.src) }),
                                type: r.y$y.Type.SPINNING_CIRCLE,
                            }),
                            (0, n.jsx)("img", {
                                onError: this.handleOnErrorImg,
                                onLoad: this.handleOnLoadImg,
                                className: l()(A.JD, { [A.R]: "loaded" !== this.state.status.get(e.src) }),
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
        return (0, n.jsx)(r.DUT, { className: A.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: a });
    };
    render() {
        let { items: e, autoplayInterval: t, className: a, paused: i, themedPagination: s } = this.props,
            { hasInteracted: r } = this.state;
        return (0, n.jsx)(u.A, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: i || r,
            renderItem: this.renderItem,
            className: l()(A.Gt, a),
            themedPagination: s,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
let S = E;
