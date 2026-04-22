n.d(t, { Ec: () => o, LQ: () => s, Ss: () => i });
var a = n(627968);
n(64700);
var r = n(899343),
    l = n(796012);
function i(e) {
    let { currentStep: t, purchaseState: n, className: i, pause: s } = e,
        [o, u] = (0, r.f)({
            purchaseState: n,
            currentStep: t,
            initialScene: l.yh.Scenes.NORMAL,
            purchaseScene: l.yh.Scenes.SPEED_START,
            errorScene: l.yh.Scenes.NORMAL,
            successScene: l.yh.Scenes.FINISH,
        });
    return (0, a.jsx)(l.yh, {
        className: i,
        nextScene: o,
        onScenePlay: (e) => u(l.yh.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s,
    });
}
function s(e) {
    let { currentStep: t, purchaseState: n, className: i, pause: s } = e,
        [o, u] = (0, r.f)({
            purchaseState: n,
            currentStep: t,
            initialScene: l.rF.Scenes.NORMAL,
            purchaseScene: l.rF.Scenes.SPEED_START,
            errorScene: l.rF.Scenes.NORMAL,
            successScene: l.rF.Scenes.FINISH,
        });
    return (0, a.jsx)(l.rF, {
        className: i,
        nextScene: o,
        onScenePlay: (e) => u(l.rF.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s,
    });
}
function o(e) {
    let { currentStep: t, purchaseState: n, className: i, pause: s } = e,
        [o, u] = (0, r.f)({
            purchaseState: n,
            currentStep: t,
            initialScene: l.yC.Scenes.IDLE_ENTRY,
            purchaseScene: l.yC.Scenes.BOOST_START,
            errorScene: l.yC.Scenes.ERROR,
            successScene: l.yC.Scenes.BOOST_END,
        });
    return (0, a.jsx)(l.yC, {
        className: i,
        nextScene: o,
        onScenePlay: (e) => u(l.yC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s,
    });
}
