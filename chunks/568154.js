i.d(e, {
    Z: () => y,
    h: () => w
}),
    i(47120);
var s,
    n = i(200651),
    a = i(192379),
    h = i(120356),
    r = i.n(h),
    o = i(477690),
    l = i(877604),
    d = i(624138),
    c = i(133853),
    u = i(686694),
    p = i(898625),
    f = i(126649);
function m(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let v = (0, d.Mg)(o.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);
function g(t, e) {
    let { innerWidth: i, innerHeight: s } = window;
    if (0 === t || 0 === e) return null;
    let n = e / t,
        a = i,
        h = Math.round(i * n);
    return (
        h < s && ((h = s), (a = Math.round(s * (n = t / e)))),
        {
            naturalWidth: t,
            naturalHeight: e,
            width: a,
            height: h
        }
    );
}
function w(t) {
    let { splash: e, children: i } = t,
        [{ width: s, height: h }, o] = a.useState({
            width: 0,
            height: 0,
            naturalHeight: 0,
            naturalWidth: 0
        });
    return (
        a.useEffect(() => {
            function t() {
                o((t) => {
                    let { naturalWidth: e, naturalHeight: i } = t,
                        s = g(e, i);
                    return null != s ? s : t;
                });
            }
            return window.addEventListener('resize', t), () => window.removeEventListener('reslize', t);
        }, []),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(l.Z, {
                    className: f.rightSplit,
                    onLoad: function (t) {
                        let { currentTarget: e } = t,
                            { naturalWidth: i, naturalHeight: s } = e,
                            n = g(i, s);
                        null != n && o(n);
                    },
                    src: e,
                    width: s,
                    height: h
                }),
                (0, n.jsx)('div', {
                    className: r()(f.leftSplit, { [f.nonEmbeddedLeftSplit]: !0 }),
                    children: i
                })
            ]
        })
    );
}
class b extends (s = a.PureComponent) {
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    calculateShowWaveAnimation() {
        return window.innerWidth > v;
    }
    renderSplashArt() {
        let { splash: t, embedded: e } = this.props,
            { width: i, height: s } = this.state;
        return null != t
            ? (0, n.jsx)(l.Z, {
                  className: r()(f.rightSplit, { [f.embedded]: e }),
                  src: t,
                  width: i,
                  height: s,
                  onLoad: this.handleLoad
              })
            : null;
    }
    renderWave() {
        let { waveState: t, updateWaveState: e, embedded: i } = this.props,
            { showWaveAnimation: s, splashLoaded: a } = this.state;
        return s
            ? (0, n.jsx)(u.Z, {
                  embedded: i,
                  waveState: t,
                  updateWaveState: e,
                  hideFallback: !a
              })
            : (0, n.jsx)('div', { className: f.mobileWave });
    }
    renderContent() {
        let { children: t, waveState: e, showLogo: i, logoClassName: s, embedded: h } = this.props,
            { showWaveAnimation: o } = this.state;
        return (0, n.jsxs)(a.Fragment, {
            children: [
                this.renderWave(),
                (0, n.jsxs)('div', {
                    className: r()(f.leftSplit, { [f.nonEmbeddedLeftSplit]: h }),
                    children: [
                        i
                            ? (0, n.jsx)(c.Z, {
                                  show: !o || (e === p.hO.ENTERED && e !== p.hO.FILLING),
                                  className: r()(f.logo, s)
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
            className: r()(t, f.wrapper),
            children: [this.renderSplashArt(), this.renderContent()]
        });
    }
    constructor(...t) {
        super(...t),
            m(this, 'state', {
                naturalWidth: 0,
                naturalHeight: 0,
                width: 0,
                height: 0,
                showWaveAnimation: this.calculateShowWaveAnimation(),
                splashLoaded: !1
            }),
            m(this, 'handleResize', () => {
                let { naturalWidth: t, naturalHeight: e } = this.state,
                    i = g(t, e),
                    s = this.calculateShowWaveAnimation();
                if (null != i) {
                    var n, a;
                    this.setState(
                        ((n = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {},
                                    s = Object.keys(i);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (t) {
                                            return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                        })
                                    )),
                                    s.forEach(function (e) {
                                        m(t, e, i[e]);
                                    });
                            }
                            return t;
                        })({}, i)),
                        (a = a = { showWaveAnimation: s }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                            : (function (t, e) {
                                  var i = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(t);
                                      i.push.apply(i, s);
                                  }
                                  return i;
                              })(Object(a)).forEach(function (t) {
                                  Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(a, t));
                              }),
                        n)
                    );
                } else this.setState({ showWaveAnimation: s });
            }),
            m(this, 'handleLoad', (t) => {
                let { currentTarget: e } = t,
                    { naturalWidth: i, naturalHeight: s } = e,
                    n = g(i, s);
                null != n && this.setState(n), this.setState({ splashLoaded: !0 }), window.removeEventListener('resize', this.handleResize), window.addEventListener('resize', this.handleResize);
            });
    }
}
m(b, 'defaultProps', { embedded: !1 });
let y = 12633 == i.j ? b : null;
