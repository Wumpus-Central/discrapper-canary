(n.d(t, { Z: () => p }), n(388685));
var i,
    r = n(255367),
    l = n(73800),
    a = n(392711),
    o = n.n(a),
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
class f extends (i = l.PureComponent) {
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
        let { showDays: t, showUnits: n, className: i } = this.props,
            l = [e.days, e.hours, e.minutes, e.seconds],
            a = u();
        if (0 === e.days) l.shift();
        else if (!t) {
            let e = l.shift();
            l[0] += 24 * e;
        }
        let c = o()(l)
            .map((e) => (e < 10 ? '0'.concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ':' : ' ',
                (0, r.jsxs)(
                    'span',
                    {
                        children: [e, n ? a[l.length - t - 1] : null]
                    },
                    t
                )
            ])
            .flatten()
            .value();
        return (0, r.jsx)('span', {
            className: i,
            children: c
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: i } = this.props;
        if (e === 1 / 0)
            return (0, r.jsx)('span', {
                className: n,
                'aria-label': s.intl.string(s.t.PqEzn5),
                children: '\u221E'
            });
        let l = (0, c.TD)(Date.now(), e, i);
        return null != t ? t(l, this.defaultRender.bind(this, l)) : this.defaultRender(l);
    }
    constructor(...e) {
        (super(...e), d(this, '_interval', void 0));
    }
}
d(f, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let p = f;
