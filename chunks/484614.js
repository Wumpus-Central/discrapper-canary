s.d(t, { Z: () => p });
var r,
    n = s(200651),
    i = s(192379),
    o = s(846519),
    l = s(481060),
    a = s(572004),
    c = s(388032);
function u(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class d extends (r = i.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, t;
        let { text: s } = this.props,
            { mode: r } = this.state,
            i = r === l.kO8.Modes.SUCCESS ? c.NW.string(c.t['t5VZ8/']) : s;
        return (0, n.jsx)(
            l.kO8,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(s);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(s).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(s, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            u(e, t, s[t]);
                        });
                }
                return e;
            })({}, this.props)),
            (t = t =
                {
                    onCopy: this.handleCopy,
                    mode: r,
                    text: i,
                    supportsCopy: a.wS
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var s = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          s.push.apply(s, r);
                      }
                      return s;
                  })(Object(t)).forEach(function (s) {
                      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
                  }),
            e)
        );
    }
    handleCopy(e) {
        let { onCopy: t, delay: s = 1000 } = this.props,
            r = (0, a.JG)(e);
        this.setState({ mode: r ? l.kO8.Modes.SUCCESS : l.kO8.Modes.ERROR }), this._timeout.start(s, () => this.setState({ mode: l.kO8.Modes.DEFAULT })), null == t || t(e);
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
        super(e), u(this, '_timeout', void 0), (this.state = { mode: l.kO8.Modes.DEFAULT }), (this._timeout = new o.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
u(d, 'defaultProps', { delay: 1000 });
let p = d;
