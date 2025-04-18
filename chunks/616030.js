n.d(t, {
    Bk: () => l,
    tK: () => s,
    zC: () => o
}),
    n(388685);
var r = n(200651);
n(192379);
var i = n(122890),
    a = n(110818);
function o(e) {
    let { currentStep: t, purchaseState: n, className: o, pause: s } = e,
        [l, c] = (0, i.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: a.NQ.Scenes.NORMAL,
            purchaseScene: a.NQ.Scenes.SPEED_START,
            errorScene: a.NQ.Scenes.NORMAL,
            successScene: a.NQ.Scenes.FINISH
        });
    return (0, r.jsx)(a.NQ, {
        className: o,
        nextScene: l,
        onScenePlay: (e) => c(a.NQ.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    });
}
function s(e) {
    let { currentStep: t, purchaseState: n, className: o, pause: s } = e,
        [l, c] = (0, i.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: a.HC.Scenes.NORMAL,
            purchaseScene: a.HC.Scenes.SPEED_START,
            errorScene: a.HC.Scenes.NORMAL,
            successScene: a.HC.Scenes.FINISH
        });
    return (0, r.jsx)(a.HC, {
        className: o,
        nextScene: l,
        onScenePlay: (e) => c(a.HC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    });
}
function l(e) {
    let { currentStep: t, purchaseState: n, className: o, pause: s } = e,
        [l, c] = (0, i.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: a.Db.Scenes.IDLE_ENTRY,
            purchaseScene: a.Db.Scenes.BOOST_START,
            errorScene: a.Db.Scenes.ERROR,
            successScene: a.Db.Scenes.BOOST_END
        });
    return (0, r.jsx)(a.Db, {
        className: o,
        nextScene: l,
        onScenePlay: (e) => c(a.Db.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    });
}
