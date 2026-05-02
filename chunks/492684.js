"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(451988),
    a = n(375708);
function o(e) {
    return `${e}`.length < 13 ? 1e3 * e : e;
}
function l(e) {
    return class extends r.PureComponent {
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
                ? this.getDiff(t, o(e.end) / 1e3)
                : null != e.start
                  ? this.getDiff(o(e.start) / 1e3, t)
                  : { hours: 0, minutes: 0, seconds: 0 };
        }
        renderTime(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t && e <= 0 ? -1 : e < 10 ? `0${e}` : e;
        }
        getDiff(e, t) {
            let n = Math.max(t - e, 0),
                i = Math.floor(n) % 60,
                r = Math.floor(n / 60) % 60;
            return { hours: Math.floor(n / 3600) % 24, minutes: r, seconds: i };
        }
        render() {
            let { timestamps: t, ...n } = this.props,
                r = this.renderTime(this.state.hours, !0),
                s = this.renderTime(this.state.minutes),
                o = this.renderTime(this.state.seconds),
                l = -1 === r ? `${s}:${o}` : `${r}:${s}:${o}`;
            return null != t.end
                ? (0, i.jsx)(e, { ...n, message: a.intl.formatToPlainString(a.t["I/J7vI"], { duration: l }) })
                : null != t.start
                  ? (0, i.jsx)(e, { ...n, message: a.intl.formatToPlainString(a.t.M9Fexd, { duration: l }) })
                  : null;
        }
    };
}
