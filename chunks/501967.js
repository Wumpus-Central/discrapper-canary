n.d(t, { B: () => g });
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(748780),
    u = n(846519),
    c = n(215569),
    d = n(600164),
    f = n(981631),
    _ = n(723834);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = 3000,
    m = {
        [f.AEg.NORMAL]: _.normal,
        [f.AEg.MINIMUM]: _.minimum,
        [f.AEg.NO_CHAT]: _.noChat,
        [f.AEg.FULL_SCREEN]: _.fullScreen
    };
class g extends a.PureComponent {
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let { animation: t } = this.state;
        t.setValue(0),
            l.Z.spring(t, {
                toValue: 1,
                overshootClamping: !0
            }).start(e);
    }
    componentWillLeave(e) {
        l.Z.spring(this.state.animation, {
            toValue: 0,
            overshootClamping: !0
        }).start(e);
    }
    render() {
        return (0, r.jsx)(l.Z.div, {
            className: o()(_.videoBackgroundTransition, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children
        });
    }
    constructor(e) {
        super(e), (this.state = { animation: new l.Z.Value(0) });
    }
}
class E extends (i = a.PureComponent) {
    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseEvent, !0), document.addEventListener('mousemove', this.handleMouseEvent, !0);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseEvent, !0), document.removeEventListener('mousemove', this.handleMouseEvent, !0), this._timeout.stop();
    }
    static getDerivedStateFromProps(e, t) {
        return e.layout !== t.layoutProp
            ? t.idle
                ? {
                      idle: !1,
                      layoutProp: e.layout
                  }
                : { layoutProp: e.layout }
            : null;
    }
    componentDidUpdate(e) {
        this.props.layout !== e.layout && this._timeout.stop();
    }
    renderBackground() {
        let { background: e, backgroundKey: t, layout: n } = this.props,
            i = ''.concat(n, '-').concat(null != t ? t : '');
        return (0, r.jsx)(c.W, {
            className: _.videoBackground,
            component: 'div',
            children: (0, r.jsx)(g, { children: e }, i)
        });
    }
    renderContents() {
        let { top: e, center: t, bottom: n, layout: i, focused: a } = this.props,
            { idle: s } = this.state;
        return (0, r.jsx)(d.Z, {
            className: o()(_.video, m[i], { [_.idle]: s }),
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: (0, r.jsxs)(d.Z, {
                className: _.videoWrapper,
                direction: d.Z.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, r.jsxs)(d.Z, {
                        className: o()(_.videoInner, { [_.focused]: a }),
                        direction: d.Z.Direction.VERTICAL,
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (0, r.jsx)(d.Z, {
                                className: _.videoTop,
                                grow: 0,
                                children: e
                            }),
                            (0, r.jsx)(d.Z, {
                                className: _.videoCenter,
                                children: t
                            }),
                            (0, r.jsx)(d.Z, {
                                className: _.videoBottom,
                                grow: 0,
                                children: n
                            })
                        ]
                    })
                ]
            })
        });
    }
    render() {
        let { layout: e, className: t, animated: n } = this.props;
        return (0, r.jsx)('div', {
            className: o()(_.videoHeight, m[e], t, { [_.animated]: n }),
            children: this.renderContents()
        });
    }
    constructor(e) {
        super(e),
            p(this, '_timeout', new u.V7()),
            p(this, 'handleMouseEvent', () => {
                let { layout: e } = this.props;
                (e === f.AEg.FULL_SCREEN || e === f.AEg.NO_CHAT) && (this._timeout.start(h, () => this.setState({ idle: !0 })), this.state.idle && this.setState({ idle: !1 }));
            }),
            (this.state = {
                idle: !1,
                backgroundAnimation: new l.Z.Value(0),
                layoutProp: e.layout
            });
    }
}
p(E, 'defaultProps', {
    layout: f.AEg.MINIMUM,
    animated: !0
});
