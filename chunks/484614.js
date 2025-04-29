n.d(t, { Z: () => f });
var r,
    s = n(255367),
    i = n(73800),
    o = n(846519),
    l = n(481060),
    a = n(572004),
    c = n(388032);
function u(e, t, n) {
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
class d extends (r = i.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, t;
        let { text: n } = this.props,
            { mode: r } = this.state,
            i = r === l.kO8.Modes.SUCCESS ? c.intl.string(c.t['t5VZ8/']) : n;
        return (0, s.jsx)(
            l.kO8,
            ((e = (function (e) {
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
                            u(e, t, n[t]);
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
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e)
        );
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1000 } = this.props;
        (0, a.JG)(
            e,
            () => this.setState({ mode: l.kO8.Modes.SUCCESS }),
            () => this.setState({ mode: l.kO8.Modes.ERROR })
        ),
            this._timeout.start(n, () => this.setState({ mode: l.kO8.Modes.DEFAULT })),
            null == t || t(e);
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
let f = d;
