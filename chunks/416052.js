"use strict";
n.d(t, { A: () => c });
var s = n(627968),
    i = n(64700),
    r = n(451988),
    l = n(421380),
    a = n(397927),
    o = n(957565),
    d = n(985018);
class h extends i.PureComponent {
    _timeout;
    static defaultProps = { delay: 1e3 };
    constructor(e) {
        super(e),
            (this.state = { mode: a.e2O.Modes.DEFAULT }),
            (this._timeout = new r.Ep()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === a.e2O.Modes.SUCCESS ? d.intl.string(d.t.t5VZ88) : e;
        return (0, s.jsx)(a.e2O, { ...this.props, onCopy: this.handleCopy, mode: t, text: n, supportsCopy: o.p5 });
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1e3 } = this.props;
        (0, o.C)(
            e,
            () => this.setState({ mode: a.e2O.Modes.SUCCESS }),
            () => this.setState({ mode: a.e2O.Modes.ERROR }),
        ),
            this._timeout.start(n, () => this.setState({ mode: a.e2O.Modes.DEFAULT })),
            t?.(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case a.e2O.Modes.SUCCESS:
                return l.$n.Colors.GREEN;
            case a.e2O.Modes.ERROR:
                return l.$n.Colors.RED;
            default:
                return l.$n.Colors.BRAND;
        }
    }
}
let c = h;
