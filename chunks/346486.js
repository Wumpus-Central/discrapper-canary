n.d(i, { Z: () => N }), n(388685);
var E,
    l = n(200651),
    r = n(192379),
    e = n(392711),
    S = n.n(e),
    s = n(55935),
    o = n(388032);
function A(t, i, n) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = n),
        t
    );
}
let P = () => [o.intl.string(o.t['6m/6nJ']), o.intl.string(o.t.n7dksL), o.intl.string(o.t['1LyF1t']), o.intl.string(o.t.QJyuxc)];
class _ extends (E = r.PureComponent) {
    componentDidMount() {
        let { intervalDuration: t, onInterval: i } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == i || i();
        }, t);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(t) {
        let { showDays: i, showUnits: n, className: E } = this.props,
            r = [t.days, t.hours, t.minutes, t.seconds],
            e = P();
        if (0 === t.days) r.shift();
        else if (!i) {
            let t = r.shift();
            r[0] += 24 * t;
        }
        let s = S()(r)
            .map((t) => (t < 10 ? '0'.concat(t) : t))
            .map((t, i) => [
                i > 0 && !n ? ':' : ' ',
                (0, l.jsxs)(
                    'span',
                    {
                        children: [t, n ? e[r.length - i - 1] : null]
                    },
                    i
                )
            ])
            .flatten()
            .value();
        return (0, l.jsx)('span', {
            className: E,
            children: s
        });
    }
    render() {
        let { deadline: t, children: i, className: n, stopAtOneSec: E } = this.props;
        if (t === 1 / 0)
            return (0, l.jsx)('span', {
                className: n,
                'aria-label': o.intl.string(o.t.PqEzn5),
                children: '\u221E'
            });
        let r = (0, s.TD)(Date.now(), t, E);
        return null != i ? i(r, this.defaultRender.bind(this, r)) : this.defaultRender(r);
    }
    constructor(...t) {
        super(...t), A(this, '_interval', void 0);
    }
}
A(_, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let N = _;
