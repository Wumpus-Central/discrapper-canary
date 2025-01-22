t.d(n, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var l = t(200651);
t(192379);
var i = t(442837),
    o = t(481060),
    r = t(607070),
    a = t(600164),
    s = t(122890),
    c = t(110818),
    u = t(346007);
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
        _ = (0, i.e7)([r.Z], () => r.Z.useReducedMotion);
    return (0, l.jsxs)(o.ModalHeader, {
        align: a.Z.Align.START,
        className: u.header,
        separator: !1,
        children: [
            (0, l.jsx)(c.fe, {
                className: u.animation,
                nextScene: p,
                onScenePlay: (e) => f(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: _
            }),
            (0, l.jsx)('div', { className: u.headerTitle }),
            (0, l.jsx)(o.ModalCloseButton, {
                onClick: d,
                className: u.closeButton
            })
        ]
    });
}
