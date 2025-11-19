n.d(t, { Z: () => m }), n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(846519),
    c = n(600164),
    u = n(389073);
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
function _(e) {
    return String(e).padStart(2, "0");
}
function p(e) {
    let { time: t, padLargestUnit: n } = e,
        r = Math.floor(t) % 60,
        i = Math.floor(t / 60) % 60,
        a = Math.floor(t / 3600);
    return 0 === a
        ? n
            ? "".concat(_(i), ":").concat(_(r))
            : "".concat(i, ":").concat(_(r))
        : n
          ? "".concat(_(a), ":").concat(_(i), ":").concat(_(r))
          : "".concat(a, ":").concat(_(i), ":").concat(_(r));
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
            { now: o } = this.state,
            l = (t - e) / 1000,
            d = Math.max(Math.min((o - e) / 1000, l), 0);
        return a
            ? (0, i.jsxs)("div", {
                  className: s()(n, { [u.themed]: r }, u.singleLineContainer),
                  children: [
                      (0, i.jsx)("div", {
                          className: u.textLeftInSingleLine,
                          children: p({
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
                          children: p({
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
                                  children: p({
                                      time: d,
                                      padLargestUnit: !1,
                                  }),
                              }),
                              (0, i.jsx)(c.Z.Child, {
                                  grow: 0,
                                  className: u.textRight,
                                  children: p({
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
d(h, "defaultProps", { themed: !1 });
let m = h;
