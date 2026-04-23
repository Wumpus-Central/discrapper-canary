"use strict";
n.d(t, { t: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(941861),
    l = n(844222),
    u = n(460890),
    c = n(409341);
class d extends i.PureComponent {
    static defaultProps = { pauseWhileUnfocused: !0, pause: !1 };
    animationRef = null;
    animation;
    currentScene = this.props.nextScene;
    isUnmounted = !1;
    async componentDidMount() {
        let {
                importData: e,
                nextScene: t,
                pauseWhileUnfocused: r,
                pause: i,
                isWindowFocused: s,
                useReducedMotion: a,
                rendererSettings: o,
            } = this.props,
            [l, { default: u }] = await Promise.all([e(), n.e("96382").then(n.t.bind(n, 883885, 23))]);
        null != this.animationRef &&
            ((this.animation = u.loadAnimation({
                container: this.animationRef,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: l,
                rendererSettings: o,
            })),
            this.animation.addEventListener("loopComplete", this.handleLoopComplete),
            this.animation.addEventListener("complete", this.handleComplete),
            this.animation.addEventListener("enterFrame", this.handleEnterFrame),
            this.playScene(t),
            ((r && !s) || i || a) && this.animation.pause());
    }
    componentWillUnmount() {
        (this.isUnmounted = !0), null != this.animation && (this.animation.destroy(), (this.animation = void 0));
    }
    componentDidUpdate(e) {
        let { nextScene: t, pauseWhileUnfocused: n, pause: r, isWindowFocused: i, useReducedMotion: s } = this.props;
        t !== this.currentScene && this.shouldForcePlayAfter() && !r && this.playScene(t),
            null != this.animation &&
                (n && !e.isWindowFocused && i && !s && !0 !== r
                    ? this.animation.play()
                    : (s || (n && e.isWindowFocused && !i)) && this.animation.pause()),
            !e.pause && r ? this.animation?.pause() : !e.pause || r || s || this.animation?.play(),
            e.nextScene !== t && r && (this.playScene(t), this.animation?.pause());
    }
    shouldForcePlayAfter() {
        let { sceneSegments: e } = this.props;
        return !0 === e[this.currentScene].shouldForcePlayAfter;
    }
    playScene(e) {
        if (this.isUnmounted) return;
        let { onScenePlay: t, sceneSegments: n, useReducedMotion: r } = this.props,
            i = n[e],
            s = n[this.currentScene];
        null != this.animation &&
            (e === this.currentScene || i.BEG !== s.BEG || i.END !== s.END) &&
            this.animation.playSegments([i.BEG, i.END], !0),
            (this.currentScene = e),
            null != t && t(this.currentScene),
            r && this.animation?.pause();
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
        return (0, r.jsx)("div", { ref: this.handleSetRef, className: a()(this.props.className, c.i) });
    }
}
let _ = (e) => {
    let { componentRef: t, ignoreReducedMotion: n = !1, ...s } = e,
        { isWindowFocused: a } = (0, u.G9)(),
        c = (0, o.R)(),
        { reducedMotion: _ } = i.useContext(l.C),
        f = _.enabled && !n,
        p = { ...s, isWindowFocused: a?.() ?? c, useReducedMotion: f };
    return (0, r.jsx)(d, { ...p, ref: t });
};
