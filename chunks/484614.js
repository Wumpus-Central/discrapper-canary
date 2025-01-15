var r,
    o = n(200651),
    a = n(192379),
    s = n(846519),
    i = n(481060),
    l = n(572004),
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
class u extends (r = a.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === i.CopyInput.Modes.SUCCESS ? d.intl.string(d.t['t5VZ8/']) : e;
        return (0, o.jsx)(i.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: n,
            supportsCopy: l.wS
        });
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1000 } = this.props,
            r = (0, l.JG)(e);
        this.setState({ mode: r ? i.CopyInput.Modes.SUCCESS : i.CopyInput.Modes.ERROR }), this._timeout.start(n, () => this.setState({ mode: i.CopyInput.Modes.DEFAULT })), null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case i.CopyInput.Modes.SUCCESS:
                return i.Button.Colors.GREEN;
            case i.CopyInput.Modes.ERROR:
                return i.Button.Colors.RED;
            default:
                return i.Button.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), c(this, '_timeout', void 0), (this.state = { mode: i.CopyInput.Modes.DEFAULT }), (this._timeout = new s.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
c(u, 'defaultProps', { delay: 1000 }), (t.Z = u);
