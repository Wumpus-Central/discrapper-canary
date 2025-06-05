n.d(t, { Z: () => b }), n(388685);
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
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
function f(e) {
    let { percentage: t, isSingleLine: n } = e;
    return (0, i.jsx)('div', {
        className: o()({
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
function m(e) {
    let { time: t, padLargestUnit: n } = e,
        r = Math.floor(t) % 60,
        i = Math.floor(t / 60) % 60,
        l = Math.floor(t / 3600);
    return 0 === l ? (n ? ''.concat(p(i), ':').concat(p(r)) : ''.concat(i, ':').concat(p(r))) : n ? ''.concat(p(l), ':').concat(p(i), ':').concat(p(r)) : ''.concat(l, ':').concat(p(i), ':').concat(p(r));
}
class g extends (r = l.PureComponent) {
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({ now: Date.now() });
        });
    }
    componentWillUnmount() {
        this.timer.stop();
    }
    render() {
        let { start: e, end: t, className: n, themed: r, singleLine: l = !1 } = this.props,
            { now: a } = this.state,
            s = (t - e) / 1000,
            d = Math.max(Math.min((a - e) / 1000, s), 0);
        return l
            ? (0, i.jsxs)('div', {
                  className: o()(n, { [u.themed]: r }, u.singleLineContainer),
                  children: [
                      (0, i.jsx)('div', {
                          className: u.textLeftInSingleLine,
                          children: m({
                              time: d,
                              padLargestUnit: !0
                          })
                      }),
                      (0, i.jsx)('div', {
                          className: u.barInSingleLine,
                          children: (0, i.jsx)(f, {
                              percentage: d / s,
                              isSingleLine: !0
                          })
                      }),
                      (0, i.jsx)('div', {
                          className: u.textRight,
                          children: m({
                              time: s,
                              padLargestUnit: !0
                          })
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: o()(n, { [u.themed]: r }),
                  children: [
                      (0, i.jsx)(f, {
                          percentage: d / s,
                          isSingleLine: !1
                      }),
                      (0, i.jsxs)(c.Z, {
                          children: [
                              (0, i.jsx)(c.Z.Child, {
                                  grow: 1,
                                  className: u.textLeft,
                                  children: m({
                                      time: d,
                                      padLargestUnit: !1
                                  })
                              }),
                              (0, i.jsx)(c.Z.Child, {
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
