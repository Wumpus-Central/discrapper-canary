n.d(t, { k: () => b }), n(388685);
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    c = n(607070),
    u = n(451478),
    d = n(555712);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class E extends (r = a.PureComponent) {
    async componentDidMount() {
        let { importData: e, nextScene: t, pauseWhileUnfocused: r, pause: i, isWindowFocused: a, useReducedMotion: o, rendererSettings: s } = this.props,
            [l, { default: c }] = await Promise.all([e(), Promise.resolve().then(n.t.bind(n, 500923, 23))]);
        null != this.animationRef &&
            ((this.animation = c.loadAnimation({
                container: this.animationRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !0,
                animationData: l,
                rendererSettings: s
            })),
            this.animation.addEventListener('loopComplete', this.handleLoopComplete),
            this.animation.addEventListener('complete', this.handleComplete),
            this.animation.addEventListener('enterFrame', this.handleEnterFrame),
            this.playScene(t),
            ((r && !a) || i || o) && this.animation.pause());
    }
    componentWillUnmount() {
        (this.isUnmounted = !0), null != this.animation && (this.animation.destroy(), (this.animation = void 0));
    }
    componentDidUpdate(e) {
        var t, n, r;
        let { nextScene: i, pauseWhileUnfocused: a, pause: o, isWindowFocused: s, useReducedMotion: l } = this.props;
        i !== this.currentScene && this.shouldForcePlayAfter() && !o && this.playScene(i), null != this.animation && (a && !e.isWindowFocused && s && !l && !0 !== o ? this.animation.play() : (l || (a && e.isWindowFocused && !s)) && this.animation.pause()), !e.pause && o ? null == (t = this.animation) || t.pause() : !e.pause || o || l || null == (n = this.animation) || n.play(), e.nextScene !== i && o && (this.playScene(i), null == (r = this.animation) || r.pause());
    }
    shouldForcePlayAfter() {
        let { sceneSegments: e } = this.props;
        return !0 === e[this.currentScene].shouldForcePlayAfter;
    }
    playScene(e) {
        if (this.isUnmounted) return;
        let { onScenePlay: t, sceneSegments: n, useReducedMotion: r } = this.props,
            i = n[e],
            a = n[this.currentScene];
        if ((null != this.animation && (e === this.currentScene || i.BEG !== a.BEG || i.END !== a.END) && this.animation.playSegments([i.BEG, i.END], !0), (this.currentScene = e), null != t && t(this.currentScene), r)) {
            var o;
            null == (o = this.animation) || o.pause();
        }
    }
    render() {
        return (0, i.jsx)('div', {
            ref: this.handleSetRef,
            className: s()(this.props.className, d.wrapper)
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'animationRef', null),
            f(this, 'animation', void 0),
            f(this, 'currentScene', this.props.nextScene),
            f(this, 'isUnmounted', !1),
            f(this, 'handleLoopComplete', () => {
                let { onSceneComplete: e, nextScene: t } = this.props;
                null != e && e(this.currentScene), this.playScene(t);
            }),
            f(this, 'handleComplete', () => {
                let { onSceneComplete: e } = this.props;
                null != e && e(this.currentScene);
            }),
            f(this, 'handleEnterFrame', (e) => {
                let { onEnterFrame: t } = this.props;
                null == t || t(this.currentScene, e);
            }),
            f(this, 'handleSetRef', (e) => {
                this.animationRef = e;
                let { animationRef: t } = this.props;
                null != t && t(e);
            });
    }
}
f(E, 'defaultProps', {
    pauseWhileUnfocused: !0,
    pause: !1
});
let b = (e) => {
    var { componentRef: t, ignoreReducedMotion: n = !1 } = e,
        r = m(e, ['componentRef', 'ignoreReducedMotion']);
    let a = (0, l.e7)([u.Z], () => u.Z.isFocused()),
        o = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, i.jsx)(
        E,
        h(_({}, r), {
            isWindowFocused: a,
            useReducedMotion: o && !n,
            ref: t
        })
    );
};
