n.d(t, { Z: () => h });
var i,
    l = n(200651),
    s = n(192379),
    a = n(846519),
    r = n(481060),
    o = n(572004),
    d = n(388032);
function c(e, t, n) {
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
class u extends (i = s.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === r.kO8.Modes.SUCCESS ? d.intl.string(d.t['t5VZ8/']) : e;
        return (0, l.jsx)(r.kO8, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: n,
            supportsCopy: o.wS
        });
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1000 } = this.props,
            i = (0, o.JG)(e);
        this.setState({ mode: i ? r.kO8.Modes.SUCCESS : r.kO8.Modes.ERROR }), this._timeout.start(n, () => this.setState({ mode: r.kO8.Modes.DEFAULT })), null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case r.kO8.Modes.SUCCESS:
                return r.zxk.Colors.GREEN;
            case r.kO8.Modes.ERROR:
                return r.zxk.Colors.RED;
            default:
                return r.zxk.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), c(this, '_timeout', void 0), (this.state = { mode: r.kO8.Modes.DEFAULT }), (this._timeout = new a.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
c(u, 'defaultProps', { delay: 1000 });
let h = u;
