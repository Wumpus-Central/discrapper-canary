(n.d(t, { Z: () => p }), n(388685));
var r,
    s = n(255367),
    i = n(73800),
    a = n(392711),
    l = n.n(a),
    o = n(55935),
    c = n(388032);
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
let h = () => [c.intl.string(c.t['6m/6nJ']), c.intl.string(c.t.n7dksL), c.intl.string(c.t['1LyF1t']), c.intl.string(c.t.QJyuxc)];
class u extends (r = i.PureComponent) {
    componentDidMount() {
        let { intervalDuration: e, onInterval: t } = this.props;
        this._interval = setInterval(() => {
            (this.forceUpdate(), null == t || t());
        }, e);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(e) {
        let { showDays: t, showUnits: n, className: r } = this.props,
            i = [e.days, e.hours, e.minutes, e.seconds],
            a = h();
        if (0 === e.days) i.shift();
        else if (!t) {
            let e = i.shift();
            i[0] += 24 * e;
        }
        let o = l()(i)
            .map((e) => (e < 10 ? '0'.concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ':' : ' ',
                (0, s.jsxs)(
                    'span',
                    {
                        children: [e, n ? a[i.length - t - 1] : null]
                    },
                    t
                )
            ])
            .flatten()
            .value();
        return (0, s.jsx)('span', {
            className: r,
            children: o
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, s.jsx)('span', {
                className: n,
                'aria-label': c.intl.string(c.t.PqEzn5),
                children: '\u221E'
            });
        let i = (0, o.TD)(Date.now(), e, r);
        return null != t ? t(i, this.defaultRender.bind(this, i)) : this.defaultRender(i);
    }
    constructor(...e) {
        (super(...e), d(this, '_interval', void 0));
    }
}
d(u, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let p = u;
