n.d(t, {
    A: () => f,
});
var i,
    r = n(627968),
    s = n(64700),
    l = n(451988),
    a = n(421380),
    o = n(397927),
    u = n(957565),
    d = n(985018);

function c(e, t, n) {
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
class A extends (i = s.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        var e, t;
        let { text: n } = this.props,
            { mode: i } = this.state,
            s = i === o.e2O.Modes.SUCCESS ? d.intl.string(d.t.t5VZ88) : n;
        return (0, r.jsx)(
            o.e2O,
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
                            c(e, t, n[t]);
                        });
                }
                return e;
            })({}, this.props)),
            (t = t =
                {
                    onCopy: this.handleCopy,
                    mode: i,
                    text: s,
                    supportsCopy: u.p5,
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
        let { onCopy: t, delay: n = 1e3 } = this.props;
        (0, u.C)(
            e,
            () =>
                this.setState({
                    mode: o.e2O.Modes.SUCCESS,
                }),
            () =>
                this.setState({
                    mode: o.e2O.Modes.ERROR,
                }),
        ),
            this._timeout.start(n, () =>
                this.setState({
                    mode: o.e2O.Modes.DEFAULT,
                }),
            ),
            null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case o.e2O.Modes.SUCCESS:
                return a.$n.Colors.GREEN;
            case o.e2O.Modes.ERROR:
                return a.$n.Colors.RED;
            default:
                return a.$n.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e),
            c(this, "_timeout", void 0),
            (this.state = {
                mode: o.e2O.Modes.DEFAULT,
            }),
            (this._timeout = new l.Ep()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
}
c(A, "defaultProps", {
    delay: 1e3,
});
let f = A;
