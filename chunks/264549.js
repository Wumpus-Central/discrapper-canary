n.d(t, { Z: () => b }), n(539854), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    a = n.n(s),
    c = n(714338),
    u = n(585483),
    d = n(981631),
    _ = n(529088);
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
let h = {
        PRIMARY: () => !0,
        SECONDARY: () => !0
    },
    f = () =>
        (0, r.jsxs)(
            'div',
            {
                className: _.symbol,
                children: [
                    (0, r.jsx)('div', { className: _.symbolBackground }),
                    (0, r.jsx)('img', {
                        alt: '',
                        src: n(977706)
                    })
                ]
            },
            'symbol'
        );
class m extends i.PureComponent {
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
        return (0, r.jsxs)(
            'div',
            {
                className: _.primaryExplosion,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: _.circleInner,
                        src: n(273226),
                        width: 70,
                        height: 69
                    }),
                    (0, r.jsx)('img', {
                        alt: '',
                        className: _.circleOuter,
                        src: n(922026),
                        width: 96,
                        height: 95
                    }),
                    (0, r.jsx)('img', {
                        alt: '',
                        className: _.linesSecondary,
                        src: n(827926),
                        width: 183,
                        height: 104
                    }),
                    (0, r.jsx)('img', {
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
        return (0, r.jsxs)(
            'div',
            {
                className: _.secondaryExplosion,
                style: {
                    top: t,
                    left: e
                },
                children: [
                    (0, r.jsx)(
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
                    (0, r.jsx)(
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
                    (0, r.jsx)(
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
                    (0, r.jsx)(
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
        let { renderSecondary: e, offsetX: t, offsetY: n, animating: i, scale: o } = this.state,
            s = [this.renderPrimary()];
        return (
            e && s.push(this.renderSecondary(t, n)),
            (0, r.jsx)('div', {
                className: l()(_.container, { [_.animate]: i }),
                style: {
                    top: this.props.top,
                    left: this.props.left,
                    transform: 'scale('.concat(o, ')')
                },
                children: s
            })
        );
    }
    constructor(...e) {
        super(...e),
            p(this, '_renderSecondaryTimeout', null),
            p(this, '_doneTimeout', null),
            p(this, 'state', {
                animating: !1,
                renderSecondary: !1,
                scale: a().random(0.6, 1, !0),
                offsetX: a().random(0, 140, !1) - 70,
                offsetY: a().random(0, 140, !1) - 70
            }),
            p(this, 'done', () => {
                this.props.onAnimationComplete(this.props.componentId);
            });
    }
}
class g extends i.PureComponent {
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
        return (0, r.jsx)('div', {
            className: l()(_.ragingDemon, { [_.visible]: this.state.visible }),
            children: this.children
        });
    }
    constructor(...e) {
        super(...e),
            p(this, '_timeouts', []),
            p(this, 'children', []),
            p(this, 'state', {
                explosions: 0,
                visible: !1
            }),
            p(this, 'setTimeout', (e, t) => {
                let n = setTimeout(e, t);
                return this._timeouts.push(n), n;
            }),
            p(this, 'removeExplosion', (e) => {
                let t = this.children,
                    n = t.findIndex((t) => {
                        if (t.type !== m) return !1;
                        let n = t.props;
                        return null != n.componentId && n.componentId === e;
                    });
                n >= 0 && t.splice(n, 1), this.forceUpdate();
            }),
            p(this, 'createExplosion', () => {
                let e = this.children,
                    t = (window.innerWidth / 2) >> 0,
                    n = (window.innerHeight / 2) >> 0;
                if (this.state.explosions < 8) {
                    let i = 'expl-'.concat(this.state.explosions);
                    e.push(
                        (0, r.jsx)(
                            m,
                            {
                                componentId: i,
                                top: a().random(n - 100, n + 100, !1),
                                left: a().random(t - 200, t + 200, !1),
                                onAnimationComplete: this.removeExplosion
                            },
                            i
                        )
                    ),
                        this.setTimeout(this.createExplosion, 240),
                        this.setState({ explosions: this.state.explosions + 1 });
                } else this.setTimeout(this.addSymbol, 750);
            }),
            p(this, 'addSymbol', () => {
                (this.children = [(0, r.jsx)(f, {}, 'symbol')]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3000);
            }),
            p(this, 'delayedClose', () => {
                this.props.handleDemonClose();
            });
    }
}
let b = g;
