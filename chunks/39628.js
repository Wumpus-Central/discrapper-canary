n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
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
    return (0, l.jsx)('div', {
        className: s()({
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
function p(e) {
    let { time: t, padLargestUnit: n } = e,
        i = Math.floor(t) % 60,
        l = Math.floor(t / 60) % 60,
        a = Math.floor(t / 3600);
    return 0 === a ? (n ? ''.concat(f(l), ':').concat(f(i)) : ''.concat(l, ':').concat(f(i))) : n ? ''.concat(f(a), ':').concat(f(l), ':').concat(f(i)) : ''.concat(a, ':').concat(f(l), ':').concat(f(i));
}
class h extends (i = a.PureComponent) {
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({ now: Date.now() });
        });
    }
    componentWillUnmount() {
        this.timer.stop();
    }
    render() {
        let { start: e, end: t, className: n, themed: i, singleLine: a = !1 } = this.props,
            { now: r } = this.state,
            o = (t - e) / 1000,
            d = Math.max(Math.min((r - e) / 1000, o), 0);
        return a
            ? (0, l.jsxs)('div', {
                  className: s()(n, { [u.themed]: i }, u.singleLineContainer),
                  children: [
                      (0, l.jsx)('div', {
                          className: u.textLeftInSingleLine,
                          children: p({
                              time: d,
                              padLargestUnit: !0
                          })
                      }),
                      (0, l.jsx)('div', {
                          className: u.barInSingleLine,
                          children: (0, l.jsx)(m, {
                              percentage: d / o,
                              isSingleLine: !0
                          })
                      }),
                      (0, l.jsx)('div', {
                          className: u.textRight,
                          children: p({
                              time: o,
                              padLargestUnit: !0
                          })
                      })
                  ]
              })
            : (0, l.jsxs)('div', {
                  className: s()(n, { [u.themed]: i }),
                  children: [
                      (0, l.jsx)(m, {
                          percentage: d / o,
                          isSingleLine: !1
                      }),
                      (0, l.jsxs)(c.Z, {
                          children: [
                              (0, l.jsx)(c.Z.Child, {
                                  grow: 1,
                                  className: u.textLeft,
                                  children: p({
                                      time: d,
                                      padLargestUnit: !1
                                  })
                              }),
                              (0, l.jsx)(c.Z.Child, {
                                  grow: 0,
                                  className: u.textRight,
                                  children: p({
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
d(h, 'defaultProps', { themed: !1 }), (t.Z = h);
