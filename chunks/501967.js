n.d(t, { B: () => g });
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(748780),
    c = n(846519),
    u = n(215569),
    d = n(600164),
    f = n(981631),
    p = n(176560);
function _(e, t, n) {
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
        [f.AEg.NORMAL]: p.normal,
        [f.AEg.MINIMUM]: p.minimum,
        [f.AEg.NO_CHAT]: p.noChat,
        [f.AEg.FULL_SCREEN]: p.fullScreen
    };
class g extends o.PureComponent {
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
        return (0, i.jsx)(l.Z.div, {
            className: s()(p.videoBackgroundTransition, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children
        });
    }
    constructor(e) {
        super(e), (this.state = { animation: new l.Z.Value(0) });
    }
}
class E extends (r = o.PureComponent) {
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
            r = ''.concat(n, '-').concat(null != t ? t : '');
        return (0, i.jsx)(u.W, {
            className: p.videoBackground,
            component: 'div',
            children: (0, i.jsx)(g, { children: e }, r)
        });
    }
    renderContents() {
        let { top: e, center: t, bottom: n, layout: r, focused: o } = this.props,
            { idle: a } = this.state;
        return (0, i.jsx)(d.Z, {
            className: s()(p.video, m[r], { [p.idle]: a }),
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: (0, i.jsxs)(d.Z, {
                className: p.videoWrapper,
                direction: d.Z.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, i.jsxs)(d.Z, {
                        className: s()(p.videoInner, { [p.focused]: o }),
                        direction: d.Z.Direction.VERTICAL,
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: p.videoTop,
                                grow: 0,
                                children: e
                            }),
                            (0, i.jsx)(d.Z, {
                                className: p.videoCenter,
                                children: t
                            }),
                            (0, i.jsx)(d.Z, {
                                className: p.videoBottom,
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
        return (0, i.jsx)('div', {
            className: s()(p.videoHeight, m[e], t, { [p.animated]: n }),
            children: this.renderContents()
        });
    }
    constructor(e) {
        super(e),
            _(this, '_timeout', new c.V7()),
            _(this, 'handleMouseEvent', () => {
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
_(E, 'defaultProps', {
    layout: f.AEg.MINIMUM,
    animated: !0
});
