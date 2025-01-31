t.d(n, { Z: () => p }), t(47120);
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    o = t(607070),
    s = t(600164),
    a = t(122890),
    c = t(110818),
    u = t(346007);
function p(e) {
    let { purchaseState: n, currentStep: t, onClose: p } = e,
        [d, _] = (0, a.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS
        }),
        S = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, l.jsxs)(r.xBx, {
        align: s.Z.Align.START,
        className: u.header,
        separator: !1,
        children: [
            (0, l.jsx)(c.fe, {
                className: u.animation,
                nextScene: d,
                onScenePlay: (e) => _(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: S
            }),
            (0, l.jsx)('div', { className: u.headerTitle }),
            (0, l.jsx)(r.olH, {
                onClick: p,
                className: u.closeButton
            })
        ]
    });
}
