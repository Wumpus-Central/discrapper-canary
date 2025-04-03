t.d(n, { Z: () => _ }), t(47120);
var o = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    a = t(607070),
    l = t(600164),
    c = t(122890),
    s = t(110818),
    p = t(523726);
function _(e) {
    let { purchaseState: n, currentStep: t, onClose: _ } = e,
        [u, d] = (0, c.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: s.fe.Scenes.ENTRY,
            purchaseScene: s.fe.Scenes.STARS,
            errorScene: s.fe.Scenes.ERROR,
            successScene: s.fe.Scenes.SUCCESS
        }),
        f = (0, r.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, o.jsxs)(i.xBx, {
        align: l.Z.Align.START,
        className: p.header,
        separator: !1,
        children: [
            (0, o.jsx)(s.fe, {
                className: p.animation,
                nextScene: u,
                onScenePlay: (e) => d(s.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: f
            }),
            (0, o.jsx)('div', { className: p.headerTitle }),
            (0, o.jsx)(i.olH, {
                onClick: _,
                className: p.closeButton
            })
        ]
    });
}
