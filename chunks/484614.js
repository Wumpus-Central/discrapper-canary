var i,
    r = n(200651),
    o = n(192379),
    a = n(846519),
    u = n(481060),
    I = n(572004),
    l = n(388032);
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
class _ extends (i = o.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === u.CopyInput.Modes.SUCCESS ? l.intl.string(l.t['t5VZ8/']) : e;
        return (0, r.jsx)(u.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: t,
            text: n,
            supportsCopy: I.wS
        });
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1000 } = this.props,
            i = (0, I.JG)(e);
        this.setState({ mode: i ? u.CopyInput.Modes.SUCCESS : u.CopyInput.Modes.ERROR }), this._timeout.start(n, () => this.setState({ mode: u.CopyInput.Modes.DEFAULT })), null == t || t(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case u.CopyInput.Modes.SUCCESS:
                return u.Button.Colors.GREEN;
            case u.CopyInput.Modes.ERROR:
                return u.Button.Colors.RED;
            default:
                return u.Button.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), s(this, '_timeout', void 0), (this.state = { mode: u.CopyInput.Modes.DEFAULT }), (this._timeout = new a.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
s(_, 'defaultProps', { delay: 1000 }), (t.Z = _);
