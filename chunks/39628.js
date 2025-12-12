n.d(t, { Z: () => h }), n(388685);
var r,
    i = n(54381),
    o = n(473749),
    a = n(120356),
    s = n.n(a),
    l = n(846519),
    c = n(600164),
    u = n(243404);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    let { percentage: t, isSingleLine: n } = e;
    return (0, i.jsx)("div", {
        className: s()({
            [u.bar]: n,
            [u.barInMultiLine]: !n,
        }),
        children: (0, i.jsx)("div", {
            className: u.barInner,
            style: { width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%") },
        }),
    });
}
function p(e) {
    return String(e).padStart(2, "0");
}
function _(e) {
    let { time: t, padLargestUnit: n } = e,
        r = Math.floor(t) % 60,
        i = Math.floor(t / 60) % 60,
        o = Math.floor(t / 3600);
    return 0 === o
        ? n
            ? "".concat(p(i), ":").concat(p(r))
            : "".concat(i, ":").concat(p(r))
        : n
          ? "".concat(p(o), ":").concat(p(i), ":").concat(p(r))
          : "".concat(o, ":").concat(p(i), ":").concat(p(r));
}
class m extends (r = o.PureComponent) {
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({ now: Date.now() });
        });
    }
    componentWillUnmount() {
        this.timer.stop();
    }
    render() {
        let { start: e, end: t, className: n, themed: r, singleLine: o = !1 } = this.props,
            { now: a } = this.state,
            l = (t - e) / 1000,
            d = Math.max(Math.min((a - e) / 1000, l), 0);
        return o
            ? (0, i.jsxs)("div", {
                  className: s()(n, { [u.themed]: r }, u.singleLineContainer),
                  children: [
                      (0, i.jsx)("div", {
                          className: u.textLeftInSingleLine,
                          children: _({
                              time: d,
                              padLargestUnit: !0,
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: u.barInSingleLine,
                          children: (0, i.jsx)(f, {
                              percentage: d / l,
                              isSingleLine: !0,
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: u.textRight,
                          children: _({
                              time: l,
                              padLargestUnit: !0,
                          }),
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: s()(n, { [u.themed]: r }),
                  children: [
                      (0, i.jsx)(f, {
                          percentage: d / l,
                          isSingleLine: !1,
                      }),
                      (0, i.jsxs)(c.Z, {
                          children: [
                              (0, i.jsx)(c.Z.Child, {
                                  grow: 1,
                                  className: u.textLeft,
                                  children: _({
                                      time: d,
                                      padLargestUnit: !1,
                                  }),
                              }),
                              (0, i.jsx)(c.Z.Child, {
                                  grow: 0,
                                  className: u.textRight,
                                  children: _({
                                      time: l,
                                      padLargestUnit: !1,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    }
    constructor(...e) {
        super(...e), d(this, "timer", new l.Xp()), d(this, "state", { now: Date.now() });
    }
}
d(m, "defaultProps", { themed: !1 });
let h = m;
