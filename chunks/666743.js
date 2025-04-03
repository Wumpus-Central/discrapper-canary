n.d(t, { Z: () => o }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(314897);
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
function o(e) {
    return class extends i.Component {
        componentDidMount() {
            l.default.addChangeListener(this.onStoreChange);
        }
        componentWillUnmount() {
            l.default.removeChangeListener(this.onStoreChange);
        }
        render() {
            var t, n;
            return (0, r.jsx)(
                e,
                ((t = (function (e) {
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
                })({}, this.props)),
                (n = n = { isAuthenticated: this.state.isAuthenticated }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        }
        constructor(...e) {
            super(...e),
                a(this, 'state', { isAuthenticated: l.default.isAuthenticated() }),
                a(this, 'onStoreChange', () => {
                    this.setState({ isAuthenticated: l.default.isAuthenticated() });
                });
        }
    };
}
