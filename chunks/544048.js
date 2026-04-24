n.d(t, { t: () => p });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    o = n.n(l),
    r = n(941861),
    s = n(844222),
    d = n(460890),
    _ = n(409341);
class c extends a.PureComponent {
    static defaultProps = { pauseWhileUnfocused: !0, pause: !1 };
    animationRef = null;
    animation;
    currentScene = this.props.nextScene;
    isUnmounted = !1;
    async componentDidMount() {
        let {
                importData: e,
                nextScene: t,
                pauseWhileUnfocused: i,
                pause: a,
                isWindowFocused: l,
                useReducedMotion: o,
                rendererSettings: r,
            } = this.props,
            [s, { default: d }] = await Promise.all([e(), n.e("96382").then(n.t.bind(n, 883885, 23))]);
        null != this.animationRef &&
            ((this.animation = d.loadAnimation({
                container: this.animationRef,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: s,
                rendererSettings: r,
            })),
            this.animation.addEventListener("loopComplete", this.handleLoopComplete),
            this.animation.addEventListener("complete", this.handleComplete),
            this.animation.addEventListener("enterFrame", this.handleEnterFrame),
            this.playScene(t),
            ((i && !l) || a || o) && this.animation.pause());
    }
    componentWillUnmount() {
        (this.isUnmounted = !0), null != this.animation && (this.animation.destroy(), (this.animation = void 0));
    }
    componentDidUpdate(e) {
        let { nextScene: t, pauseWhileUnfocused: n, pause: i, isWindowFocused: a, useReducedMotion: l } = this.props;
        t !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(t),
            null != this.animation &&
                (n && !e.isWindowFocused && a && !l && !0 !== i
                    ? this.animation.play()
                    : (l || (n && e.isWindowFocused && !a)) && this.animation.pause()),
            !e.pause && i ? this.animation?.pause() : !e.pause || i || l || this.animation?.play(),
            e.nextScene !== t && i && (this.playScene(t), this.animation?.pause());
    }
    shouldForcePlayAfter() {
        let { sceneSegments: e } = this.props;
        return !0 === e[this.currentScene].shouldForcePlayAfter;
    }
    playScene(e) {
        if (this.isUnmounted) return;
        let { onScenePlay: t, sceneSegments: n, useReducedMotion: i } = this.props,
            a = n[e],
            l = n[this.currentScene];
        null != this.animation &&
            (e === this.currentScene || a.BEG !== l.BEG || a.END !== l.END) &&
            this.animation.playSegments([a.BEG, a.END], !0),
            (this.currentScene = e),
            null != t && t(this.currentScene),
            i && this.animation?.pause();
    }
    handleLoopComplete = () => {
        let { onSceneComplete: e, nextScene: t } = this.props;
        null != e && e(this.currentScene), this.playScene(t);
    };
    handleComplete = () => {
        let { onSceneComplete: e } = this.props;
        null != e && e(this.currentScene);
    };
    handleEnterFrame = (e) => {
        let { onEnterFrame: t } = this.props;
        t?.(this.currentScene, e);
    };
    handleSetRef = (e) => {
        this.animationRef = e;
        let { animationRef: t } = this.props;
        null != t && t(e);
    };
    render() {
        return (0, i.jsx)("div", { ref: this.handleSetRef, className: o()(this.props.className, _.i) });
    }
}
let p = (e) => {
    let { componentRef: t, ignoreReducedMotion: n = !1, ...l } = e,
        { isWindowFocused: o } = (0, d.G9)(),
        _ = (0, r.R)(),
        { reducedMotion: p } = a.useContext(s.C),
        u = p.enabled && !n,
        h = { ...l, isWindowFocused: o?.() ?? _, useReducedMotion: u };
    return (0, i.jsx)(c, { ...h, ref: t });
};
