n.d(t, { Z: () => d }), n(388685);
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(600164),
    l = n(122890),
    c = n(110818),
    u = n(100098);
function d(e) {
    let { purchaseState: t, currentStep: n, onClose: d } = e,
        [f, p] = (0, l.z)({
            purchaseState: t,
            currentStep: n,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS,
        }),
        _ = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.jsxs)(a.xBx, {
        "data-migration-pending": !0,
        align: s.Z.Align.START,
        className: u.header,
        separator: !1,
        children: [
            (0, r.jsx)(c.fe, {
                className: u.animation,
                nextScene: f,
                onScenePlay: (e) => p(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: _,
            }),
            (0, r.jsx)("div", { className: u.headerTitle }),
            (0, r.jsx)(a.olH, {
                "data-migration-pending": !0,
                onClick: d,
                className: u.closeButton,
            }),
        ],
    });
}
