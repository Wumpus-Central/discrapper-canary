n.d(t, { A: () => o });
var i = n(627968),
    a = n(64700),
    r = n(451988),
    l = n(985018);
function s(e) {
    return `${e}`.length < 13 ? 1e3 * e : e;
}
function o(e) {
    return class extends a.PureComponent {
        _interval;
        constructor(e) {
            super(e), (this._interval = new r.IX()), (this.state = { ...this.getUpdatedTime() });
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
                i = Math.floor(n) % 60,
                a = Math.floor(n / 60) % 60;
            return { hours: Math.floor(n / 3600) % 24, minutes: a, seconds: i };
        }
        render() {
            let { timestamps: t, ...n } = this.props,
                a = this.renderTime(this.state.hours, !0),
                r = this.renderTime(this.state.minutes),
                s = this.renderTime(this.state.seconds),
                o = -1 === a ? `${r}:${s}` : `${a}:${r}:${s}`;
            return null != t.end
                ? (0, i.jsx)(e, { ...n, message: l.intl.formatToPlainString(l.t["I/J7vI"], { duration: o }) })
                : null != t.start
                  ? (0, i.jsx)(e, { ...n, message: l.intl.formatToPlainString(l.t.M9Fexd, { duration: o }) })
                  : null;
        }
    };
}
