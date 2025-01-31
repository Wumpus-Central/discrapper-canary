n.d(t, { Z: () => T });
var i,
    r = n(200651),
    a = n(192379),
    _ = n(846519),
    l = n(481060),
    o = n(572004),
    I = n(388032);
function s(e, t, n) {
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
class u extends (i = a.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === l.kO8.Modes.SUCCESS ? I.intl.string(I.t['t5VZ8/']) : e;
        return (0, r.jsx)(l.kO8, {
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
        this.setState({ mode: i ? l.kO8.Modes.SUCCESS : l.kO8.Modes.ERROR }), this._timeout.start(n, () => this.setState({ mode: l.kO8.Modes.DEFAULT })), null == t || t(e);
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
        super(e), s(this, '_timeout', void 0), (this.state = { mode: l.kO8.Modes.DEFAULT }), (this._timeout = new _.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
s(u, 'defaultProps', { delay: 1000 });
let T = u;
