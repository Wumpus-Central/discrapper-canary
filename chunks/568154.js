e.d(i, {
    h: function () {
        return w;
    }
}),
    e(47120);
var s,
    n = e(200651),
    h = e(192379),
    a = e(120356),
    r = e.n(a),
    l = e(477690),
    o = e(877604),
    d = e(624138),
    u = e(133853),
    c = e(686694),
    p = e(898625),
    m = e(407530);
function f(t, i, e) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = e),
        t
    );
}
let v = (0, d.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);
function g(t, i) {
    let { innerWidth: e, innerHeight: s } = window;
    if (0 === t || 0 === i) return null;
    let n = i / t,
        h = e,
        a = Math.round(e * n);
    return (
        a < s && ((a = s), (h = Math.round(s * (n = t / i)))),
        {
            naturalWidth: t,
            naturalHeight: i,
            width: h,
            height: a
        }
    );
}
function w(t) {
    let { splash: i, children: e } = t,
        [{ width: s, height: a }, l] = h.useState({
            width: 0,
            height: 0,
            naturalHeight: 0,
            naturalWidth: 0
        });
    return (
        h.useEffect(() => {
            function t() {
                l((t) => {
                    let { naturalWidth: i, naturalHeight: e } = t,
                        s = g(i, e);
                    return null != s ? s : t;
                });
            }
            return window.addEventListener('resize', t), () => window.removeEventListener('reslize', t);
        }, []),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(o.Z, {
                    className: r()(m.rightSplit),
                    onLoad: function (t) {
                        let { currentTarget: i } = t,
                            { naturalWidth: e, naturalHeight: s } = i,
                            n = g(e, s);
                        null != n && l(n);
                    },
                    src: i,
                    width: s,
                    height: a
                }),
                (0, n.jsx)('div', {
                    className: r()(m.leftSplit, { [m.nonEmbeddedLeftSplit]: !0 }),
                    children: e
                })
            ]
        })
    );
}
class b extends (s = h.PureComponent) {
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    calculateShowWaveAnimation() {
        return window.innerWidth > v;
    }
    renderSplashArt() {
        let { splash: t, embedded: i } = this.props,
            { width: e, height: s } = this.state;
        return null != t
            ? (0, n.jsx)(o.Z, {
                  className: r()(m.rightSplit, { [m.embedded]: i }),
                  src: t,
                  width: e,
                  height: s,
                  onLoad: this.handleLoad
              })
            : null;
    }
    renderWave() {
        let { waveState: t, updateWaveState: i, embedded: e } = this.props,
            { showWaveAnimation: s, splashLoaded: h } = this.state;
        return s
            ? (0, n.jsx)(c.Z, {
                  embedded: e,
                  waveState: t,
                  updateWaveState: i,
                  hideFallback: !h
              })
            : (0, n.jsx)('div', { className: m.mobileWave });
    }
    renderContent() {
        let { children: t, waveState: i, showLogo: e, logoClassName: s, embedded: a } = this.props,
            { showWaveAnimation: l } = this.state;
        return (0, n.jsxs)(h.Fragment, {
            children: [
                this.renderWave(),
                (0, n.jsxs)('div', {
                    className: r()(m.leftSplit, { [m.nonEmbeddedLeftSplit]: a }),
                    children: [
                        e
                            ? (0, n.jsx)(u.Z, {
                                  show: !l || (i === p.hO.ENTERED && i !== p.hO.FILLING),
                                  className: r()(m.logo, s)
                              })
                            : null,
                        t
                    ]
                })
            ]
        });
    }
    render() {
        let { className: t } = this.props;
        return (0, n.jsxs)('div', {
            className: r()(t, m.wrapper),
            children: [this.renderSplashArt(), this.renderContent()]
        });
    }
    constructor(...t) {
        super(...t),
            f(this, 'state', {
                naturalWidth: 0,
                naturalHeight: 0,
                width: 0,
                height: 0,
                showWaveAnimation: this.calculateShowWaveAnimation(),
                splashLoaded: !1
            }),
            f(this, 'handleResize', () => {
                let { naturalWidth: t, naturalHeight: i } = this.state,
                    e = g(t, i),
                    s = this.calculateShowWaveAnimation();
                null != e
                    ? this.setState({
                          ...e,
                          showWaveAnimation: s
                      })
                    : this.setState({ showWaveAnimation: s });
            }),
            f(this, 'handleLoad', (t) => {
                let { currentTarget: i } = t,
                    { naturalWidth: e, naturalHeight: s } = i,
                    n = g(e, s);
                null != n && this.setState(n), this.setState({ splashLoaded: !0 }), window.removeEventListener('resize', this.handleResize), window.addEventListener('resize', this.handleResize);
            });
    }
}
f(b, 'defaultProps', { embedded: !1 }), (i.Z = 12633 == e.j ? b : null);
