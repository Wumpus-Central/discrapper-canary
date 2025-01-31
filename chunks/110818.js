n.d(t, {
    Db: () => C,
    HC: () => I,
    NQ: () => E,
    fe: () => w
}),
    n(47120);
var i,
    r,
    a,
    s,
    o = n(200651),
    l = n(192379),
    u = n(120356),
    c = n.n(u),
    d = n(642128),
    f = n(748780),
    _ = n(481060),
    p = n(280099);
function h(e, t, n) {
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
var m = (function (e) {
    return (e.NORMAL = 'normal'), (e.SPEED_START = 'speed_start'), (e.SPEED_LOOP = 'speed_loop'), (e.FINISH = 'finish'), (e.IDLE = 'idle'), e;
})(m || {});
let g = {
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
class E extends (i = l.PureComponent) {
    static getNextScene(e) {
        switch (e) {
            case E.Scenes.SPEED_START:
                return E.Scenes.SPEED_LOOP;
            case E.Scenes.FINISH:
                return E.Scenes.IDLE;
            default:
                return e;
        }
    }
    importDefault() {
        return n
            .e('92668')
            .then(n.t.bind(n, 92668, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let { className: e, nextScene: t, onScenePlay: n, onSceneComplete: i, pause: r, pauseWhileUnfocused: a } = this.props;
        return (0, o.jsx)(_.kci, {
            className: c()(p.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: r ? 'idle' : t,
            sceneSegments: g,
            onScenePlay: n,
            onSceneComplete: i,
            pauseWhileUnfocused: a,
            pause: r
        });
    }
}
h(E, 'Scenes', m);
var v = (function (e) {
    return (e.NORMAL = 'normal'), (e.SPEED_START = 'speed_start'), (e.SPEED_LOOP = 'speed_loop'), (e.FINISH = 'finish'), (e.IDLE = 'idle'), e;
})(v || {});
let y = {
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
class I extends (r = l.PureComponent) {
    static getNextScene(e) {
        switch (e) {
            case I.Scenes.SPEED_START:
                return I.Scenes.SPEED_LOOP;
            case I.Scenes.FINISH:
                return I.Scenes.IDLE;
            default:
                return e;
        }
    }
    importDefault() {
        return n
            .e('45884')
            .then(n.t.bind(n, 35065, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let { className: e, nextScene: t, onScenePlay: n, onSceneComplete: i, pause: r, pauseWhileUnfocused: a } = this.props;
        return (0, o.jsx)(_.kci, {
            className: c()(p.sequencedAnimation, e),
            importData: this.importDefault,
            nextScene: r ? 'idle' : t,
            sceneSegments: y,
            onScenePlay: n,
            onSceneComplete: i,
            pauseWhileUnfocused: a,
            pause: r
        });
    }
}
h(I, 'Scenes', v);
var b = (function (e) {
    return (e.IDLE_ENTRY = 'idle_entry'), (e.IDLE_LOOP = 'idle_loop'), (e.BOOST_START = 'boost_start'), (e.BOOST_LOOP = 'boost_loop'), (e.BOOST_END = 'boost_end'), (e.VICTORY = 'victory'), (e.ERROR = 'error'), e;
})(b || {});
let T = {
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
class S extends l.PureComponent {
    getStyle(e) {
        let { animation: t } = this.props;
        return {
            transform: [
                {
                    translateX: t.x.interpolate({
                        inputRange: [0, 1],
                        outputRange: e ? ['100%', '0%'] : ['0%', '-100%']
                    })
                },
                {
                    translateY: t.y.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['100%', '0%']
                    })
                }
            ]
        };
    }
    render() {
        let { className: e } = this.props;
        return (0, o.jsxs)('div', {
            className: p.panningAnimation,
            children: [
                (0, o.jsx)(f.Z.div, {
                    className: e,
                    style: this.getStyle(!1)
                }),
                (0, o.jsx)(f.Z.div, {
                    className: e,
                    style: this.getStyle(!0)
                })
            ]
        });
    }
}
let A = Object.freeze({
        IDLE_ENTRY: {
            toValue: 1,
            duration: 1500
        },
        IDLE_LOOP: {
            toValue: 1,
            duration: 6000,
            easing: f.Z.Easing.linear
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
    N = 1.2;
class C extends (a = l.PureComponent) {
    static getNextScene(e) {
        switch (e) {
            case C.Scenes.IDLE_ENTRY:
                return C.Scenes.IDLE_LOOP;
            case C.Scenes.BOOST_START:
                return C.Scenes.BOOST_LOOP;
            case C.Scenes.BOOST_END:
                return C.Scenes.VICTORY;
            case C.Scenes.VICTORY:
                return C.Scenes.IDLE_ENTRY;
            case C.Scenes.ERROR:
                return C.Scenes.IDLE_LOOP;
            default:
                return e;
        }
    }
    componentWillUnmount() {
        this.didUnmount = !0;
    }
    importData() {
        return n
            .e('89506')
            .then(n.t.bind(n, 88032, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    animateEntry(e) {
        f.Z.parallel([
            f.Z.timing(this.foregroundAnimation.y, {
                toValue: e.toValue,
                duration: e.duration,
                delay: e.delay || 0
            }),
            f.Z.timing(this.backgroundAnimation.y, {
                toValue: e.toValue,
                duration: e.duration * N,
                delay: e.delay || 0
            })
        ]).start();
    }
    animateIdleEntry() {
        this.animateEntry(A.IDLE_ENTRY);
    }
    animateError() {
        this.animateEntry(A.ERROR);
    }
    animateIdleLoop() {
        this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
    }
    animateBoostStart() {
        f.Z.parallel([
            f.Z.timing(this.foregroundAnimation.y, {
                toValue: A.BOOST_START.toValue,
                duration: A.BOOST_START.duration,
                delay: A.BOOST_START.delay
            }),
            f.Z.timing(this.backgroundAnimation.y, {
                toValue: A.BOOST_START.toValue,
                duration: A.BOOST_START.duration * N,
                delay: A.BOOST_START.delay
            })
        ]).start();
    }
    render() {
        let { className: e, nextScene: t, pause: n, onSceneComplete: i } = this.props;
        return (0, o.jsxs)('div', {
            className: c()(p.tier2Animation, e),
            children: [
                n
                    ? (0, o.jsx)(o.Fragment, {
                          children: (0, o.jsxs)('div', {
                              className: p.panningAnimation,
                              children: [(0, o.jsx)('div', { className: p.tier2Background }), (0, o.jsx)('div', { className: p.tier2Foreground })]
                          })
                      })
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(S, {
                                  className: p.tier2Background,
                                  animation: this.backgroundAnimation
                              }),
                              (0, o.jsx)(S, {
                                  className: p.tier2Foreground,
                                  animation: this.foregroundAnimation
                              })
                          ]
                      }),
                (0, o.jsx)(_.kci, {
                    className: p.sequencedAnimation,
                    importData: this.importData,
                    nextScene: n ? 'idle_loop' : t,
                    sceneSegments: T,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: i,
                    pauseWhileUnfocused: !1,
                    pause: n
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            h(
                this,
                'backgroundAnimation',
                new f.Z.ValueXY({
                    x: 0,
                    y: 0
                })
            ),
            h(
                this,
                'foregroundAnimation',
                new f.Z.ValueXY({
                    x: 0,
                    y: 0
                })
            ),
            h(this, 'didUnmount', !1),
            h(this, 'animateIdleLoopBackground', () => {
                !this.didUnmount &&
                    (this.backgroundAnimation.x.setValue(0),
                    f.Z.timing(this.backgroundAnimation.x, {
                        toValue: A.IDLE_LOOP.toValue,
                        duration: A.IDLE_LOOP.duration * N,
                        easing: f.Z.Easing.linear
                    }).start(this.animateIdleLoopBackground));
            }),
            h(this, 'animateIdleLoopForeground', () => {
                !this.didUnmount &&
                    (this.foregroundAnimation.x.setValue(0),
                    f.Z.timing(this.foregroundAnimation.x, {
                        toValue: A.IDLE_LOOP.toValue,
                        duration: A.IDLE_LOOP.duration,
                        easing: A.IDLE_LOOP.easing
                    }).start(this.animateIdleLoopForeground));
            }),
            h(this, 'handleScenePlay', (e) => {
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
                let { onScenePlay: t } = this.props;
                null != t && t(e);
            });
    }
}
h(C, 'Scenes', b);
var R = (function (e) {
    return (e.ENTRY = 'entry'), (e.IDLE = 'idle'), (e.STARS = 'stars'), (e.ERROR = 'error'), (e.SUCCESS = 'success'), e;
})(R || {});
let O = {
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
    D = Object.freeze({
        WHITE: '#ebf0f7',
        PINK: '#fa6ef6'
    }),
    x = [
        {
            left: 29,
            top: 100,
            color: D.WHITE
        },
        {
            left: 245,
            top: 11,
            color: D.PINK
        },
        {
            left: 393,
            top: 22,
            color: D.WHITE
        },
        {
            left: 74,
            top: 30,
            color: D.PINK
        },
        {
            left: 188,
            top: 9,
            color: D.WHITE
        },
        {
            left: 379,
            top: 97,
            color: D.PINK
        }
    ],
    L = Object.freeze({
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
        EASING_MIDDLE: f.Z.Easing.bezier(0.3, 0.01, 0, 0.99),
        EASING_END: f.Z.Easing.bezier(0, -0.01, 0.99, 0)
    });
function P(e) {
    let { animate: t } = e,
        [n, i] = l.useState(0),
        r = (0, _.bYB)(
            x.length,
            x.map((e, r) => {
                let a = r > 0 ? L.DELAY_STAGGER * r + Math.random() * (L.DELAY_MAX - L.DELAY_MIN) + L.DELAY_MIN : 0,
                    s = Math.random() * (L.SIZE_MAX - L.SIZE_MIN) + L.SIZE_MIN;
                return {
                    from: {
                        scale: L.SCALE_INITIAL,
                        rotate: L.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: s,
                        height: s
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: L.SCALE_MIDDLE,
                                  rotate: L.ROTATE_MIDDLE,
                                  delay: a,
                                  config: {
                                      duration: L.DURATION_MIDDLE,
                                      easing: L.EASING_MIDDLE
                                  }
                              }),
                              await e({
                                  scale: L.SCALE_END,
                                  rotate: L.ROTATE_END,
                                  config: {
                                      duration: L.DURATION_END,
                                      easing: L.EASING_END
                                  }
                              }),
                              await e({
                                  scale: L.SCALE_INITIAL,
                                  rotate: L.ROTATE_INITIAL,
                                  immediate: !0
                              }),
                              r === x.length - 1 && i(n + 1))
                            : await e({
                                  scale: L.SCALE_INITIAL,
                                  rotate: L.ROTATE_INITIAL
                              });
                    }
                };
            })
        );
    return (0, o.jsx)(o.Fragment, {
        children: r.map((e, t) => {
            let n = x[t];
            return (0, o.jsx)(
                d.animated.svg,
                {
                    style: e,
                    className: p.guildStar,
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 12.14 12.24',
                    children: (0, o.jsx)('path', {
                        d: 'M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z',
                        fill: n.color
                    })
                },
                t
            );
        })
    });
}
class w extends (s = l.PureComponent) {
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
        return n
            .e('75564')
            .then(n.t.bind(n, 134072, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let { className: e, nextScene: t, pause: n, onScenePlay: i, onSceneComplete: r, pauseWhileUnfocused: a } = this.props;
        return (0, o.jsxs)('div', {
            className: c()(p.guildWrapper, e),
            children: [
                (0, o.jsx)(_.kci, {
                    className: p.guildBackground,
                    importData: this.importData,
                    nextScene: n ? 'idle' : t,
                    sceneSegments: O,
                    onScenePlay: i,
                    onSceneComplete: r,
                    pauseWhileUnfocused: a,
                    pause: n
                }),
                (0, o.jsx)(P, { animate: !n && 'stars' === t })
            ]
        });
    }
}
h(w, 'Scenes', R);
