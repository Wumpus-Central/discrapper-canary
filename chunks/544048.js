"use strict";
n.d(t, { t: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(941861),
    o = n(844222),
    d = n(460890),
    c = n(308581);
class u extends r.PureComponent {
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
                pause: r,
                isWindowFocused: a,
                useReducedMotion: s,
                rendererSettings: l,
            } = this.props,
            [o, { default: d }] = await Promise.all([e(), n.e("96382").then(n.t.bind(n, 883885, 23))]);
        null != this.animationRef &&
            ((this.animation = d.loadAnimation({
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
            ((i && !a) || r || s) && this.animation.pause());
    }
    componentWillUnmount() {
        (this.isUnmounted = !0), null != this.animation && (this.animation.destroy(), (this.animation = void 0));
    }
    componentDidUpdate(e) {
        let { nextScene: t, pauseWhileUnfocused: n, pause: i, isWindowFocused: r, useReducedMotion: a } = this.props;
        t !== this.currentScene && this.shouldForcePlayAfter() && !i && this.playScene(t),
            null != this.animation &&
                (n && !e.isWindowFocused && r && !a && !0 !== i
                    ? this.animation.play()
                    : (a || (n && e.isWindowFocused && !r)) && this.animation.pause()),
            !e.pause && i ? this.animation?.pause() : !e.pause || i || a || this.animation?.play(),
            e.nextScene !== t && i && (this.playScene(t), this.animation?.pause());
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
        null != this.animation &&
            (e === this.currentScene || r.BEG !== a.BEG || r.END !== a.END) &&
            this.animation.playSegments([r.BEG, r.END], !0),
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
        return (0, i.jsx)("div", { ref: this.handleSetRef, className: s()(this.props.className, c.i) });
    }
}
function _(e) {
    let { componentRef: t, ignoreReducedMotion: n = !1, ...a } = e,
        { isWindowFocused: s } = (0, d.G9)(),
        c = (0, l.R)(),
        { reducedMotion: _ } = r.useContext(o.C),
        E = _.enabled && !n,
        A = { ...a, isWindowFocused: s?.() ?? c, useReducedMotion: E };
    return (0, i.jsx)(u, { ...A, ref: t });
}
