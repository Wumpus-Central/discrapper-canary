s.d(e, { A: () => l });
var o = s(477900),
    i = s(582128),
    n = s(451988),
    r = s(862482),
    p = s(109802),
    d = s(765178),
    h = s(957565),
    a = s(375708);
class u extends i.PureComponent {
    _timeout;
    static defaultProps = { delay: 1e3 };
    constructor(t) {
        super(t),
            (this.state = { mode: p.e.Modes.DEFAULT }),
            (this._timeout = new n.Ep()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: t } = this.props,
            { mode: e } = this.state,
            s = e === p.e.Modes.SUCCESS ? a.intl.string(a.t.t5VZ88) : t;
        return (0, o.jsx)(p.e, { ...this.props, onCopy: this.handleCopy, mode: e, text: s, supportsCopy: h.p5 });
    }
    handleCopy(t) {
        let { onCopy: e, delay: s = 1e3 } = this.props;
        (0, h.C)(
            t,
            () => {
                this.setState({ mode: p.e.Modes.SUCCESS }), d.O.announce(a.intl.string(a.t.t5VZ88));
            },
            () => this.setState({ mode: p.e.Modes.ERROR }),
        ),
            this._timeout.start(s, () => this.setState({ mode: p.e.Modes.DEFAULT })),
            e?.(t);
    }
    getVerticalButtonColor(t) {
        switch (t) {
            case p.e.Modes.SUCCESS:
                return r.$n.Colors.GREEN;
            case p.e.Modes.ERROR:
                return r.$n.Colors.RED;
            default:
                return r.$n.Colors.BRAND;
        }
    }
}
let l = u;
