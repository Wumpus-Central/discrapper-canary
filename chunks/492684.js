var l = n(477900),
    i = n(582128),
    a = n(451988),
    r = n(792996);
function s(e) {
    return `${e}`.length < 13 ? 1e3 * e : e;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            return class extends i.PureComponent {
                _interval;
                constructor(e) {
                    (super(e), (this._interval = new a.IX()), (this.state = { ...this.getUpdatedTime() }));
                }
                componentDidMount() {
                    this._interval.start(1e3, () => this.setState(this.getUpdatedTime()));
                }
                componentWillUnmount() {
                    this._interval.stop();
                }
                componentDidUpdate(e) {
                    (e.timestamps.end !== this.props.timestamps.end ||
                        e.timestamps.start !== this.props.timestamps.start) &&
                        this.setState(this.getUpdatedTime());
                }
                getUpdatedTime() {
                    let { timestamps: e } = this.props,
                        t = Date.now() / 1e3;
                    return null != e.end
                        ? this.getDiff(t, s(e.end) / 1e3)
                        : null != e.start
                          ? this.getDiff(s(e.start) / 1e3, t)
                          : { hours: 0, minutes: 0, seconds: 0 };
                }
                renderTime(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t && e <= 0 ? -1 : e < 10 ? `0${e}` : e;
                }
                getDiff(e, t) {
                    let n = Math.max(t - e, 0),
                        l = Math.floor(n) % 60,
                        i = Math.floor(n / 60) % 60;
                    return { hours: Math.floor(n / 3600) % 24, minutes: i, seconds: l };
                }
                render() {
                    let { timestamps: t, ...n } = this.props,
                        i = this.renderTime(this.state.hours, !0),
                        a = this.renderTime(this.state.minutes),
                        s = this.renderTime(this.state.seconds),
                        o = -1 === i ? `${a}:${s}` : `${i}:${a}:${s}`;
                    return null != t.end
                        ? (0, l.jsx)(e, { ...n, message: r.intl.formatToPlainString(r.t["I/J7vI"], { duration: o }) })
                        : null != t.start
                          ? (0, l.jsx)(e, { ...n, message: r.intl.formatToPlainString(r.t.M9Fexd, { duration: o }) })
                          : null;
                }
            };
        },
    },
);
