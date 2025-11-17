n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(314897);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    return class extends i.Component {
        componentDidMount() {
            a.default.addChangeListener(this.onStoreChange);
        }
        componentWillUnmount() {
            a.default.removeChangeListener(this.onStoreChange);
        }
        render() {
            return (0, r.jsx)(e, c(s({}, this.props), { isAuthenticated: this.state.isAuthenticated }));
        }
        constructor(...e) {
            super(...e),
                o(this, "state", { isAuthenticated: a.default.isAuthenticated() }),
                o(this, "onStoreChange", () => {
                    this.setState({ isAuthenticated: a.default.isAuthenticated() });
                });
        }
    };
}
