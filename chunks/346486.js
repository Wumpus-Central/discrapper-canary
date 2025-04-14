e.d(n, { Z: () => m }), e(388685);
var l,
    s = e(200651),
    a = e(192379),
    i = e(392711),
    o = e.n(i),
    r = e(55935),
    c = e(388032);
function u(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = e),
        t
    );
}
let d = () => [c.NW.string(c.t['6m/6nJ']), c.NW.string(c.t.n7dksL), c.NW.string(c.t['1LyF1t']), c.NW.string(c.t.QJyuxc)];
class h extends (l = a.PureComponent) {
    componentDidMount() {
        let { intervalDuration: t, onInterval: n } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == n || n();
        }, t);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(t) {
        let { showDays: n, showUnits: e, className: l } = this.props,
            a = [t.days, t.hours, t.minutes, t.seconds],
            i = d();
        if (0 === t.days) a.shift();
        else if (!n) {
            let t = a.shift();
            a[0] += 24 * t;
        }
        let r = o()(a)
            .map((t) => (t < 10 ? '0'.concat(t) : t))
            .map((t, n) => [
                n > 0 && !e ? ':' : ' ',
                (0, s.jsxs)(
                    'span',
                    {
                        children: [t, e ? i[a.length - n - 1] : null]
                    },
                    n
                )
            ])
            .flatten()
            .value();
        return (0, s.jsx)('span', {
            className: l,
            children: r
        });
    }
    render() {
        let { deadline: t, children: n, className: e, stopAtOneSec: l } = this.props;
        if (t === 1 / 0)
            return (0, s.jsx)('span', {
                className: e,
                'aria-label': c.NW.string(c.t.PqEzn5),
                children: '\u221E'
            });
        let a = (0, r.TD)(Date.now(), t, l);
        return null != n ? n(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
    constructor(...t) {
        super(...t), u(this, '_interval', void 0);
    }
}
u(h, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let m = h;
