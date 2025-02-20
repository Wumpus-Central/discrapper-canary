t.d(n, { Z: () => p }), t(47120);
var r = t(200651);
t(192379);
var l = t(442837),
    i = t(481060),
    o = t(607070),
    s = t(600164),
    a = t(122890),
    c = t(110818),
    u = t(558619);
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
        m = (0, l.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.jsxs)(i.xBx, {
        align: s.Z.Align.START,
        className: u.header,
        separator: !1,
        children: [
            (0, r.jsx)(c.fe, {
                className: u.animation,
                nextScene: d,
                onScenePlay: (e) => _(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: m
            }),
            (0, r.jsx)('div', { className: u.headerTitle }),
            (0, r.jsx)(i.olH, {
                onClick: p,
                className: u.closeButton
            })
        ]
    });
}
