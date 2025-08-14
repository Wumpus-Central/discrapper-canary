n.d(t, { Z: () => p });
var r,
    i = n(255367),
    l = n(73800),
    o = n(846519),
    s = n(755721),
    c = n(481060),
    a = n(572004),
    u = n(388032);
function d(e, t, n) {
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
class f extends (r = l.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, t;
        let { text: n } = this.props,
            { mode: r } = this.state,
            l = r === c.kO8.Modes.SUCCESS ? u.intl.string(u.t["t5VZ8/"]) : n;
        return (0, i.jsx)(
            c.kO8,
            ((e = (function (e) {
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
                            d(e, t, n[t]);
                        });
                }
                return e;
            })({}, this.props)),
            (t = t =
                {
                    onCopy: this.handleCopy,
                    mode: r,
                    text: l,
                    supportsCopy: a.wS,
                }),
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
            e),
        );
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1000 } = this.props;
        (0, a.JG)(
            e,
            () => this.setState({ mode: c.kO8.Modes.SUCCESS }),
            () => this.setState({ mode: c.kO8.Modes.ERROR }),
        ),
            this._timeout.start(n, () => this.setState({ mode: c.kO8.Modes.DEFAULT })),
            null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case c.kO8.Modes.SUCCESS:
                return s.zx.Colors.GREEN;
            case c.kO8.Modes.ERROR:
                return s.zx.Colors.RED;
            default:
                return s.zx.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e),
            d(this, "_timeout", void 0),
            (this.state = { mode: c.kO8.Modes.DEFAULT }),
            (this._timeout = new o.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
}
d(f, "defaultProps", { delay: 1000 });
let p = f;
