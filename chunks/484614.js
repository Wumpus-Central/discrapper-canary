n.d(t, { Z: () => p });
var i,
    r = n(951288),
    s = n(647438),
    l = n(846519),
    o = n(755721),
    a = n(481060),
    u = n(572004),
    c = n(388032);
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
class h extends (i = s.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, t;
        let { text: n } = this.props,
            { mode: i } = this.state,
            s = i === a.kO8.Modes.SUCCESS ? c.intl.string(c.t["t5VZ8/"]) : n;
        return (0, r.jsx)(
            a.kO8,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            d(e, t, n[t]);
                        });
                }
                return e;
            })({}, this.props)),
            (t = t =
                {
                    onCopy: this.handleCopy,
                    mode: i,
                    text: s,
                    supportsCopy: u.wS,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
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
        (0, u.JG)(
            e,
            () => this.setState({ mode: a.kO8.Modes.SUCCESS }),
            () => this.setState({ mode: a.kO8.Modes.ERROR }),
        ),
            this._timeout.start(n, () => this.setState({ mode: a.kO8.Modes.DEFAULT })),
            null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case a.kO8.Modes.SUCCESS:
                return o.zx.Colors.GREEN;
            case a.kO8.Modes.ERROR:
                return o.zx.Colors.RED;
            default:
                return o.zx.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e),
            d(this, "_timeout", void 0),
            (this.state = { mode: a.kO8.Modes.DEFAULT }),
            (this._timeout = new l.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
}
d(h, "defaultProps", { delay: 1000 });
let p = h;
