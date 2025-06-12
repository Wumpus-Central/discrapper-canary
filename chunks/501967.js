n.d(t, { B: () => g });
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(748780),
    c = n(846519),
    u = n(215569),
    d = n(600164),
    _ = n(981631),
    f = n(68379);
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
        [_.AEg.NORMAL]: f.normal,
        [_.AEg.MINIMUM]: f.minimum,
        [_.AEg.NO_CHAT]: f.noChat,
        [_.AEg.FULL_SCREEN]: f.fullScreen
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
        return (0, i.jsx)(l.Z.div, {
            className: s()(f.videoBackgroundTransition, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children
        });
    }
    constructor(e) {
        super(e), (this.state = { animation: new l.Z.Value(0) });
    }
}
class E extends (r = a.PureComponent) {
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
            className: f.videoBackground,
            component: 'div',
            children: (0, i.jsx)(g, { children: e }, r)
        });
    }
    renderContents() {
        let { top: e, center: t, bottom: n, layout: r, focused: a } = this.props,
            { idle: o } = this.state;
        return (0, i.jsx)(d.Z, {
            className: s()(f.video, m[r], { [f.idle]: o }),
            direction: d.Z.Direction.VERTICAL,
            justify: d.Z.Justify.CENTER,
            children: (0, i.jsxs)(d.Z, {
                className: f.videoWrapper,
                direction: d.Z.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, i.jsxs)(d.Z, {
                        className: s()(f.videoInner, { [f.focused]: a }),
                        direction: d.Z.Direction.VERTICAL,
                        justify: d.Z.Justify.BETWEEN,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: f.videoTop,
                                grow: 0,
                                children: e
                            }),
                            (0, i.jsx)(d.Z, {
                                className: f.videoCenter,
                                children: t
                            }),
                            (0, i.jsx)(d.Z, {
                                className: f.videoBottom,
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
            className: s()(f.videoHeight, m[e], t, { [f.animated]: n }),
            children: this.renderContents()
        });
    }
    constructor(e) {
        super(e),
            p(this, '_timeout', new c.V7()),
            p(this, 'handleMouseEvent', () => {
                let { layout: e } = this.props;
                (e === _.AEg.FULL_SCREEN || e === _.AEg.NO_CHAT) && (this._timeout.start(h, () => this.setState({ idle: !0 })), this.state.idle && this.setState({ idle: !1 }));
            }),
            (this.state = {
                idle: !1,
                backgroundAnimation: new l.Z.Value(0),
                layoutProp: e.layout
            });
    }
}
p(E, 'defaultProps', {
    layout: _.AEg.MINIMUM,
    animated: !0
});
