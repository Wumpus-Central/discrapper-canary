n.d(t, {
    o: () => g,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(615300),
    c = n(451988),
    u = n(73939),
    d = n(235986),
    f = n(652215),
    p = n(712449);

function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = 3e3,
    m = {
        [f.DUB.NORMAL]: p.qb,
        [f.DUB.MINIMUM]: p.Bp,
        [f.DUB.NO_CHAT]: p.Oo,
        [f.DUB.FULL_SCREEN]: p.iy,
        [f.DUB.HAVEN]: p.VT,
    };
class g extends a.PureComponent {
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let { animation: t } = this.state;
        t.setValue(0),
            l.A.spring(t, {
                toValue: 1,
                overshootClamping: !0,
            }).start(e);
    }
    componentWillLeave(e) {
        l.A.spring(this.state.animation, {
            toValue: 0,
            overshootClamping: !0,
        }).start(e);
    }
    render() {
        return (0, i.jsx)(l.A.div, {
            className: o()(p.$c, this.props.className),
            style: {
                opacity: this.state.animation,
            },
            children: this.props.children,
        });
    }
    constructor(e) {
        super(e),
            (this.state = {
                animation: new l.A.Value(0),
            });
    }
}
class E extends (r = a.PureComponent) {
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
                ? {
                      idle: !1,
                      layoutProp: e.layout,
                  }
                : {
                      layoutProp: e.layout,
                  }
            : null;
    }
    componentDidUpdate(e) {
        this.props.layout !== e.layout && this._timeout.stop();
    }
    renderBackground() {
        let { background: e, backgroundKey: t, layout: n } = this.props,
            r = "".concat(n, "-").concat(null != t ? t : "");
        return (0, i.jsx)(u.F, {
            className: p.yG,
            component: "div",
            children: (0, i.jsx)(
                g,
                {
                    children: e,
                },
                r,
            ),
        });
    }
    renderContents() {
        let { top: e, center: t, bottom: n, layout: r, focused: a } = this.props,
            { idle: s } = this.state;
        return (0, i.jsx)(d.A, {
            className: o()(p.Ki, m[r], {
                [p.N7]: s,
            }),
            direction: d.A.Direction.VERTICAL,
            justify: d.A.Justify.CENTER,
            children: (0, i.jsxs)(d.A, {
                className: p.tN,
                direction: d.A.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, i.jsxs)(d.A, {
                        className: o()(p.IR, {
                            [p.in]: a,
                        }),
                        direction: d.A.Direction.VERTICAL,
                        justify: d.A.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(d.A, {
                                className: p.JV,
                                grow: 0,
                                children: e,
                            }),
                            (0, i.jsx)(d.A, {
                                className: p.R2,
                                children: t,
                            }),
                            (0, i.jsx)(d.A, {
                                className: p.ZJ,
                                grow: 0,
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    render() {
        let { layout: e, className: t, animated: n } = this.props;
        return (0, i.jsx)("div", {
            className: o()(p.hP, m[e], t, {
                [p.CS]: n,
            }),
            children: this.renderContents(),
        });
    }
    constructor(e) {
        super(e),
            _(this, "_timeout", new c.Ep()),
            _(this, "handleMouseEvent", () => {
                let { layout: e } = this.props;
                (e === f.DUB.FULL_SCREEN || e === f.DUB.NO_CHAT) &&
                    (this._timeout.start(h, () =>
                        this.setState({
                            idle: !0,
                        }),
                    ),
                    this.state.idle &&
                        this.setState({
                            idle: !1,
                        }));
            }),
            (this.state = {
                idle: !1,
                backgroundAnimation: new l.A.Value(0),
                layoutProp: e.layout,
            });
    }
}
_(E, "defaultProps", {
    layout: f.DUB.MINIMUM,
    animated: !0,
});
