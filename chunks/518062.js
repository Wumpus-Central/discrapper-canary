n.d(t, { Z: () => u }), n(47120);
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(607070),
    a = n(600164),
    o = n(122890),
    c = n(110818),
    d = n(291913);
function u(e) {
    let { purchaseState: t, currentStep: n, onClose: u } = e,
        [h, m] = (0, o.z)({
            purchaseState: t,
            currentStep: n,
            initialScene: c.fe.Scenes.ENTRY,
            purchaseScene: c.fe.Scenes.STARS,
            errorScene: c.fe.Scenes.ERROR,
            successScene: c.fe.Scenes.SUCCESS
        }),
        g = (0, s.e7)([r.Z], () => r.Z.useReducedMotion);
    return (0, i.jsxs)(l.xBx, {
        align: a.Z.Align.START,
        className: d.header,
        separator: !1,
        children: [
            (0, i.jsx)(c.fe, {
                className: d.animation,
                nextScene: h,
                onScenePlay: (e) => m(c.fe.getNextScene(e)),
                pauseWhileUnfocused: !1,
                pause: g
            }),
            (0, i.jsx)('div', { className: d.headerTitle }),
            (0, i.jsx)(l.olH, {
                onClick: u,
                className: d.closeButton
            })
        ]
    });
}
