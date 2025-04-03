n.d(t, { Z: () => d });
var r = n(200651),
    l = n(192379),
    i = n(846519),
    o = n(388032);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    return ''.concat(e).length < 13 ? 1000 * e : e;
}
function d(e) {
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
                ? this.getDiff(t, u(e.end) / 1000)
                : null != e.start
                  ? this.getDiff(u(e.start) / 1000, t)
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
                r = Math.floor(n) % 60,
                l = Math.floor(n / 60) % 60;
            return {
                hours: Math.floor(n / 3600) % 24,
                minutes: l,
                seconds: r
            };
        }
        render() {
            let t = this.props,
                { timestamps: n } = t,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    }
                    return l;
                })(t, ['timestamps']),
                { hours: i, minutes: a, seconds: u } = this.state,
                d = {
                    hours: this.renderTime(i, !0),
                    minutes: this.renderTime(a),
                    seconds: this.renderTime(u)
                };
            return null != n.end ? (0, r.jsx)(e, c(s({}, l), { message: o.NW.formatToPlainString(o.t['I/J7vL'], d) })) : null != n.start ? (0, r.jsx)(e, c(s({}, l), { message: o.NW.formatToPlainString(o.t.M9Fexc, d) })) : null;
        }
        constructor(e) {
            super(e), a(this, '_interval', void 0), (this._interval = new i.Xp()), (this.state = s({}, this.getUpdatedTime()));
        }
    };
}
