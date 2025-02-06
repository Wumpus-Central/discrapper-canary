n.d(t, { Z: () => p }), n(47120);
var s,
    i = n(200651),
    r = n(192379),
    a = n(392711),
    l = n.n(a),
    o = n(55935),
    d = n(388032);
function c(e, t, n) {
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
let h = () => [d.intl.string(d.t['6m/6nJ']), d.intl.string(d.t.n7dksL), d.intl.string(d.t['1LyF1t']), d.intl.string(d.t.QJyuxc)];
class u extends (s = r.PureComponent) {
    componentDidMount() {
        let { intervalDuration: e, onInterval: t } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == t || t();
        }, e);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(e) {
        let { showDays: t, showUnits: n, className: s } = this.props,
            r = [e.days, e.hours, e.minutes, e.seconds],
            a = h();
        if (0 === e.days) r.shift();
        else if (!t) {
            let e = r.shift();
            r[0] += 24 * e;
        }
        let o = l()(r)
            .map((e) => (e < 10 ? '0'.concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ':' : ' ',
                (0, i.jsxs)(
                    'span',
                    {
                        children: [e, n ? a[r.length - t - 1] : null]
                    },
                    t
                )
            ])
            .flatten()
            .value();
        return (0, i.jsx)('span', {
            className: s,
            children: o
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: s } = this.props;
        if (e === 1 / 0)
            return (0, i.jsx)('span', {
                className: n,
                'aria-label': d.intl.string(d.t.PqEzn5),
                children: '\u221E'
            });
        let r = (0, o.TD)(Date.now(), e, s);
        return null != t ? t(r, this.defaultRender.bind(this, r)) : this.defaultRender(r);
    }
    constructor(...e) {
        super(...e), c(this, '_interval', void 0);
    }
}
c(u, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let p = u;
