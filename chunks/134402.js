e.d(n, {
    B6: () => A,
    Ix: () => m,
    W6: () => R,
    XZ: () => d,
    y: () => g,
});
var r = e(238710),
    i = e(64700);
e(655972), e(830845);
var o = e(777211),
    a = e(258635),
    c = e(542113),
    u = e(353719),
    s = e.n(u);
e(53635);
var l = e(725664),
    p = e(833871),
    f = e.n(p),
    v = function (t) {
        var n = (0, o.A)();
        return (n.displayName = t), n;
    },
    h = v("Router-History"),
    d = v("Router"),
    m = (function (t) {
        function n(n) {
            var e;
            return (
                ((e = t.call(this, n) || this).state = { location: n.history.location }),
                (e._isMounted = !1),
                (e._pendingLocation = null),
                n.staticContext ||
                    (e.unlisten = n.history.listen(function (t) {
                        e._pendingLocation = t;
                    })),
                e
            );
        }
        (0, r.A)(n, t),
            (n.computeRootMatch = function (t) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: "/" === t,
                };
            });
        var e = n.prototype;
        return (
            (e.componentDidMount = function () {
                var t = this;
                (this._isMounted = !0),
                    this.unlisten && this.unlisten(),
                    this.props.staticContext ||
                        (this.unlisten = this.props.history.listen(function (n) {
                            t._isMounted && t.setState({ location: n });
                        })),
                    this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (e.componentWillUnmount = function () {
                this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (e.render = function () {
                return i.createElement(
                    d.Provider,
                    {
                        value: {
                            history: this.props.history,
                            location: this.state.location,
                            match: n.computeRootMatch(this.state.location.pathname),
                            staticContext: this.props.staticContext,
                        },
                    },
                    i.createElement(h.Provider, {
                        children: this.props.children || null,
                        value: this.props.history,
                    }),
                );
            }),
            n
        );
    })(i.Component);
i.Component, i.Component;
var y = {},
    C = 0;
function A(t, n) {
    void 0 === n && (n = {}), ("string" == typeof n || Array.isArray(n)) && (n = { path: n });
    var e = n,
        r = e.path,
        i = e.exact,
        o = void 0 !== i && i,
        a = e.strict,
        c = void 0 !== a && a,
        u = e.sensitive,
        l = void 0 !== u && u;
    return [].concat(r).reduce(function (n, e) {
        if (!e && "" !== e) return null;
        if (n) return n;
        var r = (function (t, n) {
                var e = "" + n.end + n.strict + n.sensitive,
                    r = y[e] || (y[e] = {});
                if (r[t]) return r[t];
                var i = [],
                    o = {
                        regexp: s()(t, i, n),
                        keys: i,
                    };
                return C < 10000 && ((r[t] = o), C++), o;
            })(e, {
                end: o,
                strict: c,
                sensitive: l,
            }),
            i = r.regexp,
            a = r.keys,
            u = i.exec(t);
        if (!u) return null;
        var p = u[0],
            f = u.slice(1),
            v = t === p;
        return o && !v
            ? null
            : {
                  path: e,
                  url: "/" === e && "" === p ? "/" : p,
                  isExact: v,
                  params: a.reduce(function (t, n, e) {
                      return (t[n.name] = f[e]), t;
                  }, {}),
              };
    }, null);
}
i.Component;
function g(t) {
    var n = "withRouter(" + (t.displayName || t.name) + ")",
        e = function (n) {
            var e = n.wrappedComponentRef,
                r = (0, l.A)(n, ["wrappedComponentRef"]);
            return i.createElement(d.Consumer, null, function (n) {
                return n || (0, a.A)(!1), i.createElement(t, (0, c.A)({}, r, n, { ref: e }));
            });
        };
    return (e.displayName = n), (e.WrappedComponent = t), f()(e, t);
}
i.Component, i.Component;
var x = i.useContext;
function R() {
    return x(h);
}
