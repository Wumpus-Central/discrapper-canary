n.d(t, { Z: () => g });
var r,
    i = n(54381),
    a = n(473749),
    o = n(846519),
    s = n(755721),
    l = n(481060),
    c = n(572004),
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
function f(e) {
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
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = 1000;
class h extends (r = a.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === l.kO8.Modes.SUCCESS ? u.intl.string(u.t.t5VZ88) : e;
        return (0, i.jsx)(
            l.kO8,
            _(f({}, this.props), {
                onCopy: this.handleCopy,
                mode: t,
                text: n,
                supportsCopy: c.wS,
            }),
        );
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = m } = this.props;
        (0, c.JG)(
            e,
            () => this.setState({ mode: l.kO8.Modes.SUCCESS }),
            () => this.setState({ mode: l.kO8.Modes.ERROR }),
        ),
            this._timeout.start(n, () => this.setState({ mode: l.kO8.Modes.DEFAULT })),
            null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case l.kO8.Modes.SUCCESS:
                return s.zx.Colors.GREEN;
            case l.kO8.Modes.ERROR:
                return s.zx.Colors.RED;
            default:
                return s.zx.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e),
            d(this, "_timeout", void 0),
            (this.state = { mode: l.kO8.Modes.DEFAULT }),
            (this._timeout = new o.V7()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
}
d(h, "defaultProps", { delay: m });
let g = h;
