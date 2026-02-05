i.d(t, { A: () => o });
var n = i(627968),
    a = i(64700),
    l = i(451988),
    r = i(985018);
function s(e) {
    return `${e}`.length < 13 ? 1e3 * e : e;
}
function o(e) {
    return class extends a.PureComponent {
        _interval;
        constructor(e) {
            super(e), (this._interval = new l.IX()), (this.state = { ...this.getUpdatedTime() });
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
            let i = Math.max(t - e, 0),
                n = Math.floor(i) % 60,
                a = Math.floor(i / 60) % 60;
            return { hours: Math.floor(i / 3600) % 24, minutes: a, seconds: n };
        }
        render() {
            let { timestamps: t, ...i } = this.props,
                a = this.renderTime(this.state.hours, !0),
                l = this.renderTime(this.state.minutes),
                s = this.renderTime(this.state.seconds),
                o = -1 === a ? `${l}:${s}` : `${a}:${l}:${s}`;
            return null != t.end
                ? (0, n.jsx)(e, { ...i, message: r.intl.formatToPlainString(r.t["I/J7vI"], { duration: o }) })
                : null != t.start
                  ? (0, n.jsx)(e, { ...i, message: r.intl.formatToPlainString(r.t.M9Fexd, { duration: o }) })
                  : null;
        }
    };
}
