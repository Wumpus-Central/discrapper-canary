n.d(t, { A: () => d });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(397086);
class o extends a.PureComponent {
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
        let { className: e, src: t, alt: n, width: a, height: l, onLoad: o, style: d, imageClassName: c } = this.props,
            { loaded: u } = this.state;
        return (0, i.jsx)("div", {
            className: e,
            style: { ...d, width: a, height: l },
            children: (0, i.jsx)("img", {
                className: r()(s.S, c, { [s.K]: u }),
                width: a,
                height: l,
                src: t,
                alt: n,
                onLoad: o,
            }),
        });
    }
}
let d = o;
