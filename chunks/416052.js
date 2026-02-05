n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(451988),
    l = n(421380),
    o = n(397927),
    a = n(957565),
    c = n(985018);
class d extends s.PureComponent {
    _timeout;
    static defaultProps = { delay: 1e3 };
    constructor(e) {
        super(e),
            (this.state = { mode: o.e2O.Modes.DEFAULT }),
            (this._timeout = new r.Ep()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === o.e2O.Modes.SUCCESS ? c.intl.string(c.t.t5VZ88) : e;
        return (0, i.jsx)(o.e2O, { ...this.props, onCopy: this.handleCopy, mode: t, text: n, supportsCopy: a.p5 });
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1e3 } = this.props;
        (0, a.C)(
            e,
            () => this.setState({ mode: o.e2O.Modes.SUCCESS }),
            () => this.setState({ mode: o.e2O.Modes.ERROR }),
        ),
            this._timeout.start(n, () => this.setState({ mode: o.e2O.Modes.DEFAULT })),
            t?.(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case o.e2O.Modes.SUCCESS:
                return l.$n.Colors.GREEN;
            case o.e2O.Modes.ERROR:
                return l.$n.Colors.RED;
            default:
                return l.$n.Colors.BRAND;
        }
    }
}
let u = d;
