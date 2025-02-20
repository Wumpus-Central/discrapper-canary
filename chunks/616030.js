n.d(t, {
    Bk: () => l,
    tK: () => s,
    zC: () => a
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(122890),
    o = n(110818);
function a(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: s } = e,
        [l, c] = (0, i.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: o.NQ.Scenes.NORMAL,
            purchaseScene: o.NQ.Scenes.SPEED_START,
            errorScene: o.NQ.Scenes.NORMAL,
            successScene: o.NQ.Scenes.FINISH
        });
    return (0, r.jsx)(o.NQ, {
        className: a,
        nextScene: l,
        onScenePlay: (e) => c(o.NQ.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    });
}
function s(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: s } = e,
        [l, c] = (0, i.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: o.HC.Scenes.NORMAL,
            purchaseScene: o.HC.Scenes.SPEED_START,
            errorScene: o.HC.Scenes.NORMAL,
            successScene: o.HC.Scenes.FINISH
        });
    return (0, r.jsx)(o.HC, {
        className: a,
        nextScene: l,
        onScenePlay: (e) => c(o.HC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    });
}
function l(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: s } = e,
        [l, c] = (0, i.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: o.Db.Scenes.IDLE_ENTRY,
            purchaseScene: o.Db.Scenes.BOOST_START,
            errorScene: o.Db.Scenes.ERROR,
            successScene: o.Db.Scenes.BOOST_END
        });
    return (0, r.jsx)(o.Db, {
        className: a,
        nextScene: l,
        onScenePlay: (e) => c(o.Db.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: s
    });
}
