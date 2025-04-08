n.d(t, { Z: () => d }), n(388685);
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(607070),
    a = n(600164),
    s = n(122890),
    c = n(110818),
    u = n(523726);
function d(e) {
    let { purchaseState: t, currentStep: n, onClose: d } = e,
        [E, f] = (0, s.z)({
            purchaseState: t,
            currentStep: n,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS
        }),
        C = (0, r.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, l.jsxs)(i.xBx, {
        align: a.Z.Align.START,
        className: u.header,
        separator: !1,
        children: [
            (0, l.jsx)(c.fe, {
                className: u.animation,
                nextScene: E,
                onScenePlay: (e) => f(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: C
            }),
            (0, l.jsx)('div', { className: u.headerTitle }),
            (0, l.jsx)(i.olH, {
                onClick: d,
                className: u.closeButton
            })
        ]
    });
}
