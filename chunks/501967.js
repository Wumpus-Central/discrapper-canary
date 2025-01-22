r.d(n, {
    B: function () {
        return E;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(748780),
    c = r(846519),
    d = r(215569),
    f = r(600164),
    p = r(981631),
    h = r(161589);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = 3000,
    g = {
        [p.AEg.NORMAL]: h.normal,
        [p.AEg.MINIMUM]: h.minimum,
        [p.AEg.NO_CHAT]: h.noChat,
        [p.AEg.FULL_SCREEN]: h.fullScreen
    };
class E extends o.PureComponent {
    componentDidAppear() {
        this.state.animation.setValue(1);
    }
    componentWillEnter(e) {
        let { animation: n } = this.state;
        n.setValue(0),
            u.Z.spring(n, {
                toValue: 1,
                overshootClamping: !0
            }).start(e);
    }
    componentWillLeave(e) {
        u.Z.spring(this.state.animation, {
            toValue: 0,
            overshootClamping: !0
        }).start(e);
    }
    render() {
        return (0, a.jsx)(u.Z.div, {
            className: l()(h.videoBackgroundTransition, this.props.className),
            style: { opacity: this.state.animation },
            children: this.props.children
        });
    }
    constructor(e) {
        super(e), (this.state = { animation: new u.Z.Value(0) });
    }
}
class v extends (i = o.PureComponent) {
    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseEvent, !0), document.addEventListener('mousemove', this.handleMouseEvent, !0);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseEvent, !0), document.removeEventListener('mousemove', this.handleMouseEvent, !0), this._timeout.stop();
    }
    static getDerivedStateFromProps(e, n) {
        if (e.layout !== n.layoutProp)
            return n.idle
                ? {
                      idle: !1,
                      layoutProp: e.layout
                  }
                : { layoutProp: e.layout };
        return null;
    }
    componentDidUpdate(e) {
        this.props.layout !== e.layout && this._timeout.stop();
    }
    renderBackground() {
        let { background: e, backgroundKey: n, layout: r } = this.props,
            i = ''.concat(r, '-').concat(null != n ? n : '');
        return (0, a.jsx)(d.W, {
            className: h.videoBackground,
            component: 'div',
            children: (0, a.jsx)(E, { children: e }, i)
        });
    }
    renderContents() {
        let { top: e, center: n, bottom: r, layout: i, focused: o } = this.props,
            { idle: s } = this.state;
        return (0, a.jsx)(f.Z, {
            className: l()(h.video, g[i], { [h.idle]: s }),
            direction: f.Z.Direction.VERTICAL,
            justify: f.Z.Justify.CENTER,
            children: (0, a.jsxs)(f.Z, {
                className: h.videoWrapper,
                direction: f.Z.Direction.VERTICAL,
                children: [
                    this.renderBackground(),
                    (0, a.jsxs)(f.Z, {
                        className: l()(h.videoInner, { [h.focused]: o }),
                        direction: f.Z.Direction.VERTICAL,
                        justify: f.Z.Justify.BETWEEN,
                        children: [
                            (0, a.jsx)(f.Z, {
                                className: h.videoTop,
                                grow: 0,
                                children: e
                            }),
                            (0, a.jsx)(f.Z, {
                                className: h.videoCenter,
                                children: n
                            }),
                            (0, a.jsx)(f.Z, {
                                className: h.videoBottom,
                                grow: 0,
                                children: r
                            })
                        ]
                    })
                ]
            })
        });
    }
    render() {
        let { layout: e, className: n, animated: r } = this.props;
        return (0, a.jsx)('div', {
            className: l()(h.videoHeight, g[e], n, { [h.animated]: r }),
            children: this.renderContents()
        });
    }
    constructor(e) {
        super(e),
            _(this, '_timeout', new c.V7()),
            _(this, 'handleMouseEvent', () => {
                let { layout: e } = this.props;
                if (e === p.AEg.FULL_SCREEN || e === p.AEg.NO_CHAT) this._timeout.start(m, () => this.setState({ idle: !0 })), this.state.idle && this.setState({ idle: !1 });
            }),
            (this.state = {
                idle: !1,
                backgroundAnimation: new u.Z.Value(0),
                layoutProp: e.layout
            });
    }
}
_(v, 'defaultProps', {
    layout: p.AEg.MINIMUM,
    animated: !0
});
