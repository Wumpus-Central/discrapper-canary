t.d(n, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var o = t(200651);
t(192379);
var l = t(442837),
    i = t(481060),
    r = t(607070),
    a = t(600164),
    s = t(122890),
    c = t(110818),
    u = t(71464);
function d(e) {
    let { purchaseState: n, currentStep: t, onClose: d } = e,
        [p, f] = (0, s.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS
        }),
        m = (0, l.e7)([r.Z], () => r.Z.useReducedMotion);
    return (0, o.jsxs)(i.ModalHeader, {
        align: a.Z.Align.START,
        className: u.header,
        separator: !1,
        children: [
            (0, o.jsx)(c.fe, {
                className: u.animation,
                nextScene: p,
                onScenePlay: (e) => f(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: m
            }),
            (0, o.jsx)('div', { className: u.headerTitle }),
            (0, o.jsx)(i.ModalCloseButton, {
                onClick: d,
                className: u.closeButton
            })
        ]
    });
}
