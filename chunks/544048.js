n.d(t, { t: () => m });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(941861),
    o = n(844222),
    u = n(460890),
    d = n(409341);
class c extends s.PureComponent {
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
                pause: s,
                isWindowFocused: r,
                useReducedMotion: a,
                rendererSettings: l,
            } = this.props,
            [o, { default: u }] = await Promise.all([e(), n.e("96382").then(n.t.bind(n, 883885, 23))]);
        null != this.animationRef &&
            ((this.animation = u.loadAnimation({
                container: this.animationRef,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: o,
                rendererSettings: l,
            })),
            this.animation.addEventListener("loopComplete", this.handleLoopComplete),
            this.animation.addEventListener("complete", this.handleComplete),
            this.animation.addEventListener("enterFrame", this.handleEnterFrame),
            this.playScene(t),
            ((i && !r) || s || a) && this.animation.pause());
    }
    componentWillUnmount() {
        (this.isUnmounted = !0), null != this.animation && (this.animation.destroy(), (this.animation = void 0));
    }
    componentDidUpdate(e) {
        let { nextScene: t, pauseWhileUnfocused: n, pause: i, isWindowFocused: s, useReducedMotion: r } = this.props;
        t !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(t),
            null != this.animation &&
                (n && !e.isWindowFocused && s && !r && !0 !== i
                    ? this.animation.play()
                    : (r || (n && e.isWindowFocused && !s)) && this.animation.pause()),
            !e.pause && i ? this.animation?.pause() : !e.pause || i || r || this.animation?.play(),
            e.nextScene !== t && i && (this.playScene(t), this.animation?.pause());
    }
    shouldForcePlayAfter() {
        let { sceneSegments: e } = this.props;
        return !0 === e[this.currentScene].shouldForcePlayAfter;
    }
    playScene(e) {
        if (this.isUnmounted) return;
        let { onScenePlay: t, sceneSegments: n, useReducedMotion: i } = this.props,
            s = n[e],
            r = n[this.currentScene];
        null != this.animation &&
            (e === this.currentScene || s.BEG !== r.BEG || s.END !== r.END) &&
            this.animation.playSegments([s.BEG, s.END], !0),
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
        return (0, i.jsx)("div", { ref: this.handleSetRef, className: a()(this.props.className, d.i) });
    }
}
let m = (e) => {
    let { componentRef: t, ignoreReducedMotion: n = !1, ...r } = e,
        { isWindowFocused: a } = (0, u.G9)(),
        d = (0, l.R)(),
        { reducedMotion: m } = s.useContext(o.C),
        h = m.enabled && !n,
        p = { ...r, isWindowFocused: a?.() ?? d, useReducedMotion: h };
    return (0, i.jsx)(c, { ...p, ref: t });
};
