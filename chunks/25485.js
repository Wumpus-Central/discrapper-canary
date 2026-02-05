i.d(e, { g: () => g });
var s = i(627968),
    n = i(64700),
    a = i(503698),
    h = i.n(a),
    l = i(319060),
    r = i(4616),
    o = i(240248),
    d = i(942156),
    c = i(338764),
    p = i(852431),
    u = i(117073);
let m = (0, o.xI)(l.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);
function v(t, e) {
    let { innerWidth: i, innerHeight: s } = window;
    if (0 === t || 0 === e) return null;
    let n = e / t,
        a = i,
        h = Math.round(i * n);
    return (
        h < s && ((h = s), (a = Math.round(s * (n = t / e)))),
        { naturalWidth: t, naturalHeight: e, width: a, height: h }
    );
}
function g(t) {
    let { splash: e, children: i } = t,
        [{ width: a, height: l }, o] = n.useState({ width: 0, height: 0, naturalHeight: 0, naturalWidth: 0 });
    return (
        n.useEffect(() => {
            function t() {
                o((t) => {
                    let { naturalWidth: e, naturalHeight: i } = t;
                    return v(e, i) ?? t;
                });
            }
            return window.addEventListener("resize", t), () => window.removeEventListener("reslize", t);
        }, []),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(r.A, {
                    className: u.v_,
                    onLoad: function (t) {
                        let { currentTarget: e } = t,
                            { naturalWidth: i, naturalHeight: s } = e,
                            n = v(i, s);
                        null != n && o(n);
                    },
                    src: e,
                    width: a,
                    height: l,
                }),
                (0, s.jsx)("div", { className: h()(u.gh, { [u.$T]: !0 }), children: i }),
            ],
        })
    );
}
class w extends n.PureComponent {
    state = {
        naturalWidth: 0,
        naturalHeight: 0,
        width: 0,
        height: 0,
        showWaveAnimation: this.calculateShowWaveAnimation(),
        splashLoaded: !1,
    };
    static defaultProps = { embedded: !1 };
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    calculateShowWaveAnimation() {
        return window.innerWidth > m;
    }
    handleResize = () => {
        let { naturalWidth: t, naturalHeight: e } = this.state,
            i = v(t, e),
            s = this.calculateShowWaveAnimation();
        null != i ? this.setState({ ...i, showWaveAnimation: s }) : this.setState({ showWaveAnimation: s });
    };
    handleLoad = (t) => {
        let { currentTarget: e } = t,
            { naturalWidth: i, naturalHeight: s } = e,
            n = v(i, s);
        null != n && this.setState(n),
            this.setState({ splashLoaded: !0 }),
            window.removeEventListener("resize", this.handleResize),
            window.addEventListener("resize", this.handleResize);
    };
    renderSplashArt() {
        let { splash: t, embedded: e } = this.props,
            { width: i, height: n } = this.state;
        return null != t
            ? (0, s.jsx)(r.A, {
                  className: h()(u.v_, { [u.F9]: e }),
                  src: t,
                  width: i,
                  height: n,
                  onLoad: this.handleLoad,
              })
            : null;
    }
    renderWave() {
        let { waveState: t, updateWaveState: e, embedded: i } = this.props,
            { showWaveAnimation: n, splashLoaded: a } = this.state;
        return n
            ? (0, s.jsx)(c.A, { embedded: i, waveState: t, updateWaveState: e, hideFallback: !a })
            : (0, s.jsx)("div", { className: u.sC });
    }
    renderContent() {
        let { children: t, waveState: e, showLogo: i, logoClassName: a, embedded: l } = this.props,
            { showWaveAnimation: r } = this.state;
        return (0, s.jsxs)(n.Fragment, {
            children: [
                this.renderWave(),
                (0, s.jsxs)("div", {
                    className: h()(u.gh, { [u.$T]: l }),
                    children: [
                        i
                            ? (0, s.jsx)(d.A, {
                                  show: !r || (e === p.go.ENTERED && e !== p.go.FILLING),
                                  className: h()(u.wm, a),
                              })
                            : null,
                        t,
                    ],
                }),
            ],
        });
    }
    render() {
        let { className: t } = this.props;
        return (0, s.jsxs)("div", {
            className: h()(t, u.iE),
            children: [this.renderSplashArt(), this.renderContent()],
        });
    }
}
