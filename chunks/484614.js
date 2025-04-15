r.d(t, { Z: () => u });
var n,
    i = r(200651),
    s = r(192379),
    o = r(846519),
    l = r(481060),
    a = r(572004),
    c = r(388032);
function h(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
class v extends (n = s.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, t;
        let { text: r } = this.props,
            { mode: n } = this.state,
            s = n === l.kO8.Modes.SUCCESS ? c.NW.string(c.t['t5VZ8/']) : r;
        return (0, i.jsx)(
            l.kO8,
            ((e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            h(e, t, r[t]);
                        });
                }
                return e;
            })({}, this.props)),
            (t = t =
                {
                    onCopy: this.handleCopy,
                    mode: n,
                    text: s,
                    supportsCopy: a.wS
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(t)).forEach(function (r) {
                      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                  }),
            e)
        );
    }
    handleCopy(e) {
        let { onCopy: t, delay: r = 1000 } = this.props;
        (0, a.JG)(
            e,
            () => this.setState({ mode: l.kO8.Modes.SUCCESS }),
            () => this.setState({ mode: l.kO8.Modes.ERROR })
        ),
            this._timeout.start(r, () => this.setState({ mode: l.kO8.Modes.DEFAULT })),
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
        super(e), h(this, '_timeout', void 0), (this.state = { mode: l.kO8.Modes.DEFAULT }), (this._timeout = new o.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
h(v, 'defaultProps', { delay: 1000 });
let u = v;
