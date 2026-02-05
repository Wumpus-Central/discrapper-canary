n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(397086);
class o extends r.PureComponent {
    unmounting = !1;
    state = { loaded: !1 };
    static defaultProps = { width: 0, height: 0, alt: "" };
    constructor(e) {
        super(e), this.initialize();
    }
    componentDidUpdate(e) {
        e.src !== this.props.src && this.setState({ loaded: !1 }, () => this.initialize());
    }
    initialize() {
        let e;
        ((e = this.props.src),
        new Promise((t, n) => {
            null == e && n(Error("No image src passed"));
            let i = new Image();
            (i.src = e), (i.onload = () => t(i)), (i.onerror = (e) => n(e));
        })).then(() => {
            this.unmounting || this.setState({ loaded: !0 });
        });
    }
    componentWillUnmount() {
        this.unmounting = !0;
    }
    render() {
        let { className: e, src: t, alt: n, width: r, height: a, onLoad: o, style: d, imageClassName: c } = this.props,
            { loaded: u } = this.state;
        return (0, i.jsx)("div", {
            className: e,
            style: { ...d, width: r, height: a },
            children: (0, i.jsx)("img", {
                className: l()(s.S, c, { [s.K]: u }),
                width: r,
                height: a,
                src: t,
                alt: n,
                onLoad: o,
            }),
        });
    }
}
let d = o;
