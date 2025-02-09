n.d(t, { Z: () => N }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(714338),
    u = n(585483),
    d = n(981631),
    E = n(89315);
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
let h = {
        PRIMARY: () => !0,
        SECONDARY: () => !0
    },
    I = () =>
        (0, i.jsxs)(
            'div',
            {
                className: E.symbol,
                children: [
                    (0, i.jsx)('div', { className: E.symbolBackground }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: n(977706)
                    })
                ]
            },
            'symbol'
        );
class T extends l.PureComponent {
    componentDidMount() {
        this.setState({ animating: !0 }),
            (this._renderSecondaryTimeout = setTimeout(() => {
                this.setState({ renderSecondary: !0 });
            }, 120)),
            (this._doneTimeout = setTimeout(this.done, 1000)),
            h.PRIMARY();
    }
    componentDidUpdate(e, t) {
        this.state.renderSecondary && !t.renderSecondary && h.SECONDARY();
    }
    componentWillUnmount() {
        clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout);
    }
    renderPrimary() {
        return (0, i.jsxs)(
            'div',
            {
                className: E.primaryExplosion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: E.circleInner,
                        src: n(273226),
                        width: 70,
                        height: 69
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: E.circleOuter,
                        src: n(922026),
                        width: 96,
                        height: 95
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: E.linesSecondary,
                        src: n(827926),
                        width: 183,
                        height: 104
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: E.linesMain,
                        src: n(873180),
                        width: 69,
                        height: 180
                    })
                ]
            },
            'primary-explosion'
        );
    }
    renderSecondary(e, t) {
        return (0, i.jsxs)(
            'div',
            {
                className: E.secondaryExplosion,
                style: {
                    top: t,
                    left: e
                },
                children: [
                    (0, i.jsx)(
                        'img',
                        {
                            alt: '',
                            className: E.circleInner,
                            src: n(272162),
                            width: 61,
                            height: 58
                        },
                        'circle-inner'
                    ),
                    (0, i.jsx)(
                        'img',
                        {
                            alt: '',
                            className: E.circleOuter,
                            src: n(632989),
                            width: 85,
                            height: 85
                        },
                        'circle-outer'
                    ),
                    (0, i.jsx)(
                        'img',
                        {
                            alt: '',
                            className: E.linesSecondary,
                            src: n(376252),
                            width: 162,
                            height: 173
                        },
                        'lines-secondary'
                    ),
                    (0, i.jsx)(
                        'img',
                        {
                            alt: '',
                            className: E.linesMain,
                            src: n(720617),
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
        let { renderSecondary: e, offsetX: t, offsetY: n, animating: l, scale: r } = this.state,
            a = [this.renderPrimary()];
        return (
            e && a.push(this.renderSecondary(t, n)),
            (0, i.jsx)('div', {
                className: s()(E.container, { [E.animate]: l }),
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
            _(this, '_renderSecondaryTimeout', null),
            _(this, '_doneTimeout', null),
            _(this, 'state', {
                animating: !1,
                renderSecondary: !1,
                scale: o().random(0.6, 1, !0),
                offsetX: o().random(0, 140, !1) - 70,
                offsetY: o().random(0, 140, !1) - 70
            }),
            _(this, 'done', () => {
                this.props.onAnimationComplete(this.props.componentId);
            });
    }
}
class C extends l.PureComponent {
    componentDidMount() {
        this.setTimeout(() => {
            this.setState({ visible: !0 }), u.S.dispatch(d.CkL.SHAKE_APP, { duration: 2400 });
        }, 1800),
            this.setTimeout(this.createExplosion, 1800);
    }
    componentWillUnmount() {
        for (let e of (c.Z.enable(), (this.children.length = 0), this._timeouts)) clearTimeout(e);
    }
    render() {
        return (0, i.jsx)('div', {
            className: s()(E.ragingDemon, { [E.visible]: this.state.visible }),
            children: this.children
        });
    }
    constructor(...e) {
        super(...e),
            _(this, '_timeouts', []),
            _(this, 'children', []),
            _(this, 'state', {
                explosions: 0,
                visible: !1
            }),
            _(this, 'setTimeout', (e, t) => {
                let n = setTimeout(e, t);
                return this._timeouts.push(n), n;
            }),
            _(this, 'removeExplosion', (e) => {
                let t = this.children,
                    n = t.findIndex((t) => {
                        if (t.type !== T) return !1;
                        let n = t.props;
                        return null != n.componentId && n.componentId === e;
                    });
                n >= 0 && t.splice(n, 1), this.forceUpdate();
            }),
            _(this, 'createExplosion', () => {
                let e = this.children,
                    t = (window.innerWidth / 2) >> 0,
                    n = (window.innerHeight / 2) >> 0;
                if (this.state.explosions < 8) {
                    let l = 'expl-'.concat(this.state.explosions);
                    e.push(
                        (0, i.jsx)(
                            T,
                            {
                                componentId: l,
                                top: o().random(n - 100, n + 100, !1),
                                left: o().random(t - 200, t + 200, !1),
                                onAnimationComplete: this.removeExplosion
                            },
                            l
                        )
                    ),
                        this.setTimeout(this.createExplosion, 240),
                        this.setState({ explosions: this.state.explosions + 1 });
                } else this.setTimeout(this.addSymbol, 750);
            }),
            _(this, 'addSymbol', () => {
                (this.children = [(0, i.jsx)(I, {}, 'symbol')]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3000);
            }),
            _(this, 'delayedClose', () => {
                this.props.handleDemonClose();
            });
    }
}
let N = C;
