i.d(E, { Z: () => _ }), i(388685);
var r,
    n = i(200651),
    l = i(192379),
    e = i(392711),
    S = i.n(e),
    s = i(55935),
    N = i(388032);
function o(t, E, i) {
    return (
        E in t
            ? Object.defineProperty(t, E, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[E] = i),
        t
    );
}
let A = () => [N.NW.string(N.t['6m/6nJ']), N.NW.string(N.t.n7dksL), N.NW.string(N.t['1LyF1t']), N.NW.string(N.t.QJyuxc)];
class P extends (r = l.PureComponent) {
    componentDidMount() {
        let { intervalDuration: t, onInterval: E } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == E || E();
        }, t);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(t) {
        let { showDays: E, showUnits: i, className: r } = this.props,
            l = [t.days, t.hours, t.minutes, t.seconds],
            e = A();
        if (0 === t.days) l.shift();
        else if (!E) {
            let t = l.shift();
            l[0] += 24 * t;
        }
        let s = S()(l)
            .map((t) => (t < 10 ? '0'.concat(t) : t))
            .map((t, E) => [
                E > 0 && !i ? ':' : ' ',
                (0, n.jsxs)(
                    'span',
                    {
                        children: [t, i ? e[l.length - E - 1] : null]
                    },
                    E
                )
            ])
            .flatten()
            .value();
        return (0, n.jsx)('span', {
            className: r,
            children: s
        });
    }
    render() {
        let { deadline: t, children: E, className: i, stopAtOneSec: r } = this.props;
        if (t === 1 / 0)
            return (0, n.jsx)('span', {
                className: i,
                'aria-label': N.NW.string(N.t.PqEzn5),
                children: '\u221E'
            });
        let l = (0, s.TD)(Date.now(), t, r);
        return null != E ? E(l, this.defaultRender.bind(this, l)) : this.defaultRender(l);
    }
    constructor(...t) {
        super(...t), o(this, '_interval', void 0);
    }
}
o(P, 'defaultProps', {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000
});
let _ = P;
