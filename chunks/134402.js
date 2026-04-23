n.d(e, { B6: () => _, Ix: () => m, W6: () => A, XZ: () => d, y: () => g });
var r = n(491996),
    o = n(64700);
n(655972), n(830845);
var i = n(777211),
    a = n(258635),
    u = n(259151),
    c = n(353719),
    s = n.n(c);
n(53635);
var l = n(975126),
    f = n(833871),
    p = n.n(f),
    v = function (t) {
        var e = (0, i.A)();
        return (e.displayName = t), e;
    },
    h = v("Router-History"),
    d = v("Router"),
    m = (function (t) {
        function e(e) {
            var n;
            return (
                ((n = t.call(this, e) || this).state = { location: e.history.location }),
                (n._isMounted = !1),
                (n._pendingLocation = null),
                e.staticContext ||
                    (n.unlisten = e.history.listen(function (t) {
                        n._pendingLocation = t;
                    })),
                n
            );
        }
        (0, r.A)(e, t),
            (e.computeRootMatch = function (t) {
                return { path: "/", url: "/", params: {}, isExact: "/" === t };
            });
        var n = e.prototype;
        return (
            (n.componentDidMount = function () {
                var t = this;
                (this._isMounted = !0),
                    this.unlisten && this.unlisten(),
                    this.props.staticContext ||
                        (this.unlisten = this.props.history.listen(function (e) {
                            t._isMounted && t.setState({ location: e });
                        })),
                    this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
                this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (n.render = function () {
                return o.createElement(
                    d.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: e.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    o.createElement(h.Provider, { children: this.props.children || null, value: this.props.history }),
                );
            }),
            e
        );
    })(o.Component);
o.Component, o.Component;
var y = {},
    C = 0;
function _(t, e) {
    void 0 === e && (e = {}), ("string" == typeof e || Array.isArray(e)) && (e = { path: e });
    var n = e,
        r = n.path,
        o = n.exact,
        i = void 0 !== o && o,
        a = n.strict,
        u = void 0 !== a && a,
        c = n.sensitive,
        l = void 0 !== c && c;
    return [].concat(r).reduce(function (e, n) {
        if (!n && "" !== n) return null;
        if (e) return e;
        var r = (function (t, e) {
                var n = "" + e.end + e.strict + e.sensitive,
                    r = y[n] || (y[n] = {});
                if (r[t]) return r[t];
                var o = [],
                    i = { regexp: s()(t, o, e), keys: o };
                return C < 1e4 && ((r[t] = i), C++), i;
            })(n, { end: i, strict: u, sensitive: l }),
            o = r.regexp,
            a = r.keys,
            c = o.exec(t);
        if (!c) return null;
        var f = c[0],
            p = c.slice(1),
            v = t === f;
        return i && !v
            ? null
            : {
                  path: n,
                  url: "/" === n && "" === f ? "/" : f,
                  isExact: v,
                  params: a.reduce(function (t, e, n) {
                      return (t[e.name] = p[n]), t;
                  }, {}),
              };
    }, null);
}
o.Component;
function g(t) {
    var e = "withRouter(" + (t.displayName || t.name) + ")",
        n = function (e) {
            var n = e.wrappedComponentRef,
                r = (0, l.A)(e, ["wrappedComponentRef"]);
            return o.createElement(d.Consumer, null, function (e) {
                return e || (0, a.A)(!1), o.createElement(t, (0, u.A)({}, r, e, { ref: n }));
            });
        };
    return (n.displayName = e), (n.WrappedComponent = t), p()(n, t);
}
o.Component, o.Component;
var x = o.useContext;
function A() {
    return x(h);
}
