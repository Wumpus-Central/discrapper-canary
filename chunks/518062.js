n.d(t, { Z: () => u }), n(388685);
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(607070),
    a = n(600164),
    o = n(122890),
    c = n(110818),
    d = n(523726);
function u(e) {
    let { purchaseState: t, currentStep: n, onClose: u } = e,
        [m, g] = (0, o.z)({
            purchaseState: t,
            currentStep: n,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS
        }),
        p = (0, r.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, i.jsxs)(s.xBx, {
        align: a.Z.Align.START,
        className: d.header,
        separator: !1,
        children: [
            (0, i.jsx)(c.fe, {
                className: d.animation,
                nextScene: m,
                onScenePlay: (e) => g(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: p
            }),
            (0, i.jsx)('div', { className: d.headerTitle }),
            (0, i.jsx)(s.olH, {
                onClick: u,
                className: d.closeButton
            })
        ]
    });
}
