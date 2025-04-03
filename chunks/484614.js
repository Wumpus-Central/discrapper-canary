n.d(t, { Z: () => l });
var o,
    r = n(200651),
    i = n(192379),
    a = n(846519),
    _ = n(481060),
    d = n(572004),
    s = n(388032);
function b(e, t, n) {
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
class c extends (o = i.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, t;
        let { text: n } = this.props,
            { mode: o } = this.state,
            i = o === _.kO8.Modes.SUCCESS ? s.NW.string(s.t['t5VZ8/']) : n;
        return (0, r.jsx)(
            _.kO8,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        o.forEach(function (t) {
                            b(e, t, n[t]);
                        });
                }
                return e;
            })({}, this.props)),
            (t = t =
                {
                    onCopy: this.handleCopy,
                    mode: o,
                    text: i,
                    supportsCopy: d.wS
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var o = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, o);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e)
        );
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1000 } = this.props,
            o = (0, d.JG)(e);
        this.setState({ mode: o ? _.kO8.Modes.SUCCESS : _.kO8.Modes.ERROR }), this._timeout.start(n, () => this.setState({ mode: _.kO8.Modes.DEFAULT })), null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case _.kO8.Modes.SUCCESS:
                return _.zxk.Colors.GREEN;
            case _.kO8.Modes.ERROR:
                return _.zxk.Colors.RED;
            default:
                return _.zxk.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), b(this, '_timeout', void 0), (this.state = { mode: _.kO8.Modes.DEFAULT }), (this._timeout = new a.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
b(c, 'defaultProps', { delay: 1000 });
let l = c;
