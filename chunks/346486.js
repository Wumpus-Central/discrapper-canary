n.d(t, { Z: () => p }), n(388685);
var r,
    i = n(255367),
    a = n(73800),
    l = n(392711),
    o = n.n(l),
    c = n(55935),
    s = n(388032);
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
let u = () => [s.intl.string(s.t['6m/6nJ']), s.intl.string(s.t.n7dksL), s.intl.string(s.t['1LyF1t']), s.intl.string(s.t.QJyuxc)];
class f extends (r = a.PureComponent) {
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
        let { showDays: t, showUnits: n, className: r } = this.props,
            a = [e.days, e.hours, e.minutes, e.seconds],
            l = u();
        if (0 === e.days) a.shift();
        else if (!t) {
            let e = a.shift();
            a[0] += 24 * e;
        }
        let c = o()(a)
            .map((e) => (e < 10 ? '0'.concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ':' : ' ',
                (0, i.jsxs)(
                    'span',
                    {
                        children: [e, n ? l[a.length - t - 1] : null]
                    },
                    t
                )
            ])
            .flatten()
            .value();
        return (0, i.jsx)('span', {
            className: r,
            children: c
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, i.jsx)('span', {
                className: n,
                'aria-label': s.intl.string(s.t.PqEzn5),
                children: '\u221E'
            });
        let a = (0, c.TD)(Date.now(), e, r);
        return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
    constructor(...e) {
        super(...e), d(this, '_interval', void 0);
    }
}
d(f, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let p = f;
