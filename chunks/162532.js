n.d(t, {
    Y: () => g,
}),
    n(747238),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(113144),
    s = n.n(a),
    o = n(776231);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
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

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let _ = /url\(['"](.*)['"]\)/,
    h = (e) => {
        if (null == e || "" === e || "none" === e) return null;
        let t = e.match(_);
        return null != t ? t[1] : e;
    };

function m(e) {
    return null == e || "" === e || "none" === e ? "none" : "url(".concat(e, ")");
}

function g(e) {
    class t extends i.Component {
        componentDidUpdate(e, t) {
            if (t === this.state) return;
            let { cached: n, loaded: r } = this.state,
                { style: i } = this.props,
                a = null != i ? h(i.backgroundImage) : null;
            (null == a && a !== n) || this.cachedURLs.indexOf(a) >= 0
                ? this.setState({
                      loaded: !0,
                      cached: a,
                  })
                : null != a &&
                  a !== n &&
                  !0 === r &&
                  this.setState(
                      {
                          loaded: !1,
                      },
                      () => this.preloadURL(a),
                  );
        }
        preloadURL(e) {
            var t, n;
            null == (t = (n = this).canceller) || t.call(n),
                (this.canceller = (0, o.yt)(e, (t) => {
                    (this.canceller = null),
                        t ||
                            (this.cachedURLs.push(e),
                            this.setState({
                                cached: e,
                                loaded: !0,
                            }));
                }));
        }
        componentWillUnmount() {
            var e, t;
            null == (e = (t = this).canceller) || e.call(t), (this.cachedURLs.length = 0);
        }
        render() {
            let t = this.props,
                { style: n } = t,
                i = f(t, ["style"]),
                { loaded: a, cached: s } = this.state;
            return (
                a ||
                    null == n ||
                    (n = d(c({}, n), {
                        backgroundImage: m(s),
                    })),
                (0, r.jsx)(
                    e,
                    c(
                        {
                            style: n,
                        },
                        i,
                    ),
                )
            );
        }
        constructor(e) {
            super(e), l(this, "cachedURLs", []), l(this, "canceller", null);
            const { style: t } = e,
                n = null != t ? h(t.backgroundImage) : null;
            (this.cachedURLs = [n]),
                (this.state = {
                    cached: n,
                    loaded: !0,
                });
        }
    }
    return s()(t, e), t;
}
