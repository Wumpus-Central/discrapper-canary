"use strict";
n.d(t, { o: () => A });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(615300),
    o = n(451988),
    d = n(868285),
    c = n(235986),
    u = n(652215),
    _ = n(31692);
let E = {
    [u.DUB.NORMAL]: _.qb,
    [u.DUB.MINIMUM]: _.Bp,
    [u.DUB.NO_CHAT]: _.Oo,
    [u.DUB.FULL_SCREEN]: _.iy,
    [u.DUB.HAVEN]: _.VT,
};
class A extends r.PureComponent {
    constructor(e) {
        super(e), (this.state = { animation: new l.A.Value(0) });
    }
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let { animation: t } = this.state;
        t.setValue(0), l.A.spring(t, { toValue: 1, overshootClamping: !0 }).start(e);
    }
    componentWillLeave(e) {
        l.A.spring(this.state.animation, { toValue: 0, overshootClamping: !0 }).start(e);
    }
    render() {
        return (0, i.jsx)(l.A.div, {
            className: s()(_.$c, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children,
        });
    }
}
class h extends r.PureComponent {
    static defaultProps = { layout: u.DUB.MINIMUM, animated: !0 };
    _timeout = new o.Ep();
    constructor(e) {
        super(e), (this.state = { idle: !1, backgroundAnimation: new l.A.Value(0), layoutProp: e.layout });
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
        (e === u.DUB.FULL_SCREEN || e === u.DUB.NO_CHAT) &&
            (this._timeout.start(3e3, () => this.setState({ idle: !0 })),
            this.state.idle && this.setState({ idle: !1 }));
    };
    renderBackground() {
        let { background: e, backgroundKey: t, layout: n } = this.props,
            r = `${n}-${t ?? ""}`;
        return (0, i.jsx)(d.F, { className: _.yG, component: "div", children: (0, i.jsx)(A, { children: e }, r) });
    }
    renderContents() {
        let { top: e, center: t, bottom: n, layout: r, focused: a } = this.props,
            { idle: l } = this.state;
        return (0, i.jsx)(c.A, {
            className: s()(_.Ki, E[r], { [_.N7]: l }),
            direction: c.A.Direction.VERTICAL,
            justify: c.A.Justify.CENTER,
            children: (0, i.jsxs)(c.A, {
                className: _.tN,
                direction: c.A.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, i.jsxs)(c.A, {
                        className: s()(_.IR, { [_.in]: a }),
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
        return (0, i.jsx)("div", { className: s()(_.hP, E[e], t, { [_.CS]: n }), children: this.renderContents() });
    }
}
