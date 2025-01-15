n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    a = n(607070),
    l = n(600164),
    o = n(122890),
    c = n(110818),
    d = n(346007);
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
        h = (0, s.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, i.jsxs)(r.ModalHeader, {
        align: l.Z.Align.START,
        className: d.header,
        separator: !1,
        children: [
            (0, i.jsx)(c.fe, {
                className: d.animation,
                nextScene: m,
                onScenePlay: (e) => g(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: h
            }),
            (0, i.jsx)('div', { className: d.headerTitle }),
            (0, i.jsx)(r.ModalCloseButton, {
                onClick: u,
                className: d.closeButton
            })
        ]
    });
}
