t.d(n, { Z: () => b });
var r,
    o = t(255367),
    i = t(73800),
    a = t(846519),
    l = t(755721),
    c = t(481060),
    s = t(572004),
    d = t(388032);
function u(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
class _ extends (r = i.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, n;
        let { text: t } = this.props,
            { mode: r } = this.state,
            i = r === c.kO8.Modes.SUCCESS ? d.intl.string(d.t["t5VZ8/"]) : t;
        return (0, o.jsx)(
            c.kO8,
            ((e = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        r.forEach(function (n) {
                            u(e, n, t[n]);
                        });
                }
                return e;
            })({}, this.props)),
            (n = n =
                {
                    onCopy: this.handleCopy,
                    mode: r,
                    text: i,
                    supportsCopy: s.wS,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  }),
            e),
        );
    }
    handleCopy(e) {
        let { onCopy: n, delay: t = 1000 } = this.props;
        (0, s.JG)(
            e,
            () => this.setState({ mode: c.kO8.Modes.SUCCESS }),
            () => this.setState({ mode: c.kO8.Modes.ERROR }),
        ),
            this._timeout.start(t, () => this.setState({ mode: c.kO8.Modes.DEFAULT })),
            null == n || n(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case c.kO8.Modes.SUCCESS:
                return l.zx.Colors.GREEN;
            case c.kO8.Modes.ERROR:
                return l.zx.Colors.RED;
            default:
                return l.zx.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e),
            u(this, "_timeout", void 0),
            (this.state = { mode: c.kO8.Modes.DEFAULT }),
            (this._timeout = new a.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
}
u(_, "defaultProps", { delay: 1000 });
let b = _;
