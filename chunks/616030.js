n.d(t, {
    Bk: () => l,
    tK: () => o,
    zC: () => s
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(122890),
    a = n(110818);
function s(e) {
    let { currentStep: t, purchaseState: n, className: s, pause: o } = e,
        [l, u] = (0, r.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: a.NQ.Scenes.NORMAL,
            purchaseScene: a.NQ.Scenes.SPEED_START,
            errorScene: a.NQ.Scenes.NORMAL,
            successScene: a.NQ.Scenes.FINISH
        });
    return (0, i.jsx)(a.NQ, {
        className: s,
        nextScene: l,
        onScenePlay: (e) => u(a.NQ.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o
    });
}
function o(e) {
    let { currentStep: t, purchaseState: n, className: s, pause: o } = e,
        [l, u] = (0, r.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: a.HC.Scenes.NORMAL,
            purchaseScene: a.HC.Scenes.SPEED_START,
            errorScene: a.HC.Scenes.NORMAL,
            successScene: a.HC.Scenes.FINISH
        });
    return (0, i.jsx)(a.HC, {
        className: s,
        nextScene: l,
        onScenePlay: (e) => u(a.HC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o
    });
}
function l(e) {
    let { currentStep: t, purchaseState: n, className: s, pause: o } = e,
        [l, u] = (0, r.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: a.Db.Scenes.IDLE_ENTRY,
            purchaseScene: a.Db.Scenes.BOOST_START,
            errorScene: a.Db.Scenes.ERROR,
            successScene: a.Db.Scenes.BOOST_END
        });
    return (0, i.jsx)(a.Db, {
        className: s,
        nextScene: l,
        onScenePlay: (e) => u(a.Db.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o
    });
}
