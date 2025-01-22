r.d(n, {
    k: function () {
        return m;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(442837),
    d = r(607070),
    f = r(451478),
    p = r(567541);
function h(e, n, r) {
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
class _ extends (i = s.PureComponent) {
    async componentDidMount() {
        let { importData: e, nextScene: n, pauseWhileUnfocused: i, pause: a, isWindowFocused: o, useReducedMotion: s } = this.props,
            [l, { default: u }] = await Promise.all([e(), Promise.resolve().then(r.t.bind(r, 500923, 23))]);
        if (null != this.animationRef)
            (this.animation = u.loadAnimation({
                container: this.animationRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !0,
                animationData: l
            })),
                this.animation.addEventListener('loopComplete', this.handleLoopComplete),
                this.animation.addEventListener('complete', this.handleComplete),
                this.animation.addEventListener('enterFrame', this.handleEnterFrame),
                this.playScene(n),
                ((i && !o) || a || s) && this.animation.pause();
    }
    componentWillUnmount() {
        (this.isUnmounted = !0), null != this.animation && (this.animation.destroy(), (this.animation = void 0));
    }
    componentDidUpdate(e) {
        var n, r, i;
        let { nextScene: a, pauseWhileUnfocused: o, pause: s, isWindowFocused: l, useReducedMotion: u } = this.props;
        a !== this.currentScene && this.shouldForcePlayAfter() && !s && this.playScene(a), null != this.animation && (o && !e.isWindowFocused && l && !u && !0 !== s ? this.animation.play() : (u || (o && e.isWindowFocused && !l)) && this.animation.pause()), !e.pause && s ? null === (n = this.animation) || void 0 === n || n.pause() : e.pause && !s && !u && (null === (r = this.animation) || void 0 === r || r.play()), e.nextScene !== a && s && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause());
    }
    shouldForcePlayAfter() {
        let { sceneSegments: e } = this.props;
        return !0 === e[this.currentScene].shouldForcePlayAfter;
    }
    playScene(e) {
        if (this.isUnmounted) return;
        let { onScenePlay: n, sceneSegments: r, useReducedMotion: i } = this.props,
            a = r[e],
            o = r[this.currentScene];
        if ((null != this.animation && (e === this.currentScene || a.BEG !== o.BEG || a.END !== o.END) && this.animation.playSegments([a.BEG, a.END], !0), (this.currentScene = e), null != n && n(this.currentScene), i)) {
            var s;
            null === (s = this.animation) || void 0 === s || s.pause();
        }
    }
    render() {
        return (0, o.jsx)('div', {
            ref: this.handleSetRef,
            className: u()(this.props.className, p.wrapper)
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'animationRef', null),
            h(this, 'animation', void 0),
            h(this, 'currentScene', this.props.nextScene),
            h(this, 'isUnmounted', !1),
            h(this, 'handleLoopComplete', () => {
                let { onSceneComplete: e, nextScene: n } = this.props;
                null != e && e(this.currentScene), this.playScene(n);
            }),
            h(this, 'handleComplete', () => {
                let { onSceneComplete: e } = this.props;
                null != e && e(this.currentScene);
            }),
            h(this, 'handleEnterFrame', (e) => {
                let { onEnterFrame: n } = this.props;
                null == n || n(this.currentScene, e);
            }),
            h(this, 'handleSetRef', (e) => {
                this.animationRef = e;
                let { animationRef: n } = this.props;
                null != n && n(e);
            });
    }
}
h(_, 'defaultProps', {
    pauseWhileUnfocused: !0,
    pause: !1
});
let m = (e) => {
    let { componentRef: n, ignoreReducedMotion: r = !1, ...i } = e,
        a = (0, c.e7)([f.Z], () => f.Z.isFocused()),
        s = (0, c.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, o.jsx)(_, {
        ...i,
        isWindowFocused: a,
        useReducedMotion: s && !r,
        ref: n
    });
};
