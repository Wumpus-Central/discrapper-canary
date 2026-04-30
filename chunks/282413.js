"use strict";
n.d(t, { o: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    l = n(451988),
    u = n(868285),
    c = n(235986),
    d = n(652215),
    _ = n(507252);
let f = {
    [d.DUB.NORMAL]: _.qb,
    [d.DUB.MINIMUM]: _.Bp,
    [d.DUB.NO_CHAT]: _.Oo,
    [d.DUB.FULL_SCREEN]: _.iy,
    [d.DUB.HAVEN]: _.VT,
};
class h extends r.PureComponent {
    constructor(e) {
        super(e), (this.state = { animation: new o.A.Value(0) });
    }
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let { animation: t } = this.state;
        t.setValue(0), o.A.spring(t, { toValue: 1, overshootClamping: !0 }).start(e);
    }
    componentWillLeave(e) {
        o.A.spring(this.state.animation, { toValue: 0, overshootClamping: !0 }).start(e);
    }
    render() {
        return (0, i.jsx)(o.A.div, {
            className: a()(_.$c, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children,
        });
    }
}
class p extends r.PureComponent {
    static defaultProps = { layout: d.DUB.MINIMUM, animated: !0 };
    _timeout = new l.Ep();
    constructor(e) {
        super(e), (this.state = { idle: !1, backgroundAnimation: new o.A.Value(0), layoutProp: e.layout });
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleMouseEvent, !0),
            document.addEventListener("mousemove", this.handleMouseEvent, !0);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleMouseEvent, !0),
            document.removeEventListener("mousemove", this.handleMouseEvent, !0),
            this._timeout.stop();
    }
    static getDerivedStateFromProps(e, t) {
        return e.layout !== t.layoutProp
            ? t.idle
                ? { idle: !1, layoutProp: e.layout }
                : { layoutProp: e.layout }
            : null;
    }
    componentDidUpdate(e) {
        this.props.layout !== e.layout && this._timeout.stop();
    }
    handleMouseEvent = () => {
        let { layout: e } = this.props;
        (e === d.DUB.FULL_SCREEN || e === d.DUB.NO_CHAT) &&
            (this._timeout.start(3e3, () => this.setState({ idle: !0 })),
            this.state.idle && this.setState({ idle: !1 }));
    };
    renderBackground() {
        let { background: e, backgroundKey: t, layout: n } = this.props,
            r = `${n}-${t ?? ""}`;
        return (0, i.jsx)(u.F, { className: _.yG, component: "div", children: (0, i.jsx)(h, { children: e }, r) });
    }
    renderContents() {
        let { top: e, center: t, bottom: n, layout: r, focused: s } = this.props,
            { idle: o } = this.state;
        return (0, i.jsx)(c.A, {
            className: a()(_.Ki, f[r], { [_.N7]: o }),
            direction: c.A.Direction.VERTICAL,
            justify: c.A.Justify.CENTER,
            children: (0, i.jsxs)(c.A, {
                className: _.tN,
                direction: c.A.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, i.jsxs)(c.A, {
                        className: a()(_.IR, { [_.in]: s }),
                        direction: c.A.Direction.VERTICAL,
                        justify: c.A.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(c.A, { className: _.JV, grow: 0, children: e }),
                            (0, i.jsx)(c.A, { className: _.R2, children: t }),
                            (0, i.jsx)(c.A, { className: _.ZJ, grow: 0, children: n }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { layout: e, className: t, animated: n } = this.props;
        return (0, i.jsx)("div", { className: a()(_.hP, f[e], t, { [_.CS]: n }), children: this.renderContents() });
    }
}
