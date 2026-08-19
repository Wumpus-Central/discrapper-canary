l.d(t, { A: () => A });
var i = l(477900),
    s = l(582128),
    n = l(503698),
    a = l.n(n),
    d = l(451988),
    r = l(235986),
    o = l(818383);
function c(e) {
    let { percentage: t, isSingleLine: l } = e;
    return (0, i.jsx)("div", {
        className: a()({ [o.M0]: l, [o.Sg]: !l }),
        children: (0, i.jsx)("div", { className: o.qT, style: { width: `${100 * Math.max(Math.min(t, 1), 0)}%` } }),
    });
}
function p(e) {
    return String(e).padStart(2, "0");
}
function u(e) {
    let { time: t, padLargestUnit: l } = e,
        i = Math.floor(t) % 60,
        s = Math.floor(t / 60) % 60,
        n = Math.floor(t / 3600);
    return 0 === n ? (l ? `${p(s)}:${p(i)}` : `${s}:${p(i)}`) : l ? `${p(n)}:${p(s)}:${p(i)}` : `${n}:${p(s)}:${p(i)}`;
}
class m extends s.PureComponent {
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
        let { start: e, end: t, className: l, themed: s, singleLine: n = !1 } = this.props,
            { now: d } = this.state,
            p = (t - e) / 1e3,
            m = Math.max(Math.min((d - e) / 1e3, p), 0);
        return n
            ? (0, i.jsxs)("div", {
                  className: a()(l, { [o.Sp]: s }, o.Od),
                  children: [
                      (0, i.jsx)("div", { className: o.Iq, children: u({ time: m, padLargestUnit: !0 }) }),
                      (0, i.jsx)("div", {
                          className: o.h7,
                          children: (0, i.jsx)(c, { percentage: m / p, isSingleLine: !0 }),
                      }),
                      (0, i.jsx)("div", { className: o.EL, children: u({ time: p, padLargestUnit: !0 }) }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: a()(l, { [o.Sp]: s }),
                  children: [
                      (0, i.jsx)(c, { percentage: m / p, isSingleLine: !1 }),
                      (0, i.jsxs)(r.A, {
                          children: [
                              (0, i.jsx)(r.A.Child, {
                                  grow: 1,
                                  className: o.n_,
                                  children: u({ time: m, padLargestUnit: !1 }),
                              }),
                              (0, i.jsx)(r.A.Child, {
                                  grow: 0,
                                  className: o.EL,
                                  children: u({ time: p, padLargestUnit: !1 }),
                              }),
                          ],
                      }),
                  ],
              });
    }
}
let A = m;
