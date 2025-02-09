n.d(t, { k: () => p }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    u = n(607070),
    c = n(451478),
    d = n(624262);
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
class _ extends (i = a.PureComponent) {
    async componentDidMount() {
        let { importData: e, nextScene: t, pauseWhileUnfocused: i, pause: r, isWindowFocused: a, useReducedMotion: s } = this.props,
            [o, { default: l }] = await Promise.all([e(), Promise.resolve().then(n.t.bind(n, 500923, 23))]);
        null != this.animationRef &&
            ((this.animation = l.loadAnimation({
                container: this.animationRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !0,
                animationData: o
            })),
            this.animation.addEventListener('loopComplete', this.handleLoopComplete),
            this.animation.addEventListener('complete', this.handleComplete),
            this.animation.addEventListener('enterFrame', this.handleEnterFrame),
            this.playScene(t),
            ((i && !a) || r || s) && this.animation.pause());
    }
    componentWillUnmount() {
        (this.isUnmounted = !0), null != this.animation && (this.animation.destroy(), (this.animation = void 0));
    }
    componentDidUpdate(e) {
        var t, n, i;
        let { nextScene: r, pauseWhileUnfocused: a, pause: s, isWindowFocused: o, useReducedMotion: l } = this.props;
        r !== this.currentScene && this.shouldForcePlayAfter() && !s && this.playScene(r), null != this.animation && (a && !e.isWindowFocused && o && !l && !0 !== s ? this.animation.play() : (l || (a && e.isWindowFocused && !o)) && this.animation.pause()), !e.pause && s ? null === (t = this.animation) || void 0 === t || t.pause() : !e.pause || s || l || null === (n = this.animation) || void 0 === n || n.play(), e.nextScene !== r && s && (this.playScene(r), null === (i = this.animation) || void 0 === i || i.pause());
    }
    shouldForcePlayAfter() {
        let { sceneSegments: e } = this.props;
        return !0 === e[this.currentScene].shouldForcePlayAfter;
    }
    playScene(e) {
        if (this.isUnmounted) return;
        let { onScenePlay: t, sceneSegments: n, useReducedMotion: i } = this.props,
            r = n[e],
            a = n[this.currentScene];
        if ((null != this.animation && (e === this.currentScene || r.BEG !== a.BEG || r.END !== a.END) && this.animation.playSegments([r.BEG, r.END], !0), (this.currentScene = e), null != t && t(this.currentScene), i)) {
            var s;
            null === (s = this.animation) || void 0 === s || s.pause();
        }
    }
    render() {
        return (0, r.jsx)('div', {
            ref: this.handleSetRef,
            className: o()(this.props.className, d.wrapper)
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
f(_, 'defaultProps', {
    pauseWhileUnfocused: !0,
    pause: !1
});
let p = (e) => {
    let { componentRef: t, ignoreReducedMotion: n = !1, ...i } = e,
        a = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        s = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsx)(_, {
        ...i,
        isWindowFocused: a,
        useReducedMotion: s && !n,
        ref: t
    });
};
