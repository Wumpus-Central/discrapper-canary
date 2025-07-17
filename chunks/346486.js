(n.d(t, { Z: () => h }), n(388685));
var l,
    r = n(255367),
    i = n(73800),
    o = n(392711),
    a = n.n(o),
    c = n(55935),
    s = n(388032);
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
let d = () => [s.intl.string(s.t['6m/6nJ']), s.intl.string(s.t.n7dksL), s.intl.string(s.t['1LyF1t']), s.intl.string(s.t.QJyuxc)];
class p extends (l = i.PureComponent) {
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
        let { showDays: t, showUnits: n, className: l } = this.props,
            i = [e.days, e.hours, e.minutes, e.seconds],
            o = d();
        if (0 === e.days) i.shift();
        else if (!t) {
            let e = i.shift();
            i[0] += 24 * e;
        }
        let c = a()(i)
            .map((e) => (e < 10 ? '0'.concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ':' : ' ',
                (0, r.jsxs)(
                    'span',
                    {
                        children: [e, n ? o[i.length - t - 1] : null]
                    },
                    t
                )
            ])
            .flatten()
            .value();
        return (0, r.jsx)('span', {
            className: l,
            children: c
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: l } = this.props;
        if (e === 1 / 0)
            return (0, r.jsx)('span', {
                className: n,
                'aria-label': s.intl.string(s.t.PqEzn5),
                children: '\u221E'
            });
        let i = (0, c.TD)(Date.now(), e, l);
        return null != t ? t(i, this.defaultRender.bind(this, i)) : this.defaultRender(i);
    }
    constructor(...e) {
        (super(...e), u(this, '_interval', void 0));
    }
}
u(p, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let h = p;
