n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(846519),
    o = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = 13;
function p(e) {
    return "".concat(e).length < _ ? 1000 * e : e;
}
function h(e) {
    return class extends i.PureComponent {
        componentDidMount() {
            this._interval.start(1000, () => this.setState(this.getUpdatedTime()));
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
                t = Date.now() / 1000;
            return null != e.end
                ? this.getDiff(t, p(e.end) / 1000)
                : null != e.start
                  ? this.getDiff(p(e.start) / 1000, t)
                  : {
                        hours: 0,
                        minutes: 0,
                        seconds: 0,
                    };
        }
        renderTime(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t && e <= 0 ? -1 : e < 10 ? "0".concat(e) : e;
        }
        getDiff(e, t) {
            let n = Math.max(t - e, 0),
                r = Math.floor(n) % 60,
                i = Math.floor(n / 60) % 60;
            return {
                hours: Math.floor(n / 3600) % 24,
                minutes: i,
                seconds: r,
            };
        }
        render() {
            let t = this.props,
                { timestamps: n } = t,
                i = d(t, ["timestamps"]),
                a = this.renderTime(this.state.hours, !0),
                s = this.renderTime(this.state.minutes),
                c = this.renderTime(this.state.seconds),
                f = -1 === a ? "".concat(s, ":").concat(c) : "".concat(a, ":").concat(s, ":").concat(c);
            return null != n.end
                ? (0, r.jsx)(
                      e,
                      u(l({}, i), {
                          message: o.intl.formatToPlainString(o.t["I/J7vI"], {
                              duration: f,
                              hours: a,
                              minutes: s,
                              seconds: c,
                          }),
                      }),
                  )
                : null != n.start
                  ? (0, r.jsx)(
                        e,
                        u(l({}, i), {
                            message: o.intl.formatToPlainString(o.t.M9Fexd, {
                                duration: f,
                                hours: a,
                                minutes: s,
                                seconds: c,
                            }),
                        }),
                    )
                  : null;
        }
        constructor(e) {
            super(e),
                s(this, "_interval", void 0),
                (this._interval = new a.Xp()),
                (this.state = l({}, this.getUpdatedTime()));
        }
    };
}
