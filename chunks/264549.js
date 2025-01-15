s(653041), s(47120);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    o = s.n(r),
    a = s(392711),
    l = s.n(a),
    c = s(714338),
    d = s(585483),
    u = s(981631),
    h = s(727688);
function E(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let p = {
        PRIMARY: () => !0,
        SECONDARY: () => !0
    },
    m = () =>
        (0, n.jsxs)(
            'div',
            {
                className: h.symbol,
                children: [
                    (0, n.jsx)('div', { className: h.symbolBackground }),
                    (0, n.jsx)('img', {
                        alt: '',
                        src: s(977706)
                    })
                ]
            },
            'symbol'
        );
class _ extends i.PureComponent {
    componentDidMount() {
        this.setState({ animating: !0 }),
            (this._renderSecondaryTimeout = setTimeout(() => {
                this.setState({ renderSecondary: !0 });
            }, 120)),
            (this._doneTimeout = setTimeout(this.done, 1000)),
            p.PRIMARY();
    }
    componentDidUpdate(e, t) {
        this.state.renderSecondary && !t.renderSecondary && p.SECONDARY();
    }
    componentWillUnmount() {
        clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout);
    }
    renderPrimary() {
        return (0, n.jsxs)(
            'div',
            {
                className: h.primaryExplosion,
                children: [
                    (0, n.jsx)('img', {
                        alt: '',
                        className: h.circleInner,
                        src: s(273226),
                        width: 70,
                        height: 69
                    }),
                    (0, n.jsx)('img', {
                        alt: '',
                        className: h.circleOuter,
                        src: s(922026),
                        width: 96,
                        height: 95
                    }),
                    (0, n.jsx)('img', {
                        alt: '',
                        className: h.linesSecondary,
                        src: s(827926),
                        width: 183,
                        height: 104
                    }),
                    (0, n.jsx)('img', {
                        alt: '',
                        className: h.linesMain,
                        src: s(873180),
                        width: 69,
                        height: 180
                    })
                ]
            },
            'primary-explosion'
        );
    }
    renderSecondary(e, t) {
        return (0, n.jsxs)(
            'div',
            {
                className: h.secondaryExplosion,
                style: {
                    top: t,
                    left: e
                },
                children: [
                    (0, n.jsx)(
                        'img',
                        {
                            alt: '',
                            className: h.circleInner,
                            src: s(272162),
                            width: 61,
                            height: 58
                        },
                        'circle-inner'
                    ),
                    (0, n.jsx)(
                        'img',
                        {
                            alt: '',
                            className: h.circleOuter,
                            src: s(632989),
                            width: 85,
                            height: 85
                        },
                        'circle-outer'
                    ),
                    (0, n.jsx)(
                        'img',
                        {
                            alt: '',
                            className: h.linesSecondary,
                            src: s(376252),
                            width: 162,
                            height: 173
                        },
                        'lines-secondary'
                    ),
                    (0, n.jsx)(
                        'img',
                        {
                            alt: '',
                            className: h.linesMain,
                            src: s(720617),
                            width: 156,
                            height: 306
                        },
                        'lines-main'
                    )
                ]
            },
            'secondary-explosion'
        );
    }
    render() {
        let { renderSecondary: e, offsetX: t, offsetY: s, animating: i, scale: r } = this.state,
            a = [this.renderPrimary()];
        return (
            e && a.push(this.renderSecondary(t, s)),
            (0, n.jsx)('div', {
                className: o()(h.container, { [h.animate]: i }),
                style: {
                    top: this.props.top,
                    left: this.props.left,
                    transform: 'scale('.concat(r, ')')
                },
                children: a
            })
        );
    }
    constructor(...e) {
        super(...e),
            E(this, '_renderSecondaryTimeout', null),
            E(this, '_doneTimeout', null),
            E(this, 'state', {
                animating: !1,
                renderSecondary: !1,
                scale: l().random(0.6, 1, !0),
                offsetX: l().random(0, 140, !1) - 70,
                offsetY: l().random(0, 140, !1) - 70
            }),
            E(this, 'done', () => {
                this.props.onAnimationComplete(this.props.componentId);
            });
    }
}
let C = 240;
class g extends i.PureComponent {
    componentDidMount() {
        this.setTimeout(() => {
            this.setState({ visible: !0 }), d.S.dispatch(u.CkL.SHAKE_APP, { duration: 2400 });
        }, 1800),
            this.setTimeout(this.createExplosion, 1800);
    }
    componentWillUnmount() {
        for (let e of (c.Z.enable(), (this.children.length = 0), this._timeouts)) clearTimeout(e);
    }
    render() {
        return (0, n.jsx)('div', {
            className: o()(h.ragingDemon, { [h.visible]: this.state.visible }),
            children: this.children
        });
    }
    constructor(...e) {
        super(...e),
            E(this, '_timeouts', []),
            E(this, 'children', []),
            E(this, 'state', {
                explosions: 0,
                visible: !1
            }),
            E(this, 'setTimeout', (e, t) => {
                let s = setTimeout(e, t);
                return this._timeouts.push(s), s;
            }),
            E(this, 'removeExplosion', (e) => {
                let t = this.children,
                    s = t.findIndex((t) => {
                        if (t.type !== _) return !1;
                        let s = t.props;
                        return null != s.componentId && s.componentId === e;
                    });
                s >= 0 && t.splice(s, 1), this.forceUpdate();
            }),
            E(this, 'createExplosion', () => {
                let e = this.children,
                    t = (window.innerWidth / 2) >> 0,
                    s = (window.innerHeight / 2) >> 0;
                if (this.state.explosions < 8) {
                    let i = 'expl-'.concat(this.state.explosions);
                    e.push(
                        (0, n.jsx)(
                            _,
                            {
                                componentId: i,
                                top: l().random(s - 100, s + 100, !1),
                                left: l().random(t - 200, t + 200, !1),
                                onAnimationComplete: this.removeExplosion
                            },
                            i
                        )
                    ),
                        this.setTimeout(this.createExplosion, C),
                        this.setState({ explosions: this.state.explosions + 1 });
                } else this.setTimeout(this.addSymbol, 750);
            }),
            E(this, 'addSymbol', () => {
                (this.children = [(0, n.jsx)(m, {}, 'symbol')]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3000);
            }),
            E(this, 'delayedClose', () => {
                this.props.handleDemonClose();
            });
    }
}
t.Z = g;
