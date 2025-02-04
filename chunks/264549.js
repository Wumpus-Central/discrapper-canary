n.d(t, { Z: () => T }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(392711),
    a = n.n(o),
    c = n(714338),
    d = n(585483),
    u = n(981631),
    _ = n(727688);
function E(e, t, n) {
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
    p = () =>
        (0, i.jsxs)(
            'div',
            {
                className: _.symbol,
                children: [
                    (0, i.jsx)('div', { className: _.symbolBackground }),
                    (0, i.jsx)('img', {
                        alt: '',
                        src: n(977706)
                    })
                ]
            },
            'symbol'
        );
class I extends l.PureComponent {
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
                className: _.primaryExplosion,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: _.circleInner,
                        src: n(273226),
                        width: 70,
                        height: 69
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: _.circleOuter,
                        src: n(922026),
                        width: 96,
                        height: 95
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: _.linesSecondary,
                        src: n(827926),
                        width: 183,
                        height: 104
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: _.linesMain,
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
                className: _.secondaryExplosion,
                style: {
                    top: t,
                    left: e
                },
                children: [
                    (0, i.jsx)(
                        'img',
                        {
                            alt: '',
                            className: _.circleInner,
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
                            className: _.circleOuter,
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
                            className: _.linesSecondary,
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
                            className: _.linesMain,
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
            o = [this.renderPrimary()];
        return (
            e && o.push(this.renderSecondary(t, n)),
            (0, i.jsx)('div', {
                className: s()(_.container, { [_.animate]: l }),
                style: {
                    top: this.props.top,
                    left: this.props.left,
                    transform: 'scale('.concat(r, ')')
                },
                children: o
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
                scale: a().random(0.6, 1, !0),
                offsetX: a().random(0, 140, !1) - 70,
                offsetY: a().random(0, 140, !1) - 70
            }),
            E(this, 'done', () => {
                this.props.onAnimationComplete(this.props.componentId);
            });
    }
}
class m extends l.PureComponent {
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
        return (0, i.jsx)('div', {
            className: s()(_.ragingDemon, { [_.visible]: this.state.visible }),
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
                let n = setTimeout(e, t);
                return this._timeouts.push(n), n;
            }),
            E(this, 'removeExplosion', (e) => {
                let t = this.children,
                    n = t.findIndex((t) => {
                        if (t.type !== I) return !1;
                        let n = t.props;
                        return null != n.componentId && n.componentId === e;
                    });
                n >= 0 && t.splice(n, 1), this.forceUpdate();
            }),
            E(this, 'createExplosion', () => {
                let e = this.children,
                    t = (window.innerWidth / 2) >> 0,
                    n = (window.innerHeight / 2) >> 0;
                if (this.state.explosions < 8) {
                    let l = 'expl-'.concat(this.state.explosions);
                    e.push(
                        (0, i.jsx)(
                            I,
                            {
                                componentId: l,
                                top: a().random(n - 100, n + 100, !1),
                                left: a().random(t - 200, t + 200, !1),
                                onAnimationComplete: this.removeExplosion
                            },
                            l
                        )
                    ),
                        this.setTimeout(this.createExplosion, 240),
                        this.setState({ explosions: this.state.explosions + 1 });
                } else this.setTimeout(this.addSymbol, 750);
            }),
            E(this, 'addSymbol', () => {
                (this.children = [(0, i.jsx)(p, {}, 'symbol')]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3000);
            }),
            E(this, 'delayedClose', () => {
                this.props.handleDemonClose();
            });
    }
}
let T = m;
