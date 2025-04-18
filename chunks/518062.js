n.d(t, { Z: () => u }), n(388685);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(607070),
    l = n(600164),
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
        p = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, r.jsxs)(s.xBx, {
        align: l.Z.Align.START,
        className: d.header,
        separator: !1,
        children: [
            (0, r.jsx)(c.fe, {
                className: d.animation,
                nextScene: m,
                onScenePlay: (e) => g(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: p
            }),
            (0, r.jsx)('div', { className: d.headerTitle }),
            (0, r.jsx)(s.olH, {
                onClick: u,
                className: d.closeButton
            })
        ]
    });
}
