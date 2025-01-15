var o,
    a = t(200651),
    i = t(192379),
    f = t(846519),
    d = t(481060),
    r = t(572004),
    c = t(388032);
function s(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class l extends (o = i.PureComponent) {
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: n } = this.state,
            t = n === d.CopyInput.Modes.SUCCESS ? c.intl.string(c.t['t5VZ8/']) : e;
        return (0, a.jsx)(d.CopyInput, {
            ...this.props,
            onCopy: this.handleCopy,
            mode: n,
            text: t,
            supportsCopy: r.wS
        });
    }
    handleCopy(e) {
        let { onCopy: n, delay: t = 1000 } = this.props,
            o = (0, r.JG)(e);
        this.setState({ mode: o ? d.CopyInput.Modes.SUCCESS : d.CopyInput.Modes.ERROR }), this._timeout.start(t, () => this.setState({ mode: d.CopyInput.Modes.DEFAULT })), null == n || n(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case d.CopyInput.Modes.SUCCESS:
                return d.Button.Colors.GREEN;
            case d.CopyInput.Modes.ERROR:
                return d.Button.Colors.RED;
            default:
                return d.Button.Colors.BRAND;
        }
    }
    constructor(e) {
        super(e), s(this, '_timeout', void 0), (this.state = { mode: d.CopyInput.Modes.DEFAULT }), (this._timeout = new f.V7()), (this.handleCopy = this.handleCopy.bind(this));
    }
}
s(l, 'defaultProps', { delay: 1000 }), (n.Z = l);
