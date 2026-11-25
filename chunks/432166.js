var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(451988),
    o = n(235986),
    u = n(697970);
function c(e) {
    let { percentage: t, isSingleLine: n } = e;
    return (0, l.jsx)("div", {
        className: r()({ [u.M0]: n, [u.Sg]: !n }),
        children: (0, l.jsx)("div", { className: u.qT, style: { width: `${100 * Math.max(Math.min(t, 1), 0)}%` } }),
    });
}
function d(e) {
    return String(e).padStart(2, "0");
}
function m(e) {
    let { time: t, padLargestUnit: n } = e,
        l = Math.floor(t) % 60,
        i = Math.floor(t / 60) % 60,
        a = Math.floor(t / 3600);
    return 0 === a ? (n ? `${d(i)}:${d(l)}` : `${i}:${d(l)}`) : n ? `${d(a)}:${d(i)}:${d(l)}` : `${a}:${d(i)}:${d(l)}`;
}
class A extends i.PureComponent {
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
        let { start: e, end: t, className: n, themed: i, singleLine: a = !1 } = this.props,
            { now: s } = this.state,
            d = (t - e) / 1e3,
            A = Math.max(Math.min((s - e) / 1e3, d), 0);
        return a
            ? (0, l.jsxs)("div", {
                  className: r()(n, { [u.Sp]: i }, u.Od),
                  children: [
                      (0, l.jsx)("div", { className: u.Iq, children: m({ time: A, padLargestUnit: !0 }) }),
                      (0, l.jsx)("div", {
                          className: u.h7,
                          children: (0, l.jsx)(c, { percentage: A / d, isSingleLine: !0 }),
                      }),
                      (0, l.jsx)("div", { className: u.EL, children: m({ time: d, padLargestUnit: !0 }) }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: r()(n, { [u.Sp]: i }),
                  children: [
                      (0, l.jsx)(c, { percentage: A / d, isSingleLine: !1 }),
                      (0, l.jsxs)(o.A, {
                          children: [
                              (0, l.jsx)(o.A.Child, {
                                  grow: 1,
                                  className: u.n_,
                                  children: m({ time: A, padLargestUnit: !1 }),
                              }),
                              (0, l.jsx)(o.A.Child, {
                                  grow: 0,
                                  className: u.EL,
                                  children: m({ time: d, padLargestUnit: !1 }),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
n.d(t, {}, { A: A });
