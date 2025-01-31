n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(493773),
    a = n(626135),
    s = n(144145),
    o = n(555927),
    c = n(738762),
    d = n(244080),
    u = n(247530),
    h = n(260889),
    m = n(981631),
    p = n(674563),
    g = n(388032);
function _(e) {
    let { party: t, close: n, onSelect: _ } = e,
        f = (0, c.Z)(t),
        E = (0, h.Z)(t),
        I = (0, u.Z)(t),
        C = (0, d.Z)(t),
        v = (0, s.Z)(t),
        N = (0, o.Z)(t);
    return (
        (0, r.Z)(() => {
            let e = t.currentActivities
                .filter((e) => {
                    var t, n;
                    return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === p.wW.GAME;
                })
                .map((e) => e.game.name);
            a.default.track(m.rMx.OPEN_POPOUT, {
                type: 'Now Playing Card Popout',
                games_detected: e
            });
        }),
        (0, i.jsxs)(l.v2r, {
            navId: 'now-playing-menu',
            onClose: n,
            'aria-label': g.intl.string(g.t.ogxXGh),
            onSelect: _,
            children: [
                f,
                (0, i.jsxs)(l.kSQ, {
                    children: [E, I]
                }),
                (0, i.jsx)(l.kSQ, { children: C }),
                (0, i.jsx)(l.kSQ, { children: v }),
                N
            ]
        })
    );
}
