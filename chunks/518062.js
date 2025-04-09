n.d(t, { Z: () => d }), n(388685);
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(607070),
    a = n(600164),
    s = n(122890),
    u = n(110818),
    c = n(523726);
function d(e) {
    let { purchaseState: t, currentStep: n, onClose: d } = e,
        [E, f] = (0, s.z)({
            purchaseState: t,
            currentStep: n,
            initialScene: u.fe.Scenes.ENTRY,
            purchaseScene: u.fe.Scenes.STARS,
            errorScene: u.fe.Scenes.ERROR,
            successScene: u.fe.Scenes.SUCCESS
        }),
        C = (0, r.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, l.jsxs)(i.xBx, {
        align: a.Z.Align.START,
        className: c.header,
        separator: !1,
        children: [
            (0, l.jsx)(u.fe, {
                className: c.animation,
                nextScene: E,
                onScenePlay: (e) => f(u.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: C
            }),
            (0, l.jsx)('div', { className: c.headerTitle }),
            (0, l.jsx)(i.olH, {
                onClick: d,
                className: c.closeButton
            })
        ]
    });
}
