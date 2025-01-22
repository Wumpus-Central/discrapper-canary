r.d(n, {
    Bk: function () {
        return c;
    },
    tK: function () {
        return u;
    },
    zC: function () {
        return l;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(122890),
    s = r(110818);
function l(e) {
    let { currentStep: n, purchaseState: r, className: i, pause: l } = e,
        [u, c] = (0, o.z)({
            purchaseState: r,
            currentStep: n,
            initialScene: s.NQ.Scenes.NORMAL,
            purchaseScene: s.NQ.Scenes.SPEED_START,
            errorScene: s.NQ.Scenes.NORMAL,
            successScene: s.NQ.Scenes.FINISH
        });
    return (0, a.jsx)(s.NQ, {
        className: i,
        nextScene: u,
        onScenePlay: (e) => c(s.NQ.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: l
    });
}
function u(e) {
    let { currentStep: n, purchaseState: r, className: i, pause: l } = e,
        [u, c] = (0, o.z)({
            purchaseState: r,
            currentStep: n,
            initialScene: s.HC.Scenes.NORMAL,
            purchaseScene: s.HC.Scenes.SPEED_START,
            errorScene: s.HC.Scenes.NORMAL,
            successScene: s.HC.Scenes.FINISH
        });
    return (0, a.jsx)(s.HC, {
        className: i,
        nextScene: u,
        onScenePlay: (e) => c(s.HC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: l
    });
}
function c(e) {
    let { currentStep: n, purchaseState: r, className: i, pause: l } = e,
        [u, c] = (0, o.z)({
            purchaseState: r,
            currentStep: n,
            initialScene: s.Db.Scenes.IDLE_ENTRY,
            purchaseScene: s.Db.Scenes.BOOST_START,
            errorScene: s.Db.Scenes.ERROR,
            successScene: s.Db.Scenes.BOOST_END
        });
    return (0, a.jsx)(s.Db, {
        className: i,
        nextScene: u,
        onScenePlay: (e) => c(s.Db.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: l
    });
}
