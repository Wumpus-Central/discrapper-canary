i.d(e, { h: () => w }), i(388685);
var s,
    n = i(54381),
    r = i(473749),
    a = i(120356),
    h = i.n(a),
    l = i(477690),
    o = i(877604),
    c = i(624138),
    d = i(133853),
    u = i(686694),
    p = i(898625),
    f = i(771858);
function m(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
let g = (0, c.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);
function v(t, e) {
    let { innerWidth: i, innerHeight: s } = window;
    if (0 === t || 0 === e) return null;
    let n = e / t,
        r = i,
        a = Math.round(i * n);
    return (
        a < s && ((a = s), (r = Math.round(s * (n = t / e)))),
        {
            naturalWidth: t,
            naturalHeight: e,
            width: r,
            height: a,
        }
    );
}
function w(t) {
    let { splash: e, children: i } = t,
        [{ width: s, height: a }, l] = r.useState({
            width: 0,
            height: 0,
            naturalHeight: 0,
            naturalWidth: 0,
        });
    return (
        r.useEffect(() => {
            function t() {
                l((t) => {
                    let { naturalWidth: e, naturalHeight: i } = t,
                        s = v(e, i);
                    return null != s ? s : t;
                });
            }
            return window.addEventListener("resize", t), () => window.removeEventListener("reslize", t);
        }, []),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(o.Z, {
                    className: f.rightSplit,
                    onLoad: function (t) {
                        let { currentTarget: e } = t,
                            { naturalWidth: i, naturalHeight: s } = e,
                            n = v(i, s);
                        null != n && l(n);
                    },
                    src: e,
                    width: s,
                    height: a,
                }),
                (0, n.jsx)("div", {
                    className: h()(f.leftSplit, { [f.nonEmbeddedLeftSplit]: !0 }),
                    children: i,
                }),
            ],
        })
    );
}
class b extends (s = r.PureComponent) {
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    calculateShowWaveAnimation() {
        return window.innerWidth > g;
    }
    renderSplashArt() {
        let { splash: t, embedded: e } = this.props,
            { width: i, height: s } = this.state;
        return null != t
            ? (0, n.jsx)(o.Z, {
                  className: h()(f.rightSplit, { [f.embedded]: e }),
                  src: t,
                  width: i,
                  height: s,
                  onLoad: this.handleLoad,
              })
            : null;
    }
    renderWave() {
        let { waveState: t, updateWaveState: e, embedded: i } = this.props,
            { showWaveAnimation: s, splashLoaded: r } = this.state;
        return s
            ? (0, n.jsx)(u.Z, {
                  embedded: i,
                  waveState: t,
                  updateWaveState: e,
                  hideFallback: !r,
              })
            : (0, n.jsx)("div", { className: f.mobileWave });
    }
    renderContent() {
        let { children: t, waveState: e, showLogo: i, logoClassName: s, embedded: a } = this.props,
            { showWaveAnimation: l } = this.state;
        return (0, n.jsxs)(r.Fragment, {
            children: [
                this.renderWave(),
                (0, n.jsxs)("div", {
                    className: h()(f.leftSplit, { [f.nonEmbeddedLeftSplit]: a }),
                    children: [
                        i
                            ? (0, n.jsx)(d.Z, {
                                  show: !l || (e === p.hO.ENTERED && e !== p.hO.FILLING),
                                  className: h()(f.logo, s),
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
        return (0, n.jsxs)("div", {
            className: h()(t, f.wrapper),
            children: [this.renderSplashArt(), this.renderContent()],
        });
    }
    constructor(...t) {
        super(...t),
            m(this, "state", {
                naturalWidth: 0,
                naturalHeight: 0,
                width: 0,
                height: 0,
                showWaveAnimation: this.calculateShowWaveAnimation(),
                splashLoaded: !1,
            }),
            m(this, "handleResize", () => {
                let { naturalWidth: t, naturalHeight: e } = this.state,
                    i = v(t, e),
                    s = this.calculateShowWaveAnimation();
                null != i
                    ? this.setState(
                          (function (t, e) {
                              return (
                                  (e = null != e ? e : {}),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                                      : (function (t, e) {
                                            var i = Object.keys(t);
                                            if (Object.getOwnPropertySymbols) {
                                                var s = Object.getOwnPropertySymbols(t);
                                                i.push.apply(i, s);
                                            }
                                            return i;
                                        })(Object(e)).forEach(function (i) {
                                            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
                                        }),
                                  t
                              );
                          })(
                              (function (t) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var i = null != arguments[e] ? arguments[e] : {},
                                          s = Object.keys(i);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (s = s.concat(
                                              Object.getOwnPropertySymbols(i).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                              }),
                                          )),
                                          s.forEach(function (e) {
                                              m(t, e, i[e]);
                                          });
                                  }
                                  return t;
                              })({}, i),
                              { showWaveAnimation: s },
                          ),
                      )
                    : this.setState({ showWaveAnimation: s });
            }),
            m(this, "handleLoad", (t) => {
                let { currentTarget: e } = t,
                    { naturalWidth: i, naturalHeight: s } = e,
                    n = v(i, s);
                null != n && this.setState(n),
                    this.setState({ splashLoaded: !0 }),
                    window.removeEventListener("resize", this.handleResize),
                    window.addEventListener("resize", this.handleResize);
            });
    }
}
m(b, "defaultProps", { embedded: !1 });
