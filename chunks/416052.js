"use strict";
n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    s = n(451988),
    a = n(862482),
    r = n(109802),
    o = n(957565),
    d = n(985018);
class c extends i.PureComponent {
    _timeout;
    static defaultProps = { delay: 1e3 };
    constructor(e) {
        super(e),
            (this.state = { mode: r.e.Modes.DEFAULT }),
            (this._timeout = new s.Ep()),
            (this.handleCopy = this.handleCopy.bind(this));
    }
    componentWillUnmount() {
        this._timeout.stop();
    }
    render() {
        let { text: e } = this.props,
            { mode: t } = this.state,
            n = t === r.e.Modes.SUCCESS ? d.intl.string(d.t.t5VZ88) : e;
        return (0, l.jsx)(r.e, { ...this.props, onCopy: this.handleCopy, mode: t, text: n, supportsCopy: o.p5 });
    }
    handleCopy(e) {
        let { onCopy: t, delay: n = 1e3 } = this.props;
        (0, o.C)(
            e,
            () => this.setState({ mode: r.e.Modes.SUCCESS }),
            () => this.setState({ mode: r.e.Modes.ERROR }),
        ),
            this._timeout.start(n, () => this.setState({ mode: r.e.Modes.DEFAULT })),
            t?.(e);
    }
    getVerticalButtonColor(e) {
        switch (e) {
            case r.e.Modes.SUCCESS:
                return a.$n.Colors.GREEN;
            case r.e.Modes.ERROR:
                return a.$n.Colors.RED;
            default:
                return a.$n.Colors.BRAND;
        }
    }
}
let u = c;
