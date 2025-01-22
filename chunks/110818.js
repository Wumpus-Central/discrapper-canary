r.d(n, {
    Db: function () {
        return D;
    },
    HC: function () {
        return A;
    },
    NQ: function () {
        return T;
    },
    fe: function () {
        return k;
    }
});
var i,
    a,
    o,
    s,
    l,
    u,
    c,
    d,
    f = r(47120);
var p = r(200651),
    h = r(192379),
    _ = r(120356),
    m = r.n(_),
    g = r(642128),
    E = r(748780),
    v = r(481060),
    y = r(280099);
function b(e, n, r) {
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
!(function (e) {
    (e.NORMAL = 'normal'), (e.SPEED_START = 'speed_start'), (e.SPEED_LOOP = 'speed_loop'), (e.FINISH = 'finish'), (e.IDLE = 'idle');
})(i || (i = {}));
let I = {
    normal: {
        BEG: 0,
        END: 600,
        shouldForcePlayAfter: !0
    },
    speed_start: {
        BEG: 601,
        END: 636
    },
    speed_loop: {
        BEG: 637,
        END: 668
    },
    finish: {
        BEG: 669,
        END: 870
    },
    idle: {
        BEG: 871,
        END: 878
    }
};
class T extends (a = h.PureComponent) {
    static getNextScene(e) {
        switch (e) {
            case T.Scenes.SPEED_START:
                return T.Scenes.SPEED_LOOP;
            case T.Scenes.FINISH:
                return T.Scenes.IDLE;
            default:
                return e;
        }
    }
    importDefault() {
        return r
            .e('12817')
            .then(r.t.bind(r, 92668, 19))
            .then((e) => {
                let { default: n } = e;
                return n;
            });
    }
    render() {
        let { className: e, nextScene: n, onScenePlay: r, onSceneComplete: i, pause: a, pauseWhileUnfocused: o } = this.props;
        return (0, p.jsx)(v.SequencedLottieAnimation, {
            className: m()(y.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: a ? 'idle' : n,
            sceneSegments: I,
            onScenePlay: r,
            onSceneComplete: i,
            pauseWhileUnfocused: o,
            pause: a
        });
    }
}
b(T, 'Scenes', i),
    !(function (e) {
        (e.NORMAL = 'normal'), (e.SPEED_START = 'speed_start'), (e.SPEED_LOOP = 'speed_loop'), (e.FINISH = 'finish'), (e.IDLE = 'idle');
    })(o || (o = {}));
let S = {
    normal: {
        BEG: 0,
        END: 600,
        shouldForcePlayAfter: !0
    },
    speed_start: {
        BEG: 601,
        END: 636
    },
    speed_loop: {
        BEG: 637,
        END: 668
    },
    finish: {
        BEG: 669,
        END: 870
    },
    idle: {
        BEG: 871,
        END: 878
    }
};
class A extends (s = h.PureComponent) {
    static getNextScene(e) {
        switch (e) {
            case A.Scenes.SPEED_START:
                return A.Scenes.SPEED_LOOP;
            case A.Scenes.FINISH:
                return A.Scenes.IDLE;
            default:
                return e;
        }
    }
    importDefault() {
        return r
            .e('46896')
            .then(r.t.bind(r, 35065, 19))
            .then((e) => {
                let { default: n } = e;
                return n;
            });
    }
    render() {
        let { className: e, nextScene: n, onScenePlay: r, onSceneComplete: i, pause: a, pauseWhileUnfocused: o } = this.props;
        return (0, p.jsx)(v.SequencedLottieAnimation, {
            className: m()(y.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: a ? 'idle' : n,
            sceneSegments: S,
            onScenePlay: r,
            onSceneComplete: i,
            pauseWhileUnfocused: o,
            pause: a
        });
    }
}
b(A, 'Scenes', o),
    !(function (e) {
        (e.IDLE_ENTRY = 'idle_entry'), (e.IDLE_LOOP = 'idle_loop'), (e.BOOST_START = 'boost_start'), (e.BOOST_LOOP = 'boost_loop'), (e.BOOST_END = 'boost_end'), (e.VICTORY = 'victory'), (e.ERROR = 'error');
    })(l || (l = {}));
let C = {
    idle_entry: {
        BEG: 0,
        END: 50
    },
    idle_loop: {
        BEG: 50,
        END: 230,
        shouldForcePlayAfter: !0
    },
    boost_start: {
        BEG: 230,
        END: 275
    },
    boost_loop: {
        BEG: 275,
        END: 290
    },
    boost_end: {
        BEG: 386,
        END: 455
    },
    victory: {
        BEG: 470,
        END: 525
    },
    error: {
        BEG: 290,
        END: 375
    }
};
class N extends h.PureComponent {
    getStyle(e) {
        let { animation: n } = this.props;
        return {
            transform: [
                {
                    translateX: n.x.interpolate({
                        inputRange: [0, 1],
                        outputRange: e ? ['100%', '0%'] : ['0%', '-100%']
                    })
                },
                {
                    translateY: n.y.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['100%', '0%']
                    })
                }
            ]
        };
    }
    render() {
        let { className: e } = this.props;
        return (0, p.jsxs)('div', {
            className: y.panningAnimation,
            children: [
                (0, p.jsx)(E.Z.div, {
                    className: e,
                    style: this.getStyle(!1)
                }),
                (0, p.jsx)(E.Z.div, {
                    className: e,
                    style: this.getStyle(!0)
                })
            ]
        });
    }
}
let R = Object.freeze({
        IDLE_ENTRY: {
            toValue: 1,
            duration: 1500
        },
        IDLE_LOOP: {
            toValue: 1,
            duration: 6000,
            easing: E.Z.Easing.linear
        },
        BOOST_START: {
            toValue: 0,
            duration: 2000,
            delay: 500
        },
        ERROR: {
            toValue: 1,
            duration: 1500,
            delay: 1000
        }
    }),
    O = 1.2;
class D extends (u = h.PureComponent) {
    static getNextScene(e) {
        switch (e) {
            case D.Scenes.IDLE_ENTRY:
                return D.Scenes.IDLE_LOOP;
            case D.Scenes.BOOST_START:
                return D.Scenes.BOOST_LOOP;
            case D.Scenes.BOOST_END:
                return D.Scenes.VICTORY;
            case D.Scenes.VICTORY:
                return D.Scenes.IDLE_ENTRY;
            case D.Scenes.ERROR:
                return D.Scenes.IDLE_LOOP;
            default:
                return e;
        }
    }
    componentWillUnmount() {
        this.didUnmount = !0;
    }
    importData() {
        return r
            .e('70253')
            .then(r.t.bind(r, 88032, 19))
            .then((e) => {
                let { default: n } = e;
                return n;
            });
    }
    animateEntry(e) {
        E.Z.parallel([
            E.Z.timing(this.foregroundAnimation.y, {
                toValue: e.toValue,
                duration: e.duration,
                delay: e.delay || 0
            }),
            E.Z.timing(this.backgroundAnimation.y, {
                toValue: e.toValue,
                duration: e.duration * O,
                delay: e.delay || 0
            })
        ]).start();
    }
    animateIdleEntry() {
        this.animateEntry(R.IDLE_ENTRY);
    }
    animateError() {
        this.animateEntry(R.ERROR);
    }
    animateIdleLoop() {
        this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
    }
    animateBoostStart() {
        E.Z.parallel([
            E.Z.timing(this.foregroundAnimation.y, {
                toValue: R.BOOST_START.toValue,
                duration: R.BOOST_START.duration,
                delay: R.BOOST_START.delay
            }),
            E.Z.timing(this.backgroundAnimation.y, {
                toValue: R.BOOST_START.toValue,
                duration: R.BOOST_START.duration * O,
                delay: R.BOOST_START.delay
            })
        ]).start();
    }
    render() {
        let { className: e, nextScene: n, pause: r, onSceneComplete: i } = this.props;
        return (0, p.jsxs)('div', {
            className: m()(y.tier2Animation, e),
            children: [
                r
                    ? (0, p.jsx)(p.Fragment, {
                          children: (0, p.jsxs)('div', {
                              className: y.panningAnimation,
                              children: [(0, p.jsx)('div', { className: y.tier2Background }), (0, p.jsx)('div', { className: y.tier2Foreground })]
                          })
                      })
                    : (0, p.jsxs)(p.Fragment, {
                          children: [
                              (0, p.jsx)(N, {
                                  className: y.tier2Background,
                                  animation: this.backgroundAnimation
                              }),
                              (0, p.jsx)(N, {
                                  className: y.tier2Foreground,
                                  animation: this.foregroundAnimation
                              })
                          ]
                      }),
                (0, p.jsx)(v.SequencedLottieAnimation, {
                    className: y.sequencedAnimation,
                    importData: this.importData,
                    nextScene: r ? 'idle_loop' : n,
                    sceneSegments: C,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: i,
                    pauseWhileUnfocused: !1,
                    pause: r
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(
                this,
                'backgroundAnimation',
                new E.Z.ValueXY({
                    x: 0,
                    y: 0
                })
            ),
            b(
                this,
                'foregroundAnimation',
                new E.Z.ValueXY({
                    x: 0,
                    y: 0
                })
            ),
            b(this, 'didUnmount', !1),
            b(this, 'animateIdleLoopBackground', () => {
                if (!this.didUnmount)
                    this.backgroundAnimation.x.setValue(0),
                        E.Z.timing(this.backgroundAnimation.x, {
                            toValue: R.IDLE_LOOP.toValue,
                            duration: R.IDLE_LOOP.duration * O,
                            easing: E.Z.Easing.linear
                        }).start(this.animateIdleLoopBackground);
            }),
            b(this, 'animateIdleLoopForeground', () => {
                if (!this.didUnmount)
                    this.foregroundAnimation.x.setValue(0),
                        E.Z.timing(this.foregroundAnimation.x, {
                            toValue: R.IDLE_LOOP.toValue,
                            duration: R.IDLE_LOOP.duration,
                            easing: R.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground);
            }),
            b(this, 'handleScenePlay', (e) => {
                switch (e) {
                    case 'idle_entry':
                        this.animateIdleEntry(), this.animateIdleLoop();
                        break;
                    case 'error':
                        this.animateError();
                        break;
                    case 'boost_start':
                        this.animateBoostStart();
                }
                let { onScenePlay: n } = this.props;
                null != n && n(e);
            });
    }
}
b(D, 'Scenes', l),
    !(function (e) {
        (e.ENTRY = 'entry'), (e.IDLE = 'idle'), (e.STARS = 'stars'), (e.ERROR = 'error'), (e.SUCCESS = 'success');
    })(c || (c = {}));
let x = {
        entry: {
            BEG: 0,
            END: 180
        },
        idle: {
            BEG: 180,
            END: 360,
            shouldForcePlayAfter: !0
        },
        stars: {
            BEG: 180,
            END: 360,
            shouldForcePlayAfter: !0
        },
        error: {
            BEG: 360,
            END: 540
        },
        success: {
            BEG: 540,
            END: 778
        }
    },
    L = Object.freeze({
        WHITE: '#ebf0f7',
        PINK: '#fa6ef6'
    }),
    w = [
        {
            left: 29,
            top: 100,
            color: L.WHITE
        },
        {
            left: 245,
            top: 11,
            color: L.PINK
        },
        {
            left: 393,
            top: 22,
            color: L.WHITE
        },
        {
            left: 74,
            top: 30,
            color: L.PINK
        },
        {
            left: 188,
            top: 9,
            color: L.WHITE
        },
        {
            left: 379,
            top: 97,
            color: L.PINK
        }
    ],
    P = Object.freeze({
        SCALE_INITIAL: 0,
        SCALE_MIDDLE: 1,
        SCALE_END: 0,
        ROTATE_INITIAL: 0,
        ROTATE_MIDDLE: 180,
        ROTATE_END: 360,
        DELAY_MIN: 200,
        DELAY_MAX: 500,
        DELAY_STAGGER: 200,
        DURATION_MIDDLE: 400,
        DURATION_END: 250,
        SIZE_MIN: 7,
        SIZE_MAX: 15,
        EASING_MIDDLE: E.Z.Easing.bezier(0.3, 0.01, 0, 0.99),
        EASING_END: E.Z.Easing.bezier(0, -0.01, 0.99, 0)
    });
function M(e) {
    let { animate: n } = e,
        [r, i] = h.useState(0),
        a = (0, v.useSprings)(
            w.length,
            w.map((e, a) => {
                let o = a > 0 ? P.DELAY_STAGGER * a + Math.random() * (P.DELAY_MAX - P.DELAY_MIN) + P.DELAY_MIN : 0,
                    s = Math.random() * (P.SIZE_MAX - P.SIZE_MIN) + P.SIZE_MIN;
                return {
                    from: {
                        scale: P.SCALE_INITIAL,
                        rotate: P.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: s,
                        height: s
                    },
                    to: async (e) => {
                        n
                            ? (await e({
                                  scale: P.SCALE_MIDDLE,
                                  rotate: P.ROTATE_MIDDLE,
                                  delay: o,
                                  config: {
                                      duration: P.DURATION_MIDDLE,
                                      easing: P.EASING_MIDDLE
                                  }
                              }),
                              await e({
                                  scale: P.SCALE_END,
                                  rotate: P.ROTATE_END,
                                  config: {
                                      duration: P.DURATION_END,
                                      easing: P.EASING_END
                                  }
                              }),
                              await e({
                                  scale: P.SCALE_INITIAL,
                                  rotate: P.ROTATE_INITIAL,
                                  immediate: !0
                              }),
                              a === w.length - 1 && i(r + 1))
                            : await e({
                                  scale: P.SCALE_INITIAL,
                                  rotate: P.ROTATE_INITIAL
                              });
                    }
                };
            })
        );
    return (0, p.jsx)(p.Fragment, {
        children: a.map((e, n) => {
            let r = w[n];
            return (0, p.jsx)(
                g.animated.svg,
                {
                    style: e,
                    className: y.guildStar,
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 12.14 12.24',
                    children: (0, p.jsx)('path', {
                        d: 'M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z',
                        fill: r.color
                    })
                },
                n
            );
        })
    });
}
class k extends (d = h.PureComponent) {
    static getNextScene(e) {
        switch (e) {
            case 'entry':
            case 'error':
            case 'success':
                return 'idle';
            default:
                return e;
        }
    }
    importData() {
        return r
            .e('37586')
            .then(r.t.bind(r, 134072, 19))
            .then((e) => {
                let { default: n } = e;
                return n;
            });
    }
    render() {
        let { className: e, nextScene: n, pause: r, onScenePlay: i, onSceneComplete: a, pauseWhileUnfocused: o } = this.props;
        return (0, p.jsxs)('div', {
            className: m()(y.guildWrapper, e),
            children: [
                (0, p.jsx)(v.SequencedLottieAnimation, {
                    className: y.guildBackground,
                    importData: this.importData,
                    nextScene: r ? 'idle' : n,
                    sceneSegments: x,
                    onScenePlay: i,
                    onSceneComplete: a,
                    pauseWhileUnfocused: o,
                    pause: r
                }),
                (0, p.jsx)(M, { animate: !r && 'stars' === n })
            ]
        });
    }
}
b(k, 'Scenes', c);
