(e.d(n, { Z: () => m }), e(388685));
var l,
    a = e(255367),
    i = e(73800),
    s = e(392711),
    r = e.n(s),
    o = e(55935),
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
let d = () => [c.intl.string(c.t['6m/6nJ']), c.intl.string(c.t.n7dksL), c.intl.string(c.t['1LyF1t']), c.intl.string(c.t.QJyuxc)];
class h extends (l = i.PureComponent) {
    componentDidMount() {
        let { intervalDuration: t, onInterval: n } = this.props;
        this._interval = setInterval(() => {
            (this.forceUpdate(), null == n || n());
        }, t);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(t) {
        let { showDays: n, showUnits: e, className: l } = this.props,
            i = [t.days, t.hours, t.minutes, t.seconds],
            s = d();
        if (0 === t.days) i.shift();
        else if (!n) {
            let t = i.shift();
            i[0] += 24 * t;
        }
        let o = r()(i)
            .map((t) => (t < 10 ? '0'.concat(t) : t))
            .map((t, n) => [
                n > 0 && !e ? ':' : ' ',
                (0, a.jsxs)(
                    'span',
                    {
                        children: [t, e ? s[i.length - n - 1] : null]
                    },
                    n
                )
            ])
            .flatten()
            .value();
        return (0, a.jsx)('span', {
            className: l,
            children: o
        });
    }
    render() {
        let { deadline: t, children: n, className: e, stopAtOneSec: l } = this.props;
        if (t === 1 / 0)
            return (0, a.jsx)('span', {
                className: e,
                'aria-label': c.intl.string(c.t.PqEzn5),
                children: '\u221E'
            });
        let i = (0, o.TD)(Date.now(), t, l);
        return null != n ? n(i, this.defaultRender.bind(this, i)) : this.defaultRender(i);
    }
    constructor(...t) {
        (super(...t), u(this, '_interval', void 0));
    }
}
u(h, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let m = h;
