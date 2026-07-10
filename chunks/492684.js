n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(451988),
    r = n(375708);
function a(e) {
    return `${e}`.length < 13 ? 1e3 * e : e;
}
function o(e) {
    return class extends l.PureComponent {
        _interval;
        constructor(e) {
            super(e), (this._interval = new s.IX()), (this.state = { ...this.getUpdatedTime() });
        }
        componentDidMount() {
            this._interval.start(1e3, () => this.setState(this.getUpdatedTime()));
        }
        componentWillUnmount() {
            this._interval.stop();
        }
        componentDidUpdate(e) {
            (e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) &&
                this.setState(this.getUpdatedTime());
        }
        getUpdatedTime() {
            let { timestamps: e } = this.props,
                t = Date.now() / 1e3;
            return null != e.end
                ? this.getDiff(t, a(e.end) / 1e3)
                : null != e.start
                  ? this.getDiff(a(e.start) / 1e3, t)
                  : { hours: 0, minutes: 0, seconds: 0 };
        }
        renderTime(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t && e <= 0 ? -1 : e < 10 ? `0${e}` : e;
        }
        getDiff(e, t) {
            let n = Math.max(t - e, 0),
                i = Math.floor(n) % 60,
                l = Math.floor(n / 60) % 60;
            return { hours: Math.floor(n / 3600) % 24, minutes: l, seconds: i };
        }
        render() {
            let { timestamps: t, ...n } = this.props,
                l = this.renderTime(this.state.hours, !0),
                s = this.renderTime(this.state.minutes),
                a = this.renderTime(this.state.seconds),
                o = -1 === l ? `${s}:${a}` : `${l}:${s}:${a}`;
            return null != t.end
                ? (0, i.jsx)(e, { ...n, message: r.intl.formatToPlainString(r.t["I/J7vI"], { duration: o }) })
                : null != t.start
                  ? (0, i.jsx)(e, { ...n, message: r.intl.formatToPlainString(r.t.M9Fexd, { duration: o }) })
                  : null;
        }
    };
}
