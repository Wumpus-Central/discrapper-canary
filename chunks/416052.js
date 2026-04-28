n.d(t, { A: () => u });
var a = n(627968),
    l = n(64700),
    i = n(451988),
    r = n(862482),
    s = n(109802),
    o = n(957565),
    c = n(985018);
class d extends l.PureComponent {
    _timeout;
    static defaultProps = { delay: 1e3 };
    constructor(e) {
        super(e),
            (this.state = { mode: s.e.Modes.DEFAULT }),
            (this._timeout = new i.Ep()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === s.e.Modes.SUCCESS ? c.intl.string(c.t.t5VZ88) : e;
        return (0, a.jsx)(s.e, { ...this.props, onCopy: this.handleCopy, mode: t, text: n, supportsCopy: o.p5 });
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1e3 } = this.props;
        (0, o.C)(
            e,
            () => this.setState({ mode: s.e.Modes.SUCCESS }),
            () => this.setState({ mode: s.e.Modes.ERROR }),
        ),
            this._timeout.start(n, () => this.setState({ mode: s.e.Modes.DEFAULT })),
            t?.(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case s.e.Modes.SUCCESS:
                return r.$n.Colors.GREEN;
            case s.e.Modes.ERROR:
                return r.$n.Colors.RED;
            default:
                return r.$n.Colors.BRAND;
        }
    }
}
let u = d;
