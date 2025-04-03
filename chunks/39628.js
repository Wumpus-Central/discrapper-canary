n.d(t, { Z: () => b }), n(47120);
var r,
    l = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(846519),
    c = n(600164),
    u = n(903276);
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
function p(e) {
    let { percentage: t, isSingleLine: n } = e;
    return (0, l.jsx)('div', {
        className: a()({
            [u.bar]: n,
            [u.barInMultiLine]: !n
        }),
        children: (0, l.jsx)('div', {
            className: u.barInner,
            style: { width: ''.concat(100 * Math.max(Math.min(t, 1), 0), '%') }
        })
    });
}
function f(e) {
    return String(e).padStart(2, '0');
}
function m(e) {
    let { time: t, padLargestUnit: n } = e,
        r = Math.floor(t) % 60,
        l = Math.floor(t / 60) % 60,
        i = Math.floor(t / 3600);
    return 0 === i ? (n ? ''.concat(f(l), ':').concat(f(r)) : ''.concat(l, ':').concat(f(r))) : n ? ''.concat(f(i), ':').concat(f(l), ':').concat(f(r)) : ''.concat(i, ':').concat(f(l), ':').concat(f(r));
}
class g extends (r = i.PureComponent) {
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({ now: Date.now() });
        });
    }
    componentWillUnmount() {
        this.timer.stop();
    }
    render() {
        let { start: e, end: t, className: n, themed: r, singleLine: i = !1 } = this.props,
            { now: o } = this.state,
            s = (t - e) / 1000,
            d = Math.max(Math.min((o - e) / 1000, s), 0);
        return i
            ? (0, l.jsxs)('div', {
                  className: a()(n, { [u.themed]: r }, u.singleLineContainer),
                  children: [
                      (0, l.jsx)('div', {
                          className: u.textLeftInSingleLine,
                          children: m({
                              time: d,
                              padLargestUnit: !0
                          })
                      }),
                      (0, l.jsx)('div', {
                          className: u.barInSingleLine,
                          children: (0, l.jsx)(p, {
                              percentage: d / s,
                              isSingleLine: !0
                          })
                      }),
                      (0, l.jsx)('div', {
                          className: u.textRight,
                          children: m({
                              time: s,
                              padLargestUnit: !0
                          })
                      })
                  ]
              })
            : (0, l.jsxs)('div', {
                  className: a()(n, { [u.themed]: r }),
                  children: [
                      (0, l.jsx)(p, {
                          percentage: d / s,
                          isSingleLine: !1
                      }),
                      (0, l.jsxs)(c.Z, {
                          children: [
                              (0, l.jsx)(c.Z.Child, {
                                  grow: 1,
                                  className: u.textLeft,
                                  children: m({
                                      time: d,
                                      padLargestUnit: !1
                                  })
                              }),
                              (0, l.jsx)(c.Z.Child, {
                                  grow: 0,
                                  className: u.textRight,
                                  children: m({
                                      time: s,
                                      padLargestUnit: !1
                                  })
                              })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e), d(this, 'timer', new s.Xp()), d(this, 'state', { now: Date.now() });
    }
}
d(g, 'defaultProps', { themed: !1 });
let b = g;
