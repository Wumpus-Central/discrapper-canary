s.d(t, { Z: () => f });
var n,
    i = s(200651),
    r = s(192379),
    l = s(846519),
    o = s(481060),
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
class d extends (n = r.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            s = t === o.kO8.Modes.SUCCESS ? c.intl.string(c.t['t5VZ8/']) : e;
        return (0, i.jsx)(o.kO8, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: s,
            supportsCopy: a.wS
        });
    }
    handleCopy(e) {
        let { onCopy: t, delay: s = 1000 } = this.props,
            n = (0, a.JG)(e);
        this.setState({ mode: n ? o.kO8.Modes.SUCCESS : o.kO8.Modes.ERROR }), this._timeout.start(s, () => this.setState({ mode: o.kO8.Modes.DEFAULT })), null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case o.kO8.Modes.SUCCESS:
                return o.zxk.Colors.GREEN;
            case o.kO8.Modes.ERROR:
                return o.zxk.Colors.RED;
            default:
                return o.zxk.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), u(this, '_timeout', void 0), (this.state = { mode: o.kO8.Modes.DEFAULT }), (this._timeout = new l.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
u(d, 'defaultProps', { delay: 1000 });
let f = d;
