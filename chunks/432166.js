n.d(t, { A: () => m }), n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(451988),
    c = n(235986),
    u = n(703740);
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
        className: o()({
            [u.M0]: n,
            [u.Sg]: !n,
        }),
        children: (0, i.jsx)("div", {
            className: u.qT,
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
        a = Math.floor(t / 3600);
    return 0 === a
        ? n
            ? "".concat(p(i), ":").concat(p(r))
            : "".concat(i, ":").concat(p(r))
        : n
          ? "".concat(p(a), ":").concat(p(i), ":").concat(p(r))
          : "".concat(a, ":").concat(p(i), ":").concat(p(r));
}
class h extends (r = a.PureComponent) {
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({ now: Date.now() });
        });
    }
    componentWillUnmount() {
        this.timer.stop();
    }
    render() {
        let { start: e, end: t, className: n, themed: r, singleLine: a = !1 } = this.props,
            { now: s } = this.state,
            l = (t - e) / 1000,
            d = Math.max(Math.min((s - e) / 1000, l), 0);
        return a
            ? (0, i.jsxs)("div", {
                  className: o()(n, { [u.Sp]: r }, u.Od),
                  children: [
                      (0, i.jsx)("div", {
                          className: u.Iq,
                          children: _({
                              time: d,
                              padLargestUnit: !0,
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: u.h7,
                          children: (0, i.jsx)(f, {
                              percentage: d / l,
                              isSingleLine: !0,
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: u.EL,
                          children: _({
                              time: l,
                              padLargestUnit: !0,
                          }),
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: o()(n, { [u.Sp]: r }),
                  children: [
                      (0, i.jsx)(f, {
                          percentage: d / l,
                          isSingleLine: !1,
                      }),
                      (0, i.jsxs)(c.A, {
                          children: [
                              (0, i.jsx)(c.A.Child, {
                                  grow: 1,
                                  className: u.n_,
                                  children: _({
                                      time: d,
                                      padLargestUnit: !1,
                                  }),
                              }),
                              (0, i.jsx)(c.A.Child, {
                                  grow: 0,
                                  className: u.EL,
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
        super(...e), d(this, "timer", new l.IX()), d(this, "state", { now: Date.now() });
    }
}
d(h, "defaultProps", { themed: !1 });
let m = h;
