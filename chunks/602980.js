"use strict";
n.d(t, { Ec: () => l, LQ: () => o, Ss: () => a });
var r = n(627968);
n(64700);
var i = n(899343),
    s = n(796012);
function a(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: o } = e,
        [l, u] = (0, i.f)({
            purchaseState: n,
            currentStep: t,
            initialScene: s.yh.Scenes.NORMAL,
            purchaseScene: s.yh.Scenes.SPEED_START,
            errorScene: s.yh.Scenes.NORMAL,
            successScene: s.yh.Scenes.FINISH,
        });
    return (0, r.jsx)(s.yh, {
        className: a,
        nextScene: l,
        onScenePlay: (e) => u(s.yh.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o,
    });
}
function o(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: o } = e,
        [l, u] = (0, i.f)({
            purchaseState: n,
            currentStep: t,
            initialScene: s.rF.Scenes.NORMAL,
            purchaseScene: s.rF.Scenes.SPEED_START,
            errorScene: s.rF.Scenes.NORMAL,
            successScene: s.rF.Scenes.FINISH,
        });
    return (0, r.jsx)(s.rF, {
        className: a,
        nextScene: l,
        onScenePlay: (e) => u(s.rF.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o,
    });
}
function l(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: o } = e,
        [l, u] = (0, i.f)({
            purchaseState: n,
            currentStep: t,
            initialScene: s.yC.Scenes.IDLE_ENTRY,
            purchaseScene: s.yC.Scenes.BOOST_START,
            errorScene: s.yC.Scenes.ERROR,
            successScene: s.yC.Scenes.BOOST_END,
        });
    return (0, r.jsx)(s.yC, {
        className: a,
        nextScene: l,
        onScenePlay: (e) => u(s.yC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o,
    });
}
