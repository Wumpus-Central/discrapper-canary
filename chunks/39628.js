n.d(t, { Z: () => f }), n(47120);
var l,
    i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(846519),
    c = n(600164),
    u = n(969577);
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
            [u.bar]: n,
            [u.barInMultiLine]: !n
        }),
        children: (0, i.jsx)('div', {
            className: u.barInner,
            style: { width: ''.concat(100 * Math.max(Math.min(t, 1), 0), '%') }
        })
    });
}
function p(e) {
    return String(e).padStart(2, '0');
}
function h(e) {
    let { time: t, padLargestUnit: n } = e,
        l = Math.floor(t) % 60,
        i = Math.floor(t / 60) % 60,
        r = Math.floor(t / 3600);
    return 0 === r ? (n ? ''.concat(p(i), ':').concat(p(l)) : ''.concat(i, ':').concat(p(l))) : n ? ''.concat(p(r), ':').concat(p(i), ':').concat(p(l)) : ''.concat(r, ':').concat(p(i), ':').concat(p(l));
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
                  className: s()(n, { [u.themed]: l }, u.singleLineContainer),
                  children: [
                      (0, i.jsx)('div', {
                          className: u.textLeftInSingleLine,
                          children: h({
                              time: d,
                              padLargestUnit: !0
                          })
                      }),
                      (0, i.jsx)('div', {
                          className: u.barInSingleLine,
                          children: (0, i.jsx)(m, {
                              percentage: d / o,
                              isSingleLine: !0
                          })
                      }),
                      (0, i.jsx)('div', {
                          className: u.textRight,
                          children: h({
                              time: o,
                              padLargestUnit: !0
                          })
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: s()(n, { [u.themed]: l }),
                  children: [
                      (0, i.jsx)(m, {
                          percentage: d / o,
                          isSingleLine: !1
                      }),
                      (0, i.jsxs)(c.Z, {
                          children: [
                              (0, i.jsx)(c.Z.Child, {
                                  grow: 1,
                                  className: u.textLeft,
                                  children: h({
                                      time: d,
                                      padLargestUnit: !1
                                  })
                              }),
                              (0, i.jsx)(c.Z.Child, {
                                  grow: 0,
                                  className: u.textRight,
                                  children: h({
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
let f = g;
