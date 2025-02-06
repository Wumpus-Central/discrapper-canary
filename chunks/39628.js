n.d(t, { Z: () => p }), n(47120);
var l,
    i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(846519),
    u = n(600164),
    c = n(969577);
function d(e, t, n) {
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
function m(e) {
    let { percentage: t, isSingleLine: n } = e;
    return (0, i.jsx)('div', {
        className: s()({
            [c.bar]: n,
            [c.barInMultiLine]: !n
        }),
        children: (0, i.jsx)('div', {
            className: c.barInner,
            style: { width: ''.concat(100 * Math.max(Math.min(t, 1), 0), '%') }
        })
    });
}
function h(e) {
    return String(e).padStart(2, '0');
}
function f(e) {
    let { time: t, padLargestUnit: n } = e,
        l = Math.floor(t) % 60,
        i = Math.floor(t / 60) % 60,
        r = Math.floor(t / 3600);
    return 0 === r ? (n ? ''.concat(h(i), ':').concat(h(l)) : ''.concat(i, ':').concat(h(l))) : n ? ''.concat(h(r), ':').concat(h(i), ':').concat(h(l)) : ''.concat(r, ':').concat(h(i), ':').concat(h(l));
}
class g extends (l = r.PureComponent) {
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({ now: Date.now() });
        });
    }
    componentWillUnmount() {
        this.timer.stop();
    }
    render() {
        let { start: e, end: t, className: n, themed: l, singleLine: r = !1 } = this.props,
            { now: a } = this.state,
            o = (t - e) / 1000,
            d = Math.max(Math.min((a - e) / 1000, o), 0);
        return r
            ? (0, i.jsxs)('div', {
                  className: s()(n, { [c.themed]: l }, c.singleLineContainer),
                  children: [
                      (0, i.jsx)('div', {
                          className: c.textLeftInSingleLine,
                          children: f({
                              time: d,
                              padLargestUnit: !0
                          })
                      }),
                      (0, i.jsx)('div', {
                          className: c.barInSingleLine,
                          children: (0, i.jsx)(m, {
                              percentage: d / o,
                              isSingleLine: !0
                          })
                      }),
                      (0, i.jsx)('div', {
                          className: c.textRight,
                          children: f({
                              time: o,
                              padLargestUnit: !0
                          })
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: s()(n, { [c.themed]: l }),
                  children: [
                      (0, i.jsx)(m, {
                          percentage: d / o,
                          isSingleLine: !1
                      }),
                      (0, i.jsxs)(u.Z, {
                          children: [
                              (0, i.jsx)(u.Z.Child, {
                                  grow: 1,
                                  className: c.textLeft,
                                  children: f({
                                      time: d,
                                      padLargestUnit: !1
                                  })
                              }),
                              (0, i.jsx)(u.Z.Child, {
                                  grow: 0,
                                  className: c.textRight,
                                  children: f({
                                      time: o,
                                      padLargestUnit: !1
                                  })
                              })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e), d(this, 'timer', new o.Xp()), d(this, 'state', { now: Date.now() });
    }
}
d(g, 'defaultProps', { themed: !1 });
let p = g;
