"use strict";
l.d(t, { A: () => u });
var n = l(627968),
    i = l(64700),
    s = l(451988),
    a = l(862482),
    r = l(109802),
    o = l(957565),
    d = l(985018);
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
            l = t === r.e.Modes.SUCCESS ? d.intl.string(d.t.t5VZ88) : e;
        return (0, n.jsx)(r.e, { ...this.props, onCopy: this.handleCopy, mode: t, text: l, supportsCopy: o.p5 });
    }
    handleCopy(e) {
        let { onCopy: t, delay: l = 1e3 } = this.props;
        (0, o.C)(
            e,
            () => this.setState({ mode: r.e.Modes.SUCCESS }),
            () => this.setState({ mode: r.e.Modes.ERROR }),
        ),
            this._timeout.start(l, () => this.setState({ mode: r.e.Modes.DEFAULT })),
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
