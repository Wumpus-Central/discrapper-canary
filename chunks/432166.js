i.d(t, { A: () => A });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    s = i(451988),
    o = i(235986),
    d = i(703740);
function c(e) {
    let { percentage: t, isSingleLine: i } = e;
    return (0, n.jsx)("div", {
        className: r()({ [d.M0]: i, [d.Sg]: !i }),
        children: (0, n.jsx)("div", { className: d.qT, style: { width: `${100 * Math.max(Math.min(t, 1), 0)}%` } }),
    });
}
function u(e) {
    return String(e).padStart(2, "0");
}
function m(e) {
    let { time: t, padLargestUnit: i } = e,
        n = Math.floor(t) % 60,
        a = Math.floor(t / 60) % 60,
        l = Math.floor(t / 3600);
    return 0 === l ? (i ? `${u(a)}:${u(n)}` : `${a}:${u(n)}`) : i ? `${u(l)}:${u(a)}:${u(n)}` : `${l}:${u(a)}:${u(n)}`;
}
class _ extends a.PureComponent {
    static defaultProps = { themed: !1 };
    timer = new s.IX();
    state = { now: Date.now() };
    componentDidMount() {
        this.timer.start(500, () => {
            this.setState({ now: Date.now() });
        });
    }
    componentWillUnmount() {
        this.timer.stop();
    }
    render() {
        let { start: e, end: t, className: i, themed: a, singleLine: l = !1 } = this.props,
            { now: s } = this.state,
            u = (t - e) / 1e3,
            _ = Math.max(Math.min((s - e) / 1e3, u), 0);
        return l
            ? (0, n.jsxs)("div", {
                  className: r()(i, { [d.Sp]: a }, d.Od),
                  children: [
                      (0, n.jsx)("div", { className: d.Iq, children: m({ time: _, padLargestUnit: !0 }) }),
                      (0, n.jsx)("div", {
                          className: d.h7,
                          children: (0, n.jsx)(c, { percentage: _ / u, isSingleLine: !0 }),
                      }),
                      (0, n.jsx)("div", { className: d.EL, children: m({ time: u, padLargestUnit: !0 }) }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: r()(i, { [d.Sp]: a }),
                  children: [
                      (0, n.jsx)(c, { percentage: _ / u, isSingleLine: !1 }),
                      (0, n.jsxs)(o.A, {
                          children: [
                              (0, n.jsx)(o.A.Child, {
                                  grow: 1,
                                  className: d.n_,
                                  children: m({ time: _, padLargestUnit: !1 }),
                              }),
                              (0, n.jsx)(o.A.Child, {
                                  grow: 0,
                                  className: d.EL,
                                  children: m({ time: u, padLargestUnit: !1 }),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let A = _;
