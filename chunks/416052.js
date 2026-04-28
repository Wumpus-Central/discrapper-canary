s.d(e, { A: () => u });
var o = s(627968),
    i = s(64700),
    r = s(451988),
    n = s(862482),
    p = s(109802),
    d = s(957565),
    h = s(985018);
class a extends i.PureComponent {
    _timeout;
    static defaultProps = { delay: 1e3 };
    constructor(t) {
        super(t),
            (this.state = { mode: p.e.Modes.DEFAULT }),
            (this._timeout = new r.Ep()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: t } = this.props,
            { mode: e } = this.state,
            s = e === p.e.Modes.SUCCESS ? h.intl.string(h.t.t5VZ88) : t;
        return (0, o.jsx)(p.e, { ...this.props, onCopy: this.handleCopy, mode: e, text: s, supportsCopy: d.p5 });
    }
    handleCopy(t) {
        let { onCopy: e, delay: s = 1e3 } = this.props;
        (0, d.C)(
            t,
            () => this.setState({ mode: p.e.Modes.SUCCESS }),
            () => this.setState({ mode: p.e.Modes.ERROR }),
        ),
            this._timeout.start(s, () => this.setState({ mode: p.e.Modes.DEFAULT })),
            e?.(t);
    }
    getVerticalButtonColor(t) {
        switch (t) {
            case p.e.Modes.SUCCESS:
                return n.$n.Colors.GREEN;
            case p.e.Modes.ERROR:
                return n.$n.Colors.RED;
            default:
                return n.$n.Colors.BRAND;
        }
    }
}
let u = a;
