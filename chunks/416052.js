n.d(t, {
    A: () => g,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(451988),
    o = n(421380),
    l = n(397927),
    c = n(957565),
    u = n(985018);

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
let h = 1e3;
class m extends (r = a.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === l.e2O.Modes.SUCCESS ? u.intl.string(u.t.t5VZ88) : e;
        return (0, i.jsx)(
            l.e2O,
            _(f({}, this.props), {
                onCopy: this.handleCopy,
                mode: t,
                text: n,
                supportsCopy: c.p5,
            }),
        );
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = h } = this.props;
        (0, c.C)(
            e,
            () =>
                this.setState({
                    mode: l.e2O.Modes.SUCCESS,
                }),
            () =>
                this.setState({
                    mode: l.e2O.Modes.ERROR,
                }),
        ),
            this._timeout.start(n, () =>
                this.setState({
                    mode: l.e2O.Modes.DEFAULT,
                }),
            ),
            null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case l.e2O.Modes.SUCCESS:
                return o.$n.Colors.GREEN;
            case l.e2O.Modes.ERROR:
                return o.$n.Colors.RED;
            default:
                return o.$n.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e),
            d(this, "_timeout", void 0),
            (this.state = {
                mode: l.e2O.Modes.DEFAULT,
            }),
            (this._timeout = new s.Ep()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
}
d(m, "defaultProps", {
    delay: h,
});
let g = m;
