i.d(t, { A: () => x });
var l = i(477900),
    a = i(582128),
    n = i(503698),
    s = i.n(n),
    d = i(451988),
    r = i(235986),
    c = i(697970);
function o(e) {
    let { percentage: t, isSingleLine: i } = e;
    return (0, l.jsx)("div", {
        className: s()({ [c.M0]: i, [c.Sg]: !i }),
        children: (0, l.jsx)("div", { className: c.qT, style: { width: `${100 * Math.max(Math.min(t, 1), 0)}%` } }),
    });
}
function p(e) {
    return String(e).padStart(2, "0");
}
function m(e) {
    let { time: t, padLargestUnit: i } = e,
        l = Math.floor(t) % 60,
        a = Math.floor(t / 60) % 60,
        n = Math.floor(t / 3600);
    return 0 === n ? (i ? `${p(a)}:${p(l)}` : `${a}:${p(l)}`) : i ? `${p(n)}:${p(a)}:${p(l)}` : `${n}:${p(a)}:${p(l)}`;
}
class u extends a.PureComponent {
    static defaultProps = { themed: !1 };
    timer = new d.IX();
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
        let { start: e, end: t, className: i, themed: a, singleLine: n = !1 } = this.props,
            { now: d } = this.state,
            p = (t - e) / 1e3,
            u = Math.max(Math.min((d - e) / 1e3, p), 0);
        return n
            ? (0, l.jsxs)("div", {
                  className: s()(i, { [c.Sp]: a }, c.Od),
                  children: [
                      (0, l.jsx)("div", { className: c.Iq, children: m({ time: u, padLargestUnit: !0 }) }),
                      (0, l.jsx)("div", {
                          className: c.h7,
                          children: (0, l.jsx)(o, { percentage: u / p, isSingleLine: !0 }),
                      }),
                      (0, l.jsx)("div", { className: c.EL, children: m({ time: p, padLargestUnit: !0 }) }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: s()(i, { [c.Sp]: a }),
                  children: [
                      (0, l.jsx)(o, { percentage: u / p, isSingleLine: !1 }),
                      (0, l.jsxs)(r.A, {
                          children: [
                              (0, l.jsx)(r.A.Child, {
                                  grow: 1,
                                  className: c.n_,
                                  children: m({ time: u, padLargestUnit: !1 }),
                              }),
                              (0, l.jsx)(r.A.Child, {
                                  grow: 0,
                                  className: c.EL,
                                  children: m({ time: p, padLargestUnit: !1 }),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let x = u;
