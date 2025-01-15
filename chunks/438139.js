n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(846519),
    r = n(388032);
function s(e) {
    return ''.concat(e).length < 13 ? 1000 * e : e;
}
function o(e) {
    return class extends l.PureComponent {
        componentDidMount() {
            this._interval.start(1000, () => this.setState(this.getUpdatedTime()));
        }
        componentWillUnmount() {
            this._interval.stop();
        }
        componentDidUpdate(e) {
            (e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime());
        }
        getUpdatedTime() {
            let { timestamps: e } = this.props,
                t = Date.now() / 1000;
            return null != e.end
                ? this.getDiff(t, s(e.end) / 1000)
                : null != e.start
                  ? this.getDiff(s(e.start) / 1000, t)
                  : {
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
        }
        renderTime(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t && e <= 0 ? -1 : e < 10 ? '0'.concat(e) : e;
        }
        getDiff(e, t) {
            let n = Math.max(t - e, 0),
                i = Math.floor(n) % 60,
                l = Math.floor(n / 60) % 60;
            return {
                hours: Math.floor(n / 3600) % 24,
                minutes: l,
                seconds: i
            };
        }
        render() {
            let { timestamps: t, ...n } = this.props,
                { hours: l, minutes: a, seconds: s } = this.state,
                o = {
                    hours: this.renderTime(l, !0),
                    minutes: this.renderTime(a),
                    seconds: this.renderTime(s)
                };
            return null != t.end
                ? (0, i.jsx)(e, {
                      ...n,
                      message: r.intl.formatToPlainString(r.t['I/J7vL'], o)
                  })
                : null != t.start
                  ? (0, i.jsx)(e, {
                        ...n,
                        message: r.intl.formatToPlainString(r.t.M9Fexc, o)
                    })
                  : null;
        }
        constructor(e) {
            var t, n, i;
            super(e),
                (t = this),
                (i = void 0),
                (n = '_interval') in t
                    ? Object.defineProperty(t, n, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      })
                    : (t[n] = i),
                (this._interval = new a.Xp()),
                (this.state = { ...this.getUpdatedTime() });
        }
    };
}
