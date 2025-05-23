t.d(n, { Z: () => _ });
var r,
    a = t(255367),
    i = t(73800),
    o = t(846519),
    l = t(481060),
    c = t(572004),
    s = t(388032);
function d(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class u extends (r = i.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, n;
        let { text: t } = this.props,
            { mode: r } = this.state,
            i = r === l.kO8.Modes.SUCCESS ? s.intl.string(s.t['t5VZ8/']) : t;
        return (0, a.jsx)(
            l.kO8,
            ((e = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        r.forEach(function (n) {
                            d(e, n, t[n]);
                        });
                }
                return e;
            })({}, this.props)),
            (n = n =
                {
                    onCopy: this.handleCopy,
                    mode: r,
                    text: i,
                    supportsCopy: c.wS
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
            e)
        );
    }
    handleCopy(e) {
        let { onCopy: n, delay: t = 1000 } = this.props;
        (0, c.JG)(
            e,
            () => this.setState({ mode: l.kO8.Modes.SUCCESS }),
            () => this.setState({ mode: l.kO8.Modes.ERROR })
        ),
            this._timeout.start(t, () => this.setState({ mode: l.kO8.Modes.DEFAULT })),
            null == n || n(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case l.kO8.Modes.SUCCESS:
                return l.zxk.Colors.GREEN;
            case l.kO8.Modes.ERROR:
                return l.zxk.Colors.RED;
            default:
                return l.zxk.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), d(this, '_timeout', void 0), (this.state = { mode: l.kO8.Modes.DEFAULT }), (this._timeout = new o.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
d(u, 'defaultProps', { delay: 1000 });
let _ = u;
