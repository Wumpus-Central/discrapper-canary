(n.d(t, { Z: () => _ }), n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(392711),
    s = n.n(o),
    l = n(55935),
    c = n(388032);
function u(e, t, n) {
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
let d = () => [c.intl.string(c.t['6m/6nJ']), c.intl.string(c.t.n7dksL), c.intl.string(c.t['1LyF1t']), c.intl.string(c.t.QJyuxc)];
class f extends (r = a.PureComponent) {
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
            a = [e.days, e.hours, e.minutes, e.seconds],
            o = d();
        if (0 === e.days) a.shift();
        else if (!t) {
            let e = a.shift();
            a[0] += 24 * e;
        }
        let l = s()(a)
            .map((e) => (e < 10 ? '0'.concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ':' : ' ',
                (0, i.jsxs)(
                    'span',
                    {
                        children: [e, n ? o[a.length - t - 1] : null]
                    },
                    t
                )
            ])
            .flatten()
            .value();
        return (0, i.jsx)('span', {
            className: r,
            children: l
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, i.jsx)('span', {
                className: n,
                'aria-label': c.intl.string(c.t.PqEzn5),
                children: '\u221E'
            });
        let a = (0, l.TD)(Date.now(), e, r);
        return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
    constructor(...e) {
        (super(...e), u(this, '_interval', void 0));
    }
}
u(f, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let _ = f;
