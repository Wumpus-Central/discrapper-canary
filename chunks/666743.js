(n.d(t, { Z: () => a }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(314897);
function l(e, t, n) {
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
function a(e) {
    return class extends r.Component {
        componentDidMount() {
            s.default.addChangeListener(this.onStoreChange);
        }
        componentWillUnmount() {
            s.default.removeChangeListener(this.onStoreChange);
        }
        render() {
            var t, n;
            return (0, i.jsx)(
                e,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                l(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, this.props)),
                (n = n = { isAuthenticated: this.state.isAuthenticated }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        }
        constructor(...e) {
            (super(...e),
                l(this, 'state', { isAuthenticated: s.default.isAuthenticated() }),
                l(this, 'onStoreChange', () => {
                    this.setState({ isAuthenticated: s.default.isAuthenticated() });
                }));
        }
    };
}
